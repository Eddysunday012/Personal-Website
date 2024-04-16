import ucoLogo from "../assets/ucoLogo.png";
import caltransLogo from "../assets/caltransLogo.png";

export const experience = [
  {
    name: "Student Assistant Programmer",
    dates: "July 2021 - July 2023",
    years: 2,
    description:
      "For 2 years, I served as a remote Student Assistant for the Division 7 CalTrans design engineering team.",
    tasks: [
      "Implemented automation scripts in Microsoft’s VBA programming language, that streamlined processes up by 50% ",
      "Quantity checked Senior Engineer’s Excel Sheets and uploaded them to a SharePoint file server for other Engineers to utilize",
      "Redesigned a database file storage system using Microsoft Access and Microsoft VBA",
    ],
    skills: ["Python", "Excel", "Access", "SharePoint", "VBA", "CADD"],
    logo: {
      src: caltransLogo,
    },
  },
  {
    name: "Undergraduate Researcher",
    years: 0.5,
    dates: "June 2022 - Sept 2022",
    description:
      "For the summer of 2022, I served as an Undergraduate Research Assistant for the UC Observatory, specifically under a team researching Fast Radio Bursts, or FRBs for short.",
    tasks: [
      "Contributed to a Python-based Github Respository used by Astrophysics Researchers to analyze telescope data",
      "Created a comprehensive time-profiling analysis to identify and optimize bottlenecks within the main codebase",
      "Contributions resulted in an a 5x speedup and saving 8 hours in the overall data processing time performed by the code",
    ],
    skills: ["Python", "Tensorflow", "Data Analytics", "Numpy"],
    logo: {
      src: ucoLogo,
    },
  },
];
