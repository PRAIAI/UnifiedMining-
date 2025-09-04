# rApp_Bitcoin-Miner

Pilotprojekt für eine modulare Krypto-Mining-Plattform mit Bankintegration, Wallet-Verteilung und Inflationschart.
- Passwortgeschützt
- Ohne Accounts, aber erweiterbar
- 50% Rendite auf Bankkonto & Wallet
- Nach Pilotphase: 10% GmbH, 40% RFOF Blockchain


# UnifiedMining-
InterBOxSpiderWeb.NET PRVPNRFAI.py 2025 - 2029


````
---
rApp_Bitcoin-Miner/
│
├── 📁 public/
│   ├── index.html                 # Hauptseite mit Mining-UI
│   ├── .htaccess                  # Apache Passwortschutz
│   └── .htpasswd                  # Benutzer & verschlüsseltes Passwort
│
├── 📁 modules/
│   ├── bankTransfer.js            # Pilotphase: 50% auf Konto & Wallet
│   ├── postPilotDistribution.js  # Nach Pilotphase: 10% GmbH, 40% RFOF
│   └── walletUtils.js            # Wallet-Verbindung & Validierung
│
├── 📁 auth/
│   ├── passwordGate.js           # JS-basierter Passwortschutz (Fallback)
│   └── sessionManager.js         # Vorbereitung für spätere Profile
│
├── 📁 users/                      # Noch leer, aber vorbereitet für Accounts
│   └── README.md
│
├── 📁 charts/
│   ├── goldChart.js              # Goldchart (Justin)
│   └── inflationChart.js         # InterBOxSpider@Web.NET Chart (Satoria)
│
├── 📁 styles/
│   └── main.css                  # Visuelles Design
│
├── 📁 deploy/
│   ├── docker-compose.yml        # Containerisierung
│   └── vercel.json               # Vercel Deployment-Konfiguration
│
├── 📁 data/
│   └── config.json               # IBANs, Wallets, Verteilungsregeln
│
├── 📁 assets/
│   └── logo.svg                  # Branding
│
├── 📁 chat/
│   └── prompt.txt                # Chat-Einstiegstext für Userführung
│
├── app.js                        # Hauptlogik & Modulverknüpfung
└── README.md                     # Projektbeschreibung & Setup

---
````
