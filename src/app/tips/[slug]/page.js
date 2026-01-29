import { getCMSClient } from "@/lib/sleekcms";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: slug.replace(/-/g, " ") + " | Smart Study Companion",
  };
}

export default async function TipPage({ params }) {
  const { slug } = await params;

  if (!slug) notFound();

  const client = await getCMSClient();
  const tip = client.getPage(`/tips/${slug}`);

  if (!tip) notFound();

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold">
        {tip.title}
      </h1>

      {tip.category && (
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
          {tip.category}
        </span>
      )}

      <article
        className="
          prose prose-invert
          mt-10
          max-w-none
        "
        dangerouslySetInnerHTML={{ __html: tip.tip }}
      />
    </main>
  );
}
