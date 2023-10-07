import Button from "@/components/button/Button";

import { classNames } from "@/utils";

const Description = () => {
	return (
		<div
			className={classNames(
				"col-end-7 col-span-5",
				"sm:col-end-6 sm:col-span-4",
				"md:col-end-6 md:col-span-5",
				"lg:col-end-6 lg:col-span-5",
				"xl:col-span-4 xxl:col-span-5 self-center"
			)}
		>
			<span className="text-sm sm:text-md lg:text-2xl font-medium">Front-end Developer</span>

			<h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-[54px] font-semibold tracking-wide">
				Dmytro Solovyov
			</h1>

			<p className="text-md md:text-lg leading-[20px] py-1 md:pt-4 md:pb-2">
				I am an experienced software developer with a strong background in JavaScript and TypeScript,
				specializing in building applications using React and Next.js. Due to my ability to learn quickly and my
				client-centric approach, I am proficient in creating efficient, scalable and user-friendly solutions to
				solve real-world problems
			</p>

			<Button text="Get in Touch" styles="w-[50%] xl:w-[45%] mt-4 " />
		</div>
	);
};

export default Description;
