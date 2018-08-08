const Discord = require("discord.js");

const TOKEN = "";
const PREFIX = "_";
const YTDL = require("ytdl-core");

function play(connection,message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter:"audioonly"}));
	
	server.queue.shift();
	
	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

var bot = new Discord.Client();
bot.on("message", function(message) {
	console.log(message.content);
	});
var prefix = '_';
var servers = {};
var fortunes = [
	"evet",
	"hayir",
	"belki",
	"siktir ordan",
	"tabi aq buda soru mu?",
	"yoo",
	"aynen",
	"doru",
	"ya sen benle dalga mi geciyon oc"
];

bot.on("ready", function() {
bot.user.setGame("ali sucks at coding");
    console.log("Ready");
});
bot.on("message", function(message) {
   if (message.author.equals(bot.user)) return;

   if (message.content == "serhat") {
       message.channel.sendMessage("-YasuoZiplatan(Ashe):Girmeyecegim tfye ulti atmam");
   }
   if (message.content == "serhatxmas") {
       message.channel.sendMessage("https://lelouchus.s-ul.eu/UO0P3Gug");
   }
   if (message.content == "akif") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/VOTjX71J");
	  }
   if (message.content == "memet") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/xW3i7vRk");
	   }
   if (message.content == "sa") {
	  message.channel.sendMessage("aleykum selam hosgeldin");
	  }
   if (message.content == "serhat2") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/u2FYdHXA")
	   }
	   if (message.content == "memetburak") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/cLz2yJTD");
	    }
   if (message.content == "triggered") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/l2vOQ8Lx");		
	    }
	  if (message.content == "sulo") {
	  message.channel.sendMessage("https://lelouchus.s-ul.eu/6tWNjGav");
   }
   if (message.content == "best anime") {
	  message.channel.sendMessage("code geass");
   }
   if (message.content == "veli") {
	  message.channel.sendMessage("-VeliO(Blitzcrank):agam Q yok gelsem nabacam ");
   }
   if (message.content == "anil") {
	   message.channel.sendMessage("-bu hayatta risk almayan hic bir sey yapamaz olm");
   }
   if (message.content == "emre") {
	   message.channel.sendMessage("HaYaT iKiTekEr");
   }
   if (message.content == "ipne") {
	   message.channel.sendMessage("serhat");
   }
   if (message.content == "burak") {
       message.channel.sendMessage("animeci");
}
   if (message.content == "_help") {
       message.channel.sendMessage("```komutlar ve custom reactler serhat,serhatxmax,memetburak,akif,memet,serhat,sulo,sa,triggered,best anime,veli,burak,anil,emre,ipne```");
   }
   if (!message.content.startsWith(PREFIX)) return; 

   var args = message.content.substring(PREFIX.length).split(" ");

   switch (args[0].toLowerCase()) { 
	   case "avatar":
			message.channel.sendMessage(message.author.avatarURL);
			break;
	   case "ping":
		   message.channel.sendMessage("pong");
		   break;
	   case "kimsin":	
		   message.channel.sendMessage("Ali Tutum tarafindan gelistirilmekte olan bir botum");
		   break;
	   case "8ball":
			if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
			else message.channel.sendMessage("o ney??");
	   case "play":
			 if (!args[1]) {
				 message.channel.sendMessage("Link at oc");
				 return;
			 }

			 if (!message.member.voiceChannel) {
				 message.channel.sendMessage("Bir kanala girmen lazim demi muzik dinlemek icin :D ?");
				 return;
			 }

			 if (!servers[message.guild.id]) servers[message.guild.id] = {
				  queue: []
			 };

			 var server = servers[message.guild.id];
				 server.queue.push(args[1]);

			 if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
				 play(connection, message);
			 });
		     break;
	     case "skip":
			 var server = servers[message.guild.id];

			 if (server.dispatcher) server.dispatcher.end();
			 break;
	     case "stop":
	         var server = servers[message.guild.id];

			 if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
			 break;
		  default:
		      message.channel.sendMessage("gecersiz komut");
    }
}); 

bot.login(TOKEN);
