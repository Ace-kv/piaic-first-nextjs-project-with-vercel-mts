import Link from "next/link";

function Header() {
  return (
    <div className="flex bg-gray-300 p-3 gap-5">
      <Link href="/" className="text-blue-700">
        Home
      </Link>
      <Link href="/dashboard" className="text-black">Dashboard</Link>
      <Link href="/dashboard/analytics" className="text-black">Analytics</Link>
      <Link href="/about" className="text-black">About</Link>
      <Link href="/dashboard/settings" className="text-black">Settings (client-side)</Link>
    </div>
  );
}

export default Header;


