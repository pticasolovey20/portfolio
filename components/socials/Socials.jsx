import Image from "next/image";
import { classNames } from "@/utils";

import git from "../../public/img/git-hub.png";

const socials = [
	{ id: 1, alt: "git-hub icon", src: git },
	{ id: 2, alt: "git-hub icon", src: git },
	{ id: 3, alt: "git-hub icon", src: git },
	{ id: 4, alt: "git-hub icon", src: git },
];

const Socials = () => {
	return (
		<div className="hidden md:block md:fixed bottom-[50px] left-[40px]">
			<div className="relative w-[40px] flex flex-col gap-6">
				{socials.map(({ id, src, alt }) => (
					<div
						key={id}
						className={classNames(
							"w-[40px] h-[40px] rounded-full",
							"overflow-hidden cursor-pointer opacity-60",
							"hover:opacity-100 transition-opacity duration-200 ease-in-out"
						)}
					>
						<Image src={src} alt={alt} />
					</div>
				))}

				<div className="absolute top-0 left-1/2 h-full w-[2px] bg-gray-200 opacity-10 -z-10" />
			</div>
		</div>
	);
};

export default Socials;
