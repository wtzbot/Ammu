let moment = require('moment-timezone')
let handler  = async (m, { conn, text }) => {
  let fs = require('fs')
  let fetch = require('node-fetch')
  const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
 const anu = {
	key : {
                          participant : '0@s.whatsapp.net', remoteJid : 'status@broadcast'
                        },
       message: {
                    orderMessage: {
                            itemCount : 2022,
                            status: 1,
                            surface : 1,
                            message: `ʙʀᴏᴀᴅᴄᴀꜱᴛ ʙʏ ᴅᴇᴠɪʟ⁴⁰⁴⁩`, //Kasih namalu
                            orderTitle: `ʙʀᴏᴀᴅᴄᴀꜱᴛ ʙʏ ᴅᴇᴠɪʟ⁴⁰⁴`,
                            thumbnail: fs.readFileSync('./icon.jpeg'), //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)}
    catch (e){
    }

  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message && !v.announce).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  let content = await conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 All Group Broadcast 」')
  conn.reply(m.chat, `_sending bc to ${groups.length} group_`, m)
  for (let id of groups) conn.copyNForward(id, content, 'conversation',{quoted: anu, thumbnail: fs.readFileSync('./icon.jpeg')} ,true)
  conn.reply(m.chat, `_Done_`, m)}
handler.help = ['broadcastgroup','bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

function ucapan() {
  const time = moment.tz('Asia/Kolkata').format('HH')
  res = "Good Morning 🌄"
  if (time >= 4) {
    res = "Good Morning 🌞"
  }
  if (time > 10) {
    res = "Good afternoon 🌅"
  }
  if (time >= 15) {
    res = "Good Evening 🌆"
  }
  if (time >= 18) {
    res = "Good Night 🌌"
  }
  return res
  }
