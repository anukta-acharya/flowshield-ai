import {
  Activity,
  BrainCircuit,
  CalendarClock,
  Clock3,
  Target,
  TriangleAlert,
} from "lucide-react";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      {/* Header */}

      <header className="flex items-center justify-between border-b border-white/10 bg-black/20 px-10 py-6 backdrop-blur-xl">

        <div>

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-400">
            Welcome back, keep protecting your focus.
          </p>

        </div>

        <button className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-500">
          Start Focus Session
        </button>

      </header>

      {/* Cards */}

      <section className="grid gap-6 p-10 md:grid-cols-2 lg:grid-cols-4">

        <DashboardCard
          title="Flow Score"
          value="92%"
          color="text-green-400"
          icon={<Activity />}
        />

        <DashboardCard
          title="Deadline Success"
          value="89%"
          color="text-cyan-400"
          icon={<Target />}
        />

        <DashboardCard
          title="Focus Time"
          value="5h 20m"
          color="text-purple-400"
          icon={<Clock3 />}
        />

        <DashboardCard
          title="Interruptions"
          value="4"
          color="text-red-400"
          icon={<TriangleAlert />}
        />

      </section>

      {/* AI Assistant */}

      <section className="grid gap-8 px-10 lg:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="flex items-center gap-2 text-2xl font-bold">

            <BrainCircuit />

            AI Insight

          </h2>

          <div className="mt-6 space-y-4">

            <Insight text="Your Flow Score improved 12% this week." />

            <Insight text="Most distractions happen between 3 PM and 4 PM." />

            <Insight text="Scheduling coding before meetings increases productivity by 24%." />

            <Insight text="Today's deadline risk is LOW." />

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="flex items-center gap-2 text-2xl font-bold">

            <CalendarClock />

            Today's Tasks

          </h2>

          <div className="mt-6 space-y-4">

            <Task
              title="Hackathon Project"
              status="In Progress"
            />

            <Task
              title="Prepare Presentation"
              status="Pending"
            />

            <Task
              title="Deploy on Google Cloud"
              status="Pending"
            />

            <Task
              title="Push to GitHub"
              status="Completed"
            />

          </div>

        </div>

      </section>

      {/* Focus Session */}

      <section className="p-10">

        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-10">

          <h2 className="text-3xl font-bold">

            Deep Work Session

          </h2>

          <p className="mt-4 text-gray-300">

            Recommended session:
            90 minutes

          </p>

          <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4">

            Start Session

          </button>

        </div>

      </section>

    </main>
  );
}

function DashboardCard({
  title,
  value,
  color,
  icon,
}: any) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className={color}>{icon}</div>

      <h3 className="mt-5 text-gray-400">{title}</h3>

      <p className="mt-2 text-4xl font-bold">

        {value}

      </p>

    </div>
  );
}

function Insight({ text }: any) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4">
      {text}
    </div>
  );
}

function Task({
  title,
  status,
}: any) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-5">

      <div>

        <h4 className="font-semibold">

          {title}

        </h4>

      </div>

      <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm">

        {status}

      </span>

    </div>
  );
}