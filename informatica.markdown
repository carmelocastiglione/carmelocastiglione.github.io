---
layout: page
title: Informatica
permalink: /informatica
---

<div class="container">
    <h1 class="heading">Informatica</h1>
    <h2 class="heading">Schema di svolgimento della prova orale di Informatica</h2>
    <p>Ultima modifica a questa pagina: {{ "now" | date: "%d/%m/%Y alle %H:%M" }}</p>
    <h3 class="heading">Basi di dati e sistemi informativi</h3>
    <ol>
        <li>Spiega la differenza tra sistema informativo e sistema informatico. Fai un esempio aziendale concreto.</li>
        <li>Perché i database hanno sostituito il tradizionale file system? Quali problemi del file system vengono risolti?</li>
        <li>Che cos’è un DBMS? Quali funzionalità offre?</li>
        <li>Descrivi l’architettura generale di un database.</li>
        <li>Quali sono i principali problemi di sicurezza in una base di dati?</li>
        <li>Che cosa si intende per ridondanza dei dati? Perché può essere un problema?</li>
        <li>Differenza tra dato e informazione.</li>
        <li>In un’azienda, quali vantaggi porta la centralizzazione dei dati?</li>
    </ol>
    <h3 class="heading">Progettazione con modello E/R</h3>
    <ol>  
        <li>Che cos’è il modello concettuale E/R e perché viene utilizzato?</li>
        <li>Differenza tra entità, attributo e associazione.</li>
        <li>Spiega le cardinalità delle associazioni con esempi pratici.</li>
        <li>Differenza tra associazione uno-a-uno, uno-a-molti e molti-a-molti.</li>
        <li>Come si individua una chiave primaria in fase progettuale?</li>
        <li>Cos’è un attributo composto? E un attributo multivalore?</li>
        <li>Spiega il concetto di entità debole.</li>
        <li>In quali casi è necessario ristrutturare uno schema E/R?</li>
        <li>Che cosa si intende per ottimizzazione di uno schema concettuale?</li>
        <li>Progetta verbalmente il modello E/R di un sistema di prenotazione campi sportivi.</li>
        <li>Come modelleresti un sistema scolastico con studenti, classi, docenti e verifiche?</li>
        <li>Quali errori progettuali possono compromettere una base di dati?</li>
    </ol>
    <h3 class="heading">Modello relazionale</h3>
    <ol>
        <li>Spiega il passaggio dal modello E/R al modello relazionale.</li>
        <li>Come si traduce un’associazione molti-a-molti nel modello logico?</li>
        <li>Che cos’è una tabella nel modello relazionale?</li>
        <li>Differenza tra chiave primaria e chiave esterna.</li>
        <li>Che cosa sono i vincoli di integrità referenziale?</li>
        <li>Cosa succede se si elimina un record referenziato da altre tabelle?</li>
        <li>Spiega i concetti di dominio e vincolo.</li>
        <li>Cos’è la normalizzazione? Perché è importante?</li>
        <li>Spiega la prima, seconda e terza forma normale.</li>
        <li>Quali problemi può causare una cattiva normalizzazione?</li>
        <li>È sempre conveniente normalizzare completamente una base di dati? Motiva la risposta.</li>
    </ol>
    <h3 class="heading">SQL</h3>
    <ol>
        <li>Differenza tra linguaggio DDL e DML.</li>
        <li>Spiega a cosa servono i comandi:
            <ul>
                <li>CREATE</li>
                <li>INSERT</li>
                <li>UPDATE</li>
                <li>DELETE</li>
            </ul>
        </li>
        <li>Che differenza c’è tra DELETE e DROP?</li>
        <li>A cosa serve la clausola WHERE?</li>
        <li>Differenza tra ORDER BY e GROUP BY.</li>
        <li>Spiega il funzionamento delle funzioni di aggregazione.</li>
        <li>Cos’è una JOIN? Quali tipi di JOIN conosci?</li>
        <li>Differenza tra INNER JOIN e LEFT JOIN.</li>
        <li>In quali casi utilizzeresti una query annidata?</li>
        <li>Spiega il significato della clausola HAVING.</li>
        <li>Differenza tra WHERE e HAVING.</li>
        <li>Che cosa sono le viste (VIEW)? Quali vantaggi offrono?</li>
        <li>Che cos’è una transazione?</li>
        <li>Spiega le proprietà ACID delle transazioni.</li>
        <li>In un sistema bancario, perché le transazioni sono fondamentali?</li>
        <li>Come proteggeresti un database da accessi non autorizzati?</li>
        <li>Scrivi verbalmente la logica di una query che mostri gli studenti con media superiore a 7.</li>
        <li>Come realizzeresti una classifica ordinata per punteggio?</li>
        <li>Come troveresti il cliente che ha effettuato più ordini?</li>
    </ol>
    <h3 class="heading">Programmazione web</h3>
    <ol>
        <li>Differenza tra pagine statiche e dinamiche.</li>
        <li>Che cosa significa programmazione lato client e lato server?</li>
        <li>Quali operazioni vengono generalmente svolte lato server?</li>
        <li>Quali vantaggi offre un’applicazione web rispetto a un software desktop?</li>
        <li>Spiega il funzionamento generale di una richiesta HTTP.</li>
        <li>Che ruolo ha il browser in un’applicazione web?</li>
        <li>Come avviene la comunicazione tra pagina web e database?</li>
        <li>Quali rischi di sicurezza esistono nelle applicazioni web?</li>
        <li>Che cos’è l’autenticazione utente?</li>
        <li>Differenza tra autenticazione e autorizzazione.</li>
    </ol>
    <h3 class="heading">PHP e accesso ai dati</h3>
    <ol>
        <li>A cosa serve PHP in un’applicazione web?</li>
        <li>Come avviene il passaggio di parametri tramite form?</li>
        <li>Differenza tra metodo GET e POST.</li>
        <li>Perché POST è generalmente preferibile nei login?</li>
        <li>Come realizzeresti un sistema di login sicuro?</li>
        <li>Dove vengono generalmente salvate le password? In che forma?</li>
        <li>Perché non bisogna salvare le password in chiaro?</li>
        <li>Spiega il concetto di sessione.</li>
        <li>Come si collega PHP a un database MySQL?</li>
        <li>Quali controlli è importante effettuare sui dati inseriti dagli utenti?</li>
        <li>Che cos’è una SQL Injection? Come si previene?</li>
        <li>Descrivi il flusso completo di autenticazione di un utente in un sito web.</li>
    </ol>
    <h3 class="heading">Domande trasversali e di collegamento</h3>
    <ol>
        <li>Collega il concetto di integrità dei dati alla sicurezza informatica.</li>
        <li>Qual è il legame tra progettazione corretta e prestazioni del database?</li>
        <li>In un e-commerce, quali tabelle considereresti fondamentali?</li>
        <li>Quali problematiche emergono quando molti utenti accedono contemporaneamente a un database?</li>
        <li>Perché il linguaggio tecnico è importante nel lavoro informatico?</li>
        <li>Quali competenze pratiche ritieni più importanti tra quelle affrontate durante l’anno?</li>
        <li>Se dovessi progettare oggi un social network semplificato, quali entità e funzionalità considereresti indispensabili?</li>
        <li>Quale argomento del programma ritieni più importante per il mondo del lavoro? Motiva la risposta.</li>
    </ol>
</div>