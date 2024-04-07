## Administratives
Version 0.0.5

Autorin: Andrea Niklaus

Datum: 06.04.2024

## Inhaltsverzeichnis

1. [Problemstellung](#problemstellung)
2. [Anforderungen](#anforderungen)
3. [Art und Vorgehensweise](#art-und-vorgehensweise)
4. [Testkonzept](#testkonzept)
5. [Testfälle](#testfälle)
6. [Testprotokoll](#testprotokoll)
7. [Resultat](#resultat)
8. [Fazit und Reflexion](#fazit-und-reflexion)

## Problemstellung
Wie kann ein Prüfungskalender entwickelt werden, der von Schüler/innen bearbeitet werden kann um Prüfungsstress zu minimieren und die Prüfungsvorbereitung zu optimieren? 

## Anforderungen
Nummer | Typ | Anforderung | Umsetzung im Prototyp
--- | --- | --- | ---
1 | Funktional | Eintragen von Prüfungsterminen | Ja
2 | Funktional | Setzten von Lernzielen | Ja
3 | Funktional | Setzen von Fächern | Ja
4 | Funktional | Benutzer kann sich in einer Klasse einschreiben | Ja
5 | Funktional | Erhaltung von Erinnerungen für bevorstehende Prüfungen | Nein
6 | Funktional | Verwalten von Prüfungsterminen, einschliesslich Bearbeitung und Löschen | Ja
7 | Randbedingung | Hinzufügen einer Reaktion | Nein
8 | Randbedingung | Hinzufügen von einem Häckchen bei Erfüllung der Prüfungsvorbereitung | Nein
9 | Qualität | Benutzerfreundliche Oberfläche für einfache Navigation | Ja
10 | Qualität | Sicherstellung der Datensicherheit für persönliche Schülerinformationen | Nein
11 | Randbedingung | Plattformkompatibilität auf verschiedenen Geräten und Browsern gewährleisten | Nein
12 | Randbedingung | Benutzer in einer Klasse können den gegenseitigen Prüfungsplaner anschauen | Ja
13 | Randbedingung | Benutzer können sich registrieren/einloggen | Nein

Ich habe hier dabei die Anforderungen vom Modul 241 genommen und geändert, da ich im letzten Modul nicht sehr wusste, wie ich diese Anforderungen schreiben sollte. Deshalb sind es nicht dieselben. 

## Art und Vorgehensweise
### Art
Die gewählte Art des Prototyping für den Prüfungskalender ist das Funktionsprototyping.

Begründung:

- Ein Funktionsprototyp ermöglicht es, entscheidende funktionale Eigenschaften des späteren Produkts zu demonstrieren. In diesem Fall sind dies die Funktionen des Prüfungskalenders, wie das Eintragen von Prüfungsterminen, das Setzen von allfähigen Notizen und möglicherweise die Anmeldung der Benutzer (?).
- Da der Fokus auf der Demonstration der Funktionalität liegt, ist diese Art des Prototyping besonders geeignet, um die Effektivität und Nützlichkeit des Kalenders zu messen.

### Vorgehensweise
Die beiden gewählten Vorgehensweisen für das Prototyping des Prüfungskalenders sind das Vertikale Prototyping (Durchstich) und das Horizontale Prototyping (von der Präsentation PR_245_1762_Prototyping.pptx).

Begründung für die Wahl:

- Vertikales Prototyping (Durchstich): Dieses Vorgehen ermöglicht es, einen funktionalen Ausschnitt des Systems durch alle Ebenen zu implementieren. Für den Prüfungskalender bedeutet dies, einen ausgewählten Teil des Kalenders von der Benutzeroberfläche bis zur Datenbankimplementierung umzusetzen. Dies ist besonders nützlich, um bereits abgeschlossene Teile zu implementieren, während noch Funktionalitäts- oder Implementierungsanforderungen noch nicht in Frage kommen.
- Horizontales Prototyping: Hierbei wird eine ausgewählte Ebene des Gesamtsystems fertiggestellt. Dies könnte bedeuten, eine funktionsfähige Ebene des Kalenders zu entwickeln, die vorgestellt werden kann oder an der sich andere Ebenen orientieren können. Dieses Vorgehen ermöglicht es, frühzeitig eine Vorstellung von der Funktionsweise des Kalenders zu erhalten und die Benutzerfreundlichkeit zu testen. 

Auswahl der Vorgehensweise:

Ich habe das Vertikale Prototyping (Durchstich) gewählt, da es mir ermöglicht, einen wichtigen und funktionalen Bereich des Kalenders zu implementieren, also wie z.B. das Eintragen der Prüfungen, ohne mir zu viel Gedanken an die anderen Anforderungen zu machen.

## Testkonzept
Testprotokoll
1. Projekt: Prototyp_M245
2. Datum: 2024-04-06
3. Tester: [Andrea Niklaus]
4. Getestetes Produkt: Prototyp_M245
5. Version: 1.0
6. Testkonzept:
Der Prototyp wird in einer lokalen Entwicklungsumgebung auf einem Windows-PC mit folgenden Spezifikationen getestet:
- Betriebssystem: Windows 10
- Prozessor: Intel Core i5-8250U @ 1.60GHz
- RAM: 8GB
- Festplatte: 256GB SSD
- Browser: Google Chrome, Mozilla Firefox, Microsoft Edge

## Testfälle
| Nummer | Anforderung | Eingabe | Erwartete Ausgabe |
| --- | --- | --- | --- |
1 | Eintragen von Prüfungsterminen | Der Benutzer navigiert zur Seite "Prüfungstermine hinzufügen" und gibt die erforderlichen Informationen (Datum, Uhrzeit, Fach, etc.) ein. | Der Prüfungstermin wird im System gespeichert und kann auf der Seite "Prüfungstermine" eingesehen werden.
2 | Setzen von Lernzielen | Der Benutzer navigiert zur Seite "Lernziele hinzufügen" und gibt die erforderlichen Informationen (Zielbeschreibung, Deadline, etc.) ein. | Das Lernziel wird im System gespeichert und kann auf der Seite "Lernziele" eingesehen werden. 
3 | Auswahl eines Fachs ermöglichen | Der Benutzer schreibt im Feld das Fach ein | Das Fach soll gespeichert sein
4 | Benutzer kann sich in einer Klasse einschreiben | Der Benutzer navigiert zur Seite "Klassen" und wählt die gewünschte Klasse aus. Er klickt auf den Button "Einschreiben". | Der Benutzer wird in der Klasse eingeschrieben und kann auf die Kursinhalte zugreifen.
5 | Erhaltung von Erinnerungen für bevorstehende Prüfungen | Der Benutzer aktiviert die Erinnerungsfunktion in seinen Einstellungen. Eine Prüfung nähert sich. | Das System sendet dem Benutzer eine Erinnerung per E-Mail oder Push-Benachrichtigung. 
6 | Verwalten von Prüfungsterminen, einschliesslich Bearbeitung und Löschen | Der Benutzer navigiert zur Seite "Prüfungstermine" und wählt einen Termin aus. Er kann den Termin bearbeiten (Datum, Uhrzeit, Fach, etc.) oder löschen. | Die Änderungen werden im System gespeichert oder der Termin wird gelöscht.

### Randbedingungen
| Nummer | Anforderung | Eingabe | Erwartete Ausgabe |
| --- | --- | --- | --- |
7 | Hinzufügen einer Reaktion | Der Benutzer versucht, eine Reaktion auf eine Frage oder Aufgabe hinzuzufügen, die nicht vorhanden ist. | Das System zeigt eine Fehlermeldung an und verhindert, dass der Benutzer eine Reaktion hinzufügt.
8 | Hinzufügen von einem Häckchen bei Erfüllung der Prüfungsvorbereitung | Der Benutzer versucht, ein Häkchen bei einer Prüfungsvorbereitungsaufgabe zu setzen, die noch nicht abgeschlossen ist. | Das System verhindert, dass der Benutzer ein Häkchen setzt, und zeigt eine Meldung an, dass die Aufgabe noch nicht abgeschlossen ist.
9 | Benutzerfreundliche Oberfläche für einfache Navigation | Der Tester navigiert durch die verschiedenen Funktionen des Prototyps und bewertet die Benutzerfreundlichkeit der Oberfläche. | Die Oberfläche ist intuitiv und einfach zu bedienen. Der Benutzer kann die gewünschten Funktionen schnell und mühelos finden.
10 | Sicherstellung der Datensicherheit für persönliche Schülerinformationen | Der Tester überprüft die Sicherheitsmassnahmen des Prototyps zum Schutz persönlicher Schülerinformationen. | Die Schülerdaten sind nicht sicher gespeichert, da es noch ein Prototyp ist
11 | Plattformkompatibilität auf verschiedenen Geräten und Browsern gewährleisten | Der Tester testet den Prototypen auf verschiedenen Geräten (z. B. Desktop, Tablet, Smartphone) und Browsern (z. B. Chrome, Firefox, Safari). | Der Prototyp funktioniert wie erwartet auf allen getesteten Geräten und Browsern.
12 | Benutzer in einer Klasse können den gegenseitigen Prüfungsplaner anschauen | Ein Benutzer versucht, den Prüfungsplaner eines anderen Benutzers in einer Klasse anzusehen, für die er nicht eingeschrieben ist. | Das System verweigert dem Benutzer den Zugriff auf den Prüfungsplaner und zeigt eine Meldung an, dass er nicht berechtigt ist.
13 | Benutzer können sich registrieren/einloggen | - | Der Prototyp hat diese Funktion nicht

## Testprotokoll
| Nummer | Anforderungsnummer | Resulat | Tester |
| --- | --- | --- | ---

## Resultat
Die Umsetzung des Prototyps erfolgte mithilfe von React.js und entsprechenden Komponenten für die Funktionalitäten des Prüfungskalenders. Den Code ist hier auf Github abgelegt.

## Fazit und Reflexion
Der Prototyp wurde erfolgreich umgesetzt und erfüllt die grundlegenden Anforderungen für den Prüfungskalender. Die gewählte Vorgehensweise des vertikalen Prototypings ermöglichte es, einen funktionalen Ausschnitt des Systems zu implementieren und dabei die wichtigsten Funktionen zu demonstrieren. Der Einsatz von React.js ermöglichte eine effiziente Entwicklung und eine benutzerfreundliche Benutzeroberfläche. In Zukunft könnten weitere Funktionen hinzugefügt und das System auf Basis des Feedbacks der Nutzer weiterentwickelt werden. 
Die Lösung lässt sich mit Anpassung umsetzen.
