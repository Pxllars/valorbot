const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '+';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Valor is online!');
})
 
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get('911773581833306192');
    if (!channel) return;

    channel.send(`Welcome to **Valor Network** ${member}`)
});


client.on('message', message => {


    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args);
    }
});
 
client.login('OTExNzg1OTk3MDgyMTk4MDE2.YZmc4Q.d7OwiH9y-fwyNziBy7WH0_6P7B4');