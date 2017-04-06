# GDG Reggio Emilia - Node.js Workshop #
## by [Soluzioni Futura](https://www.soluzionifutura.it/) ##

* * *

### Scaletta ###

* Ora 1: Talk e preparazione ([installazione Node.js](https://nodejs.org/))
* Ora 2: Esercizi [learnyounode](https://nodeschool.io/#get-going)

1. Perché una lezione su Node.js
2. Perché nasce Node.js e che problema risolve
3. ...
4. Servire un'applicazione Node.js

### 1. Perché una lezione su Node.js ###
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

### 2. Perché nasce Node.js e che problema risolve: ###
Nei sistemi utilizzati tradizionalmente per le applicazioni web la concurrency è basata su thread;  
per la massima parte del tempo, un thread è in attesa di I/O.  

Come Node.js risolve il problema: modello "non-blocking" basato su I/O asincrono con thread singolo e event loop.<sup id="ref20">[[1]](#fn10)</sup>  

### 4. Servire un'applicazione Node.js ###
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

È tutto! Happy Node.js!

### Autori ###
* [Giovanni Bruno](https://www.facebook.com/giovanni.bruno)
* [Valerio Versace](https://www.facebook.com/valce)

* * *

## References ##
1. <sup>^ [a](#ref10) [b](#ref20)</sup> <cite id="fn10">["Ryan Dahl: Original Node.js presentation"](https://www.youtube.com/watch?v=ztspvPYybIY)</cite>
2. <sup>[^](#ref11)</sup> <cite id="fn20">["Stack Overflow Developer Survey Results 2016: Most Popular Technologies per Dev Type"](http://stackoverflow.com/insights/survey/2016#most-popular-technologies-per-occupation)</cite>
3. <sup>[^](#ref40)</sup> <cite id="fn40">["pm2: Init systems supported"](http://pm2.keymetrics.io/docs/usage/startup/#init-systems-supported)</cite>
4. <sup>[^](#ref41)</sup> <cite id="fn41">["Using nginx as a reverse proxy in front of your Node.js application"](http://www.nikola-breznjak.com/blog/javascript/nodejs/using-nginx-as-a-reverse-proxy-in-front-of-your-node-js-application/)</cite>
