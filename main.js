// importer

// import getHeure from "./generate.js";

// const heure = getHeure;

// console.log(heure);

// document.body.innerHTML = heure;


// import nom 1

import { nom } from "./user.js";

let nomUtil = document.querySelector("#nomUtil")
nomUtil.textContent = nom

// import user 

import { user } from "./user.js";

// all
let userfullName = document.querySelector("#userfullName");
userfullName.textContent = user.nom + " " + user.prenom + " " + "-"+ " " + user.village;

//1 by 1
let userNom = document.querySelector("#nom");
userNom.innerHTML = user.nom;

let userPrenom = document.querySelector("#prenom");
userPrenom.innerHTML = user.prenom;

let userVille = document.querySelector("#village");
userVille.innerHTML = user.village;


