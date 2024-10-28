import {Telegraf, Markup} from 'telegraf'

const token = '7745475284:AAERoAC7J7iZevDjaJMzFqXTdy-Tqic_fVo'
const webAppUrl = 'https://tap-clicker-pro.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply('Привет! Нажми , чтобы начать!', Markup.inlineKeyboard([
        Markup.button.webApp('Открой мини-приложение', `${webAppUrl}?ref=${ctx.payload}`)
    ]))
})

bot.launch()