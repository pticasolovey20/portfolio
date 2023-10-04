import Layout from "@/layouts/Layout";
import SectionLayout from "@/layouts/SectionLayout";

const Home = () => {
	const sections = [
		{ id: 1, link: "ABOUT" },
		{ id: 2, link: "SKILLS" },
		{ id: 3, link: "PROJECTS" },
		{ id: 4, link: "HIRE" },
	];

	return (
		<Layout>
			{sections.map(({ id, link }) => (
				<SectionLayout key={id} id={id} link={link}>
					{link}
				</SectionLayout>
			))}
		</Layout>
	);
};

export default Home;
