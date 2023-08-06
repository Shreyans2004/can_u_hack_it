'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import { TypingText } from '../components';

const Hero = () => (
  <section className={`${styles.yPaddings} flex justify-center`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
    >
      <TypingText
        title="BitByte - The Programming Club, IIITDMJ Presents"
        textStyles="text-md sm:text-lg md:text-[24px]"
      />
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          CodeRumble
        </motion.h1>
      </div>

      <motion.button
        type="button"
        variants={textVariant(1.3)}
        className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
      >
        <span className="font-normal text-[16px] text-white">Register</span>
      </motion.button>
    </motion.div>
  </section>
);

export default Hero;
