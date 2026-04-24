<script>
  import { goto, afterNavigate } from '$app/navigation';
  import { base } from '$app/paths';
  import { next, prev, flat } from '$lib/outline.js';
  import { createPager } from '$lib/gestures.js';
  import { md } from '$lib/md.js';
  import Timeline from '$lib/Timeline.svelte';

  let { data } = $props();
  let section = $derived(data.section);
  let nextSection = $derived(next(section.num));
  let prevSection = $derived(prev(section.num));
  let position = $derived(section.chronoIndex + 1);
  let total = flat.length;

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);
  let bodyEl = $state();

  afterNavigate(() => {
    bodyEl?.scrollTo({ top: 0, behavior: 'instant' });
  });

  const pager = createPager({
    onNext: () => {
      if (nextSection) goto(base + '/' + nextSection.num);
    },
    onPrev: () => {
      if (prevSection) goto(base + '/' + prevSection.num);
      else goto(base + '/');
    },
    setOffset: (v) => {
      dragOffset = v;
    }
  });

  function key(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (nextSection) goto(base + '/' + nextSection.num);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (prevSection) goto(base + '/' + prevSection.num);
      else goto(base + '/');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: 180, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: -180, behavior: 'smooth' });
    } else if (e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: bodyEl.clientHeight * 0.85, behavior: 'smooth' });
    } else if (e.key === 'PageUp') {
      e.preventDefault();
      bodyEl?.scrollBy({ top: -bodyEl.clientHeight * 0.85, behavior: 'smooth' });
    } else if (e.key === 'Escape') {
      goto(base + '/contents');
    }
  }

  let hintProgress = $derived(Math.min(1, Math.abs(dragOffset) / 70));
</script>

<svelte:window onkeydown={key} />

<main
  class="page"
  class:dragging
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <header class="top">
    <a class="mark vt-title" href="{base}/">AGI</a>
    <nav class="top-nav">
      <a href="{base}/contents">Contents</a>
    </nav>
  </header>

  <div class="body" bind:this={bodyEl}>
    <div class="meta vt-partlabel">
      <span class="theme">{section.theme}</span>
      <span class="year">{section.year}</span>
    </div>

    <div class="number">{section.num}</div>

    <h1 class="title">{section.title}</h1>

    <p class="gesture">{@html md(section.gesture)}</p>

    {#if section.quote}
      <blockquote class="quote">
        <p>{@html md(section.quote)}</p>
      </blockquote>
    {/if}

    {#if section.body}
      <p class="body-text">{@html md(section.body)}</p>
    {/if}

    {#if section.citation || section.link}
      <footer class="source">
        {#if section.citation}
          <span class="cite">{@html md(section.citation)}</span>
        {/if}
        {#if section.link}
          {@const isInternal = section.link.startsWith('/')}
          <a class="source-link" href={isInternal ? base + section.link : section.link} target={isInternal ? '_self' : '_blank'} rel="noopener noreferrer">
            {isInternal ? 'See contents →' : 'Source →'}
          </a>
        {/if}
      </footer>
    {/if}

    {#if section.eli5}
      <aside class="eli5">
        <div class="eli5-label">In plain terms</div>
        <p class="eli5-body">{@html md(section.eli5)}</p>
      </aside>
    {/if}

    {#if section.narrator}
      <aside class="narrator">
        <div class="narrator-label">The thread</div>
        <p class="narrator-body">{@html md(section.narrator)}</p>
      </aside>
    {/if}

    <aside class="qr-share">
      <div class="qr-label">Scan to open this page</div>
      <div class="qr-svg">{@html data.qrSvg}</div>
      <div class="qr-url">{data.pageUrl}</div>
    </aside>
  </div>

  <footer class="bottom">
    <Timeline currentNum={section.num} />

    <div class="nav">
      {#if prevSection}
        <a href="{base}/{prevSection.num}" class="nav-link">
          <span class="arrow">←</span>
          <span class="nav-meta">
            <span class="nav-num">{prevSection.num} · {prevSection.year}</span>
            <span class="nav-title">{prevSection.title}</span>
          </span>
        </a>
      {:else}
        <a href="{base}/" class="nav-link">
          <span class="arrow">←</span>
          <span class="nav-meta">
            <span class="nav-num">Cover</span>
          </span>
        </a>
      {/if}

      <div class="progress">
        <span>{position}</span>
        <span class="divider">/</span>
        <span>{total}</span>
      </div>

      {#if nextSection}
        <a href="{base}/{nextSection.num}" class="nav-link right">
          <span class="nav-meta">
            <span class="nav-num">{nextSection.num} · {nextSection.year}</span>
            <span class="nav-title">{nextSection.title}</span>
          </span>
          <span class="arrow">→</span>
        </a>
      {:else}
        <span class="nav-link right disabled">
          <span class="nav-meta">
            <span class="nav-num">End</span>
          </span>
        </span>
      {/if}
    </div>

    <div class="drag-hint" style:opacity={hintProgress}>
      <span class="bar" style:transform="scaleX({hintProgress})"></span>
    </div>
  </footer>
</main>

<style>
  .page {
    height: 100vh;
    padding: 3vw 5vw;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 2vw;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
  }

  .page.dragging { transition: none; }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
  }

  .mark {
    font-family: var(--serif);
    font-style: italic;
    font-size: 1rem;
    letter-spacing: 0;
    text-transform: none;
    color: var(--ink);
  }

  .top-nav {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
  .top-nav a {
    border-bottom: 1px solid transparent;
    transition: border-color 200ms ease, color 200ms ease;
  }
  .top-nav a:hover {
    border-color: var(--muted);
    color: var(--ink);
  }

  .body {
    display: grid;
    grid-template-columns: minmax(180px, 1fr) 3fr;
    gap: 4vw;
    align-items: start;
    padding: 2vw 0;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  .meta {
    font-family: var(--sans);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    border-top: 1px solid var(--rule);
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .theme {
    color: var(--accent);
    font-weight: 500;
  }

  .year {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: 1.6rem;
    text-transform: none;
    letter-spacing: -0.01em;
    color: var(--ink);
    margin-top: 0.3rem;
  }

  .number {
    grid-column: 1;
    font-family: var(--serif);
    font-weight: 200;
    font-size: clamp(4rem, 9vw, 9rem);
    line-height: 0.9;
    letter-spacing: -0.03em;
    color: var(--muted);
    font-variant-numeric: lining-nums tabular-nums;
    margin-top: 0.5rem;
  }

  .title {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-style: italic;
    font-size: clamp(2.4rem, 6vw, 6rem);
    line-height: 0.97;
    letter-spacing: -0.025em;
    color: var(--ink);
    max-width: 18ch;
  }

  .gesture {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(1.1rem, 1.5vw, 1.4rem);
    line-height: 1.4;
    color: var(--ink);
    max-width: 40ch;
    margin-top: 1.6rem;
    border-left: 2px solid var(--accent);
    padding-left: 1.3rem;
  }

  .quote {
    grid-column: 2;
    position: relative;
    max-width: 48ch;
    margin-top: 1.6rem;
    padding: 0.8rem 1.3rem 0.2rem 2.4rem;
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
    line-height: 1.5;
    color: var(--ink);
  }

  .quote::before {
    content: '\201C';
    position: absolute;
    left: 0.3rem;
    top: -0.3rem;
    font-family: var(--serif);
    font-style: normal;
    font-weight: 200;
    font-size: 3.2rem;
    line-height: 1;
    color: var(--accent);
  }

  .quote :global(em) {
    font-style: normal;
  }

  .body-text {
    grid-column: 2;
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.55;
    color: var(--ink);
    max-width: 52ch;
    margin-top: 1.2rem;
    padding-left: 1.3rem;
  }

  .source {
    grid-column: 2;
    margin-top: 1.4rem;
    padding-left: 1.3rem;
    padding-top: 0.8rem;
    border-top: 1px dotted var(--rule);
    max-width: 52ch;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .cite {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.82rem;
    color: var(--muted);
    line-height: 1.4;
  }

  .source-link {
    font-family: var(--sans);
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--accent);
    border-bottom: 1px solid transparent;
    white-space: nowrap;
    transition: border-color 180ms ease;
  }

  .source-link:hover {
    border-color: var(--accent);
  }

  .eli5 {
    grid-column: 2;
    margin-top: 2rem;
    max-width: 52ch;
    padding: 1.2rem 1.3rem 1.2rem 1.3rem;
    background: rgba(178, 58, 40, 0.04);
    border-left: 2px solid var(--accent);
  }

  .eli5-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--accent);
    margin-bottom: 0.6rem;
  }

  .eli5-body {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(0.95rem, 1.05vw, 1.05rem);
    line-height: 1.55;
    color: var(--ink);
  }

  .narrator {
    grid-column: 2;
    margin-top: 2rem;
    max-width: 52ch;
    padding-top: 1.2rem;
    border-top: 1px solid var(--ink);
  }

  .narrator-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    color: var(--ink);
    margin-bottom: 0.9rem;
  }

  .narrator-body {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1rem, 1.15vw, 1.15rem);
    line-height: 1.5;
    color: var(--ink);
  }

  .narrator-body :global(em) {
    font-style: normal;
  }

  .qr-share {
    grid-column: 2;
    margin-top: 2.4rem;
    padding-top: 1.4rem;
    border-top: 1px dotted var(--rule);
    max-width: 52ch;
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
    font-variant-numeric: tabular-nums;
    word-break: break-all;
  }

  .bottom { font-family: var(--sans); }

  .nav {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 2rem;
    border-top: 1px solid var(--rule);
    padding-top: 1.2rem;
    margin-top: 1rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--muted);
    transition: color 180ms ease;
  }

  .nav-link:hover { color: var(--ink); }
  .nav-link.disabled { opacity: 0.35; }

  .nav-link.right {
    justify-self: end;
    text-align: right;
  }

  .arrow {
    font-family: var(--serif);
    font-size: 1.4rem;
  }

  .nav-meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .nav-num {
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
  }

  .nav-title {
    font-family: var(--serif);
    font-style: italic;
    font-size: 0.95rem;
    text-transform: none;
    letter-spacing: 0;
    color: var(--ink);
  }

  .progress {
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    gap: 0.4rem;
    align-items: baseline;
  }

  .progress .divider { color: var(--rule); }

  .drag-hint {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    pointer-events: none;
    transition: opacity 140ms ease;
  }

  .drag-hint .bar {
    display: block;
    height: 100%;
    background: var(--accent);
    transform-origin: center;
    transition: transform 80ms linear;
  }

  @media (max-width: 720px) {
    .body {
      grid-template-columns: 1fr;
    }
    .number,
    .title,
    .gesture,
    .quote,
    .body-text,
    .source,
    .eli5,
    .narrator,
    .qr-share {
      grid-column: 1;
    }
    .gesture { padding-left: 1rem; }
    .body-text { padding-left: 1rem; }
    .quote { padding-left: 2.4rem; }
    .source { padding-left: 1rem; }
    .eli5 { max-width: none; }
    .narrator { max-width: none; }
    .qr-share { max-width: none; }
  }
</style>
