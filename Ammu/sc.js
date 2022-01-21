let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999, status: 1,
message: `http://github.com/D-EV-I-L-8/Ammu\n\n Mwone private ann wait kero . release cheyyumbo broadcast cheyya )`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: fs.readFileSync('./icon.jpeg')
}}, {contextInfo: null, remoteJid: '0@s.whatsapp.net', quoted: m})
conn.relayWAMessage(prep)
}



handler.help = ['all']

handler.tags = ['main']

handler.command = /^git$/i
handler.owner = false


module.exports = handler