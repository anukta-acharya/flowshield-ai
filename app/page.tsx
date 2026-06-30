"use client";

import { useState } from "react";
import { Brain, Target, Clock, Zap, Sparkles } from "lucide-react";

export default function Home() {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);

  async function analyze() {
    if (!task) return;

    setLoading(true);

    const res = await fetch("/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });

    const result = await res.json();

    setData(result);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <section className="mx-auto max-w-7xl p-10">

        <div className="text-center">

          <h1 className="text-6xl font-black">
            FlowShield AI
          </h1>

          <p className="mt-5 text-xl text-gray-400">
            AI that protects your focus before you miss a deadline.
          </p>

        </div>

        <div className="mt-14">

          <textarea
            value={task}
            onChange={(e) => setTask(e.target.value)}
            rows={6}
            placeholder="Example: Complete my hackathon project by tomorrow..."
            className="w-full rounded-2xl border border-white/10 bg-white/5 p-6 outline-none"
          />

          <button
            onClick={analyze}
            className="mt-6 rounded-xl bg-blue-600 px-8 py-4 text-lg hover:bg-blue-500"
          >
            Analyze with Gemini
          </button>

        </div>

        {loading && (
          <div className="mt-10 rounded-2xl bg-white/5 p-8">
            <p>🧠 Calculating Flow Score...</p>
            <p>📅 Predicting deadline success...</p>
            <p>⚡ Generating recovery plan...</p>
            <p>🤖 Thinking...</p>
          </div>
        )}

        {data && !loading && (
          <>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Card
                title="Flow Score"
                value={`${data.flowScore}%`}
                icon={<Zap />}
              />

              <Card
                title="Deadline Success"
                value={`${data.deadlineProbability}%`}
                icon={<Target />}
              />

              <Card
                title="Estimated Time"
                value={data.estimatedTime}
                icon={<Clock />}
              />

              <Card
                title="Priority"
                value={data.priority}
                icon={<Sparkles />}
              />

            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

              <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">

                <Brain />

                Task Breakdown

              </h2>

              <div className="space-y-3">

                {data.taskBreakdown?.map((item: string, index: number) => (
                  <div
                    key={index}
                    className="rounded-xl bg-black/20 p-4"
                  >
                    ✅ {item}
                  </div>
                ))}

              </div>

            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">

              <InfoCard
                title="Biggest Distraction"
                text={data.biggestDistraction}
              />

              <InfoCard
                title="Next Action"
                text={data.nextAction}
              />

              <InfoCard
                title="Recovery Tip"
                text={data.recoveryTip}
              />

            </div>

            <div className="mt-8 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8">

              <h2 className="text-3xl font-bold">
                Motivation
              </h2>

              <p className="mt-4 text-lg">
                {data.motivation}
              </p>

            </div>

          </>
        )}

      </section>

    </main>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="text-blue-400">{icon}</div>

      <h3 className="mt-5 text-gray-400">
        {title}
      </h3>

      <p className="mt-3 text-4xl font-bold">
        {value}
      </p>

    </div>
  );
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <h3 className="mb-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-300">
        {text}
      </p>

    </div>
  );
}