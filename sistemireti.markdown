---
layout: page
title: Sistemi e Reti
permalink: /sistemireti
---

<div class="container">
    <h1 class="heading">Sistemi e Reti</h1>
    <h2 class="heading">Schema di svolgimento della prova scritta di Sistemi e Reti</h2>
    <p>Ultima modifica a questa pagina: {{ "now" | date: "%d/%m/%Y alle %H:%M" }}</p>
    <h3>Analisi della situazione “as is” (stato attuale)</h3>
    <p>Formulare tutte le ipotesi che non si evincono dal testo. Se rischiesto, realizzare uno schema grafico della rete. In ogni caso sarebbe opportuno fare degli schemi qualitativi della rete attuale e le modifiche da apportare</p>
    <h3>Analisi dello stato “to be” (progetto da realizzare)</h3>
    <p>Predisporre un progetto di rete che possa tenere in considerazione eventuali espansioni future della rete (numero di device connessi o infrastruttura della rete).</p>
    <p>Disegnare una rete inserendo tutti gli elementi richiesti, in particolar modo host, switch, router, firewall. Definire le sottoreti con relative subnet mask. Dopo lo schema, scrivere tutte le caratteristiche del progetto.</p>
    <p>Analisi delle peculiarità del progetto:</p>
    <ul>
        <li>Infrastruttura su più piani</li>
        <li>Necessità di utilizzare tecnologie wireless</li>
        <li>Utilizzo di schede per acquisire dati dai sensori</li>
    </ul>
    <h4>Strato fisico</h4>
    <p>Standard:</p> 
    <ul>
        <li>Ethernet (velocità fino a 10 Mbit/s). Standard 10BASE-T</li> 
        <li>Fast Ethernet (velocità fino a 100 Mbit/s). Standard 100BASE-TX</li>
        <li>Gigabit Ethernet (velocità fino a 1 Gbit/s). Standard 1000BASE-TX: richiede che tutti gli apparati e i dispositivi di rete supportino tale standard. Ad oggi è lo standard più utilizzato</li>
        <li>Fibra. Standard 1000BASE-LX o 1000BASE-SX. Supporta distanze fino a 5km.</li>
    </ul>
    <p>Topologia della rete:</p>
    <ul>
        <li>Bus</li>
        <li><u>Stella (molto probabilmente è questa la topologia)</u></li>
        <li>Anello</li>
        <li>Maglia</li>
    </ul>
    <p>Tipologia di cavi</p>
    Per distanze inferiori a 100 metri si usano cavi in rame UTP. Utilizzare da CAT5E in su:
    <ul>
        <li>CAT5: fino a 100 Mb/s</li>
        <li>CAT5E: fino a 1 Gb/s</li>
        <li>CAT6: fino a 1 Gb/s</li>
        <li>CAT7: fino a 10 Gb/s</li>
    </ul>
    Per distanze superiori si utilizza la fibra
    <p>Cablaggio strutturato</p>
    <ul>
        <li>Dorsale in fibra</li>
        <li>Cablaggio verticale con armadi ripartitori</li>
        <li>Cablaggio orizzontale per piano</li>
    </ul>
    <h4>Strato collegamento</h4>
    <ul>
        <li>Uso di switch / access point per wireless</li>
        <li>Uso di VPN (più sedi)</li>
        <li>Subnetting: controllare che il numero dei bit riservati agli host sia sufficiente anche per implementazioni future. Scegliere gli indirizzi IP statici (sicuramente se è presente un server, preferire IP statici se si realizzano postazioni fisse la cui disposizione non cambia nel tempo) o dinamici (necessariamente quando si sceglie di utilizzare connessioni Wifi. In questo caso, consigurare un server DHCP con inizio e fine blocco indirizzi IP da assegnare e un lease time). Configurare per ogni client:
            <ul>
                <li>Indirizzo IP</li>
                <li>Gateway</li>
                <li>Eventuale DNS</li>
            </ul>
        Scegliere un range di indirizzi privati tra i seguenti:
            <ul>
                <li>Classe A: da 10.0.0.0 a 10.255.255.255. Si hanno 24 bit a disposizione per subnet e host</li>
                <li>Classe B: da 172.16.0.0 a 172.31.255.255. Si hanno 20 bit a disposizione per subnet e host</li>
                <li>Classe C: da 192.168.0.0 a 192.168.255.255. Si hanno 16 bit a disposizione per subnet e host</li>
            </ul>
        Ipotizzare gli sviluppi e i possibili ampliamenti della rete, si hanno due possibilità:
            <ul>
                <li>Resubnetting: si modificano le maschere di rete. Ogni bit aggiunto ai bit della sottorete raddoppia il numero degli indirizzi IP assegnabili ad una sottorete (da una rete /24 ad una /25 si passa da 254 a 510 host). Costo zero, bisogna riconfigurare i dispositivi</li> 
                <li>Si aggiunge un'altra sottorete tra quelle disponibili: ad esempio se si ha una rete /24 se ne aggiunge un'altra. Necessità di acquistare hardware aggiuntivo (uno switch e un router)</li>
            </ul> 
        </li>
    </ul>
    <h4>Strato rete</h4>
    <p>Uso di router per collegare sottoreti / uscire su Internet</p>
    <p>Internet:</p>
    <ul>
        <li>Indirizzo pubblico all’interfaccia esterna del router: può essere statico (se è presente un server all'interno della rete) o dinamico</li>
        <li>Implementazione del NAT (Network Address Translation)</li>
        <li>Apertura delle porte necessarie (port forwarding):
            <ul>
                <li>http (web): TCP 80</li>
                <li>https (web): TCP 443</li>
                <li>ftp: TCP 21</li>
                <li>ssh: TCP 22</li>
            </ul>
        </li>
        <li>Connessione:
            <ul>
                <li>Dial up: vecchie connessioni analogiche con modem (ormai in disuso). Velocità: 56 kbit/s (V.92) fino a 128 kbit/s (ISDN)</li>
                <li>xDSL (HDSL/ADSL/VDSL): caratterizzate da velocità in download maggiore rispetto all'upload. La maggior parte delle linee attuali è su tecnologia VDSL. Tale tecnologia permette di raggiungere tipicamente fino a 300 Mbit/s in download. Utilizzo della fibra fino alla centralina (FTTC: fiber to the cabinet). Le vecchie ADSL raggiungono tipicamente i 20 Mbit/s in download.</li>
                <li>Fibra: tecnologia FTTH (fiber to the home). Velocità in download fino a 1 Gbit/s. E' la tecnologia più veloce e più costosa.</li>
                <li>Radio (WiMAX o LTE)</li>
                <li>Satellite (Starlink)</li>
            </ul>
        </li>
    </ul>
    <h4>Strato trasporto</h4>
    <ul>
        <li>TCP</li>
        <li>UDP</li>
    </ul>
    <h4>Strato applicazione</h4>
    <p>Condivisione di contenuti: </p>
    <ul>
        <li>CMS (content management system): i più famosi sono Wordpress o Joomla. Soluzione software già pronta, open source, a costo zero. Richiede solo di essere installata su un web server e configurata.</li>
        <li>Software realizzato internamente (solo se si hanno le competenze)</li>
    </ul>
    <h4>Server</h4> 
    <p>Suddivisione per sistema operativo:</p>
    <ul>
        <li>Linux (Debian/Ubuntu)</li>
        <li>Windows Server</li>
    </ul>
    <p>Suddivisione per categoria:</p>
    <ul>
        <li>HTTP (web): supporto per PHP se serve. Server più usati: Apache o Nginx</li>
        <li>Database: MySQL (relazionale) o MongoDB (noSQL)</li>
        <li>FTP: servirà a caricare i file sul server. Alternativa: soluzione CI/CD (Continous Integration / Continous Delivery). Quest'ultima è una soluzione avanzata, richiede conoscenze di DevOps</li>
        <li>DHCP: dhcpd</li>
        <li>DNS</li>
        <li>Domain controller</li>
        <li>File server</li>
        <li>Email: Postfix come server MTA</li>
        <li>Radius (AAA)</li>
    </ul>
    <p>Condivisione risorse / autenticazione utenti (domain controller):</p>
    <ul>
        <li>Samba (Linux)</li>
        <li>Active Directory (Windows)</li>
    </ul>
    <h4>Sicurezza</h4>
    <p>Firewall per DMZ: i server all'interno di una LAN che sono accessibili dall'esterno devono essere posti in una zona riservata e isolata dal resto della rete in modo da non avere ripercussioni in caso di attacco ai server.</p>
    <ul>
        <li>Three legged: tre interfacce ethernet (LAN, WAN, DMZ)</li>
        <li>DMZ tra due firewall</li>
    </ul>
    <p>Organizzazione</p>
    <p>Protezione fisica: locale server climatizzato e con accesso protetto</p>
    <p>Recupero dei dati (disaster recovery)</p>
    <p>Confidenzialità / riservatezza / integrità / disponibilità</p>
    <ul>
        <li>Crittografia</li>
        <li>Ridondanza hardware: ad esempio doppia alimentazione</li>
        <li>Gruppo di continuità</li>
        <li>Ridondanza connessione Internet: router dual WAN oppure con modem 4G/5G integrato</li>
        <li>Ridondanza dati: RAID 1/5</li>
        <li>Backup: strategia 3-2-1</li>  
        <li>Antivirus o firewall personale</li>
        <li>Accesso utenti autenticati</li>
    </ul>
    <h4>Wireless</h4>
    <p>Posizionamento Access Point</p>
    <p>Standard WLAN:</p>
    <ul>
        <li>802.11n: wifi 4 (300 Mbps, frequenza 2.4 GHz e 5 GHz)</li>
        <li>802.11ac: wifi 5 (500 Mbps o 1Gbps, frequenza 5 GHz)</li>
        <li>802.11ax: wifi 6 (fino a 12 GBps, frequenza 2.4 GHz e 5 GHz)</li>
    </ul>
    <p>Crittografia: WPA2/WPA3</p>
    <p>Autenticazione</p>
    <ul>
        <li>Password condivisa: per piccole reti. Possibilità di realizzare un filtro sul MAC address in modo da autorizzare solamente i device registrati</li>
        <li>Utilizzo di un server Radius (AAA) per accesso, autenticazione e autorizzazione, con username e password per ogni utente</li>
    </ul>
    <h4>Dettagli client</h4>
    <p>Hardware:</p>
    <ul>
        <li>Scheda di rete: scegliere una 10/100/1000 (scheda Gigabit Ethernet)</li>
        <li>Scheda video solo se necessaria</li>
        <li>Monitor</li>
    </ul>
    <p>Software:</p>
    <ul>
        <li>Office automation</li>
        <li>Client software</li>
        <li>Browser</li>
    </ul>
    <h4>Dettagli server (se si sceglie di realizzare i servizi internamente)</h4>
    <p>Hardware:</p>
    <ul>
        <li>Da posizionare in un rack</li>
        <li>Alimentazione ridondante (dual)</li>
        <li>Processore multicore (esempio: Intel Xeon Silver/Gold/Platinum da 8 core / 16 thread fino a 32 core / 64 thread, in configurazione single o multiple socket)</li>
        <li>Abbondanza di RAM (16/32/64 GB)</li>
        <li>2 dischi per RAID 1 o 3 dischi per RAID 5, solitamente SSD</li>
        <li>Scheda di rete 10 o 100 Gbit/s</li>
    </ul>
    <p>Software:</p>
    <ul>
        <li>Sistema operativo: Linux (per la maggioranza delle applicazioni) o Windows (tendenzialmente solo se si usa Active Directory). Disto consigliate: Debian, Red Hat, Ubuntu Server</li>
        <li>PhpMyAdmin: gestion database MySQL</li>
    </ul>
    <h4>Stampanti di rete</h4>
    <h4>Server su provider di servizi esterni</h4>
    <p>Quando non si hanno le risorse necessarie a realizzare il servizio internamente, è necessario rivolgersi ad un'azienda esterna</p>
    <ul>
        <li>Hosting (server condivisi)</li>
        <li>Virtual Private Server (VPS)</li>
        <li>Housing (server dedicati)</li>
        <li>Cloud hosting</li>
    </ul>
    <h4>Cloud computing</h4>
    <ul>
        <li>IAAS (AWS, Microsoft Azure e Google Cloud)</li>
        <li>PAAS (AWS Elastic Beanstalk, Heroku e Red Hat OpenShift)</li>
        <li>SAAS (Dropbox, Salesforce, Google Apps e Red Hat Insights)</li>
    </ul>
    <h3>Teoria</h3>
    <p>Sicuramente saranno presenti domande relative agli argomenti teorici trattati durante il corso dell'ultimo anno. Nulla di cui preoccuparsi, il programma di quinta dovrebbe coprire tutte le possibili domande.</p>
    <h3>Informatica</h3>
    <p>Probabilmente sarà presente all'interno della traccia una parte riguardante il programma di Informatica di quinta, con la progettazione del modello E/R di una parte della base dati e relative tabelle. Vi potrebbero inoltre essere chieste parti significative di codice PHP per la gestione di qualche caso d'uso relativo a tale base di dati.</p>
</div>