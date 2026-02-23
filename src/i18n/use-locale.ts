import { useLingui } from "@lingui/react";
import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";
import { STORED_LOCALE_KEY } from "./constants";
import { Locales } from "./types";

export const useLocale = () => {
  const { i18n } = useLingui();
  const [, setStoredLocale] = useLocalStorage<Locales>(
    STORED_LOCALE_KEY,
    "en-US",
  );

  const toggleLocale = useCallback(() => {
    const newLocale = i18n.locale === "en-US" ? "pt-BR" : "en-US";
    document.documentElement.lang = newLocale;
    setStoredLocale(newLocale);
    i18n.activate(newLocale);
  }, [i18n, setStoredLocale]);

  return { locale: i18n.locale as Locales, toggleLocale };
};
