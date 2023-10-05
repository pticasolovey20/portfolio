const SectionLayout = ({ id, link, children }) => {
	return (
		<section id={link} className={`min-h-screen flex justify-center px-2 bg-gray-${id + 3}00`}>
			<div className="w-full sm:w-[90%] md:w-[75%] lg:w-[60%] border border-red-500">{children}</div>
		</section>
	);
};

export default SectionLayout;
