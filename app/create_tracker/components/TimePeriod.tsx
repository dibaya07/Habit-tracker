import React from "react";

interface TimePeriodProp {
  isCustomDuration: boolean;
  setIsCustomDuration: (value: boolean) => void;
  customDaysInput: string;
  setCustomDaysInput: (value: string) => void;
  setSelectedDuration: (value: number) => void;
}

export default function TimePeriod({
  isCustomDuration,
  setIsCustomDuration,
  customDaysInput,
  setCustomDaysInput,
  setSelectedDuration,
}: TimePeriodProp) {
  const handleDays = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    if (e.target.value == "Custom") {
      setIsCustomDuration(true);
    }
    else{
        setSelectedDuration(Number(e.target.value))
    }
  };

  return (
    <div>
      <label className="text-xs font-semibold text-slate-700 dark:text-emerald-200 block mb-2 uppercase tracking-wider">
        Select Time Period
      </label>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
        {/* {SITE_CONFIG.durationPresets.map((preset) => (
                <button
                  key={preset.days}
                  type="button"
                  onClick={() => {
                    setSelectedDuration(preset.days);
                    setIsCustomDuration(false);
                  }}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    !isCustomDuration && selectedDuration === preset.days
                      ? 'border-[#2fe196] bg-emerald-50 dark:bg-[#2fe196]/15 text-emerald-900 dark:text-white font-bold'
                      : 'border-slate-200 dark:border-emerald-900/40 bg-slate-50 dark:bg-emerald-950/50 text-slate-700 dark:text-emerald-200 hover:border-emerald-500'
                  }`}
                >
                  <span className="text-sm font-bold block">{preset.days}d</span>
                  <span className="text-[9px] text-slate-500 dark:text-emerald-400/80 block leading-tight">{preset.label}</span>
                </button>
              ))} */}

        <select onChange={(e) => handleDays(e)}>
          <option value="21">21 Days</option>
          <option value="30">30 Days</option>
          <option value="Custom">Custom Days</option>
        </select>

        {isCustomDuration && (
          <div>
            <label
              htmlFor="customDurationRadio"
              className="text-xs text-slate-700 dark:text-emerald-200 font-medium cursor-pointer"
            >
              Custom number of days:
            </label>
            <input
              type="number"
              min="1"
              max="365"
              value={customDaysInput}
              // disabled={!isCustomDuration}
              onChange={(e) => {
                setCustomDaysInput(e.target.value);
                //   setIsCustomDuration(true);
              }}
              className="w-20 px-2.5 py-1 rounded-lg bg-white dark:bg-emerald-900/40 border border-slate-300 dark:border-emerald-700/50 text-slate-900 dark:text-white text-xs font-mono disabled:opacity-40"
            />
          </div>
        )}
      </div>
      {/* Custom Duration Input */}
      {/* <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-emerald-950/40 border border-slate-200 dark:border-emerald-900/30">
              <input
                type="radio"
                id="customDurationRadio"
                checked={isCustomDuration}
                onChange={() => setIsCustomDuration(true)}
                className="accent-[#2fe196]"
              />
              <label htmlFor="customDurationRadio" className="text-xs text-slate-700 dark:text-emerald-200 font-medium cursor-pointer">
                Custom number of days:
              </label>
              <input
                type="number"
                min="1"
                max="365"
                value={customDaysInput}
                disabled={!isCustomDuration}
                onChange={(e) => {
                  setCustomDaysInput(e.target.value);
                  setIsCustomDuration(true);
                }}
                className="w-20 px-2.5 py-1 rounded-lg bg-white dark:bg-emerald-900/40 border border-slate-300 dark:border-emerald-700/50 text-slate-900 dark:text-white text-xs font-mono disabled:opacity-40"
              />
              <span className="text-xs text-slate-500 dark:text-emerald-400">days (1–365)</span>
            </div> */}
    </div>
  );
}
