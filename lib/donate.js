exports.donate = (id, Rezahasyim, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwhatsapp, youtube) => {
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
║ *Donasi Ke ${Rezahasyim}*
╠════════════════════
║├≽️⚜ *OVO*: _081221653540_
║├≽️⚜ *PULSA*: _081221653540_
║├≽️⚜ *GOPAY*: _081221653540_
╠════════════════════
║  *${Rezahasyim}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${groupwhatsapp}_
║│2. *YouTube <subscribe>*
║│ _${youtube}_
║│3. *Instagram <Follow>*
║│ _${instagram}_
║│4. *Creator ${Rezahasyim}*
║│ _${nomer}_
║╰───────────
╠════════════════════
║ _*MADE BY Reza Hasyim*_
╚════════════════════`
}

