import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "71";
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
                  style={{ paddingTop: "100px", paddingBottom: "160px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <h2>
                      <span className="headingNumber">1. </span>
                    </h2>
                    <div className="pagebreak" id="index.xml-pb-d29e149"></div>
                    <div className="teidiv1" id="annot.001">
                      <h3>
                        <span className="headingNumber">1.1. </span>
                      </h3>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.2">
                      <h3>
                        <span className="headingNumber">1.2. </span>
                      </h3>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.3">
                      <h3>
                        <span className="headingNumber">1.3. </span>
                      </h3>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.4">
                      <h3>
                        <span className="headingNumber">1.4. </span>
                      </h3>
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (Hr)
                        </span>
                        <span className="expan">
                          H<span className="ex">er</span>r
                        </span>
                        <span className="g.rend.script.latin">Meÿberg</span>{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>chreibt uns, daß die
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="6em">
                          &nbsp;
                        </span>{" "}
                        114 <span className="orig">ﬅ</span><span className="corr">st</span>ük
                        <span className="abbr">
                          (Kth
                          <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                            <sup>r</sup>⹀
                          </span>
                          )
                        </span>
                        <span className="expan">
                          K<span className="ex">ron</span>th
                          <span className="ex">aler</span>
                        </span>
                        auf{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (Hr)
                        </span>
                        <span className="expan">
                          H<span className="ex">er</span>r
                          <span className="ex">n</span>
                        </span>
                        <span className="g.rend.script.latin">Merten</span>{" "}
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="8em">
                          &nbsp;
                        </span>{" "}
                        nun eingehen
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (würd)
                        </span>
                        <span className="expan">
                          würd<span className="ex">en</span>
                        </span>
                      </p>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.5">
                      <h3>
                        <span className="headingNumber">1.5. </span>
                      </h3>
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span style={{ display: "inline-block" }} width="4em">
                          &nbsp;
                        </span>
                        <span className="g.rend.script.latin">Herrn</span>
                        <br className="lb" />
                        <span className="g.rend.script.latin">
                          Friedrich Engels
                        </span>
                        .<br className="lb" />
                        <span className="g.rend.script.latin">
                          <span className="abbr">
                            (Add
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>sse</sup>⹀
                            </span>
                            )
                          </span>
                          <span className="expan">
                            Add<span className="ex">resse</span>
                          </span>
                        </span>
                        Herrn
                        <span className="g.rend.script.latin">
                          <span className="abbr"> (J.)</span>
                          <span className="expan">
                            J<span className="ex">ohann</span>
                          </span>
                          <span className="abbr">
                            (Frid
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>h</sup>⹀
                            </span>
                            )
                          </span>
                          <span className="expan">
                            Frid<span className="ex">rich</span>
                          </span>
                          Echkardt
                          <span className="abbr">
                            (s
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>r</sup>⹀
                            </span>
                            )
                          </span>
                          <span className="expan">
                            s<span className="ex">enio</span>r
                          </span>
                        </span>
                        <br className="lb" />
                        <span className="g.rend.script.latin">
                          <span className="abbr">
                            (f
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>co</sup>⹀
                            </span>
                            )
                          </span>
                          <span className="expan">
                            f<span className="ex">ran</span>co
                          </span>
                        </span>
                        <span className="g.rend.script.latin">Wetzlar</span>
                        <span style={{ display: "inline-block" }} width="1word">
                          &nbsp;
                        </span>
                        <span className="g.rend.script.latin">in</span>
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="6em">
                          &nbsp;
                        </span>
                        <span className="g.rend.script.latin">Frankfurth</span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div type="mark">
                {/* <span type="krieg" from="#mark.001.s" to="#mark.001.e"/> */}
                <span type="religion" from="#mark.002.s" to="#mark.002.e" />
                <span type="religion" from="#mark.003.s" to="#mark.003.e" />
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
                  <div className="writing-session" id="index.xml-body.1_div.2">
                    <h2>
                      <span className="headingNumber">2. </span>
                    </h2>
                    <div className="pagebreak" id="index.xml-pb-d29e302">
                      <a href>[Page 1]</a>
                    </div>
                    <div className="opener">
                      <span style={{ display: "inline-block" }} width="6cm">
                        &nbsp;
                      </span>
                      <div className="dateline">
                        <span className="placeName">Barmen</span>
                        <span className="date">
                          12
                          <sup>
                            <span className="g.enc.tagsdecl.suspension.type1">
                              {" "}
                              (t)
                            </span>
                            <span className="expan">
                              t<span className="ex">en</span>
                            </span>
                          </sup>
                          <span className="g.enc.tagsdecl.suspension.type3">
                            {" "}
                            (Nov.)
                          </span>
                          <span className="expan">
                            Nov<span className="ex">ember</span>
                          </span>
                          1813
                        </span>
                      </div>
                    </div>
                    <div className="opener">
                      <span style={{ display: "inline-block" }} width="3cm">
                        &nbsp;
                      </span>
                      <a id="teaser.part.001.s">{/*anchor*/}</a>
                      <div className="salute">
                        Lieber <span className="persName">Friedrich</span>!
                      </div>
                      <a id="teaser.part.001.e">{/*anchor*/}</a>
                    </div>
                    <p>
                      <a id="mark.001.s">{/*anchor*/}</a>Deine Briefe haben wir
                      richtig erhalten, und <span className="orig">freüen</span>
                      <span className="corr">freuen</span> uns deines
                      <br className="lb" />
                      Wohl<span className="orig">ſ</span><span className="corr">s</span>eins, und daß alles für die Stadt
                      <span className="placeName">Frankfurth</span> <span className="orig">ſ</span><span className="corr">s</span>o
                      <span className="orig">glüklich</span>
                      <span className="corr">glücklich</span>
                      <br className="lb" />
                      <span className="orig">Vorübergegangen</span>
                      <span className="corr">vorübergegangen</span> i<span className="orig">ﬅ</span><span className="corr">st</span>;
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      angenehm war uns deine Be<span className="orig">ſ</span><span className="corr">s</span>chreibung,
                      <br className="lb" />
                      wiewohl <span className="overwritten">d</span>
                      <span className="add">⟨w⟩</span>ir die<span className="orig">ſ</span><span className="corr">s</span>elbe <span className="orig">ſ</span><span className="corr">s</span>päth
                      erhielten, und durch die{" "}
                      <span className="orig">Hemung</span>
                      <span className="corr">Hemmung</span> der
                      <br className="lb" />
                      Po<span className="orig">ﬅ</span><span className="corr">st</span>, dir nicht antworten{" "}
                      <span className="orig">konten</span>
                      <span className="corr">konnten</span>.
                    </p>
                    <p className="enc.tagsdecl.indent-verysmall">
                      <span className="orig">Heüte</span>
                      <span className="corr">Heute</span> erhielten wir dein{" "}
                      <span className="orig">lezters</span>
                      <span className="corr">Letzters</span> neb<span className="orig">ﬅ</span><span className="corr">st</span> <span className="orig">ſ</span><span className="corr">s</span>ämtlich
                      <span className="abbr">
                        (<span className="g.rend.script.latin">FFurther</span>)
                      </span>
                      <span className="expan">
                        F<span className="ex">rank</span>further
                      </span>
                      Zeitungen
                      <br className="lb" />
                      die uns alles erzählen.
                      <span style={{ display: "inline-block" }} width="1.5cm">
                        &nbsp;
                      </span>
                      <a id="teaser.part.002.s">{/*anchor*/}</a>
                      <span className="orig">auch</span>
                      <span className="corr">Auch</span> haben wir hier <span className="orig">ſ</span><span className="corr">s</span>eit{" "}
                      <span className="orig">dien<span className="orig">ﬅ</span><span className="corr">st</span>ag</span>
                      <span className="corr">Dien<span className="orig">ﬅ</span><span className="corr">st</span>ag</span>
                      <br className="lb" />
                      Rußi<span className="orig">ſ</span><span className="corr">s</span>che <span className="orig">Trouppen</span>
                      <span className="corr">Truppen</span>, wovon der General
                      in
                      <span className="g.rend.script.latin">
                        Elberfeld
                      </span>{" "}
                      liegt<a id="teaser.part.002.e">{/*anchor*/}</a>
                      und ein
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      liegende
                      <span className="g.rend.script.latin">Proclamation</span>
                      <span className="orig">erlaßen</span>
                      <span className="corr">erlassen</span> hat;
                      <span className="orig">dis</span>
                      <span className="corr">dies</span> i<span className="orig">ﬅ</span><span className="corr">st</span> ein
                      <span className="orig">Glük</span>
                      <span className="corr">Glück</span> für uns
                      <br className="lb" />
                      da die{" "}
                      <span className="g.rend.script.latin">
                        Franzosen
                      </span>{" "}
                      noch in die<span className="orig">ſ</span><span className="corr">s</span>er Woche <span className="orig">ﬅ</span><span className="corr">st</span>arke
                      <span className="g.rend.script.latin">
                        Requisitionen
                      </span>{" "}
                      und
                      <br className="lb" />
                      <span className="g.rend.script.latin">
                        Contributionen
                      </span>{" "}
                      gemacht haben, wovon wir nun Gottlob durch jene
                      <br className="lb" />
                      <span className="orig">Trouppen</span>
                      <span className="corr">Truppen</span> frei <span className="orig">ſ</span><span className="corr">s</span>ind,
                      <span className="religion">
                        <a id="mark.002.s">{/*anchor*/}</a>und das i<span className="orig">ﬅ</span><span className="corr">st</span> oﬀenbar
                        ein Werk der{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (Königlich)
                        </span>
                        <span className="expan">
                          Königlich<span className="ex">en</span>
                        </span>
                        <br className="lb" />
                        Regierung Je<span className="orig">ſ</span><span className="corr">s</span>u Chri<span className="orig">ﬅ</span><span className="corr">st</span>i, der uns auch ferner <span className="orig">ſ</span><span className="corr">s</span>chützen und
                        befreÿen
                        <br className="lb" />
                        wird.<a id="mark.002.e">{/*anchor*/}</a>
                      </span>
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      <a id="teaser.part.003.s">{/*anchor*/}</a>
                      <span className="orig">auch</span>
                      <span className="corr">Auch</span>
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (DDorf)</span>
                        <span className="expan">
                          D<span className="ex">ü<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>el</span>dorﬀ
                        </span>
                      </span>
                      i<span className="orig">ﬅ</span><span className="corr">st</span> von{" "}
                      <span className="g.rend.script.latin">Kosaken</span> und
                      <span className="g.enc.tagsdecl.suspension.type1">
                        (<span className="orig">Preüß</span>
                        <span className="corr">Preuß</span>)
                      </span>
                      <span className="expan">
                        <span className="orig">Preüß</span>
                        <span className="corr">Preuß</span>
                        <span className="ex">i<span className="orig">ſ</span><span className="corr">s</span>chen</span>
                      </span>
                      Hu<span className="orig">ſ</span><span className="corr">s</span>aren
                      <br className="lb" />
                      <span className="orig">be<span className="orig">ſ</span><span className="corr">s</span>ezt</span>
                      <span className="corr">be<span className="orig">ſ</span><span className="corr">s</span>etzt</span>.
                      <a id="teaser.part.003.e">{/*anchor*/}</a>
                      <span style={{ display: "inline-block" }}>
                        &nbsp;
                      </span>{" "}
                      Das
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          (<span className="orig">Franz.</span>
                          <span className="corr">franz.</span>)
                        </span>
                        <span className="expan">
                          <span className="orig">
                            Franz<span className="ex">ösische</span>
                          </span>
                          <span className="corr">
                            franz<span className="ex">ösische</span>
                          </span>
                        </span>
                        Corps
                      </span>
                      von{" "}
                      <span className="g.rend.script.latin">
                        GeneralRigeaud
                      </span>{" "}
                      war 2 Tage
                      <span className="orig">Vorher</span>
                      <span className="corr">vorher</span>
                      <br className="lb" />
                      über den Rhein gegangen, und hat <span className="orig">ſ</span><span className="corr">s</span>ich hier beim
                      <span className="orig">durchzug</span>
                      <span className="corr">Durchzug</span> noch
                      <br className="lb" />
                      ziemlich gut betragen.<a id="mark.001.e">{/*anchor*/}</a>
                      <span style={{ display: "inline-block" }} width="1.5cm">
                        &nbsp;
                      </span>
                      Der
                      <span className="abbr"> (L.)</span>
                      <span className="expan">
                        L<span className="ex">iebe</span>
                      </span>
                      <span className="persName">Pathohm</span> hat <span className="orig">ſ</span><span className="corr">s</span>ich
                      <span className="orig">Vorgenom̅en</span>
                      <span className="corr">vorgenom̅en</span>
                      <br className="lb" />
                      dir alles um<span className="orig">ﬅ</span><span className="corr">st</span>ändlich zu erzählen, daher breche ich ab; und
                      <span className="orig">ſ</span><span className="corr">s</span>age
                      <br className="lb" />
                      dir nur noch, daß wir durch die Güte Gottes alle
                      <span className="orig">Wohl</span>
                      <span className="corr">wohl</span> <span className="orig">ſ</span><span className="corr">s</span>ind,
                      <br className="lb" />
                      auch die <span className="abbr"> (L.)</span>
                      <span className="expan">
                        L<span className="ex">iebe</span>
                      </span>{" "}
                      Mama noch ziemlich gut durch die Unruhe ge
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      <span className="orig">komen</span>
                      <span className="corr">kommen</span> i<span className="orig">ﬅ</span><span className="corr">st</span>, ge<span className="orig">ﬅ</span><span className="corr">st</span>ern hatte <span className="orig">ſ</span><span className="corr">s</span>ie
                      einen guten Tag, <span className="orig">heüte</span>
                      <span className="corr">heute</span> i<span className="orig">ﬅ</span><span className="corr">st</span> der
                      <br className="lb" />
                      Krampf etwas <span className="orig"><span className="orig">ſ</span><span className="corr">s</span>chlimer</span>
                      <span className="corr"><span className="orig">ſ</span><span className="corr">s</span>chlimmer</span>,
                      <span className="religion">
                        <a id="mark.003.s">{/*anchor*/}</a>Gott gebe, daß
                        <span className="orig">Die</span>
                        <span className="corr">die</span>
                        <span className="orig">beßrung</span>
                        <span className="corr">Beßrung</span> mehr fort
                        <br className="g.enc.tagsdecl.hyphenation.colon" />
                        dauren möge.
                      </span>
                    </p>
                    <div className="closer">
                      <span className="religion">
                        <span className="orig"><span className="orig">ſ</span><span className="corr">s</span>ie</span>
                        <span className="corr">Sie</span> läßt dich mit uns
                        allen herzlich grüßen,
                        <br className="lb" />
                        und empfiehlt dich dem <span className="orig">ſ</span><span className="corr">s</span>chutze Gottes, der <span className="orig">ſ</span><span className="corr">s</span>o viel
                        <span className="orig">gutes</span>
                        <span className="corr">Gutes</span> an uns
                        <br className="lb" />
                        uns erzeigt hat. Hilf uns Ihm{" "}
                        <span className="orig">Danken</span>
                        <span className="corr">danken</span>, und bitten, daß er
                        <br className="lb" />
                        ferner alles herrlich hinausführen{" "}
                        <span className="unclear">wolle[?]</span>
                        <span className="unclear">wolte[?]</span>.
                        <a id="mark.003.e">{/*anchor*/}</a>
                      </span>
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      <div className="signed">
                        Dein <span className="orig">Treüer</span>
                        <span className="corr">treuer</span> Vater
                      </div>
                    </div>
                    <div className="closer">
                      <div className="signed">
                        <span style={{ display: "inline-block" }} width="15cm">
                          &nbsp;
                        </span>
                        <span className="g.rend.script.latin">
                          <span className="abbr">C.</span>
                          <span className="expan">
                            C<span className="ex">aspar</span>
                          </span>
                          Engels
                        </span>
                        .
                      </div>
                    </div>
                    <a id="index.xml-anchor-d29e733" />
                    <div className="notemarginLeft" id="txt.margin001">
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        Da alles nun wieder <span className="orig">Teüsch</span>
                        <span className="corr">deutsch</span> i<span className="orig">ﬅ</span><span className="corr">st</span> <span className="orig">ſ</span><span className="corr">s</span>o mag<span className="orig">ﬅ</span><span className="corr">st</span> du
                        künftig klar <span className="orig">ſ</span><span className="corr">s</span>chreiben
                      </p>
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
