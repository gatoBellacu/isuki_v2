import fetch from 'node-fetch'
let handler = async (m, { conn, text, args }) => {
let response = args.join(' ').split('|')
	if (!text) throw `*• Ingresa un texto*`
  let res = `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkeysapi}&text=${text}`
  conn.sendFile(m.chat, res, 'logo.jpg', `Listo`, m, false)
}
handler.help = ['logo-blackpink']
handler.tags = ['marker']
handler.command = /^(logo-blackpink)$/i

export default handler