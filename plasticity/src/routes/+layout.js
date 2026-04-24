import QRCode from 'qrcode';

export const prerender = true;
export const trailingSlash = 'never';

const SITE_ORIGIN = 'https://andygauge.github.io/escaping-the-hard-way';

export async function load({ url }) {
  // url.pathname already includes the SvelteKit base path (/plasticity) at prerender time.
  // SITE_ORIGIN includes the repo prefix so QR codes resolve correctly on GitHub Pages.
  const pageUrl = SITE_ORIGIN + url.pathname;
  const qrSvg = await QRCode.toString(pageUrl, {
    type: 'svg',
    margin: 0,
    color: { dark: '#14110d', light: '#0000' }
  });
  return { pageUrl, qrSvg };
}
