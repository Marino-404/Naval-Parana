import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  cardStyles,
  iconStyles,
  titleCardStyle,
  descriptionCardStyle,
} from "./styles/styles";
import { useAppState } from "../../store/app-state";
import {
  cardTextContentShip,
  cardTextContentAnchor,
  cardTextContentDroplets,
  cardTextContentSettings,
  cardTextContentShield,
} from "../../utils/text-content";
import { Settings, Droplets, ShieldCheck, Anchor, Ship } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  const { lang } = useAppState();

  return (
    <motion.div
      className="relative w-full h-auto z-12 text-primary flex xl:flex-row flex-col items-center gap-8 xl:px-14 xl:pt-0 pt-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className={cardStyles} variants={cardVariants}>
        <div className="flex flex-col">
          <Anchor className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentAnchor(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentAnchor(lang).description}
          </div>
        </div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
      </motion.div>

      <motion.div className={cardStyles} variants={cardVariants}>
        <div className="flex flex-col">
          <Ship className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentShip(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentShip(lang).description}
          </div>
        </div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
      </motion.div>

      <motion.div className={cardStyles} variants={cardVariants}>
        <div className="flex flex-col">
          <Droplets className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentDroplets(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentDroplets(lang).description}
          </div>
        </div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
      </motion.div>

      <motion.div className={cardStyles} variants={cardVariants}>
        <div className="flex flex-col">
          <ShieldCheck className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentShield(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentShield(lang).description}
          </div>
        </div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
      </motion.div>

      <motion.div className={cardStyles} variants={cardVariants}>
        <div className="flex flex-col">
          <Settings className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentSettings(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentSettings(lang).description}
          </div>
        </div>
        <div className="w-full h-[2px] bg-secondary/60 rounded-full mt-6"></div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
