## Steg 0 

Tilsvarende denne filen med den vanlige lenken i seg. 
    
      <body ng-app='directiveDemo'>
      
      <button type="button" class="btn btn-default btn-default">
      <span class="glyphicon glyphicon-send"></span> Send
      </button>    
      
     </body>

## Steg 1 

Vi ser på syntaksen til angular-direktivet og ser at vi kan lage en lenke utav det

    app.directive('direktivNavn', function(){
      return { template: 'vår html her' };
    }); 

Dette defaulter til et atributt og må skrives på formen direktiv-navn for å tilpasse HTML-standarder.

Ser at vi kan navngi vår hhv `demoButton` og `demo-button` og se den samme htmlen i viewet.

    //script.js 
    var app = angular.module('directiveDemo', []);
    
    app.directive('demoButton', function(){
      return { 
        template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> Send</button>' 
        }; 
    }); 

    //index.html
      <body ng-app='directiveDemo'>
      En html-lenke: <span demo-button></span>
     </body>

Inspect og se at det er wrappet i span, si noe om oppsøkingsprosessen? At den leter etter attributt?
Si noe om ferdige direktiver!


Why:
* http://tympanus.net/Development/InlineAnchorStyles/
* http://tympanus.net/codrops/2014/06/04/inspiration-for-inline-anchor-styles/
* CTA på gjensidige https://www.gjensidige.no/privat/kundefordeler/din-side
* Trenger vi flere eksempler?

## Steg 4 se på mulighet for å ha andre titler

Hva viss vi vil ha en annen tittel? 

        template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> Send</button>' 
        
Måten å lage dynamiske templates på er kjent fra andre rammeverk Mustache osv. Template + objekt med keys = html!

Ett interface vi har er selve elementet i index.html! `<span demo-button title="Send feedback"></span>` Hvordan får vi tak i det i koden


> link takes a function with the following signature, function link(scope, element, attrs) { ... } where:

* `scope` is an Angular scope object.
* `element` is the jqLite-wrapped element that this directive matches.
* `attrs` is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.

Vi tar dette en om gangen 

    link: function(scope, element, attrs){
          console.log(attrs);
        },
    template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> {{buttonTitle}}</button>' 

vi ser at det er en array med atributter (nevn internals) og ser at vi nå har verdiene vi ønsker å få inn i html-templaten vår.

element -> vi bryr oss ikke om denne ennå, men det er et jqlite objekt med mulighet for en del manipulering. 
vanskelig å bruke denne til formålet vårt, men jquery kjente vil jo vite at vi kan aksessere htmlen direkte da og sette inn,
men det er ikke den foretrukne måten

det er scope
Kun det som er på scopet blir gjort tilgjengelig for templaten! Husker template + objekt = html --> template + scope = html
Ikke noe lekker ut på window : https://docs.angularjs.org/guide/expression


    link: function(scope, element, attrs){
      scope.buttonTitle = attrs.title;
      scope.link = attrs.to;
      },
      template: '<button type="button" class="btn btn-default btn-default"><span class="glyphicon glyphicon-send"></span> {{buttonTitle}}</button>' 
     
    
Hello world: Scope gir oss to veis databindinger i angular?

## En knapp til!

    Hva med en knapp hit?: <span demo-button title="Post message"></span>

Begge to får samme tekst! `scope` er synderen. Hvordan presentere forklaringen på denne på en ok måte? 
Og hvor lang tid har vi egentlig bruk om vi skal snakke og vise frem til nå?


## Eget scope

Se at de får egen tekst. Kunne vist batarang på denne? 

    scope: true,

Her må vi ha en liten! forklaring på plass for å ikke rote oss inn i isloated scope og total forvirring

## Watches

Tweet Ingvild ser på dette i en egen plunkr

    



## Hva er neste runde etter dette?

ngModel, require


## Bruk av eksisterende direktiver (rekkefølgen kan variere her)

     En html-lenke: <span demo-link to="http://github.com" title="To Github and beyond!"></span>
     To html-lenker: <span demo-link to="http://bitbucket.com"></span>

Vi vil ha en default tekst. Mange veier, emn vi ser på bruk av innebygde direktiver, det er helt ok! `ng-hide`

    template: '<a href="{{link}}">{{dynamicTitle}}<span ng-hide="dynamicTitle">hit</span></a>' 

Legg merke til forskjellen på interpolering av data for visning og resultatet i `ng-hide`, da sistnevnte er uten `{{}}`. <-- MÅ PRESISERES! Må kanskje også researches? ;)
https://docs.angularjs.org/guide/expression

Er det aksept av strings, template vs expression. Se ng-hide. 


#### Tatt ut eller får ikke være med 

* restrict
* transclude
* replace
* templateUrl (kan nevnes i en bisetning)
* selve API
* controllers
* 
## TODO:

- Klarer vi å forklarer hello-world eksempelet? 

## Timing

- Intro : hello-world + diy - 3-4 min
-- Rett på sak!, toveis, direktiv som feature, tett knyning mellom direktiv og toveisbindinger
-- Navn, NTNU, startet, kunde?
-- community, google, 
- Koding
