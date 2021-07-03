import './chat-bot.scss';
import { steps } from './steps';
import ChatBot from 'react-simple-chatbot';
import Header from '../header/Header';

const Chatbot = () => {
  return (
    <ChatBot
      bubbleStyle={{
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '20px',
      }}
      inputStyle={{ display: 'none' }}
      width="100%"
      botAvatar="./media/hanzcua.jpg"
      userDelay={0}
      botDelay={0}
      steps={steps}
      headerComponent={<Header />}
    />
  );
};

export default Chatbot;
