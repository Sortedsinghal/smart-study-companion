import { getCMSClient } from "@/lib/sleekcms";
import Link from "next/link";

export default async function TipsPage() {
  const client = await getCMSClient();
  const tips = client.getPages("/tips");

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold mb-8">
        Study Tips
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tips.map((tip) => (
          <Link
            key={tip._path}
            href={tip._path}
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
              {tip.title}
            </h2>

            {tip.category && (
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
                {tip.category}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
