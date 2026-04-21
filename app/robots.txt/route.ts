import { siteConfig } from "@/content/site-config";

export const dynamic = "force-dynamic";
export const revalidate = 0;

function buildRobotsTxt() {
  const sharedAllowRules = ["Allow: /"];
  const sharedDisallowRules = [
    "Disallow: /api/",
    "Disallow: /admin/",
    "Disallow: /*?*",
    "Disallow: /search",
  ];
  const blockedAgents = [
    "AhrefsBot",
    "SemrushBot",
    "MJ12bot",
    "DotBot",
    "BLEXBot",
    "rogerbot",
    "ia_archiver",
    "MauiBot",
    "Xenu",
    "Bytespider",
    "CCBot",
    "FacebookBot",
  ];
  const aiDiscoveryAgents = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "ClaudeBot",
    "Claude-Web",
    "PerplexityBot",
    "Google-Extended",
    "Applebot-Extended",
  ];

  const sections = [
    {
      agents: ["Googlebot", "Google-InspectionTool", "Bingbot", "*"],
      rules: [...sharedAllowRules, ...sharedDisallowRules],
    },
    ...aiDiscoveryAgents.map((agent) => ({
      agents: [agent],
      rules: [...sharedAllowRules, ...sharedDisallowRules],
    })),
    ...blockedAgents.map((agent) => ({
      agents: [agent],
      rules: ["Disallow: /"],
    })),
  ];

  const lines = sections.flatMap(({ agents, rules }) => [
    ...agents.map((agent) => `User-agent: ${agent}`),
    ...rules,
    "",
  ]);

  lines.push(`Sitemap: ${siteConfig.url}/sitemap.xml`);

  return `${lines.join("\n")}\n`;
}

export function GET() {
  return new Response(buildRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
