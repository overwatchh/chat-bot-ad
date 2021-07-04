// content properties template
// bot_ask_
// bot_say_
export const contents = [
  {
    id: 'bot_say_intro',
    message: ` I'm <span style="color:rgb(134, 144, 254)">Rudy Baldwin</span>. Psychic reader and astrologer.

My horoscope for month stunned whole Filipines. 3 zodiac signs will start rolling in money, and 2 signs will become poor.<br /><br />

Answer 2 questions to get a free horoscope.`,
    trigger: 'bot_ask_gender',
    asMessage: true,
  },
  {
    id: 'bot_ask_gender',
    message: `Are you a man or a woman?`,
    trigger: 'ans_gender',
    asMessage: true,
  },
  {
    id: 'ans_gender',
    trigger: 'bot_ask_dob',
    asMessage: false,
  },
  {
    id: 'bot_ask_dob',
    message: `What is your date of birth?`,
    trigger: 'ans_dob',
    asMessage: true,
  },
  {
    id: 'ans_dob',
    trigger: 'bot_say_zodiac_base_on_dob',
    asMessage: false,
  },
  {
    id: 'bot_say_zodiac_base_on_dob',
    trigger: 'bot_say_prediction_1',
    asMessage: false,
  },
  {
    id: 'bot_say_prediction_1',
    message: `Your zodiac sign will have a financial revolution in the nearest future. Financial fortune is now at the bottom. You deny yourself a lot of things, debts are haunting you. You are determined to push money and fortune away out of your life.`,
    trigger: 'bot_say_prediction_2',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_2',
    message: `You will not be able to get out of this hole in the coming years if you do not make the right choice, which will mean a financial revolution.`,
    trigger: 'bot_say_prediction_3',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_3',
    message: `If you want to stop being poor in 2021. Listen to what I'm going to tell you now.`,
    trigger: 'bot_say_prediction_4',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_4',
    message: `I can clearly see that you will have the opportunity to change the chosen vector in July. This will be a favourable period for changing your life, from a bad luck to a good one, until the end of your life.`,
    trigger: 'bot_say_prediction_5',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_5',
    message: `Nothing in your life happens by chance. You need to protect yourself and attract money luck.`,
    trigger: 'bot_say_prediction_6',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_6',
    message: `Your sacred number is 1. This means that on 1 January 2021, your life may change dramatically for the better`,
    trigger: 'bot_say_prediction_7',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_7',
    message: `How do you attract money and good luck in 2021 for your sign?`,
    trigger: 'bot_say_prediction_8',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_8',
    message: `This will be the last chance to change your destiny in 2021. If you miss it, your life will remain the same. You decide!`,
    trigger: 'bot_say_prediction_9',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_9',
    message: `I will help you attract money and good luck to your sign in 2021. If you agree, you will forever forget what it is like to be poor. I will free your luck from captivity.`,
    trigger: 'bot_say_prediction_10',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_10',
    message: `I will make a special Sutra Lucky Charms for you and empower it with magic force, which will clear you of dark energy`,
    trigger: 'bot_say_prediction_11',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_11',
    message: `The Sutra Lucky Charms looks like this`,
    trigger: 'bot_say_luckyCharm_imgs',
    asMessage: true,
  },
  {
    id: 'bot_say_luckyCharm_imgs',
    message: `The Sutra Lucky Charms looks like this`,
    trigger: 'bot_say_prediction_12',
    asMessage: false,
  },
  {
    id: 'bot_say_prediction_12',
    message: `Why do you need this Sutra Lucky Charms?`,
    trigger: 'bot_say_prediction_13',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_13',
    message: `This Sutra Lucky Charms will change your life dramatically in a month - all your debts will be gone. Money will flow to you from various sources, and you will be able to forget about financial failures and savings for the rest of your life`,
    trigger: 'bot_say_prediction_14',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_14',
    message: `I always try to help people solve their problems, and I never try to profit from it. That is why, until 30 December inclusive, you get a 40% discount on the Sutra Lucky Charms. The price for you is only 2499 ₱ + Free shipping nationwide`,
    trigger: 'bot_say_prediction_15',
    asMessage: true,
  },
  {
    id: 'bot_say_prediction_15',
    message: `You can order Sutra Lucky Charms wright now! Just put your name and phone in form and your life will change. I promise!`,
    trigger: 'ans_infoForm',
    asMessage: true,
  },
  {
    id: 'ans_infoForm',
    trigger: null,
    asMessage: false,
  },
];
