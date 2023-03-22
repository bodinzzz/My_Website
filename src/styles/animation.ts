export const homeWelcomeAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const aboutMeAnimation = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export const experienceContainerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

export const experienceItemAnimation = {
  hidden: { x: -10, y: 20, opacity: 0 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
export const projectContainerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

export const projectItemAnimation = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
