export default function ProfilePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-purple-600">
          My Profile
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-gray-500">Name</p>
            <p className="text-xl font-semibold">John Doe</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-xl font-semibold">
              johndoe@example.com
            </p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>
            <p className="text-xl font-semibold">User</p>
          </div>

          <button className="mt-6 w-full rounded-lg bg-red-600 py-3 text-white hover:bg-red-700">
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}