import { defineCloudflareConfig } from "@opennextjs/cloudflare/config";

const baseConfig = defineCloudflareConfig();
const edgeOverride = {
  wrapper: "cloudflare-edge",
  converter: "edge",
  proxyExternalRequest: "fetch",
} as const;

export default {
  ...baseConfig,
  functions: {
    apiStripeCheckout: {
      placement: "global",
      runtime: "edge",
      routes: ["app/api/stripe/checkout/route"],
      patterns: ["/api/stripe/checkout"],
      override: edgeOverride,
    },
    apiStripeWebhook: {
      placement: "global",
      runtime: "edge",
      routes: ["app/api/stripe/webhook/route"],
      patterns: ["/api/stripe/webhook"],
      override: edgeOverride,
    },
    apiDemoSoumission: {
      placement: "global",
      runtime: "edge",
      routes: ["app/api/demo-soumission/route"],
      patterns: ["/api/demo-soumission"],
      override: edgeOverride,
    },
    apiCatchAll: {
      placement: "global",
      runtime: "edge",
      routes: ["app/api/[[...path]]/route"],
      patterns: ["/api/*"],
      override: edgeOverride,
    },
  },
};
