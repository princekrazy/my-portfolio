import Content from "./content.mdx";

export default {
  id: "past-paper-helper",
  title: "Past Paper Helper (Chrome Extension)",
  description:
    "A Chrome extension that instantly links Cambridge IGCSE/CAIE Question Papers to their corresponding Mark Schemes, removing manual searching.",

  tech: [
    "JavaScript",
    "Chrome Extensions API",
    "Manifest V3",
    "Content Scripts",
    "DOM Manipulation",
    "Keyboard Shortcuts",
  ],

  github: "https://github.com/princekrazy/past-paper-helper", // add repo if available
  live: "https://chromewebstore.google.com/detail/past-paper-helper/ciaejkddcmcalbcpfloaldcnbolgpeol", // Chrome extension (not web hosted)

  featured: true,

  content: Content,
};
