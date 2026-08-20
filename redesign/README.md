# Nadelwerk-Website bearbeiten

Diese Website benötigt kein CMS und keinen Build-Prozess. Die regelmäßig benötigten Inhalte sind auf zwei Dateien verteilt:

- `content.js`: Texte, Kontaktdaten, Öffnungszeiten, Artists und Einstellungen
- `galleries.json`: Studiobilder, Tattooarbeiten, Videos und deren Reihenfolge

HTML, CSS und `js/site.js` müssen für normale Inhaltsänderungen nicht bearbeitet werden.

## Wichtige Regel

Texte und Dateipfade immer innerhalb der vorhandenen Anführungszeichen ändern. Kommas, Doppelpunkte, Klammern und Anführungszeichen nicht versehentlich entfernen.

Nach jeder Änderung die Website lokal prüfen, bevor sie veröffentlicht wird.

## Texte der Website ändern

Die Datei `content.js` enthält unter anderem:

```js
hero: {
  kicker: "Tattoo Studio · Konstanz · Seit 1999",
  title: "Willkommen im<br>Nadelwerk.",
  text: "Individuelle Tattoos in persönlicher Atmosphäre.",
  image: "images/about-gallery/9.jpg"
}
```

- `kicker`: kleine Zeile oberhalb der Hauptüberschrift
- `title`: große Hauptüberschrift; `<br>` erzeugt einen Zeilenumbruch
- `text`: Beschreibung im Startbereich
- `image`: Pfad zum großen Hintergrundbild

Weitere Textbereiche funktionieren nach demselben Prinzip.

## Kontaktdaten und Öffnungszeiten

In `content.js` befindet sich der Bereich `contact`:

```js
contact: {
  email: "frank@nadelwerk.de",
  address: "Rheingasse 14",
  city: "78462 Konstanz",
  map: "https://www.google.com/maps/...",
  instagram: "https://www.instagram.com/...",
  hours: [
    "Di–Fr · 11–15 Uhr",
    "Sa–Mo · geschlossen",
    "Weitere Termine nach Vereinbarung"
  ]
}
```

Jede Zeile in `hours` wird als eigene Zeile auf der Website dargestellt.

## Bilder hinzufügen

### Studiobilder

Studiobilder gehören in:

```text
images/about-gallery/
```

### Tattooarbeiten und Videos

Tattooarbeiten und Videos gehören in:

```text
images/photo-gallery/
```

### Artist-Fotos

Fotos von Artists und Gasttätowierern gehören in:

```text
images/artists/
```

Empfehlungen für Fotos:

- JPG oder WebP
- mindestens 1200 Pixel breit
- möglichst kleiner als 500 KB
- Artist-Fotos vorzugsweise im Hochformat 4:5
- einfache Dateinamen ohne Leerzeichen oder Umlaute, zum Beispiel `anna-muster.jpg`

Nur das Ablegen einer Datei im Ordner reicht nicht aus. Die Datei muss anschließend in `galleries.json` oder `content.js` eingetragen werden.

## Galerie bearbeiten

Die Datei `galleries.json` hat zwei Bereiche:

- `venue`: Studio und Räumlichkeiten
- `works`: Tattoos und Arbeitsvideos

Die Reihenfolge der Einträge in der JSON-Datei ist gleichzeitig die Reihenfolge auf der Website, solange die Zufallssortierung ausgeschaltet ist.

### Bild eintragen

```json
{
  "src": "images/photo-gallery/mein-tattoo.jpg",
  "alt": "Farbiges traditionelles Tigertattoo auf dem Oberarm"
}
```

- `src`: genauer Pfad zur Bilddatei
- `alt`: kurze, konkrete Beschreibung des sichtbaren Motivs

Zwischen zwei Einträgen muss ein Komma stehen. Hinter dem letzten Eintrag einer Liste darf kein zusätzliches Komma stehen.

## Was ist ein Alt-Text?

Ein Alt-Text beschreibt den wesentlichen Inhalt eines Bildes. Er wird von Screenreadern vorgelesen und erscheint, wenn ein Bild nicht geladen werden kann. Gute Alt-Texte verbessern Barrierefreiheit und helfen Suchmaschinen, den Bildinhalt zu verstehen.

Gut:

```text
Schwarz-graues Frankenstein-Tattoo auf dem Unterarm
```

Weniger hilfreich:

```text
Bild 1
```

Regeln für gute Alt-Texte:

- Motiv und wichtigen Kontext knapp beschreiben
- ungefähr 5 bis 15 Wörter verwenden
- nicht mit „Bild von“ oder „Foto von“ beginnen
- keine Ansammlung von SEO-Schlüsselwörtern schreiben
- bei Artist-Fotos den Namen und die Funktion nennen

## Video eintragen

Videos können in `venue` oder `works` stehen:

```json
{
  "type": "video",
  "src": "images/photo-gallery/mein-video.mp4",
  "previewTime": 0.1,
  "alt": "Schwarz-graues Totenkopf-Tattoo auf dem Oberarm"
}
```

- `type`: muss bei Videos `"video"` sein
- `src`: Pfad zur Videodatei
- `previewTime`: Zeitpunkt des Vorschauframes in Sekunden
- `alt`: Beschreibung des im Video gezeigten Motivs

Videos sollten als MP4 mit H.264-Komprimierung gespeichert werden. Ton wird in der Galerie nicht benötigt, weil die Vorschau stumm abgespielt wird.

## Was bedeutet `previewTime`?

`previewTime` bestimmt, welches echte Frame des Videos angezeigt wird, solange das Video nicht läuft.

Beispiele:

```json
"previewTime": 0.1
```

zeigt das Bild bei 0,1 Sekunden.

```json
"previewTime": 1.5
```

zeigt das Bild bei 1,5 Sekunden.

Wenn der Anfang eines Videos schwarz oder unscharf ist, einen späteren Wert verwenden. Fehlt `previewTime`, verwendet die Website automatisch `0.1` Sekunden.

Beim Darüberfahren mit der Maus oder beim Tastaturfokus wird das Video abgespielt. Danach springt es wieder zum eingestellten Vorschauframe zurück. Beim Anklicken öffnet es sich mit Videosteuerung.

Eine separate Posterdatei oder ein Screenshot ist nicht erforderlich.

## Galerie zufällig sortieren

In `content.js` lassen sich beide Galerien getrennt zufällig sortieren:

```js
galleryOptions: {
  randomVenue: false,
  randomWorks: false
}
```

- `randomVenue: true`: Studiobilder bei jedem Laden neu mischen
- `randomWorks: true`: Tattooarbeiten bei jedem Laden neu mischen
- `false`: Reihenfolge aus `galleries.json` verwenden

`true` und `false` werden ohne Anführungszeichen geschrieben.

## Zweiten Artist ein- oder ausschalten

Der Bereich `secondArtist` befindet sich in `content.js`:

```js
secondArtist: {
  enabled: true,
  label: "Artist",
  name: "Anna Muster",
  dates: "",
  text: "Traditionelle und florale Tätowierungen.",
  image: "images/artists/anna-muster.jpg",
  imageAlt: "Tätowiererin Anna Muster im Nadelwerk Studio",
  instagram: "https://www.instagram.com/USERNAME"
}
```

- `enabled: true`: Bereich anzeigen
- `enabled: false`: Bereich vollständig ausblenden
- `label`: kleine Überschrift oberhalb des Namens
- `name`: Name des Artists
- `dates`: optionaler Zeitraum; kann leer bleiben
- `text`: Kurzvorstellung und Tattoo-Stil
- `image`: Pfad zum Foto
- `imageAlt`: Beschreibung des Fotos
- `instagram`: vollständiger Instagram-Link; leer lassen, um den Link auszublenden

Solange kein Foto vorhanden ist, kann das Logo verwendet werden:

```js
image: "images/logo(transparent).png"
```

## Gasttätowierer ein- oder ausschalten

Der Bereich `guestArtist` funktioniert genauso:

```js
guestArtist: {
  enabled: true,
  label: "Zu Gast im Nadelwerk",
  name: "Name des Gastes",
  dates: "12.–16. Oktober 2026",
  text: "Stil, Vorstellung und verfügbare Termine.",
  image: "images/artists/gast-name.jpg",
  imageAlt: "Gasttätowierer Name im Nadelwerk Studio",
  instagram: "https://www.instagram.com/USERNAME",
  email: "frank@nadelwerk.de"
}
```

Mit `enabled: false` verschwindet der gesamte Gastbereich. `email` bestimmt die Empfängeradresse der Schaltfläche „Termin anfragen“.

## Logo und Header

- Hauptlogo: `images/logo(transparent).png`
- Header-Hintergrund: `images/banner mobile.jpg`

Dateinamen oder Pfade nur ändern, wenn die entsprechende Datei ebenfalls ersetzt wurde.

## Lokale Vorschau

Da `galleries.json` vom Browser geladen wird, darf `index.html` nicht einfach per Doppelklick geöffnet werden.

Im Projektordner einen lokalen Server starten:

```bash
python3 -m http.server 8000
```

Danach im Browser öffnen:

```text
http://localhost:8000
```

Den Server mit `Strg + C` beenden.

## Vor der Veröffentlichung prüfen

- Texte und Rechtschreibung
- E-Mail-Adresse und externe Links
- Öffnungszeiten
- Bild- und Videopfade
- Alt-Texte
- Darstellung auf Handy und Desktop
- Impressum und Datenschutzerklärung rechtlich prüfen lassen
- `galleries.json` auf fehlende oder zusätzliche Kommas prüfen

Die technischen SEO-Dateien `robots.txt`, `sitemap.xml` und `Icons/site.webmanifest` sind für `https://nadelwerk.de/` vorbereitet.
