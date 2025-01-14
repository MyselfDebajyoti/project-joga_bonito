"use client";
import React from "react";
import { AnimatedTooltip } from "./contributer";
const people = [
  {
    id: 1,
    name: "Abir Maity",
    designation: "AI/ ML Model",
    image: "/Abir.jpeg",
  },
  {
    id: 2,
    name: "Soumadeep Sengupta",
    designation: "UI/UX Designer",
    image: "/Soumadeep.jpeg",
  },
  {
    id: 3,
    name: "Debajyoti Chatterjee",
    designation: "Full Stack Developer",
    image: "/profile pic.jpg",
  },
  {
    id: 4,
    name: "Chinnari Narasimha Prasad",
    designation: "Full Stack Developer",
    image: "/Chinnari.jpeg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
