// content properties template
// bot_ask_
// bot_say_
export const contents = [
         {
           id: "bot_say_intro",
           message: `Ako si <span style="color:#722ed1">Rudy Baldwin</span>. Psychic reader at astrologo`,
           trigger: "bot_ask_gender",
           asMessage: true,
         },
         {
           id: "bot_ask_gender",
           message: `Sagutin ang 2 mga katanungan upang makakuha ng isang libreng horoscope.
Ikaw ba ay babae o lalaki?
`,
           trigger: "ans_gender",
           asMessage: true,
         },
         {
           id: "ans_gender",
           trigger: "bot_ask_dob",
           asMessage: false,
         },
         {
           id: "bot_ask_dob",
           message: `What is your date of birth?`,
           trigger: "ans_dob",
           asMessage: true,
         },
         {
           id: "ans_dob",
           trigger: "bot_say_prediction_1",
           asMessage: false,
         },
         {
           id: "bot_say_prediction_1",
           message: `Ang iyong tanda sa zodiac ay magkakaroon ng isang rebolusyon sa pananalapi sa pinakamalapit na hinaharap.
<ul>
 <li>Malaking kapalaran at kayamanan ang naghihintay para sa iyo.</li>
 <li>Makakatanggap ka ng maraming positibong suporta mula sa paparating na mga bagong relasyon.</li>
 <li>Mabababalik mo ang malaking halaga na nawala sa iyo dati. Alamin kung paano ka makakabalik ng maraming beses sa halagang iyon.</li>
 </ul>
`,
           trigger: "bot_say_prediction_2",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_2",
           message: `However, Financial fortune is now at the bottom.`,
           trigger: "bot_say_prediction_3",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_3",
           message: `You will not be able to get out of this hole in the coming years if you do not make the right choice, which will mean a financial revolution.`,
           trigger: "bot_say_prediction_4",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_4",
           message: `If you want to stop being poor in 2021. Listen to what I'm going to tell you now.`,
           trigger: "bot_say_prediction_5",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_5",
           message: `Nothing in your life happens by chance. You need to protect yourself and attract money luck.`,
           trigger: "bot_say_prediction_6",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_6",
           message: `Your sacred number is 7. This means that on 7 August 2021, your life may change dramatically for the better`,
           trigger: "bot_say_prediction_7",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_7",
           message: `How do you attract money and good luck in 2021 for your sign?`,
           trigger: "bot_say_prediction_8",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_8",
           message: `I will help you attract money and good luck to your sign in 2021. If you agree, you will forever forget what it is like to be poor. I will free your luck from captivity.`,
           trigger: "bot_say_prediction_9",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_9",
           message: `I will make a special Horus Amulet for you and empower it with magic force, which will clear you of dark energy.`,
           trigger: "bot_say_prediction_10",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_10",
           message: `Why do you need this Horus Amulet?`,
           trigger: "bot_say_prediction_11",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_11",
           message: `This Horus Amulet will change your life dramatically - all your debts will be gone. Money will flow to you from various sources, and you will be able to forget about financial failures and savings for the rest of your life`,
           trigger: "bot_say_prediction_12",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_12",
           message: `This will be the last chance to change your destiny in 2021. If you miss it, your life will remain the same. You decide!`,
           trigger: "bot_say_prediction_13",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_13",
           message: `This Sutra Horus Amulet will change your life dramatically in a month - all your debts will be gone. Money will flow to you from various sources, and you will be able to forget about financial failures and savings for the rest of your life`,
           trigger: "bot_say_prediction_14",
           asMessage: true,
         },
         {
           id: "bot_say_prediction_14",
           message: `You can learn more about Horus Amulet right now!`,
           trigger: "ans_infoForm",
           asMessage: true,
         },
         {
           id: "ans_infoForm",
           trigger: null,
           asMessage: false,
         },
       ];
