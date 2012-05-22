import './config.js'
import { fetchLatestBaileysVersion } from 'raileys'
import cfont from "cfonts";
import { spawn } from 'child_process';
import { createInterface } from "readline";
import { promises as fsPromises } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sizeFormatter } from 'human-readable';

import axios from 'axios';
import os from 'os';
import path from 'path';
import moment from 'moment-timezone'
import fs from 'fs';
import yargs from "yargs";
import express from 'express';
import chalk from 'chalk';

let formatSize = sizeFormatter({
	std: 'JEDEC',
	decimalPlaces: '2',
	keepTrailingZeroes: false,
	render: (literal, symbol) => `${literal} ${symbol}B`
})
const { 
 say } = cfont
const {
 tz } = moment
const app = express();
const port = process.env.PORT || 8082;
const time = tz('Asia/Jakarta').format('HH:mm:ss');
//const currentFilePath = new URL(import.meta.url).pathname;
const currentFilePath = fileURLToPath(import.meta.url);


const __dirname = dirname(fileURLToPath(import.meta.url))

let bot_ku = 'RassaBot'
say(bot_ku, {
  font: "simpleBlock",
  align: "center",
  gradient: ["yellow", "cyan", "red"],
  transitionGradient: 1,
})
say('by ' + info.nameown, {
  font: "tiny",
  align: "center",
  colors: ["white"]
})
app.listen(port, () => {
  console.log(chalk.green(`🔥Port ${port} telah terbuka`));
});
const folderPath = './tmp';
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        console.log(chalk.green('Folder tmp berhasil dibuat.'));
        }
        
let isRunning = false;

const rl = createInterface(process.stdin, process.stdout)

async function start(file) {
    if (isRunning) return;
  isRunning = true;

  const args = [join(dirname(currentFilePath), file), ...process.argv.slice(2)];
  const p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
  });
    p.on("message", data => {
    console.log(chalk.magenta("[ ✅ Accepted  ]", data))
        switch (data) {
            case "reset":
                p.process.kill()
                isRunning = false
                start.apply(this, arguments)
                break
            case "uptime":
                p.send(process.uptime())
                break
        }
    })
    p.on("exit", (_, code) => {
        isRunning = false
        console.error("[❗] Keluar dengan kode :", code)
        if (code !== 0) return start(file)
        watchFile(args[0], () => {
            unwatchFile(args[0])
            start(file)
        })
    })
    
    let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
    if (!opts["test"])
        if (!rl.listenerCount()) rl.on("line", line => {
            p.emit("message", line.trim())
        })


const packageJsonPath = join(dirname(currentFilePath), './package.json');
const pluginsFolder = join(dirname(currentFilePath), 'plugins');
console.log(pluginsFolder)
console.log(pluginsFolder)
const totalFoldersAndFiles = await getTotalFoldersAndFiles(pluginsFolder);
  fs.readdir(pluginsFolder, async (err, files) => {
    if (err) {
      console.error(chalk.red(`Folder Plugins Error: ${err}`));
      return;
    }

    try {
      console.log(chalk.bgGreen(chalk.white(`Library Baileys Versi ${(await fetchLatestBaileysVersion()).version} Telah Terinstall`)));
    } catch (e) {
      console.error(chalk.bgRed(chalk.white('Library Baileys Tidak Terinstall')));
    }
  })
  setInterval(() => {}, 1000);
}

function getTotalFoldersAndFiles(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        let folders = 0;
        let filesCount = 0;
        files.forEach((file) => {
          const filePath = join(folderPath, file);
          if (fs.statSync(filePath).isDirectory()) {
            folders++;
          } else {
            filesCount++;
          }
        });
        resolve({ folders, files: filesCount });
      }
    });
  });
}
start('main.js');