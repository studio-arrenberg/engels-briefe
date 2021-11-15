import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "342";
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
        <title>Brief 342 {date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        {/* brief text goes here */}
        {/* Insert Themenmarkierungen */}
        {/* <!-- Themenmarkierung --> */}
        <div type="mark">
          {/* <span type="reisen" from="#mark.001.s" to="#mark.001.e" /> */}
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
                  style={{ paddingTop: "160px", paddingBottom: "220px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className=" g.rend.script.latin">
                        <span
                          className="xsmall"
                          style={{
                            marginBottom: "20px",
                          }}
                        >
                          v<span
                          style={{
                            textDecoration: "underline",
                          }}
                        >ia Ostend</span>e
                        </span>
                        <br />
                        <span
                          className="small serif" 
                          style={{ display: "inline-block" }}
                          width="1line" 
                        >
                          An Frau
                        </span>{" "}
                        <span className="persName">Elise Engels</span>
                        <br />
                        <span className="small">
                          <span className="abbr"> Adr.</span>
                          <span className="expan">
                            Adr<span className="ex">e</span>s
                            <span className="ex">se</span>
                          </span>{" "}
                          <span
                          className="serif" 
                          style={{ display: "inline-block" }}
                          width="1line" 
                        >dHerrn</span>{" "}
                          <span className="orgName">Ermen &amp; Engels</span>
                        </span>
                        <br />
                        <span
                          className="text-center"
                          style={{ display: "block", width: "500px" }}
                        >
                          <span className="xsmall serif">in</span>
                          <br />
                          <span style={{ display: "inline-block" }}>
                            &nbsp;
                          </span>
                          <span className="placeName">Engelskirchen</span>
                          <br />
                          <span
                            style={{ display: "inline-block" }}
                            width="4words"
                          >
                            &nbsp;
                          </span>
                          <span className="xsmall serif">
                            <span className="expan">
                              p<span className="ex">e</span><sup>r</sup>.
                            </span>
                            <span className="placeName"> Cöln.</span>
                          </span>
                        </span>
                        <br />
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              <section
                className="writing-session page-small"
                id="index.xml-body.1_div.2"
              >
                <div
                  className="page"
                  style={{
                    paddingTop: "15px",
                    paddingLeft: "120px",
                    paddingBottom: "70px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="10cm">
                      &nbsp;
                    </span>
                    <div className="dateline text-right" style={{paddingRight: "250px",}}>
                      <span className="g.rend.script.latin">
                        <span className="placeName">Manchester </span>
                        <span className="date">
                          10. <span className="abbr"> Sept.</span>
                          <span className="expan">
                            Sept<span className="ex">ember</span>
                          </span>
                          {" "}1858
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="opener">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <div className="salute">
                      Liebe{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>
                      ,
                    </div>
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                  </div>
                  <p>
                    Ge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern Morgen erhielt ich
                    Deinen <span className="abbr"> l.</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>
                   {" "}
                    Brief und gleichzeitig
                    <br className="lb" /> einen aus{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>{" "}
                    </span>
                    von <span className="persName makierung">Hermann</span> und{" "}
                    <span className="persName makierung">Emil</span>. Mit Ver
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gnügen <span className="orig">ſ</span>
                    <span className="corr">s</span>ah ich daraus, daß es Dir
                    wieder be<span className="orig">ſ</span>
                    <span className="corr">s</span>
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>er ging, und
                    <br className="lb" /> Du bald wieder ganz herge
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ellt bi
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>.{" "}
                    <a id="teaser.part.002.s">{/*anchor*/}</a>
                    <a id="mark.001.s">{/*anchor*/}</a>
                    <span className="reisen">
                      Aus <span className="persName">Friedrichs</span> Brief
                      <br className="lb" /> ha<span className="orig">ﬅ</span>
                      <span className="corr">st</span> Du meine{" "}
                      <span className="orig">glükliche</span>
                      <span className="corr">glückliche</span> Ankunft ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ehen,{" "}
                      <a id="teaser.part.002.e">{/*anchor*/}</a>
                      ich war richtig
                      <br className="lb" /> um 12 Uhr Mittags hier.
                      <a id="mark.001.e">{/*anchor*/}</a>
                    </span>{" "}
                    <a id="teaser.part.003.s">{/*anchor*/}</a><span className="orig">J</span><span className="corr">I</span>ch wohne wieder
                    bei <span className="persName">Friedrich</span>,
                    <br className="lb" /> es war grade ein hüb<span className="orig">ſ</span><span className="corr">s</span>ches Schlafzimmer
                    frei. <span className="persName">Friedrich</span>
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>ieht wieder recht wohl und
                    eben <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ark wie früher
                    <br className="lb" /> aus.{"  "}
                    <a id="teaser.part.003.e">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    <a id="mark.003.s">{/*anchor*/}</a><span className="business">Diesmal fand ich hier die
                    Bilanzarbeiten
                    <br className="lb" /> wirklich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon fertig, und das Re
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ultat{" "}
                    <span className="underline">über</span> mein
                    <br className="lb" /> Erwarten gün
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ig, nämlich eben{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ark, wie das
                    <br className="lb" />{" "}
                    <span className="orig">verfloßene</span>
                    <span className="corr">verflossene</span> Jahr, und meinen
                    Antheil <span className="orig">ſ</span>
                    <span className="corr">s</span>ogar
                    <br className="lb" /> noch um ₤ 12,– größer, da das <span className="makierung">Bündelge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chäft</span> etwas
                    <br className="lb" /> mehr gegen voriges Jahr geliefert
                    hatte. Die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e Re
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ultate
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wirklich er
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>aunlich, und um{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o erfreulicher, als
                    <br className="lb" /> das Ge<span className="orig">ſ</span>
                    <span className="corr">s</span>chäft eine{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>olidere Richtung genommen
                    hat,
                    <br className="lb" /> indem{" "}
                    <span className="g.rend.script.latin makierung">Spools</span> und
                    Bündel <span className="orig">ſ</span>
                    <span className="corr">s</span>ich mehr ausdehnen, und
                    <br className="lb" /> wir demnach weniger von dem Ab
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>atz an die weniger
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>oliden Fabrikanten abhängig{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind. –{" "}
                    <span className="underline">
                    <small className="orig">L</small>Einen Sorgen<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ein
                    </span>
                    ,
                    <br className="lb" /> liebe Mutter, kann ich Dir nun voll
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ändig abnehmen,
                    <br className="lb" /> den nämlich wegen der{" "}
                    <span className="g.rend.script.latin makierung">
                      Deposita &amp; Capitalien
                    </span>
                    . Es i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>{" "}
                    <span className="underline">jetzt</span>
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>chon hinreichend Geld hier
                    vorräthig um 20 à 30,000 <span className="abbr">Thlr</span>
                    <span className="expan">
                      Th<span className="ex">a</span>l
                      <span className="ex">e</span>r
                    </span>
                    <br className="lb" /> <span className="orig">heraus^ziehen</span><span className="corr">herausziehen</span> zu können, wenn es durch
                    irgend
                    <br className="lb" /> eine Kündigung nothwendig würde.{"  "}
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    Wir haben in
                    <br className="lb" /> die<span className="orig">ſ</span>
                    <span className="corr">s</span>em{" "}
                    <span className="orig">Augenblik</span>
                    <span className="corr">Augenblick</span> hier ₤ 18,000 – in{" "}
                    <span className="makierung">Wech<span className="orig">ſ</span>
                    <span className="corr">s</span>el{" "}</span>
                    <span className="abbr">u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    beim <span className="g.rend.script.latin">Banquier</span>
                    <br className="lb" /> <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ehen.{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin makierung">
                        Peter <span className="abbr"> E.</span>
                        <span className="expan">
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>
                    {" "}bekommt davon ₤ 5600 – mithin bleiben
                    <br className="lb" /> <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ark ₤ 12,000 – oder{" "}
                    <span className="abbr"> rh</span>
                    <span className="expan">Reichstaler</span>{" "}
                    <span className="underline">84,000</span> –{" "}
                    <span className="double-underline sans makierung">disponible</span> übrig, dabei{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind
                    <br className="lb" /> wir hier nichts{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chuldig und haben noch
                    <sup className="sup" id="txt.add001">{" "}
                      <span className="orig">b<span className="underline">ezalt</span>e</span>
                      <span className="corr">bezahlte</span>
                    </sup>{" "}
                    Baumwolle
                    <br className="lb" /> für{" "}
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      c<sup>a</sup>.
                    </span>{" "}
                    7 Monate vorräthig. Mit{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin makierung">
                        <span className="abbr"> Gottfr</span>
                        <span className="expan">
                          Gottfr<span className="ex">ied</span>
                        </span>
                        <span className="abbr"> E.</span>
                        <span className="expan">
                          {" "}
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>{" "}
                    habe ich in Bezug
                    <br className="lb" /> auf den{" "}
                    <span className="g.rend.script.latin">Fond</span> die
                    nöthige Ab<span className="orig">ſ</span>
                    <span className="corr">s</span>prache getroffen, er i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> ganz
                    damit <br className="lb" /> einver
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>anden, und{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>omit wäre die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e Sache in Ordnung.
                    <br className="lb" /> Er <span className="orig">ſ</span>
                    <span className="corr">s</span>ieht auch wohl ein, daß{" "}
                    
                    <span className="makierung">
                      <span className="underline">
                        <span className="orig">überflüßiger</span>
                        <span className="corr">überflüssiger</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">Fond</span> eben
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o wohl
                      <br className="lb" /> nachtheilig für ein Ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chäft
                    </span>
                    {" "}i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, als zu geringer, und
                    deshalb
                    <br className="lb" /> ent<span className="orig">ﬅ</span>
                    <span className="corr">st</span>eht bei einem Ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chäfte, worin{" "}
                    <span className="underline">monatli</span>ch der{" "}
                    <span className="g.rend.script.latin">Fond</span> <span className="orig">außer
                    <br className="lb" /> <span style={{ marginLeft: "430px"}}> den</span></span>
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "35px",
                    paddingLeft: "120px",
                    paddingBottom: "137px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <p>
                    <span className="business">
                    a<span className="underline">ußer</span> den Zin
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en um ₤ 1000 – wäch
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, bald die Frage,
                    <br className="lb" /> wohin mit dem{" "}
                    <span className="orig">überflüßigen</span>
                    <span className="corr">überflüssigen</span> Gelde? wobei es
                    dann am
                    <br className="lb" /> einfach<span className="orig">ﬅ</span>
                    <span className="corr">st</span>en i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> daß ich einen Theil davon
                    zu mir
                    <br className="lb" /> nehme, und die lä
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>igen{" "}
                    <span className="g.rend.script.latin">Capitalien</span>{" "}
                    abtrage.
                    <br className="lb" />{" "}
                    <span className="underline">Jetzt</span>, liebe Mutter wir
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> du mir doch wohl recht
                    <br className="lb" /> geben, wenn ich behauptete daß es hier
                    bald
                    <br className="lb" /> über<span className="orig">ſ</span>
                    <span className="corr">s</span>chäumen würde! Wir wollen
                    übrigens Gott
                    <br className="lb" /> danken, der alles{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o zu un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>erm{" "}
                    <span className="orig">Glük</span>
                    <span className="corr">Glück</span> und Segen gelenkt
                    <br className="lb" /> hat. Wegen{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin makierung">
                        Anton <span className="abbr"> E.</span>
                        <span className="expan">
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>
                    {" "}
                    i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> hier noch nichts ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chehen
                    <br className="lb" /> und{" "}
                    <span className="orig">
                      be<span className="orig">ſ</span>
                      <span className="corr">s</span>chloßen
                    </span>
                    <span className="corr">
                      be<span className="orig">ſ</span>
                      <span className="corr">s</span>chlossen
                    </span>
                    , ein<span className="orig">ﬅ</span>
                    <span className="corr">st</span>weilen nur wird er von{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        <span className="abbr"> Gottfrd</span>
                        <span className="expan">
                          Gottf<span className="ex">rie</span>d
                        </span>
                      </span>
                    </span>
                    <br className="lb" /> und wahr
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>cheinlich auch von{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Peter</span>
                    </span>{" "}
                    unter<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ützt. Hätte der
                    <br className="lb" /> dumme{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Anton</span>
                    </span>{" "}
                    nicht durch <span className="orig">ſ</span>
                    <span className="corr">s</span>einen <span className="makierung">albernen Contrakt</span>
                    <br className="lb" /> alles verdorben,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o daß er noch ein{" "}
                    <span className="underline">paar Jahre</span> warten
                    <br className="lb" /> könnte <span className="orig">ſ</span>
                    <span className="corr">s</span>o hätte man vielleicht in
                    Verbindung mit
                    <br className="lb" />{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        <span className="abbr"> Gottfr</span>
                        <span className="expan">
                          Gottf<span className="ex">rie</span>d
                        </span>
                      </span>
                    </span>{" "}
                    etwas Vernünftiges an der{" "}
                    <span className="g.rend.script.latin">Sieg</span> beginnen
                    <br className="lb" /> können. <span className="orig">J</span><span className="corr">I</span>ch habe noch Niemand ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen, der{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>o in{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>einer eignen Schlinge
                    gefangen hätte!
                    <a id="mark.003.e">{/*anchor*/}</a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="reisen">
                      <a id="mark.002.s">{/*anchor*/}</a>Wegen meiner Abrei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e kann ich noch nichts
                      <br className="lb" /> näheres{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>agen; wenn eure Briefe
                      nicht <span className="orig">gekom̅en</span><span className="corr">gekommen</span>
                      <br className="lb" /> wären{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o würde ich{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chon morgen abgereist{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ein,
                      <br className="lb" /> da ich hier fertig war. Jetzt werde
                      ich aber noch ein paar
                      <br className="lb" /> Tage hier bleiben, und vielleicht
                      noch vorher nach
                      <br className="lb" />{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin makierung">Oldham</span>
                      </span>{" "}
                      gehen.<a id="mark.002.e">{/*anchor*/}</a>
                    </span>{" "}
                    Von{" "}
                      n<span className="underline">äch<span className="orig">ﬅ</span>
                      <span className="corr">st</span>em
                    </span>{" "}
                    <a id=" index.xml-anchor-d29e629" />
                    <span className="orig metamark">*</span>
                    <span className="corr">Dienstag Abend </span>
                    <span
                      className="strike-through  underline orig">
                        Dienﬅag
                      </span>{" "}
                    <sup className="sup" id="txt.add003">
                      <span
                        className="strike-through"
                        style={{ textDecoration: "line-through" }}
                      >
                        Mittwoc
                      </span>
                      <span className="strikethrough">h</span>
                    </sup>
                    <sup className="sup orig" id="txt.add004">
                        Dienﬅag
                    </sup>{" "}
                    <span className="underline">an</span>{" "}
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> übrigens
                    <br className="lb" /> die Hausthüre{" "}
                    <span className="orig">blos</span>
                    <span className="corr">bloß</span> ab
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chließen, und den{" "}
                    <span className="underline">untern</span> extra
                    <br className="lb" /> Wirbel{" "}
                    <span className="underline">nicht</span> herum drehen,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o daß ich von außen mit
                    <br className="lb" /> meinem{" "}
                    <span className="orig">Schlüßel</span>
                    <span className="corr">Schlüssel</span> öffnen kann. Auch{" "}
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> ein Nachtlicht
                    <br className="lb" /> neb<span className="orig">ﬅ</span>
                    <span className="corr">st</span> Leuchter im Vorhaus hin
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>etzen, wenn das <span className="makierung">Gas</span> noch
                    <br className="lb" /> nicht brennt. <span className="orig">J</span><span className="corr">I</span>m{" "}
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>le
                    <span className="underline">tztern</span>
                    <a id="txt.hi.underline001.int.e">
                      {/*anchor*/}
                    </a> Falle bloß den Leuchter.
                  </p>
                  <div className="closer">
                    Nun Adieu liebe{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>
                    ; grüße die 3 Töchter <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}wie{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      her
                    </span>
                    <br className="lb" /> die übrigen herzlich von mir.
                    <br className="lb" />{" "}
                    <div className="note orig" id="txt.margin001" style={{
                      marginLeft: "60px",
                      marginTop: "20px"
                    }}>
                      <span className="noteLabel metamark">*</span>
                        <a id="txt.hi.underline002.int.s">{/*anchor*/}</a>D
                        <span className="underline">
                          ien<span className="orig">ﬅ</span>
                          <span className="corr">st</span>ag
                        </span>
                        <a id="txt.hi.underline002.int.e">{/*anchor*/}</a>
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        <span className="underline">Abend</span>
                    </div>
                    <span style={{ display: "inline-block" }} width="11cm">
                      &nbsp;
                    </span>

                    <div  style={{
                      position: "absolute",
                      right: "120px",
                      width: "200px",
                      marginTop: "-50px",
                      textAlign: "center"
                    }}>
                      Mit treuer Liebe{" "}
                      <span style={{ display: "inline-block" }} width="13cm">
                        &nbsp;
                      </span>
                      <div className="">Dein <br className="lb" />{" "}{" "}{" "}Friedrich</div>
                    </div>
                  </div>
                  <br className="lb" />{" "}
                  <p>
                    Einlage an <span className="persName">Hermann</span> laß mit
                    bei<span className="orig">ſ</span>
                    <span className="corr">s</span>chließen
                  </p>
                </div>
                <div
                  className={`stellenerläuterungen ${
                    isStellen ? "activ" : null
                  }`}
                >
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "860px",
                    }}
                  >
                    <hr />
                    <label>Hermann</label>
                    <p>
                      Hermann Engels (1822–1905), zweiter Sohn von Friedrich
                      Engels sen. und Elise Engels, geb. van Haar. Ab 1855
                      verheiratet mit Emma Croon (1834–1916).{" "}
                    </p>
                  </div>

                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "860px",
                    }}
                  >
                    <hr />
                    <label>Emil</label>
                    <p>
                      Emil Engels (1828–1884), dritter Sohn und fünftes Kind von
                      Friedrich Engels sen. und Elise Engels, geb. van Haar. Ab
                      1853 verheiratet mit Charlotte Bredt (1822–1912).
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "1080px",
                    }}
                  >
                    <hr />
                    <label>Bündelgeschäft</label>
                    <p>
                    Garn wurde in 'Bündeln' oder auf 'Spulen' gehandelt. Ein 'Bündel' enthielt eine Anzahl von zusammengelegten 'Strähnen' von Garn mit einer bestimmten Länge. Die Garnlänge in einer 'Strähne' und die Anzahl der 'Strähnen' in einem 'Bündel' waren nach Herkunft des Garns unterschiedlich.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "1165px",
                    }}
                  >
                    <hr />
                    <label>Spools</label>
                    <p>Engl. "Spulen".</p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "1290px",
                    }}
                  >
                    <hr />
                    <label>Deposita & Capitalien</label>
                    <p>
                      Verwahrte Finanzmittel sowie Kapital, das durch die Firma
                      Ermen & Engels erworben wurde.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "1370px",
                    }}
                  >
                    <hr />
                    <label>Wechsel</label>
                    <p>
                      Bei einem Wechsel handelt es sich um ein Wertpapier,
                      welches den Aussteller oder eine dritte Person zu der
                      unmittelbaren Auszahlung einer Summe innerhalb einer
                      bestimmten Frist verpflichtet.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "1390px",
                    }}
                  >
                    <hr />
                    <label>Peter Ermen</label>
                    <p>
                      Peter Albert Ermen (1800–1887), Teilhaber der Firma Ermen
                      & Engels in Manchester und Engelskirchen, zog sich 1852
                      aus der Geschäftsführung zurück. Ab 1831 verheiratet mit
                      <br />Sarah Forster (1806–?).
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "1460px",
                    }}
                  >
                    <hr />
                    <label>disponible</label>
                    <p>Frz. "verfügbar".</p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "1500px",
                    }}
                  >
                    <hr />
                    <label>Gottfr Ermen</label>
                    <p>
                      Peter Jacob Gottfried Ermen (1811–1899), Teilhaber und
                      Chef der Firma Ermen & Engels in Engelskirchen.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "1570px",
                    }}
                  >
                    <hr />
                    <label>überflüssiger […] Geschäfte</label>
                    <p>
                      Friedrich Engels sen. spielt hier auf die beste
                      Möglichkeit im Umgang mit Firmenkapital an: Eine große
                      Summe Firmenkapital unberührt liegen zu lassen betrachtet
                      er als ebenso schädlich wie mit einer zu geringen Summe
                      Geld zu hohe Ausgaben machen zu wollen.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "2140px",
                    }}
                  >
                    <hr />
                    <label>Anton Ermen</label>
                    <p>
                      Gottfried Anton Ermen (1807–1885), Vertreter der Firma
                      Ermen & Engels in Engelskirchen.
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "2190px",
                    }}
                  >
                    <hr />
                    <label>albernen Contrakt</label>
                    <p>
                      Knieriem stellt den Sachverhalt schlüssig dar: „Gottfried
                      Anton Ermen hatte 1853 ein Grundstück mit Wassergefälle
                      in Stein an der Sieg erworben. Hier sollte eine neue
                      Baumwollspinnerei mit 16.000 Spindeln eingerichtet werden.
                      Die Aufwendungen dafür sollten durch Friedrich Engels sen.
                      und Gottfried Anton Ermen je zur Hälfte aufgebracht
                      werden. Dieser Plan zerschlug sich, da sich Gottfried
                      Anton Ermen kurz vor dem Vertragsschluss mit Friedrich
                      Engels sen. an einer Kölner Spinnereigesellschaft
                      beteiligte und dort auch das Wassergefälle an der Sieg
                      einbrachte." (Michael Knieriem (Hg.): Die Herkunft des Friedrich Engels. Trier 1991, S. 641. )
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "2430px",
                    }}
                  >
                    <hr />
                    <label>Oldham</label>
                    <p>Stadt im Nordwesten Englands.</p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "2490px",
                    }}
                  >
                    <hr />
                    <label>Wirbel</label>
                    <p>Verschlussvorrichtung einer Tür.</p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "2540px",
                    }}
                  >
                    <hr />
                    <label>Gas</label>
                    <p>
                      Barmen besaß seit 1848 Gasanschluss – 10 Jahre später als
                      Elberfeld (vgl. Michael Knieriem (Hg.): Die Herkunft des Friedrich Engels. Trier 1991, S. 564, Anm. 3 zu Brief 305b).
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung"
                    style={{
                      top: "2610px",
                    }}
                  >
                    <hr />
                    <label>3 Töchter</label>
                    <p>
                      Gemeint sind die drei noch lebenden gemeinsamen Töchter
                      Marie Engels (1824–1901), Hedwig Engels (1830–1904) und<br />
                      Elise Engels (1834–1912).
                    </p>
                  </div>
                  <div
                    className="stellenerläuterung push-right"
                    style={{
                      top: "2670px",
                    }}
                  >
                    <hr />
                    <label>beischließen</label>
                    <p>Einen Brief (an einen Dritten) beilegen.</p>
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
