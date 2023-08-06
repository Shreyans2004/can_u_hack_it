'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center gap-8`}
    >
      <TitleText title={<>Sponspors</>} textStyles="text-center" />
      {/* To be revealed soon... */}
      <motion.p className="text-white text-[20px]">
        To be revealed soon...
      </motion.p>
    </motion.div>
  </section>
);

export default Insights;
