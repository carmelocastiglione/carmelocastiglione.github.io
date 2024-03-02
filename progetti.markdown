---
layout: page
title: Progetti
permalink: /progetti
---

<div class="container">
  <h1 class="heading">Progetti</h1>
  <h2 class="heading">Server Raspberry per ricevere dati da Arduino</h2>
  <p>Lo scopo di questo progetto è di creare un server che raccoglie i dati provenienti da sensori installati ad esempio su una board Arduino e li metta a disposizione dell'utente sotto forma di grafici per monitorarne ad esempio l'andamento nel corso del tempo. In questo modo è possibile, ad esempio, visualizzare l'andamento delle temperature di una stanza anche a distanza</p>
  <p>Per far ciò, tralasciando la parte di raccolta ed invio dati che deve essere sviluppata su Arduino, abbiamo bisogno di:
    <ul>
      <li>un broker Mosquitto (MQTT) che rimanga in ascolto e riceve i dati provenienti dai sensori</li>
      <li>un database che memorizza i dati: in questo progetto useremo InfluxDB</li>
      <li>un filtro che prende i dati dal server MQTT e li salva nel database: noi useremo Telegraf, un plugin di InfluxDB</li>
      <li>Un software per visualizzare i grafici: utilizzeremo Grafana</li>
    </ul>
  </p>
  <p>Lo schema logico è il seguente:</p>
  <img class="image" src="/assets/images/iot-grafico.png" width="600">
  <h3>Installazione Raspberry Pi</h3>
  <p>La prima cosa da fare, se si ha davanti un Raspberry nuovo, è installare il sistema operativo sulla scheda microSD. Oggi la suluzione più facile è quella di installare Raspberry Pi OS tramite un software chiamato <a href="https://www.raspberrypi.com/software/" target="blank">Raspberry Pi Imager</a>. Troverete molte più informazioni <a href="https://www.raspberrypi.com/documentation/computers/getting-started.html" target="blank">a questo link</a>. Il programma di installazione ha questo aspetto:</p>
  <img class="image" src="/assets/images/rpi_imager.png" width="600">
  Impostare i parametri:
  {% highlight md %}
  Sistema operativo: Raspberry Pi OS (32bit)
  Scheda SD: selezionare drive{% endhighlight %}
  Cliccando sulla rotellina è possibile impostare i parametri avanzati che ci permetteranno di usare il Rasbperry in modalità headless (senza uno schermo)
  {% highlight md %}
  Imager > Impostazioni avanzate (servono per l'headless)
  Nome host: raspberrypi.local
  Abilita SSH: Usa password autenticazione
  Imposta nome utente e password: raspberryuser / serverpass
  Configura WiFI: 
    SSID e passoword (di solito li ricava da soli)
    Nazione WIFI: IT
  Imposta configurazioni locali
    Fuso orario: Europe/Rome
    Layout tastiera: it{% endhighlight %}
  A questo punto confermare e attendere la scrittura del Sistema Operativo sulla scheda di memoria

  <h3>Come trovare l'IP del Raspberry</h3>
  Metodo immeditato (usare lo stesso nome host impostato nel programma di installazione): 
  {% highlight terminal %}
  ping raspberrypi.local -4{% endhighlight %}

  <h3>Come collegarsi al Raspberry</h3>
  A questo punto, conoscendo l'indirizzo IP del Raspberry, è possibile collegarsi ad esso tramite SSH tramite il comando:
  {% highlight terminal %}
  ssh raspberryuser@192.168.1.x{% endhighlight %}
  Dove la x rappresenta l'ultima cifra dell'IP trovato sopra.<br>
  Dire sì al fingerprint e inserire la password

  <h3>Per far collegare il Raspberry ad una rete WiFi</h3>
  Nel caso in cui bisogna collegare il Raspberry ad una rete WiFi nuova, è necessario collegarlo ad un monitor e inserire manualmente i dati della rete WiFi:
  {% highlight md %}
  sudo raspi-config
  1 System Options
  S1 Wireless LAN
  Inserire SSID e password{% endhighlight %}

  <h3>Controllo aggiornamenti</h3>
  E' sempre utile aggiornare il Raspberry:
  {% highlight terminal %}
  sudo apt-get update
  sudo apt-get upgrade{% endhighlight %}

  <h3>InfluxDB</h3>
  <p>InfluxDB sarà il database che salverà in maniera definitiva i dati provenienti dal server MQTT. Su Raspberry a 32bit è necessario installare la versione v1 di InfluxDB. Il comando sudo apt-get install influxdb non funziona (manca il client), quindi lo installo da repository. A <a href="https://pimylifeup.com/raspberry-pi-influxdb/" target="_blank">questo link</a> trovate una guida.</p>

  <p>InfluxDB gira su localhost:8086</p>

  <p>Su SSH si usa il tasto destro del mouse per incollare</p>
  {% highlight terminal %}
  curl https://repos.influxdata.com/influxdata-archive.key | gpg --dearmor | sudo tee /usr/share/keyrings/influxdb-archive-keyring.gpg >/dev/null

  echo "deb [signed-by=/usr/share/keyrings/influxdb-archive-keyring.gpg] https://repos.influxdata.com/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/influxdb.list

  sudo apt update
  sudo apt install influxdb{% endhighlight %}

  Aggiungo il servizio all'avvio del sistema:
  {% highlight terminal %}
  sudo systemctl unmask influxdb
  sudo systemctl enable influxdb
  sudo systemctl start influxdb{% endhighlight %}

  Eseguo InfluxDB e creo il database che utilizzerò per salvare i dati:
  {% highlight md %}
  influx
  CREATE DATABASE arduino
  exit{% endhighlight %}

  Opzionale: nel caso in cui vogliate fare dei test, vi consiglio di creare un altro database e inserire dei dati di prova:
  {% highlight md %}
  influx{% endhighlight %}

  {% highlight sql %}
  CREATE DATABASE db_test_temperature

  USE db_test_temperature

  INSERT temperatura,location=soggiorno value=20
  INSERT temperatura,location=soggiorno value=10
  INSERT temperatura,location=stanza_da_letto value=34
  INSERT temperatura,location=stanza_da_letto value=23

  SELECT * FROM temperatura
  SELECT value FROM temperatura WHERE location='soggiorno'{% endhighlight %}

  {% highlight md %}
  exit{% endhighlight %}

  <h3>Grafana</h3>
  Grafana è il software che ci permetterà di visualizzare i dati salvati nel DB. Per installarlo:
  {% highlight terminal %}
  wget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -
  echo "deb https://packages.grafana.com/oss/deb stable main" | sudo tee -a /etc/apt/sources.list.d/grafana.list

  sudo apt-get update
  sudo apt-get install -y grafana{% endhighlight %}

  Opzionale: se si vuole cambiare il refresh minimo (di default 1 secondo):
  {% highlight terminal %}
  sudo nano /etc/conf/grafana.ini
  min_refresh_interval = 100ms (senza il punto e virgola){% endhighlight %}
  <p>CTRL+X, Y, invio</p>

  <p>Abilito il server all'avvio e lo eseguo:</p>
  {% highlight terminal %}
  sudo systemctl enable grafana-server
  sudo systemctl start grafana-server{% endhighlight %}

  A questo punto, collegandosi all'indirizzo IP del server Raspberry alla porta 3000, si entrerà in Grafana e si dovrà cambiare la password di default:
  {% highlight terminal %}
  http://raspberryip:3000
  Default username admin, default password admin.
  Cambiare password al primo accesso
  NEW PASS visualizzadati{% endhighlight %}

  <h3>Mosquitto MQTT</h3>
  Mosquitto è il server che raccoglierà i dati inviati da Arduino. E' in ascolto sulla porta 1883. Per approfondimenti usa <a href="https://lorenzocasaburo.it/raspberry-pi/installazione-e-configurazione-broker-mqtt-mosquitto/" target="_blank">questo link</a>

  {% highlight terminal %}
  sudo apt-get install mosquitto mosquitto-clients

  sudo systemctl enable mosquitto
  sudo systemctl start mosquitto{% endhighlight %}

  Abilitiamo Mosquitto a ricevere i dati in maniera anonima:
  {% highlight terminal %}
  sudo systemctl stop mosquitto

  sudo nano /etc/mosquitto/conf.d/access.conf
  listener 1883
  allow_anonymous true{% endhighlight %}
  <p>CTRL+X, Y, invio</p>

  {% highlight terminal %}
  sudo systemctl start mosquitto{% endhighlight %}

  Opzionale: vi lascio qui degli esempio per vedere se il vostro server funziona. Lanciare questi comandi in due finestre separate:
  {% highlight terminal %}
  mosquitto_sub -t sensors/temp
  mosquitto_pub -t sensors/temp -m 'temperature celsius=20'{% endhighlight %}

  Opzionale: vi lascio anche uno script bash che genera dei dati random e li invia al server MQTT:
  {% highlight terminal %}
  nano mqtt_pub.sh{% endhighlight %}
  {% highlight bash %}
  #!/bin/bash
  while true
  do
    rand=$(( $(RANDOM % 50 + 1 ))
    mosquitto_pub -t sensors/temp -m 'temperature celsius='${rand}''
    sleep 0.1
  done{% endhighlight %}
  <p>CTRL+X, Y, invio</p>

  {% highlight terminal %}
  chmod +x mqtt_pub.sh
  ./mqtt_pub.sh{% endhighlight %}

  <h3>Telegraf</h3>
  Telegraf è un plugin per InfluxDB per scrivere i dati ricevuti dal server MQTT sul database.
  {% highlight terminal %}
  sudo apt-get update
  sudo apt-get install telegraf{% endhighlight %}

  E' necessario creare un file di configurazione ad hoc per il nostro database. In questo file è fondamentale impostare correttamente i topics, cioè i dati che riceviamo da Arduino.
  {% highlight terminal %}
  sudo mv /etc/telegraf/telegraf.conf /etc/telegraf/telegraf.conf.backup
  sudo nano /etc/telegraf/telegraf.conf{% endhighlight %}

  {% highlight conf %}
  # Global Agent Configuration
  [agent]
    hostname = ""
    omit_hostname = false
    flush_interval = "100s"
    flush_jitter = "0s"
    interval = "100s"
    round_interval = true
    metric_batch_size = 1000
    metric_buffer_limit = 10000
    collection_jitter = "0s"
    precision = "0s"

  # Output Plugin InfluxDB
  [[outputs.influxdb]]
    database = "arduino"
    urls = [ "http://127.0.0.1:8086" ]
    skip_database_creation = true

  [[outputs.file]]
    files = ["stdout", "/tmp/metrics.out"]

  # Read metrics from MQTT topic(s)
  [[inputs.mqtt_consumer]]
    ## Broker URLs for the MQTT server or cluster.  To connect to multiple
    ## clusters or standalone servers, use a separate plugin instance.
    ##   example: servers = ["tcp://localhost:1883"]
    ##            servers = ["ssl://localhost:1883"]
    ##            servers = ["ws://localhost:1883"]
    servers = ["tcp://127.0.0.1:1883"]

    ## Topics that will be subscribed to.
    topics = [
      "flex",
      "accel",
      "gyro"
    ]

    ## The message topic will be stored in a tag specified by this value.  If set
    ## to the empty string no topic tag will be created.
    # topic_tag = "topic"

    ## QoS policy for messages
    ##   0 = at most once
    ##   1 = at least once
    ##   2 = exactly once
    ##
    ## When using a QoS of 1 or 2, you should enable persistent_session to allow
    ## resuming unacknowledged messages.
    # qos = 0

    ## Connection timeout for initial connection in seconds
    # connection_timeout = "30s"

    ## Maximum messages to read from the broker that have not been written by an
    ## output.  For best throughput set based on the number of metrics within
    ## each message and the size of the output's metric_batch_size.
    ##
    ## For example, if each message from the queue contains 10 metrics and the
    ## output metric_batch_size is 1000, setting this to 100 will ensure that a
    ## full batch is collected and the write is triggered immediately without
    ## waiting until the next flush_interval.
    # max_undelivered_messages = 1000

    ## Persistent session disables clearing of the client session on connection.
    ## In order for this option to work you must also set client_id to identify
    ## the client.  To receive messages that arrived while the client is offline,
    ## also set the qos option to 1 or 2 and don't forget to also set the QoS when
    ## publishing.
    # persistent_session = false

    ## If unset, a random client ID will be generated.
    # client_id = ""

    ## Username and password to connect MQTT server.
    # username = "telegraf"
    # password = "metricsmetricsmetricsmetrics"

    ## Optional TLS Config
    # tls_ca = "/etc/telegraf/ca.pem"
    # tls_cert = "/etc/telegraf/cert.pem"
    # tls_key = "/etc/telegraf/key.pem"
    ## Use TLS but skip chain & host verification
    # insecure_skip_verify = false

    ## Data format to consume.
    ## Each data format has its own unique set of configuration options, read
    ## more about them here:
    ## https://github.com/influxdata/telegraf/blob/master/docs/DATA_FORMATS_INPUT.md
    data_format = "influx"

    ## Enable extracting tag values from MQTT topics
    ## _ denotes an ignored entry in the topic path
    # [[inputs.mqtt_consumer.topic_parsing]]
    #   topic = ""
    #   measurement = ""
    #   tags = ""
    #   fields = ""
    ## Value supported is int, float, unit
    #   [[inputs.mqtt_consumer.topic.types]]
    #      key = type{% endhighlight %}

  Infine, abilitare telegraf all'avvio del sistema e avviarlo:
  {% highlight terminal %}
  sudo systemctl enable telegraf
  sudo systemctl start telegraf{% endhighlight %}

  A questo punto vi basta configurare Grafana per visualizzare i dati salvati nel DB.
</div>