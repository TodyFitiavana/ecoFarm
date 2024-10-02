const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 0, rotate: 180, scale: 0 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

export { containerVariants, itemVariants };
