import { classNames } from "@/utils";

const Button = ({ text, styles, onClick }) => {
	return (
		<button
			className={classNames(
				styles,
				"px-2 lg:px-4 py-1.5 lg:py-2.5",
				"text-primary-green font-medium",
				"text-md sm:text-lg lg:text-xl",
				"border-2 border-primary-green rounded-lg",
				"transition-bg duration-300 ease-in-out",
				"hover:bg-primary-green/25"
			)}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;
