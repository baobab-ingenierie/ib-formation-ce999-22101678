// Génération dynamique de code à l'ancienne !

// Tableau de données
var team = [
    ['Jean-François PAU', 'DSI Pôle Emploi : expert PowerApps', 'Lesquin'],
    ['Alain TRINE', 'DSI Pôle Emploi : expert Fortran, COBOL, VB et WinDev', 'Houilles'],
    ['David BOUQUET', 'ESN Gestion de matériels : expert Front-end', 'Antony'],
    ['Matthieu PECHALRIEUX', 'Responsable portail documentaire : expert documentaliste et juriste', 'Toulouse'],
    ['Thierry MAGNANI', 'Référent technique : expert Oracle, FormBuilder et Web', 'Antibes'],
    ['Vinh Ki BOUN', 'Développeur VBA + SQL : montée en compétence sur C#', 'Luxembourg'],
    ['Lesly LODIN', 'iB Formation : Formateur Web Dév. et BDD', 'La Défense'],
    ['Gaston LAGAFFE', 'Gros fainéant devant l\'éternel', 'Bruxelles']
];

// Parcourt le tableau pour générer le code HTML
for (let i = 0; i < team.length; i++) {
    document.write('<article class="member"><figure><img src="https://robohash.org/' + (Math.ceil(Math.random() * 100)) + '.png?bgset=bg1&set=set5"><h3>' + team[i][0] + '</h3></figure><p>' + team[i][1] + '</p><a href="https://maps.google.com/maps?q=' + team[i][2] + '" target="_blank">En savoir plus</a></article>');
}