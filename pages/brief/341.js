import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "342";
  });

  console.log(item);
  const ners = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);
  console.log(ners);

  return (
    <Layout>
      <Head>
        <title>Brief 341 {date}</title>
      </Head>
      <Brief_wrapper data={item}>
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
                  style={{ paddingTop: "100px", paddingBottom: "160px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="g.rend.script.latin">
                        <span style={{ textDecoration: "underline" }}>
                          via Ostende
                        </span>
                        <br />
                        <span style={{ display: "inline-block" }} width="1line">
                          &nbsp;
                        </span>{" "}
                        An Frau
                        <span className="persName">Elise Engels</span>
                        <br />
                        <span className="abbr"> (Adr.)</span>
                        <span className="expan">
                          Adr<span className="ex">e</span>s
                          <span className="ex">se</span>
                        </span>
                        Herrn{" "}
                        <span className="orgName">Ermen &amp; Engels</span>
                        <br />
                        <span style={{ display: "inline-block" }} width="1line">
                          &nbsp;
                        </span>
                        <span
                          style={{ display: "inline-block" }}
                          width="3words"
                        >
                          &nbsp;
                        </span>
                        in
                        <br />
                        <span
                          style={{ display: "inline-block" }}
                          width="3words"
                        >
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
                        <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                          (p<sup>r</sup>.)
                        </span>
                        <span className="expan">
                          p<span className="ex">e</span>r
                        </span>
                        <span className="placeName">Cöln.</span>
                        <br />
                      </span>
                    </p>
                  </div>
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
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="10cm">
                      &nbsp;
                    </span>
                    <div className="dateline">
                      <span className="g.rend.script.latin">
                        <span className="placeName">Manchester</span>
                        <span className="date">
                          10. <span className="abbr"> (Sept.)</span>
                          <span className="expan">
                            Sept<span className="ex">ember</span>
                          </span>
                          1858
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="opener">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <div className="salute">
                      Liebe <span className="persName">Eliſe</span>,
                    </div>
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                  </div>
                  <p>
                    Geﬅern Morgen erhielt ich Deinen{" "}
                    <span className="abbr"> (l.)</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>
                    <span className="expan">
                      l<span className="ex">etzen</span>
                    </span>{" "}
                    Brief und gleichzeitig
                    <br className="lb" />
                    einen aus
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>
                    </span>
                    von <span className="persName">Hermann</span> und
                    <span className="persName">Emil</span>. Mit Ver
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gnügen ſah ich daraus, daß es Dir wieder beſſer ging, und
                    <br className="lb" />
                    Du bald wieder ganz hergeﬅellt biﬅ.
                    <a id="teaser.part.002.s">{/*anchor*/}</a>
                    <a id="mark.001.s">{/*anchor*/}</a>
                    <span className="reisen">
                      Aus
                      <span className="persName">Friedrichs</span> Brief
                      <br className="lb" />
                      haﬅ Du meine <span className="orig">glükliche</span>
                      <span className="corr">glückliche</span> Ankunft geſehen.
                      <a id="teaser.part.002.e">{/*anchor*/}</a>
                      Ich war richtig
                      <br className="lb" />
                      um 12 Uhr Mittags hier.<a id="mark.001.e">{/*anchor*/}</a>
                    </span>
                    <a id="teaser.part.003.s">{/*anchor*/}</a>Ich wohne wieder
                    bei
                    <span className="persName">Friedrich</span>,
                    <br className="lb" />
                    es war grade ein hübches Schlafzimmer frei.
                    <span className="persName">Friedrich</span>
                    <br className="lb" />
                    ſieht wieder recht wohl und eben ſo ﬅark wie früher
                    <br className="lb" />
                    aus.<a id="teaser.part.003.e">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    <a id="mark.003.s">{/*anchor*/}</a>Diesmal fand ich hier die
                    Bilanzarbeiten
                    <br className="lb" />
                    wirklich ſchon fertig, und das Reſultat
                    <span style={{ textDecoration: "underline" }}>
                      über
                    </span>{" "}
                    mein
                    <br className="lb" />
                    Erwarten günﬅig, nämlich eben ſo ﬅark, wie das
                    <br className="lb" />
                    <span className="orig">verfloßene</span>
                    <span className="corr">verflossene</span> Jahr, und meinen
                    Antheil ſogar
                    <br className="lb" />
                    noch um ₤ 12,– größer, da das Bündelgeſchäft etwas
                    <br className="lb" />
                    mehr gegen voriges Jahr geliefert hatte. Dieſe Reſultate
                    <br className="lb" />
                    ſind wirklich erﬅaunlich, und um ſo erfreulicher, als
                    <br className="lb" />
                    das Geſchäft eine ſolidere Richtung genommen hat,
                    <br className="lb" />
                    indem <span className="g.rend.script.latin">
                      Spools
                    </span>{" "}
                    und Bündel ſich mehr ausdehnen, und
                    <br className="lb" />
                    wir demnach weniger von dem Abſatz an die weniger
                    <br className="lb" />
                    ſoliden Fabrikanten abhängig ſind. –
                    <span style={{ textDecoration: "underline" }}>
                      Einen Sorgenﬅein
                    </span>
                    ,
                    <br className="lb" />
                    liebe Mutter, kann ich Dir nun vollﬅändig abnehmen,
                    <br className="lb" />
                    den nämlich wegen der
                    <span className="g.rend.script.latin">
                      Deposita &amp; Capitalien
                    </span>
                    . Es iﬅ{" "}
                    <span style={{ textDecoration: "underline" }}>jetzt</span>
                    <br className="lb" />
                    ſchon hinreichend Geld hier vorräthig um 20 à 30,000
                    <span className="abbr"> (Thlr)</span>
                    <span className="expan">
                      Th<span className="ex">a</span>l
                      <span className="ex">e</span>r
                    </span>
                    <br className="lb" />
                    heraus ziehen zu können, wenn es durch irgend
                    <br className="lb" />
                    eine Kündigung nothwendig würde.
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    Wir haben in
                    <br className="lb" />
                    dieſem <span className="orig">Augenblik</span>
                    <span className="corr">Augenblick</span> hier ₤ 18,000 – in
                    Wechſel
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    beim
                    <span className="g.rend.script.latin">Banquier</span>
                    <br className="lb" />
                    ﬅehen.
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        Peter <span className="abbr"> (E.)</span>
                        <span className="expan">
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>
                    bekommt davon ₤ 5600 – mithin bleiben
                    <br className="lb" />
                    ﬅark ₤ 12,000 – oder <span className="abbr"> (rh)</span>
                    <span className="expan">Reichstaler</span>
                    <span style={{ textDecoration: "underline" }}>
                      84,000
                    </span>{" "}
                    –
                    <span style={{ textDecoration: "underline" }}>
                      disponible
                    </span>{" "}
                    übrig, dabei ſind
                    <br className="lb" />
                    wir hier nichts ſchuldig und haben noch
                    <sup className="sup" id="txt.add001">
                      <span style={{ textDecoration: "underline" }}>
                        <span className="orig">bezalte</span>
                        <span className="corr">bezahlte</span>
                      </span>
                    </sup>
                    Baumwolle
                    <br className="lb" />
                    für
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      c<sup>a</sup>.
                    </span>{" "}
                    7 Monate vorräthig. Mit
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Gottfr)</span>
                        <span className="expan">
                          Gottfr<span className="ex">ied</span>
                        </span>
                        <span className="abbr"> (E.)</span>
                        <span className="expan">
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>
                    habe ich in Bezug
                    <br className="lb" />
                    auf den <span className="g.rend.script.latin">
                      Fond
                    </span>{" "}
                    die nöthige Abſprache getroffen, er iﬅ ganz
                    <br className="lb" />
                    damit einverﬅanden, und ſomit wäre dieſe Sache in Ordnung.
                    <br className="lb" />
                    Er ſieht auch wohl ein, daß
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">überflüßiger</span>
                      <span className="corr">überflüssiger</span>
                    </span>
                    <span className="g.rend.script.latin">Fond</span> ebenſo
                    wohl
                    <br className="lb" />
                    nachtheilig für ein Geſchäft iﬅ, als zu geringer, und
                    deshalb
                    <br className="lb" />
                    entﬅeht bei einem Geſchäfte, worin
                    <span style={{ textDecoration: "underline" }}>
                      monatlich
                    </span>{" "}
                    der
                    <span className="g.rend.script.latin">Fond</span> außer
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="16cm">
                      &nbsp;
                    </span>
                    den
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
                  <p>
                    <span style={{ textDecoration: "underline" }}>außer</span>{" "}
                    den Zinſen um ₤ 1000 – wächﬅ, bald die Frage,
                    <br className="lb" />
                    wohin mit dem <span className="orig">überflüßigen</span>
                    <span className="corr">überflüssigen</span> Gelde? wobei es
                    dann am
                    <br className="lb" />
                    einfachﬅen iﬅ daß ich einen Theil davon zu mir
                    <br className="lb" />
                    nehme, und die läﬅigen
                    <span className="g.rend.script.latin">Capitalien</span>{" "}
                    abtrage.
                    <br className="lb" />
                    <span style={{ textDecoration: "underline" }}>Jetzt</span>,
                    liebe Mutter wirﬅ du mir doch wohl recht
                    <br className="lb" />
                    geben, wenn ich behauptete daß es hier bald
                    <br className="lb" />
                    überſchäumen würde! Wir wollen übrigens Gott
                    <br className="lb" />
                    danken, der alles ſo zu unſerm{" "}
                    <span className="orig">Glük</span>
                    <span className="corr">Glück</span> und Segen gelenkt
                    <br className="lb" />
                    hat. Wegen
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        Anton <span className="abbr"> (E.)</span>
                        <span className="expan">
                          E<span className="ex">rmen</span>
                        </span>
                      </span>
                    </span>
                    iﬅ hier noch nichts geſchehen
                    <br className="lb" />
                    und <span className="orig">beſchloßen</span>
                    <span className="corr">beſchlossen</span>, einﬅweilen nur
                    wird er von
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Gottfrd)</span>
                        <span className="expan">
                          Gottf<span className="ex">rie</span>d
                        </span>
                      </span>
                    </span>
                    <br className="lb" />
                    und wahrſcheinlich auch von
                    <span className="persName">
                      <span className="g.rend.script.latin">Peter</span>
                    </span>
                    unterﬅützt. Hätte
                    <br className="lb" />
                    der dumme
                    <span className="persName">
                      <span className="g.rend.script.latin">Anton</span>
                    </span>
                    nicht durch ſeinen albernen Contract
                    <br className="lb" />
                    alles verdorben, ſo daß er noch ein
                    <span style={{ textDecoration: "underline" }}>
                      paar Jahre
                    </span>{" "}
                    warten
                    <br className="lb" />
                    könnte ſo hätte man vielleicht in Verbindung mit
                    <br className="lb" />
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Gottfrd)</span>
                        <span className="expan">
                          Gottf<span className="ex">rie</span>d
                        </span>
                      </span>
                    </span>
                    etwas Vernünftiges an der
                    <span className="g.rend.script.latin">Sieg</span> beginnen
                    <br className="lb" />
                    können. Ich habe noch Niemand geſehen, der ſich
                    <br className="lb" />
                    ſo in ſeiner eignen Schlinge gefangen hätte!
                    <a id="mark.003.e">{/*anchor*/}</a>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="reisen">
                      <a id="mark.002.s">{/*anchor*/}</a>Wegen meiner Abreiſe
                      kann ich noch nichts
                      <br className="lb" />
                      näheres ſagen; wenn eure Briefe nicht gekom̅en
                      <br className="lb" />
                      wären ſo würde ich ſchon morgen abgereiﬅ ſein,
                      <br className="lb" />
                      da ich hier fertig war. Jetzt werde ich aber noch ein paar
                      <br className="lb" />
                      Tage hier bleiben, und vielleicht noch vorher nach
                      <br className="lb" />
                      <span className="placeName">
                        <span className="g.rend.script.latin">Oldham</span>
                      </span>
                      gehen.<a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                    Von
                    <span style={{ textDecoration: "underline" }}>nächﬅem</span>
                    <a id="index.xml-anchor-d29e629" />
                    <span style={{ textDecoration: "line-through" }}>
                      <span style={{ textDecoration: "underline" }}>
                        Dienﬅag
                      </span>
                    </span>
                    <sup className="sup" id="txt.add003">
                      <span style={{ textDecoration: "line-through" }}>
                        Mittwoc
                      </span>
                      <span className="strikethrough">h</span>
                    </sup>
                    <sup className="sup" id="txt.add004">
                      <span className="strikethrough">Dienﬅag</span>
                    </sup>
                    <span style={{ textDecoration: "underline" }}>an</span>
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> übrigens
                    <br className="lb" />
                    die Hausthüre <span className="orig">blos</span>
                    <span className="corr">bloß</span> abſchließen, und den
                    <span style={{ textDecoration: "underline" }}>
                      untern
                    </span>{" "}
                    extra
                    <br className="lb" />
                    Wirbel{" "}
                    <span style={{ textDecoration: "underline" }}>
                      nicht
                    </span>{" "}
                    herum drehen, ſo daß ich von außen mit
                    <br className="lb" />
                    meinem <span className="orig">Schlüßel</span>
                    <span className="corr">Schlüssel</span> öffnen kann. Auch
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> ein Nachtlicht
                    <br className="lb" />
                    nebﬅ Leuchter im Vorhaus hinſetzen, wenn das Gas noch
                    <br className="lb" />
                    nicht brennt. Im
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>le
                    <span style={{ textDecoration: "underline" }}>tztern</span>
                    <a id="txt.hi.underline001.int.e">{/*anchor*/}</a> Falle
                    <span className="orig">blos</span>
                    <span className="corr">bloß</span> den Leuchter.
                  </p>
                  <div className="closer">
                    Nun Adieu liebe <span className="persName">Eliſe</span>;
                    grüße die 3 Töchter ſowie{" "}
                    <span style={{ textDecoration: "line-through" }}>her</span>
                    <br className="lb" />
                    die übrigen herzlich von mir.
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="1cm">
                      &nbsp;
                    </span>
                    <div className="note" id="txt.margin001">
                      <span className="noteLabel">Note: </span>
                      <p>
                        <a id="txt.hi.underline002.int.s">{/*anchor*/}</a>D
                        <span style={{ textDecoration: "underline" }}>
                          ienﬅag
                        </span>
                        <a id="txt.hi.underline002.int.e">{/*anchor*/}</a>
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        <span style={{ textDecoration: "underline" }}>
                          Abend
                        </span>
                      </p>
                    </div>
                    <span style={{ display: "inline-block" }} width="11cm">
                      &nbsp;
                    </span>
                    Mit treuer Liebe{" "}
                    <span style={{ display: "inline-block" }} width="13cm">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Dein
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="13cm">
                        &nbsp;
                      </span>
                      <span className="persName">Friedrich</span>
                    </div>
                  </div>
                  <br className="lb" />
                  <p>
                    Einlage an <span className="persName">Hermann</span> laß mit
                    beiſchließen
                  </p>
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
                </div>
              </section>
            </div>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
