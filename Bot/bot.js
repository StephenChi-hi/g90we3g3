const { Telegraf } = require('telegraf')

const BOT_TOKEN = '7627007440:AAGgnqeQC3am5b6idyedna95H3bJYhSeT7I'

const bot = new Telegraf(BOT_TOKEN)

const web_link = 'https://z-phlox-app.vercel.app/'

bot.start(ctx => ctx.reply('Welcome', { reply_markup: { keyboard: [[{ text: 'Wallet', web_app: {url: web_link}  }]] } }))

bot.launch()
