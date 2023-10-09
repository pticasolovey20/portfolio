import Button from "@/components/button/Button";
import Socials from "@/components/socials/Socials";

import { classNames } from "@/utils";

const Description = () => {
	return (
		<div
			className={classNames(
				"mb-[5rem] md:mb-28 lg:mb-20 xl:mb-0",
				"xl:mt-16 self-end xl:self-center",
				"col-end-7 col-span-5",
				"md:col-end-6 md:col-span-5",
				"lg:col-end-6 lg:col-span-5",
				"xl:col-span-4 xxl:col-span-5"
			)}
		>
			<span className="text-md lg:text-2xl font-medium">Front-end Developer</span>

			<h1 className="text-2xl xs:text-4xl lg:text-5xl xl:text-[54px] font-semibold tracking-wide">
				Dmytro Solovyov
			</h1>

			<p className="text-md sm:text-lg leading-5 lg:leading-6 py-1 md:pt-4 md:pb-2">
				I am an experienced software developer with a strong background in JavaScript and TypeScript,
				specializing in building applications using React and Next.js. Due to my ability to learn quickly and my
				client-centric approach, I am proficient in creating efficient, scalable and user-friendly solutions to
				solve real-world problems
			</p>

			<Button text="Get in Touch" styles="w-[60%] md:w-[50%] xl:w-[45%] mt-4 " />
			<Socials />
		</div>
	);
};

export default Description;
