import { watchFile, unwatchFile } from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";

// Global Settings
global.setting = {
  autoclear: false
};
global.freePremium = false;
// Owner Information
global.owner = [["6287716666124", "Rangga", true]];

// Bot Information
global.info = {
  nomerbot: "6287731941545", 
  pairingNumber: "6287731941545", 
  nameown: "Rangga",
  nomerown: "62877166661241",
  packname: "sticker by",
  author: "bot wa free +62 851-7975-7729",
  namebot: "Rassa",
  wm: "bot wa free +62 851-7975-7729",
  stickpack: "Rassa",
  stickauth: "bot wa free +62 851-7975-7729",
};


global.maxwarn = 5;

// URLs
global.url = {
  profil: "https://files.catbox.moe/ijeati.jpg",
  thumbnail: "https://raw.githubusercontent.com/rassa7113/image_bot/refs/heads/main/Graident%20Ai%20Robot.jpg",
  thumb: "https://raw.githubusercontent.com/rassa7113/image_bot/refs/heads/main/Graident%20Ai%20Robot.jpg",
  logo: "https://raw.githubusercontent.com/rassa7113/image_bot/refs/heads/main/Graident%20Ai%20Robot.jpg",
  unReg: "https://telegra.ph/file/ef02d1fdd59082d05f08d.jpg",
  registrasi: "https://itzpire.com/file/6ead5b50254b.jpg",
  confess: "https://telegra.ph/file/03cabea082a122abfa5be.jpg",
  akses: "https://telegra.ph/file/6c7b9ffbdfb0096e1db3e.jpg",
  wel: "https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4", // Welcome GIF
  bye: "https://telegra.ph/file/1c05b8c019fa525567d01.mp4", // Goodbye GIF
  sound: "https://media.vocaroo.com/mp3/1awgSZYHXP3B", // Audio menu
  sig: "",
  sgh: "",
  sgc: "https://chat.whatsapp.com/F3nOKgMiZ3I6GCdkMbcECf",
};
global.urlgc = "https://chat.whatsapp.com/F3nOKgMiZ3I6GCdkMbcECf";


let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
