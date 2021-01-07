exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *💫𝑫𝑶𝑵𝑨𝑻𝑬💫 ${BotName}* ]----- 🔰
  
Olaaa, *${id.split("@s.whatsapp.net")[0]}* 👋️
Você quer doar? 

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Por favor, doe abaixo :
   
⚜ 👑𝑪𝒀𝑪𝑯𝑹𝑰𝑺💎: wa.me//5581996207906
⚜ 🌈𝑩𝑰𝑬𝑳💎: wa.me//558193537043
⚜ 🎭𝑹𝑼𝑨𝑵: wa.me//5511961605796

📺 *Propaganda* :

✅ Siga a conta de administrador do instagram ${instagramlu}

⚠️ ÚLTIMAS INFORMAÇÕES DO COVID-19!

⚠️ POSITIVO: *${corohelp.confirmed.value}*
⚠️ CURADOS: *${corohelp.recovered.value}*
⚠️ MORTOS: *${corohelp.deaths.value}*
⚠️ ATUALIZADO: *${corohelp.lastUpdate}*

♻️ _ MANTENHA A SUA SAÚDE E USE SEMPRE MÁSCARA!_

♻️ Quer anunciar no *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Use sabiamente ‼️
⚠️ Este barco está funcionando ${kapanbotaktif} ‼️

✳️ Grupo oficial [1] : ${grupch1}

✳️ Grupo oficial [2] : ${grupch2}

  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
