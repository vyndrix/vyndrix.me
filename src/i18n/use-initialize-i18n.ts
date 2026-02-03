import { i18n } from "@lingui/core";
import { useEffect, useState } from "react";
import { useReadLocalStorage } from "usehooks-ts";
import { STORED_LOCALE_KEY } from "./constants";
import { messages } from "./locales";
import { Locales } from "./types";

i18n.load(messages);

export function useInitializeI18n() {
  const [loading, setLoading] = useState(true);
  const storedLocale = useReadLocalStorage<Locales>(STORED_LOCALE_KEY);

  useEffect(() => {
    const locale = storedLocale || "en-US";
    document.documentElement.lang = locale;
    i18n.activate(locale);
    setLoading(false);
  }, []);

  return { loading, i18n };
}
