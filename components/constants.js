const constants = {
  animation: {
    interaction: {
      whiletap: 1.07
    },
    // for posts
    post: {
      initial: { scale: 0.95, y: 30, opacity: 0 },
      enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
      },
      exit: {
        opacity: 0,
        scale: 1,
      },
    },
    // for menu 
    menu: {
      initial: { scale: 0.95, y: 0, opacity: 0 },
      enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
      },
      exit: {
        opacity: 0,
        scale: 1,
      },
    },
    other: {
      // none (example)
    },
    section_exit: {
      exit: { transition: { staggerChildren: 0.01 } },
      enter: { transition: { staggerChildren: 0.1 } },
    },
    // timeline
    timeline: {
      initial: { opacity: 0 },
      enter: {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
      },
      exit: {
        opacity: 0,
      },
    },
  },
};

export default constants;
