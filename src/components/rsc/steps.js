import Typewriter from "../typing-effect/TypingEffect";
import BuyNowButton from "../BuyNowButton";
import Dob from "../input-date-time/InputDateTime";
import Gender from "../gender/Gender";
import Media from "../media/Media";
import { contents } from "./content";
import Zodiac from "../zodiac/Zodiac";
const LANDING_PAGE =
  "https://www.zodiacnews.website/b3?utm_source=F0C3F9&utm_campaign=AE4EF6&utm_content=6EEEF7&utm_medium=D038F5";
export const steps = contents.map((step) => {
  if (step.asMessage) {
    return {
      id: step.id,
      component: <Typewriter trigger={step.trigger} message={step.message} />,
      asMessage: true,
    };
  } else {
    if (step.id === "bot_say_zodiac_base_on_dob") {
      return {
        id: step.id,
        component: <Zodiac trigger={step.trigger} />,
      };
    }
    if (step.id === "ans_gender") {
      return {
        id: step.id,
        component: <Gender trigger={step.trigger} />,
        delay: 0,
      };
    }
    if (step.id === "ans_dob") {
      return {
        id: step.id,
        component: <Dob trigger={step.trigger} />,
        delay: 0,
      };
    }
    if (step.id === "bot_say_luckyCharm_imgs") {
      return {
        id: step.id,
        component: <Media trigger={step.trigger} />,
        asMessage: true,
        delay: 0,
      };
    }
    if (step.id === "ans_infoForm") {
      return {
        id: step.id,
        component: <BuyNowButton title="Buy now" href={LANDING_PAGE} />,
        delay: 0,
      };
    }
  }
});

export const getSteps = (adManager) => {
  const steps = contents.map((step) => {
    if (step.asMessage) {
      return {
        id: step.id,
        component: <Typewriter trigger={step.trigger} message={step.message} />,
        asMessage: true,
      };
    } else {
      if (step.id === "bot_say_zodiac_base_on_dob") {
        return {
          id: step.id,
          component: <Zodiac trigger={step.trigger} />,
        };
      }
      if (step.id === "ans_gender") {
        return {
          id: step.id,
          component: <Gender trigger={step.trigger} />,
          delay: 0,
        };
      }
      if (step.id === "ans_dob") {
        return {
          id: step.id,
          component: <Dob trigger={step.trigger} />,
          delay: 0,
        };
      }
      if (step.id === "bot_say_luckyCharm_imgs") {
        return {
          id: step.id,
          component: <Media trigger={step.trigger} />,
          asMessage: true,
          delay: 0,
        };
      }
      if (step.id === "ans_infoForm") {
        return {
          id: step.id,
          component: (
            <BuyNowButton title="Buy now" href={adManager.landingPageLink} />
          ),
          delay: 0,
        };
      }
    }
  });

  return steps;
};
