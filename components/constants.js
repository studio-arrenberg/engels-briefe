export const postVariants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { staggerChildren: .3, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
      transition: {staggerChildren: 1.1, duration: 2.2, ease: [0.48, 0.15, 0.25, 0.96],   }
    }
  };