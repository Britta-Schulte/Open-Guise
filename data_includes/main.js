PennController.ResetPrefix(null); // Initiates PennController
PennController.AddHost("https://amor.cms.hu-berlin.de/~idlsfbnd/openguise/");

Sequence("Info","Consent","Code","Probedurchlauf1","Probedurchlauf2","Item","Zwischenstopp","ItemQ","Meta1","Meta2", "Final")

//New Consent 
//Mit Boxen zum Anklicken und Dateien zum herunterladen; angelehnt an C04

newTrial("Consent",
 newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
   
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("Consent", "consent.html")
        .center()
        .settings.css("font-size", "large")
        .print()
,
    newButton("Weiter","Weiter")
    .print()
    .log()
    .wait(
        getHtml("Consent").test.complete()
            .failure(getHtml("Consent").warn())    
    )
)
,
//Info
newTrial("Info",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newTrial("Info",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
   
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("willkommen", "information.html")
        .center()
        .settings.css("font-size", "large")
        .print()
    ,
  
    newButton("Weiter_Alter","Ich bin über 18 Jahre.")
        .center()
        .print()
    ,
    newText("Leerzeile"," <br></p>")
        .print()
    ,
    getButton("Weiter_Alter")
        .wait()
)
    ,   
//CODE-EINGABE
newTrial("Code",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
    ,
    newHtml("Code", "code.html")
        .center()
        .settings.css("font-size", "large")
        .print()
    ,
    newCanvas("Code-Textfeld", 1, 10)
        .center()
        .print()
,
    newTextInput("Texteingabe-Code")
        .center()
        .print()
,
    newText("Leerzeile"," <br></p>")
        .center()
        .print()
,
    getTextInput("Texteingabe-Code")
            .settings.log("final")
,

//PROBEDURCHLAUF
newTrial("Probedurchlauf1",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
 ,
    newText("Probe-&Uuml;berschrift","<b>&Uuml;BUNG</b></p>")
        .center()
        .print()
,
    newText("Probe-1","<p>Bitte klicken Sie als erstes auf die <b>Play</b>, um die Aufnahme abzuspielen. <br>Diese k&ouml;nnen Sie nicht wiederholen. H&ouml;ren Sie also bitte genau hin.</p>")
        .center()
        .print()
,
    newAudio("Probe", "Audio1.mp3")
        .center()
        .print()
,
    getAudio("Probe")
        .wait()
,
    newText("Probe-2","Ist die Aufnahme vorbei, wählen Sie bitte per Mausklick je einen Punkt auf den unten befindlichen Skalen aus.<br></p><b>Dabei gibt es weder richtige noch falsche Antworten, wir interessieren uns für Ihre subjektive Einschätzung. Bitte gehen Sie also rein intuitiv vor!</b></p>")
        .center()
        .print()
,
    newText("Probe-7","<br><b>Wie bewerten Sie die gehörte Person?</b></p>")
        .center()
        .print()
,
    newScale("Probeskala1", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("intelligent"))
        .settings.after(newText("nicht intelligent"))
        .center()
,
    newScale("Probeskala2", 9)       
    .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("vertraut"))
        .settings.after(newText("fremd"))
        .center()
,
    newScale("Probeskala3", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("freundlich"))
        .settings.after(newText("unfreundlich"))
        .center()
,
    newScale("Probeskala4", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("humorvoll"))
        .settings.after(newText("humorlos"))
        .center()
,
    newScale("Probeskala5", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("selbstbewusst"))
        .settings.after(newText("nicht selbstbewusst"))
        .center()
,    
    newScale("Probeskala6", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("beruflich erfolgreich"))
        .settings.after(newText("beruflich erfolglos"))
        .center()
,
    newCanvas(400,300)
        .add(60, 0, getScale("Probeskala1"))
        .add(76, 50, getScale("Probeskala2"))
        .add(61, 100,getScale("Probeskala3"))
        .add(62, 150, getScale("Probeskala4"))
        .add(43, 200, getScale("Probeskala5"))
        .add(0, 250, getScale("Probeskala6"))
        .center()
        .print()
,
    newText("Probe-8","</p>Fallen Ihnen spontan weitere Eigenschaften zu dieser Person ein?")
        .center()
        .print()
,
    newCanvas("Probetextfeld5", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe5")
        .center()
        .print()
,        
    newText("Probe-9", "<br>Sehr gut! Sobald Sie die Textfelder ausgefüllt und Werte auf den Skalen ausgew&auml;hlt haben, erscheint ein Button am Ende der Seite, durch den Sie zur n&auml;chsten Aufnahme gelangen.</p>")
        .center()
        .print()
,       
    newButton("Weiter","Weiter")
        .center()
        .print()
        .wait(getScale("Probeskala1").test.selected(),getScale("Probeskala2").test.selected(),getScale("Probeskala3").test.selected(),getScale("Probeskala4").test.selected(),getScale("Probeskala5").test.selected(),getScale("Probeskala6").test.selected())
  )
,
    //PROBEDURCHLAUF
newTrial("Probedurchlauf2",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
 ,
    newText("Probe-&Uuml;berschrift","<b>&Uuml;BUNG</b></p>")
        .center()
        .print()
,
    newText("Probe-1","<p>Im zweiten Durchgang hören Sie die gleichen Aufnahmen erneut, jedoch mit veränderter Aufgabenstellung. Bitte klicken Sie als erstes wieder <b>Play</b>, um die Aufnahme abzuspielen. <br>Diese k&ouml;nnen Sie nicht wiederholen. H&ouml;ren Sie also bitte genau hin.</p>")
        .center()
        .print()
,
    newAudio("Probe", "Audio1.mp3")
        .center()
        .print()
,
    getAudio("Probe")
        .wait()
,
    newText("Probe-2","Ist die Aufnahme vorbei, erscheinen einige Fragen in Bezug auf die Person, die sie gerade gehört haben. <br>Die Fragen beantworten Sie bitte in den dafür vorgesehenen Textfeldern und bestätigen die Eingabe jeweils mit <b>Enter</b>.<br></p><b>Dabei gibt es weder richtige noch falsche Antworten, wir interessieren uns für Ihre subjektive Einschätzung. Bitte gehen Sie also rein intuitiv vor!</b></p>")
        .center()
        .print()
,
    newText("Probe-3","Wie alt ist die gehörte Person?")
        .center()
        .print()
,
    newCanvas("Probetextfeld1", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe1")
        .center()
        .print()
,
    newText("Probe-4","</p>Wo lebt diese Person?")
        .center()
        .print()
,
    newCanvas("Probetextfeld2", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe2")
        .center()
        .print()
,
    newText("Probe-5","</p>Woher kommt diese Person?")
        .center()
        .print()
,
    newCanvas("Probetextfeld3", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe3")
        .center()
        .print()
,
    newText("Probe-6","</p>Wo würde man wohl einer solchen Person begegnen? <br>(z.B. bei einem Schulbasar, beim Karneval, bei einem Vortrag der Wissenschaftlichen Gesellschaft, auf einer Lodge usw.)")
        .center()
        .print()
,
    newCanvas("Probetextfeld4", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe4")
        .center()
        .print()
,
    newText("Probe-8","</p>Fallen Ihnen spontan weitere Eigenschaften zu dieser Person ein?")
        .center()
        .print()
,
    newCanvas("Probetextfeld5", 1, 10)
        .center()
        .print()
,
    newTextInput("Probetexteingabe5")
        .center()
        .print()
,        
    newText("Probe-9", "<br>Sehr gut! Sobald Sie die Textfelder ausgefüllt haben, gelangen Sie per Klick auf den Button am Seitenende zur n&auml;chsten Aufnahme.</p>")
        .center()
        .print()
,       
    newButton("Probe-beenden","&Uuml;bung beenden und Experiment beginnen")
        .center()
        .print()
        .wait(getTextInput("Probetexteingabe1").test.text(/[a-z]+/),getTextInput("Probetexteingabe2").test.text(/[a-z]+/),getTextInput("Probetexteingabe3").test.text(/[a-z]+/),getTextInput("Probetexteingabe4").test.text(/[a-z]+/))
  )
    ,

audios = []     // audios will reference the audios in a randomized order for simple playback
,
audios2 = []    // audios2 will ultimately be a copy of audios
// Create dummy trials to browse the table and feed then shuffle audios
,
Template("OG-audios.csv", row =>
    newTrial( audios.push(row.Audio),
    fisherYates(audios) )
    )

// Now create the Item trials reading the audio references from audios
,
audio = ""
,Template( row =>
    newTrial( "Item",
        audio = audios.shift(), // Extract next entry from audios
        audios2.push(audio)     // Place it in audios2
        ,
        newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
        ,
        newText("Überschrift","<p><b>NEUE AUFNAHME - PHASE 1<b><p>")
            .center()
            .print()
        ,
        newText("Anleitung","Bitte klicken Sie auf Play, um die Aufnahme abzuspielen. Diese können Sie nicht wiederholen, hören Sie also bitte genau hin.<p>")
            .print()
        ,
        newAudio( audio )
            .center()
            .print()
            .once()
        ,
        newText("Bewertung","<p>Wie bewerten Sie die gehörte Person? Wählen Sie entsprechend einen Punkt auf der Skala aus. </p><b>Dabei gibt es weder richtige noch falsche Antworten, wir interessieren uns für Ihre subjektive Einschätzung. Bitte gehen Sie also rein intuitiv vor!</b></p><p>")
            .print()
        ,
    newScale("Skala1", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("intelligent"))
        .settings.after(newText("nicht intelligent"))
        .center()
,
    newScale("Skala2", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("vertraut"))
        .settings.after(newText("fremd"))
        .center()
,
    newScale("Skala3", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("freundlich"))
        .settings.after(newText("unfreundlich"))
        .center()
,
    newScale("Skala4", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("humorvoll"))
        .settings.after(newText("humorlos"))
        .center()
,
    newScale("Skala5", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("selbstbewusst"))
        .settings.after(newText("nicht selbstbewusst"))
        .center()
,    
    newScale("Skala6", 9)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("beruflich erfolgreich"))
        .settings.after(newText("beruflich erfolglos"))
        .center()
,
    newCanvas(600,300)
        .add(60, 0, getScale("Skala1").settings.log("final"))
        .add(76, 50, getScale("Skala2").settings.log("final"))
        .add(61, 100,getScale("Skala3").settings.log("final"))
        .add(62, 150, getScale("Skala4").settings.log("final"))
        .add(43, 200, getScale("Skala5").settings.log("final"))
        .add(0, 250, getScale("Skala6").settings.log("final"))
        .center()
        .print()
    ,
        newButton( "Weiter" )
            .center()
            .print()
            .wait(getScale("Skala1").test.selected(),getScale("Skala2").test.selected(),getScale("Skala3").test.selected(),getScale("Skala4").test.selected(),getScale("Skala5").test.selected(),getScale("Skala6").test.selected())
    )
    .log("audio", audio)    // Log which audio was played
)
,
newTrial("Zwischenstopp",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
        ,
    newText("Anleitung","Vielen Dank! Nun beginnt die zweite Phase des Experiments. Sie werden in den nächsten Schritten die gleichen Aufnahmen erneut hören und dazu Fragen per Textfeld beantworten.<p>")
        .center()
        .print()
,
    newButton("Weiter")
    .center()
        .print()
        .wait()
        )
,

// Now create the ItemQ trials reading the audio references from audios2
audio = ""
,Template( row =>
    newTrial( "ItemQ",
        audio = audios2.shift() // Extract next entry from audios2
        ,
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
        ,
        newText("Überschrift","<p><b>NEUE AUFNAHME - PHASE 2<b><p>")
            .center()
            .print()
        ,
        newText("Anleitung","Bitte klicken Sie auf Play, um die Aufnahme abzuspielen. Diese können Sie nicht wiederholen, hören Sie also bitte genau hin.<p>")
            .print()
        ,
        newAudio( audio )
            .center()
            .print() // Play back the audio
        ,
    newText("Anweisung","Bitte beantworten Sie die Fragen in den dafür vorgesehenen Textfeldern und bestätigen die Eingabe jeweils mit <b>Enter</b>.</p><b>Dabei gibt es weder richtige noch falsche Antworten, wir interessieren uns für Ihre subjektive Einschätzung. Bitte gehen Sie also rein intuitiv vor!</b></p>")
        .center()
        .print()
,
    newText("Frage1","Wie alt ist die gehörte Person?")
        .center()
        .print()
,
    newCanvas("textfeld1", 1, 10)
        .center()
        .print()
,
    newTextInput("texteingabe1")
        .center()
        .print()
        .log()
,
    newText("Frage2","</p>Wo lebt diese Person?")
        .center()
        .print()
,
    newCanvas("textfeld2", 1, 10)
        .center()
        .print()
,
    newTextInput("texteingabe2")
        .center()
        .print()
        .log()
,
    newText("Frage3","</p>Woher kommt diese Person?")
        .center()
        .print()
,
    newCanvas("textfeld3", 1, 10)
        .center()
        .print()
,
    newTextInput("texteingabe3")
        .center()
        .print()
        .log()
,
    newText("frage4","</p>Wo würde man wohl einer solchen Person begegnen? <br>(z.B. bei einem Schulbasar, beim Karneval, bei einem Vortrag der Wissenschaftlichen Gesellschaft, auf einer Lodge usw.)")
        .center()
        .print()
,
    newCanvas("textfeld4", 1, 10)
        .center()
        .print()
,
    newTextInput("texteingabe4")
        .center()
        .print()
        .log()
,
    getTextInput("texteingabe1").settings.log("final"),
    getTextInput("texteingabe2").settings.log("final"),
    getTextInput("texteingabe3").settings.log("final"),
    getTextInput("texteingabe4").settings.log("final")
,
    newButton( "Weiter" )
        .center()
        .print()
        .wait(getTextInput("texteingabe1").test.text(/[a-z]+/),getTextInput("texteingabe2").test.text(/[a-z]+/),getTextInput("texteingabe3").test.text(/[a-z]+/),getTextInput("texteingabe4").test.text(/[a-z]+/))
    )
    .log("audio", audio)
)
    ,
    //Metadaten
newTrial("Meta",
    newImage("HU","HU Logo.png")
        .size(289,65)
    ,
    newImage("UNam","UNam Logo.png")
        .size(272,85)
    ,
    newImage("SFB","SFB Logo.png")
        .size(280,86)
    ,
    newCanvas("Logosnebeneinander",1138,100)
        .add(100,0, getImage("HU"))
        .add(413,0, getImage("UNam"))
        .add(750,0, getImage("SFB"))
        .center()
        .print()
 ,
    newText("Meta-1", "<p>Das war die letzte Aufnahme.<br></p>Nun ben&ouml;tigen wir blo&szlig; noch ein paar letzte Informationen. <b> Falls Sie bereits an einem der anderen Experimente teilgenommen haben, beantworten Sie bitte nur die ersten zwei Fragen, betätigen danach den Button und überspringen die Fragen bis zum Ende der Seite.</b> Bitte beantworten Sie ansonsten auch die anderen Fragen in den Textfeldern und best&auml;tigen wie gehabt mit <b>Enter</b>. Falls Sie mehr Platz ben&ouml;tigen sollten, k&ouml;nnen Sie das Textfeld an seiner rechten unteren Ecke anklicken, gedr&uuml;ckt halten und gr&ouml;ßer ziehen.")
        .center()
        .print()
,
    newText("Atmo","<br><b>Wie fanden Sie die Atmosphäre bei der Befragung?</b></p>")
        .center()
        .print()
,
    newScale("Skala1", 5)
        .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("formell"))
        .settings.after(newText("informell"))
        .center()
,
    newScale("Skala2", 5)
    .settings.labelsPosition("bottom").color("white")
        .settings.before(newText("entspannt"))
        .settings.after(newText("angespannt"))
        .center()
,
    newCanvas(400,80)
        .add(89, 0, getScale("Skala1").settings.log("final"))
        .add(76, 50, getScale("Skala2").settings.log("final"))
        .center()
        .print()
,
    newText("Kommentare","<br><b>Ist Ihnen noch etwas aufgefallen oder haben Sie Kommentare?</b></p>")
        .center()
        .print()
,
    newTextInput("Textfeld")
        .center()
        .print()
,
    newButton("bereitsteilgenommen","Ich habe bereits an einem anderen Experiment aus der Mail teilgenommen und dafür den selben 10-stelligen Code verwendet wie für dieses.")
        .center()
        .print()
        .wait()
        .log()
,
    newText("Geburtsjahr","<p>In welchem Jahr sind Sie geboren?")
        .center()
        .print()
,
    newCanvas("Geburtsjahr", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsjahr")
        .center()
        .print()
,
    getTextInput("Geburtsjahr")
        .settings.log("final")
,
    newText("Geschlecht","<p>Geschlecht:")
        .center()
        .print()
,
    newCanvas("Geschlecht", 1, 10)
        .center()
        .print()
,
    newTextInput("Geschlecht")
        .center()
        .print()
,
    getTextInput("Geschlecht")
        .settings.log("final")
,
    newText("Geburtsort", "<p>Geburtsort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Geburtsort", 1, 10)
        .center()
        .print()
,
    newTextInput("Geburtsort")
        .center()
        .print()
,
    getTextInput("Geburtsort")
        .settings.log("final")
,
    newText("Aufgewachsen","<p>Wo sind Sie aufgewachsen?")
        .center()
        .print()
,
    newCanvas("Aufgewachsen", 1, 10)
        .center()
        .print()
,
    newTextInput("Aufgewachsen")
        .center()
        .print()
,
    getTextInput("Aufgewachsen")
        .settings.log("final")
,    
    newText("Wohnort","<p>Wohnort (Stadt, Region):")
        .center()
        .print()
,
    newCanvas("Wohnort", 1, 10)
        .center()
        .print()
,
    newTextInput("Wohnort")
        .center()
        .print()
,
    getTextInput("Wohnort")
        .settings.log("final")
,
    newText("SprachenMutter","<p>Welche Sprachen spricht/sprach Ihre Mutter? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenMutter", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenMutter")
        .center()
        .print()
,
    getTextInput("SprachenMutter")
        .settings.log("final")
,
    newText("SprachenVater","<p>Welche Sprachen spricht/sprach Ihr Vater? Bitte sortieren und mit der am besten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenVater", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenVater")
        .center()
        .print()
,
    getTextInput("SprachenVater")
        .settings.log("final")
,
    newText("SprachenSelbst","<p>Welche Sprachen sprechen Sie selbst im Alltag? Mit wem und in welchen Situationen? Bitte sortieren und mit der am häufigsten gesprochenen Sprache beginnen.")
        .center()
        .print()
,
    newCanvas("SprachenSelbst", 1, 10)
        .center()
        .print()
,
    newTextInput("SprachenSelbst")
        .center()
        .print()
,
    getTextInput("SprachenSelbst")
        .settings.log("final")
        .wait()
,
    newText("Danke","<p>Vielen Dank f&uuml;r Ihre Teilnahme! Dürfen wir Sie in Zukunft erneut kontaktieren? Wenn ja, geben Sie bitte ihre Telefonnummer oder E-Mailadresse in das Textfeld ein. Wenn nein, lassen Sie das Textfeld bitte einfach frei. <br><p>Die Angabe der Kontaktdaten ist freiwillig. Um Anonymität zu gewährleisten, wird diese Angabe getrennt vom ausgefüllten Fragebogen archiviert.")
        .center()
        .print()
,
    newTextInput("Kontaktinfo")
        .center()
        .print()
,
    getTextInput("Kontaktinfo")
        .settings.log("final")
,
    newText("Leerzeile","<br>")
        .print()
,
    newButton("Ende","Ergebnisse abschicken und beenden")
        .center()
        .print()
        .wait()
        )
));
