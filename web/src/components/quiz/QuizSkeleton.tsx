export default function QuizSkeleton() {
  return (
    <div className="w-full max-w-[620px] flex flex-col gap-6 justify-center mx-auto min-h-[540px]">
      <div className="flex items-center justify-between px-1 text-on-surface-variant">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span className="font-label-md text-label-md tracking-wider uppercase text-on-surface-variant">
            Sincronización en curso
          </span>
        </div>
      </div>

      <div className="relative w-full bg-surface-container rounded-xl shadow-2xl overflow-hidden flex flex-col">
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="w-full h-1 bg-surface-container-highest overflow-hidden relative">
          <div className="absolute inset-0 bg-primary/40 animate-pulse" />
        </div>

        <div className="w-full p-6 md:p-8 flex flex-col gap-6 relative z-10">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <div className="h-5 w-28 rounded-md bg-surface-container-highest animate-pulse" />
              <div className="h-4 w-12 rounded bg-surface-container-high animate-pulse" />
            </div>
            <div className="flex items-center gap-1 bg-surface-container-lowest px-2 py-1 rounded-md">
              <div className="w-3.5 h-3.5 rounded-full bg-surface-container-highest animate-pulse" />
              <div className="h-4 w-14 rounded bg-surface-container-highest animate-pulse" />
            </div>
          </div>

          <div className="w-full h-32 rounded-lg bg-surface-container-lowest relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface-variant/20 to-transparent animate-pulse" />
            <div className="flex flex-col items-center gap-1 opacity-40">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest animate-pulse" />
              <div className="h-3 w-32 rounded bg-surface-container-highest animate-pulse" />
            </div>
            <div className="absolute bottom-2 right-3">
              <div className="h-3 w-16 rounded bg-surface-container-high animate-pulse" />
            </div>
          </div>

          <div className="flex flex-col gap-1 pt-1">
            <div className="h-[18px] w-[92%] rounded-md bg-surface-container-highest animate-pulse" />
            <div className="h-[18px] w-[74%] rounded-md bg-surface-container-highest animate-pulse" />
            <div className="h-[18px] w-[45%] rounded-md bg-surface-container-highest/60 animate-pulse" />
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <div className="w-full p-4 rounded-xl bg-surface-container-low flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-high/60 animate-pulse" />
              <div className="flex items-center gap-4 w-full">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-surface-container animate-pulse" />
                </div>
                <div className="flex flex-col min-w-0 w-full">
                  <div className="h-3.5 w-[85%] rounded bg-surface-container-highest animate-pulse" />
                  <div className="h-3 w-[40%] rounded bg-surface-container-highest/50 animate-pulse" />
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container-highest/40 flex-shrink-0" />
            </div>

            <div className="w-full p-4 rounded-xl bg-surface-container-low flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-high/60 animate-pulse" />
              <div className="flex items-center gap-4 w-full">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-surface-container animate-pulse" />
                </div>
                <div className="flex flex-col min-w-0 w-full">
                  <div className="h-3.5 w-[94%] rounded bg-surface-container-highest animate-pulse" />
                  <div className="h-3 w-[65%] rounded bg-surface-container-highest/50 animate-pulse" />
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container-highest/40 flex-shrink-0" />
            </div>

            <div className="w-full p-4 rounded-xl bg-surface-container-low flex items-center justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-surface-container-high/60 animate-pulse" />
              <div className="flex items-center gap-4 w-full">
                <div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-surface-container animate-pulse" />
                </div>
                <div className="flex flex-col min-w-0 w-full">
                  <div className="h-3.5 w-[72%] rounded bg-surface-container-highest animate-pulse" />
                  <div className="h-3 w-[30%] rounded bg-surface-container-highest/50 animate-pulse" />
                </div>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container-highest/40 flex-shrink-0" />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between mt-1">
            <div className="h-10 w-28 rounded-lg bg-surface-container-high/60 animate-pulse" />
            <div className="flex items-center gap-2">
              <div className="h-10 w-24 rounded-lg bg-surface-container-high/40 animate-pulse" />
              <div className="h-10 w-32 rounded-lg bg-primary-container/30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
