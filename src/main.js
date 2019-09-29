// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import VueScrollTo from "vue-scrollto";
import VueFuse from "vue-fuse";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import "@fortawesome/fontawesome-svg-core/styles.css";

import DefaultLayout from "~/layouts/Default.vue";

config.autoAddCss = false;
library.add(faGithub, faTwitter, faFacebook, faInstagram, faEnvelope);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome", FontAwesomeIcon);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease"
  });

  Vue.use(VueFuse);

  head.meta.push(
    {
      name: "keywords",
      content: "Wikiwars,Wikipedia,Events,Paris,France"
    },
    {
      name: "description",
      content: "Des événements décalés, fun et compétitifs sur... Wikipédia!"
    },
    {
      name: "author",
      content: "Andre Madarang"
    },
    {
      name: "twitter:card",
      content: "summary"
    },
    {
      name: "twitter:title",
      content: "Wikiwars"
    },
    {
      name: "twitter:description",
      content: "Des événements décalés, fun et compétitifs sur... Wikipédia!"
    },
    {
      name: "twitter:site",
      content: "@wikiwarsgg"
    },
    {
      name: "og:title",
      content: "Wikiwars"
    },
    {
      name: "og:description",
      content: "Des événements décalés, fun et compétitifs sur... Wikipédia!"
    },
    {
      name: "og:url",
      content: "https://wikiwars.gg"
    },
    {
      name: "og:site_name",
      content: "Wikiwars"
    },
    {
      name: "og:locale",
      content: "fr_FR"
    },
    {
      name: "fb:app_id",
      content: "365853070100963"
    },
    {
      name: "og:type",
      content: "website"
    }
  );

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Nunito+Sans:400,700"
  });
}
