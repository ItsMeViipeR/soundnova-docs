import React from "react";
import { useRouter } from "next/router";
import translations from "./translations.json";

const LOCALE = "fr";

const config = {
  logo: <span>SoundNova - Documentation</span>,
  project: {
    link: "https://github.com/ItsMeViipeR/soundnova",
  },
  docsRepositoryBase: "https://github.com/ItsMeViipeR/soundnova-docs",
  primaryHue: {
    dark: 200,
    light: 360,
  },
  toc: {
    float: true,
    title: () => {
      const { locale = LOCALE } = useRouter();

      return translations.toc[locale];
    },
  },
  editLink: {
    text: () => {
      const { locale = LOCALE } = useRouter();

      return translations.editLink[locale];
    },
  },
  feedback: {
    content: () => {
      const { locale = LOCALE } = useRouter();

      return translations.feedback[locale];
    },
  },

  gitTimestamp: function GitTimestamp({ timestamp }: { timestamp: Date }) {
    const { locale = LOCALE } = useRouter();
    const last_update = translations.last_update;

    return (
      <>
        {last_update[locale]}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  useNextSeoProps: () => ({ titleTemplate: "%s – SoundNova – Documentation" }),
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "fr", text: "Français" },
    { locale: "es", text: "Español" },
    { locale: "it", text: "Italiano" },
  ],
};

export default config;
