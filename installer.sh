#!/bin/sh
# Installer RassaBot Free - Termux Friendly (sh-compatible)

clear
echo "Memulai proses install Package untuk RassaBot Clone..."
sleep 2

echo "[+] Updating packages..."
# pkg update -y && pkg upgrade -y

echo "[+] Installing Git..."
# pkg install git -y

echo "[+] Installing Node.js..."
# pkg install nodejs -y

echo "[+] Installing Yarn (via npm)..."
# pkg install yarn

sleep 2
clear
echo "Loading..."
sleep 2
echo "Clean data Loading..."
sleep 2
clear

echo "=========================================="
echo "       Welcome to Installer RassaBot       "
echo "=========================================="
echo ""
echo "   > OS Supported: Android (Termux)"
echo "   > Script Type : RassaBot Free Version"
echo ""
echo "Note: Untuk pengguna Termux, lanjutkan dengan ketik Y"
echo ""

printf "Continue (Y/N)? "
read i

if [ "$i" = "Y" ] || [ "$i" = "y" ]; then
    echo "[+] Memulai proses clone..."
    sleep 1

    cd "$HOME"
    mkdir -p rassabot
    cd rassabot

    echo "[+] Cloning RassaBot Free repository..."
    git clone https://github.com/rassalee/rassabotfree

    cd rassabotfree
    echo "[✓] Clone selesai! Folder ada di: $HOME/rassabot/rassabotfree"
else
    echo "[!] Instalasi dibatalkan."
    exit 0
fi
