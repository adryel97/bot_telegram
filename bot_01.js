const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async (ctx, next) => {
    const start = new Date() 
        await next()
        const ms = new Date - start
        const dataEHora = new Date().toLocaleString()
        console.log(`${dataEHora} \n tempo de resposta: ${ms}ms`)
})

bot.on('text', ctx => ctx.reply('Ola mundo'))

bot.launch()