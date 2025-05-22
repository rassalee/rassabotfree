#!/data/data/com.termux/files/usr/bin/bash
# Installer RassaBot - by Rangga

clear
echo -e "\e[1;32mMemulai proses install Package Untuk RassaBot Clone...\e[0m"
sleep 2

echo -e "\e[1;36m[+] Updating packages...\e[0m"
pkg update -y && pkg upgrade -y

echo -e "\e[1;36m[+] Installing Git...\e[0m"
pkg install git -y

echo -e "\e[1;36m[+] Installing Node.js...\e[0m"
pkg install nodejs -y

echo -e "\e[1;36m[+] Installing Yarn (global)...\e[0m"
npm install -g yarn

sleep 2
clear
echo -e "\e[1;33mLoading...\e[0m"
sleep 2
echo -e "\e[1;33mClean data Loading...\e[0m"
sleep 2
clear

echo -e "\e[1;35m==========================================\e[0m"
echo -e "\e[1;34m       Welcome to Installer RassaBot       \e[0m"
echo -e "\e[1;35m==========================================\e[0m"
echo ""
echo -e "\e[1;32m   > OS Supported: Android (Termux)\e[0m"
echo -e "\e[1;32m   > Script Type : RassaBot Free Version\e[0m"
echo ""
echo -e "\e[1;33mNote:\e[0m For Termux users, please continue by typing \e[1;36mY\e[0m"
echo ""

read -p $'\e[1;37mContinue (Y/N)? \e[0m' i
if [[ "$i" == "Y" || "$i" == "y" ]]; then
    echo -e "\e[1;32m[+] Starting clone process...\e[0m"
    sleep 1
    cd $HOME
    mkdir -p rassabot
    cd rassabot

    echo -e "\e[1;36m[+] Cloning RassaBot Free Repository...\e[0m"
    git clone https://github.com/rassalee/rassabotfree

    cd rassabotfree

    echo -e "\e[1;32m[✓] Done! Silakan cek folder 'rassabot/rassabotfree'\e[0m"
else
    echo -e "\e[1;31m[!] Installation aborted.\e[0m"
    exit
fi
