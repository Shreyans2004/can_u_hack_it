'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Can you hack it ?
      </h2>
      <img
        src="/tpclogo.png"
        className="w-[120px] h-[120px] -top-4 md:w-[160px] md:h-[160px] absolute right-4 md:-top-7"
      />
    </div>
  </motion.nav>
);

export default Navbar;
