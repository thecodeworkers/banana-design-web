import { gsap } from 'gsap/all';

export const gsapMenuStart = () => {

  const timeline = gsap.timeline({ paused: true });

  timeline
    .play()
		.to("._sectionBlack", 1,{ x: '0%'}, 0.4)
		.to("._breadCrumbtextOne", 0.5, { x: '0%', opacity: 1 }, 2.4)
    .to("._blackFooterLine", 1.5, { width: '100%', }, 1.2)
    .to("._blackFooterHover", 1.5, { width: '0%', }, 1.2)
    .to("._blackHeaderHover", 1.5, { width: '0%', }, 1.2)
    .to("._blackBodyFooterHover", 0.6, { width: '0%'}, 1.2)
		.to("._blackBody", 0.1, { opacity:1, }, 2.5)

		.eventCallback("onComplete", () => console.log("abierto")
		);
}

export const gsapMenuEnd = () => {

  const timeline = gsap.timeline({ paused: true });

  timeline
    .play()
		 .to("._sectionBlack", 1, { x: '100%'}, 0.4)
		 .to("._breadCrumbtextOne", 0.1, { opacity: 0, x: 30 }, 0.5)
		 .to("._blackFooterLine", 1.5, { width: '0%', }, 1.2)
    .to("._blackFooterHover", 1.5, { width: '100%', }, 1.2)
    .to("._blackHeaderHover", 1.5, { width: '100%', }, 1.2)
    .to("._blackBodyFooterHover", 0.6, { width: '100%'}, 1.2)
		.to("._blackBody", 0.1, { opacity:0, }, 2.5)

		 .eventCallback("onComplete", () => console.log("cerrado"));
}
