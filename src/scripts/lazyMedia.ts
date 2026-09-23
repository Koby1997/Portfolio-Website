// Hydrates `.lazy-media` elements (data-src -> src) as they approach the viewport,
// plays videos while visible and pauses them offscreen to free up CPU/GPU.
export function observeLazyMedia(root: Element | null, rootMargin: string): IntersectionObserver | null {
    const lazyMediaElements = document.querySelectorAll<HTMLImageElement | HTMLVideoElement>('.lazy-media');
    if (lazyMediaElements.length === 0) return null;

    const mediaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const media = entry.target as HTMLImageElement | HTMLVideoElement;
            if (entry.isIntersecting) {
                // Hydrate src if not loaded yet
                if (media.dataset.src) {
                    media.src = media.dataset.src;
                    media.removeAttribute('data-src');
                }
                // Play if it's a video
                if (media instanceof HTMLVideoElement) {
                    const playPromise = media.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => console.log('Video autoplay prevented', error));
                    }
                }
            } else if (media instanceof HTMLVideoElement) {
                // Pause immediately when leaving screen
                media.pause();
            }
        });
    }, { root, rootMargin, threshold: 0 });

    lazyMediaElements.forEach(el => mediaObserver.observe(el));
    return mediaObserver;
}
