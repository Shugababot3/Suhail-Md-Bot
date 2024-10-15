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

  sessionName:process.env.SESSION_ID || "SUHAIL_18_32_10_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjE1LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTExLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMixcbiAgICAgICAgODQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDQyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA1MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE0LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MixcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnQlpQTDlFaDEvMlcwQTZBbUNEMTBvbGFDZjA5cWRnNDUwZkdEeDQvTDFZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxMjQ1MDM0NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYzQjA1MjlERUQ3QTdBQ0IzQUM1OThGMEMxQTg1RTdEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTAxNzE1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTeEtDWkFZU1RmMmcwR1NpRVpfRjV3XCIsXG4gIFwicGhvbmVJZFwiOiBcImM3MWY0ODk5LThmYWYtNDUyZC1iN2I5LTU3ZDdkODM1NjFmY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxOCxcbiAgICAgIDc0LFxuICAgICAgODUsXG4gICAgICA2NSxcbiAgICAgIDExNSxcbiAgICAgIDIxOSxcbiAgICAgIDE3MCxcbiAgICAgIDE3NCxcbiAgICAgIDE4NSxcbiAgICAgIDE4MixcbiAgICAgIDIzMCxcbiAgICAgIDE1NixcbiAgICAgIDI1MyxcbiAgICAgIDEzMCxcbiAgICAgIDYwLFxuICAgICAgMTA4LFxuICAgICAgMTgxLFxuICAgICAgMTIsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAyMTgsXG4gICAgICA0NyxcbiAgICAgIDkzLFxuICAgICAgMTE0LFxuICAgICAgODQsXG4gICAgICAyMDUsXG4gICAgICAyMDEsXG4gICAgICAyLFxuICAgICAgMTM3LFxuICAgICAgNjksXG4gICAgICA2NCxcbiAgICAgIDIwNSxcbiAgICAgIDIzNCxcbiAgICAgIDE2NixcbiAgICAgIDEzMyxcbiAgICAgIDE3NCxcbiAgICAgIDM3LFxuICAgICAgMjQxLFxuICAgICAgMjIwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlFQQTNQOVlYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI0NTAzNDY0OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc2MTAwNDMwMTUyNDg6MzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUcvaVRVUXRlcTZ1QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqZmpwZnNydFZuK2RvUk5KYTMrWnA3dEFwMWxwZm9idEpGTHBsLzhtTnlJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkVWL1hCdnVXQTVhRmtONlR2K3dENFZrQ3lveHRtK0twRjl5TTQrT1lBS1FrSE04RTBkdUF2QjVIeFpxM1RFMjIxTXZScml2SStVcWI1emdjb0N2UENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlptZHllVGFuQmk5T1B6R1A2UElaVGFqWEFCTGZHNENpSUQ4SlBMTkZxN3FjZGFaaHJPTEZGUi9PS2wxU0s0dlNhZjAxYUltS1A0SXh4MmFtZnBuZWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjQ1MDM0NjQ6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTAxNzE0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlnMFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSWcwLmpzb24iOiAie1wia2V5RGF0YVwiOlwieXNJbEtOMkNvWnUyWlZuSGl0a29KR2d0eDk3WUNhaDgwaVdiMHVLZjZxdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTEzMDQ1NzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
