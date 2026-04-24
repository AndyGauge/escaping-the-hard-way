<script>
  import { base } from '$app/paths';
  import { themes, flat } from '$lib/outline.js';

  let { data } = $props();

  let firstYear = flat[0].year;
  let lastYear = flat[flat.length - 1].year;
</script>

<main class="contents">
  <header>
    <a href="{base}/" class="mark vt-title">AGI</a>
    <nav class="breadcrumbs">
      <span class="current">Contents</span>
    </nav>
  </header>

  <p class="sub-label">Chronological · {firstYear}–{lastYear} · {flat.length} entries</p>

  <section class="grid">
    {#each themes as t}
      <article class="theme">
        <h2 class="theme-title">{t.theme}</h2>
        <ul>
          {#each t.sections as s}
            <li>
              <a href="{base}/{s.num}">
                <span class="s-num">{s.num}</span>
                <span class="s-year">{s.year}</span>
                <span class="s-title">{s.title}</span>
              </a>
            </li>
          {/each}
        </ul>
      </article>
    {/each}
  </section>

  <aside class="qr-share">
    <div class="qr-label">Scan to open this page</div>
    <div class="qr-svg">{@html data.qrSvg}</div>
    <div class="qr-url">{data.pageUrl}</div>
  </aside>
</main>

<style>
  .contents {
    height: 100vh;
    padding: 3vw 5vw;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 3vw;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    border-bottom: 1px solid var(--rule);
    padding-bottom: 1rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .breadcrumbs .current { color: var(--ink); }

  .sub-label {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 1rem;
    color: var(--muted);
    margin-top: 0.5rem;
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--ink);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 3vw 4vw;
  }

  .theme-title {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 1.4rem;
    letter-spacing: -0.01em;
    color: var(--accent);
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid var(--rule);
  }

  ul { list-style: none; }

  li a {
    display: grid;
    grid-template-columns: 2.2rem 3rem 1fr;
    gap: 0.8rem;
    align-items: baseline;
    padding: 0.5rem 0;
    border-bottom: 1px solid transparent;
    transition: border-color 180ms ease, color 180ms ease;
    color: var(--ink);
  }

  li a:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .s-num {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .s-year {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.9rem;
    color: var(--muted);
    font-variant-numeric: tabular-nums;
  }

  .s-title {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 1.05rem;
  }

  .qr-share {
    margin-top: 2rem;
    padding-top: 1.4rem;
    border-top: 1px dotted var(--rule);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
  }

  .qr-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--muted);
  }

  .qr-svg {
    width: 112px;
    height: 112px;
    padding: 4px;
  }

  .qr-svg :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }

  .qr-url {
    font-family: var(--sans);
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.04em;
    word-break: break-all;
  }
</style>
