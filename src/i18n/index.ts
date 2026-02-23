import { i18n } from "@lingui/core";
import { STORED_LOCALE_KEY } from "./constants";
import { messages } from "./locales";
import { Locales } from "./types";

//#region Init

const raw = !!globalThis.window
  ? localStorage.getItem(STORED_LOCALE_KEY)
  : null;

const storedLocale = (
  raw ? (JSON.parse(raw) as Locales) : "en-US"
) satisfies Locales;

i18n.load(messages);
i18n.activate(storedLocale);

if (!!globalThis.document) document.documentElement.lang = storedLocale;

//#endregion

export { i18n };
