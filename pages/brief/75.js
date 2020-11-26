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
                style={{ paddingTop: "100px", paddingBottom: "160px" }}
              >
                {/* Insert Kuvert */}
                <div className="kuvert" id="index.xml-body.1_div.1">
                  <h2>
                    <span className="headingNumber">1. </span>
                  </h2>
                  <div className="pagebreak" id="index.xml-pb-d29e158"></div>
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p>
                      <span className="placeName">
                        <span className="g.rend.script.latin">Barmen</span>
                      </span>
                      <span style={{ display: "inline-block" }} width="1word">
                        &nbsp;
                      </span>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (d)
                      </span>
                      <span className="expan">
                        d<span className="ex">en</span>
                      </span>{" "}
                      3
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Febr)</span>
                        <span className="expan">
                          Febr<span className="ex">uar</span>
                        </span>
                      </span>
                      1814
                      <br className="lb" />
                      <span className="persName">
                        <span className="g.rend.script.latin">
                          Caspar
                          <span
                            style={{ display: "inline-block" }}
                            width="1word"
                          >
                            &nbsp;
                          </span>
                          Engels <span className="abbr"> (senr.)</span>
                          <span className="expan">
                            sen<span className="ex">io</span>r
                          </span>
                        </span>
                      </span>
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="6em">
                        &nbsp;
                      </span>
                      <span className="abbr">
                        <span className="g.rend.script.latin">R</span>
                      </span>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (d)
                      </span>
                      <span className="expan">
                        d<span className="ex">en</span>
                      </span>{" "}
                      5
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Febr.)</span>
                        <span className="expan">
                          Febr<span className="ex">uar</span>
                        </span>
                      </span>
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="8em">
                        &nbsp;
                      </span>
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (d)
                      </span>
                      <span className="expan">
                        d<span className="ex">en</span>
                      </span>{" "}
                      15
                      <span className="g.rend.script.latin">März</span>.
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
                      <span style={{ display: "inline-block" }} width="3em">
                        &nbsp;
                      </span>
                      Herrn
                      <br className="lb" />
                      <span className="persName">
                        <span className="g.rend.script.latin">
                          Friederich Engels
                        </span>
                      </span>
                      .<br className="lb" />
                      <span className="abbr">
                        (Add
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          :<sup>r</sup>
                        </span>
                        )
                      </span>
                      <span className="expan">
                        Add<span className="ex">esse</span>
                      </span>{" "}
                      Herrn
                      <span className="persName">
                        <span className="g.rend.script.latin">
                          <span className="abbr"> (Joh.)</span>
                          <span className="expan">
                            Joh<span className="ex">ann</span>
                          </span>
                          <span className="abbr"> (Frid.)</span>
                          <span className="expan">
                            Fri<span className="ex">e</span>d
                            <span className="ex">rich</span>
                          </span>
                          Eckhard
                        </span>
                      </span>
                      <span className="abbr"> (sr.)</span>
                      <span className="expan">
                        s<span className="ex">enio</span>r
                      </span>
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="1char">
                        &nbsp;
                      </span>
                      <span
                        className="wave"
                        style={{ textDecoration: "underline" }}
                      >
                        Ganzfrei
                      </span>
                      <span style={{ display: "inline-block" }}>&nbsp;</span>in
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="9em">
                        &nbsp;
                      </span>
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
                  paddingTop: "55px",
                  paddingLeft: "80px",
                  paddingBottom: "100px",
                }}
              >
                {/* Insert Page 1 */}
                <div className="opener">
                  <span style={{ display: "inline-block" }} width="7cm">
                    &nbsp;
                  </span>
                  <div className="dateline">
                    <span className="orig">„</span>
                    <span className="corr" />
                    <span className="placeName">Barmen</span>
                    <span className="date">
                      3
                      <span className="abbr">
                        (Feb<span className="orig">:</span>
                        <span className="corr">.</span>)
                      </span>
                      <span className="expan">
                        Feb<span className="ex">ruar</span>
                      </span>
                      1814
                    </span>
                  </div>
                </div>
                <br className="lb" />
                <span style={{ display: "inline-block" }} width="3.5cm">
                  &nbsp;
                </span>
                <div className="opener">
                  <div className="salute">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>Lieber
                    <span className="persName">Friedrich</span>!
                  </div>
                </div>
                <p>
                  <a id="mark.001.s">{/*anchor*/}</a>Dein Brief vom
                  <span className="date">31</span>
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (paſſ.)</span>
                    <span className="expan">
                      paſſ<span className="ex">ati</span>
                    </span>
                  </span>
                  war zwar beruhigend für uns, doch iﬅ mir das
                  <br className="lb" />
                  noch nicht gnug, daß die Sache wegen der Landwehr ſeitdem ﬅill
                  lag,
                  <br className="lb" />
                  ich habe deshalb <span className="orig">heüte</span>
                  <span className="corr">heute</span> in der Einlage an
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr)
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="g.rend.script.latin">Ekhard</span>
                  </span>
                  geſchrieben und
                  <br className="lb" />
                  ihn gebeten, ſich dahin zu verwenden, daß du von der Liﬅe
                  ausge
                  <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                  löſcht werdeﬅ, und du ſo lange in
                  <span className="placeName">
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (FFurth )</span>
                      <span className="expan">
                        F<span className="ex">rank</span>furth
                      </span>
                    </span>
                  </span>
                  bleiben mögteﬅ, bis dich
                  <br className="lb" />
                  unſre Obrigkeit aufruft
                  <a id="teaser.part.001.e">{/*anchor*/}</a>,
                  <span className="orig">dan</span>
                  <span className="corr">dann</span> in jedem
                  <sup className="sup" id="txt.add001">
                    <span className="orig">land</span>
                    <span className="corr">Land</span> &amp;
                  </sup>
                  <span className="g.rend.script.latin">Canton</span> iﬅ ja die
                  <span className="g.rend.script.latin">Organisation</span>{" "}
                  <br className="lb" />
                  der Landwehr, und nur unſer Ort hat Recht dich einzufordern,
                  was
                  <br className="lb" />
                  aber wie ich faﬅ hoﬀe nicht geſchehen wird, da man nun die von
                  <br className="lb" />
                  1795 einfordert, und die von 1796 frei und ruhig läßt.
                  <a id="mark.001.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="orig">Dan</span>
                  <span className="corr">Dann</span> habe ich ihm auch von
                  deinem
                  <span className="g.rend.script.latin">Fagot</span> lernen
                  geſagt, daß ich
                  <br className="lb" />
                  dir dis gern erlaubte, unter dem{" "}
                  <span className="abbr">Beding:</span> daß du deine
                  <span className="orig">
                    Schuld
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    digkeit
                  </span>
                  <span className="corr">
                    Schul
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    digkeit
                  </span>
                  in ſeinen Geſchäften gut wahrnehmeﬅ, und{" "}
                  <span className="orig">dan</span>
                  <span className="corr">dann</span> dich auf
                  <br className="lb" />
                  dieſem <span className="g.rend.script.latin">
                    Jnstrument
                  </span>{" "}
                  ſo wie aufm
                  <span className="g.rend.script.latin">Clavier</span> fleißig
                  übteﬅ.
                </p>
                <p className="enc.tagsdecl.indent-verysmall">
                  <span className="orig">dis</span>
                  <span className="corr">Dis</span> wirﬅ du
                  <span className="abbr"> (L.)</span>
                  <span className="expan">
                    L<span className="ex">ieber</span>
                  </span>
                  <span className="persName">Friedrich</span> auch wohl gern
                  erfüllen, und ſo
                  <br className="lb" />
                  mögte
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr)
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="g.rend.script.latin">Ekhard</span>
                  </span>
                  <span className="orig">dan</span>
                  <span className="corr">dann</span> die 150
                  <a id="annot.001.s">{/*anchor*/}</a>
                  <span className="abbr">
                    <span className="g.rend.script.latin">F</span>.
                  </span>
                  <span className="orig" />
                  <span className="corr">Gulden</span>
                  <a id="annot.001.e">{/*anchor*/}</a> |:
                  <span className="orig"> </span>
                  <span className="corr" />
                  was freilig viel iﬅ<span className="orig"> </span>
                  <span className="corr" />
                  :| ſeinerzeit
                  <br className="lb" />
                  für das <span className="orig">neüe</span>
                  <span className="corr">neue</span>
                  <span className="g.rend.script.latin">Fagot</span> für mich
                  auslegen.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <span className="orig">aus</span>
                  <span className="corr">Aus</span> dieſem Vorgang ſieheﬅ du
                  ſchon, daß ich deine Wünſche
                  <br className="lb" />
                  erfüllen will, und dein Verſprechen, uns die Koﬅen hernach
                  <br className="lb" />
                  durch Fleiß und Arbeit einzubringen,
                  <span className="g.rend.script.latin">
                    <span className="orig">Acceptire</span>
                    <span className="corr">acceptire</span>
                  </span>
                  .
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Du <span className="orig">kanﬅ</span>
                  <span className="corr">kannﬅ</span> alſo
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (dHr.)
                    </span>
                    <span className="expan">
                      d<span className="ex">em</span> Hr
                    </span>
                    <span className="expan">
                      d<span className="ex">em</span> H
                      <span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="g.rend.script.latin">Almenräder</span>
                  </span>
                  von dem ich viel <span className="orig">gutes</span>
                  <span className="corr">Gutes</span>
                  <br className="lb" />
                  gehört, den Auftrag geben, dir ein gutes
                  <span className="g.rend.script.latin">Fagot</span>, wie es
                  <br className="lb" />
                  ſein muß in{" "}
                  <span className="g.rend.script.latin">Dreſden</span> zu
                  beﬅellen, und ich hoﬀe, du wirﬅ
                  <br className="lb" />
                  ſo viel drauf lernen, daß du mit deinen Brüdern uns
                  <br className="lb" />
                  <span className="abbr"> (ſ.)</span>
                  <span className="expan">
                    ſ<span className="ex">einer</span>
                  </span>{" "}
                  Zeit an den Böken viele <span className="orig">Freüde</span>
                  <span className="corr">Freude</span> damit machen werdeﬅ.
                  <a id="mark.002.e">{/*anchor*/}</a>
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
                <p className="enc.tagsdecl.indent-small">
                  <span className="orig">einliegend</span>
                  <span className="corr">Einliegend</span>{" "}
                  <span className="orig">ſchike</span>
                  <span className="corr">ſchicke</span> ich dir 2 Briefe an
                  <span className="persName">
                    <span className="g.rend.script.latin">
                      <span className="abbr">
                        (Ab
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          :<sup>m</sup>
                        </span>
                        )
                      </span>
                      <span className="expan">
                        Ab<span className="ex">raham</span>
                      </span>
                      Lohe
                    </span>
                  </span>
                  und
                  <span className="persName">
                    <span className="g.rend.script.latin">
                      <span className="abbr">
                        (Joh<span className="orig">:</span>
                        <span className="corr">.</span>)
                      </span>
                      <span className="expan">
                        Joh<span className="ex">ann</span>
                      </span>
                      Waxelberg
                    </span>
                  </span>
                  <br className="lb" />
                  die am <span className="orig">Sontag</span>
                  <span className="corr">Sonntag</span> nach
                  <span className="placeName">
                    <span className="g.rend.script.latin">
                      <span className="abbr">
                        (<span className="g.rend.script.latin">Ffurth</span>)
                      </span>
                      <span className="expan">
                        F<span className="ex">rank</span>furth
                      </span>
                    </span>
                  </span>
                  <span className="g.rend.script.latin">
                    <span className="orig">Marchirt</span>
                    <span className="corr">marchirt</span>
                  </span>
                  ſind, und <span className="orig">vieleicht</span>
                  <span className="corr">vielleicht</span> Samﬅag
                  <br className="lb" />
                  oder <span className="orig">Sontag</span>
                  <span className="corr">Sonntag</span> dort oder in
                  <span className="orig">eürer</span>
                  <span className="corr">eurer</span> Gegend ankom̅en werden;
                  <br className="lb" />
                  erkundige{" "}
                  <sup className="sup" id="txt.add002">
                    dich
                  </sup>{" "}
                  alſo überall nach ihrer Ankunft, damit dieſe Knaben{" "}
                  <br className="lb" />
                  die Briefe erhalten, und wie es denſelben ergangen
                  <span style={{ textDecoration: "line-through" }}>iﬅ</span>,
                  <br className="lb" />
                  auch wohin ihre <span className="orig">Beﬅimung</span>
                  <span className="corr">Beﬅimmung</span> iﬅ; ich hoﬀe mit dir,
                  daß der
                  <br className="lb" />
                  Friede nicht mehr ferne ſei, und dieſe mit ihren Nachbarn
                  nicht
                  <br className="lb" />
                  lange mehr dienen brauchen.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.003.s">{/*anchor*/}</a>{" "}
                  <span className="orig">daß</span>
                  <span className="corr">Daß</span> du bei
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr.)
                    </span>
                    <span className="expan">
                      H<span className="ex">e</span>r
                      <span className="ex">rn</span>
                    </span>
                    <span className="g.rend.script.latin">Ekhard</span>
                  </span>
                  an die Bücher <span className="orig">komﬅ</span>
                  <span className="corr">kommﬅ</span>, iﬅ mir ganz
                  <br className="lb" />
                  recht, und ich ſchließe bei dem neuen Lehrling daraus, daß
                  <br className="lb" />
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
                      <span className="abbr"> (Ek.)</span>
                      <span className="expan">
                        Ek<span className="ex">hard</span>
                      </span>
                    </span>
                  </span>
                  ſeine Geſchäfte wieder <span className="orig">beßer</span>
                  <span className="corr">besser</span> gehen.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <span className="orig">deine</span>
                  <span className="corr">Deine</span> Eintheilung der Stunden
                  <span className="orig">gefält</span>
                  <span className="corr">gefällt</span> mir, wohl genützte
                  <br className="lb" />
                  Zeit macht viele <span className="orig">Freüde</span>
                  <span className="corr">Freude</span>.
                  <a id="mark.003.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.004.s">{/*anchor*/}</a>
                  <span className="religion">
                    <a id="mark.005.s">{/*anchor*/}</a>Die{" "}
                    <span className="abbr"> (L.)</span>
                    <span className="expan">
                      L<span className="ex">iebe</span>
                    </span>
                    <span className="g.rend.script.latin">Mama</span> iﬅ dieſer
                    Tage ziemlich heiter <span className="orig">geweßen</span>
                    <span className="corr">gewesen</span>, dein
                    <br className="lb" />
                    Brief machte ihr <span className="orig">Freüde</span>
                    <span className="corr">Freude</span>, und ſie
                    <span className="g.rend.script.latin">
                      <span className="orig">Accordirte</span>
                      <span className="corr">accordirte</span>
                    </span>
                    dir auf der Stelle
                    <br className="lb" />
                    das neue <span className="g.rend.script.latin">Fagot</span>,
                    ſie läßt dich mit mir und allen{" "}
                    <span className="orig">Freünden</span>
                    <span className="corr">Freunden</span>
                    <br className="lb" />
                    herzlich grüßen, und lebt der Zuverſicht, daß du dich, durch
                    <br className="lb" />
                    die Geſchäfte und das Spielen doch auch nicht vom
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>
                    <br className="lb" />
                    und <span className="orig">Leßen</span>
                    <span className="corr">Lesen</span> des
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Göttl)
                    </span>
                    <span className="expan">
                      Göttl<span className="ex">ichen</span>
                    </span>{" "}
                    Wortes werdeﬅ abhalten <span className="orig">laßen</span>
                    <span className="corr">lassen</span>.
                    <a id="mark.005.e">{/*anchor*/}</a>
                  </span>
                  <a id="mark.004.e">{/*anchor*/}</a>
                </p>
                <div className="closer">
                  Ihm unſrem Herrn und Heÿlande Jeſu Chriﬅo empfehlen
                  <br className="lb" />
                  wir dich und bleiben
                  <span style={{ display: "inline-block" }} width="3words">
                    &nbsp;
                  </span>
                  <div className="signed">
                    Deine <span className="orig">Treüe</span>
                    <span className="corr">Treue</span> Eltern
                  </div>
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="1lines">
                    &nbsp;
                  </span>
                  <span style={{ display: "inline-block" }} width="9words">
                    &nbsp;
                  </span>
                  <div className="signed">
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (C.)</span>
                      <span className="expan">
                        C<span className="ex">aspar</span>
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

      </Brief_wrapper>
    </Layout>
  );
}
