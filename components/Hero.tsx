export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

        <div className="inline-block rounded-full border border-blue-500 px-4 py-2 text-sm text-blue-400">
          🚀 AI Productivity Companion
        </div>

        <h1 className="mt-8 text-6xl font-extrabold leading-tight md:text-8xl">
          FlowShield AI
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
          An AI assistant that protects your focus,
          detects context switching,
          predicts missed deadlines,
          and helps you recover your productivity before it's too late.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-600 px-8 py-4 transition hover:border-blue-500">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}