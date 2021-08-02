const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "process.env.token", //Discord Bot Token
prefix: "!" //prefixiniz 
})


bot.readyCommand({
    channel: "", //You can use this or not
    code: `$log[Başarıyla $userTag[$clientID]İsmiyle Giris Yapildi ]`
})
