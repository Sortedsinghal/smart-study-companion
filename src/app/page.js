import { getCMSClient } from "@/lib/sleekcms";
import HomeClient from "@/components/HomeClient";

export default async function Home() {
  const client = await getCMSClient();

  const siteConfig = client.getEntry("site_config");
  const notes = client.getPages("/notes");

  return (
    <HomeClient
      siteConfig={siteConfig}
      notes={notes}
    />
  );
}
