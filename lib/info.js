exports.info = (id, rezabot, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
	return `
  
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
📢 Bot Aktif ; *${aktif}*
         ───
         
╔════════════════════
║ *About ${rezabot}*
╠════════════════════
║   *⚠️WARNING⚠️*
╠════════════════════
╠════════════════════
║ *TIDAK BOLEH*
║  *MENGGANTI INFO!!!*
╠════════════════════
║├≽️⚜ *AUTHOR*: _A187_
║├≽️⚜ *DESIGNER*: _Reza Hasyim_
║├≽️⚜ *YOUTUBE*: _Entar Bikin_
╠════════════════════
╠════════════════════
║  *${rezabot}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${rezabot}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY Reza Hasyim*_
╚════════════════════`
}
