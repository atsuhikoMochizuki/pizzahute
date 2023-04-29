#! /usr/bin/bash
clear
cat << EOF

  _____ _____ ____________         _    _ _    _ _______ _______ ______
 |  __ \_   _|___  /___  /   /\   | |  | | |  | |__   __|__   __|  ____|
 | |__) || |    / /   / /   /  \  | |__| | |  | |  | |     | |  | |__
 |  ___/ | |   / /   / /   / /\ \ |  __  | |  | |  | |     | |  |  __|
 | |    _| |_ / /__ / /__ / ____ \| |  | | |__| |  | |     | |  | |___
 |_|   |_____/_____/_____/_/    \_\_|  |_|\____/   |_|     |_|  |______|
 Générateur de projet
 version 1.0
 by Atsuhiko Mochizuki


EOF

read -p "Entrez le nom de l'application svp:" uservar
echo "[]Génération de l'application $uservar..."
echo "[]Moteur de vue:PUG"
echo "[]Génération de CSS :sass"
echo "[]Création d'un .gitignore"

express --pug -css sass --view pug --git $uservar
cd $uservar

echo "[]Installation des dépendances..."
echo "[]	--nodemon"
npm install nodemon --save-dev
echo "[]	--bootstrap"
npm install bootstrap --save
echo "[]	--socket.io"
npm install socket.io --save
echo "[]	--body-parser"
npm install body-parser --save

echo "[]Test du serveur"
echo -e "\033[31m []Serveur en attente : veuillez entrer dans un navigateur 'localhost:3000'\033[1;32m"
DEBUG=$uservar:* npm start




