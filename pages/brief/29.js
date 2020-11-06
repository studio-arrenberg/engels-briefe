import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "29";
  });

  return (
    <Brief_wrapper data={item}>
      {/* brief text goes here */}

      <div>
        {/*TEI front*/}
        <div className="toc toc_body">
          <div className="toc toc_back">
            {/*TEI body*/}
            <div className="tei_body">
              <section
                className="kuvert"
                id="index.xml-body.1_div.1"
                style={{ paddingTop: "100px", paddingBottom: "160px" }}
              >
                {" "}
                <h2>
                  <span className="headingNumber">1. </span>
                </h2>
              </section>
            </div>

            <section className="writing-session" id="index.xml-body.1_div.2">
              <div
                className="page"
                style={{
                  paddingTop: "55px",
                  paddingLeft: "80px",
                  paddingBottom: "100px",
                }}
              >
                <div type="mark">
                  {/* <span type="reisen" from="#mark.001.s" to="#mark.001.e" /> */}
                  {/* <span type="krieg" from="#mark.002.s" to="#mark.002.e" /> */}
                  {/* <span type="religion" from="#mark.003.s" to="#mark.003.e" /> */}
                  {/* <span type="liebe-ehe" from="#mark.004.s" to="#mark.004.e" /> */}
                  {/* <span type="reisen" from="#mark.005.s" to="#mark.005.e" /> */}
                  {/* <span type="krieg" from="#mark.006.s" to="#mark.006.e" /> */}
                  {/* <span type="religion" from="#mark.007.s" to="#mark.007.e" /> */}
                  <span
                    type="geschaeftliches"
                    from="#mark.008.s"
                    to="#mark.008.e"
                  />
                  <span type="krieg" from="#mark.009.s" to="#mark.009.e" />
                </div>

                {/* Insert Page 1 */}
                <div className="opener">
                  <div className="salute">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <span className="orig">Herzlichgeliebter</span>
                    <span className="corr">Herzlich geliebter</span> Papa!
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                  </div>
                </div>
                <p>
                  Deine beÿde liebe Briefe
                  <br className="lb" />
                  habe ich vorgeﬅern Morgen zugleich erhalten, der
                  <br className="lb" />
                  aus <span className="placeName">Schwalbach</span> muß alſo
                  Unterwegens liegen ge
                  <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                  blieben ſeÿn –
                  <span className="reisen">
                    <a id="mark.001.s">{/*anchor*/}</a>
                    wie groß war meine
                    <span className="orig">Freüde</span>
                    <span className="corr">Freude</span>
                    <br className="lb" />
                    als ich etwas von Deiner lieben Hand erblickte,
                    <br className="lb" />
                    und die erfreuliche Nachricht las, daß Du mein
                    <br className="lb" />
                    Beﬅer! Dich <span className="orig">Geſund</span>
                    <span className="corr">geſund</span> und munter befändeﬅ
                    <br className="lb" />
                    und bis dahin <span className="orig">Glücklich</span>
                    <span className="corr">glücklich</span>{" "}
                    <span className="orig">gereißet</span>
                    <span className="corr">gereiſet</span> wäreﬅ.
                    <a id="teaser.part.002.s">{/*anchor*/}</a>
                    <span className="krieg">
                      <a id="mark.002.s">{/*anchor*/}</a>
                      <span className="orig">ich</span>
                      <span className="corr">Ich</span>
                      <br className="lb" />
                      verlangte auſſerordentlich nach einen Brief von
                      <br className="lb" />
                      Dir, weil ich wegen den Unruhen mit den
                      <br className="lb" />
                      Franzoſen freÿlich etwas beküm̅ert war, indem
                      <br className="lb" />
                      ich’s gehört hatte, daß sie
                      <span className="placeName">Mainz</span> bombardirten
                      <a id="teaser.part.002.e">{/*anchor*/}</a>
                      <br className="lb" />
                      und ich glaubte, daß Du da drüber reiſen
                      <br className="lb" />
                      würdeﬅ
                      <a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                    <a id="mark.001.e">{/*anchor*/}</a> –
                  </span>
                  <span className="religion">
                    <a id="mark.003.s">{/*anchor*/}</a>doch suchte ich mir zu
                    hüten nicht
                    <br className="lb" />
                    in zu ängﬅlicher Sorge zu gerathen, weil
                    <br className="lb" />
                    dies kein Wohlverhalten gegen Gott gewesen
                    <br className="lb" />
                    wäre, ſondern mich im Vertrauen zu Jhm
                    <br className="lb" />
                    zu <span className="orig">ﬅärcken</span>
                    <span className="corr">ﬅärken</span>, und es von ſeiner
                    großen
                    <br className="lb" />
                    Güte zu hoﬀen daß Er mein{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span> erhören
                    <br className="lb" />
                    würde. Er der Liebevolle! ſeÿn dann auch
                    <br className="lb" />
                  </span>
                </p>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "35px",
                  paddingLeft: "80px",
                  paddingBottom: "5px",
                }}
              >
                {/* Insert Page 2 */}
                <span className="religion">
                  <p>
                    hochgelobet, und von ganzem Herzen dafür
                    <span className="orig">gedanckt</span>
                    <span className="corr">gedankt</span>!<br className="lb" />
                    <span className="overwritten">g</span>
                    <span className="add">⟨daß⟩</span> Er Dich mein Beﬅer!
                    geleitet, und für die
                    <br className="lb" />
                    Gefahr ſo Dir hätte treﬀen können beſchützet hat.
                    <br className="lb" />
                    Er ſeÿe Dir dann auch ferner nahe, und{" "}
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> uns
                    <br className="lb" />
                    doch die große Freude zu Theil werden, uns
                    <span className="orig">Geſund</span>
                    <span className="corr">geſund</span>
                    <br className="lb" />
                    wieder zu umarmen, dann wollen wir Jhm
                    <span className="orig">
                      gemein
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      ſchaﬀtlich
                    </span>
                    <span className="corr">
                      gemein
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      ſchaftlich
                    </span>
                    danken, und miteinander Seinen Nahmen
                    <br className="lb" />
                    erhöhen!
                    <a id="mark.003.e">{/*anchor*/}</a>
                  </p>
                </span>

                <p>
                  <a id="mark.004.s">{/*anchor*/}</a>Für Deine Sorgfalt, mir
                  ſchon ſo bald Nachricht von
                  <br className="lb" />
                  Dir zu geben <span className="orig">dancke</span>
                  <span className="corr">danke</span> ich Dir mein guter Papa!
                  <br className="lb" />
                  herzlich, ich erkenne daraus Deine zärtliche Liebe,
                  <br className="lb" />
                  und möchte Dir gerne einen warmen Kuß
                  <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>i
                  <span style={{ textDecoration: "underline" }}>n Natura</span>
                  <a id="txt.hi.underline001.int.e">{/*anchor*/}</a>{" "}
                  <br className="lb" />
                  dafür geben, da dieſes aber nun nicht ſeÿn
                  <sup className="sup" id="txt.add001">
                    kann
                  </sup>
                  , will
                  <br className="lb" />
                  ich ihn Dir doch in <span className="orig">Gedancken</span>
                  <span className="corr">Gedanken</span> ſchicken.
                  <a id="mark.004.e">{/*anchor*/}</a>
                </p>
=======
                <span className="religion">
                  <p>
                    hochgelobet, und von ganzem Herzen dafür
                    <span className="orig">gedanckt</span>
                    <span className="corr">gedankt</span>!<br className="lb" />
                    <span className="overwritten">g</span>
                    <span className="add">⟨daß⟩</span> Er Dich mein Beﬅer!
                    geleitet, und für die
                    <br className="lb" />
                    Gefahr ſo Dir hätte treﬀen können beſchützet hat.
                    <br className="lb" />
                    Er ſeÿe Dir dann auch ferner nahe, und{" "}
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> uns
                    <br className="lb" />
                    doch die große Freude zu Theil werden, uns
                    <span className="orig">Geſund</span>
                    <span className="corr">geſund</span>
                    <br className="lb" />
                    wieder zu umarmen, dann wollen wir Jhm
                    <span className="orig">
                      gemein
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      ſchaﬀtlich
                    </span>
                    <span className="corr">
                      gemein
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      ſchaftlich
                    </span>
                    danken, und miteinander Seinen Nahmen
                    <br className="lb" />
                    erhöhen!
                    <a id="mark.003.e">{/*anchor*/}</a>
                  </p>
                </span>
                <span className="liebe">
                  <p>
                    <a id="mark.004.s">{/*anchor*/}</a>Für Deine Sorgfalt, mir
                    ſchon ſo bald Nachricht von
                    <br className="lb" />
                    Dir zu geben <span className="orig">dancke</span>
                    <span className="corr">danke</span> ich Dir mein guter Papa!
                    <br className="lb" />
                    herzlich, ich erkenne daraus Deine zärtliche Liebe,
                    <br className="lb" />
                    und möchte Dir gerne einen warmen Kuß
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>i
                    <span style={{ textDecoration: "underline" }}>
                      n Natura
                    </span>
                    <a id="txt.hi.underline001.int.e">{/*anchor*/}</a>{" "}
                    <br className="lb" />
                    dafür geben, da dieſes aber nun nicht ſeÿn
                    <sup className="sup" id="txt.add001">
                      kann
                    </sup>
                    , will
                    <br className="lb" />
                    ich ihn Dir doch in <span className="orig">Gedancken</span>
                    <span className="corr">Gedanken</span> ſchicken.
                    <a id="mark.004.e">{/*anchor*/}</a>
                  </p>
                </span>
                <p>
                  Jch hätte Dir ſchon gleich{" "}
                  <span className="orig">Geﬅern</span>
                  <span className="corr">geﬅern</span> geantwortet,
                  <br className="lb" />
                  weil wir aber am Kappes ſchneiden waren, und ich
                  <br className="lb" />
                  auch Kramsvogel gepackt habe, um
                  <span className="persName">Bruder Wilhelm</span>{" "}
                  <br className="lb" />
                  zu ſchicken, kon̅te ich nicht.{" "}
                </p>
                <span className="reisen">
                  <p>
                    <a id="mark.005.s">{/*anchor*/}</a>
                    <a id="mark.006.s">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    <span className="orig">meinen</span>
                    <span className="corr">Meinen</span> Brief
                    <br className="lb" />
                    ſo ich unſerer Abſprache gemäß nach
                    <span className="placeName">Manheim</span> adreſſirt
                    <br className="lb" />
                    hatte, hoﬀe ich wirﬅ Du <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> erhalten haben –
                    <br className="lb" />
                    wann er nur{" "}
                    <sup className="sup" id="txt.add002">
                      nicht
                    </sup>{" "}
                    wegen den Unruhen <span className="orig">verlohren</span>
                    <span className="corr">verloren</span> ge
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    gangen iﬅ!
                  </p>
                  <p>
                    Sehr wohl haﬅ Du gethan mein Jnniggeliebter! und
                    <br className="lb" />
                    es freÿlich ganz nach meinen Wunſch gemacht, daß Du wie
                    <br className="lb" />
                  </p>
                </span>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                {/* Insert Page 3 */}
                <span className="reisen">
                  <p>
                    es etwas unſicher war, nicht über
                    <span className="placeName">Manheim</span> ge
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    reiﬅ biﬅ <a id="mark.006.e">{/*anchor*/}</a>– Vielleicht iﬅ
                    es auch für die Sache
                    <br className="lb" />
                    <span className="orig">beßer</span>
                    <span className="corr">besser</span>.
                    <span style={{ display: "inline-block" }} width="2cm">
                      &nbsp;
                    </span>
                    Unſerer Vermuthung nach wirﬅ Du{" "}
                    <span className="orig">Heute</span>
                    <span className="corr">heute</span>
                    <br className="lb" />
                    in <span className="placeName">München</span> ankom̅en.
                    <a id="mark.005.e">{/*anchor*/}</a>
                  </p>
                </span>
                <span className="religion">
                  <p>
                    <a id="mark.007.s">{/*anchor*/}</a>
                    <span className="orig">ich</span>
                    <span className="corr">Ich</span>{" "}
                    <span className="orig">bäte</span>
                    <span className="corr">bete</span> mit Dir, daß
                    <br className="lb" />
                    unſer liebreicher Herr Jeſu Dir geſchickt machen möge
                    <br className="lb" />
                    ſo zu handlen, wie Er es machen würde, wann
                    <br className="lb" />
                    Er an Deiner Stelle wäre. Er, unſer Göttlicher Hohen
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    prieﬅer gebe Euch Beÿde,{" "}
                    <span className="orig">Weißheit</span>
                    <span className="corr">Weisheit</span>, und Verﬅand,
                    <br className="lb" />
                    Muth, und <span className="orig">Stärcke</span>
                    <span className="corr">Stärke</span>, ja, alles was Jhr
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> nöthig
                    <br className="lb" />
                    habt. Wann es mit Seinen vollkom̅nen Willen be
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    ﬅehen kann, ſo glaube ich ganz ſicher wird die
                    <br className="lb" />
                    Sache gelingen, und geſchicht dieſes nicht, ſo wollen
                    <br className="lb" />
                    wirs Jhm zutrauen, daß es alsdenn, wenigﬅens
                    <br className="lb" />
                    für uns, ſo <span className="orig">beßer</span>
                    <span className="corr">besser</span>
                    <span style={{ textDecoration: "line-through" }}>
                      iﬅ
                    </span>{" "}
                    und
                    <span className="orig">nüzlicher</span>
                    <span className="corr">nützlicher</span> iﬅ.
                  </p>
                  <p>
                    Herr
                    <span className="persName">
                      Doctor
                      <span className="abbr">
                        (C<span className="orig">:</span>
                        <span className="corr">.</span>)
                      </span>
                      <span className="expan">
                        C<span className="ex">ollenbuſch</span>
                      </span>
                    </span>
                    hat vorigen Montag mit mir
                    <br className="lb" />
                    gegeſſen, und nachher den Thee getrunken; dieſer
                    <br className="lb" />
                    wünſchte noch im̅er daß die Sache nicht durch Geld
                    <br className="lb" />
                    getrieben würde, weil er befürchtet daß ſonﬅ
                    <br className="lb" />
                    nachher das Geld, und nicht Gott die Ehre gegeben
                    <br className="lb" />
                    wird. Wir haben zuſam̅en einige Pſalmen durch
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    geleſen und darüber geſprochen, unter andern
                    <br className="lb" />
                    auch den 36
                    <span className="orig" />
                    <span className="corr">.</span> Pſalm.
                    <span className="orig">die</span>
                    <span className="corr">Die</span> 4 erﬅe Verſen ſa
                    <span className="overwritten">t</span>
                    <span className="add">⟨g⟩</span>te er
                    <br className="lb" />
                    paßten ganz auf den <span className="persName">Knap</span> –
                    die Lehre ſo im
                  </p>
                  </span>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "70px",
                    paddingBottom: "55px",
                  }}
                >
                  {/* Insert Page 4 */}
                  <span className="religion">
                  <p>
                    3<sup style={{ textDecoration: "underline" }}>ten</sup> Vers
                    vorkämen,
                    <span className="orig">könte</span>
                    <span className="corr">könnte</span> man ſeine{" "}
                    <span className="orig">Schriﬀten</span>
                    <span className="corr">Schriften</span>
                    <br className="lb" />
                    durch verﬅehen.
                  </p>
                  <p>
                    <a id="mark.008.s">{/*anchor*/}</a>Daß die Witterung ſo
                    günﬅig iﬅ, und Du mein Lieber!
                    <br className="lb" />
                    in der <span className="orig">Geſellſchaﬀt</span>
                    <span className="corr">Geſellſchaft</span> des
                    <span className="g.enc.tagsdecl.cc.abbr-colon">
                      (H<span className="orig">:</span>
                      <span className="corr">.</span>)
                    </span>
                    <span className="expan">
                      H<span className="ex">err</span>
                    </span>
                    <span className="persName">Wortmann</span> ſo vergnügt
                    <span className="orig">reißeﬅ</span>
                    <span className="corr">reiseﬅ</span>
                    <br className="lb" />
                    <span className="orig">freüt</span>
                    <span className="corr">freut</span> mich ſehr – grüße ihm
                    recht <span className="orig">freundſchaﬀtlich</span>
                    <span className="corr">freundſchaftlich</span> von
                    <br className="lb" />
                    mir. Vielleicht kannﬅ Du ihm{" "}
                    <span className="orig">nüzlich</span>
                    <span className="corr">nützlich</span> werden, durch Mit
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    theilung der Geiﬅesgaben, ſo Du ſchon aus Gnaden vom
                    <br className="lb" />
                    Herrn empfangen haﬅ<a id="mark.008.e">{/*anchor*/}</a> und
                    einige Vorurtheile und Jrr
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    thümer beÿ ihm zerﬅören.
                    <a id="mark.007.e">{/*anchor*/}</a>
                  </p>
                </span>
                <p>
                  <a id="mark.009.s">{/*anchor*/}</a>
                  <span className="persName">Bruder Benjamin</span> brachte mir
                  Deine liebe Briefe, ich
                  <br className="lb" />
                  habe ihm alſo einiges daraus vorgeleſen – auch habe
                  <br className="lb" />
                  ich einen Auszug, beſonders wegen den kriegeriſchen
                  <br className="lb" />
                  Angelegenheiten daraus geſchrieben, und ſelbigen
                  <span className="abbr">
                    (H<span className="orig">:</span>
                    <span className="corr">.</span>)
                  </span>
                  <span className="expan">
                    H<span className="ex">err</span>
                  </span>
                  <br className="lb" />
                  Vater, und Brögelmanns mitgetheilt.
                  <a id="mark.009.e">{/*anchor*/}</a>
                  <span style={{ display: "inline-block" }} width="12mm">
                    &nbsp;
                  </span>
                  Alle liebe
                  <br className="lb" />
                  Verwandten, und gute Freunden{" "}
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span> Dir herzlich
                  <br className="lb" />
                  grüßen, beſonders auch{" "}
                  <span className="persName">Nichte Haniel</span>.
                </p>
                <p>
                  Vorigen Sonntag Abend haben wir beÿ
                  <span className="persName">
                    Bruder Brögel
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    mann
                  </span>
                  gegeſſen, wir gingen zum Caﬀee hin, und
                  <br className="lb" />
                  fanden Pelzers und
                  <span className="persName">
                    <span className="g.enc.tagsdecl.cc.abbr-colon">
                      (H<span className="orig">:</span>
                      <span className="corr">.</span>)
                    </span>
                    <span className="expan">
                      H<span className="ex">errn</span>
                    </span>
                    Brögelmann
                  </span>
                  von <span className="placeName">Elberfeld</span> da,
                  <br className="lb" />
                  und weil dieſe da <span className="orig">eßen</span>
                  <span className="corr">essen</span> blieben{" "}
                  <span className="orig">wolten</span>
                  <span className="corr">wollten</span> ſie uns
                  <br className="lb" />
                  auch nicht gehen <span className="orig">laßen</span>
                  <span className="corr">lassen</span>.
                </p>
                <p>
                  Daß ich Gottlob! noch wohl bin, kannﬅ Du mein
                  <br className="lb" />
                  Jnniggeliebter! aus dem ganzen{" "}
                  <span className="orig">Jnnhalt</span>
                  <span className="corr">Jnhalt</span> meines Briefes
                  <br className="lb" />
                  wohl ſehen, ich brauche es Dir alſo nicht erﬅ zu ver
                  <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                  ſichern.
                </p>
                <div className="closer">
                  Das Blatt iﬅ voll, ich Dir mein Beﬅer! alſo
                  <br className="lb" />
                  <span className="orig">jezt</span>
                  <span className="corr">jetzt</span>
                  <span className="g.rend.script.latin">adieu</span> ſagen.
                  <span className="orig">von</span>
                  <span className="corr">Von</span> ganzem Herzen bin ich Deine
                  treue <br className="lb" />
                  <span style={{ display: "inline-block" }} width="13cm">
                    &nbsp;
                  </span>
                  <div className="signed">
                    Luiſe Engels
                    <span className="g.enc.tagsdecl.cc.abbr-colon">
                      (geb<span className="orig">:</span>
                      <span className="corr">.</span>)
                    </span>
                    <span className="expan">
                      geb<span className="ex">orene</span>
                    </span>{" "}
                    Noot.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
