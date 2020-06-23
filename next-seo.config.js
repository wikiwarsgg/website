export const ROOT_URL = "https://wikiwars.gg";
export const SITE_NAME = "Wikiwars";

export default {
  titleTemplate: `%s - ${SITE_NAME}`,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: ROOT_URL,
    site_name: SITE_NAME,
  },
  twitter: {
    handle: "@wikiwarsgg",
    site: "@wikiwarsgg",
    cardType: "summary_large_image",
  },
};
