var exec = require('child_process').exec, child;
const os = require("os");
const Discord = require('discord.js');
const bot = new Discord.Client();
const botconfig = require("./bin/config.json")

if (os.platform == "linux") {
    exec('rm -rf /home/pi/Desktop/beepSelfBot/bin')
    exec('rm -rf /home/pi/Desktop/beepSelfBot/index.js')
    exec('svn checkout https://github.com/HerrEurobeat/beepSelfBot/trunk/bin /home/pi/Desktop/beepSelfBot/bin')
    exec('svn checkout https://github.com/HerrEurobeat/beepSelfBot/trunk/index.js /home/pi/Desktop/beepSelfBot/index.js')
    console.log("Linux updater started...")
    bot.setTimeout(() => {
        exec('pm2 restart selfbot')
    }, 5000)
}