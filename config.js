const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}
global.owner = ['6285161710084']
global.ownernomer = "6285161710084"
global.premium = ['6285161710084']
global.packname = '©AlVLP'
global.author = '6285161710084'
global.sessionName = 'session' 
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'âœ…done',
    admin: 'Admin & Mastah Only',
    botAdmin: 'Bot Bukan Admin (°° ',
    premime: 'Premium Only',
    owner: 'Mastah Only',
    group: 'Group Only',
    private: 'Private Chat Only',
    bot: 'Bot Only',
    wait: 'Loading...',
    errapi: 'Error: API Invalid',
    errmor: 'Error: wrong system',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 10
}
global.thumb = fs.readFileSync('./media/image/alvlp.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/alvlp2022'
global.myyt = 'https://youtu.be/kLGN4VRqtPI'
global.myytv = 'https://youtu.be/'
global.mygc = "https://chat.whatsapp.com/"
global.botname = 'Alv'
global.akulaku = 'Alv'
global.ytname = 'AlVLP'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
