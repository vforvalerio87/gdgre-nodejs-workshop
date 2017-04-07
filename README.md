# GDG Reggio Emilia - Node.js Workshop #
## by [Soluzioni Futura](https://www.soluzionifutura.it/) ##

* * *

### Scaletta ###

* Ora 1: Talk e preparazione ([installazione Node.js](https://nodejs.org/))
* Ora 2: Esercizi [learnyounode](https://nodeschool.io/#get-going)

1. <a href="#chap1" id="toc1">Perché una lezione su Node.js</a>
2. <a href="#chap2" id="toc2">Perché nasce Node.js e che problema risolve</a>
3. <a href="#chap3" id="toc3">Node.js e JavaScript: vantaggi e peculiarità</a>
4. <a href="#chap4" id="toc4">Servire un'applicazione Node.js</a>
5. <a href="#chap5" id="toc5">JavaScript oggi</a>
6. <a href="#chap6" id="toc6">JavaScript in Soluzioni Futura</a>

### 1. Perché una lezione su Node.js <a href="#toc1" id="chap1">^</a>###
Node.js è una runtime estremamente popolare per scrivere software lato server. Nasce nel 2009.<sup id="ref10">[[1]](#fn10)</sup>  
Node.js è basato su JavaScript.  
Sia Node.js che JavaScript sono attualmente estremamente popolari.

Popolarità di JavaScript e Node.js:
* La repository di packages di npm, il package manager di Node.js, è la più grande repository di codice open source del mondo
* Percentuale di utilizzo di JavaScript per tipologia di developer:<sup id="ref11">[[2]](#fn20)</sup>
    * Back-End: 54,5%
    * Front-End: 90,5%
    * Full-Stack: 85,3%
    * Students: 39,1% (2<sup>o</sup> dopo Java)
    * Mobile: 28,9%
    * Math & Data: 28,6% 

### 2. Perché nasce Node.js e che problema risolve <a href="#toc2" id="chap2">^</a>###
Nei sistemi utilizzati tradizionalmente per le applicazioni web la concurrency è basata su thread;  
per la massima parte del tempo, un thread è in attesa di I/O.  

Come Node.js risolve il problema: modello "non-blocking" basato su I/O asincrono con thread singolo e event loop.<sup id="ref20">[[1]](#fn10)</sup>  

### 3. Node.js e JavaScript: vantaggi e peculiarità <a href="#toc3" id="chap3">^</a>###
* Alte prestazioni, in particolare per il web in cui il computing è scarso, le connessioni concorrenti sono tante e l'I/O è frequente e con lunghi tempi d'attesa
* Unico linguaggio per tutto lo stack;  
al cambio di linguaggio è associato un drop di produttività (context-switching penalty)
* Il JavaScript è l'unico linguaggio di scripting utilizzabile nel browser;  
poiché Node.js utilizza JavaScript consente di renderizzare HTML sul server con lo stesso codice utilizzato nel browser
* Implementazione nativa universale di JSON parse/stringify; ideale per API JSON e per uso nel client
* Gira nativamente o compila per numerose runtime:
    * Computer / server
    * Web browser
    * Mobile - web wrappato (es: Phonegap)
    * Mobile nativo (es: React native)
    * Desktop - web wrappato (es: Electron)
    * IoT
    * Cloud PaaS, Function/Code as a Service (es: AWS Lambda, Google Cloud Functions)

### 4. Servire un'applicazione Node.js <a href="#toc4" id="chap4">^</a>###
La tipica applicazione web Node.js è un processo che implementa il protocollo HTTP ed è in grado di accettare richieste e inviare risposte.
Le porte tipicamente utilizzate per applicazioni HTTP pubbliche sono la 80 per l'HTTP e la 443 per l'HTTPS.
Runtime tradizionali come PHP che comunicano con un web server tramite protocollo CGI o sue varianti lasciano l'implementazione del protocollo HTTP al web server (es: Apache o NGINX).
Nel caso di Node.js in cui ogni applicazione implementa un server web indipendente sono necessari due elementi fondamentali:
* Un server web che funge da proxy, in grado di intercettare le richieste HTTP provenienti sulla porta 80 e/o 443 e proxarle sulle applicazioni Node.js (localhost:****)
* Un sistema per la gestione dei processi monitori l'esecuzione dei processi di Node.js, li avvii all'accensione della macchina e li riavvii in caso di crash

Soluzione facile, veloce e production-ready:
1. Installare [pm2](http://pm2.keymetrics.io/) da npm
2. Installare [NGINX](https://www.nginx.com/)
3. Utilizzare pm2 per creare uno script di startup per la propria applicazione;  
pm2 si interfaccia con il sistema di init nativo del proprio sistema operativo<sup id="ref40">[[3]](#fn40)</sup>
4. Configurare NGINX come reverse proxy per dirigere le richieste verso le applicazioni Node.js<sup id="ref41">[[4]](#fn41)</sup>

### 5. JavaScript oggi <a href="#toc5" id="chap5">^</a>###

### 6. JavaScript in Soluzioni Futura <a href="#toc6" id="chap6">^</a>###
Alcuni esempi di come utilizziamo JavaScript in Soluzioni Futura:
* Sviluppo di framework per API
* Applicazioni per browser e server
    * Backend (JSON API)
    * Server frontend (server-side rendering)
    * Single-Page Applications
    * Universal applications (rendering client e server-side con JavaScript)
* Applicazioni serverless (basate su AWS Lambda)
* Tool ad uso interno (es: CLI)
* Chat bot (es: Telegram)
* Script per l'automazione dell'infrastruttura

È tutto! Happy Node.js!

### Autori ###
* [Giovanni Bruno](https://www.facebook.com/giovanni.bruno)
* [Valerio Versace](https://www.facebook.com/valce)

* * *

## References ##
1. <sup>^ [a](#ref10) [b](#ref20)</sup> <cite><a id="fn10" href="https://www.youtube.com/watch?v=ztspvPYybIY">"Ryan Dahl: Original Node.js presentation"</a></cite>
2. <sup>[^](#ref11)</sup> <cite><a id="fn20" href="http://stackoverflow.com/insights/survey/2016#most-popular-technologies-per-occupation">"Stack Overflow Developer Survey Results 2016: Most Popular Technologies per Dev Type"</a></cite>
3. <sup>[^](#ref40)</sup> <cite><a id="fn40" href="http://pm2.keymetrics.io/docs/usage/startup/#init-systems-supported">"pm2: Init systems supported"</a></cite>
4. <sup>[^](#ref41)</sup> <cite><a id="fn41" href="http://www.nikola-breznjak.com/blog/javascript/nodejs/using-nginx-as-a-reverse-proxy-in-front-of-your-node-js-application/">"Using nginx as a reverse proxy in front of your Node.js application"</a></cite>
