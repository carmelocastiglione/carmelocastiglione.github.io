---
layout: page
title: Sistemi e Reti
permalink: /sistemireti
---

<div class="container">
    <h1 class="heading">Sistemi e Reti</h1>
    <h2 class="heading">Schema di svolgimento della prova scritta di Sistemi e Reti</h2>
    <h3>Analisi della situazione “as is” (stato attuale)</h3>
    <p>Formulare tutte le ipotesi che non si evincono dal testo</p>
    <h3>Analisi dello stato “to be” (progetto da realizzare)</h3>
    <p>Analisi delle peculiarità del progetto:</p>
    <ul>
        <li>Infrastruttura su più piani</li>
        <li>Necessità di utilizzare tecnologie wireless</li>
    </ul>
    <h4>Strato fisico</h4>
    <p>Topologia della rete:</p>
    <ul>
        <li>Bus</li>
        <li><b>Stella (molto probabilmente è questa la topologia)</b></li>
        <li>Anello</li>
        <li>Maglia</li>
    </ul>
    <p>Cablaggio strutturato: tipologia di cavi</p>
    <ul>
        <li>CAT5</li>
        <li>CAT5E</li>
        <li>CAT6</li>
        <li>CAT7</li>
    </ul>
    <h4>Strato collegamento</h4>
    <ul>
        <li>Uso di switch / access point per wireless</li>
        <li>Uso di VPN (più sedi)</li>
        <li>Subnetting: controllare che il numero dei bit riservati agli host sia sufficiente anche per implementazioni future. Scegliere gli indirizzi IP statici (sicuramente se è presente un server) o dinamici (in questo caso, consigurare un server DHCP con inizio e fine blocco indirizzi IP da assegnare). Configurare per ogni client:
            <ul>
                <li>Indirizzo IP</li>
                <li>Gateway</li>
                <li>Eventuale DNS</li>
            </ul>
        </li>
    </ul>
    <h4>Strato rete</h4>
    <p>Uso di router per collegare sottoreti / uscire su Internet</p>
    <p>Internet:</p>
    <ul>
        <li>Indirizzo pubblico all’interfaccia esterna del router: può essere statico (se è presente un server all'interno della rete) o dinamico</li>
        <li>Implementazione del NAT (Network Address Translation)</li>
        <li>Apertura delle porte necessarie:
            <ul>
                <li>http (web): TCP 80</li>
                <li>https (web): TCP 443</li>
                <li>ftp: TCP 21</li>
                <li>ssh: TCP 22</li>
            </ul>
        </li>
        <li>Connessione:
            <ul>
                <li>Dial up (vecchie connessioni analogiche con modem)</li>
                <li>xDSL (HDSL/ADSL/VDSL): la maggior parte delle linee attuali è su tecnologia VDSL</li>
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
Condivisione di contenuti
CMS (content management system)
Wordpress
Joomla
Software realizzato internamente (solo se si hanno le competenze)
Server 
Suddivisione per sistema operativo	
Linux (Debian/Ubuntu)
Windows Server
Suddivisione per categoria
HTTP (web): supporto per PHP se serve
Apache
Nginx
Database
MySQL (relazionale)
MongoDB (noSQL)
FTP
DHCP
dhcpd
DNS
Domain controller
File server
Email
Radius
Condivisione risorse / autenticazione utenti (domain controller)
Samba (Linux)
Active Directory (Windows)
Sicurezza
Firewall per DMZ
Three legged 
DMZ tra due firewall
Organizzazione
Recupero dei dati
Confidenzialità / riservatezza / integrità / disponibilità
Crittografia
Ridondanza hardware
Backup
RAID 1/5
Antivirus o firewall personale
Accesso utenti autenticati
Wireless
Posizionamento Access Point
Standard WLAN
802.11n: wifi 4 (300 Mbps, frequenza 2.4 GHz e 5 GHz)
802.11ac: wifi 5 (500 Mbps o 1Gbps, frequenza 5 GHz)
802.11ax: wifi 6 (fino a 12 GBps, frequenza 2.4 GHz e 5 GHz)
Crittografia
WPA2
Dettagli host
Client
Hardware
Scheda di rete (scegliere una 10/100/1000, scheda Gigabit)
Scheda video
Monitor
Software
Office automation
Client software
Browser
Server (se si sceglie di realizzare i servizi internamente)
Hardware
Alimentazione ridondante
Multicore
Abbondanza di RAM
Numero di dischi
Software
Sistema operativo
Linux (per la maggioranza delle applicazioni)
Windows (tendenzialmente solo se si usa Active Directory)
Configurazione in RAID 1/5
Stampanti di rete
Server su provider di servizi esterni
Hosting (server condivisi)
Housing (server dedicati)
Cloud computing

</div>