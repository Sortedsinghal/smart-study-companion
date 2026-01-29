import { createSyncClient } from "@sleekcms/client";

export async function getCMSClient() {
  return await createSyncClient({
    siteToken: process.env.SLEEKCMS_SITE_TOKEN,
  });
}
