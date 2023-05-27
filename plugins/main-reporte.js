let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Cuál es el fallo?\n\n*Ejemplo:*\n*${usedPrefix + command}* el comando *${usedPrefix}play* no manda nada`
let teks = `\t\t\t\t*乂 Reporte 乂*\n\n*Reporte enviado por:* wa.me/${m.sender.split`@`[0]}\n\n*Mensaje/Reporte:* ${text}`
conn.reply('5218261275256@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('5218132588591@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply(`se ha enviado el reporte a mi creador`)
}
handler.help = ['reporte <fallo>']
handler.tags = ['main']
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes)$/i
export default handler
