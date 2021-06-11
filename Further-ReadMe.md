
# Further Read Me

## Additional Testing

* Matomo https://www.npmjs.com/package/@datapunt/matomo-tracker-react
* LogRocket
* Service Workers

## Markdown Styles

*Hello* `World` **nicely** <br>
:warning:   :white_check_mark:  :x: <br>
[Git Emojis](https://gist.github.com/parmentf/035de27d6ed1dce0b36a) <br>
[Another Source](https://gitmoji.carloscuesta.me)

## Pages

Name | Dir | Kommentar 
--- | --- | --- 
Index | / | landing page link to `briefe`
briefe | / | main_menu
themen | / | main_menu
personen | / | main_menu
[brief] | /brief | sub_menu + brief ansichten
[person] | /person | sub_menu
[thema] | /thema | sub_menu

## Tools

#### Code review
https://deepscan.io/dashboard <br>
https://www.codefactor.io/ <br>
https://codecov.io
#### Image optimization 
https://imgbot.net/app/
#### Html to JSX
https://magic.reactjs.net/htmltojsx.htm <br>
*remove all tags including `html` and `body`*



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
### Get Element height
```js
const YourComponent = () => {
  const inputRef = useRef(null);
  useEffect(() => {
     const height = inputRef.current.offsetHeight;
     console.log('Input height', height);
  }, [inputRef]);

  return <>
    <input style={{height:200}} ref={inputRef} type="text" defaultValue="testing" />
  </>
}
```


## Notes 

#### Downgraded Framer Motion
```bash
npm install framer-motion@2.9.3
```

#### Run on another Port locally
```bash
npm run dev -- -p 3001
```

#### Surface Studio

##### Pixel Ration
`width` 4500 (2250  for testing)
`height` 3000 (1500 for testing)


## Motion Framer Examples 

[Draggable + Toggle](https://codesandbox.io/s/framer-motion-bottom-sheet-fixed-m2vls)<br>
[Made](https://p1qjw.csb.app/)<br>
[scroll applictaion](https://stackoverflow.com/questions/63172498/combine-dragging-and-animating-drag-position-on-click-animate-x-set)<br>
[Sharedlayout w/ nextjs](https://github.com/mikkmartin/nextjs-page-transitions-tutorial) [video](https://www.youtube.com/watch?v=3E9wInQeH7U)<br>
[Bouncing Ball](https://blog.sethcorker.com/framer-motion-bouncing-ball-animation)<br>
[Tap to expand](https://blog.sethcorker.com/react-animation-tap-to-expand)<br>

## React Examples

[Inactivity Timeout](https://medium.com/tinyso/how-to-detect-inactive-user-to-auto-logout-by-using-idle-timeout-in-javascript-react-angular-and-b6279663acf2)

## Feedback Uni (Editionswissenschaften)

* Digitalisate sind mit Bleistift beschriftet
* Digitalisate nicht im gleichen Format vorhanden (scaliert) und nicht immer mit Referenzlineal
* Audio Datei fangen Unterschiedlich an
* Inhaltliche Fehler in der XML Datei
* XML nicht entwicklerfreundlich aufgebaut