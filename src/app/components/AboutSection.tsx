/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>React.js</li>
          <li>Typescript</li>
          <li>javascript</li>
          <li>Next.js</li>
          <li>Flutter</li>
          <li>Git</li>
          <li>SQL</li>
          <li>Mongo</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul>
          <li>
            <span className="font-semibold">
              Bachelor´s degree - Systems Engineering:{" "}
            </span>
            Universidad Del Norte, Colombia - GPA: 4.0/5
          </li>
        </ul>
      ),
    },
  ];

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 lg:mt-24">
        <Image
          className="self-start mt-16"
          src={"./images/aboutImage.png"}
          alt="About"
          width={500}
          height={500}
          quality={100}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-blue-500 mb-4">About Me</h2>
            <p className="text-base lg:text-lg">
              I'm a passionate Full Stack Developer with experience in Node.js,
              Express, SQL, Mongo, and React, specializing in backend
              development for scalable web applications. I'm also enthusiastic
              about mobile development, recognizing its transformative impact.
              My commitment to innovation and adaptability drives me to tackle
              new challenges and quickly adjust to industry changes.
            </p>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                {" "}
                Skills{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                {" "}
                Education{" "}
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
                {" "}
                Certifications{" "}
              </TabButton>
            </div>
            <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
