'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-1');

  return (
    <section className={`${styles.paddings} flex justify-center`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto w-10/12 flex flex-col`}
      >
        <TitleText title={<>Events to explore</>} textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row lg:justify-center flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
