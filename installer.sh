#!/bin/sh
# Installer RassaBot Free - Termux Friendly (sh-compatible)

clear
echo "Memulai proses install Package untuk RassaBot Clone..."
sleep 2

echo "[+] Updating packages..."
pkg update
pkg upgrade

echo "[+] Installing Git..."
pkg install git

echo "[+] Installing Node.js..."
pkg install nodejs

echo "[+] Installing Yarn (via npm)..."
pkg install yarn

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
echo "Note: Untuk pengguna Termux"
echo ""

sleep 5

echo "[+] Memulai proses clone..."
sleep 1
cd "$HOME"
mkdir -p rassabot
cd rassabot

echo "[+] Cloning RassaBot Free repository..."
git clone https://github.com/rassalee/rassabotfree

cd rassabotfree
echo "[✓] Clone selesai! Folder ada di: $HOME/rassabot/rassabotfree"

echo "Install Node_Modules - yarn"
yarn


echo "Siap digunakan"
cd 
cd rassabot
cd rassabotfree
