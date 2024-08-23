import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className=" w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BCA (Bachelor of Computer Application"
            subTitle="GOVT T.R.S. College Rewa(2021 - 2024)"
            result="7/10"
            des="The training provided by College in order to prepare people to work in  IT Sector."
          />
          
          <ResumeCard
            title="Secondary School Education"
            subTitle="Saraswati Higher School Nirala Nagar Rewa (2021)"
            result="73%"
            des="I Passed my higher secondary from saraswati higher school nirala nagar rewa and my help me a lot in passing it."
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education