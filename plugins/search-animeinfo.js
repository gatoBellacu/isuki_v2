import translate from '@vitalets/google-translate-api'
import { Anime } from "@shineiichijo/marika"
const client = new Anime();
let handler = async(m, { conn, text, usedPrefix }) => {
if (!text) return m.reply(`Qué anime esta buscando?`)
try {  
let anime = await client.searchAnime(text)
let result = anime.data[0];
let resultes = await translate(`${result.background}`, { to: 'es', autoCorrect: true })   
let resultes2 = await translate(`${result.synopsis}`, { to: 'es', autoCorrect: true })   
let AnimeInfo = `*Título:* ${result.title}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Formato:* ${result.type}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Estado:* ${result.status.toUpperCase().replace(/\_/g, " ")}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Episodios totales:* ${result.episodes}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Duración:* ${result.duration}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*URL ∙* ${result.url}`
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m)
} catch {
throw `*☓ Ocurrió un error inesperado*`  
}}
handler.help = ['animeinfo'] 
handler.tags = ['search']
handler.command = /^(anime|animeinfo)$/i
export default handler 
