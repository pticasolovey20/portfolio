import { classNames } from "@/utils";

import Link from "next/link";
import Logo from "./Logo";
import Button from "../button/Button";

const navigation = [
	{ id: 1, link: "about" },
	{ id: 2, link: "tech" },
	{ id: 3, link: "projects" },
	{ id: 4, link: "hire" },
];

const Header = () => {
	return (
		<header
			className={classNames(
				"fixed z-10",
				"flex justify-center lg:justify-between",
				"w-full sm:w-[90%] md:w-[75%]",
				"px-2 py-6 md:py-8 lg:py-12 z-10"
			)}
		>
			<Link href="#" className="hidden lg:block">
				<Logo />
			</Link>

			<div className="flex items-center gap-2 sm:gap-4 md:gap-6">
				<nav>
					<ul className="flex gap-1 sm:gap-3 lg:gap-4">
						{navigation.map(({ id, link }) => (
							<li key={id} className={classNames("px-1 md:px-2 lg:px-4", "py-1 lg:py-2")}>
								<Link
									href={`#${link}`}
									className="text-md sm:text-lg md:text-xl lg:text-2xl capitalize"
								>
									{link}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Button text="Resume" onClick={() => {}} />
			</div>
		</header>
	);
};

export default Header;
