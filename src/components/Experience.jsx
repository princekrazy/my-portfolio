// src/components/Experience.jsx

const experiences = [
  {
    company: "St. Edward's University",
    role: "Sports Program Supervisor",
    period: "Jan 2026 – Present",
    location: "Austin, Texas, United States",
    type: "Full-time",
    description:
      "Supervise club sports events, coordinate facility operations, ensure participant safety, and provide first aid when needed. Developed strong leadership, decision-making, and risk management skills while working in fast-paced environments.",
    highlights: [
      "Supervised club sports competitions and events.",
      "Provided first aid and ensured participant safety.",
      "Developed leadership and crisis management skills.",
    ],
  },
  {
    company: "Swan Valley Group",
    role: "Marketing Intern",
    period: "May 2025 – Aug 2025",
    location: "Harare, Zimbabwe",
    type: "Internship",
    description:
      "Worked on marketing and operations for a startup launching a new product. Built Excel dashboards with Python automation while contributing to product marketing and customer engagement initiatives.",
    highlights: [
      "Created reporting dashboards using Excel and Python.",
      "Supported product launch marketing campaigns.",
      "Strengthened presentation and communication skills.",
    ],
  },
  {
    company: "SoftClans Technologies Limited",
    role: "Software Engineer Intern",
    period: "Jan 2025 – May 2025",
    location: "Nairobi, Kenya",
    type: "Internship",
    description:
      "Developed software using Laravel and Sencha Ext JS while collaborating with clients and developers. Built a multilingual API for a government application, improving accessibility for users.",
    highlights: [
      "Built multilingual API functionality.",
      "Worked with Laravel and Sencha Ext JS.",
      "Collaborated with clients during project planning.",
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
