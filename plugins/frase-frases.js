/*---------------------------------------------------------------------------------------
  ๐ โข By https://github.com/ALBERTO9883
  ๐ โข โAlberto Y Ashlyโ
-----------------------------------------------------------------------------------------*/

import translate from 'translate-google-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => { 

if (command == 'consejo') {
    
let res = await fetch("https://supra-api.herokuapp.com/api/conselho?apikey=supraz")
try {
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`*โโโโโโโโโโโโโโโโโโ*\n*โ โง  ${frase1}*\n*โโโโโโโโโโโโโโโโโโ*`)
} catch {
m.reply(`*[โ] ๐พ๐ฒ๐๐๐๐ธ๐พ ๐๐ฝ ๐ด๐๐๐พ๐, ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด๐ผ๐ด๐ฝ๐๐ด ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ (๐ฐ๐ฟ๐ธ) ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ด๐๐๐ด ๐ฒ๐ฐ๐ธ๐ณ๐ฐ ๐๐ด๐ผ๐ฟ๐พ๐๐ฐ๐ป๐ผ๐ด๐ฝ๐๐ด, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*`)}}
    

if (command == 'fraseromantica') {
try {
let res = await fetch("https://supra-api.herokuapp.com/api/romanticafrase?apikey=supraz")
let json = await res.json()
let { frase } = json
const tld = 'cn'
let frase1 = await translate(`${frase}`, { tld, to: 'es' })
m.reply(`*โญโโโโโโโโโโโโโโโโโฎ*\n*โฅ  ${frase1}*\n*โฐโโโโโโโโโโโโโโโโโฏ*`)
} catch {
m.reply(`*[โ] ๐พ๐ฒ๐๐๐๐ธ๐พ ๐๐ฝ ๐ด๐๐๐พ๐, ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด๐ผ๐ด๐ฝ๐๐ด ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐmmmmmmm (๐ฐ๐ฟ๐ธ) ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ด๐๐๐ด ๐ฒ๐ฐ๐ธ๐ณ๐ฐ ๐๐ด๐ผ๐ฟ๐พ๐๐ฐ๐ป๐ผ๐ด๐ฝ๐๐ด, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*`)}}

if (command == 'historiaromantica') {
try {
let res = await fetch("https://api-xcoders.xyz/api/random/cerpen/cinta?apikey=xcoders")
let json = await res.json()
let { story, title, author_name } = json.result
const tld = 'cn'
let storytime = await translate(`${story}`, { tld, to: 'es' })
let titletime = await translate(`${title}`, { tld, to: 'es' })
conn.reply(m.chat, `แญฅ๐ซแญข Tรญtulo: ${titletime}
แญฅ๐แญข Autor: ${author_name}
โโโโโโโโโโโโโโโโ
${storytime}`, m)
} catch {    
m.reply(`*[โ] ๐พ๐ฒ๐๐๐๐ธ๐พ ๐๐ฝ ๐ด๐๐๐พ๐, ๐ฟ๐พ๐๐ธ๐ฑ๐ป๐ด๐ผ๐ด๐ฝ๐๐ด ๐ป๐ฐ ๐ฟ๐ฐ๐ถ๐ธ๐ฝ๐ฐ (๐ฐ๐ฟ๐ธ) ๐ณ๐ด ๐ฐ๐๐๐ณ๐ฐ ๐ด๐๐๐ด ๐ฒ๐ฐ๐ธ๐ณ๐ฐ ๐๐ด๐ผ๐ฟ๐พ๐๐ฐ๐ป๐ผ๐ด๐ฝ๐๐ด, ๐ธ๐ฝ๐๐ด๐ฝ๐๐ด๐ป๐พ ๐ผ๐ฐ๐ ๐๐ฐ๐๐ณ๐ด*`)}}
      
}
handler.tags = ['frases']
handler.command = handler.help = ['consejo', 'fraseromantica', 'historiaromantica']
export default handler
