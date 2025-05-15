"use client";

import { useState, useRef, useEffect } from "react";

const steps = [
  {
    title: "Seed of Change (2017)",
    subtitle: "Foundation & Grassroots Beginnings",
    description: `
      A group of visionary youths began working in Dharwad rural taluk. The focus was on grassroots development, launching interventions in education, healthcare, and environmental sustainability. Despite facing resistance, their consistent efforts laid the groundwork for community trust and engagement.
    `,
  },
  {
    title: "Roots of Resilience (2018–2020)",
    subtitle: "Community Building & Local Impact",
    description: `
      Early efforts began to show results with community participation steadily increasing. The Foundation expanded to neighboring villages, nurturing a culture of self-help and collective action. Focus expanded to agricultural education, supporting local livelihoods and empowering farmers.
    `,
  },
  {
    title: "Bloom of Empowerment (2021–2023)",
    subtitle: "Holistic Development & Strategic Research",
    description: `
      KIF undertook research to diagnose root causes of rural challenges. These insights led to tailored programs addressing both social and economic dimensions. Best practices were identified and refined, enabling scalable and replicable impact across multiple communities.
    `,
  },
  {
    title: "Institutional Milestone (2024)",
    subtitle: "Official Registration & Scaling Vision",
    description: `
      KIF was formally registered as a Section 8 Company, solidifying its non-profit status. This legal recognition marked a turning point in organizational legitimacy, fundraising, and partnership building. It signaled a shift from informal operations to structured growth and accountability.
    `,
  },
  {
    title: "Path of Possibilities (2024–Ongoing)",
    subtitle: "Collaborative Growth & Statewide Impact",
    description: `
      KIF now actively invites individuals, corporates, and institutions to join the mission. With a focus on sustainability, scalability, and inclusivity, the Foundation aims to transform villages across Karnataka. The vision: a flourishing rural Karnataka, driven by empowered communities and sustainable practices.
    `,
  },
];

export default function OurStory() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (stepRefs.current[currentStep]) {
      stepRefs.current[currentStep]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [currentStep]);

  return (
    <div className="bg-amber-50 min-h-screen py-16 px-4 md:px-8 pattern-bg-yellow">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Empowering Rural Karnataka: The Journey of Karnataka Incubation Foundation
        </h2>

        <div className="relative flex flex-col md:flex-row gap-12">
          {/* Timeline vertical bar - only visible md and up */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-full bg-gradient-to-b from-blue-100 to-blue-50 rounded-full">
            <div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-blue-400 rounded-full transition-all duration-500"
              style={{ height: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps container */}
          <div className="relative w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
                className={`relative flex items-center mb-20 group transition-all duration-300 cursor-pointer
                  ${index <= currentStep ? "opacity-100" : "opacity-50"}
                  flex-col md:flex-row
                  ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}
                `}
                onClick={() => setCurrentStep(index)}
              >
                {/* Timeline circle - hidden on small screens */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300
                      ${
                        index <= currentStep
                          ? "bg-blue-600 scale-125 shadow-lg border-4 border-blue-100"
                          : "bg-gray-300 scale-100 border-4 border-gray-100"
                      }
                    `}
                  >
                    <span className="font-semibold text-lg">{index + 1}</span>
                  </div>
                </div>

                {/* Timeline circle for small screens */}
                <div className="md:hidden flex items-center justify-center w-10 h-10 rounded-full text-white bg-blue-600 border-4 border-blue-100 mb-4">
                  <span className="font-semibold text-base">{index + 1}</span>
                </div>

                {/* Content card */}
                <div
                  className={`bg-white rounded-xl shadow-lg cursor-pointer transition-all duration-300
                    p-6
                    w-full
                    md:w-[45%]
                    ${
                      index === currentStep
                        ? "border-4 border-blue-100 transform scale-[1.02] shadow-xl"
                        : "border-2 border-gray-100"
                    }
                  `}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3 text-sm sm:text-base">
                    {step.subtitle}
                  </p>
                  <p
                    className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
