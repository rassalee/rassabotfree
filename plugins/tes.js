const handler = async (m, { conn, text, usedPrefix }) => {
    try {
        //Message
        m.reply("Pesan Reply")
        await delay(2)
        conn.sendMessage(m.chat, { text: "PEsan Custom" }, { quoted: m });

        // Buttons Message
        let sas = [
            {
                buttonId: `🚀`, 
                buttonText: {
                    displayText: '🗿'
                },
                type: 1 
            }
        ]
        conn.sendButton(m.chat, { text:"Ini Body", footer:"RassaBot", buttons: sas })
        await delay(2)
        //
        let op9 = [
            {
                buttonId: '.tes',
                buttonText: {
                displayText: 'TESTING BOT'
                },
                type: 1,
            },
            {
                buttonId: ' ',
                buttonText: {
                displayText: 'PRIVATE SCRIPT'
                },
                type: 1,
            },
            {
                buttonId: 'action',
                buttonText: {
                displayText: 'ini pesan interactiveMeta'
                },
                type: 4,
                nativeFlowInfo: {
                name: 'single_select',
                paramsJson: JSON.stringify({
                    title: 'message',
                    sections: [
                    {
                        title: 'RassaBot',
                        highlight_label: '😜',
                        rows: [
                        {
                            header: 'HEADER',
                            title: 'TITLE',
                            description: 'DESCRIPTION',
                            id: 'YOUR ID',
                        },
                        {
                            header: 'HEADER',
                            title: 'TITLE',
                            description: 'DESCRIPTION',
                            id: 'YOUR ID',
                        },
                        ],
                    },
                    ],
                }),
                },
            },
        ]
        conn.sendButton(m.chat, { text:"Ini Body", footer:"RassaBot", buttons: op9 })

        
    } catch (e) {
        conn.reply(m.chat, `Error: ${e.message || e}`, m);
    }
};

handler.command = ['tes', 'menu'];
handler.help = ['tes', 'menu'];
handler.tags = ['menu'];
handler.limit = false;

export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))