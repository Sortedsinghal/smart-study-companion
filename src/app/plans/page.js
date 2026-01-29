import { getCMSClient } from "@/lib/sleekcms";
import Link from "next/link";

export default async function PlansPage() {
  const client = await getCMSClient();
  const plans = client.getPages("/plans");

  return (
    <main className="py-12">
      <h1 className="text-4xl font-bold mb-8">
        Study Plans
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <Link
            key={plan._path}
            href={plan._path}
            className="
              rounded-xl
              border border-white/10
              bg-white/5
              p-6
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/10
              hover:-translate-y-1
              hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]
            "
          >
            <h2 className="text-xl font-semibold">
              {plan.title}
            </h2>

            {plan.duration && (
              <span
                className="
                  mt-3 inline-block
                  rounded-full
                  bg-green-500/10
                  px-3 py-1
                  text-xs
                  font-medium
                  text-green-400
                "
              >
                {plan.duration}
              </span>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
