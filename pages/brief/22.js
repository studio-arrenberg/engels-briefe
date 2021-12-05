import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "22";
  });

  const key = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);

  const [isStellen, setStellen] = useState(false);
  function stellen(state) {
    // console.log("Stellen: " + state);
    setStellen(state);
  }

  return (
    <Layout>
      <Head>
        <title>Brief 22{date}</title>
      </Head>

      <div type="mark">
                <span type="reisen" from="#mark.002.s" to="#mark.002.e"/>
                <span type="religion" from="#mark.003.s" to="#mark.003.e"/>
            </div>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        <div>
          {/*TEI front*/}
          <div className="toc toc_body">
            <div className="toc toc_back">
              {/*TEI body*/}
              <div className="tei_body">
                <div
                  className="kuvert"
                  style={{ paddingTop: "220px", paddingBottom: "240px" }}
                  id="index.xml-body.1_div.1"
                >
                  <h2>
                    <span className="headingNumber">1. </span>
                  </h2>

                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-right">
                      <span className="address">
                        <span className="small">Herrn</span>
                        <br />
                        Herrn{" "}
                        <span className="g.rend.script.latin">
                          Caspar Engels
                        </span>
                        <br />
                        <span className="small">
                          <span className="">
                            zur eigenhändigen<br /> <span className="underline-white">Erbrechung</span> 
                            <span className="sans" style={{    marginTop: "-60px",
                                marginRight: "200px",
                                display: "block",
                                textAlign: "center",}}>
                              im 
                              <br /><span className="underline-white">Barmen</span>
                            </span>
                            </span>
                        </span>
                        <span className="g.rend.script.latin">
                          
                        </span>
                        <br />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "100px",
                    paddingLeft: "100px",
                    paddingBottom: "280px",
                  }}
                >
                  <p>
                    <span className="opener">
                      <span className="salute">
                        <a id="teaser.part.001.s">{/*anchor*/}</a>Lieb
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>es be
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>es Männchen!{" "}
                        <a id="teaser.part.001.e">{/*anchor*/}</a>
                      </span>
                    </span>
                    <a id="mark.002.s">{/*anchor*/}</a>
                    <span className="reisen">Wie fre<span className="orig">ü</span>
                        <span className="corr">u</span>e ich mich{" "}
                    <br className="lb" />{" "}
                    daß Du glücklich, ge<span className="orig">ſ</span>
                    <span className="corr">s</span>und und munter zu
                    <br className="lb" />{" "}
                    <span className="orig">Hauße</span>
                    <span className="corr">Hause</span> geko<span className="orig">m̅</span>
                    <span className="corr">mm</span>en bi
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und Dich nach der{" "}
                    <span className="orig">Reiße</span>
                    <span className="corr">Reise</span>{" "}
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o wohl befinde
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> – der gütige Gott{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e<span className="orig">ÿ</span>
                    <span className="corr">y</span>e{" "}
                    <br className="lb" />{" "}
                    von ganzem Herzen dafür{" "}
                    <span className="orig">gedanckt</span>
                    <span className="corr">gedankt</span> daß Er{" "}
                    <br className="lb" />{" "}
                    Dich begleitet und vor Unglück bewahret{" "}
                    <br className="lb" />{" "}
                    hat – Er der liebevolle Men<span className="orig">ſ</span>
                    <span className="corr">s</span>chenhüter{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e<span className="orig">ÿ</span>
                    <span className="corr">y</span>e Dir{" "}
                    <br className="lb" />{" "}
                    dann auf Deiner näch<span className="orig">ﬅ</span>
                    <span className="corr">st</span>en{" "}
                    <span className="orig">Reiße</span>
                    <span className="corr">Reise</span> hierhin auch{" "}
                    <br className="lb" />{" "}
                    wieder recht nahe und führe Dich doch ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>und{" "}
                    <br className="lb" />{" "}
                    und wohl in meine Armen.<a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                    <span style={{ display: "inline-block" }} width="2cm">
                      &nbsp;
                    </span>
                    <a id="mark.003.s">{/*anchor*/}</a>
                    <span className="religion">Ja! mein{" "}
                    <br className="lb" />{" "}
                    be<span className="orig">ﬅ</span>
                    <span className="corr">st</span>er innig{" "}
                    <span className="orig">geliebter</span>
                    <span className="corr">Geliebter</span>!{" "}
                    <a id="teaser.part.002.s">{/*anchor*/}</a>ofte w
                    <span className="overwritten">i</span>
                    <span className="add">o</span>ll
                    <span className="add" id="txt.add001">
                      en
                    </span>{" "}
                    wir uns{" "}
                    <br className="lb" />{" "}
                    der über<span className="orig">ſ</span>
                    <span className="corr">s</span>chwenglich großen Liebe und
                    Güte{" "}
                    <br className="lb" />{" "}
                    un<span className="orig">ſ</span>
                    <span className="corr">s</span>ers lieben hi<span className="orig">m̅</span>
                    <span className="corr">mm</span>li
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen Vaters{" "}
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      dir
                    </span>{" "}
                    verge<span className="orig doublehyphen oblique">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    genwärtigen, die Er uns auf <span className="orig">ſ</span>
                    <span className="corr">s</span>o mannigfal<span className="orig doublehyphen oblique">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    tige Art, und be<span className="orig">ſ</span>
                    <span className="corr">s</span>onders auch{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> wieder{" "}
                    <br className="lb" />{" "}
                    be<span className="orig">ÿ</span>
                    <span className="corr">y</span> un<span className="orig">ſ</span>
                    <span className="corr">s</span>erm{" "}
                    <span className="orig">
                      HochzeitsFe<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">
                      Hochzeitsfe<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>{" "}
                    und die übrigen{" "}
                    <br className="lb" />{" "}
                    Tagen erwie<span className="orig">ſ</span>
                    <span className="corr">s</span>en hat; und uns gegen
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eitig{" "}
                    <br className="lb" />{" "}
                    zum warmen herzlichen <span className="orig">Danck</span>
                    <span className="corr">Dank</span> dafür er<span className="orig doublehyphen oblique">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    muntern.<a id="teaser.part.002.e">{/*anchor*/}</a> O! mein
                    lieber! ganz{" "}
                    <span className="orig">oﬀenbahr</span>
                    <span className="corr">oﬀenbar</span>
                    <br className="lb" />{" "}
                    ganz hell i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> es mir daß die Hand un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ers
                    <br className="lb" />{" "}
                    </span>
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "100px",
                    paddingLeft: "70px",
                    paddingBottom: "240px",
                  }}
                ><span className="religion">
                  <p>
                    guten Gottes mit uns war, und die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e alles{" "}
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o in der be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en Ordnung gehalten hat.{" "}
                    <br className="lb" />{" "}
                    Gelobet <span className="orig">ſ</span>
                    <span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span> dann Gott der un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>er{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>{" "}
                    <br className="lb" />{" "}
                    nicht verworfen, noch <span className="orig">ſ</span>
                    <span className="corr">s</span>eine Güte von uns
                    <br className="lb" />{" "}
                    gewendet hat{" "}
                    <span className="makierung">
                    <span className="abbr"> Ps<span className="orig">:</span>
                      <span className="corr">.</span>
                    </span>
                    <span className="expan">
                      Ps.<span className="orig">alm</span>
                    </span>{" "}
                    66,{" "}
                    <span className="abbr g.rend.script.latin"> vs</span>
                    <span className="expan">
                      v<span className="orig">er</span>s
                    </span>{" "}
                    20.</span><a id="annot.001.e">{/*anchor*/}</a>
                    <a id="mark.001.e">{/*anchor*/}</a> Wann’s unsren{" "}
                    <br className="lb" />{" "}
                    lieben hi<span className="orig">m̅</span>
<span className="corr">mm</span>lischen Vater <span className="orig">gefält</span>
                    <span className="corr">gefällt</span> uns gesund und wohl{" "}
                    <br className="lb" />{" "}
                    zu erhalten, dann mein Lieber! werden uns die{" "}
                    <br className="lb" />{" "}
                    lange Winter Abenden noch manche{" "}
                    <span className="orig">erquikende</span>
                    <span className="corr">erquickende</span> Seel<span className="orig doublehyphen oblique">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />{" "}
                    <span className="orig"></span>
                    <span className="corr">
                      <br className="lb" />{" "}
                    </span>
                    erhebende{" "}
                    <span className="orig">Freüden</span>
                    <span className="corr">Freuden</span> gewähren, wann wir
                    dann so
                    <br className="lb" />{" "}
                    mit völliger Ruhe die lange Reihe von Wohlthaten{" "}
                    <br className="lb" />{" "}
                    durchgehen und uns ins{" "}
                    <span className="orig">Gedächtnüß</span>
                    <span className="corr">Gedächtniß</span> zurück
                    <span style={{ display: "inline-block" }}>&nbsp;</span>rufen
                    die{" "}
                    <br className="lb" />{" "}
                    wir durch die Güte unsers großen Gottes erfahren{" "}
                    <br className="lb" />{" "}
                    haben – O! Wie wohl wie innig wohl wird’s uns{" "}
                    <br className="lb" />{" "}
                    dann be<span className="orig">ÿ</span>
                    <span className="corr">y</span>’m neuen Antrieb zum wiederholten{" "}
                    <br className="lb" />{" "}
                    gemeinschaftlichen <span className="orig">Danck</span>
                    <span className="corr">Dank</span> werden, und wir werden{" "}
                    <br className="lb" />{" "}
                    unsere Seelen durch Erfahrung der Liebe, Güte und{" "}
                    <br className="lb" />{" "}
                    <span className="orig">Hülﬀe</span>
                    <span className="corr">Hülfe</span> Gottes, zum Glauben,{" "}
                    <span className="orig">hoﬀen</span>
                    <span className="corr">Hoﬀen</span> und Ver<span className="orig doublehyphen oblique">⹀</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    trauen{" "}
                    <span className="orig">
                      ge<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ärckt
                    </span>
                    <span className="corr">
                      ge<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ärkt
                    </span>{" "}
                    werden!
                  </p>
                  <p>
                    Von meiner Gesundheit,{" "}
                    <span className="orig">heiterkeit</span>
                    <span className="corr">Heiterkeit</span> und Ruhe kann{" "}
                    <br className="lb" />{" "}
                    ich Dir zärtlich geliebter Mann! die be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>e Nachricht{" "}
                    <br className="lb" />{" "}
                    geben – denn ich genieße Gottlob! Alle diese{" "}
                    <br className="lb" />{" "}
                    große Vorzügen – die Erfahrung der{" "}
                    <span className="orig">Hülﬀe</span>
                    <span className="corr">Hülfe</span> Gottes
                    <br className="lb" />{" "}
                  </p>
                  </span>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "100px",
                    paddingLeft: "70px",
                    paddingBottom: "80px",
                  }}
                >  
                  <p>
                <p>
                  <span className="religion">
          macht mir Muth und <span className="orig">ﬅärckt</span><span className="corr">stärkt</span> mein Vertrauen so daß<br className="lb" />{" "}
          ich <span className="underline">ruhig</span>{" "}und{" "}
          <span className="underline"><span className="orig">getroﬅ</span>{" "}
<span className="corr">getrost</span></span> in{" "}
          <a id="annot.002.s">{/*anchor*/}</a>die<a id="annot.002.e">{/*anchor*/}</a>{" "}
          {" "}Zukunft blicke und<br className="lb" />{" "}keine einzige Sorge in meinem Herzen einkehren{" "}
          <span className="orig">laßen</span><span className="corr">lassen</span><br className="lb" />{" "}
          <span className="overwritten">e</span><span className="add">E</span>s wäre{" "}
          auch <span className="orig">würcklich</span><span className="corr">würklich</span> gar kein Wohlverhalten von<br className="lb" />{" "}
          mir, und ich würde mir versündigen wann ich{" "}
          <span className="orig">jezt</span><span className="corr">jetzt</span><br className="lb" />{" "}
          noch sorgen <span className="orig">wolte</span><span className="corr">wollte</span>: be<span className="orig">ÿ</span>
<span className="corr">y</span>{" "}
 den vielen und großen Vor<span className="orig doublehyphen oblique">⹀</span><br className="g.enc.tagsdecl.hyphenation.divis" />
          theilen so mir durch Gottes Güte zu Theil werden –<br className="lb" />{" "}
          weg also mit allen <span className="orig">Bedencklichkeiten</span><span className="corr">Bedenklichkeiten</span>! weg mit allen<br className="lb" />{" "}
          Sorgen! <span className="underline">Froh</span>,{" "}
          <span className="underline">ruhig</span> und{" "}
          <span className="underline">getro<span className="orig"><span className="orig">ﬅ</span>
</span><span className="corr">st</span></span>{" "}
 i<span className="orig">ﬅ</span>
<span className="corr">st</span>{" "}
          <span className="orig">jezt</span><span className="corr">jetzt</span> mein{" "}
          <span className="underline">Wahlspruch</span><span className="orig" /><span className="corr">.</span></span>
          <a id="mark.003.e">{/*anchor*/}</a>
          
          <br className="lb" />{" "}
          Äußerlich i<span className="orig">ﬅ</span>
<span className="corr">st</span> es aber nun ungemein unruhig hier{" "}
          <span className="damage"><span className="gap"> [...]</span><span className="supplied" id="supplied.text001"></span></span>
          <br className="lb" />{" "}
          Be<span className="orig">ﬅ</span>
<span className="corr">st</span>er! <span className="makierung">ich bin mitten im packen</span> und werde
          <span className="damage"><span className="gap"> [...]</span></span>
          <br className="lb" />{" "}
          schwerlich <span className="orig">heüte</span><span className="corr">heute</span> damit fertig werden; doch will ich
          <span className="damage" /> mein<br className="lb" />{" "}
          <span className="orig">be<span className="orig">ﬅ</span>
<span className="corr">st</span>es</span><span className="corr">Be<span className="orig">ﬅ</span>
<span className="corr">st</span>es</span> thun und{" "}
          nun wieder mit frischen Muth anfangen<span className="orig" /><span className="corr">.</span><br className="lb" />{" "}
          <span className="makierung"><span className="persName">Schwe<span className="orig">ﬅ</span>
<span className="corr">st</span>er Märcker</span></span> und{" "}
          <span className="makierung"><span className="orig">CreißEinnehmers</span><span className="corr">Kreiseinnehmers</span></span> sind unten am<br className="lb" />{" "}
          Caﬀee trinken und haben mir schon <span className="orig">ruﬀen</span><span className="corr">rufen</span> <span className="orig">laßen</span><span className="corr">lassen</span>.
        </p>
        <p>
          Du mein herzlichgeliebter Gatte! muß <span className="orig strikethrough">h</span><span className="orig" /><span className="corr">[t]</span>
          <span style={{textDecoration: 'line-through'}}></span> mit diesen<br className="lb" />{" "}
          in der Eil geschriebenen Brief vorlieb nehmen und{" "}
          <span className="orig">heüte</span><span className="corr">heute</span><br className="lb" />{" "}
          Deine <span className="orig">geschäﬀtige</span><span className="corr">geschäftige</span> Frau entschuldigen. Alle unsere
          hiesige<br className="lb" />{" "}
          liebe Verwandten grüßen Dir mit vieler Liebe – unsere<br className="lb" />{" "}
          dortige Lieben bitte ich meine <span className="orig">liebe</span><span className="corr">Liebe</span> zu versichern.
        </p>
        <div className="closer">
          <span className="g.rend.script.latin">Adieu!</span> liebes gutes Männchen!
          der liebe Gott seÿe<br className="lb" />{" "}
          Dir recht nahe, <span className="orig">beschüze</span><span className="corr">beschütze</span> und erhalte Dich! <br className="lb" />{" "}
          Nun ni<span className="orig">m̅</span>
<span className="corr">mm</span> noch diese<span className="add"><span className="corr">[</span>n<span className="corr">]</span> </span><span className="damage"><span className="gap">[...]</span><span className="supplied" id="supplied.text002"></span></span><span className="corr">{" "}<span className="corr">[</span>zär<span className="corr">]</span>tlichen</span><span className="orig">tlichen</span> Kuß von Deine<br className="lb" />{" "}
          <div className="dateline-left">
            <span className="placeName">Ruhrorth</span> am{" "}
            <span className="date">10<span className="orig">{" "}</span><sup className="hochgestellt underline" >ten</sup>{" "}
              <span className="abbr"> Sept</span><span className="expan">Sept<span className="ex">ember</span></span>
              <span className="damage"><span className="gap"> [...]</span></span>
              </span>
          </div>
          <div className="text-right-up">
          <div className="signed-space " style={{paddingLeft: "220px"}}>
            <span className="orig">treüe</span><span className="corr">treue</span> Dich
            herzlich<span className="orig">^</span><span className="corr"></span>liebende<span style={{display: 'inline-block'}}>&nbsp;</span>
          </div>
          <div className="signed-space " style={{paddingLeft: "220px"}}>
            <span className="">Luise Engels{" "}
              <span className="g.enc.tagsdecl.suspension.type2" style={{display: "inline"}}> <span className="orig">gb</span></span><span className="expan">geb<span className="ex">orene</span></span>{" "}
              {" "}Noot</span>.
              </div>
          </div>
        </div>
      
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung"
            style={{
              top: "1480px",
            }}
          >
            <hr />
            <label>Ps. 66, vs 20</label>
            <p>
            Psalm 66, 20: „Gelobt sei Gott, der mein Gebet nicht verwirft noch seine Güte von mir wendet.“

            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2411px",
            }}
          >
            <hr />
            <label>Ich bin mitten im Packen</label>
            <p>
            Louise Noot bereitet ihren Umzug nach Barmen vor.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2496px",
            }}
          >
            <hr />
            <label>Schwester Märker</label>
            <p>
            Maria Elisabeth Märker, geb. Noot (1753–1831).
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2496px;",
            }}
          >
            <hr />
            <label>Kreiseinnehmers</label>
            <p>
            Die Eheleute Gerhard Peter Noot (1751–1836), Bruder von Louise Noot, und Anna Clara Maria Noot, geb. Karthaus (1750–1816). (Siehe Brief 4.) 
            </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
