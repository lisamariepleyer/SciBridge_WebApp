const content = [
    {
        topic: "Zwei-Faktoren-Authentifizierung (2FA)",
        category: "IT & Technik",
        paragraph: "Die Zwei-Faktor-Authentifizierung (2FA) erhöht die Sicherheit, indem sie zwei Formen der Verifizierung erfordert, bevor der Zugang gewährt wird. Im Vergleich zur Ein-Faktor-Authentifizierung, bei der in der Regel nur ein Kennwort erforderlich ist, wird bei der 2FA eine zusätzliche Ebene, wie z. B. ein SMS-Code oder ein biometrischer Scan des Gesichts oder eines Fingers, verwendet, wodurch der unbefugte Zugriff erschwert wird.",
        sources: [
            { source: "Zwei-Faktor-Authentifizierung", link: "https://www.onlinesicherheit.gv.at/Services/Technologie-Schwerpunkte/Sichere-Passwoerter/Zwei-Faktor-Authentifizierung.html" },
            { source: "Multifaktor-Authentifizierung (MFA)", link: "https://www.computerweekly.com/de/definition/Multifaktor-Authentifizierung-MFA" }
        ],
        question: "Was macht 2FA sicherer als die Ein-Faktor-Authentifizierung?",
        answers: [ "Stärkere Passwörter", "Zusätzliche Verifizierungsebene", "Verschlüsselte Datenspeicherung", "Automatische Abmeldefunktionen" ],
        correctAnswer: 1,
        minigame: {
            type: "image",
            text: "Statt sich nur mit einem Passwort anzumelden, erfordert 2FA einen zweiten \"Faktor\", um deine Identität zu bestätigen. Dieser zweite Faktor ist oft etwas, das nur du hast oder weißt. Zum Beispiel könnte es ein Code sein, der an dein Handy gesendet wird, oder ein Fingerabdruck. Wenn du dich also bei einem Konto anmeldest, gibst du zuerst dein Passwort ein (das ist der erste Faktor - etwas, das du weißt) und dann den Code von deinem Handy oder nutzt deinen Fingerabdruck (der zweite Faktor - etwas, das du hast).",
            image: "twofactorauth.jpg"
        }
    },
    {
        topic: "Polymere",
        category: "Physik & Chemie",
        paragraph: "Polymere wie Kunststoffe sind lange Molekülketten, die durch einen Prozess namens Polymerisation entstehen. Sie können natürlich oder synthetisch sein und werden in einer breiten Palette von Anwendungen eingesetzt. Die Umweltauswirkungen synthetischer Polymere, insbesondere biologisch nicht abbaubarer Kunststoffe, geben jedoch zunehmend Anlass zur Besorgnis, da sie sich in Ökosystemen aufgrund ihrer langsamen Abbaugeschwindigkeit lange halten und anreichern.",
        sources: [
            { source: "This is how long everyday plastic items last in the ocean", link: "https://www.weforum.org/agenda/2018/11/chart-of-the-day-this-is-how-long-everyday-plastic-items-last-in-the-ocean/" },
            { source: "Polymere und Kunststoffe", link: "https://studyflix.de/chemie/polymere-und-kunststoffe-5730" },
            { source: "Ursprung und Auswirkungen synthetischer Polymere in der Umwelt", link: "https://analyticalscience.wiley.com/content/article-do/ursprung-und-auswirkungen-synthetischer-polymere-der-umwelt" }
        ],
        question: "Was ist keine Eigenschaft von biologisch abbaubaren Polymeren?",
        answers: [ "Vollständiger Abbau in der Umwelt", "Langfristige Persistenz in Ökosystemen", "Verringerung der Umweltverschmutzung", "Synthetische und natürliche Herstellung" ],
        correctAnswer: 1,
        minigame: {
            type: "guesstheanswer",
            question: "Wie viele Jahre dauert es, bis sich eine Plastikflasche in der Umwelt zersetzt hat?",
            answer: 450,
            answermessage: " Jahre. Mehr Infos zu unterschiedlichen Plastiktypen findest du in den weiterführenden Informationen."
        }
    },
    {
        topic: "Mechanismus der Impfung",
        category: "Medizin",
        paragraph: "Impfstoffe wirken, indem sie eine harmlose Form des Krankheitserregers - oder Elemente davon, wie Proteine oder genetisches Material - in den Körper einbringen. Diese Exposition veranlasst das Immunsystem, spezielle Proteine, die so genannten Antikörper, zu produzieren. Sobald der Körper das Antigen erkennt, werden Immunzellen wie T- und B-Lymphozyten aktiviert, welche die Erinnerung des Körpers an den Erreger verstärken. Das bedeutet, dass das Immunsystem schneller und effektiver reagieren kann, wenn der Körper später dem eigentlichen Erreger ausgesetzt wird.",
        sources: [
            { source: "Wie funktioniert Impfen?", link: "https://www.stiftung-gesundheitswissen.de/gesundes-leben/koerper-wissen/wie-funktioniert-impfen" },
            { source: "Wie wirkt eine Impfung", link: "https://reisemed.at/wie-wirkt-eine-impfung/" },
            { source: "Immunity in the spotlight: how vaccinations and the immune system protect us", link: "https://blogs.stjude.org/progress/immunity-how-vaccinations-and-the-immune-system-protect-us.html" }
        ],
        question: "Wozu tragen T- und B-Lymphozyten im Impfprozess in erster Linie bei?",
        answers: [ "Pathogenneutralisierung", "Gedächtnis des Immunsystems", "Antibiotikaproduktion", "Antigensynthese" ],
        correctAnswer: 1,
        minigame: {
            type: "image",
            text: "Wenn der Körper mit Virus A in Form einer Impfung in Kontakt kommt, ist die sekundäre Immunreaktion schneller und stärker als wenn das Immunsystem einen Erreger (z.B. Virus B) das erste Mal sieht. Das Immunsystem erinnert sich sozusagen an den Erreger.",
            image: "Impfungsmechanismus.jpg"
        }
    },
    {
        topic: "Nachhaltige Energie",
        category: "Physik & Chemie",
        paragraph: "Nachhaltige Energiequellen wie Sonnen-, Wind- und Wasserkraft wandeln Naturphänomene in Strom um, ohne dabei Treibhausgase auszustoßen. Photovoltaikanlagen fangen das Sonnenlicht ein und wandeln es in Elektrizität um, Windturbinen nutzen die Windenergie und Staudämme nutzen die kinetische Energie des fließenden Wassers zur Stromerzeugung.",
        sources: [
            { source: "Energie in Österreich", link: "https://www.bmk.gv.at/dam/jcr:da4e9dfd-f51c-44b8-894c-9b049a8336cb/BMK_Energie_in_OE2023_barrierefrei.pdf" },
            { source: "Erneuerbare Energie", link: "https://www.umweltbundesamt.at/energie/erneuerbare-energie" },
            { source: "Erneuerbare Energien: Wichtiges und Wissenswertes.", link: "https://www.entega.de/blog/erneuerbare-energien-deutschland/" }
        ],
        question: "Was ist ein gemeinsames Merkmal der nachhaltigen Energiequellen?",
        answers: [ "Energiespeicherung", "Netzverträglichkeit", "Bessere Klimabilanz", "Geografische Beschränkungen" ],
        correctAnswer: 2,
        minigame: {
            type: "guesstheanswer",
            question: "Wie viel Prozent der Treibhausgas-Emissionen in Österreich wurden im Jahre 2021 durch die Erzeugung von Energie und Industrie erzeugt?",
            answer: 35,
            answermessage: "%. Erneuerbare Energien erzeugen im Vergleich zu fossilen Brennstoffen wesentlich weniger Treibhausgase. Diese entstehen hauptsächlich während der Herstellung, des Transports, der Installation und der Wartung der Anlagen, nicht jedoch während des eigentlichen Betriebs, bei dem in der Regel keine direkten Treibhausgase freigesetzt werden."
        }
    },
    {
        topic: "Sichere Passwörter",
        category: "IT & Technik",
        paragraph: "Sichere Passwörter sind lang, komplex und enthalten eine Mischung aus Buchstaben, Zahlen und Symbolen. Je länger und komplexer das Passwort, desto schwieriger ist es, sich das Passwort zu merken. Häufig vorkommende Phrasen und Wörter können relativ leicht erraten werden. Die Verwendung von Passwortmanagern und die Zwei-Faktor-Authentifizierung erhöhen die Sicherheit Ihrer Konten.",
        sources: [
            { source: "Kennwortsicherheit: Der richtige Umgang mit Passwörtern", link: "https://www.onlinesicherheit.gv.at/Services/News/Kennwortsicherheit--Der-richtige-Umgang-mit-Passwörtern-.html" },
            { source: "30 most commonly used passwords of 2023", link: "https://www.beckershospitalreview.com/cybersecurity/30-most-common-passwords-of-2023.html" },
            { source: "Wie sicher ist mein Passwort?", link: "https://checkdeinpasswort.de" },
            { source: "So erstellen Sie ein sicheres Passwort", link: "https://www.swrfernsehen.de/kaffee-oder-tee/ratgeber/so-erstellen-sie-ein-sicheres-passwort-102.html" }
        ],
        question: "Was sollte bei der Erstellung sicherer Passwörter vermieden werden?",
        answers: [ "Länge", "Kompliziertheit", "Häufige Wörter oder Phrasen", "Automatische Passwortgeneratoren" ],
        correctAnswer: 2,
        minigame: {
            type: "guess",
            question: "Errate eines der 10 am häufigsten verwendeten Passwörter.",
            possibleanswers: [ "123456", "password", "123456789", "12345", "12345678", "123123", "qwerty", "qwertz", "1234567", "111111", "abc123", "1234567890", "1234", "password1", "iloveyou" ],
            answermessage: "Die häufigsten Passwörter sind: "
        }
    },
    {
        topic: "Klimawandel und Treibhauseffekt",
        category: "Klimawandel",
        paragraph: "Der Klimawandel wird in erster Linie durch den anthropogene Treibhauseffekt verursacht, bei dem Gase wie CO2, CH4 und N2O, in der Atmosphäre die von der Erdoberfläche abgestrahlte Wärme zurückhalten. Bestimmte, von Menschen gemachte Tätigkeiten, wie die Verbrennung fossiler Brennstoffe, verstärken diesen Effekt, indem sie die Konzentration von Treibhausgasen erhöhen, was zu einem globalen Temperaturanstieg und zu extremen Wetterbedingungen führt.",
        sources: [
            { source: "Treibhauseffekt einfach erklärt", link: "https://studyflix.de/erdkunde/treibhauseffekt-einfach-erklart-3810" },
            { source: "Emissionsquellen", link: "https://www.umweltbundesamt.de/themen/klima-energie/treibhausgas-emissionen/emissionsquellen" }
        ],
        question: "Was ist der Hauptfaktor für den anthropogenen Treibhauseffekt?",
        answers: [ "Abbau der Ozonschicht", "Klimawandel", "Sonneneinstrahlung", "Atmosphärischer Wärmerückhalt" ],
        correctAnswer: 3,
        minigame: {
            type: "image",
            text: "Der Treibhauseffekt ist ein natürlicher Vorgang, der dafür sorgt, dass die Erde bewohnbar ist, indem er einen Teil der von der Sonne kommenden Wärme in der Atmosphäre durch Gase festhält. Dies hält die durchschnittliche Temperatur auf der Erde stabil und macht sie bewohnabr. Menschliches Handeln, wie die Verbrennung fossiler Brennstoffe und Entwaldung, führt zu einer Veränderung der Zusammensetzung der Gase, was den Treibhauseffekt verstärkt und zu globaler Erwärmung und Klimaveränderungen führt.",
            image: "Treibhauseffekt.jpg"
        }
    },
    {
        topic: "Antibiotikaresistenz",
        category: "Medizin",
        paragraph: "Wenn Bakterien Antibiotika ausgesetzt werden, kann die Mehrheit der Bakterien abgetötet werden, aber einige können aufgrund natürlicher genetischer Variationen überleben. Diese Überlebenden vermehren sich und führen zu einer Population von antibiotikaresistenten Bakterien. Dies ist für die öffentliche Gesundheit besorgniserregend, da Standardantibiotikabehandlungen weniger wirksam werden und stärkere Medikamente oder komplexere Eingriffe erforderlich sind.",
        sources: [
            { source: "Grundwissen Antibiotika­resistenz", link: "https://www.rki.de/DE/Content/Infekt/Antibiotikaresistenz/Grundwissen/Grundwissen_inhalt.html" },
            { source: "Wie entstehen Antibiotikaresistenzen?", link: "https://www.bag.admin.ch/bag/de/home/krankheiten/infektionskrankheiten-bekaempfen/antibiotikaresistenzen/wie-entstehen-antibiotikaresistenzen---.html" },
            { source: "Antibiotika-resistente und mit dem Gesundheitswesen assoziierte bakterielle Infektionen", link: "https://www.dzif.de/de/antibiotika-resistente-und-mit-dem-gesundheitswesen-assoziierte-bakterielle-infektionen" }
        ],
        question: "Was führt zum Entstehen von antibiotikaresistenten Bakterienpopulationen?",
        answers: [ "Übermäßiger Einsatz von Antibiotika", "Natürliche genetische Variationen", "Einführung neuer Antibiotika", "Durch Antibiotika ausgelöste bakterielle Mutationen" ],
        correctAnswer: 0,
        minigame: {
            type: "hint",
            hint: "Überlege: Was ist der Grund dafür,dass antibiotikaresistente Bakterien häufig in Krankenhäusern gefunden werden? Hat dies eventuell mit der vermehrten Gabe von Antibiotika zu tun?"
        }
    },
    {
        topic: "Solaranlagen",
        category: "Physik & Chemie",
        paragraph: "Solarkollektoren fangen das Sonnenlicht ein und wandeln es in Wärme um. Sie werden in der Regel zur Warmwasserbereitung eingesetzt. Der Kollektor absorbiert die Sonnenstrahlung, wandelt sie in Wärme um und überträgt diese Wärme auf Wasser oder Luft. Dieser Prozess bringt mehrere Vorteile, zum Beispiel die Minimierung der Abhängigkeit von fossilen Brennstoffen und der Treibhausgasemissionen.",
        sources: [
            { source: "Warmwasser und thermische Solaranlagen", link: "https://www.energie-noe.at/warmwasser-und-thermische-solaranlagen" },
            { source: "Solare Prozesswärme", link: "https://www.solarwaerme.at/wp-content/uploads/2021/04/Solare-Prozesswaerme-fuer-Industrie-und-Gewerbe-Broschuere.pdf" },
            { source: "Nutzung von Solarthermie in Industrie udn Gewerbe", link: "https://www.etapart.com/de/wissen/hallenheizung-technik/nutzung-von-solarthermie-in-industrie-und-gewerbe" }
        ],
        question: "Was ist kein typischer Verwendungszweck für die von Solarkollektoren erzeugte Wärme?",
        answers: [ "Erwärmung von Wasser", "Antrieb von E-Fahrzeugen", "Raumheizung", "Kochen" ],
        correctAnswer: 1,
        minigame: {
            type: "image",
            text: "Solarkollektoren fangen Sonnenlicht ein und wandeln sie in Wärme um. Diese Wärme wird dann genutzt, um Wasser für den Haushalt zu erwärmen oder zur Raumheizung. Photovoltaikanlagen arbeiten etwas anders: Sie bestehen aus Solarzellen, die Sonnenlicht in elektrischen Strom umwandeln. Dieser Strom kann direkt genutzt, in Batterien gespeichert oder ins Stromnetz eingespeist werden.",
            image: "Solaranlagen.jpg"
        }
    },
    {
        topic: "Künstliche Intelligenzen und die Zukunft",
        category: "IT & Technik",
        paragraph: "Künstliche Intelligenz könnte unsere Zukunft entscheidend prägen, mit potenziellen Anwendungen in den Bereichen Gesundheit, Verkehr, Bildung und mehr. KI könnte zu Innovationen wie personalisierter Medizin, autonomen Fahrzeugen und fortschrittlichen Bildungsinstrumenten führen. Dies wirft jedoch auch Bedenken hinsichtlich des Datenschutzes, der Sicherheit, der Verdrängung von Arbeitsplätzen und ethischer Überlegungen bei der Entscheidungsfindung durch Künstliche Intelligenzen auf.",
        sources: [
            { source: "The Rise of Chess AI: From Deep Blue to AlphaZero", link: "https://blog.amphy.com/deep-blue-alphazero/" },
            { source: "Künstliche Intelligenz", link: "https://mindsquare.de/knowhow/kuenstliche-intelligenz/" },
            { source: "ChatGPT: Die 14 wichtigsten Fragen + Antworten", link: "https://www.moin.ai/chatbot-lexikon/chatgpt-chatbot" },
            { source: "Check Point zeigt die Schwächen von ChatGPT bei der Malware-Analyse auf", link: "https://www.infopoint-security.de/check-point-zeigt-die-schwaechen-von-chatgpt-bei-der-malware-analyse-auf/a35887/" }
        ],
        question: "Was ist keine allgemein diskutierte Sorge im Hinblick auf die Zukunft der Künstlichen Intelligenz?",
        answers: [ "Künstliche Intelligenz als Schachweltmeister", "Eingriff in die Privatsphäre", "Verdrängung von Arbeitsplätzen", "Ethische Entscheidungsfindung" ],
        correctAnswer: 0,
        minigame: {
            type: "guesstheanswer",
            question: "In welchem Jahr hat IBMs Supercomputer Deep Blue den Schachweltmeister Garry Kasparov geschlagen?",
            answer: 1997,
            answermessage: " schlug Deep Blue Garry Kasparov. Die Fähigkeit einer Künstlichen Intelligenz, Weltmeister im Schach zu werden, ist also bereits längst Realität. DeepMind veröffentlichte 2017 schließlich AlphaZero, der alle bisherigen künstlichen Intelligenzen im Schach erfolgreich besiegte."
        }
    },
    {
        topic: "Klimawandel und Temperaturanstieg",
        category: "Klimawandel",
        paragraph: "Der auf den Klimawandel zurückzuführende Anstieg der Durchschnittstemperatur auf der Erde ist aus mehreren Gründen problematisch. Er führt zu mehr extremen Wetterereignissen, einem Anstieg des Meeresspiegels und einer Störung der Ökosysteme. Die Hauptursache für diesen Anstieg ist der verstärkte Treibhauseffekt, der durch menschliche Aktivitäten wie die Verbrennung fossiler Brennstoffe und die Abholzung von Wäldern verursacht wird, die die Konzentration von Treibhausgasen erhöhen und letztendlich zu einem anthropogenen Treibhauseffekt und Erwärmung des Klimas führen.",
        sources: [
            { source: "Folgen der Klimakrise: 1,5 Grad versus 2 Grad", link: "https://www.wwf.at/artikel/folgen-der-klimakrise-15-grad-versus-2-grad/" },
            { source: "Der Klimawandel und seine Folgen", link: "https://www.oesterreich.gv.at/themen/bauen_wohnen_und_umwelt/klimaschutz/Seite.1000200.html" },
            { source: "Die gefährliche Wandlung der Ozeane", link: "https://www.spiegel.de/wissenschaft/natur/ipcc-klimawandel-und-ozeane-ph-wert-im-meer-steigt-durch-co2-a-956022.html" },
            { source: "Folgen des Klimawandels", link: "https://climate.ec.europa.eu/climate-change/consequences-climate-change_de" }
        ],
        question: "Was ist keine direkte Folge des globalen Temperaturanstiegs?",
        answers: [ "Schmelzen der Polkappen", "Abnehmender Säuregehalt der Ozeane", "Häufigere und schwerere Wetterereignisse", "Verlust von Lebensraum für viele Arten" ],
        correctAnswer: 1,
        minigame: {
            type: "image",
            text: "Der Großteil des zusätzlichen Kohlendioxids (CO2) in der Atmosphäre stammt aus menschlichen Aktivitäten, wie der Verbrennung fossiler Brennstoffe (Kohle, Öl, Gas) und der Entwaldung. Wenn CO2 in die Ozeane gelangt, reagiert es mit dem Wasser und bildet Kohlensäure. Dies führt zu einem zunehmenden Säuregehalt der Ozeane und wird auch Ozeanversauerung genannt.",
            image: "Treibhauseffekt.jpg"
        }
    }
];

export default content;