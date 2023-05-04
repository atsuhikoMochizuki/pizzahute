#! /usr/bin/bash

#Colors output*/
FAILURE='\033[0;31m'
WARNING='\033[1;33m'
SUCCESS='\033[0;32m'
INFO='\033[0;34m'
NC='\033[0m'

clear
cat << EOF
  __  __            _     _           _    _                      
 |  \/  |          | |   (_)         | |  (_)                     
 | \  / | ___   ___| |__  _ _____   _| | ___                      
 | |\/| |/ _ \ / __| '_ \| |_  / | | | |/ / |                     
 | |  | | (_) | (__| | | | |/ /| |_| |   <| |                     
 |_|  |_|\___/ \___|_| |_|_/___|\__,_|_|\_\_|                     
   _____                          _____           _           _   
  / ____|                        |  __ \         (_)         | |  
 | (___   ___ _ ____   _____ _ __| |__) | __ ___  _  ___  ___| |_ 
  \___ \ / _ \ '__\ \ / / _ \ '__|  ___/ '__/ _ \| |/ _ \/ __| __|
  ____) |  __/ |   \ V /  __/ |  | |   | | | (_) | |  __/ (__| |_ 
 |_____/ \___|_|    \_/ \___|_|  |_|   |_|  \___/| |\___|\___|\__|
  / ____|                         | |           _/ |              
 | |  __  ___ _ __   ___ _ __ __ _| |_ ___  _ _|__/               
 | | |_ |/ _ \ '_ \ / _ \ '__/ _\ | __/ _ \| '__|                 
 | |__| |  __/ | | |  __/ | | (_| | || (_) | |                    
  \_____|\___|_| |_|\___|_|  \__,_|\__\___/|_|       
 Générateur de projet
 version 1.1
 by Atsuhiko Mochizuki


EOF

printf "${INFO}"
read -p "Entrez le nom de l'application svp:" uservar

printf "${INFO}"
echo "[]Génération de l'application $uservar..."
echo "[]Moteur de vue:PUG"
echo "[]Génération de CSS :sass"
echo "[]Création d'un .gitignore"

express --view=pug -css sass --git $uservar
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

echo "[]Copie de la bibliothèque Bootstrap dans le dossier public"
cp ./node_modules/bootstrap/dist/css/bootstrap.min.css ./public/stylesheets/bootstrap.min.css
cp ./node_modules/bootstrap/dist/css/bootstrap.css.map ./public/stylesheets/bootstrap.css.map
cp ./node_modules/bootstrap/dist/css/bootstrap.min.css.map ./public/stylesheets/bootstrap.min.css.map
cp ./node_modules/bootstrap/dist/js/bootstrap.min.js ./public/javascripts/bootstrap.min.js

echo "[]Insertion du lien vers la bibliothèque Bootstrap dans le layout général des vues"
rm ./views/layout.pug
touch ./views/layout.pug
cat >> ./views/layout.pug<< EOF
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
    link(rel='stylesheet', href='/stylesheets/bootstrap.min.css')
    link(rel='stylesheet', href='/stylesheets/bootstrap.css.map')
    link(rel='stylesheet', href='/stylesheets/bootstrap.min.css.map')
    
    link(rel='javascripts', href='/javascripts/bootstrap.min.js')
    
  body
    block content
EOF

echo "[]Copie des fichiers..."
mkdir public/images/logos/
cd ..
cp ressources/mochizuki_logo.png ./$uservar/public/images/logos/mochizuki_logo.png
cp ressources/github_logo_large.png ./$uservar/public/images/logos/github_logo_large.png
cp ressources/github_logo_xsmall.png ./$uservar/public/images/logos/github_logo_xsmall.png
cp ressources/ConceptionProjet_Template.pdf ./$uservar/README.md
cp ressources/ConceptionProjet_Template.odt ./$uservar/README.md
cp ressources/commitAndPush.sh ./$uservar/commitAndPush.sh
cp ressources/README.md ./$uservar/README.md
cp ressources/ConceptionProjet_Template.pdf ./$uservar/ConceptionProjet_Template.pdf
cp ressources/ConceptionProjet_Template.odt ./$uservar/ConceptionProjet_Template.odt



echo "[]Génération d'une page d'accueil"
rm ./$uservar/views/index.pug
touch ./$uservar/views/index.pug
cat >> ./$uservar/views/index.pug<< EOF
extends layout
block content
  .container.text-center
    img(src="./images/logos/mochizuki_logo.png" class="text-center")
    .row.align-items-center
      h1.col PIZZAHUTTE
    .row.mt-3
    form
      .mb-3
        .row
          .col-3.bg-white
          input#exampleInputEmail1.form-control(type='email', aria-describedby='emailHelp' class="col")
          .col-3.bg-white
        label.form-label(for='exampleInputEmail1' class="col") Email
      .mb-3
        .row
          .col-3.bg-white
          input#exampleInputPassword1.form-control(type='password' class='col')
          .col-3.bg-white
        label.form-label(for='exampleInputPassword1') Mot de passe
      .mb-3
        a(href='#')
          button.btn.btn-primary.mb-2(type='submit') Se connecter
        a.text-decoration-none(href='#')
          p mot de passe oublié ?
      .mt-5
        a.text-decoration-none.mt-2(href='https://github.com/atsuhikoMochizuki')
          img(src="./images/logos/github_logo_xsmall.png" alt="")
          p https://github.com/atsuhikoMochizuki
        p @Atsuhiko_Mochizuki - 2023 - Tous droits réservés
EOF

echo "[]Génération du script de lancement"
touch  ./$uservar/DemarrageServeur.sh
cat >> ./$uservar/DemarrageServeur.sh << EOF
#Commande de lancement du serveur.
#Ce dernier est par défaut en écoute sur le port 3000.
#Soit localhost:8888 dans un navigateur

printf "Mochizuki"
printf "ServerProjetGenerator v1.1"
printf "by Atsuhiko_Mochizuki - 2023\n"
echo "Lancement du serveur sur le port 3000..."
printf "${WARNING}"
npm start
EOF

touch  ./$uservar/ATTENTION_aucun_dossier_.git_PRESENT
cat >> ./$uservar/ATTENTION_aucun_dossier_.git_PRESENT << EOF
Pour terminer la procédure de création du projet, copier le contenu du dossier présent dans un projet Git cloné vierge, puis lancer le script commitAndPush.sh"
@Atsuhiko Mochizuki
EOF
printf "\n${SUCCESS}[]Génération du projet terminé.\n"

printf "\n${SUCCESS}[${WARNING}ATTENTION${SUCCESS}] Pour terminer la procédure, veuillez copier son contenu dans un projet Git cloné vierge, puis lancer le script commitAndPush.sh${NC}\n"
