const constants = {

  animation : {
  post: {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
    }
  },
  other: {
    // none (exsample)
  },
  section_exit: {
    exit: { transition: { staggerChildren: 0.2 } }, enter: { transition: { staggerChildren: 0.1 } }
  }
}

};



// const postVariants = {
//   initial: { scale: 0.96, y: 30, opacity: 0 },
//   enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
//   exit: {
//     opacity: 0,
//   }
// };

export default constants