export default {
  siteUrl: "https://mahrabhossain.me",
  generateRobotsTxt: true,
  sitemapSize: 50,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
    additionalSitemaps: [
      'https://mahrabhossain.me/sitemap.xml',
    ],
  },
};
