"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Sports Science</span>, I made a career
        switch to programming. I enrolled in a basic Udemy course out of sheer
        curiosity, and from that point forward, I never ceased my learning
        journey. My goal was to master{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">Solving complex problems</span> is my passion,
        and I absolutely <span className="underline">love</span> the feeling of
        finally figuring out a solution to a problem. My core skills include{" "}
        <span className="font-medium">JavaScript, React, CSS3, HTML5</span>, and
        I'm constantly exploring new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, working out, and be with my family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning other{" "}
        <span className="font-medium">
          technologies and programming languages
        </span>
        .
      </p>
    </motion.section>
  );
}
