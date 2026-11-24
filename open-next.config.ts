// Cloudflare Workers adapter config (https://opennext.js.org/cloudflare).
// Defaults are fine: pages are static or rendered per request; nothing needs an incremental cache yet.
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig();
