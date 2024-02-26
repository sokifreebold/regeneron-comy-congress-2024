import { gsap } from 'gsap';

export function fadeIn(element: Element) {
	gsap.to(element, { opacity: 1, duration: 0.25 });
}
