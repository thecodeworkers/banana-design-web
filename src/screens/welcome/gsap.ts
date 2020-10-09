import { gsap } from 'gsap/all';

export const gsapStart = () => {
  gsap.timeline()
		.from("._description, ._target, ._targetRightContainer, ._contact", {opacity: 0, ease: "back", duration: 2.5})
		.from("#one", {opacity: 0, y: 10, duration: 0.2}, "-=1")
		.from("#two", {opacity: 0, y: 10, duration: 0.2}, ">")
		.from("#three", {opacity: 0, y: 10, duration: 0.2}, ">")
		.from("._separator", {scale: 0, duration: 0.8, height: 6}, "<");
}

export const gsapRetract = () => {
	gsap.timeline()
	.to("#one", {opacity: 0, y: 10, duration: 0.1})
	.to("._separator", { width: '35%', duration: 0.4, height: 1.5})
	.to("#two", {opacity: 0, y: 10, duration: 0.1})
	.to("#three", {opacity: 0, y: 10, duration: 0.1})
	.to("._description, ._targetRightContainer, ._contactText", { opacity: 0, duration: 0.2 })
	.to("._intermediate", { duration: 0.4, y: -90 })
	.to("._intermediate", { duration: 0.5, y: 230 })
	.to("#text-1", { opacity: 1, duration: 0.05 }, "-=0.2")
	.to("#text-2", { opacity: 1, duration: 0.05 }, ">")
	.to("#text-3", { opacity: 1, duration: 0.05 }, ">")
	.to("#text-4", { opacity: 1, duration: 0.05 }, ">")
	.to("#text-5", { opacity: 1, duration: 0.05 }, ">")
	.to("#text-6", { opacity: 1, duration: 0.05 }, ">")
}
