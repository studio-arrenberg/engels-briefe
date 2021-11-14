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
        <title>Brief 71{date}</title>
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
                  style={{ paddingTop: "170px", paddingBottom: "165px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.5">
                      <h3>
                        <span className="headingNumber">1.5. </span>
                      </h3>
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span className="g.rend.script.latin">Herrn</span>{" "}
                        <br className="lb" />{" "}
                        <span className="g.rend.script.latin">
                          Friedrich Engels
                        </span>
                        . <br className="lb" />{" "}
                        <span className="small">
                          <p>
                            <span className="g.rend.script.latin">
                              <span className="abbr">Add
                                <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                  <sup className="double-underline">sse</sup>⹀
                                </span>
                              </span>
                              <span className="expan">
                                Add<span className="ex">resse</span>
                              </span>{" "}
                            </span>
                            Herrn{" "}
                            <span className="g.rend.script.latin">
                              <span className="abbr"> J.</span>
                              <span className="expan">
                                J<span className="ex">ohann</span>
                              </span>{" "}
                              <span className="abbr">Frid
                                <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                  <sup className="double-underline">h</sup>⹀
                                </span>
                              </span>
                              <span className="expan">
                                Frid<span className="ex">rich</span>
                              </span>{" "}
                              Echkardt{" "}
                              <span className="abbr">s
                                <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                  <sup className="double-underline">r</sup>⹀
                                </span>
                              </span>
                              <span className="expan">
                                s<span className="ex">enio</span>r
                              </span>
                            </span>{" "}
                            <br className="lb" />{" "}
                            <span className="g.rend.script.latin">
                              <span className="abbr">f
                                <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                  <sup className="double-underline">co</sup>⹀
                                </span>
                              </span>
                              <span className="expan">
                                f<span className="ex">ran</span>co
                              </span>
                            </span>{" "}
                            <span className="g.rend.script.latin">Wetzlar</span>
                            <span
                              style={{ display: "inline-block" }}
                              width="1word"
                            >
                              &nbsp;
                            </span>
                            <span className="g.rend.script.latin">in</span>
                          </p>
                        </span>
                        <span
                          className="g.rend.script.latin"
                          style={{
                            marginLeft: "100px",
                            marginBottom: "70px",
                            display: "block",
                          }}
                        >
                          Frankfurth
                        </span>
                      </p>
                    </div>
                    <div
                      className="teidiv1 xsmall"
                      id="index.xml-body.1_div.1_div.4"
                    >
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}Hr</span>
                        <span className="expan">
                          H<span className="ex">er</span>r
                        </span>{" "}
                        <span className="g.rend.script.latin"><span className="makierung">Me<span className="orig">ÿ</span>
<span className="corr">y</span>berg</span></span>{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chreibt uns, daß die{" "}
                        <br className="lb" />{" "}
                        114 <span className="orig">ﬅ</span>
                        <span className="corr">st</span>ük{" "}
                        <span className="abbr">
                          Kth
                          <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                            <sup>r</sup>⹀
                          </span>
                          </span>
                        <span className="expan">
                          K<span className="ex">ron</span>th
                          <span className="ex">aler</span>
                        </span>{" "}
                        auf{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}Hr</span>
                        <span className="expan">
                          H<span className="ex">er</span>r
                          <span className="ex">n</span>
                        </span>
                        {" "}
                        <span className="g.rend.script.latin"><span className="makierung">Merten</span></span>{" "}
                        <br className="lb" />{" "}
                        nun eingehen{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                         würd</span>
                        <span className="expan">
                          würd<span className="ex">en</span>
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>
              <div type="mark">
                <span type="krieg" from="#mark.001.s" to="#mark.001.e"/>
                <span type="religion" from="#mark.002.s" to="#mark.002.e" />
                <span type="religion" from="#mark.003.s" to="#mark.003.e" />
              </div>
              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "100px",
                    paddingBottom: "0px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="writing-session" id="index.xml-body.1_div.2">
                    <div className="opener">
                      <div className="dateline text-right">
                        <span className="placeName">Barmen</span>{" "}
                        <span className="date">
                          12
                          <sup style={{verticalAlign: "super",}}>
                            <span className="g.enc.tagsdecl.suspension.type1">
                              {" "}t </span>
                            <span className="expan">
                              t<span className="ex">en</span>
                            </span>{" "}
                          </sup>
                          <span className="g.enc.tagsdecl.suspension.type3">
                            {" "}Nov
                          </span>
                          <span className="expan">
                            Nov<span className="ex">ember</span>
                          </span>{" "}
                          1813
                        </span>
                      </div>
                    </div>
                    <div className="opener">
                      <a id="teaser.part.001.s">{/*anchor*/}</a>
                      <div className="salute" style={{ marginLeft: "100px" }}>
                        Lieber <span className="persName">Friedrich</span>!
                      </div>
                      <a id="teaser.part.001.e">{/*anchor*/}</a>
                    </div>
                    <span className="politik">
                    <p>
                    
                      <a id="mark.001.s">{/*anchor*/}</a>Deine Briefe haben wir
                      richtig erhalten, und <span className="orig">freüen</span>
                      <span className="corr">freuen</span> uns deines{" "}
                      <br className="lb" />{" "}
                      Wohl<span className="orig">ſ</span>
                      <span className="corr">s</span>eins, und daß alles für die
                      Stadt <span className="placeName">Frankfurth</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o
                      {" "}<span className="makierung">
                      <span className="orig">glüklich</span>
                      <span className="corr">glücklich</span>{" "}
                      <br className="lb" />{" "}
                      <span className="orig">Vorübergegangen</span>
                      <span className="corr">vorübergegangen</span></span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>;
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      angenehm war uns deine Be<span className="orig">ſ</span>
                      <span className="corr">s</span>chreibung,{" "}
                      <br className="lb" />{" "}
                      wiewohl <span className="overwritten">d</span>
                      <span className="add">w</span>ir die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>elbe{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>päth erhielten, und durch
                      die <span className="orig">Hemung</span>
                      <span className="corr">Hemmung</span> der{" "}
                      <br className="lb" />{" "}
                      Po<span className="orig">ﬅ</span>
                      <span className="corr">st</span>, dir nicht antworten{" "}
                      <span className="orig">konten</span>
                      <span className="corr">konnten</span>.
                    </p>
                    </span>
                    <p className="enc.tagsdecl.indent-verysmall">
                      <span className="politik">
                      <span className="orig">Heüte</span>
                      <span className="corr">Heute</span> erhielten wir dein{" "}
                      <span className="orig">Lezters</span>
                      <span className="corr">Letzters</span> neb
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ämtlich{" "}
                      <span className="abbr"> <span className="g.rend.script.latin">FFurther</span>
                      </span>
                      <span className="expan">
                        F<span className="ex">rank</span>further
                      </span>{" "}
                      Zeitungen <br className="lb" />{" "}
                      die uns alles erzählen.{" "}
                      
                      <a id="teaser.part.002.s">{/*anchor*/}</a>
                      <span className="orig">auch</span>
                      <span className="corr">Auch</span> haben wir hier{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eit{" "}
                      <span className="orig">
                        dien<span className="orig">ﬅ</span>
                        <span className="corr">st</span>ag
                      </span>
                      <span className="corr">
                        Dien<span className="orig">ﬅ</span>
                        <span className="corr">st</span>ag
                      </span>{" "}
                      <br className="lb" />{" "}
                      <span className="makierung">
                      Rußi<span className="orig">ſ</span>
                      <span className="corr">s</span>che{" "}
                      <span className="orig">Trouppen</span>
                      <span className="corr">Truppen</span></span>, wovon <span className="makierung">der General</span>{" "}
                      in <span className="g.rend.script.latin">Elberfeld</span>{" "}
                      liegt<a id="teaser.part.002.e">{/*anchor*/}</a> und <span className="makierung">ein-<span className="orig doublehyphen">⹀</span>{" "}
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      liegende{" "}
                      <span className="g.rend.script.latin">
                        Proclamation
                      </span>
                      </span>{" "}
                      <span className="orig">erlaßen</span>
                      <span className="corr">erlassen</span> hat;{" "}
                      <span className="orig">dis</span>
                      <span className="corr">dies</span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> ein{" "}
                      <span className="orig">Glük</span>
                      <span className="corr">Glück</span> für uns{" "}
                      <br className="lb" />{" "}
                      da die{" "}
                      <span className="g.rend.script.latin">
                        Franzosen
                      </span>{" "}
                      noch in die<span className="orig">ſ</span>
                      <span className="corr">s</span>er Woche{" "}
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>arke{" "}
                      <span className="g.rend.script.latin"><span className="makierung">Requisitionen</span></span>{" "}
                      und <br className="lb" />{" "}
                      <span className="g.rend.script.latin">
                        <span className="makierung">Contributionen</span>
                      </span>{" "}
                      gemacht haben, wovon wir nun Gottlob durch jene{" "}
                      <br className="lb" />{" "}
                      <span className="orig">Trouppen</span>
                      <span className="corr">Truppen</span> frei{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind,{" "}
                      <span className="religion">
                        <a id="mark.002.s">{/*anchor*/}</a>und das i
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span> oﬀenbar ein Werk der{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}Königlich</span>
                        <span className="expan">
                          Königlich<span className="ex">en</span>
                        </span>{" "}
                        <br className="lb" />{" "}
                        Regierung Je<span className="orig">ſ</span>
                        <span className="corr">s</span>u Chri
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>i, der uns auch ferner{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chützen und befre<span className="orig">ÿ</span>
<span className="corr">y</span>en{" "}
                        <br className="lb" />{" "}
                        wird.<a id="mark.002.e">{/*anchor*/}</a>
                      </span>
                      
                      <a id="teaser.part.003.s">{/*anchor*/}</a>
                      <span className="orig">auch</span>
                      <span className="corr">Auch </span>
                      <span className="g.rend.script.latin">
                        <span className="abbr"> DDorf</span>
                        <span className="expan">
                          D
                          <span className="ex">
                            ü<span className="orig">ſ</span>
                            <span className="corr">s</span>
                            <span className="orig">ſ</span>
                            <span className="corr">s</span>el
                          </span>
                          dorﬀ
                        </span>
                      </span>{" "}
                      i<span className="orig">ﬅ</span>
                      <span className="corr">st</span> von{" "}
                      <span className="makierung">
                      <span className="g.rend.script.latin">Kosaken</span> und{" "}
                      <span className="g.enc.tagsdecl.suspension.type1"><span className="orig">Preüß</span>
                        <span className="corr">Preuß</span>
                      </span>
                      <span className="expan">
                        <span className="orig">Preüß</span>
                        <span className="corr">Preuß</span>
                        <span className="ex">
                          i<span className="orig">ſ</span>
                          <span className="corr">s</span>chen
                        </span>
                      </span>{" "}
                      Hu<span className="orig">ſ</span>
                      <span className="corr">s</span>aren <br className="lb" />{" "}
                      </span>
                      <span className="orig">
                        be<span className="orig">ſ</span>
                        <span className="corr">s</span>ezt
                      </span>
                      <span className="corr">
                        be<span className="orig">ſ</span>
                        <span className="corr">s</span>etzt
                      </span>
                      .<a id="teaser.part.003.e">{/*anchor*/}</a> Das{" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          <span className="orig">Franz.</span>
                          <span className="corr">franz.</span>
                        </span>
                        <span className="expan">
                          <span className="orig">
                            Franz<span className="ex">ösische</span>
                          </span>
                          <span className="corr">
                            franz<span className="ex">ösische</span>
                          </span>
                        </span>{" "}
                        Corps{" "}
                      </span>
                      von{" "}
                      <span className="g.rend.script.latin">
                        <span className="makierung">General Rigeaud</span>
                      </span>{" "}
                      war 2 Tage <span className="orig">Vorher</span>
                      <span className="corr">vorher</span> <br className="lb" />{" "}
                      über den Rhein gegangen, und hat{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ich hier beim{" "}
                      <span className="orig">durchzug</span>
                      <span className="corr">Durchzug</span> noch{" "}
                      <br className="lb" />{" "}
                      ziemlich gut betragen.<a id="mark.001.e">
                        {/*anchor*/}
                      </a>{" "}</span>
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      Der <span className="abbr"> L.</span>
                      <span className="expan">
                        L<span className="ex">iebe</span>
                      </span>{" "}
                      <span className="persName">Pathohm</span> hat{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ich{" "}
                      <span className="orig">Vorgeno<span className="orig">m̅</span>
<span className="corr">mm</span>en</span>
                      <span className="corr">vorgeno<span className="orig">m̅</span>
<span className="corr">mm</span>en</span>{" "}
                      <br className="lb" />{" "}
                      dir alles um<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ändlich zu erzählen, daher{" "}
                      breche ich ab; und <span className="orig">ſ</span>
                      <span className="corr">s</span>age <br className="lb" />{" "}
                      dir nur noch, daß wir durch die Güte Gottes alle{" "}
                      <span className="orig">Wohl</span>
                      <span className="corr">wohl</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind, <br className="lb" />{" "}
                      auch die <span className="abbr"> L.</span>{" "}
                      <span className="expan">
                        L<span className="ex">iebe</span>
                      </span>{" "}
                      Mama noch ziemlich gut durch die Unruhe ge<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      <span className="orig">komen</span>
                      <span className="corr">kommen</span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>, ge
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ern hatte{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie einen guten Tag,{" "}
                      <span className="orig">heüte</span>
                      <span className="corr">heute</span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> der <br className="lb" />{" "}
                      Krampf etwas{" "}
                      <span className="orig">
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chlimer
                      </span>
                      <span className="corr">
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chlimmer
                      </span>
                      ,{" "}
                      <span className="religion">
                        <a id="mark.003.s">{/*anchor*/}</a>Gott gebe, daß{" "}
                        <span className="orig">Die</span>
                        <span className="corr">die</span>{" "}
                        <span className="orig">beßrung</span>
                        <span className="corr">Beßrung</span> mehr fort{" "}
                        <br className="g.enc.tagsdecl.hyphenation.colon" />
                        dauren möge.
                      </span>
                    </p>
                    <div className="closer">
                      <span className="religion">
                        <span className="orig">
                          <span className="orig">ſ</span>
                          <span className="corr">s</span>ie
                        </span>
                        <span className="corr">Sie</span> läßt dich mit uns
                        allen herzlich grüßen, <br className="lb" />{" "}
                        und empfiehlt dich dem <span className="orig">ſ</span>
                        <span className="corr">s</span>chutze Gottes, der{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>o viel{" "}
                        <span className="orig">gutes</span>
                        <span className="corr">Gutes</span> an uns{" "}
                        <br className="lb" />{" "}
                        uns erzeigt hat. Hilf uns Ihm{" "}
                        <span className="orig">Danken</span>
                        <span className="corr">danken</span>, und bitten, daß er{" "}
                        <br className="lb" />{" "}
                        ferner alles herrlich hinausführen
                        <span className="unclear">wolle</span>
                        <span className="unclear">wolte</span>.
                        <a id="mark.003.e">{/*anchor*/}</a>
                      </span>

                      <div className="signed" style={{paddingLeft: "370px", paddingBottom: "15px",}}>
                        
                        Dein <span className="orig">Treüer</span>
                        <span className="corr">treuer</span> Vater{" "}
                        <br className="lb" />{" "}
                        <span className="g.rend.script.latin">
                          <span className="abbr">C.</span>
                          <span className="expan">
                            C<span className="ex">aspar</span>{" "}
                          </span>
                          Engels
                        </span>
                        .
                      </div>
                    </div>
                    <span className="corr"><br /></span>
                    <a id="index.xml-anchor-d29e733" />
                    <div className="notemarginLeft" id="txt.margin001">
                    
                      <p className="g.enc.tagsdecl.wd.vertical-right vertical-links">
                        Da alles nun wieder <span className="orig">Teüsch</span>
                        <span className="corr">deutsch</span> i
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>o mag
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span> du <span className="makierung">künftig klar{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chreiben
                        </span>
                      </p>
                    </div>
                  </div>
                  </div>
                  <div
                  className="page"
                  style={{
                    paddingTop: "20px",
                    paddingLeft: "100px",
                    paddingBottom: "500px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <div className="writing-session" id="index.xml-body.1_div.2">
                  <div>
  
  <div className="g.rend.type.gothic" id="index.xml-body.1_div.2">
    <h2 className="g.rend.type.gothic"><span className="headingNumber">2. </span></h2>
    <div className="pagebreak" id="index.xml-pb-d29e302">
      
    </div>
    <p>Vereinigte<span className="orig">⸗ </span>
<span className="corr"></span><span className="underline">Armee</span> von Schlesien.</p>
    <p>Avantgarde des kaiserl. russischen</p>
    <p className="g.enc.tagsdecl.indent-medium" style={{textIndent: "40px",}}>Armee⸗Korps.</p>
    <p className="g.enc.tagsdecl.indent-very-large"  style={{textIndent: "80px",}}>
      <span className="spacing">Elberfeld</span> den{" "}
      <a id="annot.001.s">{/*anchor*/}</a>11. Okt.<a id="annot.001.e">{/*anchor*/}</a>
    </p>
    <p className="g.enc.tagsdecl.indent-very-large"  style={{textIndent: "80px",}}>
      <span className="spacing">Tagsbefehl</span>.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
      Seit meinem Einzug in diese Stadt ist nun so<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />wohl der
      geringe Theil des Großherzogthums Berg, <br className="lb" />welcher noch
      nicht besetzt war, als auch die Haupt<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />und
      Residenzstadt Düsseldorf durch die unter meinen
      <br className="lb" />Befehlen stehenden Truppen okkupirt.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>
      Ueberall fand ich Proben der guten Gesinnungen, <br className="lb" />welche
      die Bewohner des Großherzogthums beseelen, <br className="lb" />Es wird für
      mich die angenehmste Pflicht seyn, da<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />von eine
      günstige Rechenschaft abzustatten.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>Indessen finde ich nöthig bis auf weitere Einrich<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />tung
      nachfolgende Verordnungen zu treffen.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>Art. 1. Der Obrist und Ritter von Chomiekoff <br className="lb" />ist als
      Kommandant von Elberfeld und Barmen er<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />nannt. Keine
      Forderung welche nicht mit dem Visa <br className="lb" />des Herrn
      Kommandanten versehen ist, darf angenom<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />men und
      ausgeführt werden.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>2. Der Herr Karl Brügelmann ist provisorisch <br className="lb" />als
      General<span className="orig">⸗ </span>
<span className="corr"> </span>Kommissair des Arrondissements Elberfeld{" "}
      <br className="lb" />ernannt.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>3. Die konstituirten Landesbehörden fahren bis <br className="lb" />auf
      weitern Befehl fort, ihre Amtsverrichtungen auf <br className="lb" />die
      bisherige Weise auszuüben, Sie stehen jedoch ein<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />zig
      unter dem ernannten General<span className="orig">⸗ </span>
<span className="corr"> </span>Kommissair, und un<span className="orig">⸗ </span>
<span className="corr"></span><br className="lb" />ter
      ihrer eigenen persönlichen Verantwortlichkeit müssen{" "}
      <br className="lb" />sie von diesem Augenblicke an, alle Verbindungen und{" "}
      <br className="lb" />Verhältnisse mit französischen oder andern außer dem{" "}
      <br className="lb" />Arrondissement befindlichen Großherzoglichen Behörden{" "}
      <br className="lb" />aufgeben. Diesemnach dürfen weder Gelder an der<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />gleichen Behörden eingesendet, noch auch Befehle oder{" "}
      <br className="lb" />Aufträge von denselben angenommen oder befolgt{" "}
      <br className="lb" />werden.
    </p>
    <p className="g.enc.tagsdecl.indent-medium">
    <span style={{ marginLeft: "30px" }} ></span>4. Schließlich werden alle Einwohner der hiesigen{" "}
      <br className="lb" />Stadt, welcher ich für die gute Aufnahme meiner{" "}
      <br className="lb" />Truppen, den herzlichsten Dank sage, samt allen Be<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />wohnern des Arrondissements Elberfeld aufgefordert,{" "}
      <br className="lb" />mit demselben guten Geiste, wie bisher, für die Er<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />haltung der Ruhe und Ordnung, so wie für die un<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />gestörte Fortdauer der bisherigen und von dem Gene<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />ral<span className="orig">⸗ </span>
<span className="corr"> </span>Commissair nicht ausdrücklich aufgehobenen Ein<span className="orig">⸗ </span>
<span className="corr"></span>
      <br className="lb" />richtungen zu wachen.
    </p>
    <p className="g.enc.tagsdecl.indent-very-large signed-right-middle">
      Der russisch<span className="orig">⸗ </span>
<span className="corr"> </span>kaiserliche General<span className="orig">⸗ </span>
<span className="corr"> </span>Major
    </p>
    <p className="g.enc.tagsdecl.indent-very-large signed-right-middle">(Unterz.)<span style={{ marginLeft: "30px" }} ></span> Yuſefowitſch.</p>
  </div>
</div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "806px",
            }}
          >
            <hr />
            <label>glücklich vorübergegangen</label>
            <p>
            Der Abzug der frz. Truppen erfolgte mit weniger Opfern und Zerstörungen als zu befürchten war. Nach letzten Gefechten am 31. Oktober 1813, insbesondere an der ‚Alten Brücke‘, zogen sich die frz. Truppen am 1./2. November 1813 endgültig zurück und fünf Tage später besetzten alliierte Truppen die Stadt.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "945px",
            }}
          >
            <hr />
            <label>Rußische Trouppen</label>
            <p>
            Nach der Völkerschlacht bei Leipzig im Oktober 1813 vertrieben die Truppen der Koalition gegen Napoleon (Preußen, Russland, Österreich und Schweden) die französischen Truppen aus den deutschen Gebieten.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "945px",
            }}
          >
            <hr />
            <label>der General</label>
            <p>
            Der russische General Yusefowitsch, unter dessen Führung russische Truppen ab dem 9. November 1813 Elberfeld und Barmen besetzten.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1017px",
            }}
          >
            <hr />
            <label>einliegende Proclamation</label>
            <p>
            Siehe die Beilage: „Tagsbefehl“ von der „Avantgarde des kaiserl. russischen Armee-Korps“ vom 11. November 1813. Der Druck der Proklamation enthält das offenbar falsche Datum „11. Okt.“. In der Literatur wird der 11. November 1813 in Elberfeld als Beginn der russischen Kommandantschaft genannt und jener „Tagsbefehl“ auf diesen Tag datiert. (Vgl. Johann Friedrich Knapp: Geschichte, Statistik und Topographie der Städte Elberfeld und Barmen im Wupperthale. Iserlohn und Barmen 1835. S. 77.) Außerdem bezieht sich Johann Caspar Engels im Brief (Z. 4–5) auf den Abzug der Franzosen aus Frankfurt am Main. Der erfolgte bis zum 2. November 1813.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1052px",
            }}
          >
         
            <hr />
            <label>Requisition</label>
            <p>
            Bezeichnet im Kriegswesen das Beschaffen von Lebensmitteln oder für militärische Bedürfnisse erforderlichen Gegenständen von den Einwohnern des Feindeslandes durch die Besatzer.
            </p>
          </div> 

          <div
            className="stellenerläuterung"
            style={{
              top: "1353px",
            }}
          >
            <hr />
            <label>Contributionen</label>
            <p>
            Von Besatzern eingetriebene Abgaben, Steuern.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1156px",
            }}
          >
            <hr />
            <label>Kosaken und Preußische Husaren besetzt</label>
            <p>
            Ebenfalls Truppen der Koalition gegen Napoleon, die die besetzten Gebiete befreiten.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1226px",
            }}
          >
            <hr />
            <label>General Rigeaud</label>
            <p>
            Antoine Baron de Rigaux (1758–1820), französischer General der Kavallerie.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1529px",
            }}
          >
            <hr />
            <label>künftig klar schreiben</label>
            <p>
            aus Angst vor Militärzensur hatte Johann Caspar Engels seinen Sohn bei „politischen Nachrichten“ aus Frankfurt zur „Vorsicht“ gemahnt (vgl. Brief Nr. 66 vom 5.4.1813).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2000px",
            }}
          >
            <hr />
            <label>Die Quelle des Zeitungsartikels ist nicht überliefert.</label>
            <p>
            Das Datum des „Tagsbefehls“ lautet richtig 11. November 1813.
                        Dieser Tag ist in Elberfeld der Beginn der russischen Kommandantschaft.
                        (Vgl. Johann Friedrich Knapp: Geschichte, Statistik und Topographie
                        der Städte Elberfeld und Barmen im Wupperthale. Iserlohn und Barmen 1835, S. 77.)
            </p>
          </div>

          {/* <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Meyberg</label>
            <p>
            Nicht ermittelt.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Merten</label>
            <p>
            Nicht ermittelt.
            </p>
          </div> */}
          
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
