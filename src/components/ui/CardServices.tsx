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

const Services = () => {
  const { lang } = useAppState();
  return (
    <div className="absolute -mt-20 w-full h-auto z-12 text-primary flex xl:flex-row flex-col items-center  gap-8 px-12">
      <div className={cardStyles}>
        <div className="flex flex-col">
          <Anchor className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentAnchor(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentAnchor(lang).description}
          </div>
        </div>
      </div>

      <div className={cardStyles}>
        <div className="flex flex-col">
          <Ship className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentShip(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentShip(lang).description}
          </div>
        </div>
      </div>

      <div className={cardStyles}>
        <div className="flex flex-col">
          <Droplets className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentDroplets(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentDroplets(lang).description}
          </div>
        </div>
      </div>

      <div className={cardStyles}>
        <div className="flex flex-col ">
          <ShieldCheck className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentShield(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentShield(lang).description}
          </div>
        </div>
      </div>

      <div className={cardStyles}>
        <div className="flex flex-col  ">
          <Settings className={iconStyles} />
          <div className={titleCardStyle}>
            {cardTextContentSettings(lang).title}
          </div>
          <div className={descriptionCardStyle}>
            {cardTextContentSettings(lang).description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
