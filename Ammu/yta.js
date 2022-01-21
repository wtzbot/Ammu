let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'ᴡʜᴀᴛ ᴀʀᴇ ʏᴏᴜ ʟᴏᴏᴋɪɴɢ ғᴏʀ?'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'ᴠɪᴅᴇᴏ/ᴀᴜᴅɪᴏ ɴᴏᴛ ғᴏᴜɴᴅ'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nᴛʀʏ ᴀɴᴏᴛʜᴇʀ sᴇʀᴠᴇʀ...'}`)
    }
  }
  if (yt === false) throw 'ᴀʟʟ sᴇʀᴠᴇʀs ᴄᴀɴ°ɴᴛ :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*ᴛɪᴛʟᴇ:* ${title}
*sɪᴢᴇ:* ${filesizeF}
*ᴡᴀɪᴛ ᴀ ꜱᴇᴄ 👩‍💻*
${watermark}
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*ᴛɪᴛʟᴇ:* ${title}
*ғɪʟᴇ sɪᴢᴇ:* ${filesizeF}
*sᴇʀᴠᴇʀ:* ${usedServer}
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['play', 'play2'].map(v => v + ' <search>')
handler.tags = ['downloader']
handler.command = /^yta?$/i

handler.exp = 0

module.exports = handler
