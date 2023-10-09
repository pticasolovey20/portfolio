import Layout from "@/components/layouts/Layout";

import HeroSection from "@/components/sections/hero/HeroSection";
import AboutSection from "@/components/sections/about/AboutSection";
import TechSection from "@/components/sections/tech/TechSection";
import ProjectSection from "@/components/sections/projects/ProjectSection";
import HireSection from "@/components/sections/hire/HireSection";

const Home = () => {
	return (
		<Layout>
			<HeroSection />
			<AboutSection />
			<TechSection />
			<ProjectSection />
			<HireSection />
		</Layout>
	);
};

export default Home;
