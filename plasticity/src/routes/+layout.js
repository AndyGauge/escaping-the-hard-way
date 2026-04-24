import QRCode from 'qrcode';

export const prerender = true;
export const trailingSlash = 'never';

const SITE_ORIGIN = 'https://andygauge.github.io';

export async function load({ url }) {
  // url.pathname already includes the SvelteKit base path (/agi) at prerender time.
  const pageUrl = SITE_ORIGIN + url.pathname;
  const qrSvg = await QRCode.toString(pageUrl, {
    type: 'svg',
    margin: 0,
    color: { dark: '#14110d', light: '#0000' }
  });
  return { pageUrl, qrSvg };
}
