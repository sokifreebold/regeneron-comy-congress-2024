import { gsap } from 'gsap';

export function simpleFade(selector: string) {
	const element = document.querySelector(selector);
	if (!element) {
		return;
	}

	gsap.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power1.out' });
}

export function fadeIn(selector: string) {
	const element = document.querySelector(selector);
	if (!element) {
		return;
	}

	gsap.fromTo(
		element,
		{ opacity: 0, x: -10, y: 10 },
		{ opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power1.out' },
	);
}

export function fadeInRipple(element: Element, tl: gsap.core.Timeline, ripple: number) {
	tl.fromTo(
		element,
		{ opacity: 0, x: -10, y: 10 },
		{ opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power1.out' },
		ripple,
	);
}
