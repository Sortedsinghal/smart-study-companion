import { getCMSClient } from "@/lib/sleekcms";
import Link from "next/link";

export default async function NotesPage() {
  const client = await getCMSClient();
  const notes = client.getPages("/notes");

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold mb-8">
        Study Notes
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Link
            key={note._path}
            href={note._path}
            className="
              rounded-xl
              border border-white/10
              bg-white/5
              p-6
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
            "
          >
            <h2 className="text-xl font-semibold">
              {note.title}
            </h2>

            {note.subject && (
              <span
                className="
                  mt-3 inline-block
                  rounded-full
                  bg-blue-500/10
                  px-3 py-1
                  text-xs
                  font-medium
                  text-blue-400
                "
              >
                {note.subject}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
