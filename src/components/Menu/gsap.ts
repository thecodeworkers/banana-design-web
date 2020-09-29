import { TimelineMax } from 'gsap/all';

export const gsapStart = () => {

  const timeline = new TimelineMax({ paused: true });

  timeline
    .play()
     .to("._sectionBlack", 1,{ width: '60%'}, 0.4)
    .to("._blackFooterLine", 1.5, { width: '100%', }, 0.6)
    .to("._blackFooterHover", 1.5, { width: '0%', }, 0.6)
    .to("._blackHeaderHover", 1.5, { width: '0%', }, 0.6)
    .to("._blackBodyFooterHover", 0.6, { width: '0%'}, 0.4)
    .to("._blackBody", 0.1, { opacity:1, }, 2)
}

export const gsapEnd = () => {

  const timeline = new TimelineMax({ paused: true });

  timeline
    .play()
     .to("._sectionBlack", 1, {right:'-60%',display:'none'}, 0.4)
}
