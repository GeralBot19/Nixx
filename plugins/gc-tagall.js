let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `𝘼𝘾𝙏𝙄𝙑𝙀𝙉𝙎𝙀 🔥  ${pesan}`
let teks = `➢ : 𝗠𝗲𝗻𝗰𝗶𝗼𝗻 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 ✨ \n\n ${oi}\n\n 🔰➢𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `⚜️≽ @${mem.id.split('@')[0]}\n`}
teks += `𝐍𝐢𝐱𝐱 𝐘 𝐈𝐬𝐦𝐚𝐞𝐥 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
handler.admin = true
handler.group = true
export default handler
