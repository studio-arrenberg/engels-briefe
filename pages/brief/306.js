import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "307";
  });

  console.log(item);
  const ners = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);
  console.log(ners);
  
  return (
    <Layout>
      <Head>
        <title>Brief 306 {date}</title>
      </Head>
      <Brief_wrapper data={item}>
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
                  style={{ paddingTop: "100px", paddingBottom: "160px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="address">
                        An
                        <span className="persName">
                          Frau{" "}
                          <span className="g.rend.script.latin">
                            Elise Engels
                          </span>
                        </span>
                        <br />
                        <span className="g.enc.tagsdecl.suspension.type3">
                          {" "}
                          (Adr)
                        </span>
                        <span className="expan">
                          Adr<span className="ex">esse</span>
                        </span>{" "}
                        Herrn
                        <span className="persName">
                          <span className="abbr">
                            (
                            <span className="g.rend.script.latin">Friedr.</span>
                            )
                          </span>
                          <span className="expan">
                            <span className="g.rend.script.latin">
                              Friedr<span className="ex">ich</span>
                            </span>
                          </span>
                          <span className="g.rend.script.latin">Engels</span>
                        </span>
                        <span className="hi">&amp; Co.</span>
                        <br />
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        in
                        <br />
                        <span style={{ display: "inline-block" }} width="5cm">
                          &nbsp;
                        </span>
                        <span className="placeName">
                          <span style={{ textDecoration: "underline" }}>
                            Barmen
                          </span>
                        </span>
                        .<br />
                        <span style={{ display: "inline-block" }} width="5cm">
                          &nbsp;
                        </span>
                        bei
                        <span className="placeName">
                          <span style={{ textDecoration: "underline" }}>
                            Elberfeld
                          </span>
                        </span>
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
                    <span style={{ display: "inline-block" }} width="12cm">
                      &nbsp;
                    </span>
                    <div className="dateline">
                      <span className="placeName">
                        <span className="g.rend.script.latin">London</span>
                      </span>
                      <span className="date">
                        <span className="g.rend.script.latin">
                          26. Juli 1838.
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="opener">
                    <div className="salute">
                      Liebe
                      <span className="persName">
                        <span className="g.rend.script.latin">Elise</span>
                      </span>
                      .
                    </div>
                  </div>
                  <span style={{ display: "inline-block" }} width="1line">
                    &nbsp;
                  </span>
                  <span className="reisen">
                    <p id="mark.001">
                      Soeben Donnerﬅag Morgen um 7 Uhr ſind wir hier
                      <span className="orig">glüklich</span>
                      <span className="corr">glücklich</span> ange
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      kommen, nachdem wir eine ungewöhnlich lange
                      <span className="orig">Ueberfahrt</span>
                      <span className="corr">Überfahrt</span>
                      <br className="lb" />
                      gehabt haben. Wir fuhren nämlich um ½ 1 Uhr Dienﬅag
                      Mittags
                      <br className="lb" />
                      von
                      <span className="placeName">
                        <span className="g.rend.script.latin">Rotterdam</span>
                      </span>
                      aus, und blieben alſo <span className="abbr"> (ca.)</span>
                      <span className="expan">
                        c<span className="ex">irc</span>a
                      </span>{" "}
                      42 Stunden auf dem <span className="orig">Waßer</span>
                      <span className="corr">Wasser</span>.<br className="lb" />
                      Die See war etwas ﬅürmiſch, jedoch ohne die mindeﬅe
                      Gefahr,
                      <br className="lb" />
                      der Aufenthalt kam dadurch daß wir wegen niederem
                      <span className="orig">Waßer</span>
                      <span className="corr">Wasser</span>
                      <br className="lb" />
                      bei
                      <span className="placeName">
                        <span className="g.rend.script.latin">Helvetsluis</span>
                      </span>
                      und bei
                      <span className="placeName">
                        <span className="g.rend.script.latin">Margate</span>
                      </span>
                      die Anker aus werfen,
                      <br className="lb" />
                      und lange ﬅill liegen mußten; es hat uns dieſes einen
                      <br className="lb" />
                      vollen Tag geſchadet. –
                    </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                    Von der Seekrankheit haben wir beide nicht viel ge
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    ſpürt, wir haben faﬅ die ganze Zeit im Bette gelegen,
                    <br className="lb" />
                    wodurch man ihr nach meiner Erfahrung am{" "}
                    <span className="orig">beßten</span>
                    <span className="corr">besten</span> entgeht.
                    <br className="lb" />
                    <span className="persName">Friedrich</span> iﬅ recht munter,
                    wir haben ſchon ehe wir unſre
                    <br className="lb" />
                    <span className="g.rend.script.latin">Bagage</span> vom
                    Zollhauſe hohlen konnten einen weiten
                    <br className="lb" />
                    Spatziergang durch
                    <span className="placeName">
                      <span className="g.rend.script.latin">London</span>
                    </span>
                    gemacht.
                  </p>
                  <p className="enc.tagsdecl.indent-medium" id="mark.004">
                    Hoffentlich{" "}
                    <span style={{ textDecoration: "line-through" }}>ſin</span>{" "}
                    biﬅ Du mit den Kindern auch recht wohl;
                    <br className="lb" />
                    in
                    <span className="placeName">
                      <span className="g.rend.script.latin">Manchester</span>
                    </span>
                    werden wir Nachricht von Dir bekommen,
                    <br className="lb" />
                    worin auch wohl viele Seiden<span className="orig"> </span>
                    <span className="corr">-</span>Verkäufe angezeigt werden.
                    <br className="lb" />
                    Dies mal wird wohl kein Aufſchlag wohl aber eher das
                    <br className="lb" />
                    Gegentheil zu befürchten ſeÿn.
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Wir ſind wieder bei unſerem alten Wirth
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr)
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="persName">
                      <span className="g.rend.script.latin">Bacon</span>
                    </span>
                    <br className="lb" />
                    abgeﬅiegen, wo ich einen deutſchen Kellner angetroffen
                    <br className="lb" />
                    habe, was ſehr angenehm iﬅ.
                  </p>
                  <span className="reisen">
                    <p className="enc.tagsdecl.indent-medium" id="mark.002">
                      Durch die Verzögerung bei der{" "}
                      <span className="orig">Ueberfahrt</span>
                      <span className="corr">Überfahrt</span>, werden
                      <br className="lb" />
                      wir uns nur wohl bis den 28. hier aufhalten, und erﬅ
                      <br className="lb" />
                      am 29. Sonntags nach
                      <span className="placeName">
                        <span className="g.rend.script.latin">Manchester</span>
                      </span>
                      fahren, doch hängt das
                      <br className="lb" />
                      auch von der Abfahrt der Wagen ab.
                    </p>
                  </span>
                  <blockquote className="closer">
                    <p className="enc.tagsdecl.indent-medium">
                      <span className="persName">Friedrich</span> will noch ein
                      paar Worte drunter ſchreiben.
                      <br className="lb" />
                      <span className="orig">Küße</span>
                      <span className="corr">Küsse</span> die Kinder, und grüße
                      <span style={{ textDecoration: "line-through" }}>
                        H
                      </span>{" "}
                      die
                      <span className="persName">Mutter</span>{" "}
                      <span className="abbr"> (u.)</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>
                      <span className="persName">Hannchen</span>,
                      <br className="lb" />
                      die bei Dir angekommen ſeÿn werden.
                    </p>
                  </blockquote>
                  <div className="closer">
                    Nun lebe recht wohl, Gott ſeÿ mit Dir{" "}
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    uns allen
                    <br className="lb" />
                    <div className="signed">
                      Dein
                      <br className="lb" />
                      <span className="persName">Friedrich</span>.
                    </div>
                  </div>

                  <div
                    className="g.rend.hand.friedrich-engels"
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
                        <span className="persName">Vaters</span> wirﬅ Du
                        erfahren haben, daß es uns
                        <br className="lb" />
                        bis jetzt im Ganzen noch recht gut gegangen hat. Ich bin
                        aber ſo verwirrt von
                        <br className="lb" />
                        der Seefahrt – es iﬅ mir, als wenn der Boden unter mir
                        ſchwankte – und dem
                        <br className="lb" />
                        Getöſe um mich herum, daß ich Dir nicht viel ſchreiben
                        kann. Ich bin in eine
                        <br className="lb" />
                        ganz neue Welt verſetzt.
                        <a id="teaser.part.001.e">{/*anchor*/}</a>
                      </p>
                    </span>
                    <blockquote className="closer">
                      <p className="inline">
                        Lebe recht wohl und grüße Alle recht herzlich von Deinem
                      </p>
                    </blockquote>
                    <div className="closer">
                      <span style={{ display: "inline-block" }} width="15cm">
                        &nbsp;
                      </span>
                      <div className="signed">
                        <span className="persName">Friedrich</span>
                      </div>
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
