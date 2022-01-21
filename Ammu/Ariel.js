let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.fakeReply(m.chat, '*ᴅᴏɴᴛ ᴛᴀɢ ᴍʏ ᴏᴡɴᴇʀ*', '0@s.whatsapp.net', `*ᴇᴅᴀ ᴘᴏᴅᴀ ᴠᴇʟʟᴀ ᴘᴀɴɪ ᴇᴅᴛʜ ᴊᴇᴇᴠɪᴋ*`, 'status@broadcast')
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@919656459062/i
handler.command = new RegExp

module.exports = handler
