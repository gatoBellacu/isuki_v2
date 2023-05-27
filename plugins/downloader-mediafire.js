import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Ingrese un enlace de mediafire`
    let res = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
    let caption = `
*📓 Nombre:* ${filename}
*📁 Peso:* ${filesizeH}
*📄 Tipo:* ${ext}
*🕐 Subido:* ${aploud}

*↻ Espera soy lenta. . .*
`.trim()
    m.reply(caption)
    await conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mf)$/i
//handler.premium = true 

export default handler