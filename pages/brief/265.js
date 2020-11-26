import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "265";
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
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      <div type="mark">
        {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
        <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e" />
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
                  <span style={{ display: "inline-block" }} width="5cm">
                    &nbsp;
                  </span>
                  <div className="dateline">
                    <span className="g.rend.script.latin">Barmen</span>,
                    <span className="date">
                      31. <span className="g.rend.script.latin">Maÿ</span> 1823
                    </span>
                    .
                  </div>
                </div>
                <div className="opener">
                  <div className="salute">
                    Daß dich liebe <span className="persName">Eliſe</span>, das
                    Ausbleiben
                    <br className="lb" />
                    meines Briefes etwas traurig
                    <br className="lb" />
                    gemacht hat, freut mich ein klein
                    <br className="lb" />
                    wenig, denn ich nehme daraus wahr,
                    <br className="lb" />
                    daß du mich doch nicht gut entbehren
                    <br className="lb" />
                    kannﬅ.
                  </div>
                </div>
                <p>
                  Eigentlich rührte meine ﬅark
                  <br className="lb" />
                  verzögerte Antwort daher, daß
                  <br className="lb" />
                  ich nicht recht wußte, wie die Poﬅ
                  <br className="lb" />
                  jetzt ginge, bis ich endlich erfuhr, daß
                  <br className="lb" />
                  man täglich Briefe nun nach{" "}
                  <span className="g.rend.script.latin">Hamm</span>
                  <br className="lb" />
                  <a id="annot.001.s">{/*anchor*/}</a>
                  <span className="makierung">expediren</span>
                  <a id="annot.001.e">{/*anchor*/}</a>
                  kann.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Recht herzlich habe ich mich über
                  <br className="lb" />
                  dein und der <a id="annot.002.s">{/*anchor*/}</a>
                  <span className="makierung">Kinder</span>
                  <a id="annot.002.e">{/*anchor*/}</a>
                  Wohl ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  freut. Gott ſeÿ dafür gedankt, Er
                  <br className="lb" />
                  gebe, daß ihr ferner recht geſund
                  <br className="lb" />
                  bleibet. Auch mir, meine gute
                  <br className="lb" />
                  <span className="persName">Eliſe</span> wird es gewaltig ſauer
                  werden
                  <br className="lb" />
                  die ganze Zeit hier geduldig aus
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  zuharren, es fehlt mir jetzt ſchon
                  <br className="lb" />
                  an allen <span className="orig">Eken</span>
                  <span className="corr">Ecken</span>. Bei{" "}
                  <a id="annot.003.s">{/*anchor*/}</a>
                  <span className="makierung">Augusts</span>
                  <a id="annot.003.e">{/*anchor*/}</a>
                  finde
                  <br className="lb" />
                  ich zwar immer einen guten Tiſch
                  <br className="lb" />
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  liebevolle Aufnahme, aber dem
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ohngeachtet fällﬅ du und die Kinder
                  <br className="lb" />
                  mir ﬅäts ein. Doch was kann das
                  <br className="lb" />
                  Züngeln helfen? Jch will geduldig
                  <br className="lb" />
                  aushalten, und mich mit dem
                  <br className="lb" />
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
                  Gedanken tröﬅen, daß dieſe
                  <br className="lb" />
                  Veränderung die letzte iﬅ, und
                  <br className="lb" />
                  wir es dadurch um vieles bequemer
                  <br className="lb" />
                  bekommen.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Uebrigens bin ich mit den
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Arbeit)
                  </span>
                  <span className="expan">
                    Arbeit<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  ſchon weit gekommen. Die Wände
                  <br className="lb" />
                  ſind ſeit Mittwoch ſchon ausgemauert,
                  <br className="lb" />
                  und die{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (ſämtlich)
                  </span>
                  <span className="expan">
                    ſämtlich<span className="ex">en</span>
                  </span>
                  <span className="orig">Deken</span>
                  <span className="corr">Decken</span> ſeit geﬅern
                  <br className="lb" />
                  fertig, und alles <span className="orig">troknet</span>
                  <span className="corr">trocknet</span> herrlich.
                  <br className="lb" />
                  Jetzt ſind wir an den Dachfenﬅern
                  <br className="lb" />
                  und auf dem <a id="annot.004.s">{/*anchor*/}</a>
                  <span className="makierung">Oller</span>
                  <a id="annot.004.e">{/*anchor*/}</a>
                  beſchäftigt. Der
                  <br className="lb" />
                  Unterſchlag auch der ehemaligen Mägde
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ﬅube iﬅ bereits auf die Mitte
                  <br className="lb" />
                  <span className="orig">verrükt</span>
                  <span className="corr">verrückt</span> und ſo ſind 2 ſchöne
                  große
                  <br className="lb" />
                  Stuben, die durch Dachfenﬅer in
                  <br className="lb" />
                  der Mitte gutes Licht erhalten –<br className="lb" />
                  entﬅanden.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Jn unſerer
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (künftig)
                  </span>
                  <span className="expan">
                    künftig<span className="ex">en</span>
                  </span>
                  Schlafﬅube
                  <br className="lb" />
                  ﬅeht auch ſchon der Unterſchlag aus
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  gemauert, und zeigt das künftige
                  <br className="lb" />
                  Garderobe Zim̅erchen. Wenn wir
                  <br className="lb" />
                  nur ſo warmes Wetter
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (behalt)
                  </span>
                  <span className="expan">
                    behalt<span className="ex">en</span>
                  </span>
                  ,<br className="lb" />
                  ſo iﬅ in 8 Tagen alles ſo
                  <span className="underlined">
                    <span className="orig">troken</span>
                    <span className="corr">trocken</span>
                  </span>
                  ,<br className="lb" />
                  daß der 2
                  <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                    <sup>te</sup>.
                  </span>
                  Lehm aufgeſetzt
                  <br className="lb" />
                  werden kann. Alle Welt ver
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  wundert ſich darüber, wie mein
                  <br className="lb" />
                  Haus ſo raſch fortſchreitet, und
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
                <p>
                  jetzt da alles ſo <span className="orig">glüklich</span>
                  <span className="corr">glücklich</span> gegangen,
                  <br className="lb" />
                  läßt jedermann meiner Jdee Ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  rechtigkeit wiederfahren.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Wenn nun der 2
                  <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                    <sup>te</sup>.
                  </span>
                  Lehm auf
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  geſetzt iﬅ, und ich auf die Art die
                  <br className="lb" />
                  meiﬅen Arbeiten beſeitigt, und
                  <br className="lb" />
                  nur wenige Menſchen mehr an Arbeit
                  <br className="lb" />
                  habe, denke ich ſo Gott will dich zu
                  <br className="lb" />
                  beſuchen. Wegen des Pferdes kannﬅ
                  <br className="lb" />
                  du ganz ruhig ſeÿn, denn erﬅens
                  <br className="lb" />
                  kenne ich es jetzt ganz genau, und
                  <br className="lb" />
                  weiß, daß ſeine Unruhe nur bis
                  <br className="lb" />
                  <a id="annot.005.s">{/*anchor*/}</a>
                  <span className="placeName">
                    <span className="makierung">Langerfeld</span>
                  </span>
                  <a id="annot.005.e">{/*anchor*/}</a> dauert, und dann 2
                  <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                    <sup>tens</sup>⹀
                  </span>
                  <br className="lb" />
                  iﬅ es noch gar nicht ausgemacht
                  <br className="lb" />
                  ob ich mit demſelben die Tour mache:
                  <br className="lb" />
                  <a id="annot.006.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="makierung">August</span>
                  </span>
                  <a id="annot.006.e">{/*anchor*/}</a> ſchien nämlich zu
                  fürchten,
                  <br className="lb" />
                  als wenn ich ihm
                  <sup className="sup" id="txt.add001">
                    (dem Pferde)
                  </sup>{" "}
                  dadurch zu viel
                  <br className="lb" />
                  zumuthete. Doch darüber <span className="abbr"> (ſ. Z.)</span>
                  <span className="expan">
                    ſ<span className="ex">einer</span> Z
                    <span className="ex">eit</span>
                  </span>
                  näher.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <a id="annot.007.s">{/*anchor*/}</a>
                  <span className="makierung">
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (C.)</span>
                      <span className="expan">
                        C<span className="ex">arl</span>
                      </span>
                      Snethlage
                    </span>
                  </span>
                  <a id="annot.007.e">{/*anchor*/}</a> hat geſchrieben,
                  <br className="lb" />
                  daß ſie Sonntag
                  <span className="g.enc.tagsdecl.suspension.type1"> (d.)</span>
                  <span className="expan">
                    d<span className="ex">en</span>
                  </span>{" "}
                  25
                  <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                    <sup>sten</sup>⹀
                  </span>
                  <span className="orig">glüklich</span>
                  <span className="corr">glücklich</span>
                  <br className="lb" />
                  in <span className="g.rend.script.latin">Berlin</span>{" "}
                  angekom̅en und alles
                  <br className="lb" />
                  wohl angetroffen hätten.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Die Weﬅen habe ich richtig
                  <br className="lb" />
                  gefunden; sie lagen aber in deiner
                  <br className="lb" />
                  <a id="annot.008.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="makierung">Commode</span>
                  </span>
                  <a id="annot.008.e">{/*anchor*/}</a>, und waren in einem
                  <br className="lb" />
                  weißen ﬅatt blauen Papier{" "}
                  <span className="orig">gewikelt</span>
                  <span className="corr">gewickelt</span>
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
                {/* Insert Page 4 */}

                <p>
                  <a id="mark.001.s">{/*anchor*/}</a>Beim Verteilen von
                  <a id="annot.009.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    <span className="makierung">Colonial</span>
                  </span>
                  <a id="annot.009.e">{/*anchor*/}</a>waren
                  <br className="lb" />
                  haben wir
                </p>
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <td>100</td>
                        <td>℔</td>
                        <td>Reis</td>
                        <td>à</td>
                        <td>10</td>
                        <td>
                          <a id="annot.010.s">{/*anchor*/}</a>
                          <span className="makierung">
                            <span className="abbr"> (Sr)</span>
                            <span className="expan">Stüber</span>
                          </span>
                          <a id="annot.010.e">{/*anchor*/}</a>
                        </td>
                        <td>---</td>
                        <td>
                          <span className="abbr">
                            (
                            <span className="g.enc.tagsdecl.suspension.type1">
                              {" "}
                              (Rt)
                            </span>
                            <span className="expan">
                              Rt<span className="ex">hl</span>
                            </span>
                            )
                          </span>
                          <span className="expan">Reichsthaler</span>
                        </td>
                        <td>16.40</td>
                      </tr>
                      <tr>
                        <td>147</td>
                        <td>"</td>
                        <td>
                          <a id="annot.011.s">{/*anchor*/}</a>
                          <span className="makierung">Melis</span>
                          <a id="annot.011.e">{/*anchor*/}</a>
                        </td>
                        <td>à</td>
                        <td>27 ¾</td>
                        <td />
                        <td className="border-bottom">---</td>
                        <td className="border-bottom">"</td>
                        <td className="border-bottom">67.59</td>
                      </tr>
                      <tr>
                        <td colSpan={3}>zusammen für</td>
                        <td />
                        <td />
                        <td />
                        <td>=</td>
                        <td>
                          <span className="g.enc.tagsdecl.suspension.type1">
                            {" "}
                            (Rt)
                          </span>
                          <span className="expan">
                            Rt<span className="ex">hl</span>
                          </span>
                        </td>
                        <td>84.39</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="enc.tagsdecl.indent-medium">
                  bekommen. Jch ſage es deshalb,
                  <br className="lb" />
                  wenn du etwa wünſchteﬅ daß ich
                  <br className="lb" />
                  wenn ich dich ſpäter abhole, etwas davon
                  <br className="lb" />
                  mitbringen ſollte.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Die <a id="annot.012.s">{/*anchor*/}</a>
                  <span className="makierung">Brüder</span>
                  <a id="annot.012.e">{/*anchor*/}</a>
                  wünſchten nun wohl
                  <br className="lb" />
                  die <a id="annot.013.s">{/*anchor*/}</a>
                  <span className="makierung">
                    <span className="g.rend.script.latin">Brünellen</span>
                  </span>
                  <a id="annot.013.e">{/*anchor*/}</a> zu vertheilen, ich
                  <br className="lb" />
                  gab mich daran ﬅieß aber auf
                  <br className="lb" />
                  eine Schwierigkeit.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Nach einer Notiz in meiner Brief
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  taſche habe ich nämlich durch{" "}
                  <a id="annot.014.s">{/*anchor*/}</a>
                  <span className="makierung">
                    <span className="g.rend.script.latin">Benjamin</span>
                  </span>
                  <a id="annot.014.e">{/*anchor*/}</a>
                  <br className="lb" />
                  dir zum aufheben übergeben:
                </p>
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <td>1 Schachtel</td>
                        <td />
                        <td>von</td>
                        <td>11¾</td>
                        <td>℔</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>11</td>
                        <td>"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>10⅝</td>
                        <td>"</td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>10½</td>
                        <td>"</td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>9¾</td>
                        <td>"</td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>9⅜</td>
                        <td>"</td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>7⅝</td>
                        <td>"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>7¼</td>
                        <td>"</td>
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>7⅛</td>
                        <td>"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>6¾</td>
                        <td>"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>6½</td>
                        <td>"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td className="border-bottom">"</td>
                        <td className="border-bottom">5</td>
                        <td className="border-bottom">"</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td className="border-bottom">---</td>
                        <td className="border-bottom">"</td>
                        <td className="border-bottom">7⅛</td>
                        <td className="border-bottom">"</td>
                        <td />
                      </tr>
                      <tr>
                        <td colSpan={2}>zusammen</td>
                        <td />
                        <td>100⅜</td>
                        <td>℔</td>
                        <td>Brünellen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                {/* Insert Page 5 */}

                <p>
                  Von dieſer letzten Sendung fand
                  <br className="lb" />
                  ich nur 7 Schachteln vor, die ich
                  <br className="lb" />
                  auf der nebigen Liﬅe angeﬅrichen
                  <br className="lb" />
                  habe. Außerdem <span className="orig">entdekte</span>
                  <span className="corr">entdeckte</span> ich indeß
                  <br className="lb" />
                  noch 5 Schachteln nämlich:
                </p>
                <div className="table">
                  <table>
                    <tbody>
                      <tr>
                        <td>1 Schachtel</td>
                        <td />
                        <td>von</td>
                        <td>8½</td>
                        <td>℔</td>
                        <td rowSpan={2}>{"}"}</td>
                        <td rowSpan={2}>
                          beide durch Blei
                          <br className="g.enc.tagsdecl.hyphenation.eq" />
                          stift mit
                          <span className="g.rend.script.latin">
                            <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                              (F<sup>ch</sup>⹀)
                            </span>
                            <span className="expan">
                              F<span className="ex">riedri</span>ch
                            </span>
                          </span>
                          <br className="lb" />
                          <span className="g.rend.script.latin">
                            Engels
                          </span>{" "}
                          bezeichnet
                        </td>
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>7¼</td>
                        <td>"</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>3⅝</td>
                        <td>"</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td>"</td>
                        <td>4½</td>
                        <td>"</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>
                          1
                          <span className="g.enc.tagsdecl.cc.abbr-sup-am">
                            (d<sup>o</sup>.)
                          </span>
                          <span className="expan">
                            d<span className="ex">it</span>o
                          </span>
                        </td>
                        <td>---</td>
                        <td className="border-bottom">"</td>
                        <td className="border-bottom">2½</td>
                        <td className="border-bottom">"</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td>26⅜</td>
                        <td>℔</td>
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td colSpan={3}>
                          <span
                            style={{ display: "inline-block" }}
                            width="-6em"
                          >
                            &nbsp;
                          </span>
                          <span className="add">⟨hiezu⟩</span> die 7
                          angestrichnen
                          <br className="lb" />
                          <span className="g.enc.tagsdecl.suspension.type1">
                            {" "}
                            (vorräthig)
                          </span>
                          <span className="expan">
                            vorräthig<span className="ex">en</span>
                          </span>
                          wiegen
                        </td>
                        <td className="border-bottom">55¾</td>
                        <td className="border-bottom">"</td>
                        <td />
                        <td>zusammen</td>
                      </tr>
                      <tr>
                        <td />
                        <td />
                        <td />
                        <td>82⅛</td>
                        <td>℔</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td colSpan={3}>letzte Sendung wog</td>
                        <td className="border-bottom">110⅜</td>
                        <td className="border-bottom">"</td>
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td colSpan={2}>mithin fehlen</td>
                        <td />
                        <td>28¼</td>
                        <td>℔</td>
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  wenn ich unſern alten Vorrath
                  <br className="lb" />
                  der wahrſcheinlich in obigen 5 Schachteln
                  <br className="lb" />
                  beﬅand mit ein rechne.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Wo du nun mit den übrigen
                  <br className="lb" />
                  Schachteln geblieben, und wie du
                  <br className="lb" />
                  es gemacht haﬅ, daß du bei einer
                  <br className="lb" />
                  ſo ﬅarken <a id="annot.015.s">{/*anchor*/}</a>
                  <span className="makierung">
                    <span className="g.rend.script.latin">Consumtion</span>
                  </span>
                  <a id="annot.015.e">{/*anchor*/}</a> von
                  <span className="g.rend.script.latin">Brunellen</span>
                  <br className="lb" />
                  nicht mehr über zu häufigen Stuhlgang
                  <br className="lb" />
                  zu klagen hatteﬅ, das wünſchte
                  <br className="lb" />
                  ich mit erﬅem zu erfahren, um
                  <br className="lb" />
                  zu wissen, wie viel
                  <sup className="sup" id="txt.add002">
                    <span className="g.rend.script.latin">Brunellen</span>
                  </sup>
                  du behalten
                  <br className="lb" />
                  mußt, und wie viel ich dem{" "}
                  <a id="annot.016.s">{/*anchor*/}</a>
                  <span className="makierung">
                  <span className="g.rend.script.latin">Comptoir</span>
                  </span>
                  <a id="annot.016.e">{/*anchor*/}</a>
                  <br className="lb" />
                  zu bezahlen habe.<a id="mark.001.e">{/*anchor*/}</a>
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
                {/* Insert Page 6 */}

                <p>
                  Kannﬅ du mir noch ſagen liebe
                  <br className="lb" />
                  <span className="persName">Eliſe</span>, ob wir das blaue und
                  ſchwarze
                  <br className="lb" />
                  <a id="annot.017.s">{/*anchor*/}</a>
                  <span className="makierung">
                  Tuch
                  </span>
                  <a id="annot.017.e">{/*anchor*/}</a>
                  von <a id="annot.018.s">{/*anchor*/}</a>
                  <span className="makierung">
                  <span className="g.rend.script.latin">Werden</span>
                  </span>
                  <a id="annot.018.e">{/*anchor*/}</a> im Hauſe haben, und
                  <br className="lb" />
                  wo ſolches liegt. Mir däucht im
                  <br className="lb" />
                  Leinwandſchrank.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Doch nun ſoll das Fragen ein
                  <br className="lb" />
                  Ende haben, du verlierﬅ mir
                  <br className="lb" />
                  ſonﬅ die Geduld beim Leſen.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Mit euerer Haushaltung werdet
                  <br className="lb" />
                  ihr nun wohl gut in Schuß ſeÿn;
                  <br className="lb" />
                  ſorge nur dafür, liebe <span className="persName">Eliſe</span>
                  , daß
                  <br className="lb" />
                  <a id="annot.019.s">{/*anchor*/}</a>
                  <span className="makierung">
                  <span className="persName">Friederike</span>
                  </span>
                  <a id="annot.019.e">{/*anchor*/}</a> ſo wenig Unruhe wie
                  <br className="lb" />
                  möglich bekommt.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Sage ihr daß ich ihren
                  <br className="lb" />
                  Gruß herzlich erwiedere, und
                  <br className="lb" />
                  <a id="annot.020.s">{/*anchor*/}</a>
                  <span className="makierung">
                  <span className="g.rend.script.latin">Griesheim</span>
                  </span>
                  <a id="annot.020.e">{/*anchor*/}</a> danke für ſeine
                  <br className="lb" />
                  prompte Beſorgung hinſichtlich des
                  <br className="lb" />
                  Pferdes. Jm Fall ich eines
                  <br className="lb" />
                  bedürfte würde ich vorher
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (ſchreib)
                  </span>
                  <span className="expan">
                    ſchreib<span className="ex">en</span>
                  </span>
                  .
                </p>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-medium">
                    Nun Adieu liebe <span className="persName">Eliſe</span>,
                    <br className="lb" />
                    Herzens Weibchen. <a id="mark.002.s">{/*anchor*/}</a>
                    <span className="liebe">
                      Warlich wenn
                      <br className="lb" />
                      ich an dich <span className="abbr"> (u.)</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>
                      <span style={{ textDecoration: "line-through" }}>
                        <span className="unclear">und[?]</span>
                      </span>
                      an die beiden
                      <br className="lb" />
                      holden <a id="annot.021.s">{/*anchor*/}</a>
                      <span className="makierung">
                      Jungens
                      </span>
                      <a id="annot.021.e">{/*anchor*/}</a>
                      denke, wird
                      <br className="lb" />
                      mirs ganz weit ums Herz; –<br className="lb" />
                      doch dieses nur für dich zu halten.
                      <br className="lb" />
                      Erfahre ich daß meine Briefe
                      <br className="lb" />
                      andern mitgetheilt, oder hin
                      <br className="g.enc.tagsdecl.hyphenation.eq" />
                    </span>
                  </p>
                </blockquote>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                {/* Insert Page 7 */}
                <blockquote>
                  <p>
                    <span className="liebe">
                      ſichtlich der Aufbewahrung leichtſinnig
                      <br className="lb" />
                      behandelt werden, ſo unterbleiben
                      <br className="lb" />
                      künftig alle ſchriftlichen Zärtlichkeiten.
                      <a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                  </p>
                </blockquote>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-medium">
                    Küße die beiden <a id="annot.022.s">{/*anchor*/}</a>
                    <span className="makierung">
                    Knaben
                    </span>
                    <a id="annot.022.e">{/*anchor*/}</a>
                    im
                    <br className="lb" />
                    Namen ihres Vaters, und denke
                    <br className="lb" />
                    oft an deinen
                  </p>
                </blockquote>
                <div className="closer">
                  <span style={{ display: "inline-block" }} width="7cm">
                    &nbsp;
                  </span>
                  <div className="signed">
                    <span className="glyph">
                      <sup>.</sup>//.
                    </span>
                    <span className="g.rend.script.latin">Friedrich</span>
                  </div>
                </div>
              </div>
              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                {/* Insert Page 8 */}
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="stellenerläuterungen">
        <div
          className="stellenerläuterung"
          style={{
            top: "350px",
          }}
        >
          <hr />
          <label>expediren</label>
          <p>Briefe u.a. absenden, befördern (lassen).</p>
        </div>

        <div
          className="stellenerläuterung"
          style={{
            top: "400px",
          }}
        >
          <hr />
          <label>Kinder</label>
          <p>
            Die Brüder Friedrich Engels (1820–1895) und Hermann Engels
            (1822–1905).
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "450px",
          }}
        >
          <hr />
          <label>Augusts</label>
          <p>
            Gemeint sind August Engels (1797–1874), Fabrikbesitzer in Barmen,
            Onkel von Friedrich Engels, und sein Ehefrau Louise Engels, geb.
            Krebs, (1801–1871).
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "600px",
          }}
        >
          <hr />
          <label>Oller</label>
          <p>Dachboden</p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1000px",
          }}
        >
          <hr />
          <label>Langerfeld</label>
          <p>
            Bis 1922 eigenständige Gemeinde, heute ein Stadtteil im Osten
            Wuppertals. Die Entfernung vom 'Bruch' beträgt 5–6 km.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "800px",
          }}
        >
          <hr />
          <label>August</label>
          <p>
            August Engels (1797–1874). Fabrikbesitzer in Barmen. Onkel von
            Friedrich Engels.{" "}
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "900px",
          }}
        >
          <hr />
          <label>Snethlage</label>
          <p>
            Karl Snethlage (1792–1871). Pfarrer, 1842 Oberhofprediger in Berlin.
            Schwager des Vaters von Friedrich Engels.{" "}
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1000px",
          }}
        >
          <hr />
          <label>Commode</label>
          <p>Niedriger Schubladenschrank. </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Colonial</label>
          <p>
            Meist aus den tropischen Kolonien europäischer Länder importierte
            Genussmittel wie Zucker, Kaffee, Tee und Gewürze.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Stüber</label>
          <p>
            Holländische und niederdeutsche Scheidemünze der Zeit. 60 Stüber
            entsprachen 1 Reichsthaler.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Melis</label>
          <p>Weniger feine Sorte raffinierten Zuckers.</p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Brüder</label>
          <p>
            Johann Caspar Engels (1792–1863) und August Engels (1797–1874).
            Onkel von Friedrich Engels.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Brünellen</label>
          <p>Getrocknete Pflaumen.</p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Benjamin</label>
          <p>Knecht bei der Familie Engels. </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Consumtion</label>
          <p>Verbrauch </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Comptoir</label>
          <p>Büro, hier ist die Firma 'Caspar Engels Söhne' gemeint. </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Tuch</label>
          <p>
            Große Gruppe von Geweben für die Herstellung von Oberbekleidung.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Werden</label>
          <p>
            Ehemaliger Sitz der Reichsabtei Werden (877–1803). Ab 1816
            preußische Bürgermeisterei, 1929 in die Stadt Essen eingemeindet.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Friederike</label>
          <p>
            Friederike von Griesheim, geb. van Haar, (1789–1880). Schwester von
            Elise Engels, geb. van Haar, (1797–1873). Ehefrau von Karl von
            Griesheim (1779–1859) und Tante von Friedrich Engels.
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Griesheim</label>
          <p>
            Karl von Griesheim (1779–1859). Preußischer Offizier in Hamm.
            Ehemann von Friederike von Griesheim, geb. van Haar, (1789–1880).
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Jungens</label>
          <p>
            Die Brüder Friedrich Engels (1820–1895) und Hermann Engels
            (1822–1905).
          </p>
        </div>
        <div
          className="stellenerläuterung"
          style={{
            top: "1360px",
          }}
        >
          <hr />
          <label>Knaben</label>
          <p>
            Die Brüder Friedrich Engels (1820–1895) und Hermann Engels
            (1822–1905).
          </p>
        </div>
      </div>
    </Brief_wrapper>
    </Layout>
  );
}
