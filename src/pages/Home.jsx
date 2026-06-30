import PageTransition from "../components/layout/PageTransition";
import FeaturedProjects from "../components/FeaturedProjects";
import OtherProjects from "../components/OtherProjects";
import ThemeToggle from "../components/ThemeToggle";
import Layout from "../components/layout/Layout";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import About from "../components/About";
export default function Home() {
  return (
    <PageTransition>
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white text-black dark:bg-black dark:text-white">
          {/* HERO SECTION */}
          <section className="mb-10">
            <header className="flex justify-between  border-b">
              <h1 className="text-4xl font-bold">My Portfolio</h1>
            </header>

            <p className="text-gray-600 mt-2">
              Full-stack developer building scalable web applications with
              React, Laravel, and modern APIs.
            </p>
          </section>

          <section id="contact">
            <Contact></Contact>
          </section>

          {/* FEATURED PROJECTS */}
          <section id="featured" className="mt-10">
            {/* <h2 className="text-2xl font-bold mb-4">Featured Work</h2> */}

            <FeaturedProjects />
          </section>

          {/* OTHER PROJECTS */}
          <section id="other" className="mt-12">
            {/* <h2 className="text-2xl font-bold mb-4">Other Projects</h2> */}

            <OtherProjects />
          </section>

          <section id="experience">
            <Experience></Experience>
          </section>

          <section id="skills">
            <Skills></Skills>
          </section>

          <section id="about">
            <About></About>
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
}
