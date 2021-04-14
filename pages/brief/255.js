import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "255";
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
      <title>Brief {date}</title>
    </Head>

    <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      {/* <!-- Themenmarkierung --> */}
      <div type="mark">
        {/* <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e" /> */}
        {/* <span type="reisen" from="#mark.002.s" to="#mark.002.e" /> */}
        {/* <span type="geschaeftliches" from="#mark.003.s" to="#mark.003.e"/> */}
      </div>

      <div>
        {/*TEI front*/}
        <div className="toc toc_body">
          <div className="toc toc_back">
            {/*TEI body*/}
            <div className="tei_body">
              <section
                className="kuvert"
                id="index.xml-body.1_div.1"
                style={{ paddingTop: "30px"}}
              >
                {/* Insert Kuvert */}
              </section>
            </div>

            <section className="writing-session page-large " id="index.xml-body.1_div.2">
              <div
                className="page"
                style={{
                  paddingTop: "55px",
                  paddingLeft: "80px",
                  paddingBottom: "90px",
                }}
              >
                {/* Insert Page 1 */}
                <div className="opener">
                  <div className="dateline text-right">
                    <span className="g.rend.script.latin">Barmen</span>{" "}
                    <span className="date">
                      9. <span className="g.rend.script.latin">Juli</span> 1822
                    </span>
                    .
                  </div>
                </div>
                <span style={{ display: "inline-block" }} width="1lines">
                  &nbsp;
                </span>
                <p className="enc.tagsdecl.indent-small">
                  <a id="teaser.part.001.s">{/*anchor*/}</a>Dein lieber Brief
                  vom
                  <span className="date">
                    {" "}5. <span className="abbr"> ds.</span>
                    <span className="expan">
                      d<span className="ex">iese</span>s{" "}
                      <span className="ex">Monats</span>
                    </span>
                  </span>
                  <br className="lb" />
                  gewährte mir eine rechte Be
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ruhigung, denn ich <span className="orig">ſ</span><span className="corr">s</span>ahe daraus,
                  <br className="lb" />
                  daß es Dir und dem kleinen
                  <span className="orig">
                    Her
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    zens<span style={{ display: "inline-block" }}>&nbsp;</span>
                    tippel
                  </span>
                  <span className="corr">
                    Her
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    zenstippel
                  </span>
                  gut geht. Du glaub<span className="orig">ﬅ</span><span className="corr">st</span>
                  <br className="lb" />
                  gar nicht,
                  <span className="orig">
                    Herzens<span className="unclear">^</span>
                    <span style={{ display: "inline-block" }}>&nbsp;</span>mama
                  </span>
                  <span className="corr">Herzensmama</span>, wie <span className="orig">ſ</span><span className="corr">s</span>ehr Du
                  <br className="lb" />
                  <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  er mir ans Herz gewach<span className="orig">ſ</span><span className="corr">s</span>en <span className="orig">ſ</span><span className="corr">s</span>eÿd,{" "}
                  <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>
                  <br className="lb" />
                  Du glaub<span className="orig">ﬅ</span><span className="corr">st</span> auch gar nicht, wie un
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  behaglich, wie ekelig mir zu Muthe
                  <br className="lb" />
                  ohne Euch i<span className="orig">ﬅ</span><span className="corr">st</span>.<a id="teaser.part.001.e">{/*anchor*/}</a> Ich
                  habe hier überall
                  <br className="lb" />
                  freundliche Ge<span className="orig">ſ</span><span className="corr">s</span>ichter, wo ich hinkom̅e,
                  <br className="lb" />
                  aber demohngeachtet fühle ich eine
                  <br className="lb" />
                  Leere. <a id="mark.001.s">{/*anchor*/}</a>
                  <span className="liebe">
                    Aber höre einmal
                    <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span>{" "}
                    <br className="lb" />
                    meine Briefe darf<span className="orig">ﬅ</span><span className="corr">st</span> Du
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (niemand</span>
                    <span className="expan">
                      niemand<span className="ex">en</span>
                    </span>
                    <br className="lb" />
                    le<span className="orig">ſ</span><span className="corr">s</span>en <span className="orig">laßen</span>
                    <span className="corr">lassen</span>, darauf muß ich mich
                    <br className="lb" />
                    <span className="orig">verlaßen</span>
                    <span className="corr">verlassen</span> dürfen, <span className="orig">ſ</span><span className="corr">s</span>on<span className="orig">ﬅ</span><span className="corr">st</span>
                    <span className="g.rend.script.latin">genire</span> ich
                    <br className="lb" />
                    mich, und glaube immer auch auf
                    <br className="lb" />
                    andere <span className="orig">Rük<span className="orig">ſ</span><span className="corr">s</span>icht</span>
                    <span className="corr">Rück<span className="orig">ſ</span><span className="corr">s</span>icht</span> nehmen zu
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>
                    <br className="lb" />
                    wenn ich gerne zärtlich mit Dir,
                    <br className="lb" />
                    Du altes liebes Ge<span className="orig">ſ</span><span className="corr">s</span>icht wäre. –<br className="lb" />
                    Hör<span className="orig">ﬅ</span><span className="corr">st</span> Du, Du läßt meine Briefe
                    <br className="lb" />
                    nicht le<span className="orig">ſ</span><span className="corr">s</span>en, nicht wahr?<a id="mark.001.e">{/*anchor*/}</a>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Aber was macht denn mein klein
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span style={{ display: "inline-block" }} width="-4em">
                    &nbsp;
                  </span>
                  <span className="add indent-negativ" id="txt.add002">
                    <span className="orig">ﬅ</span><span className="corr">st</span>e
                  </span>
                  <span className="orig">
                    Herzens<span className="unclear">^</span>
                    <span style={{ display: "inline-block" }}>&nbsp;</span>
                    tuksken
                  </span>
                  <span className="corr">Herzenstuksken</span>? Du kenn<span className="orig">ﬅ</span><span className="corr">st</span> es ja
                  <br className="lb" />
                  wohl. Ich weis bald nicht, wo ich vor
                  <br className="lb" />
                  all’ den Kleinen bleiben <span className="orig">ſ</span><span className="corr">s</span>oll, und
                  <br className="lb" />
                  weiß vor Plai<span className="orig">ſ</span><span className="corr">s</span>ir darüber nicht wohin.
                  <br className="lb" />
                  <a id="annot.001.s">{/*anchor*/}</a>Nun bald haben wir ja
                  zwei,
                  <span className="orig">
                    Herzens<span className="unclear">^</span>
                    <span style={{ display: "inline-block" }}>&nbsp;</span>
                    <br className="g.enc.tagsdecl.hyphenation.space" />
                    lie<span className="orig">ſ</span><span className="corr">s</span>eli
                  </span>
                  <span className="corr">
                    Herzens
                    <br className="g.enc.tagsdecl.hyphenation.space" />
                    lie<span className="orig">ſ</span><span className="corr">s</span>eli
                  </span>
                  !<a id="annot.001.e">{/*anchor*/}</a>
                </p>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "110px",
                  paddingLeft: "80px",
                  paddingBottom: "125px",
                }}
              >
                {/* Insert Page 2 */}
                <a id="annot.002.s">{/*anchor*/}</a>
                <p>
                  <span className="g.rend.script.latin">Casper</span> hat
                  <span className="date">ge<span className="orig">ﬅ</span><span className="corr">st</span>ern</span> ge<span className="orig">ſ</span><span className="corr">s</span>chrieben, daß
                  <br className="lb" />
                  das Bad fort<span className="unclear">^</span>
                  <span style={{ display: "inline-block" }}>&nbsp;</span>während
                  <span className="orig">ſ</span><span className="corr">s</span>einer Frau <br className="lb" />
                  gut bekommt, daß er nicht nach
                  <br className="lb" />
                  <span className="g.rend.script.latin">Schwalbach</span>{" "}
                  braucht und er in
                  <span className="abbr">
                    (C
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>a</sup>.
                    </span>
                    )
                  </span>
                  <span className="expan">
                    C<span className="ex">irc</span>a
                  </span>
                  <br className="lb" />3 Wochen wieder hier <span className="orig">ſ</span><span className="corr">s</span>eÿn kann.
                </p>
                <a id="annot.002.e">{/*anchor*/}</a>
                <p>
                  Die junge
                  <span className="persName">
                    Frau{" "}
                    <span className="g.rend.script.latin">Böddinghaus</span>
                  </span>
                  i<span className="orig">ﬅ</span><span className="corr">st</span>
                  <br className="lb" />
                  aber <span className="orig">ſ</span><span className="corr">s</span>ehr <span className="orig">ſ</span><span className="corr">s</span>chwach, <span className="orig">ſ</span><span className="corr">s</span>ie hat in{" "}
                  <span className="placeName">Ems</span>
                  <br className="lb" />
                  bei ihrer Ankunft wieder einen
                  <br className="lb" />
                  Blut<span className="orig">ﬅ</span><span className="corr">st</span>urz gehabt, <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  war <span className="orig">ſ</span><span className="corr">s</span>o gefährlich
                  <br className="lb" />
                  daß <span className="g.rend.script.latin">Casper</span> eine
                  Stafette an
                  <span className="g.rend.script.latin">
                    <span className="abbr"> W
                      <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                        <sup>m</sup>.
                      </span></span>
                    <span className="expan">
                      W<span className="ex">ilhel</span>m
                    </span>
                    <br className="lb" />
                    Wittenstein
                  </span>
                  ab<span className="orig">ſ</span><span className="corr">s</span>chickte, worauf ihr
                  <br className="lb" />
                  Mann gleich von
                  <span className="g.rend.script.latin">Elberfeld</span>{" "}
                  abreiste.
                  <br className="lb" />
                  Nach dem letzten Briefe von
                  <span className="g.rend.script.latin">Casper</span>{" "}
                  <br className="lb" />
                  geht’s ihr ein wenig <span className="orig">beßer</span>
                  <span className="corr">besser</span>, doch
                  <br className="lb" />
                  zweifelt man an ihrem
                  <span className="orig">
                    Aufkom̅
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    men
                  </span>
                  <span className="corr">
                    Aufkom
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    men
                  </span>
                  . Es wäre doch recht <span className="orig">ſ</span><span className="corr">s</span>chade um
                  <br className="lb" />
                  die gute junge Frau.
                </p>
                <a id="annot.003.s">{/*anchor*/}</a>
                <p className="enc.tagsdecl.indent-medium">
                  Deine Erzählung vom kleinen
                  <span className="g.rend.script.latin">
                    <span className="abbr"> Fried.</span>
                    <span className="expan">
                      Fried<span className="ex">rich</span>
                    </span>
                  </span>
                  <br className="lb" />
                  mit <span className="orig">ſ</span><span className="corr">s</span>einen <span className="orig">Waßermühlen</span>
                  <span className="corr">Wassermühlen</span> hat mir
                  <br className="lb" />
                  vielen <span className="orig">Spas</span>
                  <span className="corr">Spaß</span> gemacht, gieb Acht
                  <br className="lb" />
                  ob kein{" "}
                  <span className="g.rend.script.latin">Mechanicus</span> drin
                  <span className="orig">ﬅ</span><span className="corr">st</span>ekt.
                </p>
                <a id="annot.003.e">{/*anchor*/}</a>
                <p className="enc.tagsdecl.indent-medium">
                  Wie ich Euch übrigens von dort <br className="lb" />
                  wieder abholen kann, i<span className="orig">ﬅ</span><span className="corr">st</span> mir
                  <br className="lb" />
                  noch nicht recht klar. Nach meiner
                  <br className="lb" />
                  Meinung wird{" "}
                  <span className="g.rend.script.latin">Casper</span> gegen Ende
                  <br className="lb" />
                  <span className="g.rend.script.latin">Juli</span> wieder hier
                  <span className="orig">ſ</span><span className="corr">s</span>eÿn; am
                  <span className="date">
                    er<span className="orig">ﬅ</span><span className="corr">st</span>en
                    <br className="lb" />
                    <span className="g.rend.script.latin">August</span>
                  </span>
                  haben wir <span className="g.rend.script.latin">Bilanz</span>,
                  und dann
                  <br className="lb" />
                  darf ich nicht fehlen; früher kann
                  <br className="lb" />
                </p>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "60px",
                  paddingLeft: "70px",
                  paddingBottom: "240px",
                }}
              >
                {/* Insert Page 3 */}
                <p>
                  ich <span className="g.rend.script.latin">August</span> nicht
                  <sup className="sup" id="txt.add001">
                    lange
                  </sup>{" "}
                  allein
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span>, und
                  <br className="lb" />
                  doch kann ich meine Ein<span className="orig">ſ</span><span className="corr">s</span>amkeit
                  <br className="lb" />
                  nicht länger ertragen; was läßt
                  <br className="lb" />
                  <span className="orig">ſ</span><span className="corr">s</span>ich nur für ein vernünftiges Re
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  <span className="orig">ſ</span><span className="corr">s</span>ultat hieraus ziehen?
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="reisen">
                    Ich <span className="orig">ſ</span><span className="corr">s</span>ehe es kom̅en, daß ich es
                    <br className="lb" />
                    <span className="orig">ſ</span><span className="corr">s</span>o machen muß; ich werde gegen
                    <br className="lb" />
                    <span className="date">den 22.</span> von hier abfahren
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>,<br className="lb" />
                    mich 1 à 2 Tage dort aufhalten, und
                    <br className="lb" />
                    dann mit meiner <span className="orig">ſ</span><span className="corr">s</span>üßen La<span className="orig">ﬅ</span><span className="corr">st</span> wieder
                    <br className="lb" />
                    heimfahren. Deine Rei<span className="orig">ſ</span><span className="corr">s</span>e trifft in
                    <br className="lb" />
                    die<span className="orig">ſ</span><span className="corr">s</span>er Hin<span className="orig">ſ</span><span className="corr">s</span>icht diesmal wirklich in
                    <br className="lb" />
                    einen sehr <span className="orig">mislichen</span>
                    <span className="corr">mißlichen</span> Zeitpunkt.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                  <br className="lb" />
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <a id="mark.003.s">{/*anchor*/}</a>Un<span className="orig">ſ</span><span className="corr">s</span>er Ge<span className="orig">ſ</span><span className="corr">s</span>chäft erleidet
                  täglich neue
                  <br className="lb" />
                  Veränderungen, welche un<span className="orig">ſ</span><span className="corr">s</span>ere Gegen
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  wart <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  <span className="orig">ſ</span><span className="corr">s</span>chnelles Handeln erfordern,
                  <br className="lb" />
                  dabei i<span className="orig">ﬅ</span><span className="corr">st</span> <span className="g.rend.script.latin">
                    Casper
                  </span>{" "}
                  abwe<span className="orig">ſ</span><span className="corr">s</span>end, und wahr
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  haftig ich <span className="orig">ſ</span><span className="corr">s</span>age Dir mir hat in voriger
                  <br className="lb" />
                  Woche der Kopf vor aller Arbeit
                  <br className="lb" />
                  gebrummt, denn äußere Ange
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  legenheiten <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Handlungs<span className="orig">ſ</span><span className="corr">s</span>achen,
                  <br className="lb" />
                  meine <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>
                  <span className="g.rend.script.latin">Caspers</span> Ge<span className="orig">ſ</span><span className="corr">s</span>chäfte
                  zum Theil,
                  <br className="lb" />
                  alles kommt zusam̅en.<a id="annot.004.e">{/*anchor*/}</a>
                  <span style={{ display: "inline-block" }} width="2char">
                    &nbsp;
                  </span>
                  Doch mir
                  <br className="lb" />
                  i<span className="orig">ﬅ</span><span className="corr">st</span>s recht, je krau<span className="orig">ſ</span><span className="corr">s</span>er, je lieber.
                  <br className="lb" />
                  Wir <span className="orig">ſ</span><span className="corr">s</span>ind noch jung <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  wollen die
                  <br className="lb" />
                  Glieder rühren.<a id="mark.003.e">{/*anchor*/}</a>
                  <a id="annot.005.s">{/*anchor*/}</a>Vielleicht kann
                  <br className="lb" />
                  ich im Herb<span className="orig">ﬅ</span><span className="corr">st</span> wenn ich{" "}
                  <span className="persName">Friederike</span> hole
                  <a id="annot.005.e">{/*anchor*/}</a>
                  <br className="lb" />
                </p>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "60px",
                  paddingLeft: "70px",
                  paddingBottom: "120px",
                }}
              >
                {/* Insert Page 4 */}
                <p>
                  ein paar Tage länger bei den Eltern <br className="lb" />
                  bleiben.
                  <span style={{ display: "inline-block" }} width="3char">
                    &nbsp;
                  </span>
                  Wirklich, ich thäte es auch
                  <br className="lb" />
                  diesmal gerne. <a id="annot.006.s">{/*anchor*/}</a>Aber ich
                  darf
                  <span className="g.rend.script.latin">August</span>{" "}
                  <br className="lb" />
                  nicht lange alleine <span className="orig">laßen</span>
                  <span className="corr">lassen</span>. Es i<span className="orig">ﬅ</span><span className="corr">st</span>
                  <br className="lb" />
                  ihm manches von meinen Sachen
                  <br className="lb" />
                  fremd.
                  <br className="lb" />
                  <a id="annot.006.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Deine{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Be<span className="orig">ﬅ</span><span className="corr">st</span>ellung)
                  </span>
                  <span className="expan">
                    Be<span className="orig">ﬅ</span><span className="corr">st</span>ellung<span className="ex">en</span>
                  </span>{" "}
                  werde ich
                  <br className="lb" />
                  <span className="orig">beßtens</span>
                  <span className="corr">bestens</span> ausführen. Die Stiefel
                  <span className="orig">ſ</span><span className="corr">s</span>ah
                  <br className="lb" />
                  ich <span className="orig">ſ</span><span className="corr">s</span>chon den Tag nach Eurer Abrei<span className="orig">ſ</span><span className="corr">s</span>e.
                  <br className="lb" />
                  Nach den andern 3 Punkten <span className="orig">ſ</span><span className="corr">s</span>chaue
                  <br className="lb" />
                  ich <span className="date">morgen</span> frühe um.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Aber <span className="g.rend.script.latin">à propos</span>!
                  Wollte<span className="orig">ﬅ</span><span className="corr">st</span> Du nicht
                  <br className="lb" />
                  <a id="annot.007.s">{/*anchor*/}</a>
                  <span className="persName">Rike Menkhoff</span>
                  <span className="strike-through" style={{ textDecoration: "line-through" }}>
                    bitten
                  </span>{" "}
                  nicht
                  <span className="persName">Schmits</span>
                  <a id="annot.007.e">{/*anchor*/}</a> <br className="lb" />
                  bitten, daß
                  <span className="orig">
                    <span className="overwritten">S</span>
                    <span className="add"><span className="orig">ſ</span><span className="corr">s</span></span>ie
                  </span>
                  <span className="corr">sie</span> ihrem Manne <span className="orig">ſ</span><span className="corr">s</span>chrei
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ben möchte, daß ich <span className="orig">ſ</span><span className="corr">s</span>chwerlich am
                  <br className="lb" />
                  <span className="date">
                    3
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>n</sup>.
                    </span>
                    <span className="g.rend.script.latin">
                      <span className="abbr"> Aug.</span>
                      <span className="expan">
                        Aug<span className="ex">ust</span>
                      </span>
                    </span>
                  </span>
                  in <span className="placeName">Ham̅</span> <span className="orig">ſ</span><span className="corr">s</span>eÿn könnte damit
                  <br className="lb" />
                  er <span className="orig">ſ</span><span className="corr">s</span>eine
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Einrichtung)
                  </span>
                  <span className="expan">
                    Einrichtung<span className="ex">en</span>
                  </span>
                  darnach trifft.
                  <br className="lb" />
                  Wenn er mich aber gegen <span className="date">den 22</span>
                  <br className="lb" />
                  bis
                  <span className="date">
                    23
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>n</sup>.
                    </span>
                  </span>
                  begleiten will, <span className="orig">ſ</span><span className="corr">s</span>oll’s
                  <br className="lb" />
                  mich freuen. –
                </p>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-medium">
                    Nun Adieu, es i<span className="orig">ﬅ</span><span className="corr">st</span> gleich eilf Uhr.
                    <br className="lb" />
                    <span className="orig">Küße</span>
                    <span className="corr">Küsse</span> mein liebes Kind.
                    Schreibe mir
                    <br className="lb" />
                    doch jeden Po<span className="orig">ﬅ</span><span className="corr">st</span>tag ein paar Worte
                    <br className="lb" />
                    will<span className="orig">ﬅ</span><span className="corr">st</span> Du, es thut mir <span className="orig">ſ</span><span className="corr">s</span>o gut. –
                  </p>
                </blockquote>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-small">
                    Lebe recht wohl, Du
                    <span className="orig">
                      Herzens<span className="unclear">^</span>
                      <span style={{ display: "inline-block" }}>&nbsp;</span>
                      kind
                    </span>
                    <span className="corr">Herzenskind</span>{" "}
                    <br className="lb" />
                    und behalte mich <span className="orig">ſ</span><span className="corr">s</span>o lieb wie ich Dich.
                  </p>
                </blockquote>
                <div className="closer">
                  Grüße Eltern <span className="abbr"> u.</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Ge<span className="orig">ſ</span><span className="corr">s</span>chwister herzlich <br className="lb" />
                  <div className="enc.tagsdecl.indent-small">
                    von Deinem treuen <br className="lb" />
                    <span style={{ display: "inline-block" }} width="4words">
                      &nbsp;
                    </span>
                    <span className="glyph">
                      <sup>.</sup>//.
                    </span>
                    <span className="g.rend.script.latin">Friedrich</span>.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
    </Layout>
  );
}
