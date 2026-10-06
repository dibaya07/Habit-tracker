import type {NextConfig} from 'next';
import fs from 'node:fs';
import path from 'node:path';

// Fix for Next.js 15 ENOENT copyfile issue when exporting _not-found.html to pages/404.html
// in pure App Router projects where .next/server/pages does not exist.
const origCopyFile = fs.promises.copyFile;
fs.promises.copyFile = async function (src, dest, mode) {
  try {
    const destDir = path.dirname(dest.toString());
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
  } catch {}
  return origCopyFile.call(fs.promises, src, dest, mode);
};

const origCopyFileSync = fs.copyFileSync;
fs.copyFileSync = function (src, dest, mode) {
  try {
    const destDir = path.dirname(dest.toString());
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
  } catch {}
  return origCopyFileSync.call(fs, src, dest, mode);
};

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // Ensure .next/server/pages exists so static generation export doesn't fail
    config.plugins.push({
      apply(compiler: {hooks: {afterEmit: {tap: (name: string, fn: () => void) => void}}}) {
        compiler.hooks.afterEmit.tap('EnsurePagesDir', () => {
          try {
            const pagesDir = path.join(process.cwd(), '.next', 'server', 'pages');
            if (!fs.existsSync(pagesDir)) {
              fs.mkdirSync(pagesDir, { recursive: true });
            }
          } catch {}
        });
      },
    });

    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify - file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
