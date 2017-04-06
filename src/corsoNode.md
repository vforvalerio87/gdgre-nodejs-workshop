# GDG Reggio Emilia - Node.js Workshop #

## Scaletta ##

1. Perché una lezione su Node.js
2. Perché JavaScript 
3. Argomento 3


### 1. Perché una lezione su Node.js
Node.js è una runtime estremamente popolare basata su JavaScript, linguaggio estremamente popolare.

Popolarità di JavaScript e Node.js:
* La repository di packages di npm, il package manager di Node.js, è la più grande repository di codice open source del mondo
* Percentuale di utilizzo di JavaScript per tipologia di developer:<sup><a href="#fn1" id="ref1">[1]</a></sup>
    * Back-End: 54,5%
    * Front-End: 90,5%
    * Full-Stack: 85,3%
    * Students: 39,1% (2<sup>o</sup> dopo Java)
    * Mobile: 28,9%
    * Math & Data: 28,6% 

Perché nasce Node.js e che problema risolve:  
concurrency tradizionale basata su thread;  
per la massima parte del tempo, un thread è in attesa di I/O.  

Come Node.js risolve il problema: modello "non-blocking" basato su I/O asincrono con thread singolo e event loop.

## References ##
1. <a href="#ref1">^</a> <cite id="fn1"><a href="http://stackoverflow.com/insights/survey/2016#most-popular-technologies-per-occupation">"Stack Overflow Developer Survey Results 2016: Most Popular Technologies per Dev Type"</a></cite>
