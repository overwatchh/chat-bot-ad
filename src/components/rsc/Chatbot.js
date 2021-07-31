import "./chat-bot.scss";
import { getSteps } from "./steps";
import ChatBot from "react-simple-chatbot";
import Header from "../header/Header";
import KOLImg from "../../assets/images/rudy_baldwin.png";
import OGImage from "../../assets/images/amulet.jpg";
import FavIcon from "../../assets/images/amulet.ico";
import Helmet from "../helmet";

const Chatbot = ({ adManager }) => {
  const steps = getSteps(adManager, adManager.isTypingEffect);
  const botDelay = adManager.isTypingEffect ? 0 : 2000;
  const og = {
    description: "Horus Amulet official store",
    title: "Horus Amulet",
    image: OGImage,
  };
  return (
    <>
      <Helmet title="Horus Amulet" og={og} favIcon={FavIcon} />
      <ChatBot
        bubbleStyle={{
          backgroundColor: "#fff",
          color: "#000",
          fontWeight: "bold",
          fontSize: "20px",
        }}
        inputStyle={{ display: "none" }}
        width="100%"
        botAvatar={KOLImg}
        userDelay={0}
        botDelay={botDelay}
        steps={steps}
        headerComponent={<Header />}
      />
    </>
  );
};

export default Chatbot;
