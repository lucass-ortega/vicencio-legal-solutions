// Tipos globales para la etiqueta de Google Ads (AW-16912464372), que se
// inyecta desde el script de arranque en src/routes/__root.tsx.
// __vicoAds / __vicoAdsLoaded se declaran en src/lib/cookie-consent.ts.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export {};
