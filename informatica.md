---
layout: page
title: Informatica
permalink: /informatica
last_modified_at: 2026-05-21 23:12
---

## Lista non esaustiva di domande per l'esame di informatica
Qui potete trovare una lista di domande che coprono i principali argomenti affrontati durante l'anno. Queste domande sono pensate per aiutarvi a ripassare e a preparare l'esame, **ma non sono esaustive**. Per chi ha poca dimestichezza con la lingua italiana, esaustivo significa che non copre tutti gli argomenti possibili, quindi è consigliato approfondire ogni argomento e esercitarsi con esempi pratici. Buono studio!

### Basi di dati e sistemi informativi

1. **Spiega la differenza tra sistema informativo e sistema informatico. Fai un esempio aziendale concreto.**
   - *Sottoquesiti:*
     - Cosa si intende per "sistema informativo"? In quali momenti storici è emerso questo concetto?
     - Quali sono le componenti di un "sistema informatico"? Perchè include hardware, software e reti?
     - Come interagiscono i due sistemi in un'azienda moderna?
     - Fai un esempio concreto: come funziona una filiale bancaria senza il sistema informatico?
   - *Suggerimenti per rispondere:*
     - Ricorda che il sistema informativo è pi ampio e può esistere anche senza computer
     - Un'azienda usa il sistema informatico come strumento per gestire il sistema informativo
     - Pensa a un'azienda reale che conosci (es. negozio, scuola, ospedale)
   - *Concetti chiave:* sistema informativo, sistema informatico, hardware, software, processi informatici, digitalizzazione

2. **Perchè i database hanno sostituito il tradizionale file system? Quali problemi del file system vengono risolti?**
   - *Sottoquesiti:*
     - Cosa sono i "file system tradizionali"? Come venivano organizzati i dati prima dei database?
     - Quali problemi causava la ridondanza dei dati nei file system?
     - Come garantisce un DBMS l'integrità  dei dati meglio di un file system?
     - Quali operazioni diventano più facili con un database rispetto ai file?
   - *Suggerimenti per rispondere:*
     - Elenca i principali problemi del file system: ridondanza, inconsistenza, accesso difficile, sicurezza debole
     - Spiega come un database risolve ciascun problema
   - *Concetti chiave:* file system, ridondanza, inconsistenza, DBMS, centralizzazione, integrità  referenziale

3. **Che cos'è un DBMS? Quali funzionalità  offre?**
   - *Sottoquesiti:*
     - DBMS è l'acronimo di cosa?
     - Quali sono i componenti principali di un DBMS?
     - Come gestisce un DBMS l'accesso concorrente ai dati?
     - Che ruolo ha il DBMS nel garantire la sicurezza?
     - Quali DBMS conosci? (MySQL, PostgreSQL, Oracle, SQL Server, MongoDB)
   - *Suggerimenti per rispondere:*
     - Descrivi il DBMS come un intermediario tra utenti e dati
     - Elenca le principali funzionalità : controllo dell'accesso, backup, recupero da errori, ottimizzazione query
   - *Concetti chiave:* DBMS, amministratore di database, linguaggio DDL/DML, transazioni, recovery

4. **Descrivi l'architettura generale di un database.**
   - *Sottoquesiti:*
     - Cosa sono i "tre livelli" dell'architettura di un database?
     - Cosa si intende per livello fisico, logico e esterno?
     - Come comunica l'utente con il database attraverso questi livelli?
     - Quali vantaggi offre questa architettura a tre livelli?
   - *Suggerimenti per rispondere:*
     - Livello fisico: come sono effettivamente memorizzati i dati nel disco
     - Livello logico: come il DBMS organizza e rappresenta i dati
     - Livello esterno: come gli utenti vedono i dati (viste)
   - *Concetti chiave:* architettura ANSI/SPARC, livello fisico, livello logico, livello esterno, vista, schema

5. **Quali sono i principali problemi di sicurezza in una base di dati?**
   - *Sottoquesiti:*
     - Chi vuole accedere ai dati senza autorizzazione? (hacker, dipendenti, concorrenti)
     - Come si può proteggere un database da accessi non autorizzati?
     - Che cos'è la cifratura? Quando è necessaria?
     - Cosa succede se un'azienda subisce una data breach? Quali danni?
   - *Suggerimenti per rispondere:*
     - Identifica le minacce: accesso non autorizzato, SQL injection, malware, furto di dati
     - Proponi soluzioni: autenticazione, crittografia, audit trail, backup, backup offsite
   - *Concetti chiave:* sicurezza, autenticazione, autorizzazione, crittografia, SQL injection, audit, backup

6. **Che cosa si intende per ridondanza dei dati? Perchè può essere un problema?**
   - *Sottoquesiti:*
     - Fai un esempio: come potrebbe uno stesso dato essere ripetuto in più punti?
     - Cosa succede se modifichiamo un dato in un posto ma non nell'altro? (anomalia di aggiornamento)
     - Come genera inconsistenza la ridondanza?
     - La ridondanza è sempre negativa? Esistono casi in cui è utile?
   - *Suggerimenti per rispondere:*
     - Spiega l'anomalia di inserimento, modifica e cancellazione causate da ridondanza
     - Parla di normalizzazione come soluzione per eliminarla
     - Accenna alla denormalizzazione strategica per motivi di performance
   - *Concetti chiave:* ridondanza, anomalia, inconsistenza, normalizzazione, denormalizzazione, data integrity

7. **Differenza tra dato e informazione.**
   - *Sottoquesiti:*
     - Cosa è un "dato" dal punto di vista informatico? (valore grezzo, non elaborato)
     - Cosa è un'"informazione"? (dato elaborato, contestualizzato, significativo)
     - Fai un esempio: il numero "25" è un dato o un'informazione?
     - Quale è più prezioso per un'azienda?
   - *Suggerimenti per rispondere:*
     - Dato = numero grezzo (es: "1500")
     - Informazione = dato con contesto (es: "la divisione commerciale ha fatturato 1500â‚¬")
     - Il processo di trasformazione si chiama "elaborazione"
   - *Concetti chiave:* dato, informazione, elaborazione, contesto, conoscenza

8. **In un'azienda, quali vantaggi porta la centralizzazione dei dati?**
   - *Sottoquesiti:*
     - Cosa significa "centralizzare i dati"? Dove vengono memorizzati?
     - Come migliora la qualità  dei dati quando sono centralizzati?
     - Chi controlla l'accesso ai dati centralizzati?
     - Quali rischi comporta la centralizzazione? (single point of failure)
   - *Suggerimenti per rispondere:*
     - Vantaggi: ridondanza minore, consistenza, controllo di accesso, backup centralizzato
     - Rischi: se il server centrale cade, nessuno accede ai dati; servono backup e ridondanza strategica
   - *Concetti chiave:* centralizzazione, distribuito, data governance, backup, disaster recovery, replicazione

### Progettazione con modello E/R

1. **Che cos'è il modello concettuale E/R e perchè viene utilizzato?**
   - *Sottoquesiti:*
     - Cosa significa E/R? (Entità -Relazione)
     - Chi ha inventato il modello E/R e quando?
     - A quale fase del ciclo di sviluppo di un database appartiene il modello E/R?
     - Perchè si usa il modello E/R prima di implementare un database reale?
   - *Suggerimenti per rispondere:*
     - Ricorda che è un modello concettuale (descrive cosa, non come)
     - Serve come ponte tra il mondo reale e il database logico
     - àˆ indipendente dal DBMS che sceglieremo
   - *Concetti chiave:* modello concettuale, modello logico, modello fisico, progettazione, fase progettuale

2. **Differenza tra entità , attributo e associazione.**
   - *Sottoquesiti:*
     - Cosa rappresenta un'entità  nel mondo reale? (es: una persona, un prodotto, una scuola)
     - Cosa sono gli attributi? Come caratterizzano un'entità ?
     - Che cos'è un'associazione? Come collega due entità ?
     - Qual è la differenza tra attributo e entità ? (quando un attributo deve diventare entità ?)
   - *Suggerimenti per rispondere:*
     - Entità : "cosa concreta" (es: Studente, Classe, Docente)
     - Attributo: proprietà  di un'entità  (es: Nome, Cognome, DataNascita)
     - Associazione: relazione tra entità  (es: Studente ISCRITTO IN Classe)
   - *Concetti chiave:* entità , attributo, associazione, relazione, occorrenza

3. **Spiega le cardinalità  delle associazioni con esempi pratici.**
   - *Sottoquesiti:*
     - Cosa definisce la "cardinalità " di un'associazione?
     - Quali sono le 4 possibili cardinalità ? (1:1, 1:N, N:1, N:M)
     - Come si rappresentano graficamente le cardinalità  nel diagramma E/R?
     - Fai 4 esempi reali: un 1:1, un 1:N, un N:1, un N:M
   - *Suggerimenti per rispondere:*
     - Cardinalità  minima e massima per ogni entità 
     - Usa esempi reali: Persona-Passaporto (1:1), Persona-Figli (1:N), Dipendente-Azienda (N:1), Studente-Corso (N:M)
   - *Concetti chiave:* cardinalità , molteplicità , uno-a-uno, uno-a-molti, molti-a-molti, partecipazione

4. **Differenza tra associazione uno-a-uno, uno-a-molti e molti-a-molti.**
   - *Sottoquesiti:*
     - Fai un esempio di ogni tipo di associazione dal mondo reale
     - Come si rappresentano queste associazioni nel diagramma E/R?
     - Quale tipo di associazione è più frequente nei database?
     - Come si traduce un'associazione N:M nel modello logico relazionale?
   - *Suggerimenti per rispondere:*
     - 1:1 è rara (es: Persona-Passaporto, ma non tutti hanno passaporto)
     - 1:N è frequente (es: Dipartimento-Dipendente)
     - N:M richiede una tabella di collegamento nel modello relazionale
   - *Concetti chiave:* uno-a-uno, uno-a-molti, molti-a-molti, tabella di giunzione, tabella di collegamento

5. **Come si individua una chiave primaria in fase progettuale?**
   - *Sottoquesiti:*
     - Cosa è una "chiave" in una tabella?
     - Quali proprietà  deve avere una chiave primaria? (unicità , minimalità , non nullabilità )
     - Come si sceglie tra più possibili chiavi (chiavi candidate)?
     - Cosa è una chiave surrogata? Quando è utile?
   - *Suggerimenti per rispondere:*
     - Identifica gli attributi che identificano univocamente un'entità 
     - Esempio: per un Studente, il numero di matricola è migliore del nome (che potrebbe ripetersi)
     - A volte si usa una chiave sintetica (ID) invece di quella naturale
   - *Concetti chiave:* chiave primaria, chiave candidata, chiave naturale, chiave surrogata, unicità , integrità 

6. **Cos'è un attributo composto? E un attributo multivalore?**
   - *Sottoquesiti:*
     - Fai un esempio di attributo composto (es: Indirizzo = Via + Civico + Città )
     - Fai un esempio di attributo multivalore (es: Telefono, Email - una persona può averne più di uno)
     - Come si rappresentano nel diagramma E/R?
     - Come si traducono nel modello relazionale?
   - *Suggerimenti per rispondere:*
     - Attributo composto: si può scomporre in parti significative
     - Attributo multivalore: può assumere più valori per la stessa entità 
     - Nel modello relazionale, gli attributi multivalore diventano attributi di una nuova entità 
   - *Concetti chiave:* attributo composto, attributo multivalore, scomposizione, entità  debole, normalizzazione

7. **Spiega il concetto di entità  debole.**
   - *Sottoquesiti:*
     - Cosa rende un'entità  "debole"? (dipendenza dall'esistenza di un'altra entità )
     - Fai un esempio: come una "Linea d'Ordine" dipende da "Ordine"
     - Come si rappresenta un'entità  debole nel diagramma E/R?
     - Qual è la differenza tra entità  debole per identificazione e per esistenza?
   - *Suggerimenti per rispondere:*
     - Un'entità  debole non può esistere senza un'entità  forte
     - Esempio: una stanza non può esistere senza un edificio
     - Nel modello relazionale, la chiave primaria dell'entità  debole contiene anche quella dell'entità  forte
   - *Concetti chiave:* entità  debole, dipendenza, entità  forte, chiave parziale, identificazione, esistenza

8. **In quali casi è necessario ristrutturare uno schema E/R?**
   - *Sottoquesiti:*
     - Cosa può andare "sbagliato" in uno schema E/R progettato male?
     - Quali errori di modellazione conosci?
     - Come si riconosce che uno schema ha problemi di ridondanza o ambiguità ?
     - Quando è il momento giusto per ristrutturare? (prima o dopo l'implementazione?)
   - *Suggerimenti per rispondere:*
     - Identifica ridondanze, attributi fuori posto, associazioni sbagliate
     - Problemi comuni: attributi che dovrebbero essere entità , associazioni sbagliate, cardinalità  errate
   - *Concetti chiave:* ristrutturazione, validazione, revisione, coerenza, completezza, correttezza

9. **Che cosa si intende per ottimizzazione di uno schema concettuale?**
   - *Sottoquesiti:*
     - Cosa significa "ottimizzare" uno schema? (ridurre ridondanza, migliorare performance)
     - Quali metriche si usano per valutare la qualità  di uno schema?
     - Come influisce l'ottimizzazione sulla fase logica e fisica?
     - Esiste un conflitto tra "correttezza logica" e "performance"?
   - *Suggerimenti per rispondere:*
     - Normalizzazione è una forma di ottimizzazione
     - A volte serve denormalizzazione strategica per performance
     - L'ottimizzazione riguarda anche le associazioni e le entità  inutili
   - *Concetti chiave:* ottimizzazione, performance, normalizzazione, denormalizzazione, ridondanza strategica

10. **Progetta verbalmente il modello E/R di un sistema di prenotazione campi sportivi.**
    - *Sottoquesiti:*
      - Quali entità  principali avresti? (es: Campo, Utente, Prenotazione)
      - Quali attributi per ogni entità ?
      - Come collegheresti le entità ? (quali associazioni?)
      - Ci sono entità  deboli? (es: Orario di uno specifico campo)
    - *Suggerimenti per rispondere:*
      - Entità : Campo, Utente, Prenotazione, Tipo di Sport, Orario
      - Associazioni: Utente PRENOTA Prenotazione, Prenotazione RIGUARDA Campo
      - Attributi: per Campo (Nome, Indirizzo, Prezzo), per Utente (Nome, Email, Telefono)
    - *Concetti chiave:* modellazione, entità , associazione, completezza, praticità , validazione

11. **Come modelleresti un sistema scolastico con studenti, classi, docenti e verifiche?**
    - *Sottoquesiti:*
      - Quali sarebbero le entità  principali?
      - Come collegheresti Studente con Classe? (N:1)
      - Come rappresenteresti il rapporto tra Docente e Classe?
      - Dove andrebbe l'entità  Verifica? A cosa sarebbe collegata?
      - Come modelleresti i voti? (attributo o entità  separata?)
    - *Suggerimenti per rispondere:*
      - Entità  principali: Studente, Classe, Docente, Verifica, Voto, Materia
      - Studente N a 1 Classe (uno studente sta in una classe)
      - Docente N a M Classe (un docente insegna più classi, una classe ha più docenti)
      - Verifica è legata a Materia e Docente
    - *Concetti chiave:* progettazione complessa, entità  multiple, associazioni N:M, tabella di giunzione

12. **Quali errori progettuali possono compromettere una base di dati?**
    - *Sottoquesiti:*
      - Cosa succede se la chiave primaria è scelta male?
      - Come influisce uno schema E/R sbagliato sulla qualità  dei dati?
      - Quali problemi causa un'associazione modellata male?
      - Come si propagano gli errori di progettazione ai dati reali?
    - *Suggerimenti per rispondere:*
      - Errori in progettazione = dati inconsistenti, perdita di informazioni, inefficienza query
      - Sottolinea che la progettazione è il fondamento di tutto
      - Mostra come uno sbaglio qui si ripete migliaia di volte nel database
    - *Concetti chiave:* qualità  dei dati, integrità  referenziale, consistenza, anomalie, progettazione

### Modello relazionale

1. **Spiega il passaggio dal modello E/R al modello relazionale.**
   - *Sottoquesiti:*
     - Qual è la principale differenza tra i due modelli?
     - Come si traduce un'entità  E/R in una tabella relazionale?
     - Come diventano le associazioni nel modello relazionale?
     - Cosa succede agli attributi composti e multivalore durante la traduzione?
   - *Suggerimenti per rispondere:*
     - Il modello E/R è astratto, il relazionale è concreto (tabelle e righe)
     - Entità  > Tabella, Attributo > Colonna, Occorrenza entità  > Riga
     - Le associazioni diventano chiavi esterne o tabelle di giunzione
   - *Concetti chiave:* trasformazione, modello relazionale, tabella, riga, colonna, chiave esterna

2. **Come si traduce un'associazione molti-a-molti nel modello logico?**
   - *Sottoquesiti:*
     - Perchè non si può rappresentare un'associazione N:M direttamente in una tabella?
     - Come si risolve il problema usando una tabella di giunzione?
     - Qual è la chiave primaria di una tabella di giunzione?
     - Fai un esempio: come rappresenteresti l'associazione Studente N:M Corso?
   - *Suggerimenti per rispondere:*
     - Una relazione N:M fra due tabelle crearebbe ambiguità 
     - Crei una tabella intermedia con le chiavi esterne di entrambe
     - La tabella di giunzione può avere attributi propri (es: data iscrizione, voto)
   - *Concetti chiave:* tabella di giunzione, chiave composta, chiave esterna, decomposizione

3. **Che cos'è una tabella nel modello relazionale?**
   - *Sottoquesiti:*
     - Come è strutturata una tabella? (righe, colonne, header)
     - Quali regole deve seguire una tabella relazionale?
     - Cosa sono i "vincoli di integrità " di una tabella?
     - Quale è la differenza tra schema e istanza di una tabella?
   - *Suggerimenti per rispondere:*
     - Una tabella è un insieme di righe omogenee (stessa struttura)
     - Header = nomi colonne, Colonne = attributi, Righe = tuple/record
     - Regole: no righe duplicate, ordine righe irrilevante
   - *Concetti chiave:* tabella, riga, colonna, tupla, attributo, schema, istanza

4. **Differenza tra chiave primaria e chiave esterna.**
   - *Sottoquesiti:*
     - Cosa garantisce una chiave primaria? (unicità  in quella tabella)
     - Cosa garantisce una chiave esterna? (collegamento ad un'altra tabella)
     - Cosa succede se una chiave esterna punta a un record che non esiste?
     - Quali attributi possono essere chiavi esterne? (solo quelli che sono chiavi primarie di un'altra tabella?)
   - *Suggerimenti per rispondere:*
     - Chiave primaria: identificazionelocale all'interno della tabella
     - Chiave esterna: collegamento con un'altra tabella, crea relazioni
     - La combinazione assicura l'integrità  referenziale
   - *Concetti chiave:* chiave primaria, chiave esterna, integrità  referenziale, vincolo, collegamento

5. **Che cosa sono i vincoli di integrità  referenziale?**
   - *Sottoquesiti:*
     - Quale "promessa" fa un vincolo di integrità  referenziale?
     - Cosa accade se provo ad inserire una chiave esterna che non esiste?
     - Come reagisce un DBMS alle violazioni di integrità  referenziale?
     - Quando può essere utile "disabilitare" i vincoli?
   - *Suggerimenti per rispondere:*
     - Garantiscono la coerenza tra tabelle collegate
     - Impediscono "orfani" (record senza padre)
     - Il DBMS rifiuta l'operazione se viola il vincolo
     - Ricorda: RESTRICT, CASCADE, SET NULL come opzioni
   - *Concetti chiave:* integrità  referenziale, vincolo, coerenza, orfani, azioni referenziali

6. **Cosa succede se si elimina un record referenziato da altre tabelle?**
   - *Sottoquesiti:*
     - Cosa significa che un record è "referenziato"?
     - Quali azioni può fare il DBMS? (RESTRICT, CASCADE, SET NULL)
     - Cosa significa RESTRICT? (non consente l'eliminazione)
     - Cosa significa CASCADE? (elimina anche i record dipendenti)
     - Cosa significa SET NULL? (imposta NULL la chiave esterna)
   - *Suggerimenti per rispondere:*
     - Fai un esempio: elimini un Docente che ha molte Verifiche
     - Scegli l'azione appropriata al contesto (es: CASCADE per Ordini-LineaOrdine, RESTRICT per Dipartimento-Dipendente)
   - *Concetti chiave:* azioni referenziali, CASCADE, RESTRICT, SET NULL, ON DELETE, integrità 

7. **Spiega i concetti di dominio e vincolo.**
   - *Sottoquesiti:*
     - Cosa è il "dominio" di un attributo? (quali valori può assumere)
     - Come si definisce un dominio in SQL? (tipo di dato, vincoli)
     - Quali tipi di vincoli conosci? (NOT NULL, UNIQUE, CHECK, DEFAULT)
     - A cosa serve un vincolo DEFAULT?
   - *Suggerimenti per rispondere:*
     - Dominio = insieme di valori ammessi per un attributo
     - Esempio: Età ∈ [0, 150], Email deve contenere @, Genere ∈ {M, F}
     - I vincoli garantiscono che solo dati sensati possono essere inseriti
   - *Concetti chiave:* dominio, tipo di dato, vincolo, NOT NULL, UNIQUE, CHECK, DEFAULT, TYPE

8. **Cos'è la normalizzazione? Perchè è importante?**
   - *Sottoquesiti:*
     - Quali problemi causa una tabella denormalizzata?
     - Come riduce la ridondanza la normalizzazione?
     - La normalizzazione migliora le performance?
     - Quando è conveniente denormalizzare?
   - *Suggerimenti per rispondere:*
     - La normalizzazione elimina ridondanza e anomalie
     - Rende il database più facile da mantenere e meno propenso a errori
     - Può ridurre leggermente le performance (più JOIN) ma migliora la coerenza
   - *Concetti chiave:* normalizzazione, denormalizzazione, anomalia, coerenza, ridondanza, performance

9. **Spiega la prima, seconda e terza forma normale.**
   - *Sottoquesiti:*
     - Quale regola definisce la 1FN? (attributi atomici)
     - Quale regola definisce la 2FN? (dipendenza funzionale completa)
     - Quale regola definisce la 3FN? (nessuna dipendenza transitiva)
     - Fai un esempio pratico per ogni forma normale
     - Cos'è la dipendenza funzionale?
   - *Suggerimenti per rispondere:*
     - 1FN: ogni attributo deve contenere un solo valore (no attributi ripetuti)
     - 2FN: nessun attributo non-chiave dipende da parte della chiave
     - 3FN: nessun attributo non-chiave dipende da altri attributi non-chiave
   - *Concetti chiave:* prima forma normale, seconda forma normale, terza forma normale, dipendenza funzionale

10. **Quali problemi può causare una cattiva normalizzazione?**
    - *Sottoquesiti:*
      - Quali "anomalie" risultano da una cattiva normalizzazione?
      - Come influisce sulla consistenza dei dati?
      - Quali difficoltà  causa nella manutenzione?
      - Come aumenta lo spazio di memorizzazione?
    - *Suggerimenti per rispondere:*
      - Anomalia di inserimento: non posso inserire dati incompleti
      - Anomalia di modifica: devo aggiornare lo stesso dato in più posti
      - Anomalia di cancellazione: perdo dati utili eliminandone altri
    - *Concetti chiave:* anomalia di inserimento, di modifica, di cancellazione, ridondanza, inconsistenza

11. **àˆ sempre conveniente normalizzare completamente una base di dati? Motiva la risposta.**
    - *Sottoquesiti:*
      - Quali sono i vantaggi della normalizzazione completa?
      - Quali sono i costi? (performance, complessità )
      - In quale scenario potrebbe essere meglio denormalizzare?
      - Come si decide il livello di normalizzazione appropriato?
    - *Suggerimenti per rispondere:*
      - No, non sempre. Dipende dal contesto (OLTP vs OLAP)
      - OLTP (transazioni): normale, la coerenza è critica
      - OLAP (analisi): denormalizzazione per performance di lettura
      - Business intelligence può richiedere data warehouse denormalizzati
    - *Concetti chiave:* denormalizzazione strategica, OLTP, OLAP, performance, coerenza, data warehouse

### SQL

1. Differenza tra linguaggio DDL e DML.
2. Spiega a cosa servono i comandi:
    * CREATE
    * INSERT
    * UPDATE
    * DELETE
3. Che differenza c'è tra DELETE e DROP?
4. A cosa serve la clausola WHERE?
5. Differenza tra ORDER BY e GROUP BY.
6. Spiega il funzionamento delle funzioni di aggregazione.
7. Cos'è una JOIN? Quali tipi di JOIN conosci?
8. Differenza tra INNER JOIN e LEFT JOIN.
9. In quali casi utilizzeresti una query annidata?
10. Spiega il significato della clausola HAVING.
11. Differenza tra WHERE e HAVING.
12. Che cosa sono le viste (VIEW)? Quali vantaggi offrono?
13. Che cos'è una transazione?
14. Spiega le proprietà  ACID delle transazioni.
15. In un sistema bancario, perchè le transazioni sono fondamentali?
16. Come proteggeresti un database da accessi non autorizzati?
17. Scrivi verbalmente la logica di una query che mostri gli studenti con media superiore a 7.
18. Come realizzeresti una classifica ordinata per punteggio?
19. Come troveresti il cliente che ha effettuato più ordini?

### Programmazione web

1. **Differenza tra pagine statiche e dinamiche.**
   - *Sottoquesiti:*
     - Cosa è una pagina statica? (HTML contenuto fisso)
     - Cosa è una pagina dinamica? (contenuto generato al runtime)
     - Quali linguaggi si usano per pagine statiche?
     - Quali linguaggi si usano per pagine dinamiche?
     - Quale tipo di pagina è più sicura? Perchè?
   - *Suggerimenti per rispondere:*
     - Statica: il server manda sempre lo stesso HTML
     - Dinamica: il server genera HTML in base a parametri/dati
     - Esempio statica: un sito informativo, esempio dinamica: un e-commerce
   - *Concetti chiave:* pagina statica, pagina dinamica, HTML, server-side, client-side

2. **Che cosa significa programmazione lato client e lato server?**
   - *Sottoquesiti:*
     - Dove viene eseguito il codice lato client? (browser dell'utente)
     - Dove viene eseguito il codice lato server? (web server)
     - Quali linguaggi si usano lato client?
     - Quali linguaggi si usano lato server?
     - Quali sono i vantaggi/svantaggi di ciascuno?
   - *Suggerimenti per rispondere:*
     - Client: JavaScript nel browser, esecuzione rapida ma meno sicura
     - Server: PHP, Python, Node.js, più sicuro ma consuma risorse server
   - *Concetti chiave:* client-side, server-side, JavaScript, PHP, esecuzione distribuita

3. **Quali operazioni vengono generalmente svolte lato server?**
   - *Sottoquesiti:*
     - Accesso a database: lato server o client?
     - Autenticazione: lato server o client?
     - Elaborazione dati sensibili: lato server o client?
     - Validazione dati: lato server, client, o entrambi?
     - Perchè certe operazioni DEVONO stare lato server?
   - *Suggerimenti per rispondere:*
     - Database: sempre server (non è accessibile da client per sicurezza)
     - Autenticazione: server (altrimenti l'utente potrebbe modificare il login)
     - Operazioni sensibili: server
     - Validazione: client (per velocità ) ma anche server (per sicurezza)
   - *Concetti chiave:* server-side logic, database, autenticazione, validazione, sicurezza

4. **Quali vantaggi offre un'applicazione web rispetto a un software desktop?**
   - *Sottoquesiti:*
     - Cosa significa "no installation"? Come è possibile?
     - Quali sono i vantaggi di accesso da browser?
     - Come funziona l'aggiornamento di un'applicazione web vs desktop?
     - Quale è più facile da distribuire?
     - Quali sono gli svantaggi delle web app?
   - *Suggerimenti per rispondere:*
     - Web: accessibile da qualunque computer, sempre aggiornata, facile da condividere
     - Desktop: più veloce, meglio per operazioni offline, più controllo
   - *Concetti chiave:* web application, cross-platform, browser, aggiornamento, accessibilità 

5. **Spiega il funzionamento generale di una richiesta HTTP.**
   - *Sottoquesiti:*
     - Cosa è il protocollo HTTP?
     - Come si struttura una richiesta HTTP?
     - Cosa contiene una risposta HTTP?
     - Quali codici di risposta conosci? (200, 404, 500)
     - Quale è la differenza tra HTTP e HTTPS?
   - *Suggerimenti per rispondere:*
     - Cliente (browser) invia richiesta al server
     - Server elabora e invia risposta
     - HTTP è stateless (ogni richiesta è indipendente)
     - HTTPS aggiunge crittografia
   - *Concetti chiave:* HTTP, richiesta, risposta, stateless, URL, metodo GET/POST

6. **Che ruolo ha il browser in un'applicazione web?**
   - *Sottoquesiti:*
     - Cosa fa il browser quando riceve HTML?
     - Come interpreta il browser i CSS?
     - Come esegue il browser il JavaScript?
     - Quale è il ruolo del DOM (Document Object Model)?
     - Come comunica il browser con il server per aggiornamenti?
   - *Suggerimenti per rispondere:*
     - Il browser è il "client" dell'applicazione
     - Esegue il rendering di HTML, CSS e JavaScript
     - Intercetta eventi (click, submit) e comunica con il server
   - *Concetti chiave:* browser, rendering, DOM, JavaScript engine, evento, AJAX

7. **Come avviene la comunicazione tra pagina web e database?**
   - *Sottoquesiti:*
     - Il browser accede direttamente al database?
     - Come avviene il trasferimento dati tra browser e server?
     - Cosa è un'API?
     - Come funziona una chiamata AJAX?
     - Quali formati si usano per scambiare dati? (JSON, XML)
   - *Suggerimenti per rispondere:*
     - No, il browser non accede mai direttamente al database
     - Browser > Server (via HTTP/AJAX) > Database
     - Il server è l'intermediario per sicurezza
   - *Concetti chiave:* API, AJAX, JSON, server, intermediario, sicurezza

8. **Quali rischi di sicurezza esistono nelle applicazioni web?**
   - *Sottoquesiti:*
     - Cosa è un attacco XSS (Cross-Site Scripting)?
     - Cosa è un attacco CSRF (Cross-Site Request Forgery)?
     - Che cos'è una SQL Injection?
     - Come si protegge una web app da questi attacchi?
     - Quale è il ruolo dell'HTTPS?
   - *Suggerimenti per rispondere:*
     - XSS: injection di codice JavaScript maligno
     - CSRF: attacco che sfrutta la sessione dell'utente
     - SQL Injection: invio di SQL maligno per manipolare il database
     - Protezioni: validazione input, prepared statements, HTTPS, token CSRF
   - *Concetti chiave:* XSS, CSRF, SQL injection, validazione, crittografia, HTTPS

9. **Che cos'è l'autenticazione utente?**
   - *Sottoquesiti:*
     - Come avviene un login su un sito?
     - Dove viene memorizzata la password?
     - Cosa è una sessione? Quanto dura?
     - Come sa il server che l'utente è loggato?
     - Cosa è un token JWT?
   - *Suggerimenti per rispondere:*
     - Utente inserisce email e password
     - Server verifica contro il database
     - Se corretto, crea una sessione
     - Browser mantiene un cookie con l'ID sessione
   - *Concetti chiave:* autenticazione, login, sessione, cookie, password hashing, JWT

10. **Differenza tra autenticazione e autorizzazione.**
    - *Sottoquesiti:*
      - Autenticazione verifica cosa?
      - Autorizzazione verifica cosa?
      - Fai un esempio per ciascuna
      - Cosa è il concetto di "ruolo" (role-based access)?
      - Quando un'applicazione necessita di autorizzazione?
    - *Suggerimenti per rispondere:*
      - Autenticazione: "sei chi dici di essere?" (login)
      - Autorizzazione: "hai il permesso di fare questo?" (access control)
      - Esempio: login autentica l'utente, ruoli autorizzano le azioni
    - *Concetti chiave:* autenticazione, autorizzazione, ruoli, permessi, access control

### PHP e accesso ai dati

1. A cosa serve PHP in un'applicazione web?
2. Come avviene il passaggio di parametri tramite form?
3. Differenza tra metodo GET e POST.
4. Perchè POST è generalmente preferibile nei login?
5. Come realizzeresti un sistema di login sicuro?
6. Dove vengono generalmente salvate le password? In che forma?
7. Perchè non bisogna salvare le password in chiaro?
8. Spiega il concetto di sessione.
9. Come si collega PHP a un database MySQL?
10. Quali controlli è importante effettuare sui dati inseriti dagli utenti?
11. Che cos'è una SQL Injection? Come si previene?
12. Descrivi il flusso completo di autenticazione di un utente in un sito web.

### Domande trasversali e di collegamento

1. Collega il concetto di integrità  dei dati alla sicurezza informatica.
2. Qual è il legame tra progettazione corretta e prestazioni del database?
3. In un e-commerce, quali tabelle considereresti fondamentali?
4. Quali problematiche emergono quando molti utenti accedono contemporaneamente a un database?
5. Perchè il linguaggio tecnico è importante nel lavoro informatico?
6. Quali competenze pratiche ritieni più importanti tra quelle affrontate durante l'anno?
7. Se dovessi progettare oggi un social network semplificato, quali entità  e funzionalità  considereresti indispensabili?
8. Quale argomento del programma ritieni più importante per il mondo del lavoro? Motiva la risposta.