import { getCMSClient } from "@/lib/sleekcms";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: slug.replace(/-/g, " ") + " | Smart Study Companion",
  };
}

export default async function NotePage({ params }) {
  const { slug } = await params;

  const client = await getCMSClient();
  const note = client.getPage(`/notes/${slug}`);

  if (!note) notFound();

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold">
        {note.title}
      </h1>

      {note.subject && (
        <span
          className="
            mt-4 inline-block
            rounded-full
            bg-blue-500/10
            px-4 py-1
            text-sm
            font-medium
            text-blue-400
          "
        >
          {note.subject}
        </span>
      )}

      <div
        className="
          prose prose-invert
          mt-10
          max-w-none
        "
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
    </main>
  );
}
