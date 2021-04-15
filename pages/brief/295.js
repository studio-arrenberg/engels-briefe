import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "295";
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
        <title>Brief 306 {date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        {/* brief text goes here */}
        {/* Insert Themenmarkierungen */}
        {/* <!-- Themenmarkierung --> */}
        <div type="mark">
          {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
          {/* <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e" /> */}
          <span type="reisen" corresp="#fe294.text" />
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
                  style={{ paddingTop: "230px", paddingBottom: "197px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span className="g.rend.script.latin">{" "}
                          Madame <span className="persName">Elise Engels</span>.
                          <br className="lb" />{" "}
                          <span className="small-adress">
                            <span className="g.enc.tagsdecl.suspension.type3">
                              {" "}Adrs. </span>
                            <span className="expan">
                              Adr<span className="ex">e</span>s
                              <span className="ex">se</span>
                            </span>
                            <span className="persName">
                              Mad<sup>m</sup>. de Griesheim
                            </span>
                          </span>
                          <br className="lb" />{" "}
                          <span
                            className="text-center"
                            style={{
                              width: "300px",
                              marginLeft: "30px",
                            }}
                          >
                            {" "}
                            <span className="small-adress">
                              à<br className="lb" />{" "}
                            </span>
                            <span className="placeName">Hamm</span>
                            <br className="lb" />{" "}
                            <span className="small-adress">
                              puis
                              <span className="placeName">Münster</span>
                              <br className="lb" />{" "}
                              <span style={{ textDecoration: "underline" }}>
                                en <span className="placeName">Westphalie</span>
                                . -
                              </span>
                            </span>
                          </span>{" "}
                        </span>
                      </p>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.2">
                      <h3>
                        <span className="headingNumber">1.2. </span>
                      </h3>
                    </div>
                  </div>
                </section>
              </div>

              <section className="writing-session page-small" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "106px",
                    paddingLeft: "80px",
                    paddingBottom: "130px",
                  }}
                >
                  {/* Insert Page 1 */}

                  <div className="opener">
                    <div className="dateline text-right">
                        <span className="g.rend.script.latin">{" "}
                          <span className="placeName">Paris</span>{" "}
                        </span>
                        den{" "}
                        <span className="date">
                          16.{" "}
                          <span className="g.rend.script.latin">{" "}August</span>{" "}
                          1827
                        </span>
                        .
                    </div>
                    
                  </div>
                  <p>

                    <a id="teaser.part.001.s">{/*anchor*/}</a>Seit Vorge
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern Abend{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wir hier in{" "}
                    <span className="g.rend.script.latin">{" "}Paris</span> liebe
                    <br className="lb" />{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>
                    ,<a id="teaser.part.001.e">{/*anchor*/}</a> wo wir zwar etwas ermüdet nach einer <a id="annot.001.s">{/*anchor*/}</a>32{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ündigen
                    <br className="lb" />{" "}
                    Fahrt auf der Diligence<a id="annot.001.e">{/*anchor*/}</a>, aber <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr vergnügt an
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    kamen. In{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Boulogne</span>
                    </span>
                    waren wir in einem Hôtel{" "}
                    <br className="lb" />{" "}
                    welches <span className="orig">ſ</span>{" "}
                    <span className="corr">s</span>o{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr auf
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (engli<span className="orig">ſ</span>
                      <span className="corr">s</span>ch</span>
                    <span className="expan">
                      engli<span className="orig">ſ</span>
                      <span className="corr">s</span>ch
                      <span className="ex">en</span>
                    </span>{" "}
                    Fuß eingerichtet war
                    <br className="lb" />{" "}
                    daß. <span className="orig">ſ</span>
                    <span className="corr">s</span>elb
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ämmtliche Dome
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>iken kaum franzö
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>i
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ch
                    <br className="lb" />{" "}
                    ver<span className="orig">ﬅ</span>
                    <span className="corr">st</span>anden. Wir glaubten fa
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> noch in
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}England</span>
                    </span>
                    <br className="lb" />{" "}
                    zu <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿn; auch trug die Rechnung,
                    noch <span className="orig">ſ</span>
                    <span className="corr">s</span>o ziemlich
                    <br className="lb" />{" "}
                    das engli<span className="orig">ſ</span>
                    <span className="corr">s</span>che Gepräge. Hier in
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Paris</span>
                    </span>{" "}
                    waren wir
                    <br className="lb" />{" "}
                    nun auf einmal mitten in
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Frankreich</span>
                    </span>
                    , und ich
                    <br className="lb" />{" "}
                    kann wohl <span className="orig">ſ</span>
                    <span className="corr">s</span>agen, ich wurde{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr angenehm durch
                    <br className="lb" />{" "}
                    die franzö<span className="orig">ſ</span>
                    <span className="corr">s</span>i
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>che Arti
                    <span className="overwritten">k</span>
                    <span className="add">g</span>keit und Zuvorkom̅enheit,
                    <br className="lb" />{" "}
                    womit wir in un<span className="orig">ſ</span>
                    <span className="corr">s</span>erm
                    <span className="g.rend.script.latin">{" "}Hôtel</span> empfangen
                    wurden
                    <br className="lb" />{" "}
                    durch die Bequemlichkeit welche wir über<span className="unclear">^</span>
                    <span style={{ display: "inline-block" }}>&nbsp;</span>all
                    fanden
                    <br className="lb" />{" "}
                    überra<span className="orig">ſ</span>
                    <span className="corr">s</span>cht. Wir be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ellten ein kleines
                    Abendbrot,
                    <br className="lb" />{" "}
                    und bekamen <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr gute Gerichte. Es
                    charakteri<span className="orig">ſ</span>
                    <span className="corr">s</span>irt
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o das Ganze wenn ich Dir{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>age, daß z. B. die beiden
                    <br className="lb" />{" "}
                    <span className="orig">
                      Waßerfla<span className="orig">ſ</span>
                      <span className="corr">s</span>chen
                    </span>
                    <span className="corr">Wasserflaschen</span>
                    <sup className="sup" id="txt.add001"> es war ein warmer Tag</sup>{" "}
                    in Eis ge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>anden hatten, und{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o
                    <br className="lb" />{" "}
                    noch rund um eine dünne Eis<span className="orig">ſ</span>
                    <span className="corr">s</span>chale hatten. Man
                    <br className="lb" />{" "}
                    glaubt etwa alles die<span className="orig">ſ</span>
                    <span className="corr">s</span>es{" "}
                    <span className="orig">müße</span>
                    <span className="corr">müsse</span> mit Geld auf
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gewogen werden, allein im Gegentheil finde ich
                    <br className="lb" />{" "}
                    alles <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr wohlfeil. In
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}London</span>{" "}
                    </span>
                    dagegen <span className="orig">ſ</span>
                    <span className="corr">s</span>au
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en
                    <br className="lb" />{" "}
                    einem die Schillinge (26 <span className="orig">ﬅ</span>
                    <span className="corr">st</span>über) um die
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      Köpfe
                    </span>
                    , Ohren
                    <br className="lb" />{" "}
                    und was hat man am Ende, - ein Glas Bier,
                    <br className="lb" />{" "}
                    ein <span className="orig">Stük</span>
                    <span className="corr">Stück</span>
                    <span className="g.rend.script.latin">{" "}Beaf-Steak</span> - 4
                    Kartoffeln, eine{" "}
                    <span className="orig">Aepfeltorte</span>
                    <span className="corr">Äpfeltorte</span>
                    <br className="lb" />{" "}
                    das i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> alles. Nein
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}London</span>
                    </span>
                    {" "}kann den Vergleich
                    <br className="lb" />{" "}
                    mit
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Paris</span>
                    </span>{" "}
                    in keinem Betracht au<span className="orig">ſ</span>
                    <span className="corr">s</span>halten.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="3em">
                      &nbsp;
                    </span>
                    <a id="mark.001.s">{/*anchor*/}</a>Am andern Morgen{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chickten wir gleich zu
                    <br className="lb" />{" "}
                    <span className="orgName">
                      <span className="g.rend.script.latin">{" "}
                        Andry &amp; Guibout
                      </span>
                    </span>
                    , und zu meiner Freude brachte
                    <br className="lb" />{" "}
                    man mir Deinen Brief vom{" "}
                    <span className="date">30. Juli</span>, der
                    <br className="lb" />{" "}
                  </p>
                </div>
                <div
                  className="page "
                  style={{
                    paddingTop: "70px",
                    paddingLeft: "120px",
                    paddingBottom: "5px",
                    height: "892px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <p>
                    Gottlob <span className="orig">ſ</span>{" "}
                    <span className="corr">s</span>o gute Nachrichten für michenthielt.{" "}
                    <a id="mark.001.e">{/*anchor*/}</a>
                    Außeror
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    dentlich freute mich die{" "}
                    <span className="orig">Beßerung</span>
                    <span className="corr">Besserung</span> von
                    <span className="g.rend.script.latin">{" "}Lipkas</span>{" "}
                    <br className="lb" />{" "}
                    <span className="persName">Kinde</span>. Gott gebe, daß es
                    wieder herge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ellt werde.
                    <br className="lb" />{" "}
                    <a id="mark.002.s">{/*anchor*/}</a>
                    <span className="liebe">
                      <a id="teaser.part.002.s">{/*anchor*/}</a>Aber Herzens Ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ichtchen Du{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chreib
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> mir lange nicht
                      <br className="lb" />{" "}
                      fleißig genug; bedenke doch ich habe nun er
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                      <br className="lb" />{" "}2 Briefe von Dir, und die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er letzte i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> wieder 17
                      <br className="lb" />{" "}
                      Tage alt. Antworte mir doch{" "}
                      <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>
                      <span style={{ textDecoration: "underline" }}>
                        umgehen
                      </span>
                      d<a id="txt.hi.underline001.int.e">{/*anchor*/}</a>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o wie
                      <br className="lb" />{" "}
                      du die<span className="orig">ſ</span>
                      <span className="corr">s</span>en Brief erhält
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> damit ich doch einmal
                      <br className="lb" />{" "}
                      fri<span className="orig">ſ</span>
                      <span className="corr">s</span>che Nachricht bekomme.{" "}
                      <a id="teaser.part.002.e">{/*anchor*/}</a>
                      Zwar erwarte ich
                      <br className="lb" />{" "}
                      in den er<span className="orig">ﬅ</span>
                      <span className="corr">st</span>en Tagen einen neuen Brief
                      von Dir,
                      <br className="lb" />{" "}
                      aber doch kann ich mir es nicht recht erklären warum
                      <br className="lb" />{" "}
                      noch keiner hier i<span className="orig">ﬅ</span>
                      <span className="corr">st</span>.
                      <a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                    Die Nachrichten welche deine
                    <br className="lb" />{" "}
                    <span style={{ display: "inline-block" }} width="-8em">
                      &nbsp;
                    </span>
                    <span className="add">
                      
                      <span className="g.enc.tagsdecl.suspension.type1">
                        näch<span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="expan">
                        näch<span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                        <span className="ex">en</span>
                      </span>
                      
                    </span>
                    Briefe enthalten, werden auch meinen hie
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>igen
                    <br className="lb" />{" "}
                    Aufenthalt be<span className="orig">ſ</span>
                    <span className="corr">s</span>timmen. - Ich möchte{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr gerne
                    <br className="lb" />{" "}
                    mit <span className="abbr"> Hr</span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="persName">
                      <span className="g.rend.script.latin">{" "}Bredt</span>
                    </span>
                    wieder zurükrei<span className="orig">ſ</span>
                    <span className="corr">s</span>en, und da er
                    <br className="lb" />{" "}
                    wenig<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ens 14 Tage hier zu thun
                    hat, und ich die
                    <br className="lb" />{" "}
                    Zeit{" "}
                    <sup className="sup" id="txt.add002">
                      auch
                    </sup>{" "}
                    vollauf zu thun habe, um nur das Sehens
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    würdig<span className="orig">ﬅ</span>
                    <span className="corr">st</span>e durchzugehen;{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o möchte ich jetzt nicht
                    <br className="lb" />{" "}
                    auf eine Woche mehr oder weniger{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen.
                  </p>
                  <p>
                    <span className="orig">Ueberhaupt</span>
                    <span className="corr">Überhaupt</span> werde ich immer mehr
                    überzeugt
                    <br className="lb" />{" "}
                    daß <span className="placeName">Paris</span> der Ort i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, den wir einmal mit
                    <br className="lb" />{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">{" "}August</span>
                    </span>
                    und
                    <span className="persName">
                      <span className="g.rend.script.latin">{" "}Luise</span>
                    </span>
                    zu<span className="orig">ſ</span>
                    <span className="corr">s</span>ammen be
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>uchen{" "}
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>.
                    <a id="index.xml-anchor-d29e524" />
                    <br className="lb" />{" "}
                    Alles was Pracht und Eleganz heißt{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ieht man
                    <br className="lb" />{" "}
                    hier vereint, in Kun<span className="orig">ﬅ</span>
                    <span className="corr">st</span>
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>achen überbieten die
                    <br className="lb" />{" "}
                    Museen und Aus<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ellungen einander, kurz
                    <br className="lb" />{" "}
                    es bleibt nichts in der Art zu wün
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen übrig.
                    <br className="lb" />{" "}
                    Dabei lebt man hier, was für wenig Geld
                    <br className="lb" />{" "}
                    vortrefflich, und <span className="orig">Speiß</span>
                    <span className="corr">Speis</span> und Trank bleibt doch
                    <br className="lb" />{" "}
                    immer eine Haupt<span className="orig">ſ</span>
                    <span className="corr">s</span>ache mit. Ich weiß nicht,
                    <br className="lb" />{" "}
                    ob es <span className="orig">am</span>
                    <span className="corr">an</span> mir oder an den herrlich zu
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    <br />
                    <p> und schon aus dies er Rücksicht will ich mich gerne mit allem bekannt machen um später einen guten F…
                    </p>
                        
                    <span
                      style={{   top: "-450px",
                      }}
                      className="vertical-links"
                      id="Note3"
                    >
                      <span style={{ display: "block" }} className="p">
                        Grüße alle dort herzlich von mir, und{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>age mir auch ob{" "}
                        <span className="persName">Caspar</span> glücklich mit
                        <br className="lb" />{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>einer Hälfte unter Segel
                        i<span className="orig">ﬅ</span>
                        <span className="corr">st</span> und wie lange{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>eine Fahrt dauert.
                        <br className="lb" />{" "}
                        Am{" "}
                        <span className="date">
                          <span className="strike-through" style={{ textDecoration: "line-through" }}>
                            24.
                          </span>
                          <span className="add">25.</span>
                          <span className="g.rend.script.latin">{" "}August</span>
                        </span>
                        {" "}liebe{" "}
                        <span className="persName">
                          Eli<span className="orig">ſ</span>
                          <span className="corr">s</span>e
                        </span>{" "}
                        kann<span className="orig">ﬅ</span>
                        <span className="corr">st</span> Du mir zuletzt nach
                        <span className="placeName">
                          <span className="g.rend.script.latin">{" "}Paris</span>
                        </span>
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chreiben.
                      </span>
                    </span>
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "150px",
                    paddingBottom: "55px",
                    height: "894px"

                  }}
                >
                  {/* Insert Page 3 */}
                  <p>
                    bereiteten Gerichten liegt, ein Gericht{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chmekt
                    </span>
                    <span className="corr">schmeckt</span>
                    <br className="lb" />{" "}
                    mir noch <span className="orig">beßer</span>
                    <span className="corr">besser</span> wie das andere. Wir{" "}
                    <span className="orig">eßen</span>
                    <span className="corr">essen</span> hier
                    <br className="lb" />{" "}
                    nicht an <a id="annot.002.s">{/*anchor*/}</a>Table
                    <span className="g.rend.script.latin">{" "}dʼhote</span>
                    <a id="annot.002.e">{/*anchor*/}</a> sondern Portionen Weise im
                    <br className="lb" />{" "}
                    <a id="annot.003.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">{" "}
                      Palais Royal
                    </span>{" "}bei
                    <span className="g.rend.script.latin">{" "}Prevot</span>
                    <a id="annot.003.e">{/*anchor*/}</a>. Doch Du{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>oll
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> wohl bange
                    <br className="lb" />{" "}
                    werden, ich würde verwöhnt allein{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿ nur ganz
                    <br className="lb" />{" "}
                    ruhig, zu Hau<span className="orig">ſ</span>
                    <span className="corr">s</span>e wird es mir drum eben{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o gut
                    <br className="lb" />{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chmeken
                    </span>
                    <span className="corr">schmecken</span>. Der Ab
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ich zwi
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}London</span>
                    </span>
                    i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> nur{" "}
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>
                    </span>{" "}
                    zu
                    <br className="lb" />{" "}
                    groß, wo wir für un<span className="orig">ſ</span>
                    <span className="corr">s</span>re guten{" "}
                    <a id="annot.004.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">{" "}
                      Sovereigne d'ors
                    </span>
                    <a id="annot.004.e">{/*anchor*/}</a> eigent
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    lich mi<span className="orig">ſ</span>
                    <span className="corr">s</span>erabel{" "}
                    <span className="orig">gegeßen</span>
                    <span className="corr">gegessen</span> haben. Doch{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>age davon
                    <br className="lb" />{" "}
                    nichts, es <span className="orig">müßen</span>
                    <span className="corr">müssen</span> noch mehrere aus
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Barmen</span>
                    </span>
                    nach
                    <br className="lb" />{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}London</span>
                    </span>
                    , und <span className="orig">ſ</span>
                    <span className="corr">s</span>on
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> werden sie{" "}
                    <span className="orig">
                      abge<span className="orig">ſ</span>
                      <span className="corr">s</span>chrekt
                    </span>
                    <span className="corr">abgeschreckt</span>.
                    <br className="lb" />{" "}
                    Was un<span className="orig">ſ</span>
                    <span className="corr">s</span>er Logis angebelangt{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind wir
                    </span>{" "}
                    wohnen wir
                    <br className="lb" />{" "}
                    wie die Prinzen. Wir bewohnen nämlich
                    <br className="lb" />{" "}
                    hier im{" "}
                    <span className="g.rend.script.latin">{" "}
                      Hôtel de l'Europe
                    </span>
                    , dicht neben dem
                    <span className="g.rend.script.latin">{" "}
                      Palais
                      <br className="lb" />{" "}
                      Royal
                    </span>
                    , und im Mittelpunkt der Stadt - einen Theil
                    <br className="lb" />{" "}
                    der <span className="orig">ſ</span>
                    <span className="corr">s</span>ogenannten{" "}
                    <span className="g.rend.script.latin">{" "}Entrevols</span>, oder
                    die 2
                    <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                      <sup>t</sup>.
                    </span>
                    Etage - be<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ehend
                    <br className="lb" />{" "}
                    aus 4 Stuben und ganz für eine voll
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ändige
                    <br className="lb" />{" "}
                    Familie eingerichtet, und alles für - 10
                    <span className="g.rend.script.latin">{" "}francs</span>{" "}
                    <span className="abbr"> p</span>
                    <span className="expan">
                      p<span className="ex">ro</span>
                    </span>{" "}
                    Tag.
                    <br className="lb" />{" "}
                    Damit Du einen Begriff von un<span className="orig">ſ</span>
                    <span className="corr">s</span>rer Haushaltung
                    <br className="lb" />{" "}
                    bekomm<span className="orig">ﬅ</span>
                    <span className="corr">st</span> habe ich dir eine Zeichnung
                    von{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (un<span className="orig">ſ</span>
                      <span className="corr">s</span>er</span>
                    <span className="expan">
                      un<span className="orig">ſ</span>
                      <span className="corr">s</span>er
                      <span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    brillant meublirten Stuben beigelegt. In{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      (beid</span>
                    <span className="expan">
                      beid<span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    Schlaf<span className="orig">ﬅ</span>
                    <span className="corr">st</span>uben gehen{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chöne{" "}
                    <a id="annot.005.s">{/*anchor*/}</a>Pendülen
                    <a id="annot.005.e">{/*anchor*/}</a>. Die
                    <br className="lb" />{" "}Zeichnung hebe auf damit ich euch einmal alles
                    <br className="lb" />{" "}erzählen kann. Doch ich muß
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (aufhör</span>
                    <span className="expan">
                      aufhör<span className="ex">en</span>
                    </span>{" "}
                    ich habe
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon zuviel geplaudert. Indeß{" "}
                    Du <span className="orig">ſ</span>
                    <span className="corr">s</span>ieh
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> aus allem
                    <br className="lb" />{" "}
                    daß es mir hier behagt und das macht dir Freude.
                    <br className="lb" />{" "}
                    Um deine Briefe mache kein Couvert mehr,{" "}
                    <a id="index.xml-anchor-d29e818" />
                    die Hand
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chrift und das{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      (Po<span className="orig">ﬅ</span>
                      <span className="corr">st</span>zeich</span>
                    <span className="expan">
                      Po<span className="orig">ﬅ</span>
                      <span className="corr">st</span>zeich
                      <span className="ex">en</span>
                    </span>{" "}
                    unter<span className="orig">ſ</span>
                    <span className="corr">s</span>cheidet un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re Briefe hin
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    länglich auch nimm nicht <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="orig">dikes</span>
                    <span className="corr">dickes</span> Po
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>papier,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chreibe aber
                    <br className="lb" />{" "}
                    recht viel darauf. Mit deiner Abrei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e von
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Hamm</span>
                    </span>
                    mache
                    <br className="lb" />{" "}
                    es nur ganz nach Deiner Bequemlichkeit und{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>öre dich an
                    <br className="lb" />{" "}
                    meinen Brief
                    <span className="orig">
                      a
                      <span className="damage">
                        <span className="supplied"><span className="hide-normalisiert">⟨</span>us Bóu<span className="hide-normalisiert">⟩</span></span>
                      </span>
                      logne
                    </span>
                    <span className="corr">aus Boulogne</span> nicht, wo ich
                    eigentlich etwas
                    <br className="lb" />{" "}
                    Heimweh hatte.
                    <span className="damage">
                      <span className="gap"> [...] </span>
                      <span className="supplied"><span className="hide-normalisiert">⟨</span>wir n<span className="hide-normalisiert">⟩</span></span>
                    </span>
                    <span className="orig" />
                    <span className="corr">oc</span>h 14 Tage hier bleiben{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o werden{" "}
                      
                      <span className="text-right">die Adresse behalte aber bei
                      </span>
                    </p>
                 
                    <sup>,</sup>
                  <div className="vertical-links" style={{width: "1000px", top: "-345px", left: "-575px"}}id="txt.add005">
                    <p>
                      wir <span className="orig">ohngefähr</span>
                      <span className="corr">ungefähr</span> gegen den {" "}
                      <span className="date">
                        5 <span className="abbr"> Septbr</span>
                        <span className="expan">
                          Sept<span className="ex">em</span>b
                          <span className="ex">e</span>r
                        </span>
                      </span> {" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>
                        dort
                      </span>{" "}
                      in
                      <span className="placeName">
                        <span className="g.rend.script.latin">{" "}Barmen</span>
                      </span> {" "}
                      ankom̅en. Es thut ja auch nichts wenn
                      <br className="lb" />{" "}
                      die Eltern <span className="orig">ſ</span>
                      <span className="corr">s</span>chon einige Tage vor meiner Ankunft in
                      <span className="placeName">
                        <span className="g.rend.script.latin">{" "}Barmen</span>
                      </span> {" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind. Die Sache mit
                      <br className="lb" />{" "}
                      <span className="persName">
                        <span className="g.rend.script.latin">{" "}
                          Albert Griesheim
                        </span>
                      </span>
                      {" "}hat mich recht gefreut; dem
                      <span className="g.rend.script.latin">{" "}
                        ollen Hezken
                      </span>{" "}
                      wird die Rei<span className="orig">ſ</span>
                      <span className="corr">s</span>e nach
                      <span className="placeName">
                        <span className="g.rend.script.latin">{" "}Berlin</span>
                      </span>
                      <br className="lb" />{" "}
                      auch nicht unangenehm <span className="orig">ſ</span>
                      <span className="corr">s</span>eÿn. Nun lebe recht wohl {" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Herzensweibch </span>
                      <span className="expan">
                        Herzensweibch<span className="ex">en</span>
                      </span> {" "}
                      <span className="orig">küße</span>
                      <span className="corr">küsse</span> die Kinder und in
                      <br className="lb" />{" "}Gedanken auch einmal recht tüchtig
                      <span style={{ display: "inline-block" }} width="1words">
                        &nbsp;
                      </span>{" "}
                      Deinen {" "}
                      <span className="persName">Friedrich</span>
                    </p>
                  </div>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "70px",
                    paddingBottom: "590px",
                  }}
                >
                  {/* Insert Page 4 */}

                  <p>
                    mein
                    <span style={{ textDecoration: "underline" }}>
                      e <span className="g.rend.script.latin">{" "}Adre</span>
                    </span>
                    <span className="g.rend.script.latin">sse</span> i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>:
                    <br className="lb" />{" "}
                    <span className="g.rend.script.latin">{" "}
                      An{" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon-sup">M<span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <sup>r</sup>. 
                      </span>
                      {" "}
                      <span className="expan">
                        M<span className="ex">on</span>s
                        <span className="ex">ieu</span>r
                      </span>{" "}
                      <span className="persName">Charles Bredt</span>{" "}
                      <br className="lb" />{" "}
                      <span className="abbr">Adr.</span>
                      <span className="expan">
                        Adr<span className="ex">esse</span>
                      </span>
                      {" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon-sup">Me<span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <sup>r</sup>. </span>
                      <span className="expan">
                        Mes<span className="ex">sieu</span>r
                        <span className="ex">s</span>
                      </span>
                      {" "}
                      <span className="orgName">
                        Andry &amp;
                        <br className="lb" />{" "}
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        Guibout
                      </span>
                      <br className="lb" />{" "}
                      <span style={{ display: "inline-block" }} width="1words">
                        &nbsp;
                      </span>
                      Rue S<span className="abbr">t.</span>
                      <span className="expan">
                        <span className="ex">ain</span>t
                      </span>{" "}
                      Denis
                      <br className="lb" />{" "}
                      <span style={{ display: "inline-block" }} width="2words">
                        &nbsp;
                      </span>
                      <span className="placeName">Paris</span>
                    </span>
                    <br className="lb" />{" "}
                    Falls Du die frühere ver
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (lor</span>
                    <span className="expan">
                      verlor<span className="ex">en</span>
                    </span>{" "}
                    hätte<span className="orig">ﬅ</span>
                    <span className="corr">st</span>.
                  </p>
                  <span style={{ display: "inline-block" }} width="1line">
                    &nbsp;
                  </span>
                  <p>
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Minch </span>
                      <span className="expan">
                        Minch<span className="ex">en</span>
                      </span>{" "}
                      Sparenberg{" "}
                    </span>
                    könnte
                    <br className="lb" />{" "}
                    auch wohl an{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr</span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span style={{ display: "inline-block" }} width="1letter">
                      &nbsp;
                    </span>
                    <span className="persName">Schmitz</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>agen
                    <br className="lb" />{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span> daß Du direct nach
                    <br className="lb" />{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">{" "}Paris{" "}</span>
                    </span>
                    jetzt <span className="orig">ſ</span>
                    <span className="corr">s</span>chreib
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>; er möchte
                    <br className="lb" />{" "}<span className="orig">ſ</span>
                    <span className="corr">s</span>on
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> auf deine Briefe warten.
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
