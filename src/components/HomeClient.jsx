"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

export default function HomeClient({ siteConfig, notes }) {
  const [query, setQuery] = useState("");

  const filteredNotes = useMemo(() => {
    if (!query) return notes.slice(0, 3);

    return notes.filter((note) =>
      `${note.title} ${note.subject || ""}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, notes]);

  return (
    <main className="py-20 text-white">

        {/* HERO */}
        <section className="relative mb-20">
          <div className="absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

          <h1 className="relative text-5xl md:text-6xl font-extrabold">
            {siteConfig?.sitetitle}
          </h1>

          <p className="relative mt-6 max-w-2xl text-xl text-gray-300">
            {siteConfig?.tagline}
          </p>
        </section>

        {/* SEARCH */}
        <section className="mb-20">
          <div className="max-w-2xl mx-auto">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search notes by topic or subject..."
              className="
                w-full rounded-xl border border-white/10 bg-white/5
                px-5 py-4 text-white placeholder:text-gray-400
                backdrop-blur-md focus:outline-none
                focus:ring-2 focus:ring-blue-500/50
              "
            />
          </div>
        </section>

        {/* STUDY NOTES */}
        <section>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Study Notes</h2>

            <Link
              href="/notes"
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              View all →
            </Link>
          </div>

          {filteredNotes.length === 0 ? (
            <p className="text-gray-400">No matching notes found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNotes.map((note) => (
                <Link
                  key={note._path}
                  href={note._path}
                  className="
                    rounded-xl border border-white/10 bg-white/5 p-6
                    backdrop-blur-md transition-all duration-300
                    hover:bg-white/10 hover:-translate-y-1
                    hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
                  "
                >
                  <h3 className="text-xl font-semibold">{note.title}</h3>

                  {note.subject && (
                    <span className="mt-3 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
                      {note.subject}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </section>
    </main>
  );
}
