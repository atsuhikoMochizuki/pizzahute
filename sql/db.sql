CREATE TABLE if not exists utilisateurs (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(70) NULL,
    pass VARCHAR(70) NULL,
    nom VARCHAR(70) NULL,
    prenom VARCHAR(70) NULL
);