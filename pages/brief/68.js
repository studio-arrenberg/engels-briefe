import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {

  const item = data.briefe.filter((data, index) => {
    return data.id === "68";
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

      <div>
        {/*TEI front*/}
        <div className="toc toc_body">
          <div className="toc toc_back">
            {/*TEI body*/}
            <div className="tei_body">
              <section
                className="kuvert"
                id="index.xml-body.1_div.1"
                style={{ paddingTop: "227px", paddingBottom: "170px" }}
              >
                {/* Insert Kuvert */}
                <h2>
                  <span className="headingNumber">1. </span>
                </h2>

                <div className="teidiv1" id="index.xml-body.1_div.1_div.2">
                  <h3>
                    <span className="headingNumber">1.2. </span>
                  </h3>
                  <p className="g.enc.tagsdecl.wd.vertical-left">
                    <span style={{ display: "inline-block" }} width="4em">
                      &nbsp;
                    </span>
                    <span className="g.rend.script.latin">
                      Herrn
                      <br className="lb" />
                      <span className="persName">Friedrich Engels</span>.
                      <br className="lb" />
                    <span className="small-adress" style={{ fontSize: "1.1rem", lineHeight: "1.8rem", marginBottom: "0px", marginTop:"10px", display: "block"}}>
                      <span className="abbr">
                        (Add
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          <sup>r</sup>:
                        </span>
                        )
                      </span>
                      <span className="expan">
                        Add<span className="ex">resse</span>
                      </span>{" "}
                      Herrn
                      <span className="persName">
                        <span className="abbr"> (Joh.)</span>
                        <span className="expan">
                          Joh<span className="ex">ann</span>
                        </span>
                        <span className="abbr">
                          (Frid
                          <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                            :<sup>h</sup>
                          </span>
                          )
                        </span>
                        <span className="expan">
                          Frid<span className="ex">ric</span>h
                        </span>
                        Eckhardt <span className="abbr"> (Sr.)</span>
                        <span className="expan">
                          S<span className="ex">enio</span>r
                        </span>
                      </span>
                      <br className="lb" />
                      <span
                        className="wave"
                        style={{ textDecoration: "underline" }}
                      >
                        <span className="abbr">
                          (f
                          <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                            <sup>co</sup>:
                          </span>
                          )
                        </span>
                        <span className="expan">
                          f<span className="ex">ran</span>co
                        </span>
                        <span className="placeName">Wetzlar</span>
                      </span>
                      <span style={{ display: "inline-block" }} width="1word">
                        &nbsp;
                      </span>
                      in

                      </span>

                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      <span className="placeName">
                        Frankfurth{" "}
                        <span className="abbr">
                          {" "}
                          (<sup>a</sup>/m)
                        </span>
                        <span className="expan">
                          a<span className="ex">m </span>M
                          <span className="ex">ain</span>
                        </span>
                      </span>
                    </span>
                  </p>
                </div>
                <div className="teidiv1" id="index.xml-body.1_div.1_div.3">
                  <h3>
                    <span className="headingNumber">1.3. </span>
                  </h3>
                </div>
              </section>
            </div>

            <section className="writing-session" id="index.xml-body.1_div.2">
              
            
            <div type="mark">
                {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
                <span type="religion" from="#mark.002.s" to="#mark.002.e"/>
                <span type="religion" from="#mark.003.s" to="#mark.003.e"/>
                {/* <span type="krieg" from="#mark.004.s" to="#mark.004.e"/> */}
                {/* <span type="geschaeftliches" from="#mark.005.s" to="#mark.005.e"/> */}
                <span type="religion" from="#mark.006.s" to="#mark.006.e"/>
                {/* <span type="musik" from="#mark.007.s" to="#mark.007.e"/> */}
                {/* <span type="bildung" from="#mark.008.s" to="#mark.008.e"/> */}
            </div>
              <div
                className="page"
                style={{
                  paddingTop: "0px",
                  paddingLeft: "80px",
                  paddingBottom: "50px",
                }}
              >
                {/* Insert Page 1 */}
                <div className="opener">
                  <span style={{ display: "inline-block" }} width="7cm">
                    &nbsp;
                  </span>
                  <div className="dateline">
                    „<span className="placeName">Barmen</span>
                    <span className="date">
                      4/7. <span className="orig">Julÿ</span>
                      <span className="corr">Juli</span> 1813
                    </span>
                  </div>
                  <a id="teaser.part.001.s">{/*anchor*/}</a>
                  <div className="enc.tagsdecl.indent-large">
                    Lieber <span className="persName">Friedrich</span>!
                  </div>
                  <a id="teaser.part.001.e">{/*anchor*/}</a>
                </div>
                <p>
                  <a id="mark.001.s">{/*anchor*/}</a>Zufolge deinen Lieben
                  Briefen vom 12
                  <span className="abbr"> (paſſ.)</span>
                  <span className="expan">
                    paſſ<span className="ex">ati</span>
                  </span>{" "}
                  haben wir das Laken und <a id="annot.001.s">{/*anchor*/}</a>
                  Caſimir<a id="annot.001.e">{/*anchor*/}</a>
                  <br className="lb" />
                  für dich gekauft, und in 1
                  <span className="g.rend.script.latin">paquet</span>
                  <span className="g.rend.script.latin">
                    <span className="abbr">F.E.</span>
                  </span>
                  durch <a id="annot.002.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="persName">
                      <span className="abbr"> (Eng.)</span>
                      <span className="expan">
                        Eng<span className="ex">elbert</span>
                      </span>
                      Sieperman
                    </span>
                  </span>
                  <a id="annot.002.e">{/*anchor*/}</a>, der juﬅ nach
                  <br className="lb" />
                  <span className="g.rend.script.latin">
                    <span className="placeName">
                      <span className="abbr"> (FFurth)</span>
                      <span className="expan">
                        F<span className="ex">rank</span>furth
                      </span>
                    </span>
                  </span>
                  in ſeine <a id="annot.003.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Condition</span>
                  <a id="annot.003.e">{/*anchor*/}</a>{" "}
                  <span className="orig">reißen</span>
                  <span className="corr">reisen</span>{" "}
                  <span className="orig">wolte</span>
                  <span className="corr">wollte</span>, dir{" "}
                  <span className="orig">zugeſant</span>
                  <span className="corr">zugesandt</span>, wir hoffen daß du
                  <br className="lb" />
                  ſolches ſchon erhalten haﬅ, und daß dir unſre Wahl gefallen
                  wird.
                </p>
                
                <span className="religion">
                <p className="enc.tagsdecl.indent-small">
                
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="orig">wir</span>
                  <span className="corr">Wir</span>{" "}
                  <span className="orig">freüen</span>
                  <span className="corr">freuen</span> uns mit dir, daß du nun
                  einen
                  <span className="orig">Freünd</span>
                  <span className="corr">Freund</span> mehr haﬅ, mit dem du
                  <br className="lb" />
                  dich unterhalten <span className="orig">kanﬅ</span>
                  <span className="corr">kanst</span>; gewöhn ihn ſchon früh
                  daran, daß ihr, wenn ihr
                  <br className="lb" />
                  aufm Zim̅er beiſamen ſeid, ein und mehr
                  <span className="g.rend.script.latin">Capitel</span> aus dem
                  Worte Gottes
                  <br className="lb" />
                  oder ſonﬅ einem guten Buche <span className="orig">leßt</span>
                  <span className="corr">lest</span>, und darüber ſprecht;
                  wenigﬅens laß
                  <br className="lb" />
                  dich nicht <span className="orig">ﬅöhren</span>
                  <span className="corr">stören</span> an dem, was du mit dem
                  guten
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="persName">Kethman</span>
                  </span>
                  <a id="annot.004.e">{/*anchor*/}</a> zu{" "}
                  <span className="orig">leßen</span>
                  <span className="corr">lesen</span>
                  <br className="lb" />
                  und zu betrachten gewohnt biﬅ. —
                  <span style={{ display: "inline-block" }} width="2em">
                    &nbsp;
                  </span>
                  <a id="teaser.part.002.s">{/*anchor*/}</a>
                  <span className="orig">wir</span>
                  <span className="corr">Wir</span>{" "}
                  <span className="orig">müßen</span>
                  <span className="corr">müssen</span> beſonders im Geiﬅlichen
                  <br className="lb" />
                  allewege auf unſren eignen Vortheil ſehen, auch in dieſem
                  Stück bin ich
                  <br className="lb" />
                  ein Kaufman und Trachte nach den meiﬅen
                  <span className="g.rend.script.latin">procenten</span>; weil
                  mir kein Menſch
                  <br className="lb" />
                  dem ich zu gefallen eine Stunde in gleichgültigen Dingen
                  verſchwenden
                  <br className="lb" />
                  <span className="orig">wolte</span>
                  <span className="corr">wollte</span>, davon
                  <span style={{ textDecoration: "line-through" }}>k</span>eine
                  Minute wiedergeben <span className="orig">kan</span>
                  <span className="corr">kann</span>,
                  <a id="annot.005.s">{/*anchor*/}</a>jener Dichter
                  <a id="annot.005.e">{/*anchor*/}</a>
                  hat recht, <span className="orig">wen</span>
                  <span className="corr">wenn</span>
                  <br className="lb" />
                  er ſagt: ich will mit meinen Stunden geitzen, ein
                  <span className="orig">Seegen</span>
                  <span className="corr">Segen</span> ſoll den andern
                  <br className="lb" />
                  reitzen,
                  <span style={{ textDecoration: "underline" }}>
                    der Augenblick
                  </span>{" "}
                  ſei mein.<a id="mark.001.e">{/*anchor*/}</a>
                  <a id="mark.002.e">{/*anchor*/}</a>
                  <a id="teaser.part.002.e">{/*anchor*/}</a>
                  
                </p>
                </span>
                
                <p className="enc.tagsdecl.indent-small">
                  <a id="annot.006.s">{/*anchor*/}</a>
                  <span className="orig">mit</span>
                  <span className="corr">Mit</span> der{" "}
                  <span className="abbr"> (L.)</span>
                  <span className="expan">
                    L<span className="ex">ieben</span>
                  </span>
                  <span className="g.rend.script.latin">Mama</span> hat es
                  ſeitdem zwar
                  <span className="orig">Langſam</span>
                  <span className="corr">langsam</span>, aber doch Gottlob
                  <br className="lb" />
                  im̅er <span className="orig">beßer</span>
                  <span className="corr">besser</span> gegangen
                  <a id="annot.006.e">{/*anchor*/}</a>, ſie iﬅ freilig noch
                  nicht frei von Krampf, allein
                  <br className="lb" />
                  wir können doch urtheilen, daß er vor und nach
                  <span className="orig">abnimt</span>
                  <span className="corr">abnimmt</span>, ſie hat kürzlich
                  <br className="lb" />
                  <span className="orig">beßer</span>
                  <span className="corr">besser</span> geſchlafen oft 5 – 5 ½
                  Stunden an einem <span className="orig">Stük</span>
                  <span className="corr">Stück</span>,
                  <span className="orig">dan</span>
                  <span className="corr">dann</span> vermehrt ſich
                  <br className="lb" />
                  auch der
                  <span className="g.rend.script.latin">
                    <span className="orig">Apetit</span>
                    <span className="corr">Appetit</span>
                  </span>
                  , ſo daß wir hoffen, daß ſie unter dem Beiﬅand
                  <br className="lb" />
                  Gottes bald einmal im <span className="orig">ſeßel</span>
                  <span className="corr">Sessel</span> ſitzen{" "}
                  <span className="orig">kan</span>
                  <span className="corr">kann</span>, morgen erwarten wir den
                  <br className="lb" />
                  <a id="annot.007.s">{/*anchor*/}</a>
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr.)
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="g.rend.script.latin">
                      <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                        (D<span className="orig">:</span>
                        <span className="corr">.</span>
                        <sup>r</sup>)
                      </span>
                      <span className="expan">Doctor</span> Osberghaus
                    </span>
                  </span>
                  <a id="annot.007.e">{/*anchor*/}</a>, der alles näher beﬅim̅en
                  wird.
                </p>
                <span className="religion">
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.003.s">{/*anchor*/}</a>
                  <span className="orig">fahre</span>
                  <span className="corr">Fahre</span> du fort{" "}
                  <span className="abbr"> (L.)</span>
                  <span className="expan">
                    L<span className="ex">ieber</span>
                  </span>
                  <span className="persName">Friedrich</span>! mit uns den
                  <span className="orig">treüen</span>
                  <span className="corr">treuen</span> Heÿland, der ja in den
                  <br className="lb" />
                  Tagen ſeines Erdenlebens der beﬅe und berühmteﬅe Arzt war und
                  allen
                  <br className="lb" />
                  half, fleißig um ſeinen <span className="orig">Seegen</span>
                  <span className="corr">Segen</span> anzuflehen; du thuﬅ
                  dadurch der
                  <span className="abbr"> (L.)</span>
                  <span className="expan">
                    L<span className="ex">ieben</span>
                  </span>
                  <span className="g.rend.script.latin">Mama</span>{" "}
                  <br className="lb" />
                  den beﬅen Dienﬅ, und haﬅ auch für dich großen Vortheil davon,
                  <span className="orig">den</span>
                  <span className="corr">denn</span>
                </p>
                </span>
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
                  <span className="pagebreak" id="index.xml-pb-d29e735">
                    {/* <a href>[Page 2]</a> */}
                  </span>
                  er, unſer König Jesus Christus iﬅ unerſchöpflich Reich, und ſo
                  <span className="g.rend.script.latin">Genereus</span>, daß ihm
                  <br className="lb" />
                  keine Bittſchrift umſonﬅ überreicht wird, ſondern uns ſelbﬅ
                  dazu ermuntert:
                  <br className="lb" />
                  bittet, ſo werdet ihr nehmen, daß{" "}
                  <span className="orig">eüre</span>
                  <span className="corr">eure</span>{" "}
                  <span className="orig">Freüde</span>
                  <span className="corr">Freude</span>
                  <span style={{ textDecoration: "underline" }}>
                    vollkom̅en
                  </span>{" "}
                  ſei
                  <a id="annot.008.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (Joh:)</span>
                    <span className="expan">
                      Joh<span className="ex">annes</span>
                    </span>
                  </span>
                  16 <span className="abbr"> (V)</span>
                  <span className="expan">
                    V<span className="ex">ers</span>
                  </span>{" "}
                  24<a id="annot.008.e">{/*anchor*/}</a>
                  <a id="mark.003.e">{/*anchor*/}</a>
                </p>
                </span>
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.004.s">{/*anchor*/}</a>
                  <a id="mark.005.s">{/*anchor*/}</a>Du haﬅ ganz recht
                  <span className="abbr"> (l.)</span>
                  <span className="expan">
                    l<span className="ex">ieber</span>
                  </span>
                  <span className="persName">Friedrich</span>, daß wir große
                  Vorzüge, vor andern Ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  genden haben, die der Krieg verſehrt hat, und wo die{" "}
                  <span className="orig">Taußende</span>
                  <span className="corr">Tausende</span> Menſchen
                  <br className="lb" />
                  unter <span className="orig">Druk</span>
                  <span className="corr">Druck</span> und Mangel{" "}
                  <span className="orig">ſeüfzen</span>
                  <span className="corr">seufzen</span>, und denen noch große
                  Gefahren bevor
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ﬅehen, mögte dieſe gnädige Schonung nur von uns allen{" "}
                  <span className="orig">erkant</span>
                  <span className="corr">erkannt</span>, und dem
                  <br className="lb" />
                  guten Gott innigﬅ verdankt werden!
                  <a id="mark.005.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <span className="orig">die</span>
                  <span className="corr">Die</span> Handlung hier aufm{" "}
                  <span className="orig">Plaze</span>
                  <span className="corr">Platze</span> und ins Reich geht noch
                  ziemlich, auch haben
                  <br className="lb" />
                  <a id="annot.009.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Hr.)
                  </span>
                  <span className="expan">
                    H<span className="ex">e</span>r
                    <span className="ex">ren</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="orgName">Gebauer</span>
                  </span>
                  und
                  <span className="g.rend.script.latin">
                    <span className="orgName">Querfurth</span>
                  </span>
                  <a id="annot.009.e">{/*anchor*/}</a> 2 gute Aufträge gegeben,
                  die bei
                  <a id="annot.010.s">{/*anchor*/}</a>
                  <sup>6</sup>/m<a id="annot.010.e">{/*anchor*/}</a>
                  <span className="orig">ﬅük</span>
                  <span className="corr">Stück</span>
                  <a id="annot.011.s">{/*anchor*/}</a>Kanten
                  <a id="annot.011.e">{/*anchor*/}</a>
                  <br className="lb" />
                  150{" "}
                  <span className="abbr">
                    {" "}
                    (D:<sup>z</sup>)
                  </span>
                  <span className="expan">
                    D<span className="ex">utzend</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="g.enc.tagsdecl.suspension.type2">
                      {" "}
                      (Lang.)
                    </span>
                    <span className="expan">
                      Lang<span className="ex">etten</span>
                    </span>
                  </span>
                  und 600 <span className="orig">ﬅük</span>
                  <span className="corr">Stück</span> ganz
                  <a id="annot.012.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Brochirte</span>
                  <a id="annot.012.e">{/*anchor*/}</a> ſich betragen, nun
                  ſchaden uns die
                  <br className="lb" />
                  <span className="orig">Kriegs unruhen</span>
                  <span className="corr">Kriegsunruhen</span> wegen den
                  <span className="placeName">
                    <span className="abbr"> (Leipz.)</span>
                    <span className="expan">
                      Leipz<span className="ex">iger</span>
                    </span>
                  </span>
                  und
                  <span className="placeName">
                    <span className="abbr">
                      (FF. <sup>a</sup>/<span className="orig">o</span>
                      <span className="corr">O</span>)
                    </span>
                    <span className="expan">
                      F<span className="ex">rank</span>f
                      <span className="ex">urther</span> a
                      <span className="ex">n</span>
                      <span className="ex">der</span>{" "}
                      <span className="orig">o</span>
                      <span className="corr">O</span>
                      <span className="ex">der</span>
                    </span>
                  </span>
                  <span className="orig">Meßen</span>
                  <span className="corr">Messen</span> und in
                  <span className="placeName">Hamburg</span> ſehr, ſo
                  <br className="lb" />
                  daß wir von 3<sup>ter</sup>{" "}
                  <span className="orig">ſorte</span>
                  <span className="corr">Sorte</span> Kanten großes Lager haben,
                  und daher mit{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Hr.)
                  </span>
                  <span className="expan">
                    H<span className="ex">e</span>r
                    <span className="ex">rn</span>
                  </span>
                  <a id="annot.013.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="persName">Krebs</span>
                  </span>
                  <a id="annot.013.e">{/*anchor*/}</a> <br className="lb" />
                  einig wurden, <a id="annot.014.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (dHr.)
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> Hr
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> H
                    <span className="ex">e</span>r<span className="ex">rn</span>
                  </span>
                  <span className="g.rend.script.latin">Kremling</span> und
                  <span className="g.rend.script.latin">Caspar</span>
                  <a id="annot.014.e">{/*anchor*/}</a> nach
                  <span className="placeName">Bremen</span>,
                  <span className="placeName">Hamburg</span>,
                  <span className="g.rend.script.latin">Flensburg</span>{" "}
                  <br className="lb" />
                  und ins <span className="placeName">Meklenburgiſche</span>
                  <span className="orig">reißen</span>
                  <span className="corr">reisen</span> zu
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span>; ſeit 8 Tagen haben ſich{" "}
                  <span className="abbr"> (dieſelb.)</span>
                  <span className="expan">
                    dieſelb<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  <span className="orig">Marſchfertig</span>
                  <span className="corr">marschfertig</span> gemacht, und ſind
                  geﬅern morgen bereits nach{" "}
                  <span className="placeName">Ham̅</span> abge
                  <br className="g.enc.tagsdecl.hyphenation.colon" />
                  ſeegelt; der Herr begleite ſie durch ſeine Engel, und gebe zu
                  ihren
                  <br className="lb" />
                  <span className="orig">bemühungen</span>
                  <span className="corr">Bemühungen</span> ſein
                  <span className="orig">gedeÿen</span>
                  <span className="corr">Gedeihen</span>.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Daß von der <a id="annot.015.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Conscription</span>
                  <a id="annot.015.e">{/*anchor*/}</a> 1813 viele Menſchen
                  gefordert wurden, dieſe
                  <br className="lb" />
                  aber ſehr klein war, und wegen dem ﬅarken
                  <span className="g.rend.script.latin">Deſertiren</span>, nicht
                  alles
                  <span className="orig">
                    nach
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    gefoderte
                  </span>
                  <span className="corr">
                    Nach
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    gefo
                    <span className="orig" />
                    <span className="corr">r</span>derte
                  </span>
                  erſetzen <span className="orig">kan</span>
                  <span className="corr">kann</span>, und nun von der Reſerve
                  von 1812 genom̅en
                  <br className="lb" />
                  wird, <span className="orig">weiß</span>
                  <span className="corr">weißt</span> du
                  <span className="orig">vieleicht</span>
                  <span className="corr">vielleicht</span> noch nicht, ſo auch,
                  daß
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Hr.)
                  </span>
                  <span className="expan">
                    H<span className="ex">err</span>
                  </span>
                  <a id="annot.016.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Trappenberg</span>
                  <a id="annot.016.e">{/*anchor*/}</a> und
                  <br className="lb" />
                  <a id="annot.017.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Caspar</span>
                  <a id="annot.017.e">{/*anchor*/}</a> von
                  <span className="orig">neüem</span>
                  <span className="corr">neuem</span> aufgerufen wurden, indem
                  es an die vertauſchten
                  <br className="lb" />
                  <span className="g.rend.script.latin">
                    <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                      (N.<sup>r</sup>)
                    </span>
                    <span className="expan">
                      N<span className="ex">ummern</span>
                    </span>
                  </span>
                  der <a id="annot.018.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="orig">Subsistuten</span>
                    <span className="corr">Substituten</span>
                  </span>
                  <a id="annot.018.e">{/*anchor*/}</a> gekom̅en war, und bis
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (N.)</span>
                    <span className="expan">
                      N<span className="ex">ummer</span>
                    </span>
                  </span>
                  127 fortgegangen iﬅ,
                  <br className="lb" />
                  wodurch viele, die ſich frei glaubten in die größte
                  Verlegenheit
                  <span className="orig">
                    ver
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    ſezt
                  </span>
                  <span className="corr">
                    ver
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    setzt
                  </span>
                  wurden, und dienen <span className="orig">müßen</span>
                  <span className="corr">müssen</span>.
                </p>
                <p className="enc.tagsdecl.indent-verysmall">
                  <span className="orig">für</span>
                  <span className="corr">Für</span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Caspar</span>
                  </span>
                  iﬅ ſchon vor 14 Tagen 1 <a id="annot.019.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type3">
                    {" "}
                    (Rempl)
                  </span>
                  <span className="expan">
                    Rempl<span className="ex">açent</span>
                  </span>
                  <a id="annot.019.e">{/*anchor*/}</a>
                  <span className="orig">eingeﬅelt</span>
                  <span className="corr">eingestellt</span> worden, der
                  <br className="lb" />
                  wie wir glauben brav iﬅ, und 1000{" "}
                  <span className="abbr"> (r)</span>
                  <span className="expan">
                    <span className="orig">r</span>
                    <span className="corr">R</span>
                    <span className="ex">eichstaler</span>
                  </span>
                  koﬅet, <a id="annot.020.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Hr.)
                  </span>
                  <span className="expan">
                    H<span className="ex">err</span>
                  </span>
                  <span className="g.rend.script.latin">Trappenberg</span>
                  <a id="annot.020.e">{/*anchor*/}</a> wird wahr
                  <br className="g.enc.tagsdecl.hyphenation.colon" />
                  scheinlich, durch ein Miniſterielles
                  <span className="g.rend.script.latin">Decret</span> frei
                  werden, weil er vor dieſem
                  <br className="lb" />
                </p>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "150px",
                }}
              >
                {/* Insert Page 3 */}
                <p>
                  <span className="pagebreak" id="index.xml-pb-d29e1301">
                    {/* <a href>[Page 3]</a> */}
                  </span>
                  Termin <span className="orig">geheÿrathet</span>
                  <span className="corr">geheirathet</span> war, und
                  <span className="orig">jezt</span>
                  <span className="corr">jetzt</span>
                  <a id="annot.021.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Proviſor</span>
                  <a id="annot.021.e">{/*anchor*/}</a> iſt! —
                  <a id="mark.004.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <span className="orig">übrigens</span>
                  <span className="corr">Übrigens</span> bleibts hier ſo
                  ziemlich beim alten außer daß der{" "}
                  <span className="orig">neüe</span>
                  <span className="corr">neue</span> Weg von
                  <br className="lb" />
                  <a id="annot.022.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">errn</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Wittenſtein</span>
                  </span>
                  <a id="annot.022.e">{/*anchor*/}</a> an bis hier am
                  <a id="annot.023.s">{/*anchor*/}</a>Brügel
                  <a id="annot.023.e">{/*anchor*/}</a>
                  bald fertig iﬅ, und durch ſeine große
                  <br className="lb" />
                  Breite und hohe <span className="orig">lage</span>
                  <span className="corr">Lage</span> brav Staub macht, und den
                  Bleichen ſchadet.
                </p>
                <div className="closer">
                  Die <span className="abbr"> (L.)</span>
                  <span className="expan">
                    L<span className="ex">iebe</span>
                  </span>
                  <span className="g.rend.script.latin">Mama</span>
                  <a id="annot.024.s">{/*anchor*/}</a>
                  <span className="persName">Patohm</span>
                  <a id="annot.024.e">{/*anchor*/}</a> deine Geschwister grüßen
                  dich mit mir herzlich und
                  <br className="lb" />
                  empfehlen dich dem gnädigen Schutze Gottes;{" "}
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="8words">
                    &nbsp;
                  </span>
                  <span className="text-right">
                  Dein <span className="orig">treüer</span>
                  <span className="corr">treuer</span> Vater{" "}
                  <span style={{ display: "inline-block" }} width="9words">
                    &nbsp;
                  </span>
                  </span>
                  <div className="signed">
                    <span className="g.rend.script.latin">
                      <span className="persName">
                        <span className="abbr"> (C.)</span>
                        <span className="expan">
                          C<span className="ex">aspar</span>
                        </span>
                        Engels
                      </span>
                    </span>
                    .
                  </div>
                </div>
                <span style={{ display: "inline-block" }} width="1lines">
                  &nbsp;
                </span>
                <span className="religion">
                <p>
                  <span className="abbr">N. S.</span> <br className="lb" />
                  <a id="mark.006.s">{/*anchor*/}</a>
                  <span className="orig">gerne</span>
                  <span className="corr">Gerne</span> hörte ich nächﬅenſ ein
                  Bisgen von den Pfingﬅfeÿertagen, wie du
                  <br className="lb" />
                  ſolche verlebt, wer da gepredigt, wie die erﬅe Predigt von
                  <a id="annot.025.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">errn</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Spies</span>
                  </span>
                  <a id="annot.025.e">{/*anchor*/}</a> <br className="lb" />
                  <span className="orig">aufgenomen</span>
                  <span className="corr">aufgenommen</span> worden ſei, ob du
                  auch einmal
                  <a id="annot.026.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (dHr)
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> Hr
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> H
                    <span className="ex">errn</span>
                  </span>
                  <span className="abbr">P.</span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Paſſavent</span>
                  </span>
                  <a id="annot.026.e">{/*anchor*/}</a> beſucht
                  <br className="lb" />
                  haﬅ, was der gute <a id="annot.027.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">err</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="persName">de Neufville</span>
                  </span>
                  <a id="annot.027.e">{/*anchor*/}</a> macht
                  <span className="abbr">p.</span>
                </p>
                <p className="enc.tagsdecl.indent-verysmall">
                  <span className="orig">auch</span>
                  <span className="corr">Auch</span> wäre es
                  <span className="orig">ſchiklich</span>
                  <span className="corr">schicklich</span>,
                  <span className="orig">wan</span>
                  <span className="corr">wann</span> du
                  <a id="annot.028.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (dHr.)
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> Hr
                  </span>
                  <span className="expan">
                    d<span className="ex">en</span> H
                    <span className="ex">errn</span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                      (P <span className="orig">:</span>
                      <span className="corr">.</span>
                      <sup>r</sup>)
                    </span>
                    <span className="expan">
                      P<span className="ex">asto</span>r
                    </span>
                    <span className="persName">Spies</span>
                  </span>
                  <a id="annot.028.e">{/*anchor*/}</a>
                  <span className="orig">bewillkomen</span>
                  <span className="corr">bewillkommen</span> würdeﬅ,
                  <br className="lb" />
                  er <span className="orig">kent</span>
                  <span className="corr">kennt</span> uns gut, und es würde ihn{" "}
                  <span className="orig">freüen</span>
                  <span className="corr">freuen</span>.
                </p>
                <p>
                  <span className="orig">nun</span>
                  <span className="corr">Nun</span> noch eine
                  <span className="orig">leiße</span>
                  <span className="corr">leise</span> Frage ans Ohr, ſind die
                  Briefe an <a id="annot.029.s">{/*anchor*/}</a>
                  <span className="g.enc.tagsdecl.suspension.type1"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">err</span>
                  </span>
                  <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                    (P<span className="orig">:</span>
                    <span className="corr">.</span>
                    <sup>r</sup>)
                  </span>
                  <span className="expan">
                    P<span className="ex">asto</span>r
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Nourneÿ</span>
                  </span>
                  <a id="annot.029.e">{/*anchor*/}</a> <br className="lb" />
                  <a id="annot.030.s">{/*anchor*/}</a>
                  <span className="abbr"> (Mﬅr)</span>
                  <span className="expan">
                    M<span className="ex">ei</span>st
                    <span className="ex">e</span>r
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="persName">Schinnenburg</span>
                  </span>
                  <a id="annot.030.e">{/*anchor*/}</a> und
                  <span className="g.rend.script.latin">
                    <a id="annot.031.s">{/*anchor*/}</a>
                    <span className="persName">Hölsberg</span>
                    <a id="annot.031.e">{/*anchor*/}</a>
                  </span>
                  auf der Poﬅ?<a id="mark.006.e">{/*anchor*/}</a>
                </p>
                </span>
                <p>
                  <a id="mark.007.s">{/*anchor*/}</a>
                  <span className="orig">und</span>
                  <span className="corr">Und</span> endlich, wie hält ſich dein
                  <span className="orig">flügel</span>
                  <span className="corr">Flügel</span>,
                  <a id="mark.008.s">{/*anchor*/}</a>und wie
                  <span className="g.rend.script.latin">avancirt</span>
                  <span className="persName">Fridrich</span>{" "}
                  <br className="lb" />
                  in der <span className="g.rend.script.latin">Muſic</span>
                  <a id="mark.007.e">{/*anchor*/}</a> und im
                  <span className="g.rend.script.latin">Franzöſiſchen</span>?
                  <span style={{ display: "inline-block" }}>&nbsp;</span>wäre es
                  nicht gut,
                  <span className="orig">wan</span>
                  <span className="corr">wann</span> du
                  <br className="lb" />
                  auch das
                  <span className="g.rend.script.latin">
                    <span className="orig">Jtalieniſche</span>
                    <span className="corr">Italienische</span>
                  </span>
                  mit <span className="orig">fortſezteﬅ</span>
                  <span className="corr">fortsetztest</span>?
                  <a id="mark.008.e">{/*anchor*/}</a>
                </p>
                <p>
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (dHr.)
                  </span>
                  <span className="expan">
                    <span className="orig">d</span>
                    <span className="corr">D</span>
                    <span className="ex">em</span> Hr
                  </span>
                  <span className="expan">
                    <span className="orig">d</span>
                    <span className="corr">D</span>
                    <span className="ex">em</span> H
                    <span className="ex">errn</span>
                  </span>
                  <a id="annot.032.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="persName">Ekard</span>
                  </span>
                  <a id="annot.032.e">{/*anchor*/}</a> meine beﬅe
                  <span className="orig">empfehlung</span>
                  <span className="corr">Empfehlung</span>
                </p>
              </div>
              
            </section>
          </div>
        </div>
      </div>

      </Brief_wrapper>
    </Layout>
  );
}
