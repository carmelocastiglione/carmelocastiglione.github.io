---
layout: page
title: Sistemi e Reti
permalink: /sistemireti
---

## Schema di svolgimento della prova scritta di Sistemi e Reti

### Analisi della situazione “as is” (stato attuale)

Formulare tutte le ipotesi che non si evincono dal testo. Se richiesto, realizzare uno schema grafico della rete. In ogni caso sarebbe opportuno fare degli schemi qualitativi della rete attuale e le modifiche da apportare.

### Analisi dello stato “to be” (progetto da realizzare)

Predisporre un progetto di rete che possa tenere in considerazione eventuali espansioni future della rete (numero di device connessi o infrastruttura della rete).
Disegnare una rete inserendo tutti gli elementi richiesti, in particolar modo host, switch, router, firewall. Definire le sottoreti con relative subnet mask. Dopo lo schema, scrivere tutte le caratteristiche del progetto.
Analisi delle peculiarità del progetto:
- Infrastruttura su più piani
- Necessità di utilizzare tecnologie wireless
- Utilizzo di schede per acquisire dati dai sensori

#### Strato fisico
Standard:
- Ethernet (velocità fino a 10 Mbit/s). Standard 10BASE-T: utilizza cavi in rame UTP e connettori RJ-45. Supporta distanze fino a 100 metri.
- Fast Ethernet (velocità fino a 100 Mbit/s). Standard 100BASE-TX: utilizza cavi in rame UTP e connettori RJ-45. Supporta distanze fino a 100 metri.
- Gigabit Ethernet (velocità fino a 1 Gbit/s). Standard 1000BASE-TX: richiede che tutti gli apparati e i dispositivi di rete supportino tale standard. Ad oggi è lo standard più utilizzato. Supporta distanze fino a 100 metri.
- Fibra. Standard 1000BASE-LX o 1000BASE-SX: supporta distanze fino a 5km. E' la tecnologia più costosa, ma è l'unica soluzione possibile per distanze superiori a 100 metri.

Topologia della rete:
- Bus: tutti i dispositivi sono connessi ad un unico cavo. In caso di guasto del cavo, tutta la rete è compromessa. Non è più utilizzata.
- Stella (è la topologia più comune): tutti i dispositivi sono connessi a un nodo centrale. In caso di guasto del nodo centrale, tutta la rete è compromessa. E' la topologia più utilizzata, soprattutto se si utilizza uno switch come nodo centrale. In questo modo, in caso di guasto di un dispositivo, la rete non è compromessa.
- Anello: i dispositivi sono collegati in un anello chiuso. In caso di guasto di un dispositivo, la rete può essere compromessa. E' una topologia poco utilizzata, soprattutto se non si implementano meccanismi di ridondanza (ad esempio, con doppio anello).
- Maglia: ogni dispositivo è collegato a più dispositivi. Offre alta ridondanza e affidabilità. E' una topologia costosa e complessa da implementare, ma è utilizzata in reti di grandi dimensioni o in ambienti critici.

Tipologia di cavi:
Per distanze inferiori a 100 metri si usano cavi in rame UTP. Utilizzare da CAT5E in su:

- CAT5: fino a 100 Mb/s. E' uno standard ormai obsoleto, non più utilizzato. Supporta distanze fino a 100 metri.
- CAT5E: fino a 1 Gb/s. E' lo standard più utilizzato, supporta distanze fino a 100 metri.
- CAT6: fino a 1 Gb/s. E' uno standard più performante rispetto al CAT5E, supporta distanze fino a 100 metri. Supporta anche velocità fino a 10 Gb/s, ma solo per distanze inferiori a 55 metri.
- CAT7: fino a 10 Gb/s. E' uno standard più performante rispetto al CAT6, supporta distanze fino a 100 metri. Supporta anche velocità fino a 40 Gb/s, ma solo per distanze inferiori a 15 metri.

Per distanze superiori si utilizza la fibra. E' la tecnologia più costosa, ma è l'unica soluzione possibile per distanze superiori a 100 metri. Supporta velocità fino a 1 Gb/s o superiori, a seconda dello standard utilizzato.
    
Cablaggio strutturato: è una metodologia di progettazione e realizzazione di reti che prevede l'utilizzo di cavi e componenti standardizzati, organizzati in modo da facilitare la gestione e la manutenzione della rete. Il cablaggio strutturato prevede una suddivisione in tre strati:

- Dorsale in fibra: collega i vari piani dell'edificio o le varie sedi. E' la soluzione più performante, ma è anche la più costosa. Supporta velocità fino a 1 Gb/s o superiori, a seconda dello standard utilizzato.
- Cablaggio verticale con armadi ripartitori: collega i vari piani dell'edificio o le varie sedi. E' la soluzione più performante, ma è anche la più costosa. Supporta velocità fino a 1 Gb/s o superiori, a seconda dello standard utilizzato.
- Cablaggio orizzontale per piano: collega i vari dispositivi all'interno di un piano. E' la soluzione più comune, supporta velocità fino a 1 Gb/s o superiori, a seconda dello standard utilizzato.

#### Strato collegamento
Lo strato di collegamento si occupa di gestire la comunicazione tra i dispositivi all'interno della stessa rete locale (LAN). Gli elementi principali dello strato di collegamento da considerare sono:
- Uso di switch / access point per wireless: gli switch sono dispositivi di rete che permettono di collegare più dispositivi all'interno di una LAN. Gli access point sono dispositivi che permettono di collegare dispositivi wireless alla rete. In entrambi i casi, è importante scegliere dispositivi che supportino le velocità richieste e che siano compatibili con gli standard utilizzati.
- Uso di VPN (più sedi): le VPN (Virtual Private Network) permettono di creare connessioni sicure tra più sedi, garantendo la riservatezza e l'integrità dei dati trasmessi.
- Subnetting: controllare che il numero dei bit riservati agli host sia sufficiente anche per implementazioni future. Scegliere gli indirizzi IP statici (sicuramente se è presente un server, preferire IP statici se si realizzano postazioni fisse la cui disposizione non cambia nel tempo) o dinamici (necessariamente quando si sceglie di utilizzare connessioni Wifi. In questo caso, consigurare un server DHCP con inizio e fine blocco indirizzi IP da assegnare e un lease time). Configurare per ogni client:
    - Indirizzo IP
    - Gateway
    - Eventuale DNS
        
Scegliere un range di indirizzi privati tra i seguenti:
- Classe A: da 10.0.0.0 a 10.255.255.255. Si hanno 24 bit a disposizione per subnet e host
- Classe B: da 172.16.0.0 a 172.31.255.255. Si hanno 20 bit a disposizione per subnet e host
- Classe C: da 192.168.0.0 a 192.168.255.255. Si hanno 16 bit a disposizione per subnet e host

Ipotizzare gli sviluppi e i possibili ampliamenti della rete, si hanno due possibilità:

- Resubnetting: si modificano le maschere di rete. Ogni bit aggiunto ai bit della sottorete raddoppia il numero degli indirizzi IP assegnabili ad una sottorete (da una rete /24 ad una /25 si passa da 254 a 510 host). Costo zero, bisogna riconfigurare i dispositivi. 
- Si aggiunge un'altra sottorete tra quelle disponibili: ad esempio se si ha una rete /24 se ne aggiunge un'altra. Necessità di acquistare hardware aggiuntivo (uno switch e un router) e riconfigurare i dispositivi. E' la soluzione più semplice, ma è anche la più costosa.

#### Strato rete
Il router è un dispositivo di rete che permette di collegare più reti tra loro, ad esempio una LAN con Internet. Il router si occupa di instradare i pacchetti tra le reti, utilizzando protocolli di routing come OSPF o BGP. Il router può essere configurato per implementare il NAT (Network Address Translation), che permette di tradurre gli indirizzi IP privati della LAN in indirizzi IP pubblici utilizzati su Internet. Inoltre, è possibile configurare il port forwarding per permettere l'accesso ai servizi interni della LAN dall'esterno, ad esempio per un server web o un server FTP.

Punti da considerare:
- Uso di router per collegare sottoreti / uscire su Internet
- Indirizzo pubblico all’interfaccia esterna del router: può essere statico (se è presente un server all'interno della rete) o dinamico. 
- Implementazione del NAT (Network Address Translation): permette di tradurre gli indirizzi IP privati della LAN in indirizzi IP pubblici utilizzati su Internet. In questo modo, i dispositivi all'interno della LAN possono accedere a Internet utilizzando un unico indirizzo IP pubblico, mentre i dispositivi esterni non possono accedere direttamente ai dispositivi all'interno della LAN.
- Apertura delle porte necessarie (port forwarding). Ad esempio, se si vuole permettere l'accesso al server web interno, è necessario aprire la porta TCP 80 (HTTP) o TCP 443 (HTTPS) sul router e configurare il port forwarding per indirizzare le richieste alla porta del server web all'interno della LAN. Altri servizi comuni e relative porte da considerare:
    - http (web): TCP 80
    - https (web): TCP 443
    - ftp: TCP 21
    - ssh: TCP 22
    - smtp: TCP 25
    - dns: TCP/UDP 53
    - pop3: TCP 110
    - imap: TCP 143
- Connessioni a Internet: scegliere la tecnologia più adatta alle esigenze della rete, tenendo in considerazione fattori come la velocità richiesta, la disponibilità nella zona e il costo. Le principali tecnologie di connessione a Internet sono:
    - Dial up: vecchie connessioni analogiche con modem (ormai in disuso). Velocità: 56 kbit/s (V.92) fino a 128 kbit/s (ISDN). Supporta distanze fino a 5 km. Non è più utilizzata.
    - xDSL (HDSL/ADSL/VDSL): caratterizzate da velocità in download maggiore rispetto all'upload. La maggior parte delle linee attuali è su tecnologia VDSL. Tale tecnologia permette di raggiungere tipicamente fino a 300 Mbit/s in download. Utilizzo della fibra fino alla centralina (FTTC: fiber to the cabinet). Le vecchie ADSL raggiungono tipicamente i 20 Mbit/s in download. Supporta distanze fino a 5 km, ma la velocità diminuisce all'aumentare della distanza dalla centralina.
    - Fibra: tecnologia FTTH (fiber to the home). Velocità in download fino a 1 Gbit/s. E' la tecnologia più veloce e più costosa. Supporta distanze fino a 5 km. Attualmente è disponibile solo in alcune zone, ma la sua diffusione è in crescita. Al momento, è la tecnologia più performante e consigliata per connessioni a Internet ad alta velocità.
    - Radio (WiMAX o LTE): tecnologia wireless che permette di raggiungere velocità fino a 100 Mbit/s. E' una soluzione alternativa alla fibra, soprattutto in zone rurali o in situazioni in cui la fibra non è disponibile. Supporta distanze fino a 10 km, ma la velocità diminuisce all'aumentare della distanza.
    - Satellite (Starlink): tecnologia satellitare che permette di raggiungere velocità fino a 150 Mbit/s. E' una soluzione alternativa alla fibra e alla radio, soprattutto in zone rurali o in situazioni in cui le altre tecnologie non sono disponibili. Supporta distanze fino a 35.000 km, ma la latenza è elevata. E' una tecnologia in fase di sviluppo, ma potrebbe diventare una soluzione interessante per connessioni a Internet ad alta velocità in zone rurali o in situazioni in cui le altre tecnologie non sono disponibili.
    - Connessione a Internet tramite rete mobile (4G/5G): è possibile utilizzare un modem 4G/5G per connettersi a Internet, soprattutto in situazioni in cui le altre tecnologie non sono disponibili. Supporta velocità fino a 1 Gbit/s (5G), ma la velocità può variare a seconda della copertura e del numero di utenti connessi alla stessa cella. E' una soluzione alternativa alla fibra e alla radio, soprattutto in zone rurali o in situazioni in cui le altre tecnologie non sono disponibili.
- Connessioni multiple: è possibile utilizzare più connessioni a Internet contemporaneamente, ad esempio una connessione xDSL e una connessione radio, per aumentare la velocità complessiva della connessione a Internet. In questo caso, è necessario configurare il router per gestire le connessioni multiple, ad esempio utilizzando il load balancing o il failover.

#### Strato trasporto
E' importante scegliere il protocollo di trasporto più adatto alle esigenze della rete, tenendo in considerazione fattori come la velocità richiesta, la latenza e l'affidabilità. I principali protocolli di trasporto sono:
- TCP: protocollo di trasporto orientato alla connessione, che garantisce l'affidabilità della trasmissione dei dati. Utilizzato per applicazioni che richiedono una trasmissione affidabile, come il web (HTTP/HTTPS), la posta elettronica (SMTP, POP3, IMAP) e il file transfer (FTP).
- UDP: protocollo di trasporto non orientato alla connessione, che non garantisce l'affidabilità della trasmissione dei dati. Utilizzato per applicazioni che richiedono una trasmissione veloce, come lo streaming video o i giochi online.

#### Strato applicazione
In questa sezione è necessario scegliere i servizi da implementare all'interno della rete, tenendo in considerazione le esigenze degli utenti e le risorse disponibili. I principali servizi da considerare sono:
- Condivisione di contenuti:
    - CMS (content management system): i più famosi sono Wordpress o Joomla. Soluzione software già pronta, open source, a costo zero. Richiede solo di essere installata su un web server e configurata.
    - Software realizzato internamente (solo se si hanno le competenze)
    
#### Server
Suddivisione per sistema operativo:
- Linux (Debian/Ubuntu): sistema operativo open source, gratuito, molto stabile e sicuro. E' la scelta più comune per i server, soprattutto se si utilizzano servizi come Apache, MySQL o Postfix. Inoltre, è possibile utilizzare distribuzioni specifiche per server, come Red Hat Enterprise Linux o CentOS.
- Windows Server: sistema operativo proprietario, a pagamento, con un'interfaccia grafica più user-friendly rispetto a Linux. E' la scelta più comune per i server che utilizzano Active Directory o servizi Microsoft, come Exchange Server o SQL Server. Inoltre, è possibile utilizzare versioni specifiche per server, come Windows Server 2019 o Windows Server 2022.

Suddivisione per categoria:
- HTTP (web): supporto per PHP se serve. Server più usati: Apache o Nginx. Alternativa: server web realizzato internamente (solo se si hanno le competenze).
- Database: MySQL, PostgreSQL (relazionale) o MongoDB (noSQL)
- FTP: servirà a caricare i file sul server. Alternativa: soluzione CI/CD (Continous Integration / Continous Delivery). Quest'ultima è una soluzione avanzata, richiede conoscenze di DevOps
- DHCP: server che assegna automaticamente gli indirizzi IP ai dispositivi all'interno della rete. Soluzione software più comune: ISC DHCP Server (Linux) o DHCP Server (Windows). Alternativa: configurazione manuale degli indirizzi IP sui dispositivi, ma è una soluzione poco scalabile e soggetta a errori.
- DNS: server che risolve i nomi di dominio in indirizzi IP. Soluzione software più comune: BIND (Linux) o DNS Server (Windows). Alternativa: utilizzare un servizio DNS esterno, come Google DNS o Cloudflare DNS, ma è una soluzione meno sicura e meno performante.
- Domain controller: Samba (Linux) o Active Directory (Windows)
- File server: Samba (Linux) o File Server (Windows)
- Email: Postfix come server MTA (Mail Transfer Agent) per l'invio e la ricezione di email. Dovecot come server MDA (Mail Delivery Agent) per la consegna delle email agli utenti. Roundcube come webmail per permettere agli utenti di accedere alle email tramite un'interfaccia web.
- Radius (AAA): server che gestisce l'autenticazione, l'autorizzazione e l'accounting degli utenti che accedono alla rete, soprattutto in caso di connessioni wireless. Soluzione software più comune: FreeRADIUS (Linux) o NPS (Windows). Alternativa: utilizzare un servizio di autenticazione esterno, come LDAP o Active Directory, ma è una soluzione meno sicura e meno performante.

Condivisione risorse / autenticazione utenti (domain controller):
- Samba (Linux)
- Active Directory (Windows)

#### Sicurezza

Firewall per DMZ: i server all'interno di una LAN che sono accessibili dall'esterno devono essere posti in una zona riservata e isolata dal resto della rete in modo da non avere ripercussioni in caso di attacco ai server. E' possibile realizzare una DMZ (Demilitarized Zone) in due modi:

- Three legged: tre interfacce ethernet (LAN, WAN, DMZ). E' la soluzione più sicura, ma è anche la più costosa. Richiede l'utilizzo di un firewall con almeno tre interfacce ethernet.
- DMZ tra due firewall: due interfacce ethernet (LAN, WAN) e una zona DMZ tra i due firewall. E' una soluzione più economica rispetto alla three legged, ma è anche meno sicura. Richiede l'utilizzo di due firewall con almeno due interfacce ethernet ciascuno.

#### Organizzazione

- Protezione fisica. Necessità di un locale server climatizzato e con accesso protetto tramite:
    - Controllo accessi: badge, impronte digitali, riconoscimento facciale
    - Videosorveglianza
- Recupero dei dati (disaster recovery): piano di emergenza per il recupero dei dati in caso di guasto o attacco informatico. E' importante avere una strategia di backup efficace, che preveda la conservazione di copie dei dati in luoghi diversi e l'utilizzo di tecnologie di backup avanzate, come il backup incrementale o il backup su cloud.
- Confidenzialità / riservatezza / integrità / disponibilità
    - Crittografia: per proteggere i dati sensibili, è possibile utilizzare la crittografia, ad esempio per proteggere i dati memorizzati sui server o per proteggere le comunicazioni tra i dispositivi all'interno della rete. Soluzioni software più comuni: VeraCrypt (per la crittografia dei dati memorizzati) o OpenVPN (per la crittografia delle comunicazioni). In alternativa, è possibile utilizzare soluzioni hardware, come i dispositivi di crittografia dedicati, ma sono soluzioni più costose e complesse da implementare. E' importante scegliere algoritmi di crittografia robusti, come AES (Advanced Encryption Standard) o RSA (Rivest-Shamir-Adleman), e utilizzare chiavi di crittografia sufficientemente lunghe per garantire la sicurezza dei dati.
    - Ridondanza hardware: ad esempio doppia alimentazionee, dischi in RAID, connessioni a Internet ridondanti. La ridondanza hardware permette di garantire la disponibilità dei servizi anche in caso di guasto di un componente hardware. E' una soluzione costosa, ma è fondamentale per garantire la continuità dei servizi in ambienti critici.
    - Gruppo di continuità: dispositivo che permette di garantire l'alimentazione dei dispositivi in caso di interruzione dell'alimentazione elettrica. E' una soluzione costosa, ma è fondamentale per garantire la continuità dei servizi in ambienti critici.
    - Ridondanza connessione Internet: router dual WAN oppure con modem 4G/5G integrato. E' una soluzione costosa, ma è fondamentale per garantire la continuità dei servizi in ambienti critici.
    - Ridondanza dati: RAID 1/5. E' una soluzione costosa, ma è fondamentale per garantire la continuità dei servizi in ambienti critici. In caso di guasto di un disco, i dati sono ancora disponibili sui dischi rimanenti e il sistema può continuare a funzionare senza interruzioni.
    - Backup: strategia 3-2-1. E' una strategia di backup che prevede la conservazione di almeno tre copie dei dati, su due supporti diversi, con almeno una copia conservata in un luogo diverso. Ad esempio, è possibile conservare una copia dei dati su un disco esterno, una copia su un server di backup interno e una copia su un servizio di backup su cloud. E' una soluzione costosa, ma è fondamentale per garantire la sicurezza dei dati in caso di guasto o attacco informatico.
    - Antivirus o firewall personale.
    - Accesso utenti autenticati: è importante implementare un sistema di autenticazione degli utenti per garantire che solo gli utenti autorizzati possano accedere ai servizi e alle risorse della rete. Soluzioni software più comuni: Active Directory (Windows) o LDAP (Linux). In alternativa, è possibile utilizzare soluzioni di autenticazione esterne, come i servizi di autenticazione su cloud, ma sono soluzioni meno sicure e meno performanti.

#### Wireless

Posizionamento Access Point: è importante posizionare gli access point in modo strategico all'interno dell'edificio per garantire una copertura wireless adeguata e minimizzare le interferenze. Ad esempio, è possibile posizionare gli access point al centro di ogni piano dell'edificio, evitando di posizionarli vicino a fonti di interferenza, come microonde o dispositivi Bluetooth.

Standard WLAN:
- 802.11n: wifi 4 (300 Mbps, frequenza 2.4 GHz e 5 GHz)
- 802.11ac: wifi 5 (500 Mbps o 1Gbps, frequenza 5 GHz)
- 802.11ax: wifi 6 (fino a 12 GBps, frequenza 2.4 GHz e 5 GHz)
- 802.11be: wifi 7 (fino a 30 GBps, frequenza 2.4 GHz, 5 GHz e 6 GHz)

Crittografia: WPA2/WPA3: è importante utilizzare protocolli di crittografia robusti per proteggere la rete wireless da accessi non autorizzati. WPA2 (Wi-Fi Protected Access 2) è attualmente il protocollo di crittografia più comune e supporta l'utilizzo di chiavi di crittografia AES (Advanced Encryption Standard). WPA3 è un protocollo di crittografia più recente, che offre una maggiore sicurezza rispetto a WPA2, ma al momento è supportato solo da alcuni dispositivi.

Autenticazione
- Password condivisa: per piccole reti. Possibilità di realizzare un filtro sul MAC address in modo da autorizzare solamente i device registrati. E' una soluzione semplice, ma è anche meno sicura, soprattutto se la password è debole o viene condivisa tra più utenti.
- Utilizzo di un server Radius (AAA) per accesso, autenticazione e autorizzazione, con username e password per ogni utente. E' una soluzione più sicura e scalabile rispetto alla password condivisa.

#### Dettagli client

Hardware:
- Scheda di rete: scegliere una 10/100/1000 (scheda Gigabit Ethernet). E' importante scegliere una scheda di rete che supporti le velocità richieste e che sia compatibile con gli standard utilizzati nella rete. Ad esempio, se si utilizza una rete Gigabit Ethernet, è necessario scegliere una scheda di rete che supporti tale standard per garantire prestazioni ottimali.
- Scheda video solo se necessaria: se si utilizzano applicazioni che richiedono elevate prestazioni grafiche, come il video editing o i giochi, è importante scegliere una scheda video dedicata. In caso contrario, è possibile utilizzare la scheda video integrata nel processore o nella scheda madre, che è sufficiente per la maggior parte delle applicazioni.
- Monitor: scegliere un monitor con risoluzione e dimensioni adeguate alle esigenze dell'utente.
    
Software:
- Office automation
- Client software
- Browser
    
#### Dettagli server (se si sceglie di realizzare i servizi internamente)

Hardware:
- Da posizionare in un rack: il rack è una struttura metallica che permette di organizzare e proteggere i server all'interno del locale server. E' importante scegliere un rack di dimensioni adeguate alle esigenze della rete, con spazio sufficiente per ospitare tutti i server e le apparecchiature di rete, e con un sistema di ventilazione adeguato per garantire il raffreddamento dei server.
- Alimentazione ridondante (dual): per garantire la continuità dei servizi in caso di guasto dell'alimentazione elettrica. E' una soluzione costosa, ma è fondamentale per garantire la continuità dei servizi in ambienti critici.
- Processore multicore (esempio: Intel Xeon Silver/Gold/Platinum da 8 core / 16 thread fino a 32 core / 64 thread, in configurazione single o multiple socket). Necessità di scegliere un processore con un numero di core e thread adeguato alle esigenze della rete, tenendo in considerazione il carico di lavoro previsto e le prestazioni richieste. Ad esempio, se si prevede di utilizzare il server per applicazioni che richiedono elevate prestazioni, come il database o il web server, è importante scegliere un processore con un numero elevato di core e thread per garantire prestazioni ottimali.
- Abbondanza di RAM (16/32/64 GB): è importante scegliere una quantità di RAM adeguata alle esigenze della rete, tenendo in considerazione il carico di lavoro previsto e le prestazioni richieste. Ad esempio, se si prevede di utilizzare il server per applicazioni che richiedono elevate prestazioni, come il database o il web server, è importante scegliere una quantità elevata di RAM per garantire prestazioni ottimali.
- 2 dischi per RAID 1 o 3 dischi per RAID 5, solitamente SSD: è importante scegliere una configurazione di dischi adeguata alle esigenze della rete, tenendo in considerazione il carico di lavoro previsto e le prestazioni richieste. Ad esempio, se si prevede di utilizzare il server per applicazioni che richiedono elevate prestazioni, come il database o il web server, è importante scegliere una configurazione di dischi che garantisca prestazioni ottimali e ridondanza dei dati.
- Scheda di rete 10 o 100 Gbit/s: è importante scegliere una scheda di rete che supporti le velocità richieste e che sia compatibile con gli standard utilizzati nella rete. Ad esempio, se si utilizza una rete Gigabit Ethernet, è necessario scegliere una scheda di rete che supporti tale standard per garantire prestazioni ottimali.

Software:
- Sistema operativo: Linux (per la maggioranza delle applicazioni) o Windows (tendenzialmente solo se si usa Active Directory). Disto consigliate: Debian, Red Hat, Ubuntu Server>

#### Stampanti di rete

Sono dispositivi di rete che permettono di condividere una stampante tra più utenti all'interno della rete. E' importante scegliere una stampante di rete che supporti le velocità richieste e che sia compatibile con gli standard utilizzati nella rete. Ad esempio, se si utilizza una rete Gigabit Ethernet, è necessario scegliere una stampante di rete che supporti tale standard per garantire prestazioni ottimali. Inoltre, è importante configurare correttamente la stampante di rete, ad esempio assegnandole un indirizzo IP statico e configurando i driver sui client per garantire la compatibilità e le prestazioni ottimali.

#### Server su provider di servizi esterni

Quando non si hanno le risorse necessarie a realizzare il servizio internamente, è necessario rivolgersi ad un'azienda esterna:

- Hosting (server condivisi): soluzione più economica, ma è anche meno performante e meno sicura. I server condivisi sono server che ospitano più siti web o servizi, condividendo le risorse del server tra i vari clienti. E' una soluzione adatta per siti web o servizi con un traffico limitato, ma non è adatta per siti web o servizi con un traffico elevato o che richiedono elevate prestazioni.
- Virtual Private Server (VPS): soluzione intermedia tra hosting e server dedicati, che offre maggiore flessibilità e prestazioni rispetto all'hosting, ma è anche più costosa. I VPS sono server virtuali che condividono le risorse di un server fisico, ma offrono una maggiore autonomia e controllo rispetto ai server condivisi. E' una soluzione adatta per siti web o servizi con un traffico moderato o che richiedono prestazioni elevate, ma non è adatta per siti web o servizi con un traffico elevato o che richiedono elevate prestazioni.
- Housing (server dedicati): soluzione più costosa, ma è anche la più performante e più sicura. I server dedicati sono server fisici che ospitano un solo sito web o servizio, offrendo prestazioni elevate e un maggiore controllo rispetto ai server condivisi o ai VPS. E' una soluzione adatta per siti web o servizi con un traffico elevato o che richiedono elevate prestazioni, ma è anche una soluzione costosa e richiede competenze tecniche per la gestione del server.
- Cloud hosting: soluzione flessibile e scalabile, che permette di utilizzare risorse di calcolo e storage in modo dinamico, pagando solo per le risorse effettivamente utilizzate. I servizi di cloud hosting offrono una vasta gamma di opzioni, tra cui server virtuali, container e serverless, che possono essere configurati e gestiti in modo semplice e intuitivo. E' una soluzione adatta per siti web o servizi con un traffico variabile o che richiedono prestazioni elevate, ma è anche una soluzione costosa e richiede competenze tecniche per la gestione del cloud.
    
#### Cloud computing
E' un modello di erogazione di servizi informatici che permette di utilizzare risorse di calcolo e storage in modo dinamico, pagando solo per le risorse effettivamente utilizzate. I servizi di cloud computing offrono una vasta gamma di opzioni, tra cui server virtuali, container e serverless, che possono essere configurati e gestiti in modo semplice e intuitivo. E' una soluzione adatta per siti web o servizi con un traffico variabile o che richiedono prestazioni elevate, ma è anche una soluzione costosa e richiede competenze tecniche per la gestione del cloud. I principali modelli di cloud computing sono:
- IAAS (Infrastructure as a Service): fornisce risorse di calcolo e storage, come server virtuali, dischi virtuali e reti virtuali. Esempi di provider IAAS: AWS (Amazon Web Services), Microsoft Azure e Google Cloud.
- PAAS (Platform as a Service): fornisce una piattaforma completa per lo sviluppo e l'esecuzione di applicazioni, includendo risorse di calcolo, storage e servizi di sviluppo. Esempi di provider PAAS: AWS Elastic Beanstalk, Heroku e Red Hat OpenShift.
- SAAS (Software as a Service): fornisce applicazioni software complete, accessibili tramite un'interfaccia web, senza la necessità di installare o gestire il software. Esempi di provider SAAS: Dropbox, Salesforce, Google Apps e Red Hat Insights.
    
### Teoria
Sicuramente saranno presenti domande relative agli argomenti teorici trattati durante il corso dell'ultimo anno. Nulla di cui preoccuparsi, il programma di quinta dovrebbe coprire tutte le possibili domande.
    
### Informatica
Probabilmente sarà presente all'interno della traccia una parte riguardante il programma di Informatica di quinta, con la progettazione del modello E/R di una parte della base dati e relative tabelle. Vi potrebbero inoltre essere chieste parti significative di codice PHP per la gestione di qualche caso d'uso relativo a tale base di dati.