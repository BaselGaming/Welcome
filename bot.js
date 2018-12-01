const Discord = require('discord.js');
const client = new Discord.Client(); 

client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("518174539440717835");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**-# Welcomme , To Versus Server :heart:**`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
