export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-green-600">
          Login
        </h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border p-3"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
          >
            Login
          </button>
        </form>

        <p className="mt-5 text-center">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}