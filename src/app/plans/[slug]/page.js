import { notFound } from "next/navigation";
import { getCMSClient } from "@/lib/sleekcms";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  return {
    title: slug.replace(/-/g, " ") + " | Smart Study Companion",
  };
}

export default async function PlanPage({ params }) {
  const { slug } = await params;

  if (!slug) notFound();

  const client = await getCMSClient();
  const plans = client.getPages("/plans");

  const plan = plans.find(
    (p) => p._path === `/plans/${slug}`
  );

  if (!plan) notFound();

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold">
        {plan.title}
      </h1>

      {plan.duration && (
        <span
          className="
            mt-4 inline-block
            rounded-full
            bg-green-500/10
            px-4 py-1
            text-sm
            font-medium
            text-green-400
          "
        >
          {plan.duration}
        </span>
      )}

      <div
        className="
          prose prose-invert
          mt-8
          max-w-none
        "
        dangerouslySetInnerHTML={{ __html: plan.details }}
      />
    </main>
  );
}
