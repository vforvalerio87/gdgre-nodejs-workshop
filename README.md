# GDG Reggio Emilia - Node.js Workshop #
## by [Soluzioni Futura](https://www.soluzionifutura.it/) ##

* * *

## Scaletta ##

1. Perché una lezione su Node.js
2. ...
3. Servire un'applicazione Node.js


### 1. Perché una lezione su Node.js
Node.js è una runtime estremamente popolare per scrivere software lato server. Nasce nel 2009.<sup id="ref1">[[1]](#fn1)</sup>  
Node.js è basato su JavaScript.  
Sia Node.js che JavaScript sono attualmente estremamente popolari.

Popolarità di JavaScript e Node.js:
* La repository di packages di npm, il package manager di Node.js, è la più grande repository di codice open source del mondo
* Percentuale di utilizzo di JavaScript per tipologia di developer:<sup id="ref2">[[2]](#fn2)</sup>
    * Back-End: 54,5%
    * Front-End: 90,5%
    * Full-Stack: 85,3%
    * Students: 39,1% (2<sup>o</sup> dopo Java)
    * Mobile: 28,9%
    * Math & Data: 28,6% 

Perché nasce Node.js e che problema risolve:  
concurrency tradizionale basata su thread;  
per la massima parte del tempo, un thread è in attesa di I/O.  

Come Node.js risolve il problema: modello "non-blocking" basato su I/O asincrono con thread singolo e event loop.<sup id="ref3">[[1]](#fn1)</sup>  

### 3. Servire un'applicazione Node.js
La tipica applicazione Node.js veicolata tramite un web framework come Express o Koa è un processo che implementa il protocollo HTTP ed è in grado di accettare richieste e inviare risposte.
Le porte tipicamente utilizzate per applicazioni HTTP pubbliche sono la 80 per l'HTTP e la 443 per l'HTTPS.
Runtime tradizionali come PHP che comunicano con un web server tramite protocollo CGI o sue varianti lasciano l'implementazione del protocollo HTTP al web server (es: Apache o NGINX).
Nel caso di Node.js in cui ogni applicazione implementa un server web indipendente sono necessari due elementi fondamentali:
* Un server web che funge da proxy, in grado di intercettare le richieste HTTP provenienti sulla porta 80 e/o 443 e proxarle sulle applicazioni Node.js (http://localhost:****)
* Un sistema per la gestione dei processi monitori l'esecuzione dei processi di Node.js, li avvii all'accensione della macchina e li riavvii in caso di crash

Soluzione facile e veloce:
1. Installare [pm2](http://pm2.keymetrics.io/) da npm
2. Installare [NGINX](https://www.nginx.com/)
2. Utilizzare pm2 per creare uno script di startup per la propria applicazione; pm2 si interfaccia con il sistema di init nativo del proprio sistema operativo<sup id="ref4">[[3]](#fn3)</sup>
3. Configurare NGINX come reverse proxy per dirigere le richieste verso le applicazioni Node.js<sup id="ref5">[[4]](#fn4)</sup>

### Autori ###
* [Giovanni Bruno](https://www.facebook.com/giovanni.bruno)
* [Valerio Versace](https://www.facebook.com/valce)

* * *

## References ##
1. <sup id="fn1">^ [a](#ref1) [b](#ref3)</sup> <cite>["Ryan Dahl: Original Node.js presentation"](https://www.youtube.com/watch?v=ztspvPYybIY)
2. <sup id="fn2">[^](#ref2)</sup> <cite>["Stack Overflow Developer Survey Results 2016: Most Popular Technologies per Dev Type"](http://stackoverflow.com/insights/survey/2016#most-popular-technologies-per-occupation)
3. <sup id="fn3">[^](#ref4)</sup> <cite>["pm2: Init systems supported"](http://pm2.keymetrics.io/docs/usage/startup/#init-systems-supported)
4. <sup id="fn4">[^](#ref5)</sup> <cite>["Using nginx as a reverse proxy in front of your Node.js application"](http://www.nikola-breznjak.com/blog/javascript/nodejs/using-nginx-as-a-reverse-proxy-in-front-of-your-node-js-application/)
