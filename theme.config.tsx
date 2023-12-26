import React from "react";
import { useRouter } from "next/router";

const LOCALE = "fr";

const config = {
  logo: <span>Archipel Project</span>,
  project: {
    link: "https://github.com/archipel-project",
  },
  docsRepositoryBase: "https://github.com/archipel-project/docs",
  primaryHue: {
    dark: 40,
    light: 40,
  },
  toc: {
    float: true,
    title: () => {
      const { locale = LOCALE } = useRouter();

      switch (locale) {
        case "fr":
          return "Sur cette page";
        case "en-US":
          return "On this page";
        case "es":
          return "En esta página";
      }
    },
  },
  footer: {
    text: "MIT 2023 © Archipel Project",
  },
  editLink: {
    text: "Modifier cette page",
  },
  notFound: {
    content: "Soumettre un ticket pour signaler un lien cassé →",
  },

  gitTimestamp: function GitTimestamp({ timestamp }) {
    const { locale = LOCALE } = useRouter();
    return (
      <>
        Dernière mise à jours le{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  useNextSeoProps: () => ({ titleTemplate: "%s – Archipel Project" }),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#222129" />
      <meta httpEquiv="Content-Language" content="fr" />
      <meta
        name="description"
        content="Archipel Project: documentation et base de connaissance du projet"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta
        property="og:title"
        content="Archipel Project: documentation et base de connaissance du projet"
      />
      <meta
        property="og:description"
        content="Archipel Project: documentation et base de connaissance du projet"
      />
      <meta name="apple-mobile-web-app-title" content="Archipel Project" />
    </>
  ),
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "fr", text: "Français" },
    { locale: "es", text: "Español" },
  ],
};

export default config;
