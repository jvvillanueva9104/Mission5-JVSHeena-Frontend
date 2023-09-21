import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AnimatedHome = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/shop" className="">
        <img className="w-full h-[100vh]" src="blob.png" alt="" />
        <h1 className="absolute top-[12rem] left-[17rem] text-[#f0f0f0] text-[10rem] xl:left-[13rem] 2xl:left-[17rem] xl:text-[7rem] 2xl:text-[10rem]">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Skranji" }}
            startDelay={100}
            cursorColor="#e1833c"
            text="Team J.O.S.S."
            typeSpeed={100}
          />
        </h1>
        <span className="absolute top-[28rem] left-[25rem] xl:left-[20rem] 2xl:left-[25rem] xl:text-[3rem] 2xl:text-[5rem]">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Skranji",
              color: "#f0f0f0",
              fontWeight: 500,
            }}
            startDelay={2500}
            cursorColor="#e1833c"
            multiText={[
              "JV - Software Developer!🤪",
              "Olivia - UI/UX Designer!😁",
              "Sheena - Software Developer!😉",
              "Seoha - UI/UX Designer!😊",
            ]}
            multiTextDelay={1000}
            typeSpeed={90}
            multiTextLoop
          />
        </span>

        <span className="absolute top-[40rem] left-[30rem] text-[#f0f0f0] text-[4rem] xl:text-[3rem] 2xl:text-[4rem]">
          <TypeWriterEffect
            textStyle={{ fontFamily: "Skranji" }}
            startDelay={23000}
            cursorColor="#e1833c"
            text="We're awesome! We know. 😎"
            typeSpeed={100}
          />
        </span>
      </Link>
    </motion.div>
  );
};

export default AnimatedHome;
