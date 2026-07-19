export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white">
        <h1 className="text-3xl font-bold text-blue-700">TaskFlow</h1>

        <div className="space-x-4">
          <button className="rounded-lg border border-blue-600 px-5 py-2 text-blue-600 hover:bg-blue-50">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center">
        <h2 className="mb-6 text-5xl font-extrabold text-gray-900">
          Manage Your Tasks Smarter
        </h2>

        <p className="mb-10 max-w-2xl text-lg text-gray-600">
          Organize your daily work, track progress, set priorities, and never
          miss a deadline with TaskFlow.
        </p>

        <div className="space-x-4">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-blue-50">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-blue-600">
            📋 Task Management
          </h3>
          <p className="text-gray-600">
            Create, edit, delete, and organize tasks with ease.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-green-600">
            ⭐ Priorities
          </h3>
          <p className="text-gray-600">
            Assign High, Medium, and Low priorities to stay organized.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-purple-600">
            📅 Deadlines
          </h3>
          <p className="text-gray-600">
            Keep track of due dates and complete tasks on time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-white">
        <p>© 2026 TaskFlow. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}