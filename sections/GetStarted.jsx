'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { whyToParticipate } from '../constants';
import { StartSteps, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className={`flex-1 ${styles.flexCenter}`}>
        <img
          src="/Illustration - Asset 43.svg"
          alt="get-started"
          className="w-[80%] h-[50%] object-contain"
        />
      </div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TitleText title={<>Why to Participate?</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {whyToParticipate.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
