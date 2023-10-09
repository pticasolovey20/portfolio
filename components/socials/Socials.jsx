import Link from "next/link";

import GithubIcon from "./icons/GithubIcon";
import GmailIcon from "./icons/GmailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import TelegramIcon from "./icons/TelegramIcon";

const socials = [
	{ id: 1, icon: <GithubIcon /> },
	{ id: 2, icon: <LinkedInIcon /> },
	{ id: 3, icon: <GmailIcon /> },
	{ id: 4, icon: <TelegramIcon /> },
];

const Socials = () => {
	return (
		<div className="flex gap-4 mt-4">
			{socials.map(({ id, icon }) => (
				<Link
					key={id}
					href=""
					target="_blank"
					className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-full"
				>
					{icon}
				</Link>
			))}
		</div>
	);
};

export default Socials;
