import { Element } from "react-scroll";
import { classNames } from "@/utils";

const SectionLayout = ({ children, id, controls, ...styles }) => {
	const { section, div } = styles;

	return (
		<section id={id} className={classNames("min-h-screen flex justify-center px-2", section)}>
			<Element name={id} className={classNames("w-full sm:w-[90%] md:w-[75%]", div)}>
				{children}
			</Element>
		</section>
	);
};

export default SectionLayout;
