## Informieren

### User Stories

| US-№ | Verbindlichkeit | Art          | Beschreibung                                                       |
| ---- | --------------- | ------------ | ------------------------------------------------------------------|
| 0    | Muss            | Funktional   | Als User muss ich in der Lage sein, die Webseite bedienen können. |
| 1    | Muss            | Funktional   | Als User muss ich in der Lage sein, eine zufällige Zahl zu generieren. |
| 2    | Muss            | Funktional   | Als User muss ich eine Zahl eingeben können. |
| 3    | Muss            | Funktional   | Als User muss ich das Ergebnis einsehen können. |
| 4    | Muss            | Funktional   | Als User muss ich Tipps zur aktuellen Zufallszahl einsehen können. |
| 5    | Muss            | Funktional   | Als User muss ich in der Lage sein, das Spiel neuzustarten. |
| 6    | Kann            | Qualitativ   | Als User kann ich eine ansprechende und benutzerfreundliche Webseite erleben. |




### 1.3 Testfälle

| Testfall-Nummer | Ausgangslage                                                                  | Eingabe                                  | Erwartete Ausgabe                                                     |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| 0.1             | Der User befindet sich auf der URL-Leiste und möchte die Webseite öffnen.                      | URL eingeben und Enter drücken.    | Die Webseite wird geladen und der Besucher befindet sich auf der Startseite mit einem leeren Spiel.    |
| 1.1             | Der User befindet sich auf der Startseite und möchte eine zufällige Zahl generieren.                    | Auf dem Button "Start" klicken. | Es wird nach einer zufällige Zahl gefragt. |
| 2.1             | Der User wird nach einer Zahl gefragt und möchte eine Zahl eingeben.                     | Eine Zahl im Textbox eingeben.                      | Die Zahl wird im Textbox gespeichert.     |
| 2.2             | Der User hat eine Zahl eingegeben und möchte sie überprüfen.                               | Auf dem Button "Überprüfen" klicken.                                           | Ein Dialog wird angezeigt.                                           |
| 3.1             | Der User hat eine falsche Zahl eingegeben und möchte sie überprüfen.                               | Auf dem Button "Überprüfen" klicken.                                          | Textbox wird aktualisiert mit der Meldung "Deine erratene Zahl ist falsch! Versuche erneut"                                           |
| 3.2             | Der User hat eine korrekte Zahl eingegeben und möchte sie überprüfen.                               | Auf dem Button "Überprüfen" klicken.                                          | Das Spiel wird mit der Meldung "Sie haben gewonnen!" beendet.                                         |
| 4.1             | Der User hat eine tiefere Zahl erratet.               | Auf dem Button "Überprüfen" klicken.     | Es wird ein Tipp angezeigt, ob die korrekte Zahl höher ist als die erratene Zahl.     |
| 4.2             | Der User hat eine höhere Zahl erratet.               | Auf dem Button "Überprüfen" klicken.     | Es wird ein Tipp angezeigt, ob die korrekte Zahl tiefer ist als die erratene Zahl.     |
| 5.1             | Der User befindet sich im Spiel und möchte dies neustarten. | Auf dem Button "Neustarten" klicken.         | Das Spiel von der Startseite wird neugestartet mit der Meldung von der eigentliche Zahl.         |
| 6.1             | Der User navigiert die Webseite. | Nutzung der Webseite.         | Der User versteht die Funktionsweise der Webseite.         |
