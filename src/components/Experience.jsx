// src/components/Experience.jsx

const experiences = [
  {
    company: "St. Edward's University",
    role: "Sports Program Supervisor",
    period: "Jan 2026 – Present",
    location: "Austin, Texas, United States",
    type: "Part-time",
    description:
      "Supervise club sports events and facility operations while ensuring participant safety and responding to incidents when needed. Developed strong leadership, decision-making, communication, and risk management skills in fast-paced environments.",
    highlights: [
      "Supervise club sports competitions, practices, and events.",
      "Coordinate facility operations and ensure participant safety.",
      "Provide first aid and respond to incidents when needed.",
      "Develop leadership, decision-making, and crisis management skills.",
    ],
  },
  {
    company: "Global Origin, LLC",
    role: "Game Development & Software Development Intern",
    period: "Jun 2026 – Aug 2026",
    location: "Remote",
    type: "Internship",
    description:
      "Tested and debugged mobile applications while collaborating with developers to identify defects, validate fixes, and improve application reliability. Worked with Kotlin and React Native while performing functional, regression, and validation testing throughout the development lifecycle.",
    highlights: [
      "Tested mobile applications to identify functional defects, usability issues, and edge cases.",
      "Debugged and resolved software issues using Kotlin and React Native.",
      "Executed functional, regression, and validation testing to verify fixes.",
      "Documented and communicated software defects to support efficient issue resolution.",
    ],
  },
  {
    company: "Swan Valley Group",
    role: "IT & Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    location: "Harare, Zimbabwe",
    type: "Internship",
    description:
      "Developed internal web applications and automation tools that streamlined business operations and reduced manual effort. Built Python scripts and Excel dashboards while supporting IT systems, workflow automation, and technical troubleshooting.",
    highlights: [
      "Developed internal web applications to streamline business operations.",
      "Built Python automation scripts for processing and analyzing operational data.",
      "Created interactive Excel dashboards and reports to support data-driven decisions.",
      "Supported workflow automation for manufacturing and factory processes.",
      "Diagnosed and resolved hardware, software, and network issues for end users.",
    ],
  },
  {
    company: "SoftClans Technologies Limited",
    role: "Software Engineer Intern",
    period: "Jan 2025 – May 2025",
    location: "Nairobi, Kenya",
    type: "Internship",
    description:
      "Developed real-world software solutions using Laravel and Sencha Ext JS while collaborating with developers and clients to understand requirements and plan features. Contributed to a government software system by building a multilingual API that enabled users to switch the application's interface between languages.",
    highlights: [
      "Developed software using Laravel and Sencha Ext JS.",
      "Built a multilingual API for a government software application.",
      "Collaborated with developers and clients during requirements gathering and project planning.",
      "Gained hands-on experience with API development and system integration.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {experiences.map((job) => (
          <div
            key={`${job.company}-${job.role}`}
            className="border rounded-xl p-6 bg-white dark:bg-neutral-900"
          >
            <div className="flex justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="font-medium">{job.company}</p>
              </div>

              <div className="text-sm text-gray-500 dark:text-gray-400 text-right">
                <p>{job.period}</p>
                <p>{job.location}</p>
                <p>{job.type}</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300">
              {job.description}
            </p>

            <ul className="mt-4 list-disc list-inside space-y-1">
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
