<script>
  import { onNavigate } from '$app/navigation';
  import '../app.css';

  let { children } = $props();

  onNavigate((navigation) => {
    if (typeof document === 'undefined' || !document.startViewTransition) return;

    const fromIdx = orderFromUrl(navigation.from?.url?.pathname);
    const toIdx = orderFromUrl(navigation.to?.url?.pathname);
    const back = fromIdx !== null && toIdx !== null && toIdx < fromIdx;
    document.documentElement.dataset.direction = back ? 'back' : 'forward';

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  function orderFromUrl(path) {
    if (!path) return null;
    if (path === '/' || path === '') return -1;
    const m = path.match(/\/(\d{2}(?:\.\d{2})?)/);
    if (!m) return null;
    const n = m[1];
    if (!n.includes('.')) return parseInt(n, 10) * 100;
    const [a, b] = n.split('.').map(Number);
    return a * 100 + b;
  }
</script>

{@render children()}
