import { motion } from "framer-motion";
import { classNames } from "@/utils";

import SectionLayout from "@/components/layouts/SectionLayout";
import Description from "./Description";
import Astronaut from "./Astronaut";

const HeroSection = () => {
	return (
		<SectionLayout
			id="hero"
			section="bg-hero-background bg-cover bg-no-repeat"
			div="relative grid grid-cols-7 xxl:grid-cols-9"
		>
			<Description />

			<motion.div
				initial={{ y: 0 }}
				animate={{ y: [-40, 0, -40] }}
				transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
				className={classNames(
					"absolute",
					"top-[17%] md:top-[20%] lg:top-[25%]",
					"right-[15px] md:right-[-50px] lg:right-[-70px]",
					"w-[30%] md:w-[35%] xl:w-[40%]"
				)}
			>
				<Astronaut />
			</motion.div>
		</SectionLayout>
	);
};

export default HeroSection;
