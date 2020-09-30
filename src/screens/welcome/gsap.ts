import { gsap } from 'gsap/all';

export const gsapStart = () => {
  gsap.timeline()
    .from("._description, ._target, ._targetRightContainer, ._contact", {opacity: 0, ease: "back", duration: 2.5})
    .from("#one", {opacity: 0, y: 10, duration: 0.2}, "-=1")
    .from("#two", {opacity: 0, y: 10, duration: 0.2}, ">")
    .from("#three", {opacity: 0, y: 10, duration: 0.2}, ">")
    .from("._separator", {scale: 0, duration: 0.8, height: 6}, "<");
}