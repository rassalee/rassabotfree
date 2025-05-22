echo "Memulai proses install Package Untuk RassaBot Clone"
sleep 3
pkg update -y && upgrade -y
pkg install git
pkg install nodejs
pkg install -g yarn
clear
echo "Loading..."
sleep 3
echo "Clean data Loading..."
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
    echo -e "\e[1;32mStarting installation...\e[0m"
    # Tambahkan perintah install di sini
    cd
    mkdir rassabot
    cd rassabot
    git clone https://github.com/rassalee/rassabotfree
    cd rassabotfree
else
    echo -e "\e[1;31mInstallation aborted.\e[0m"
    exit
fi
