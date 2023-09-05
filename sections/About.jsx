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
        <span className="font-extrabold text-white">Can you hack it?</span> is
        the internal hackathon of IIIT Jabalpur taking place on
        <span className="font-extrabold text-white">
          {' '}
          10th day of September
        </span>{' '}
        and is organised by{' '}
        <span className="font-extrabold text-white">
          {' '}
          The Programming Club (TPC)
        </span>{' '}
        run by students of our institute. This will bring together developers
        and problem solvers from diverse backgrounds to collaborate on
        innovative projects. The event offers a unique and challenging learning
        experience for participants, providing them the opportunity to work with
        the latest technologies and expand their skills.
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
