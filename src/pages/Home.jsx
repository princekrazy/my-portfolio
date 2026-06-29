import PageTransition from "../components/layout/PageTransition";
import FeaturedProjects from "../components/FeaturedProjects";
import OtherProjects from "../components/OtherProjects";
import ThemeToggle from "../components/ThemeToggle";
import Layout from "../components/layout/Layout";
export default function Home() {
  return (
    <PageTransition>
      <Layout>
        <div className="max-w-4xl mx-auto p-6 bg-white text-black dark:bg-black dark:text-white">
          {/* HERO SECTION */}
          <section className="mb-10">
            <header className="flex justify-between p-4 border-b">
              <h1 className="text-4xl font-bold">My Portfolio</h1>
            </header>

            <p className="text-gray-600 mt-2">
              Full-stack developer building scalable web applications with
              React, Node.js, and modern APIs.
            </p>
          </section>

          {/* FEATURED PROJECTS */}
          <section className="mt-10">
            {/* <h2 className="text-2xl font-bold mb-4">Featured Work</h2> */}

            <FeaturedProjects />
          </section>

          {/* OTHER PROJECTS */}
          <section className="mt-12">
            {/* <h2 className="text-2xl font-bold mb-4">Other Projects</h2> */}

            <OtherProjects />
          </section>
        </div>
      </Layout>
    </PageTransition>
  );
}
