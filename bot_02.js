const env = require('./.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date - start
    const dateEHora = new Date().toLocalString();
    console.log('(${dataEHora} \n Tempo de resposta: ${ms}ms')
})

//Escuta do comando /start
bot.start(async ctx => {
    const from = ctx.message.from
    from.id = undefined
    console.log(from)
    if(from.username === 'botsenai_bot'){
        await ctx.reply(`Ola ${from.username}, o seu nome é:' ${from.first_name} ${from.last_name}!`)
    }else{
        await ctx.reply('Não posso falar com estranhos')
    }
    
})


//Evento de Texto
bot.on('text', ctx => ctx.reply('Ola Mundo Senai'))

bot.launch()