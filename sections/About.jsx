'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 1, 1)}
        className="mt-[8px] font-normal px-10 sm:text-[26px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">CodeRumble</span> is a new
        the ultimate event for aspiring programmers to experience the
        exhilarating world of competitive programming. As a mock{' '}
        <span className="font-extrabold text-white">ICPC Regional Contest</span>
        , we bring you a stimulating challenge that will push your coding skills
        to the limit. Unlock your{' '}
        <span className="font-extrabold text-white">
          problem-solving potential
        </span>{' '}
        , tackle challenging algorithms, and rise to the top! Be a part of the
        coding extravaganza -{' '}
        <span className="font-extrabold text-white">CodeRumble</span> awaits
        your coding prowess!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
