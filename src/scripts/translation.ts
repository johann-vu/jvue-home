import { unsafeHTML } from "lit/directives/unsafe-html.js";
import de from "./locales/de.json";
import en from "./locales/en.json";

type TranslationMap = Record<string, string>;
type Locale = "de" | "en";
type RichParamValue = string | number | boolean | null | undefined | unknown;
type Params = Record<string, RichParamValue>;

const translations: Record<Locale, TranslationMap> = { de, en };
const DEFAULT_LOCALE: Locale = "de";

function normalizeLocale(locale: string | null | undefined): Locale | null {
  if (!locale || typeof locale !== "string") return null;

  const cleaned = locale.trim().toLowerCase();
  if (!cleaned) return null;

  if (cleaned in translations) return cleaned as Locale;

  const languageCode = cleaned.split(/[-_]/)[0];
  if (languageCode in translations) return languageCode as Locale;

  return null;
}

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;

  const preferredLocales = Array.isArray(navigator.languages)
    ? [...navigator.languages]
    : [];

  preferredLocales.push(navigator.language);

  for (const locale of preferredLocales) {
    const normalized = normalizeLocale(locale);
    if (normalized) return normalized;
  }

  return DEFAULT_LOCALE;
}

let currentLocale: Locale = detectLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: string): Locale {
  const normalized = normalizeLocale(locale);
  if (normalized) currentLocale = normalized;
  return currentLocale;
}

export function t(key: string, locale: string = currentLocale): string {
  const normalized = normalizeLocale(locale) ?? DEFAULT_LOCALE;
  const value = translations[normalized]?.[key];
  return typeof value === "string" ? value : key;
}

export function formatMessage(message: unknown, params: Params = {}): string {
  if (typeof message !== "string") return String(message ?? "");

  return message.replace(/\{(\w+)\}/g, (match: string, paramName: string) => {
    const value = params[paramName];
    return value == null ? match : String(value);
  });
}

export function tf(
  key: string,
  params: Params = {},
  locale: string = currentLocale,
): string {
  return formatMessage(t(key, locale), params);
}

export function formatMessageParts(message: unknown, params: Params = {}): unknown[] {
  if (typeof message !== "string") return [String(message ?? "")];

  const parts: unknown[] = [];
  const regex = /\{(\w+)\}/g;
  let cursor = 0;
  let match = regex.exec(message);

  while (match) {
    const fullMatch = match[0];
    const paramName = match[1];
    const matchStart = match.index;

    if (matchStart > cursor) {
      parts.push(message.slice(cursor, matchStart));
    }

    if (Object.prototype.hasOwnProperty.call(params, paramName)) {
      parts.push(params[paramName]);
    } else {
      parts.push(fullMatch);
    }

    cursor = matchStart + fullMatch.length;
    match = regex.exec(message);
  }

  if (cursor < message.length) {
    parts.push(message.slice(cursor));
  }

  return parts;
}

export function tr(
  key: string,
  params: Params = {},
  locale: string = currentLocale,
): unknown[] {
  return formatMessageParts(t(key, locale), params);
}

export function th(key: string, params: Params = {}, locale: string = currentLocale) {
  const message = tf(key, params, locale);
  return unsafeHTML(message);
}
