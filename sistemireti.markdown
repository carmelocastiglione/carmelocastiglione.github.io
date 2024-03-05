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
    <p>Condivisione di contenuti: </p>
    <ul>
        <li>CMS (content management system)</li>
        <li>Wordpress</li>
        <li>Joomla</li>
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
        <li>FTP</li>
        <li>DHCP: dhcpd</li>
        <li>DNS</li>
        <li>Domain controller</li>
        <li>File server</li>
        <li>Email</li>
        <li>Radius (AAA)</li>
    </ul>
    <p>Condivisione risorse / autenticazione utenti (domain controller):</p>
    <ul>
        <li>Samba (Linux)</li>
        <li>Active Directory (Windows)</li>
    </ul>
    <h4>Sicurezza</h4>
    <p>Firewall per DMZ</p>
    <ul>
        <li>Three legged</li>
        <li>DMZ tra due firewall</li>
    </ul>
    <p>Organizzazione</p>
    <p>Recupero dei dati</p>
    <p>Confidenzialità / riservatezza / integrità / disponibilità</p>
    <ul>
        <li>Crittografia</li>
        <li>Ridondanza hardware</li>
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
        <li>Alimentazione ridondante</li>
        <li>Multicore</li>
        <li>Abbondanza di RAM</li>
        <li>Numero di dischi (Configurazione in RAID 1/5)</li>
    </ul>
    <p>Software:</p>
    <ul>
        <li>Sistema operativo: Linux (per la maggioranza delle applicazioni) o Windows (tendenzialmente solo se si usa Active Directory)</li>
    </ul>
    <h4>Stampanti di rete</h4>
    <h4>Server su provider di servizi esterni</h4>
    <ul>
        <li>Hosting (server condivisi)</li>
        <li>Housing (server dedicati)</li>
        <li>Cloud computing</li>
    </ul>
</div>