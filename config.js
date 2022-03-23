/**


   * Create By Dika Ardnt.


   * Contact Me on wa.me/6288292024190


   * Follow https://github.com/DikaArdnt


*/





const fs = require('fs')


const chalk = require('chalk')





// Website Api


global.APIs = {


	zenz: 'https://zenzapi.xyz',


}





// Apikey Website Api


global.APIKeys = {

'https://zenzapi.xyz': 'sanzychan01'

}





// Other


global.owner = [ '6289667644225' ]


global.premium = ['6289667644225']


global.packname = 'Indraz GG'


global.author = 'Robot Pinter'


global.sessionName = 'session'


global.prefa = ['','!','.','🐦','🐤','🗿']


global.sp = '⭔'


global.mess = {


    success: 'Done Banh *√*',


    admin: 'Mau Pake Fitur Ini? Jdi Admin Dulu🗿',


    botAdmin: 'Saia Bukan Admin Banh',


    owner: 'Mau Pake Fitur Ini? Jdi Owner Dulu🗿',


    group: 'Fitur Digunakan Hanya Untuk Group!',


    private: 'Fitur Digunakan Hanya Untuk Private Chat!',


    bot: 'Fitur Khusus Pengguna Nomor Bot',


    wait: 'Wet banh..',


    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',


}


global.limitawal = {


    premium: "Infinity",


    free: 100


}


global.thumb = fs.readFileSync('./lib/hisoka.jpg')





let file = require.resolve(__filename)


fs.watchFile(file, () => {


	fs.unwatchFile(file)


	console.log(chalk.redBright(`Update'${__filename}'`))


	delete require.cache[file]


	require(file)


})
