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
        <title>Brief 68</title>
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
                  style={{ paddingTop: "227px", paddingBottom: "150px" }}
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
                        Herrn <br className="lb" />
                        <span className="persName">Friedrich Engels</span>.{" "}
                        <br className="lb" />
                        <span
                          className="small-adress"
                          style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.8rem",
                            marginBottom: "0px",
                            marginTop: "10px",
                            display: "block",
                          }}
                        >
                          <span className="abbr">Add
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>r</sup>:
                            </span>
                          </span>
                          <span className="expan">
                            Add<sup class="double-underline orig">r</sup><span className="ex">resse</span>
                          </span>{" "}
                          Herrn{" "}
                          <span className="persName">
                            <span className="abbr"> Joh.</span>
                            <span className="expan">
                              Joh<span className="ex">ann</span>{" "}
                            </span>
                            <span className="abbr">
                              Frid
                              <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                :<sup className="orig double-underline">h</sup>
                              </span>
                               </span>
                            <span className="expan">
                              Frid<sup class="double-underline orig">h</sup><span className="ex">ric</span>h
                            </span>{" "}
                            Eckhardt <span className="abbr"> Sr.</span>
                            <span className="expan">
                              S<span className="ex">enio</span>r
                            </span>
                          </span>{" "}
                          <br className="lb" />
                          <span
                            className="wave"
                            className="underline"
                          >
                            <span className="abbr">
                              f
                              <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                                <sup className="double-underline">co</sup>
                              </span>
                               </span>
                            <span className="expan">
                              f<span className="ex">ran</span>co{" "}
                            </span>
                            <span className="placeName">Wetzlar</span>
                          </span>
                          <span
                            style={{ display: "inline-block" }}
                            width="1word"
                          >
                            &nbsp;
                          </span>
                          in
                        </span>{" "}
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="4em">
                          &nbsp;
                        </span>
                        <span className="placeName">
                          Frankfurth{" "}
                          <span className="abbr">
                            {" "}<sup>a</sup>/m
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
                  <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/>
                  <span type="geschaeftliches" from="#mark.005.s" to="#mark.005.e"/>
                  
                  <span type="religion" from="#mark.002.s" to="#mark.002.e" />
                  <span type="religion" from="#mark.003.s" to="#mark.003.e" />
                  <span type="religion" from="#mark.006.s" to="#mark.006.e" />
                  <span type="krieg" from="#mark.004.s" to="#mark.004.e"/>
                  
                  
                  <span type="musik" from="#mark.007.s" to="#mark.007.e"/>

                  {/* <span type="bildung" from="#mark.008.s" to="#mark.008.e"/> */}
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "0px",
                    paddingLeft: "80px",
                    paddingBottom: "95px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="7cm">
                      &nbsp;
                    </span>
                    <div className="dateline"style={{ marginRight: "200px" }}>
                      „<span className="placeName">Barmen</span>{" "}
                      <span className="date">
                        4 <span className="orig">Jul<span className="orig">ÿ</span>
<span className="corr">y</span></span>
                        <span className="corr">Juli</span> 1813
                      </span>
                    </div>
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <div className="enc.tagsdecl.indent-large">
                      Lieber <span className="persName">Friedrich</span>!
                      
                    </div>
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                  </div>
                  <span className="business">
                  <p>
                    <a id="mark.001.s">{/*anchor*/}</a>
                    Zufolge deinen Lieben
                    Briefen vom 12{" "}
                    <span className="makierung"><span className="abbr">
                      pa<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>.</span>
                    <span className="expan">
                      pa<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="ex">ato</span>
                    </span></span>{" "}
                    haben wir das Laken und <a id="annot.001.s">{/*anchor*/}</a>
                    <span className="makierung">Ca<span className="orig">ſ</span>
                    <span className="corr">s</span>imir</span>
                    <a id="annot.001.e">{/*anchor*/}</a> <br className="lb" />
                    für dich gekauft, und in 1{" "}
                    <span className="makierung"><span className="g.rend.script.latin">paquet</span>{" "}
                    <span className="g.rend.script.latin">
                      <span className="abbr">F.E.</span>{" "}
                    </span></span>
                    durch <a id="annot.002.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">
                      <span className="makierung">
                      <span className="persName">
                        <span className="abbr"> Eng.</span>
                        <span className="expan">
                          Eng<span className="ex">elbert</span>
                        </span>{" "}
                        Sieperman
                      </span>
                      </span>
                    </span>
                    <a id="annot.002.e">{/*anchor*/}</a>, der ju
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> nach <br className="lb" />
                    <span className="g.rend.script.latin">
                      <span className="placeName">
                        <span className="abbr"> FFurth</span>
                        <span className="expan">
                          F<span className="ex">rank</span>furth
                        </span>
                      </span>
                    </span>{" "}
                    in <span className="orig">ſ</span>
                    <span className="corr">s</span>eine{" "}
                    <a id="annot.003.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin"><span className="makierung">Condition</span></span>
                    <a id="annot.003.e">{/*anchor*/}</a>{" "}
                    <span className="orig">reißen</span>
                    <span className="corr">reisen</span>{" "}
                    <span className="orig">wolte</span>
                    <span className="corr">wollte</span>, dir{" "}
                    <span className="orig">
                      zuge<span className="orig">ſ</span>
                      <span className="corr">s</span>ant
                    </span>
                    <span className="corr">zugesandt</span>, wir hoffen daß du{" "}
                    <br className="lb" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>olches{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon erhalten ha
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und daß dir un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re Wahl gefallen wird.
                  </p>

                  <span className="religion">
                    <p className="enc.tagsdecl.indent-small">
                      <a id="mark.002.s">{/*anchor*/}</a>
                      <span className="orig">wir</span>
                      <span className="corr">Wir</span>{" "}
                      <span className="orig">freüen</span>
                      <span className="corr">freuen</span> uns mit dir, daß du
                      nun einen <span className="orig">Freünd</span>
                      <span className="corr">Freund</span> mehr ha
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>, mit dem du{" "}
                      <br className="lb" />
                      dich unterhalten{" "}
                      <span className="orig">
                        kan<span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">kanst</span>; gewöhne ihn{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chon früh daran, daß ihr,
                      wan ihr <br className="lb" />
                      aufm Zi<span className="orig">m̅</span>
<span className="corr">mm</span>er bei<span className="orig">ſ</span>
                      <span className="corr">s</span>amen{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eid, ein und mehr{" "}
                      <span className="g.rend.script.latin">Capitel</span> aus
                      dem Worte Gottes <br className="lb" />
                      oder <span className="orig">ſ</span>
                      <span className="corr">s</span>on
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> einem guten Buche{" "}
                      <span className="orig">leßt</span>
                      <span className="corr">lest</span>, und darüber{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>precht; wenig
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ens laß{" "}
                      <br className="lb" />
                      dich nicht{" "}
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>öhren
                      </span>
                      <span className="corr">stören</span> an dem, was du mit
                      dem guten <a id="annot.004.s">{/*anchor*/}</a>
                      <span className="g.rend.script.latin">
                        <span className="persName"><span className="makierung">Kethman</span></span>
                      </span>
                      <a id="annot.004.e">{/*anchor*/}</a> zu{" "}
                      <span className="orig">leßen</span>
                      <span className="corr">lesen</span> <br className="lb" />
                      und zu betrachten gewohnt bi
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>. —
                      <span style={{ display: "inline-block" }} width="2em">
                        
                      </span>
                      <a id="teaser.part.002.s">{/*anchor*/}</a>
                      <span className="orig">wir</span>
                      <span className="corr">Wir</span>{" "}
                      <span className="orig">müßen</span>
                      <span className="corr">müssen</span> be
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>onders im Gei
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>lichen{" "}
                      <br className="lb" />
                      allewege auf un<span className="orig">ſ</span>
                      <span className="corr">s</span>ren eignen Vortheil{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ehen, auch in die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>em Stück bin ich{" "}
                      <br className="lb" />
                      ein Kaufman und Trachte nach den mei
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>en{" "}
                      <span className="g.rend.script.latin">proCenten</span>;
                      weil mir kein Men<span className="orig">ſ</span>
                      <span className="corr">s</span>ch <br className="lb" />
                      dem ich zu gefallen eine Stunde in gleichgültigen Dingen
                      ver<span className="orig">ſ</span>
                      <span className="corr">s</span>chwenden{" "}
                      <br className="lb" />
                      <span className="orig">wolte</span>
                      <span className="corr">wollte</span>, davon{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>k</span>
                      eine Minute wiedergeben <span className="orig">kan</span>
                      <span className="corr">kann</span>,{" "}
                      <a id="annot.005.s">{/*anchor*/}</a><span className="makierung">jener Dichter{" "}</span>
                      <a id="annot.005.e">{/*anchor*/}</a>
                      hat recht, <span className="orig">wen</span>
                      <span className="corr">wenn</span> <br className="lb" />
                      er <span className="orig">ſ</span>
                      <span className="corr">s</span>agt: ich will mit meinen
                      Stunden geitzen, ein <span className="orig">Seegen</span>
                      <span className="corr">Segen</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>oll den andern{" "}
                      <br className="lb" />
                      reitzen,{" "}
                      <span className="underline">
                        der Augenblick
                      </span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ei mein.
                      <a id="mark.001.e">{/*anchor*/}</a>
                      
                      <a id="mark.002.e">{/*anchor*/}</a>
                      <a id="teaser.part.002.e">{/*anchor*/}</a>
                    </p>
                    </span>
                  </span>

                  <p className="enc.tagsdecl.indent-small">
                    <a id="annot.006.s">{/*anchor*/}</a>
                    <span className="orig">mit</span>
                    <span className="corr">Mit</span> der{" "}
                    <span className="abbr"> L.</span>
                    <span className="expan">
                      L<span className="ex">ieben</span>
                    </span>{" "}
                    <span className="g.rend.script.latin"><span className="makierung">Mama</span></span> hat es{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eitdem zwar{" "}
                    <span className="orig">
                      Lang<span className="orig">ſ</span>
                      <span className="corr">s</span>am
                    </span>
                    <span className="corr">langsam</span>, aber doch Gottlob{" "}
                    <br className="lb" />
                    i<span className="orig">m̅</span>
<span className="corr">mm</span>er <span className="orig">beßer</span>
                    <span className="corr">besser</span> gegangen
                    <a id="annot.006.e">{/*anchor*/}</a>,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ie i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> freilig noch nicht frei von{" "}
                    Krampf, allein <br className="lb" />
                    wir können doch urtheilen, daß er vor und nach{" "}
                    <span className="orig">abnimt</span>
                    <span className="corr">{" "}abnimmt</span>,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ie hat kürzlich{" "}
                    <br className="lb" />
                    <span className="orig">beßer</span>
                    <span className="corr">besser</span> ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chlafen oft 5 – 5 ½ Stunden
                    an einem <span className="orig">Stük</span>
                    <span className="corr">Stück</span>,{" "}
                    <span className="orig">dan</span>
                    <span className="corr">dann</span> vermehrt{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich <br className="lb" />
                    auch der{" "}
                    <span className="g.rend.script.latin">
                      <span className="orig">Apetit</span>
                      <span className="corr">Appetit</span>
                    </span>
                    , <span className="orig">ſ</span>
                    <span className="corr">s</span>o daß wir hoffen, daß{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ie unter dem Bei
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>and <br className="lb" />
                    Gottes bald einmal im{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eßel
                    </span>
                    <span className="corr">Sessel</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>itzen{" "}
                    <span className="orig">kan</span>
                    <span className="corr">kann</span>, morgen erwarten wir den{" "}
                    <br className="lb" />
                    <a id="annot.007.s">{/*anchor*/}</a>
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr.{" "}
                      </span>.
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          D<span className="orig"></span>
                          <span className="corr">.</span>
                          <sup className="underline">r</sup></span>{" "}
                        <span className="expan">Doctor</span><span className="makierung"> Osberghaus</span>
                      </span>
                    </span>
                    <a id="annot.007.e">{/*anchor*/}</a>, der alles näher be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>i<span className="orig">m̅</span>
<span className="corr">mm</span>en wird.
                  </p>
                  <span className="religion">
                    <p className="enc.tagsdecl.indent-small">
                      <a id="mark.003.s">{/*anchor*/}</a>
                      <span className="orig">fahre</span>
                      <span className="corr">Fahre</span> du fort{" "}
                      <span className="abbr"> L.</span>
                      <span className="expan">
                        L<span className="ex">ieber</span>
                      </span>{" "}
                      <span className="persName">Friedrich</span>! mit uns den{" "}
                      <span className="orig">treüen</span>
                      <span className="corr">treuen</span> He<span className="orig">ÿ</span>
<span className="corr">y</span>land, der ja in
                      den <br className="lb" />
                      Tagen <span className="orig">ſ</span>
                      <span className="corr">s</span>eines Erdenlebens der be
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>e und berühmte
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>e Arzt war und allen{" "}
                      <br className="lb" />
                      half, fleißig um <span className="orig">ſ</span>
                      <span className="corr">s</span>einen{" "}
                      <span className="orig">Seegen</span>
                      <span className="corr">Segen</span> anzuflehen; du thu
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> dadurch der{" "}
                      <span className="abbr"> L.</span>
                      <span className="expan">
                        L<span className="ex">ieben</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">Mama</span>{" "}
                      <br className="lb" />
                      den be<span className="orig">ﬅ</span>
                      <span className="corr">st</span>en Dien
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>, und ha
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> auch für dich großen
                      Vortheil davon,{" "}
                      <span className="orig">den</span>
                      <span className="corr">denn</span>
                    </p>
                  </span>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "10px",
                    paddingLeft: "80px",
                    paddingBottom: "80px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <span className="religion">
                    <p>
                      <span className="pagebreak" id="index.xml-pb-d29e735">
                        {/* <a href>[Page 2]</a> */}
                      </span>
                      er, un<span className="orig">ſ</span>
                      <span className="corr">s</span>er König Jesus Christus i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> uner
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chöpflich Reich, und{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o{" "}
                      <span className="g.rend.script.latin">Genereus</span>, daß
                      ihm <br className="lb" />
                      keine Bitt<span className="orig">ſ</span>
                      <span className="corr">s</span>chrift um
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>on
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> überreicht wird,{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ondern uns{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>elb
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> dazu ermuntert:{" "}
                      <br className="lb" />
                      bittet, <span className="orig">ſ</span>
                      <span className="corr">s</span>o werdet ihr nehmen, daß{" "}
                      <span className="orig">eüre</span>
                      <span className="corr">eure</span>{" "}
                      <span className="orig">Freüde</span>
                      <span className="corr">Freude</span>{" "}
                      <span className="underline">
                        vollko<span className="orig">m̅</span>
<span className="corr">mm</span>en
                      </span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ei
                      <a id="annot.008.s">{/*anchor*/}</a>
                      {" "}
                      <span className="makierung"><span className="g.rend.script.latin">
                        <span className="abbr"> Joh:</span>
                        <span className="expan">
                          Joh<span className="ex">annes</span>
                        
                      </span>{" "}
                      16 <span className="abbr"> V</span>
                      <span className="expan">
                        V<span className="ex">ers</span>
                      </span>
                      </span>{" "}
                      24<a id="annot.008.e">{/*anchor*/}</a>
                      <a id="mark.003.e">{/*anchor*/}</a>
                      </span>
                    </p>
                  </span>
                  <span className="politik">
                  <p className="enc.tagsdecl.indent-small">
                    <a id="mark.004.s">{/*anchor*/}</a>
                    <a id="mark.005.s">{/*anchor*/}</a>
                    <span className="business">
                    Du ha
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> ganz recht{" "}
                    <span className="abbr"> l.</span>
                    <span className="expan">
                      l<span className="ex">ieber</span>
                    </span>{" "}
                    <span className="persName">Friedrich</span>, daß wir große
                    Vorzüge, vor andern Ge<span className="orig">=</span>
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    genden haben, die der Krieg ver
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehrt hat, und wo die{" "}
                    <span className="orig">Taußende</span>
                    <span className="corr">Tausende</span> Men
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen <br className="lb" />
                    unter <span className="orig">Druk</span>
                    <span className="corr">Druck</span> und Mangel{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eüfzen
                    </span>
                    <span className="corr">seufzen</span>, und denen noch große
                    Gefahren bevor<span className="orig">=</span>
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ehen, mögte die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e gnädige Schonung nur von{" "}
                    uns allen <span className="orig">erkant</span>
                    <span className="corr">erkannt</span>, und dem{" "}
                    <br className="lb" />
                    guten Gott innig<span className="orig">ﬅ</span>
                    <span className="corr">st</span> verdankt werden!
                    <a id="mark.005.e">{/*anchor*/}</a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <span className="orig">die</span>
                    <span className="corr">Die</span> Handlung hier aufm{" "}
                    <span className="orig">Plaze</span>
                    <span className="corr">Platze</span> und ins Reich geht noch
                    ziemlich, auch haben <br className="lb" />
                    <a id="annot.009.s">{/*anchor*/}</a>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Hr.</span>.
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">ren</span>
                    </span>
                    <span className="g.rend.script.latin">{" "}
                      <span className="orgName"><span className="makierung">Gebauer</span></span>{" "}
                    </span>
                    und{" "}
                    <span className="g.rend.script.latin">
                      <span className="orgName"><span className="makierung">Querfurth</span></span>
                    </span>
                    <a id="annot.009.e">{/*anchor*/}</a> 2 gute Aufträge
                    gegeben, die bei{" "}
                    <a id="annot.010.s">{/*anchor*/}</a>
                    <span className="makierung"><sup>6</sup>/m<a id="annot.010.e">{/*anchor*/}</a></span>{" "}
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ük
                    </span>
                    <span className="corr">Stück</span>{" "}
                    <a id="annot.011.s">{/*anchor*/}</a>Kanten
                    <a id="annot.011.e">{/*anchor*/}</a> <br className="lb" />
                    150{" "}
                    <span className="abbr">
                      {" "}D<sup className="underline">z</sup></span>
                    <span className="expan">
                      D<span className="ex">utzend</span>
                    </span>{" "}
                    <span className="makierung"><span className="g.rend.script.latin">
                      <span className="g.enc.tagsdecl.suspension.type2">Lang.)
                      </span>
                      
                      <span className="expan">
                        Lang<span className="ex">etten</span>{" "}
                      </span>
                    </span>
                    </span>
                    und 600{" "}
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ük
                    </span>
                    <span className="corr">Stück</span> ganz{" "}
                    <a id="annot.012.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin"><span className="makierung">Brochirte</span></span>
                    <a id="annot.012.e">{/*anchor*/}</a>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich betragen, nun{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chaden uns die{" "}
                    <br className="lb" />
                    <span className="makierung"><span className="orig">Kriegs unruhen</span>
                    <span className="corr">Kriegsunruhen</span></span>
                    {" "}wegen den
                    <span className="makierung">
                    <span className="placeName">
                      <span className="abbr"> Leipz.</span>
                      <span className="expan">{" "}
                        Leipz<span className="ex">iger</span>{" "}
                      </span>
                    </span>
                    und{" "}
                    <span className="placeName">
                      <span className="abbr"> FF. <sup>a</sup>/<span className="orig">o</span>
                        <span className="corr">O</span>
                      </span>
                      <span className="expan">
                        F<span className="ex">rank</span>f
                        <span className="ex">urther</span> a
                        <span className="ex">n</span>{" "}
                        <span className="ex">der</span>{" "}
                        <span className="orig">o</span>
                        <span className="corr">O</span>
                        <span className="ex">der</span>
                      </span>
                    </span>{" "}
                    <span className="orig">Meßen</span>
                    <span className="corr">Messen</span></span> und in{" "}
                    <span className="placeName">Hamburg</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o <br className="lb" />
                    daß wir von 3<sup className="double-underline">ter</sup>{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>orte
                    </span>
                    <span className="corr">Sorte</span> <span className="makierung">Kanten</span> großes Lager
                    haben, und daher mit{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Hr.</span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>{" "}
                    <a id="annot.013.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">
                      <span className="persName"><span className="makierung">Krebs</span></span>
                    </span>
                    <a id="annot.013.e">{/*anchor*/}</a> <br className="lb" />
                    einig wurden, <a id="annot.014.s">{/*anchor*/}</a>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      dHr.</span>
                    {/* <span className="expan">
                      d<span className="ex">en</span> Hr
                    </span> */}
                    <span className="expan">
                      d<span className="ex">en</span> H
                      <span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>{" "}
                    <span className="g.rend.script.latin"><span className="makierung">Kremling</span></span> und{" "}
                    <span className="g.rend.script.latin"><span className="makierung">Caspar</span></span>
                    <a id="annot.014.e">{/*anchor*/}</a> nach{" "}
                    <span className="placeName">Bremen</span>,{" "}
                    <span className="placeName">Hamburg</span>,{" "}
                    <span className="g.rend.script.latin">Flensburg</span>{" "}
                    <br className="lb" />
                    und ins{" "}
                    <span className="placeName">
                      Meklenburgi<span className="orig">ſ</span>
                      <span className="corr">s</span>che{" "}
                    </span>
                    <span className="orig">reißen</span>
                    <span className="corr">reisen</span> zu
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span>;{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eit 8 Tagen haben{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich{" "}
                    <span className="abbr">
                      {" "}die<span className="orig">ſ</span>
                      <span className="corr">s</span>elb.</span>
                    <span className="expan">
                      die<span className="orig">ſ</span>
                      <span className="corr">s</span>elb
                      <span className="ex">en</span>
                    </span>{" "}
                    <br className="lb" />
                    <span className="orig">
                      Mar<span className="orig">ſ</span>
                      <span className="corr">s</span>chfertig
                    </span>
                    <span className="corr">marschfertig</span> gemacht, und{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind ge
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern morgen bereits nach{" "}
                    <span className="placeName">Ha<span className="orig">m̅</span>
<span className="corr">mm</span></span> abge<span className="orig">=</span>
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eegelt; der Herr begleite{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ie durch{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eine Engel, und gebe zu ihren{" "}
                    <br className="lb" />
                    <span className="orig">bemühungen</span>
                    <span className="corr">Bemühungen</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ein{" "}
                    <span className="orig">gede<span className="orig">ÿ</span>
<span className="corr">y</span>en</span>
                    <span className="corr">Gedeihen</span>.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    Daß von der <a id="annot.015.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin"><span className="makierung">Conscription</span></span>
                    <a id="annot.015.e">{/*anchor*/}</a> 1813 viele Men
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chen gefordert wurden, die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e <br className="lb" />
                    aber <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr klein war, und wegen dem{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>arken{" "}
                    <span className="g.rend.script.latin">
                      De<span className="orig">ſ</span>
                      <span className="corr">s</span>ertiren
                    </span>
                    , nicht alles{" "}
                    <span className="orig">
                      nach<span className="orig">=</span>
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      gefoderte{" "}
                    </span>
                    <span className="corr">
                      Nach
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      gefo
                      <span className="orig" />
                      <span className="corr">r</span>derte{" "}
                    </span>
                    er<span className="orig">ſ</span>
                    <span className="corr">s</span>etzen{" "}
                    <span className="orig">kan</span>
                    <span className="corr">kann</span>, und nun von der Re
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>erve von 1812 geno<span className="orig">m̅</span>
<span className="corr">mm</span>en{" "}
                    <br className="lb" />
                    wird, <span className="orig">weiß</span>
                    <span className="corr">weißt</span> du{" "}
                    <span className="orig">vieleicht</span>
                    <span className="corr">vielleicht</span> noch nicht,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o auch, daß{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Hr.</span>.{" "}
                    <span className="expan">
                      H<span className="ex">err</span>
                    </span>
                    <a id="annot.016.s">{/*anchor*/}</a>{" "}
                    <span className="g.rend.script.latin"><span className="makierung">Trappenberg</span></span>
                    <a id="annot.016.e">{/*anchor*/}</a> und{" "}
                    <br className="lb" />
                    <a id="annot.017.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">Caspar</span>
                    <a id="annot.017.e">{/*anchor*/}</a> von{" "}
                    <span className="orig">neüem</span>
                    <span className="corr">neuem</span> aufgerufen wurden, indem
                    es an die vertau<span className="orig">ſ</span>
                    <span className="corr">s</span>chten <br className="lb" />
                    <span className="g.rend.script.latin">
                      <span className="g.enc.tagsdecl.cc.abbr-colon-sup orig">N<sup className="double-underline">r</sup>{" "}
                      </span>
                      <span className="expan">
                        <span className="ex">Nummern</span>{" "}
                      </span>
                    </span>
                    der <a id="annot.018.s">{/*anchor*/}</a>
                    <span className="makierung"><span className="g.rend.script.latin">
                      <span className="orig">Subsistuten</span>
                      <span className="corr">Substituten</span>
                    </span>
                    </span>
                    <a id="annot.018.e">{/*anchor*/}</a> geko<span className="orig">m̅</span>
<span className="corr">mm</span>en war, und bis
                    <span className="g.rend.script.latin">
                      <span className="abbr"> N.</span>{" "}
                      <span className="expan">
                        N<span className="ex">ummer</span>{" "}
                      </span>
                    </span>
                    127 fortgegangen i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>, <br className="lb" />
                    wodurch viele, die <span className="orig">ſ</span>
                    <span className="corr">s</span>ich frei glaubten in die
                    größte Verlegenheit{" "}
                    <span className="orig">
                      ver<span className="orig">=</span>
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ezt
                    </span>
                    <span className="corr">
                      ver
                      <br className="g.enc.tagsdecl.hyphenation.colon" />
                      setzt
                    </span>
                    {" "}wurden, und dienen <span className="orig">müßen</span>
                    <span className="corr">müssen</span>.
                  </p>
                  <p className="enc.tagsdecl.indent-verysmall">
                    <span className="orig">für</span>
                    <span className="corr">Für</span>{" "}
                    <span className="g.rend.script.latin">
                      <span className="persName">Caspar</span>{" "}
                    </span>
                    i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon vor 14 Tagen 1{" "}
                    <a id="annot.019.s">{/*anchor*/}</a>
                    <span className="makierung"><span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Rempl</span>
                    <span className="expan">
                      Rempl<span className="ex">açant</span>
                    </span>
                    </span>
                    <a id="annot.019.e">{/*anchor*/}</a>{" "}
                    <span className="orig">
                      einge<span className="orig">ﬅ</span>
                      <span className="corr">st</span>elt
                    </span>
                    <span className="corr">eingestellt</span> worden, der{" "}
                    <br className="lb" />
                    wie wir glauben brav i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und 1000{" "}
                    <span className="abbr"> r</span>
                    <span className="expan">
                      <span className="orig">r</span>
                      <span className="corr">R</span>
                      <span className="ex">eichstaler</span>
                    </span>
                    {" "}
                    ko<span className="orig">ﬅ</span>
                    <span className="corr">st</span>et,{" "}
                    <a id="annot.020.s">{/*anchor*/}</a>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Hr.</span>.
                    {" "}
                    <span className="expan">
                      H<span className="ex">err</span>
                    </span>{" "}
                    <span className="g.rend.script.latin">Trappenberg</span>
                    <a id="annot.020.e">{/*anchor*/}</a> wird wahr<span className="orig">=</span>
                    <br className="g.enc.tagsdecl.hyphenation.colon" />
                    scheinlich, durch ein Mini<span className="orig">ſ</span>
                    <span className="corr">s</span>terielles{" "}
                    <span className="g.rend.script.latin">Decret</span> frei
                    werden, weil er vor die<span className="orig">ſ</span>
                    <span className="corr">s</span>em <br className="lb" />
                  </p>
                  </span>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "70px",
                    paddingBottom: "230px",
                  }}
                >
                  {/* Insert Page 3 */}

                  <p>
                    <span className="politik">
                    <span className="pagebreak" id="index.xml-pb-d29e1301">
                      {/* <a href>[Page 3]</a> */}
                    </span>
                    Termin <span className="orig">gehe<span className="orig">ÿ</span>
<span className="corr">y</span>rathet</span>
                    <span className="corr">geheirathet</span> war, und{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span>{" "}
                    <a id="annot.021.s">{/*anchor*/}</a>
                    <span className="makierung"><span className="g.rend.script.latin">
                      Provi<span className="orig">ſ</span>
                      <span className="corr">s</span>or
                    </span>
                    </span>
                    <a id="annot.021.e">{/*anchor*/}</a> i
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>t! —
                    <a id="mark.004.e">{/*anchor*/}</a>
                    </span>
                  </p>
                  
                  <p className="enc.tagsdecl.indent-small">
                    <span className="orig">übrigens</span>
                    <span className="corr">Übrigens</span> bleibts hier{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o ziemlich beim alten außer
                    daß der <span className="orig">neüe</span>
                    <span className="corr">neue</span> Weg von{" "}
                    <br className="lb" />
                    <a id="annot.022.s">{/*anchor*/}</a>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      Hr</span>
                    <span className="expan">
                      H<span className="ex">errn</span>
                    </span>
                    {" "}
                    <span className="g.rend.script.latin">
                      <span className="makierung"><span className="persName">
                        Witten<span className="orig">ſ</span>
                        <span className="corr">s</span>tein
                      </span>
                      </span>
                    </span>
                    <a id="annot.022.e">{/*anchor*/}</a> an bis hier am{" "}
                    <a id="annot.023.s">{/*anchor*/}</a><span className="makierung">Brügel</span>{" "}
                    <a id="annot.023.e">{/*anchor*/}</a>
                    bald fertig i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und durch{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eine große{" "}
                    <br className="lb" />
                    Breite und hohe <span className="orig">lage</span>
                    <span className="corr">Lage</span> brav Staub macht, und den{" "}
                    <span className="makierung">Bleichen</span> <span className="orig">ſ</span>
                    <span className="corr">s</span>chadet.
                  </p>
                  <div className="closer">
                    Die <span className="abbr"> L.</span>
                    <span className="expan">
                      L<span className="ex">iebe</span>
                    </span>
                    {" "}
                    <span className="g.rend.script.latin">Mama</span>{" "}
                    <a id="annot.024.s">{/*anchor*/}</a>
                    <span className="persName"><span className="makierung">Patohm</span></span>
                    <a id="annot.024.e">{/*anchor*/}</a> deine <span className="makierung">Geschwister</span>
                    {" "}grüßen dich mit mir herzlich und <br className="lb" />
                    empfehlen dich dem gnädigen Schutze Gottes;{" "}
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="8words">
                      &nbsp;
                    </span>
                    <span className="text-right"  style={{ marginRight: "100px" }} >
                      Dein <span className="orig">treüer</span>
                      <span className="corr">treuer</span> Vater{" "}
                     
                    </span>
                    <div className="signed text-right">
                      <span className="g.rend.script.latin">
                        <span className="persName">
                          <span className="abbr"> C.</span>
                          <span className="expan">
                            C<span className="ex">aspar</span>
                          </span>
                          {" "}
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
                      <span className="corr">Gerne</span> hörte ich näch
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>en
                      <span className="orig">ſ</span>
                      <span className="corr">s</span> ein Bisgen von den Pfing
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>fe<span className="orig">ÿ</span>
<span className="corr">y</span>ertagen, wie du{" "}
                      <br className="lb" />
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>olche verlebt, wer da{" "}
                      gepredigt, wie die er<span className="orig">ﬅ</span>
                      <span className="corr">st</span>e Predigt von{" "}
                      <a id="annot.025.s">{/*anchor*/}</a>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr</span>
                      <span className="expan">
                        H<span className="ex">errn</span>
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="persName"><span className="makierung">Spies</span></span>
                      </span>
                      <a id="annot.025.e">{/*anchor*/}</a> <br className="lb" />
                      <span className="orig">aufgenomen</span>
                      <span className="corr">aufgenommen</span> worden{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ei, ob du auch einmal{" "}
                      <a id="annot.026.s">{/*anchor*/}</a>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        dHr</span>
                      {" "}
                      {/* <span className="expan">
                        d<span className="ex">en</span> Hr
                      </span> */}
                      {" "}
                      <span className="expan">
                        d<span className="ex">en</span> H
                        <span className="ex">errn</span>
                      </span>
                      {" "}
                      <span className="abbr">P.</span>{" "}
                      <span className="makierung"><span className="g.rend.script.latin">
                        <span className="persName">
                          Pa<span className="orig">ſ</span>
                          <span className="corr">s</span>
                          <span className="orig">ſ</span>
                          <span className="corr">s</span>avent
                        </span>
                      </span>
                      </span>
                      <a id="annot.026.e">{/*anchor*/}</a> be
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ucht <br className="lb" />
                      ha<span className="orig">ﬅ</span>
                      <span className="corr">st</span>, was der gute{" "}
                      <a id="annot.027.s">{/*anchor*/}</a>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr</span>
                      <span className="expan">
                        H<span className="ex">err</span>
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="persName"><span className="makierung">de Neufville</span></span>
                      </span>
                      <a id="annot.027.e">{/*anchor*/}</a> macht
                      <span className="abbr">p.</span>
                    </p>
                    <p className="enc.tagsdecl.indent-verysmall">
                      <span className="orig">auch</span>
                      <span className="corr">Auch</span> wäre es{" "}
                      <span className="orig">
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chiklich
                      </span>
                      <span className="corr">schicklich</span>,{" "}
                      <span className="orig">wan</span>{" "}
                      <span className="corr">wann</span> du
                      <a id="annot.028.s">{/*anchor*/}</a>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        dHr.</span>
                      {" "}
                      {/* <span className="expan">
                        d<span className="ex">en</span> Hr
                      </span> */}
                      <span className="expan">
                        d<span className="ex">en</span> H
                        <span className="ex">errn</span>
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          P<span className="orig"></span>
                          <span className="corr">.</span>
                          <sup className="double-underline">r</sup>{" "}
                        </span>
                        <span className="expan">
                          P<span className="ex">asto</span>r
                        </span>
                        {" "}
                        <span className="persName">Spies</span>{" "}
                      </span>
                      <a id="annot.028.e">{/*anchor*/}</a>
                      <span className="orig">bewillkomen</span>
                      <span className="corr">bewillkommen</span> würde
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>, <br className="lb" />
                      er <span className="orig">kent</span>
                      <span className="corr">kennt</span> uns gut, und es würde
                      ihn <span className="orig">freüen</span>
                      <span className="corr">freuen</span>.
                    </p>
                    <p>
                      <span className="orig">nun</span>
                      <span className="corr">Nun</span> noch eine{" "}
                      <span className="orig">leiße</span>
                      <span className="corr">leise</span> Frage ans Ohr,{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind die Briefe an{" "}
                      <a id="annot.029.s">{/*anchor*/}</a>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr</span>
                      <span className="expan">
                        H<span className="ex">err</span>
                      </span>

                      {" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon-sup">P<span className="orig"></span>
                        <span className="corr">.</span>
                        <sup className="double-underline">r</sup> </span>
                      {" "}
                      <span className="makierung"><span className="expan">
                        P<span className="ex">asto</span>r
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="persName">Nourne<span className="orig">ÿ</span>
<span className="corr">y</span></span>
                      </span>
                      </span>
                      <a id="annot.029.e">{/*anchor*/}</a> <br className="lb" />
                      <a id="annot.030.s">{/*anchor*/}</a>
                      <span className="makierung">
                      <span className="abbr">
                        M<span className="orig">ﬅ</span>
                        <span className="corr">st</span>r </span>
                      <span className="expan">
                        M<span className="ex">ei</span>st
                        <span className="ex">e</span>r
                      </span>
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="persName">Schinnenburg</span>
                      </span>
                      </span>
                      <a id="annot.030.e">{/*anchor*/}</a> und
                      <span className="g.rend.script.latin">
                        <a id="annot.031.s">{/*anchor*/}</a>
                        {" "}
                        <span className="persName"><span className="makierung">Hölsberg</span></span>
                        {" "}
                        <a id="annot.031.e">{/*anchor*/}</a>
                      </span>
                      auf der Po<span className="orig">ﬅ</span>
                      <span className="corr">st</span>?{" "}
                      <a id="mark.006.e">{/*anchor*/}</a>
                    </p>
                  </span>
                  <p>
                    <span className="musik">
                    <a id="mark.007.s">{/*anchor*/}</a>
                    <span className="orig">und</span>
                    <span className="corr">Und</span> endlich, wie hält{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich dein{" "}
                    <span className="orig">flügel</span>
                    <span className="corr">Flügel</span>,{" "}
                    <a id="mark.008.s">{/*anchor*/}</a>und wie{" "}
                    <span className="g.rend.script.latin">avancirt</span>{" "}
                    <span className="persName">Fridrich</span>{" "}
                    <br className="lb" />
                    in der{" "}
                    <span className="g.rend.script.latin">
                      Mu<span className="orig">ſ</span>
                      <span className="corr">s</span>ic
                    </span>
                    <a id="mark.007.e">{/*anchor*/}</a></span> und im{" "}
                    <span className="g.rend.script.latin">
                      Franzö<span className="orig">ſ</span>
                      <span className="corr">s</span>i
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chen
                    </span>
                    ?<span style={{ display: "inline-block" }}>&nbsp;</span>wäre
                    es nicht gut,{" "}
                    <span className="orig">wan</span>
                    <span className="corr">wann</span> du <br className="lb" />
                    auch das{" "}
                    <span className="g.rend.script.latin">
                      <span className="orig">
                        Jtalieni<span className="orig">ſ</span>
                        <span className="corr">s</span>che
                      </span>
                      <span className="corr">Italienische</span>{" "}
                    </span>
                    mit{" "}
                    <span className="orig">
                      fort<span className="orig">ſ</span>
                      <span className="corr">s</span>ezte
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">fortsetztest</span>?
                    <a id="mark.008.e">{/*anchor*/}</a>
                  </p>
                  <p>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      dHr
                      {" "}
                    </span><span className="orig">.</span>
                    <span className="expan">
                      <span className="orig">d</span>
                      <span className="corr">D</span>
                      <span className="ex">em</span> Hr{" "}
                    </span>
                    <span className="expan">
                      <span className="orig">d</span>
                      <span className="corr">D</span>
                      <span className="ex">em</span> H
                      <span className="ex">errn</span>
                    </span>
                    {" "}
                    <a id="annot.032.s">{/*anchor*/}</a>
                    <span className="g.rend.script.latin">
                      <span className="persName"><span className="makierung">Ekard</span></span>
                    </span>
                    <a id="annot.032.e">{/*anchor*/}</a> meine be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>e{" "}
                    <span className="orig">empfehlung</span>
                    <span className="corr">Empfehlung</span>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>

          <div
            className="stellenerläuterung"
            style={{
              top: "834px",
            }}
          >
            <hr />
            <label>passato</label>
            <p>
            passato. Ital. Kaufmannssprache: „des vergangenen Monats“.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "880px",
            }}
          >
            <hr />
            <label>Casimir</label>
            <p>
            Gemeint ist ‚Kaschmir‘. Gewebe aus der Unterwolle der Kaschmirziege (Himalaya), auch ‚Shawl‘ genannt.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "860px",
            }}
          >
            <hr />
            <label>paquet F. E.</label>
            <p>
            Üblicherweise wurden Paket und Paketbegleitschein deutlich mit den Initialen des Empfängers (hier Friedrich Engels sen.) in lateinischen Großbuchstaben beschriftet.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1000px",
            }}
          >
            <hr />
            <label>Eng. Sieperman</label>
            <p>
            Christian Engelbert Siepermann (1795–?), Kaufmann in Barmen.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "950px",
            }}
          >
            <hr />
            <label>Condition</label>
            <p>
            Hier: Anstellung.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1124px",
            }}
          >
            <hr />
            <label>Kethman</label>
            <p>
            Johann Kethmann jun. (1793–1865), Kaufmann. 1813 ebenfalls in Frankfurt am Main in Ausbildung zum Kaufmann, seit dieser Zeit mit Friedrich Engels sen. befreundet.
            </p>
          </div>

          <div
            className="stellenerläuterung "
            style={{
              top: "1269px",
            }}
          >
            <hr />
            <label>jener Dichter</label>
            <p>
            Vermutlich Christoph Rheineck (1748–1797), Kaufmann, Gastwirt und Komponist in Memmingen. Johann Caspar Engels zitiert die drei letzten Zeilen des Lieds <i>Lebensgebrauch</i> (3 Strophen). Text und Melodie stammen vermutlich von Rheineck. <i>(Dritte Lieder-Sammlung mit Klavier-Melodien. In die Musik gesezt von Christoph Rheineck. Memmingen 1784, S. 16.) </i>
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1358px",
            }}
          >
            <hr />
            <label>Mama</label>
            <p>
            Ida Louise Friederike Engels, geb. Noot (1762–1822), Großmutter von Friedrich Engels.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1528px",
            }}
          >
            <hr />
            <label>Osberghaus</label>
            <p>
            Christian Leopold Osberghaus (1774–1854 ), Arzt, ab 1806 Kreisphysikus in Ründeroth bei Engelskirchen</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2106px",
            }}
          >
            <hr />
            <label>Joh: 16 V 24</label>
            <p>
            Johannes 16,24: „Bisher habt ihr um nichts gebeten in meinem Namen. Bittet, so werdet ihr empfangen, auf dass eure Freude vollkommen sei.“ (LUT)
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2316px",
            }}
          >
            <hr />
            <label>Gebauer und Querfurth</label>
            <p>
            Kunden der Firma Caspar Engels Söhne
          </p>
          </div>

         
          <div
            className="stellenerläuterung"
            style={{
              top: "2270px",
            }}
          >
            <hr />
            <label>6 mille = 6000.</label>
          </div>

           <div
            className="stellenerläuterung"
            style={{
              top: "2200px",
            }}
          >
            <hr />
            <label>kanten</label>
            <p>
            ‚Kanten‘ ist das niederdeutsche Wort für gewirkte Spitzen (z.B. aus Garn).
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2248px",
            }}
          >
            <hr />
            <label>Langetten</label>
            <p>
            Fachterminus der Spitzenherstellung, benannt nach dem praktizierten Schlingstich in Form einer eingerollten Zunge (frz. languette: Zünglein) (vgl. Anne Wanner‘s Textiles in History: http://www.annatextiles.ch/vo_sti/voca3/voc3.htm).
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1800px",
            }}
          >
            <hr />
            <label>Brochirte</label>
            <p>
            Mit besonderer Technik eingewebte Muster in Stoffen.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2372px;",
            }}
          >
            <hr />
            <label>Kriegsunruhen</label>
            <p>
            Angespielt wird hier u.a. auf die schwierige Situation in Sachsen, denn der sächsische König wechselte im April 1813 die Seiten und wurde Bündnispartner Napoleons. Zwischen Juni und August 1813 bestand ein brüchiger Waffenstillstand zwischen Frankreich auf der einen und den Bündnispartnern Österreich, Preußen und Russland auf der anderen Seite. Das von Franzosen besetze Hamburg konnte zwischen März und Mai 1813 kurzzeitig durch russische Truppen von den französischen Besatzern befreit werden. Nach der Wiedereroberung durch französische Truppen fielen mehrere tausend Hamburger den harten Strafmaßnahmen zum Opfer.

          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2408px",
            }}
          >
            <hr />
            <label>Leipz. und Ff. a/o Messen</label>
            <p>
            Wegen der Kriegshandlungen und Einquartierungen wird die Situation in Leipzig im Jahr 1813 so beschrieben: „Unter diesen Umständen war die Ostermesse kläglich ausgefallen.“ (Ernst Hasse: <i>Geschichte der Leipziger Messen.</i> Leipzig 1885, S. 165.) In Frankfurt (Oder) fanden Messen an Reminiscere (2. Fastensonntag), am Sonntag nach Margaretha (20. Juli) und an Martini (11. November) statt. Die Reminiscere-Messe 1813 „war abgehalten worden, es hatte auf derselben aber so gut wie kein Verkehr stattgefunden.“ ([Karl von Prittwitz]: <i>Beiträge zur Geschichte des Jahres 1813.</i> Band 1. Potsdam 1843, S. 223.)
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2950px",
            }}
          >
            <hr />
            <label>Krebs</label>
            <p>
            Friedrich Wilhelm Krebs (1768–1819), Kaufmann in Barmen.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2850px",
            }}
          >
            <hr />
            <label>Kremling</label>
            <p>
            August Karl Gottlieb Kremling (1787–?), Teilhaber der Firma Wwe. Johann Wilhelm Clever in Barmen.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2650px",
            }}
          >
            <hr />
            <label>Caspar</label>
            <p>
            Johann Caspar Engels (1792–1863), Teilhaber der Firma Caspar Engels Söhne in Barmen. Onkel von Friedrich Engels jun.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2609px",
            }}
          >
            <hr />
            <label>Conscription</label>
            <p>
            Erfassung der männlichen Bevölkerung eines Gebiets nach ihrer Tauglichkeit für den Wehrdienst.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2722px",
            }}
          >
            <hr />
            <label>Trappenberg</label>
            <p>
            Eduard Trappenberg (1792–1852), Kaufmann in Barmen.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2752px",
            }}
          >
            <hr />
            <label>Subsistuten</label>
            <p>
            Fälschlich für ‚Substituten‘: Ersatzmänner für abwesende Militärdienstpflichtige.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2846px",
            }}
          >
            <hr />
            <label>Remplaçant</label>
            <p>
            Stellvertreter, Ersatzmann für einen Militärdienstpflichtigen. Frz. remplacer: ‚ersetzen‘. Zur Aufrechterhaltung des wirtschaftlichen Lebens war es im französischen Conscriptionssystem möglich, dass u.a. Kaufleute gegen Bezahlung Remplaçants (auch: Remplassanten oder Nachmänner) für ihre dienstpflichtigen Söhne stellen konnten. Diese Möglichkeit bestand ab 1814 in Preußen nicht mehr. Stattdessen gab es u. a. in Barmen und Elberfeld Fälle von Täuschung, Betrug und Bestechung zwecks Befreiung von der Wehrpflicht. Der Elberfelder Landrat Otto von Diest (1821–1901) deckte 1854 ein System der illegalen Dienstbefreiung auf. Seine Ermittlungen führten zu 150 Verurteilungen zu Festungshaft und Nachdienen. Von Diest wurde anschließend auf Betreiben betroffener Familien versetzt. Ähnliche Vorwürfe gegen die Unternehmerschicht im Niederbergischen gab es seit den 1820er Jahren bis zum Jahr 1870. (Vgl. Friedrich Zunkel: <i>Der rheinisch-Westfälische Unternehmer 1834–1879. Ein Beitrag zur Geschichte des deutschen Bürgertums im 19. Jahrhundert.</i> Köln, Opladen 1962, S. 86f.; Bernhard Schmitt: <i>Armee und staatliche Integration. Preußen und die Habsburgermonarchie 1815-1866. Rekrutierungspolitik in den neuen Provinzen: Staatliches Handeln und Bevölkerung.</i> Paderborn u. a. 2007, S. 210–214.)
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3274px",
            }}
          >
            <hr />
            <label>Provisor</label>
            <p>
            Verwalter.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3344px",
            }}
          >
            <hr />
            <label>Wittenstein</label>
            <p>
            Vermutlich Johannes Friedrich Wittenstein (1772–1847), Besitzer einer Türkischrot-Färberei an der Haspeler Brücke in Barmen. Bruder von Johanna Wilhelmine Overbeck, geb. Wittenstein (1774–1844) {/*, verehelicht mit Johann Heinrich Overbeck (1767–1833), Kaufmann in Unterbarmen.  */}

          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3324px",
            }}
          >
            <hr />
            <label>Brügel</label>
            <p>
            Gemeint ist die Ortslage ‚Brögel‘ am südlichen Wupperufer. Der beschriebene Weg ist die neue Verbindungsstraße zwischen Elberfeld und Barmen (heute: Friedrich-Engels-Allee).
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3411px",
            }}
          >
            <hr />
            <label>Bleichen</label>
            <p>
            Leinen-, Hanf- und Baumwollfasern wurden im naturfarbigen Zustand versponnen und mussten vor dem Verkauf gebleicht werden. Auf einer Wiese in der Nähe eines Flusses, dem Bleichplatz oder auch der Tuchbleiche, wurden die von der Wäsche noch nassen Gewebe flach ausgelegt oder aufgespannt und kontinuierlich feucht gehalten. Manche Bleicher besprengten die Textilien auch mit Laugen. Etwa durch Straßenbau bedingter Staub erschwerte den Prozess.

          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3432px",
            }}
          >
            <hr />
            <label>Patohm</label>
            <p>
            Benjamin Engels (1751–1820), genannt ‚Patohm‘ (Patenonkel), Teilhaber der Firma Caspar Engels Söhne in Barmen. Onkel des Vaters von Friedrich Engels.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3522px",
            }}
          >
            <hr />
            <label>Geschwister</label>
            <p>
            Die Geschwister des Vaters von Friedrich Engels sind Johann Caspar Engels (1792–1863), August Engels (1797–1874) und Louise Engels (1799–1845).
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3627px",
            }}
          >
            <hr />
            <label>Spies</label>
            <p>
            Johann Christoph Spies (1771–1829), reformierter Pfarrer und Konsistorialrat in Frankfurt am Main.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3695px",
            }}
          >
            <hr />
            <label>Passavent</label>
            <p>
            Jakob Ludwig Passavant (1751–1827), reformierter Pfarrer in Frankfurt am Main.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3662px",
            }}
          >
            <hr />
            <label>de Neufville</label>
            <p>
            Mathias Wilhelm de Neufville (1762–1842), Arzt in Frankfurt am Main.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3762px",
            }}
          >
            <hr />
            <label>Pastor Nourne<span className="orig">ÿ</span>
<span className="corr">y</span></label>
            <p>
            Anton Hermann Nourney (1762–1834), ab 1802 Pfarrer in Elberfeld.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3792px",
            }}
          >
            <hr />
            <label>Meister Schinnenburg</label>
            <p>
            Johann Wilhelm Schinnenburg (1774–1820), Lehrer an der Brucher Schule in Barmen.
          </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3806px",
            }}
          >
            <hr />
            <label>Hölsberg</label>
            <p>
            Johann Abraham Hülsberg (1741–1821), Färbermeister in der Firma Wuppermann in (Barmen-)Wichlinghausen.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3916px",
            }}
          >
            <hr />
            <label>Ekard</label>
            <p>
            Johann Friedrich Eckhardt (1762–1841), Inhaber einer 1809 erstmalig erwähnten Wollhandlung in Frankfurt am Main. Lehrherr von Friedrich Engels sen.
          </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
