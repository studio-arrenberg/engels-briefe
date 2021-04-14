import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "75";
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
                  style={{ minHeight: "680px", paddingTop: "140px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <h2>
                      <span className="headingNumber">1. </span>
                    </h2>
                    <div className="pagebreak" id="index.xml-pb-d29e158"></div>
                    <div
                      className="teidiv1"
                      style={{ display: "none" }}
                      id="index.xml-body.1_div.1_div.1"
                    >
                      <h3>
                        <span className="headingNumber">1.1. </span>
                      </h3>
                      <p>
                        <span className="placeName">
                          {" "}
                          <span className="g.rend.script.latin">Barmen</span>
                        </span>
                        <span style={{ display: "inline-block" }} width="1word">
                          &nbsp;
                        </span>
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}d</span>
                        <span className="expan">
                          d<span className="ex">en</span>
                        </span>{" "}
                        3{" "}
                        <span className="g.rend.script.latin">
                          <span className="abbr"> Febr</span>
                          <span className="expan">
                            Febr<span className="ex">uar</span>
                          </span>
                        </span>
                        1814 <br className="lb" />{" "}
                        <span className="persName">
                          {" "}
                          <span className="g.rend.script.latin">
                            Caspar
                            <span
                              style={{ display: "inline-block" }}
                              width="1word"
                            >
                              &nbsp;
                            </span>
                            Engels <span className="abbr"> senr.</span>
                            <span className="expan">
                              sen<span className="ex">io</span>r
                            </span>
                          </span>
                        </span>{" "}
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="6em">
                          &nbsp;
                        </span>
                        <span className="abbr">
                          {" "}
                          <span className="g.rend.script.latin">R</span>
                        </span>
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}d</span>
                        <span className="expan">
                          d<span className="ex">en</span>
                        </span>{" "}
                        5{" "}
                        <span className="g.rend.script.latin">
                          <span className="abbr"> Febr.</span>
                          <span className="expan">
                            Febr<span className="ex">uar</span>
                          </span>
                        </span>{" "}
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="8em">
                          &nbsp;
                        </span>
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}d</span>
                        <span className="expan">
                          d<span className="ex">en</span>
                        </span>{" "}
                        15 <span className="g.rend.script.latin">März</span>.
                      </p>
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
                      <p className="g.enc.tagsdecl.wd.vertical-left">
                        Herrn <br className="lb" />{" "}
                        <span className="persName">
                          {" "}
                          <span className="g.rend.script.latin">
                            Friederich Engels
                          </span>
                        </span>
                        . <br className="lb" />
                        <span className="small-adress">
                          <span className="abbr">Add
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              :<sup>r</sup>
                            </span>
                          </span>
                          <span className="expan">
                            Add<span className="ex">esse</span>
                          </span>{" "}
                          Herrn{" "}
                          <span className="persName">
                            {" "}
                            <span className="g.rend.script.latin">
                              <span className="abbr"> Joh.</span>
                              <span className="expan">
                                Joh<span className="ex">ann</span>
                              </span>
                              <span className="abbr"> Frid.</span>
                              <span className="expan">
                                Fri<span className="ex">e</span>d
                                <span className="ex">rich</span>
                              </span>
                              Eckhard
                            </span>
                          </span>
                          <span className="abbr"> sr.</span>
                          <span className="expan">
                            s<span className="ex">enio</span>r
                          </span>{" "}
                          <br className="lb" /> <br className="lb" />
                          <span
                            style={{ display: "inline-block" }}
                            width="1char"
                          >
                            &nbsp;
                          </span>
                          <span
                            className="wave"
                            style={{ textDecoration: "underline" }}
                          >
                            Ganzfrei
                          </span>
                          <span style={{ display: "inline-block" }}>
                            &nbsp;
                          </span>
                          in
                          <br className="lb" />
                        </span>{" "}
                        <span className="g.rend.script.latin">
                          <span className="placeName">
                            Franckfurth <sup>a</sup>/m.
                          </span>
                        </span>
                      </p>
                    </div>
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.4">
                      <h3>
                        <span className="headingNumber">1.4. </span>
                      </h3>
                    </div>
                  </div>
                </section>
              </div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div type="mark">
                  {/* <span type="krieg" from="#mark.001.s" to="#mark.001.e"/> */}
                  {/* <span type="musik" from="#mark.002.s" to="#mark.002.e"/> */}
                  {/* <span type="geschaeftliches" from="#mark.003.s" to="#mark.003.e"/> */}
                  {/* <span type="musik" from="#mark.004.s" to="#mark.004.e"/> */}
                  <span type="religion" from="#mark.005.s" to="#mark.005.e" />
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "15px",
                    paddingLeft: "80px",
                    paddingBottom: "60px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <div className="dateline">
                      <span className="orig">„</span>
                      <span className="corr" />
                      <span className="placeName">Barmen</span>{" "}
                      <span className="date">
                        3
                        <span className="abbr">
                          Feb<span className="orig">:</span>
                          <span className="corr">.</span>
                        </span>
                        <span className="expan">
                          Feb<span className="ex">ruar</span>
                        </span>
                        1814
                      </span>
                    </div>
                  </div>

                  <div className="opener">
                    <div className="salute">
                      <a id="teaser.part.001.s">{/*anchor*/}</a>Lieber{" "}
                      <span className="persName">Friedrich</span>!
                    </div>
                  </div>
                  <p>
                    <a id="mark.001.s">{/*anchor*/}</a>Dein Brief vom{" "}
                    <span className="date">31</span>{" "}
                    <span className="makierung">
                    <span className="g.rend.script.latin">
                      <span className="abbr">
                        pa<span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>. </span>
                      <span className="expan">
                        pa<span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>
                        <span className="ex">ati</span>
                      </span>
                    </span>
                    </span>{" "}
                    war zwar beruhigend für uns, doch i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> mir das{" "}
                    <br className="lb" />
                    noch nicht gnug, daß die Sache wegen der Landwehr{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eitdem{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ill lag,{" "}
                    <br className="lb" />
                    ich habe deshalb <span className="orig">heüte</span>
                    <span className="corr">heute</span> in der Einlage an{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="g.rend.script.latin"><span className="makierung">Ekhard</span></span>
                    </span>{" "}
                    ge<span className="orig">ſ</span>
                    <span className="corr">s</span>chrieben und{" "}
                    <br className="lb" />
                    ihn gebeten, <span className="orig">ſ</span>
                    <span className="corr">s</span>ich dahin zu verwenden, daß
                    du von der Li<span className="orig">ﬅ</span>
                    <span className="corr">st</span>e ausge<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    lö<span className="orig">ſ</span>
                    <span className="corr">s</span>cht werde
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und du{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o lange in
                    <span className="placeName">
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr"> FFurth </span>
                        <span className="expan">
                          F<span className="ex">rank</span>furth
                        </span>
                      </span>
                    </span>{" "}
                    bleiben mögte<span className="orig">ﬅ</span>
                    <span className="corr">st</span>, bis dich{" "}
                    <br className="lb" />
                    un<span className="orig">ſ</span>
                    <span className="corr">s</span>re Obrigkeit aufruft
                    <a id="teaser.part.001.e">{/*anchor*/}</a>,{" "}
                    <span className="orig">dan</span>
                    <span className="corr">dann</span> in jedem{" "}
                    <sup className="sup" id="txt.add001">
                      <span className="orig">land</span>
                      <span className="corr">Land</span> &amp;
                    </sup>{" "}
                    <span className="g.rend.script.latin">Canton</span> i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> ja die{" "}
                    <span className="g.rend.script.latin">Organisation</span>{" "}
                    <br className="lb" />
                    der Landwehr, und nur un<span className="orig">ſ</span>
                    <span className="corr">s</span>er Ort hat Recht dich
                    einzufordern, was <br className="lb" />
                    aber wie ich fa<span className="orig">ﬅ</span>
                    <span className="corr">st</span> hoﬀe nicht ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chehen wird, da man nun die
                    von <br className="lb" />
                    1795 einfordert, und die von 1796 frei und ruhig läßt.
                    <a id="mark.001.e">{/*anchor*/}</a>
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <a id="mark.002.s">{/*anchor*/}</a>
                    <span className="orig">Dan</span>
                    <span className="corr">Dann</span> habe ich ihm auch von
                    deinem <span className="g.rend.script.latin">Fagot</span>{" "}
                    lernen ge<span className="orig">ſ</span>
                    <span className="corr">s</span>agt, daß ich{" "}
                    <br className="lb" />
                    dir dis gern erlaubte, unter dem{" "}
                    <span className="abbr"><span className="makierung">Beding:</span></span> daß du deine{" "}
                    <span className="orig">
                      Schuld<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      digkeit
                    </span>
                    <span className="corr">
                      Schul<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      digkeit
                    </span>
                    {" "}in <span className="orig">ſ</span>
                    <span className="corr">s</span>einen Ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chäften gut wahrnehme
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>, und{" "}
                    <span className="orig">dan</span>
                    <span className="corr">dann</span> dich auf{" "}
                    <br className="lb" />
                    die<span className="orig">ſ</span>
                    <span className="corr">s</span>em{" "}
                    <span className="g.rend.script.latin">Jnstrument</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o wie aufm{" "}
                    <span className="g.rend.script.latin">Clavier</span> fleißig
                    übte<span className="orig">ﬅ</span>
                    <span className="corr">st</span>.
                  </p>
                  <p className="enc.tagsdecl.indent-verysmall">
                    <span className="orig">dis</span>
                    <span className="corr">Dis</span> wir
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> du{" "}
                    <span className="abbr"> L.</span>
                    <span className="expan">
                      L<span className="ex">ieber</span>
                    </span>{" "}
                    <span className="persName">Friedrich</span> auch wohl gern
                    erfüllen, und <span className="orig">ſ</span>
                    <span className="corr">s</span>o <br className="lb" />
                    mögte{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">Ekhard</span>
                    </span>{" "}
                    <span className="orig">dan</span>
                    <span className="corr">dann</span> die 150{" "}
                    <a id="annot.001.s">{/*anchor*/}</a>
                    <span className="abbr">
                      {" "}
                      <span className="g.rend.script.latin"><span className="makierung">F</span></span>.
                    </span>
                    <span className="orig" />
                    <span className="corr">Gulden</span>
                    <a id="annot.001.e">{/*anchor*/}</a> |:
                    <span className="orig"> </span>
                    <span className="corr" />
                    <spam className="makierung">was freilig viel i<span className="orig">ﬅ</span>
                    <span className="corr">st</span></spam>
                    <span className="orig"> </span>
                    <span className="corr" />
                    :| <span className="orig">ſ</span>
                    <span className="corr">s</span>einerzeit{" "}
                    <br className="lb" />
                    für das <span className="orig">neüe</span>
                    <span className="corr">neue</span>{" "}
                    <span className="g.rend.script.latin">Fagot</span> für mich
                    auslegen.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <span className="orig">aus</span>
                    <span className="corr">Aus</span> die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>em Vorgang{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>iehe
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> du
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon, daß ich deine Wün
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>che <br className="lb" />
                    erfüllen will, und dein Ver<span className="orig">ſ</span>
                    <span className="corr">s</span>prechen, uns die Ko
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en hernach{" "}
                    <br className="lb" />
                    durch Fleiß und Arbeit einzubringen,{" "}
                    <span className="g.rend.script.latin">
                      <span className="orig">Acceptire</span>
                      <span className="corr">acceptire</span>
                    </span>
                    .
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    Du{" "}
                    <span className="orig">
                      kan<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">
                      kann<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>{" "}
                    al<span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        dHr</span>
                      <span className="expan">
                        d<span className="ex">em</span> Hr
                      </span>
                      <span className="expan">
                        d<span className="ex">em</span> H
                        <span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="g.rend.script.latin"><span className="makierung">Almenräder</span></span>{" "}
                    </span>
                    von dem ich viel <span className="orig">gutes</span>
                    <span className="corr">Gutes</span> <br className="lb" />
                    gehört, den Auftrag geben, dir ein gutes{" "}
                    <span className="g.rend.script.latin">Fagot</span>, wie es{" "}
                    <br className="lb" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ein muß in{" "}
                    <span className="g.rend.script.latin">
                      Dre<span className="orig">ſ</span>
                      <span className="corr">s</span>den
                    </span>{" "}
                    zu be<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ellen, und ich hoﬀe, du wir
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> <br className="lb" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o viel drauf lernen, daß du
                    mit deinen Brüdern uns <br className="lb" />
                    <span className="abbr">
                      {" "}<span className="orig">ſ</span>
                      <span className="corr">s</span>.</span>
                    <span className="expan">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="ex">einer</span>
                    </span>{" "}
                    Zeit an den <span className="makierung">Böken</span> viele <span className="orig">Freüde</span>
                    <span className="corr">Freude</span> damit machen werde
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "35px",
                    paddingLeft: "80px",
                    paddingBottom: "175px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <p className="enc.tagsdecl.indent-small">
                    <span className="orig">einliegend</span>
                    <span className="corr">Einliegend</span>{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chike
                    </span>
                    <span className="corr">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chicke
                    </span>{" "}
                    ich dir 2 Briefe an{" "}
                    <span className="persName">
                      {" "}
                      <span className="makierung">
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          Ab
                          <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                            :<sup>m</sup>
                          </span>
                          </span>
                        <span className="expan">
                          Ab<span className="ex">raham</span>{" "}
                        </span>
                        Lohe{" "}
                      </span>
                      </span>
                    </span>
                    und{" "}
                    <span className="persName">
                      {" "}
                      <span className="makierung">
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          Joh<span className="orig">:</span>
                          <span className="corr">.</span>
                        </span>
                        <span className="expan">
                          Joh<span className="ex">ann</span>
                        </span>
                        {" "}Waxelberg
                      </span>
                      </span>
                    </span>{" "}
                    <br className="lb" />
                    
                    die am <span className="orig">Sontag</span>
                    <span className="corr">Sonntag</span> nach
                    <span className="placeName">
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                           <span className="g.rend.script.latin">Ffurth</span>
                        </span>
                        <span className="expan">
                          F<span className="ex">rank</span>furth
                        </span>
                      </span>
                    </span>{" "}
                    <span className="g.rend.script.latin">
                      <span className="orig">Marchirt</span>
                      <span className="corr">marchirt</span>
                    </span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind, und{" "}
                    <span className="orig">vieleicht</span>
                    <span className="corr">vielleicht</span> Sam
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ag <br className="lb" />
                    oder 
                    <span className="makierung"><span className="orig">Sontag</span>
                    <span className="corr">Sonntag</span> dort oder in
                    <span className="orig">eürer</span>
                    <span className="corr">eurer</span> Gegend ankom̅en werden;</span>{" "}
                    <br className="lb" />
                    erkundige{" "}
                    <sup className="sup" id="txt.add002">
                      dich
                    </sup>{" "}
                    al<span className="orig">ſ</span>
                    <span className="corr">s</span>o überall nach ihrer Ankunft,
                    damit die<span className="orig">ſ</span>
                    <span className="corr">s</span>e Knaben{" "}
                    <br className="lb" />
                    die Briefe erhalten, und wie es den
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>elben ergangen{" "}
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      i<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>, <br className="lb" />
                    auch wohin ihre{" "}
                    <span className="orig">
                      Be<span className="orig">ﬅ</span>
                      <span className="corr">st</span>imung
                    </span>
                    <span className="corr">
                      Be<span className="orig">ﬅ</span>
                      <span className="corr">st</span>immung
                    </span>{" "}
                    i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>; ich hoﬀe mit dir, daß der{" "}
                    <br className="lb" />
                    Friede nicht mehr ferne <span className="orig">ſ</span>
                    <span className="corr">s</span>ei, und die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e mit ihren Nachbarn nicht{" "}
                    <br className="lb" />
                    lange mehr dienen brauchen.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <a id="mark.003.s">{/*anchor*/}</a>{" "}
                    <span className="orig">daß</span>
                    <span className="corr">Daß</span> du bei{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr. </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">Ekhard</span>
                    </span>
                    {" "}an die Bücher{" "}
                    <span className="orig">
                      kom<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">
                      komm<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    , i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> mir ganz{" "}
                    <br className="lb" />
                    recht, und ich <span className="orig">ſ</span>
                    <span className="corr">s</span>chließe bei dem neuen
                    Lehrling daraus, daß <br className="lb" />{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr. </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr"> Ek.</span>
                        <span className="expan">
                          Ek<span className="ex">hard</span>
                        </span>
                      </span>
                    </span>
                    {" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eine Ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chäfte wieder{" "}
                    <span className="orig">beßer</span>
                    <span className="corr">besser</span> gehen.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <span className="orig">deine</span>
                    <span className="corr">Deine</span> Eintheilung der Stunden{" "}
                    <span className="orig">gefält</span>
                    <span className="corr">gefällt</span> mir, wohl genützte{" "}
                    <br className="lb" />
                    Zeit macht viele <span className="orig">Freüde</span>
                    <span className="corr">Freude</span>.
                    <a id="mark.003.e">{/*anchor*/}</a>
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <a id="mark.004.s">{/*anchor*/}</a>
                    <span className="religion">
                      <a id="mark.005.s">{/*anchor*/}</a>Die{" "}
                      <span className="abbr"> L.</span>
                      <span className="expan">
                        L<span className="ex">iebe</span>
                      </span>{" "}
                      <span className="g.rend.script.latin">Mama</span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er Tage ziemlich heiter{" "}
                      <span className="orig">geweßen</span>
                      <span className="corr">gewesen</span>, dein{" "}
                      <br className="lb" />
                      Brief machte ihr <span className="orig">Freüde</span>
                      <span className="corr">Freude</span>, und{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie{" "}
                      <span className="makierung">
                      <span className="g.rend.script.latin">
                        <span className="orig">Accordirte</span>
                        <span className="corr">accordirte</span>
                      </span>
                      </span>
                      {" "}dir auf der Stelle <br className="lb" />
                      das neue{" "}
                      <span className="g.rend.script.latin">Fagot</span>,{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie läßt dich mit mir und
                      allen <span className="orig">Freünden</span>
                      <span className="corr">Freunden</span>{" "}
                      <br className="lb" />
                      herzlich grüßen, und lebt der Zuver
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>icht, daß du dich, durch{" "}
                      <br className="lb" />
                      die Ge<span className="orig">ſ</span>
                      <span className="corr">s</span>chäfte und das Spielen doch
                      auch nicht vom{" "}
                      <span className="orig">Gebät</span>
                      <span className="corr">Gebet</span> <br className="lb" />
                      und <span className="orig">Leßen</span>
                      <span className="corr">Lesen</span> des{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        
                        (Göttl </span>
                      <span className="expan">
                        Göttl<span className="ex">ichen</span>
                      </span>{" "}
                      Wortes werde<span className="orig">ﬅ</span>
                      <span className="corr">st</span> abhalten{" "}
                      <span className="orig">laßen</span>
                      <span className="corr">lassen</span>.
                      <a id="mark.005.e">{/*anchor*/}</a>
                    </span>
                    <a id="mark.004.e">{/*anchor*/}</a>
                  </p>
                  <div className="closer">
                    Ihm un<span className="orig">ſ</span>
                    <span className="corr">s</span>rem Herrn und Heÿlande Je
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>u Chri
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>o empfehlen{" "}
                    <br className="lb" />
                    wir dich und bleiben
                    <span style={{ display: "inline-block" }} width="3words">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Deine <span className="orig">Treüe</span>
                      <span className="corr">Treue</span> Eltern
                    </div>
                    <div className="signed">
                      {" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr"> C.</span>
                        <span className="expan">
                          C<span className="ex">aspar</span>{" "}
                        </span>
                        Engels
                      </span>
                      .
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>pass.</label>
            <p>
            passato. Ital. Kaufmannssprache: „des vergangenen Monats“.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Ekhardt</label>
            <p>
            Johann Friedrich Eckhardt (1762–1841), Kaufmann in Frankfurt am Main und Lehrherr von Friedrich Engels sen.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Beding</label>
            <p>
            Der Beding: gemäß Adelung veraltet für ‚Bedingung‘ (Bd. 2, „Beding“: )
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>F</label>
            <p>
            Floren: Abk. für Gulden (nach Fiorino d’oro, der zuerst in Florenz geprägten Goldmünze).
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>was freilig viel ist</label>
            <p>
            Hausmusik spielte in der Familie Engels eine große und selbstverständliche Rolle. Johann Caspar spielte Orgel, der Sohn lernte Klavier und Fagott.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Almenräder</label>
            <p>
            Karl Almenräder (1786–1843), Instrumentenbauer und Fagottist, wirkte um 1814 in Frankfurt am Main.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Böken</label>
            <p>
            Nach Knieriem (S. 181, Anm. 1 zu Brief 75) handelt es sich um ein Bauerngut der Familie Engels südwestlich des Barmer Bruchs.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Abm Lohe</label>
            <p>
            Abraham Lohe (1764–1818), Besitzer einer Bleicherei in Barmen und 1814 Kriegsfreiwilliger.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>Joh. Waxelberg</label>
            <p>
            Johannes Wechselberg (1794–?), Spitzenwirker in der Firma Caspar Engels Söhne, 1813/14 Kriegsfreiwilliger.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>die am Sonntag […] ankommen werden</label>
            <p>
            Die Entfernung zwischen Barmen und Frankfurt beträgt ca. 200 km, die Reisedauer zu Fuß 45 bis 50 Stunden.
          </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>accodirte</label>
            <p>
            Accordi(e)ren. Frz. accorder: ‚gewähren‘, ‚zu etwas seine Zustimmung geben‘.
          </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
