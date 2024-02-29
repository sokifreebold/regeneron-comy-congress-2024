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
		{ opacity: 0, y: 30 },
		{ opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' },
	);
}

export function fadeInRipple(element: Element, tl: gsap.core.Timeline, ripple: number) {
	tl.fromTo(
		element,
		{ opacity: 0, y: 50 },
		{ opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' },
		ripple,
	);
}

export function applyElementsRippleFade(selector: string) {
	const elements = document.querySelectorAll(selector);
	if (!(elements && elements.length > 0)) {
		return;
	}

	const tl = gsap.timeline();
	elements.forEach((item, index) => {
		fadeInRipple(item, tl, index * 0.1);
	});
}
