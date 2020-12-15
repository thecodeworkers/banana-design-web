import { TimelineMax } from 'gsap/all';

export const  gsapStart = () => {
  
  const timeline = new TimelineMax({ paused: true });

  timeline
    .play()
    .to("._hola", 0.2, { x: 1, opacity: 0},  0.4)
}
