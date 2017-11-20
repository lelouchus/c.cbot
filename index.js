const Discord = require("discord.js");

const TOKEN = "MzUxNDU5NjAxNTkxNDM1MjY1.DPNMaQ.A-2szI6yXBjLfHJ-nZCJloOqZ8s";
const PREFIX = "_";
var bot = new Discord.Client();

var fortunes = [
	"evet",
	"hayir",
	"belki",
	"siktir ordan",
	"tabi aq buda soru mu?",
	"yoo",
	"aynen",
	"doru"
];

bot.on("ready", function() {
    console.log("Ready");
});
bot.on("message", function(message) {
   if (message.author.equals(bot.user)) return;

   if (message.content == "serhat") {
       message.channel.sendMessage("ipne");
   }
   if (message.content == "sa") {
	  message.channel.sendMessage("as");
   }
   if (message.content == "best anime") {
	  message.channel.sendMessage("code geass");
   }
   if (message.content == "burak") {
       message.channel.sendMessage("animeci");
   }
   if (!message.content.startsWith(PREFIX)) return; 

   var args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0].toLowerCase()) { 
	   case "ping":
		   message.channel.sendMessage("pong");
		   break;
	   case "kimsin":	
		   message.channel.sendMessage("Ali Tutum tarafindan gelistirilmekte olan bir botum");
		   break;
	   case "8ball":
			if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			else message.channel.sendMessage("o ne aq");
			break;
	   default:
		   message.channel.sendMessage("gecersiz komut");

   }
});

client.login(proces.env.BOT_TOKEN);
