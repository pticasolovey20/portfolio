import { classNames } from "@/utils";

import Layout from "@/components/layouts/Layout";

const Home = () => {
	return (
		<Layout>
			<section id="about" className={classNames("min-h-screen flex justify-center px-2 bg-gray-400")}>
				<div className={classNames("w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-red-500")}>ABOUT</div>
			</section>

			<section id="skills" className={classNames("min-h-screen flex justify-center px-2 bg-gray-500")}>
				<div className={classNames("w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-red-500")}>
					SKILLS
				</div>
			</section>

			<section id="projects" className={classNames("min-h-screen flex justify-center px-2 bg-gray-600")}>
				<div className={classNames("w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-red-500")}>
					PROJECTS
				</div>
			</section>

			<section id="hire" className={classNames("min-h-screen flex justify-center px-2 bg-gray-700")}>
				<div className={classNames("w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-red-500")}>HIRE</div>
			</section>
		</Layout>
	);
};

export default Home;
