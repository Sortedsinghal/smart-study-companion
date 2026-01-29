import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black px-12 py-4 text-white">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold">
          Smart Study
        </Link>

        <Link href="/notes" className="text-gray-300 hover:text-white">
          Notes
        </Link>

        <Link href="/tips" className="text-gray-300 hover:text-white">
          Tips
        </Link>

        <Link href="/plans" className="text-gray-300 hover:text-white">
          Plans
        </Link>
      </div>
    </nav>
  );
}
