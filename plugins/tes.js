
const handler = async (m, { conn, text, usedPrefix, command }) => {
  m.reply("p")
  await conn.sendButton(m.chat, { text: "Halo", footer: "Rassa", buttons: [
    {
     buttonId: `🚀`, 
     buttonText: {
     displayText: '🗿'
     },
     type: 1 
    }
  ]})




};

handler.command = ["p"];
handler.help = ["p"];
handler.tags = ["p"];

export default handler;
 