import yts from 'yt-search'

let handler = async (m, { text }) => {
  if (!text) throw 'Que quiere que busque en YouTube?'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `*• Titulo:* ${v.title}\n*• Link:* ${v.url}\n*• Duración:* ${v.timestamp}\n*• Subido:* ${v.ago}\n*• Visitas:* ${v.views}`
    }
  }).filter(v => v).join('\n\n╶\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'Error.jpeg', teks, m)
}

handler.help = ['ytsearch'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts', 'youtube'] 

export default handler
