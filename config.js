const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349124503464";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_16_29_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyLFxuICAgICAgICA3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NixcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODMsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDk5LFxuICAgICAgICA2OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjksXG4gICAgICAgIDYsXG4gICAgICAgIDIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkwLFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDM0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDk0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExLFxuICAgICAgICA3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDk3LFxuICAgICAgICA1NixcbiAgICAgICAgMjUwLFxuICAgICAgICA0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkzLFxuICAgICAgICA0NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQsXG4gICAgICAgIDIwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwLFxuICAgICAgICA5MCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjdZUVZxMnoxSVVvUWF0OURRUE5RN1RGV25HU0tFbml4aXl5STFWbGw2TEk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEyNDUwMzQ2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUE4MTQ1NTk1OThGMzlEQzkzQUY1MkUwQjREQkI1MjlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MjgxNzM3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9Ba0dkZWVVVGJxVVR2ZzBwa1FYMUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ4ZWQwNzgtZmMxMC00YmRhLThmNWUtMGM4NGZmOGUwY2EyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMTQyLFxuICAgICAgMTk0LFxuICAgICAgMTc5LFxuICAgICAgODQsXG4gICAgICA1NSxcbiAgICAgIDIwNyxcbiAgICAgIDE1OSxcbiAgICAgIDY0LFxuICAgICAgMTc4LFxuICAgICAgMjQ2LFxuICAgICAgMTgxLFxuICAgICAgMTIyLFxuICAgICAgMTcyLFxuICAgICAgMjM1LFxuICAgICAgMjUwLFxuICAgICAgMTIwLFxuICAgICAgMTIsXG4gICAgICAxMzYsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDIzNixcbiAgICAgIDE3NCxcbiAgICAgIDE3MyxcbiAgICAgIDYyLFxuICAgICAgNTUsXG4gICAgICAyMzUsXG4gICAgICAyNDksXG4gICAgICAxNDMsXG4gICAgICAyNTEsXG4gICAgICAxNTEsXG4gICAgICAxNjEsXG4gICAgICAxNTAsXG4gICAgICAxOTQsXG4gICAgICA0NCxcbiAgICAgIDEwNyxcbiAgICAgIDEyOCxcbiAgICAgIDExOSxcbiAgICAgIDk4LFxuICAgICAgODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWTVBMU1UU1hcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjQ1MDM0NjQ6MjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NzYxMDA0MzAxNTI0ODoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOUHE5YUFCRUwvMDBMY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlhOd1ZEOTg2d3dZNzRSR096RFRSUlhsSGtnSkt4eVlRRy8yakdvT20zeEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiV3JrR2sxTFZFUkR3TE05K3JBYWdUbVdEckdVdnNhL1ErSXVmbnJaTjNKNnV5aFhBNUpscktWTHR4WFNqYVQwQnRGbElUWlVxYTNHRjFTV25VVzhGRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicFA4cDhmY2lxaW5hb25mTEppZzBka0pDK2ptNVZTblBWNWVFRldFZXAvNk14WnJlNXlkb1VsNzFjOXB5NTJrMVhjRlI1UDdjenZlM0tMZ3FHOENKQ3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEyNDUwMzQ2NDoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI3MjgxNzMyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHZ3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQdncuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
