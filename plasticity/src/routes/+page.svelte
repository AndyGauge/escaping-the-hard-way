<script>
  import { goto } from '$app/navigation';
  import { base } from '$app/paths';
  import { flat } from '$lib/outline.js';
  import { createPager } from '$lib/gestures.js';

  let { data } = $props();

  let dragOffset = $state(0);
  let dragging = $derived(dragOffset !== 0);

  function start() {
    goto(base + '/' + flat[0].num);
  }

  const pager = createPager({
    onNext: start,
    onPrev: () => {},
    setOffset: (v) => {
      dragOffset = Math.min(0, v);
    }
  });

  function key(e) {
    if (e.key === 'Enter' || e.key === 'ArrowRight' || e.key === ' ') start();
  }
</script>

<svelte:window onkeydown={key} />

<main
  class="cover"
  class:dragging
  onwheel={pager.onWheel}
  ontouchstart={pager.onTouchStart}
  ontouchmove={pager.onTouchMove}
  ontouchend={pager.onTouchEnd}
  ontouchcancel={pager.onTouchCancel}
  style:transform="translateX({dragOffset}px)"
>
  <div class="meta top">
    <span>Andrew Gauger</span>
    <span>MMXXVI</span>
  </div>

  <div class="title-block">
    <div class="kicker">A research book on</div>
    <h1 class="vt-title">
      <span>Plas</span><span class="italic">t</span><span>icity</span>
    </h1>
    <div class="sub">The context window is the synapse.<br />Intelligence lives in the junction.</div>
  </div>

  <div class="meta bottom">
    <button onclick={start}>Begin&nbsp;→</button>
    <div class="qr-inline">
      <div class="qr-svg">{@html data.qrSvg}</div>
      <div class="qr-meta">
        <div class="qr-label">Scan to open</div>
        <div class="qr-url">{data.pageUrl}</div>
      </div>
    </div>
    <span class="hint">Enter, arrow, swipe, or scroll</span>
  </div>
</main>

<style>
  .cover {
    height: 100vh;
    padding: 5vw 7vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    transition: transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1);
    touch-action: pan-y;
    will-change: transform;
  }

  .cover.dragging { transition: none; }

  .meta {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title-block {
    align-self: center;
    max-width: 1100px;
  }

  .kicker {
    font-family: var(--sans);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  h1 {
    font-family: var(--serif);
    font-weight: 300;
    font-size: clamp(4.5rem, 14vw, 14rem);
    line-height: 0.9;
    letter-spacing: -0.035em;
    color: var(--ink);
    display: flex;
    gap: 0.01em;
  }

  h1 .italic {
    font-style: italic;
    color: var(--accent);
    font-weight: 200;
  }

  .sub {
    font-family: var(--serif);
    font-style: italic;
    font-weight: 300;
    font-size: clamp(1.1rem, 1.6vw, 1.5rem);
    color: var(--muted);
    margin-top: 2.5rem;
    max-width: 40ch;
    line-height: 1.35;
  }

  button {
    font-family: var(--sans);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.24em;
    padding: 1rem 1.6rem;
    background: var(--ink);
    color: var(--bg);
    transition: background 200ms ease;
  }

  button:hover {
    background: var(--accent);
  }

  .hint {
    font-family: var(--sans);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .qr-inline {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .qr-svg {
    width: 64px;
    height: 64px;
  }

  .qr-svg :global(svg) {
    width: 100%;
    height: 100%;
    display: block;
  }

  .qr-meta {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .qr-label {
    font-family: var(--sans);
    font-size: 0.62rem;
    text-transform: uppercase;
    letter-spacing: 0.28em;
    color: var(--muted);
  }

  .qr-url {
    font-family: var(--sans);
    font-size: 0.68rem;
    color: var(--muted);
    letter-spacing: 0.04em;
  }

  @media (max-width: 720px) {
    .qr-inline {
      display: none;
    }
  }
</style>
