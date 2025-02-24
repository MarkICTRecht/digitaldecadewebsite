# digitaldecadewebsite

Inzichtelijk maken van wetgeving en onderliggende documenten in de digital decade.

## Installatie en ontwikkeling

Deze website is gebouwd met [Docusaurus](https://docusaurus.io/), een moderne statische websitegenerator.

### Installatie

Voer het volgende commando uit om de benodigde afhankelijkheden te installeren:

$ yarn

perl
Kopiëren
Bewerken

### Lokale ontwikkeling

Start een lokale ontwikkelserver en open een browservenster met:

$ yarn start

shell
Kopiëren
Bewerken

De meeste wijzigingen worden live weergegeven zonder dat je de server opnieuw hoeft te starten.

### Build

Om de website te bouwen en statische bestanden te genereren:

$ yarn build

perl
Kopiëren
Bewerken

Deze opdracht genereert statische inhoud in de `build` map, die kan worden gehost op een statische webserver.

### Deployment

#### Met SSH:

$ USE_SSH=true yarn deploy

shell
Kopiëren
Bewerken

#### Zonder SSH:

$ GIT_USER=<Jouw GitHub gebruikersnaam> yarn deploy

markdown
Kopiëren
Bewerken

Als je **GitHub Pages** gebruikt voor hosting, is dit een handige manier om de website te bouwen en te pushen naar de `gh-pages` branch.
