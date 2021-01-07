exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Olaaa *${id.split("@s.whatsapp.net")[0]}* 👋️
Aqui estão as informações sobre este bot!✨

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

🔴 INFO BOT! :

=> *AUTHOR*: ./MrG3P5
=> *YOUTUBE*: X - MrG3P5

🔴 INFO DE OUTROS! :

OH SIM, ESTE SCRIPT é 100% KOK GRÁTIS.
O SCRIPT É FEITO NA LÍNGUA DE PROGRAMAÇÃO NODE.JS

♻️ NÃO SE ESQUEÇA DE DOAR PARA QUE O BOT SEJA ATIVO!
♻️ QUER DOAR? POR FAVOR DIGITE #donate

📺 *Propaganda* :

✅ Siga a conta de administrador do instagram ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES SOBRE COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORTOS: *${corohelp.deaths.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _ MANTENHA A SUA SAÚDE E USE SEMPRE MÁSCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use sabiamente ‼️
⚠️ Este barco está funcionando ${kapanbotaktif} ‼️

✅Grupo oficial [1] : ${grupch1}

✅Grupo oficial [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
