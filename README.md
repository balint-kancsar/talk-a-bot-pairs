# TalkABot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Készíts egy egyszerű kártya-párkereső játékot Angularban!

  1. jeleníts meg a játékosnak 20 darab kártyát "lefordítva"
  2. ha a játékos rákattint egy kártyára "fordítsd fel" és fedd fel a kártyán lévő képet
  3. amikor a második kártya is felfordult:
    a. ha a kártyák megegyeznek vedd ki őket a játékból
    b. ha különbözőek, fordítsd őket vissza
  4. a játék akkor ér véget, ha a játékos az összes párt megtalálta

A teljes pontszámért teljesítsd az alábbi követelményeket:

  1. használj Redux architektúrájú állapotkezelőt (pl. ngrx)
  2. az alkalmazás legyen reszponzív
  3. adj lehetőséget a játék újrakezdésére, az oldal újratöltése nélkül
  4. jeleníts meg egy pontszámlálót, amit minden 2. kártyafordítás után növelsz
  
Csatolva találsz képeket amiket a kártyákhoz használhatsz.

A megoldást egy github repo link formájában várjuk.