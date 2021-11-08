import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "307";
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
        <title>Brief 307{date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        {/* brief text goes here */}
        {/* Insert Themenmarkierungen */}
        {/* <!-- Themenmarkierung --> */}
        <div type="mark">
          {/* <span type="reisen" corresp="#mark.001" /> */}
          {/* <span type="reisen" corresp="#mark.002" /> */}
          {/* <span type="reisen" corresp="#mark.003"/> */}
          {/* <span type="geschaeftliches" corresp="#mark.004"/> */}
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
                  style={{ paddingTop: "270px", paddingBottom: "245px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="address">
                        An{" "}
                        <span className="persName">
                          Frau{" "}
                          <span className="g.rend.script.latin">
                            {" "}
                            Elise Engels
                          </span>
                        </span>
                        <br />
                        <span className="small">
                          <span className="sans orig">
                            Adr∮.
                          </span>
                          <span className="corr">
                            Adresse:
                          </span>{" "}
                          Herren{" "}
                          <span className="persName">
                            <span className="abbr">
                              (
                              <span className="g.rend.script.latin">
                                {" "}
                                Friedr.
                              </span>
                            </span>
                            <span className="expan">
                              <span className="g.rend.script.latin">
                                {" "}
                                Friedr<span className="ex">ich</span>
                              </span>
                            </span>{" "}
                            <span className="g.rend.script.latin">
                              {" "}
                              Engels{" "}
                            </span>
                          </span>
                          <span className="hi">&amp; <span className="sans ">Co.</span></span> <br />
                        </span>
                        <span
                          className="text-center"
                          style={{
                            marginLeft: "100px",
                            display: "block",
                            width: "260px",
                          }}
                        >
                          <span className="xsmall">
                            in
                            <br />
                          </span>
                          <span className="placeName sans">Barmen</span>
                          .<br />
                          <span
                            className="xsmall"
                            style={{ marginTop: "0px", display: "block" }}
                          >
                            bei <span className="placeName sans">Elberfeld.</span>
                            &nbsp;
                          </span>
                        </span>
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
                    paddingTop: "35px",
                    paddingLeft: "80px",
                    paddingBottom: "75px",
                  }}
                >
                  {/* Insert Page 1 */}

                  <span className="dateline text-right" style={{paddingRight: "250px",}}>
                    <span className="g.rend.script.latin">
                      {" "}
                      London 26. Juli 1838.
                    </span>
                  </span>
                  <div className="opener">
                    <div className="salute">
                      Liebe{" "}
                      <span className="persName">
                        {" "}
                        <span className="g.rend.script.latin"> Elise</span>
                      </span>
                      .
                    </div>
                  </div>

                  <span className="reisen">
                    <p id="mark.001">
                      Soeben Donner<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ag Morgen um 7 Uhr{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind wir hier{" "}
                      <span className="orig">glüklich</span>
                      <span className="corr">glücklich</span> ange<span className="orig">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      kommen, nachdem wir eine ungewöhnlich lange{" "}
                      <span className="orig">Ueberfahrt</span>
                      <span className="corr">Überfahrt</span>
                      <br className="lb" /> gehabt haben. Wir fuhren nämlich um
                      ½ 1 Uhr Dien
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ag Mittags
                      <br className="lb" /> von
                      <span className="placeName">
                        <span className="g.rend.script.latin"> Rotterdam</span>
                      </span>{" "}
                      aus, und blieben al<span className="orig">ſ</span>
                      <span className="corr">s</span>o{" "}
                      <span className="abbr"> C<sub>a</sub>.</span>
                      <span className="expan">
                        c<span className="ex">irc</span>a
                      </span>{" "}
                      42 Stunden auf dem <span className="orig">Waßer</span>
                      <span className="corr">Wasser</span>.{" "}<br className="lb" />
                      Die See war etwas <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ürmi
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ch, jedoch ohne die minde
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>e Gefahr,
                      <br className="lb" /> der Aufenthalt kam dadurch daß wir
                      wegen niedrem{" "}
                      <span className="orig">Waßer</span>
                      <span className="corr">Wasser</span>
                      <br className="lb" /> bei{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin makierung">
                          Helvetsluis
                        </span>
                      </span>{" "}
                      und bei{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin makierung">Margate</span>{" "}
                      </span>
                      die Anker aus werfen,
                      <br className="lb" /> und lange{" "}
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ill liegen mußten; es hat
                      uns die<span className="orig">ſ</span>
                      <span className="corr">s</span>es einen
                      <br className="lb" /> vollen Tag ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chadet. –
                    </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                    Von der Seekrankheit haben wir beide nicht viel ge<span className="orig">⹀</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>pürt, wir haben fa
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> die ganze Zeit im Bette
                    gelegen,
                    <br className="lb" /> wodurch man ihr nach meiner Erfahrung
                    am <span className="orig">beßten</span>
                    <span className="corr">besten</span> entgeht.
                    <br className="lb" />{" "}
                    <span className="persName">Friedrich</span> i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> recht munter, wir haben{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon ehe wir un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re
                    <br className="lb" />
                    <span className="g.rend.script.latin"> Bagage</span> vom
                    Zollhau<span className="orig">ſ</span>
                    <span className="corr">s</span>e hohlen konnten einen weiten
                    <br className="lb" /> Spatziergang durch
                    <span className="placeName">
                      <span className="g.rend.script.latin"> London</span>{" "}
                    </span>
                    gemacht.
                  </p>
                  <span className="business">
                  <p className="enc.tagsdecl.indent-medium" id="mark.004">
                    Hoffentlich{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>in
                    </span>{" "}
                    bi<span className="orig">ﬅ</span>
                    <span className="corr">st</span> Du mit den Kindern auch
                    recht wohl;
                    <br className="lb" /> in
                    <span className="placeName">
                      <span className="g.rend.script.latin"> Manchester</span>
                    </span>{" "}
                    werden wir Nachricht von Dir bekommen,
                    <br className="lb" /> worin auch wohl viele Seiden
                    <span className="orig">{" "}</span>
                    <span className="corr">-</span>Verkäufe angezeigt werden.
                    <br className="lb" /> Dies mal wird wohl <span className="makierung">kein Auf
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chlag</span> wohl aber eher das
                    <br className="lb" /> Gegentheil zu befürchten{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿn.
                  </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                    Wir <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wieder bei un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>rem alten Wirth{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      
                      Hr
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin makierung">Bacon</span>
                    </span>
                    <br className="lb" /> abge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>iegen, wo ich einen deut
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen Kellner angetroffen
                    <br className="lb" /> habe, was{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr angenehm i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>.
                  </p>
                  <span className="reisen">
                    <p className="enc.tagsdecl.indent-medium" id="mark.002">
                      Durch die Verzögerung bei der{" "}
                      <span className="orig">Ueberfahrt</span>
                      <span className="corr">Überfahrt</span>, werden
                      <br className="lb" /> wir uns nur wohl bis den 28. hier
                      aufhalten, und er
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                      <br className="lb" /> am 29. Sonntags nach
                      <span className="placeName">
                        <span className="g.rend.script.latin"> Manchester</span>
                      </span>{" "}
                      fahren, doch hängt dis
                      <br className="lb" /> auch von der Abfahrt der Wagen ab.
                    </p>
                  </span>
                  <blockquote className="closer">
                    <p className="enc.tagsdecl.indent-medium">
                      <span className="persName">Friedrich</span> will noch ein
                      paar Worte drunter <span className="orig">ſ</span>
                      <span className="corr">s</span>chreiben.
                      <br className="lb" /> <span className="orig">Küße</span>
                      <span className="corr">Küsse</span> die Kinder, und grüße{" "}
                      <span
                        className="strike-through"
                        style={{ textDecoration: "line-through" }}
                      >
                        H
                      </span>{" "}
                      die <span className="persName">Mutter</span>{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      <span className="persName">Hannchen</span>,
                      <br className="lb" /> die bei Dir angekommen{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eÿn werden.
                    </p>
                  </blockquote>
                  <div className="closer">
                    Nun lebe recht wohl, Gott <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿ mit Dir{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    uns allen
                    <br className="lb" />{" "}
                    <div className="signed" style={{
                    marginLeft: "-120px",
                  }}>
                      Dein
                      <br className="lb" />{" "}
                      <div className="persName">Friedrich.</div>
                    </div>
                  </div>
                </div>

                <div
                  className="page g.rend.hand.friedrich-engels"
                  style={{
                    paddingLeft: "80px",
                    paddingTop: "30px",
                    paddingBottom: "30px",
                  }}
                  id="index.xml-body.1_div.3"
                >
                  <h2 className="g.rend.hand.friedrich-engels">
                    <span className="headingNumber">3. </span>
                  </h2>
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="2cm">
                      &nbsp;
                    </span>
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <div className="salute">
                      Liebe <span className="persName">Mutter</span>
                    </div>
                  </div>
                  <span className="reisen">
                    <p className="enc.tagsdecl.indent-medium" id="mark.003">
                      Aus den obigen Zeilen des{" "}
                      <span className="persName">Vaters</span> wir
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> Du <span className="orig">erſehen</span>
                      <span className="corr">ersehen</span> haben, daß es
                      uns
                      <br className="lb" /> bis jetzt im Ganzen noch recht gut
                      gegangen hat. <span className="orig">J</span><span className="corr">I</span>ch bin aber <span className="orig">ſ</span>
                      <span className="corr">s</span>o verwirrt von
                      <br className="lb" /> der Seefahrt – es i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> mir, als wenn der Boden
                      unter mir <span className="orig">ſ</span>
                      <span className="corr">s</span>chwankte – und dem
                      <br className="lb" /> Getö<span className="orig">ſ</span>
                      <span className="corr">s</span>e um mich herum, daß ich
                      <small className="orig">d</small>Dir nicht viel <span className="orig">ſ</span>
                      <span className="corr">s</span>chreiben kann. <span className="orig">J</span><span className="corr">I</span>ch bin in
                      eine ganz neue Welt ver
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>etzt.
                      <a id="teaser.part.001.e">{/*anchor*/}</a>
                    </p>
                  </span>
                  <blockquote className="closer">
                    <p className="inline">
                      Lebe recht wohl und grüße Alle recht herzlich von Deinem
                    </p>
                  </blockquote>
                  <div className="closer">
                    
                    <div className="signed">
                      <span className="persName">Friedrich</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung "
            style={{
              top: "964px",
            }}
          >
            <hr />
            <label>Helvetsluis</label>
            <p>Hellevoetsluis: niederländische Hafenstadt.</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "964px",
            }}
          >
            <hr />
            <label>Margate</label>
            <p>Englische Hafenstadt im Südosten der Grafschaft Kent.</p>
          </div>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1265px",
            }}
          >
            <hr />
            <label>kein Aufschlag […] Gegenteil</label>
            <p>
              Friedrich Engels sen. erwartet eine Gewinneinbuße beim
              Seidenverkauf, wobei unter ‚Aufschlag‘ eine behördlich angeordnete
              Abgabe zu verstehen ist (z.B. Zoll).
            </p>
          </div>
          <div
            className="stellenerläuterung"
            style={{
              top: "1325px",
            }}
          >
            <hr />
            <label>Bacon</label>
            <p>
              Über den Gastwirt in London ist nichts Näheres bekannt. Es gab in
              der Stadt hunderte Hotels, Gasthäuser und privat vermietete
              Gästezimmer in verschiedenen Kategorien.
            </p>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
