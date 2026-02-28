import de from "./locales/de.json";
import en from "./locales/en.json";

const translations = { de, en };
const DEFAULT_LOCALE = "de";

function normalizeLocale(locale) {
  if (!locale || typeof locale !== "string") return null;

  const cleaned = locale.trim().toLowerCase();
  if (!cleaned) return null;

  if (translations[cleaned]) return cleaned;

  const languageCode = cleaned.split(/[-_]/)[0];
  if (translations[languageCode]) return languageCode;

  return null;
}

function detectLocale() {
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

let currentLocale = detectLocale();

export function getLocale() {
  return currentLocale;
}

export function setLocale(locale) {
  const normalized = normalizeLocale(locale);
  if (normalized) currentLocale = normalized;
  return currentLocale;
}

export function t(key, locale = currentLocale) {
  const normalized = normalizeLocale(locale) ?? DEFAULT_LOCALE;
  const value = translations[normalized]?.[key];
  return typeof value === "string" ? value : key;
}

export function formatMessage(message, params = {}) {
  if (typeof message !== "string") return String(message ?? "");

  return message.replace(/\{(\w+)\}/g, (match, paramName) => {
    const value = params[paramName];
    return value == null ? match : String(value);
  });
}

export function tf(key, params = {}, locale = currentLocale) {
  return formatMessage(t(key, locale), params);
}

export function formatMessageParts(message, params = {}) {
  if (typeof message !== "string") return [String(message ?? "")];

  const parts = [];
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

    if (Object.hasOwn(params, paramName)) {
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

export function tr(key, params = {}, locale = currentLocale) {
  return formatMessageParts(t(key, locale), params);
}

export function th(key, params = {}, locale = currentLocale) {
  const message = tf(key, params, locale);
  return unsafeHTML(message);
}
