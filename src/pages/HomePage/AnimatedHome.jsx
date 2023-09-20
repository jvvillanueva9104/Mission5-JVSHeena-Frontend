import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";

const AnimatedHome = () => {
  return (
    <Link to="/shop" className="">
      <img className="w-full h-[100vh]" src="blob.png" alt="" />
      <h1 className="absolute top-[15rem] left-[20rem] text-[#f0f0f0] text-[7rem]">
        <TypeWriterEffect
          textStyle={{ fontFamily: "Skranji" }}
          startDelay={100}
          cursorColor="#e1833c"
          text="Team J.O.S.S"
          typeSpeed={100}
        />
      </h1>
      <span className="absolute top-[28rem] left-[25rem]">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Skranji",
            color: "#f0f0f0",
            fontWeight: 500,
            fontSize: "5em",
          }}
          startDelay={2000}
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

      <span className="absolute top-[40rem] left-[30rem] text-[#f0f0f0] text-[4rem]">
        <TypeWriterEffect
          textStyle={{ fontFamily: "Skranji" }}
          startDelay={21000}
          cursorColor="#e1833c"
          text="We're awesome! We know. 😎"
          typeSpeed={100}
        />
      </span>
    </Link>
  );
};

export default AnimatedHome;
