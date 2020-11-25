# Engelsbriefe

Repo für das [Interface der Engels Ausstellung](https://engels.arrenberg.studio/)

## Wichtig 🔥

- Wolf Vorschlag visualisieren (Briefe und Personen zusammenführen)
- Einlesungen fangen unterschiedlich an => Herr Lukas Fragen

## Table of Contents

- [Requirements](#requirements)
- [React Commands](#react-commands)
- [Git Commands](https://github.com/j0hannr/engels-briefe/blob/master/Git-Commands.md)
- [Briefe](#briefe)
- [Additional Testing](https://github.com/j0hannr/engels-briefe/blob/master/Further-ReadMe.md)
- [Markdown Styles](https://github.com/j0hannr/engels-briefe/blob/master/Further-ReadMe.md)
- [Pages](https://github.com/j0hannr/engels-briefe/blob/master/Further-ReadMe.md)
- [Tools](https://github.com/j0hannr/engels-briefe/blob/master/Further-ReadMe.md)
- [Contact](#contact)

## Requirements

```bash
Nodejs # nodejs needs to be installed seperately
npm # will be installed in the Git setup process
```

## React Commands

```bash
# Start localhost dev server
npm run dev
# Start localhost server
npm run build
npm run start
# on Windows
npm run start_windows
```

## Libraries

[React Icons](https://www.npmjs.com/package/react-icons)<br>
[React Icons (Feather)](https://feathericons.com/?query=back)<br>
[Wavesurfer](https://wavesurfer-js.org/doc/class/src/wavesurfer.js~WaveSurfer.html#instance-method-playPause)

## React Snippets

### Timeout
```js
setTimeout(
    function() {
        this.setState({ position: 1 });
    }
    .bind(this),
    3000
);
```
### [Scroll](https://blog.sethcorker.com/scroll-animation-with-framer-motion)
```js
scrollYProgress.onChange(x => {
    setFfLayer(x > 0.4 ? -1 : 0)
  })
```

## Notes

#### Downgraded Framer Motion
```bash
npm install framer-motion@2.9.3
```

#### Surface Studio

##### Pixel Ration
`width` 4500 (2250 for testing)
`height` 3000 (1500 for testing)


## Briefe

| Nummer _ID_ | Author                       | Datum         | Ort        | Vorhanden          | Exportiert | Fertig | Audio              | Kommentar                                     |
| ----------- | ---------------------------- | ------------- | ---------- | ------------------ | ---------- | ------ | ------------------ | --------------------------------------------- |
| 001         | Louise Engels, geb. Noot     | 1791-01-05    | Hagen      | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |                                               |
| 004         | Friedrich Christian Hoffmann | 1791-05-12    | Düsseldorf | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 021         | Johann Caspar Engels         | 1791-09-09    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 022         | Louise Engels, geb. Noot     | 1792-09-10    | Ruhrort    | :white_check_mark: | :white_check_mark: |        | :white_check_mark: | 22 ist gleich 26 im digitalisat, fehlerhaftes Datum (1991) |
| 029         | Louise Engels, geb. Noot     | 1792-10-25    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |  |
| 068         | Johann Caspar Engels         | 1813-07-04    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 071         | Johann Caspar Engels         | 1813-11-12    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 075         | Johann Caspar Engels         | 1814-02-03    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 130         | Friedrich Engels sen.        | 1816-09-21    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 169         | Friedrich Engels sen.        | 1818-07-03/04 | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: | Themenmarkierung 009 Doppelt vorhanden
| 235a        | Friedrich Engels sen.        | 1820-12-01    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: | Schlechte Scan Qualität!                      |
| 255         | Friedrich Engels sen.        | 1822-07-09    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 265         | Friedrich Engels sen.        | 1823-05-31    | Barmen     | :white_check_mark: | :white_check_mark: |        | :white_check_mark: |
| 284         | Gerhard Bernhard van Haar    | 1826-04-20    | Hamm       | :white_check_mark: |  |        | :white_check_mark: | Fehlerhaftes Datum in XML Dokument, teilweise 1925 angegeben
| 294         | Friedrich Engels sen.        | 1827-08-16    | Paris      | :white_check_mark: |  |        | :white_check_mark: |
| 306         | Friedrich Engels sen.        | 1838-07-26    | London     | :white_check_mark: |  |        | :white_check_mark: |
| 307         | Friedrich Engels sen.        | 1838-08-11    | Bremen     | :white_check_mark: |  |        | :white_check_mark: | Fehlerhafte Benennung?                        |
| 341         | Friedrich Engels sen.        | 1858-09-10    | Manchester | :white_check_mark: |  |        | :white_check_mark: | Schlechte Scan Qualität!                      |

## Motion Framer Examples 

[Draggable + Toggle](https://codesandbox.io/s/framer-motion-bottom-sheet-fixed-m2vls)<br>
[Made](https://p1qjw.csb.app/)<br>
[scroll applictaion](https://stackoverflow.com/questions/63172498/combine-dragging-and-animating-drag-position-on-click-animate-x-set)<br>
[Sharedlayout w/ nextjs](https://github.com/mikkmartin/nextjs-page-transitions-tutorial) [video](https://www.youtube.com/watch?v=3E9wInQeH7U)<br>
[Bouncing Ball](https://blog.sethcorker.com/framer-motion-bouncing-ball-animation)<br>
[Tap to expand](https://blog.sethcorker.com/react-animation-tap-to-expand)<br>

## Feedback Uni (Editionswissenschaften)

* Digitalisate sind mit Bleistift beschriftet
* Digitalisate nicht im gleichen Format vorhanden (scaliert) und nicht immer mit Referenzlineal
* Audio Datei fangen Unterschiedlich an
* Inhaltliche Fehler in der XML Datei
* XML nicht entwicklerfreundlich aufgebaut

## Developer

hallo@arrenberg.studio
<br>
<br>
<a href="https://arrenberg.studio">
<img src="https://resources.arrenberg.studio/logo/black.png" alt="studio arrenberg" height="45">
</a>
<br>
