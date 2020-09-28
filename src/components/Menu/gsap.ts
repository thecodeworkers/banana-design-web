import { TimelineMax } from 'gsap/all';

export const  gsapStart = () => {
  
  const timeline = new TimelineMax({ paused: true });

  timeline
    .play()
    .to("._whiteBodyText", 0.2, { x: 0, opacity: 1 },  0.4)
  /*   .to("._blackBodyFooter", 0.2, { width:'100%', opacity: 1 },  0.4) */
}
