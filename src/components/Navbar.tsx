import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-2xl font-bold">TaskFlow</h1>

        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}