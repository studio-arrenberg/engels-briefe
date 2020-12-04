const constants = {
  animation: {
    interaction: {
      whiletap: 1.07,
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
    // for the brief content
    brief: {
      initial: { scale: 1, y: 500, opacity: 0 },
      enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: { delay: 0.5, duration: 1.5, ease: [0.48, 0.15, 0.25, 0.96] },
      },
      exit: {
        opacity: 0,
        scale: 0.9,
        // y: -30,
      },
    },
    // for menu
    menu: {
      initial: { scale: 0.95, y: 0, opacity: 0 },
      enter: {
        scale: 1,
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: [0.48, 0.15, 0.25, 0.96],
        },
      },
      exit: {
        opacity: 0,
        scale: 1,
      },
    },
    section_exit: {
      exit: { transition: { staggerChildren: 0.01 }, opacity: 0 },
      enter: { transition: { staggerChildren: 0.1 } },
    },
    landing_children: {
      initial: { opacity: 0 },
      exit: { opacity: 0 },
      enter: { opacity: 1 },
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
  timer: {
    idle: 45000,
  },
};

export default constants;
