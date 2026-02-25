import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Exp } from "../constants";
import "react-vertical-timeline-component/style.min.css";

// Experience Card
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Title */}
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.name} ({experience.company})
      </p>
    </div>

    {/* Experience Points */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience
export const Experience = () => {
  return (
    <div name="experience" className="h-200vh bg-[#0a192f]">
        {/* Title */}
        <motion.div className="max-w-[1200px] mb-10 mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>

          <p className="text-4xl font-bold inline border-b-4 border-[#cfac83] text-white lg:text-6xl">
            Work Experience
          </p>
          </div>
        </motion.div>

        {/* Experience Card */}
        <div className="empty-20 flex flex-col mt-10 pb-10">
          <VerticalTimeline>
            {Exp.map((experience, i) => (
              <ExperienceCard key={i} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
  );
};