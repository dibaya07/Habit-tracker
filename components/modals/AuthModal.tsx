'use client';

import React, { useState } from 'react';
import { X, Mail, ShieldCheck, CheckCircle2, ArrowRight, RotateCw, AlertCircle } from 'lucide-react';
import { useHabitTracker } from '../../lib/context/HabitTrackerContext';

export const AuthModal: React.FC = () => {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    initiateEmailVerification,
    verifyEmailCode,
    user,
  } = useHabitTracker();

  const [step, setStep] = useState<'enter_email' | 'enter_code' | 'success'>('enter_email');
  const [emailInput, setEmailInput] = useState('dibyajbaruah88@gmail.com');
  const [codeInput, setCodeInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);

  if (!isAuthModalOpen) return null;

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    setErrorMessage('');
    setIsSending(true);
    await initiateEmailVerification(emailInput);
    setIsSending(false);
    setStep('enter_code');
    setResendCountdown(30);

    // Countdown timer simulation
    const interval = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codeInput.trim()) {
      setErrorMessage('Please enter the 6-digit verification code.');
      return;
    }

    const verified = verifyEmailCode(codeInput.trim());
    if (verified) {
      setErrorMessage('');
      setStep('success');
      setTimeout(() => {
        setIsAuthModalOpen(false);
        setStep('enter_email');
      }, 1800);
    } else {
      setErrorMessage('Invalid verification code. Please check your email or try 842109.');
    }
  };

  const handleResend = async () => {
    if (resendCountdown > 0) return;
    setErrorMessage('');
    await initiateEmailVerification(emailInput);
    setResendCountdown(30);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl bg-white dark:bg-[#091f17] border border-slate-200 dark:border-emerald-800/60 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-slate-200 dark:border-emerald-900/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-[#2fe196] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest text-emerald-700 dark:text-[#2fe196] uppercase block">
                ACCOUNT VERIFICATION
              </span>
              <h3 className="font-editorial text-xl font-normal text-slate-900 dark:text-white">
                {step === 'enter_email'
                  ? 'Sign In to Habitora'
                  : step === 'enter_code'
                  ? 'Verify Your Email'
                  : 'Successfully Verified!'}
              </h3>
            </div>
          </div>
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="p-2 rounded-full text-slate-400 hover:text-slate-900 dark:text-emerald-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-emerald-900/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Email Input */}
        {step === 'enter_email' && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <p className="text-xs text-slate-600 dark:text-emerald-100/75 leading-relaxed">
              Enter your email to verify account ownership, enable cloud syncing, and unlock detailed habit analytics.
            </p>

            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 dark:text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-[#2fe196]"
                />
              </div>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-500 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 rounded-full text-xs font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md transition-all active:scale-[0.98]"
            >
              {isSending ? 'Sending Code...' : 'Send 6-Digit Code →'}
            </button>
          </form>
        )}

        {/* Step 2: Code Input */}
        {step === 'enter_code' && (
          <form onSubmit={handleVerify} className="space-y-4">
            <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-emerald-950/60 border border-slate-200 dark:border-emerald-900/40 text-xs text-slate-700 dark:text-emerald-200">
              <span>Verification code sent to </span>
              <strong className="text-slate-900 dark:text-white">{emailInput}</strong>
              <button
                type="button"
                onClick={() => setStep('enter_email')}
                className="text-xs text-emerald-600 dark:text-[#2fe196] underline ml-2 hover:text-emerald-800 dark:hover:text-white font-medium"
              >
                Change
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 uppercase tracking-wider">
                  Enter 6-Digit Code
                </label>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">Demo Code: 842109</span>
              </div>
              <input
                type="text"
                maxLength={6}
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="e.g. 842109"
                className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 rounded-xl bg-slate-50 dark:bg-emerald-950/70 border border-slate-300 dark:border-emerald-800/50 text-slate-900 dark:text-white focus:outline-none focus:border-[#2fe196]"
                autoFocus
              />
            </div>

            {errorMessage && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2 text-rose-500 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-full text-xs font-bold bg-[#2fe196] text-[#071912] hover:bg-[#28cf88] shadow-md transition-all active:scale-[0.98]"
            >
              Verify Code & Unlock
            </button>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={handleResend}
                disabled={resendCountdown > 0}
                className="text-xs text-slate-500 dark:text-emerald-300 hover:text-slate-900 dark:hover:text-white disabled:opacity-40"
              >
                {resendCountdown > 0
                  ? `Resend code in ${resendCountdown}s`
                  : 'Didn’t receive it? Resend Code'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 'success' && (
          <div className="py-8 text-center space-y-3 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-[#2fe196] border border-emerald-500/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Email Verified!</h4>
            <p className="text-xs text-slate-600 dark:text-emerald-200">
              Welcome aboard. Cloud syncing and your verified badge have been activated.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
