let FormData = require('form-data')
let axios = require('axios')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : mx
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Reply to the music you want to find with a caption *${usedPrefix + command}*`
  conn.fakeReply(m.chat, '*ꜱᴇᴀʀᴄʜɪɴɢ...*', '0@s.whatsapp.net', `*ᴍᴜꜱɪᴄ ꜰɪɴᴅᴇʀ*`, 'status@broadcast')
				const bodyForm = new FormData()
			        bodyForm.append('audio', await q.download(), 'music.mp3')
           			bodyForm.append('apikey', 'caliph_71')
           			axios('https://api.zeks.me/api/searchmusic?apikey=apivinz', {
                		method: 'POST',
                		headers: {
				"Content-Type": "multipart/form-data",
        			...bodyForm.getHeaders()
                		},
                		data: bodyForm
            			})
                		.then(({data}) =>{
				  conn.fakeReply(m.chat, ` *ᴀʜᴀᴀʜ! ᴍᴜꜱɪᴄ ꜰᴏᴜɴᴅ* \n\n*ᴛɪᴛʟᴇ* : ${data.data.title}\n*ᴀʀᴛɪꜱᴛ* : ${data.data.artists}\n*ɢᴇɴʀᴇ* : ${data.data.genre}\n*ᴀʟʙᴜᴍ* : ${data.data.album}\n*ʀᴇʟᴇᴀꜱᴇ ᴅᴀᴛᴇ* : ${data.data.release_date}  \n\n\ © ⁨ꪶᴀᴍᴍᴜꫂ`, '0@s.whatsapp.net', '*ᴍᴜꜱɪᴄ ꜰɪɴᴅᴇʀ*', 'status@broadcast')
				}).catch(() => {
				conn.fakeReply(m.chat, '*ᴍᴜꜱɪᴄ ɴᴏᴛ ꜰᴏᴜɴᴅ*', '0@s.whatsapp.net', '*ᴍᴜꜱɪᴄ ꜰɪɴᴅᴇʀ*', 'status@broadcast')
				})
				
}
handler.help = ['whatmusic']
handler.tags = ['tools']

handler.command = /^(find)$/i

module.exports = handler
