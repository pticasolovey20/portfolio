import { classNames } from "@/utils";

const SectionLayout = ({ children, id, ...styles }) => {
	const { section, div } = styles;

	return (
		<section id={id} className={classNames("min-h-screen flex justify-center px-2", section)}>
			<div className={classNames("w-full sm:w-[90%] md:w-[75%]", div)}>{children}</div>
		</section>
	);
};

export default SectionLayout;
