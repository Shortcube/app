import type { OpenNextConfig } from "open-next/types/open-next";

const edgeOverride = {
  wrapper: "cloudflare",
  converter: "edge",
} as const;

const config: OpenNextConfig = {
  buildCommand: "npm run build:next",
  default: {
    runtime: "node",
    override: edgeOverride,
  },
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

export default config;
