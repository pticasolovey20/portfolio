import { motion } from "framer-motion";
import { classNames } from "@/utils";

import SectionLayout from "@/components/layouts/SectionLayout";
import Astronaut from "./Astronaut";

const HeroSection = () => {
	return (
		<SectionLayout id="hero" section="bg-hero-background bg-cover bg-no-repeat" div="relative">
			<motion.div
				initial={{ y: 0 }}
				animate={{ y: [-40, 0, -40] }}
				transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
				className={classNames(
					"absolute",
					"top-[15%] md:top-[20%] lg:top-[30%]",
					"right-[15px] md:right-[10px]",
					"w-[30%] md:w-[35%] xl:w-[40%]"
				)}
			>
				<Astronaut />
			</motion.div>
		</SectionLayout>
	);
};

export default HeroSection;
