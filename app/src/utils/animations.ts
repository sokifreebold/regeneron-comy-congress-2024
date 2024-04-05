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

export function slideIn(selector: string, duration = 0.5) {
	const element = document.querySelector(selector);
	if (!element) {
		return;
	}

	gsap.fromTo(element, { maxHeight: 0 }, { maxHeight: '100vh', duration, ease: 'power1.out' });
}

export function slideOut(selector: string, duration = 0.5, callback: any) {
	const element = document.querySelector(selector);
	if (!element) {
		return;
	}

	gsap.to(element, { maxHeight: 0, duration, ease: 'power1.out', onComplete: callback });
}

export function kiosk3HomeAnimations() {
	const title = document.querySelector('.kiosk3-home-title');
	if (title) {
		gsap.to(title, { opacity: 0, duration: 0.75, ease: 'power1.out' });
	}

	const mainMenu = document.querySelector('.kiosk3-home-menu-button');
	if (mainMenu) {
		gsap.to(mainMenu, { x: 0, opacity: 1, duration: 0.5, ease: 'power1.out' });
	}
}

export function kiosk3HomeAnimationsReverse() {
	const title = document.querySelector('.kiosk3-home-title');
	if (title) {
		gsap.to(title, { opacity: 1, duration: 0.75, ease: 'power1.out' });
	}

	const mainMenu = document.querySelector('.kiosk3-home-menu-button');
	if (mainMenu) {
		gsap.to(mainMenu, { x: -1000, opacity: 0, duration: 0.5, ease: 'power1.out' });
	}
}
