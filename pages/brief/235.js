import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "235";
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
        {/* <!-- Themenmarkierung --> */}
        <div type="mark">
          <span type="reisen" from="#mark.001.s" to="#mark.001.e" />
          <span type="religion" from="#mark.002.s" to="#mark.002.e" />
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
                  style={{ paddingTop: "220px", paddingBottom: "275px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                      <h3>
                        <span className="headingNumber">1.1. </span>
                      </h3>
                      <p className="g.enc.tagsdecl.wd.vertical-right">
                        <span className="address ">
                          An den Dom Candidaten
                          <br className="lb" />{" "}
                          Herrn
                            <span className="g.rend.script.latin">
                              {" "}
                              Snetlage
                            </span>
                            <br className="lb" />{" "}
                            <span className="small">

                            Wohlgeboren{" "}
                            <span style={{ textDecoration: "underline" }}>
                              frei.
                            </span>{" "}
                            in
                            <br className="lb" />{" "}
                          </span>
                          <span
                            className="wave"
                            style={{ textDecoration: "underline" }}
                          >
                            Berlin
                          </span>
                          <br />
                        </span>
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "0px",
                    paddingLeft: "80px",
                    paddingBottom: "38px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="dateline text-right">
                      <span className="g.rend.script.latin">Barmen</span>,
                      <span className="date">
                        1.
                        <span className="g.rend.script.latin">
                          <span className="abbr"> Decr.</span>
                          <span className="expan">
                            Dec<span className="ex">embe</span>r
                          </span>
                        </span>
                        1820.
                      </span>
                    </div>
                  </div>
                  <p>
                  <span className="opener">
                    <span className="salute">
                      <a id="teaser.part.001.s">{/*anchor*/}</a>Freue Dich mit
                      mir, innig<span className="orig">ﬅ</span>
                      <span className="corr">st</span> geliebter{" "}
                      <span className="persName">Karl</span>!{" "}
                    </span>
                  </span>
                    der
                    <br className="lb" />{" "}
                    liebe Gott hat un<span className="orig">ſ</span>
                    <span className="corr">s</span>er{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span> erhört, und uns am
                    <br className="lb" />{" "}
                    verfloßnen Dien<span className="orig">ﬅ</span>
                    <span className="corr">st</span>agabend, den
                    <span className="date">
                    {" "}29.{" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr"> Nov.</span>
                        <span className="expan">
                          Nov<span className="ex">ember</span>
                        </span>
                      </span>
                    </span>
                    {" "}Abends um
                    <br className="lb" />{" "}9 Uhr ein Kindlein, und zwar einen ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>unden
                    <br className="lb" />{" "}
                    wohlge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>alteten Knaben ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chenkt.{" "}
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                    Ihm{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eÿ
                    </span>
                    <span className="corr">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ey
                    </span>{" "}
                    Lob und
                    <br className="lb" />{" "}
                    Preis aus un<span className="orig">ſ</span>
                    <span className="corr">s</span>ern vollen Herzen gebracht
                    für die<span className="orig">ſ</span>
                    <span className="corr">s</span>es
                    <br className="lb" />{" "}
                    Kind und für die gnädige Hülfe und Bewahrung, welche
                    <br className="lb" />{" "}
                    wir bei der Entbindung für Mutter und Kind er
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    fahren haben! Es ging zwar alles{" "}
                    <span className="orig">glüklich</span>
                    <span className="corr">glücklich</span>, doch war
                    <br className="lb" />{" "}
                    es eine <span className="orig">ſ</span>
                    <span className="corr">s</span>chwere Geburt. Ach Gott, was
                    fühlte ich, als
                    <br className="lb" />{" "}
                    ich mein armes Weib <span className="orig">ſ</span>
                    <span className="corr">s</span>o leiden{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ah; es i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> nicht zu be
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chreiben. Oft war es mir, als
                    wenn ich es nicht mehr
                    <br className="lb" />{" "}
                    an<span className="orig">ſ</span>
                    <span className="corr">s</span>ehen könnte, und doch{" "}
                    <span className="orig">lies</span>
                    <span className="corr">ließ</span> mich die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>elbe Liebe
                    <br className="lb" />{" "}
                    keinen <span className="orig">Augenblik</span>
                    <span className="corr">Augenblick</span> von ihrem
                    Schmerzenslager
                    <br className="lb" />{" "}
                    weichen, um ihr wo möglich einige Erleichterung
                    <br className="lb" />{" "}
                    ver<span className="orig">ſ</span>
                    <span className="corr">s</span>chaﬀen zu helfen. Der Herr{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿ gelobt,
                    <br className="lb" />{" "}
                    daß die<span className="orig">ſ</span>
                    <span className="corr">s</span>e Zeit der Ang
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> vorüber i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>! und nicht
                    <br className="lb" />{" "}
                    nur vorüber i<span className="orig">ﬅ</span>
                    <span className="corr">st</span>,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ondern durch Freude verdrängt
                    <br className="lb" />{" "}
                    wurde, als wir nun das Jüngelchen{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>und hatten.
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Meine gute{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>{" "}
                    i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> nun{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eitdem den{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Um<span className="orig">ﬅ</span>
                      <span className="corr">st</span>änd</span>
                    <span className="expan">
                      Um<span className="orig">ﬅ</span>
                      <span className="corr">st</span>änd
                      <span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    nach ganz wohl gewe<span className="orig">ſ</span>
                    <span className="corr">s</span>en,{" "}
                    <span className="orig">blos</span>
                    <span className="corr">bloß</span> die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e Nacht bekam
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ie{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr heftige Leib
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chmerzen, welche jedoch von
                    <br className="lb" />{" "}
                    Blähungen herrührten, und auf einige Verordnung
                    <br className="lb" />{" "}
                    des Arztes bald wieder ver<span className="orig">ſ</span>
                    <span className="corr">s</span>chwanden. Das
                    <br className="lb" />{" "}
                    kleine Knäbchen <span className="orig">ſ</span>
                    <span className="corr">s</span>chläft fa
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> immer recht ruhig, und
                    <br className="lb" />{" "}
                    das i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> recht gut, denn Gott{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ärkt ja die Kleinen
                    <br className="lb" />{" "}
                    im Schlafe. Sein kleines Haus{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>eht neben mir,
                    <br className="lb" />{" "}
                    mit <span className="orig">ſ</span>
                    <span className="corr">s</span>einem{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>anft{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chlummernden Bewohner, und
                    <br className="lb" />{" "}
                    macht mir eine ganz neue große Freude,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o oft ich
                    <br className="lb" />{" "}
                    es <span className="orig">ſ</span>
                    <span className="corr">s</span>ehe. Der gute Gott nehme nun
                    ferner beide
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    marginTop: "-9px",
                    paddingTop: "35px",
                    paddingLeft: "80px",
                    paddingBottom: "14px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <p>
                    Lieben in Seinen Heiligen Schutz. Er{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿe auch dem
                    <br className="lb" />{" "}
                    Kindlein ein <span className="orig">ſ</span>
                    <span className="corr">s</span>o gütiger Gott{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Vater, wie er mir
                    <br className="lb" />{" "}
                    bisher war, und gebe, daß wir ein
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> vor Seinem Throne
                    <br className="lb" />{" "}
                    noch Freude von die<span className="orig">ſ</span>
                    <span className="corr">s</span>er Geburt haben. Er gebe uns
                    <br className="lb" />{" "}
                    aber auch Weisheit, es gut und in Seiner Furcht zu
                    <br className="lb" />{" "}
                    erziehen, und ihm durch un<span className="orig">ſ</span>
                    <span className="corr">s</span>er Bei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>piel die beßte Lehre
                    <br className="lb" />{" "}
                    zu geben! Dieß i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> nun mein tägliches{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>.<br className="lb" />{" "}
                    Ich hatte vor, Dir <span className="orig">ſ</span>
                    <span className="corr">s</span>chon am Mittwoch unmittelbar
                    <br className="lb" />{" "}
                    nach der Entbindung meiner{" "}
                    <span className="abbr"> l.</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>{" "}
                    Frau zu <span className="orig">ſ</span>
                    <span className="corr">s</span>chreiben,
                    <br className="lb" />{" "}
                    aber es ging <span className="orig">ſ</span>
                    <span className="corr">s</span>o unruhig hier her, und meine
                    <br className="lb" />{" "}
                    Thätigkeit wurde den er<span className="orig">ﬅ</span>
                    <span className="corr">st</span>en Morgen von{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o vielen
                    <br className="lb" />{" "}
                    Seiten in An<span className="orig">ſ</span>
                    <span className="corr">s</span>pruch genommen, daß es mir
                    <br className="lb" />{" "}
                    unmöglich war.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    Deinen lieben Eltern und Ge<span className="orig">ſ</span>
                    <span className="corr">s</span>chwi
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern theil
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>
                    <br className="lb" />{" "}
                    Du die heutige frohe Nachricht wohl mit, und
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ey{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o gut, meine{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>{" "}
                    und mich ihnen allen
                    <br className="lb" />{" "}
                    aufs herzlich<span className="orig">ﬅ</span>
                    <span className="corr">st</span>e zu empfehlen.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    Deinen lieben Brief vom{" "}
                    <span className="date">
                      16.
                      <span className="g.rend.script.latin">
                        <span className="abbr"> Nov.</span>
                        <span className="expan">
                          Nov<span className="ex">ember</span>
                        </span>
                      </span>
                    </span>
                    {" "}habe ich
                    <br className="lb" />{" "}
                    richtig erhalten; er hat mir große Freude gemacht,
                    <br className="lb" />{" "}
                    obgleich Deine Schreibe-Großmut mich etwas be
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chämte.
                    <br className="lb" />{" "}
                    Ich will mich{" "}
                    <sup className="sup" id="txt.add001">
                      aber
                    </sup>{" "}
                    <span className="orig">beßern</span>
                    <span className="corr">bessern</span> in die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>em Stücke, und mehr
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chreiben wenn auch noch mehr
                    wirkliche{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Abhaltung</span>
                    <span className="expan">
                      Abhaltung<span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    eintreten <span className="orig">ſ</span>
                    <span className="corr">s</span>ollten, als{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eit meinem letzten
                    <br className="lb" />{" "}
                    ordentlichen Briefe wirklich exi
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>irten.
                  </p>
                  <p className="enc.tagsdecl.indent-small">
                    <a id="mark.001.s">{/*anchor*/}</a>
                    <span className="reisen">
                      <span className="g.rend.script.latin">August</span> und{" "}
                      <span className="g.rend.script.latin">Louise</span> (die
                      Frau) haben eine <span className="orig">ſ</span>
                      <span className="corr">s</span>ehr
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chöne Rei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e, fa
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> die{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>elbe wie Du gemacht,
                      <br className="lb" />{" "}
                      und erzählen zuweilen von ihren Abentheuern,
                      <br className="lb" />{" "}
                      und von den guten Leuten, die{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie haben kennen
                      <br className="lb" />{" "}
                      gelernt. Was <span className="orig">ſ</span>
                      <span className="corr">s</span>oll ich Dir auf Deine
                      <br className="lb" />{" "}
                      Frage warum{" "}
                      <span className="g.rend.script.latin">Louise</span> |un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ere| nicht Lu
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> hatte
                      <br className="lb" />{" "}
                      die <span className="orig">ſ</span>
                      <span className="corr">s</span>chöne Rei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e mitzumachen, antworten?
                    </span>
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    marginTop: "-8px",
                    paddingTop: "50px",
                    paddingLeft: "70px",
                    paddingBottom: "120px",
                  }}
                >
                  {/* Insert Page 3 */}
                  <p>
                    <span className="reisen">
                      Ich habe mich <span className="orig">ſ</span>
                      <span className="corr">s</span>elb
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>{" "}
                      <span className="damage">
                        <span className="supplied"><span className="hide-normalisiert">⟨</span>über<span className="hide-normalisiert">⟩</span></span>
                      </span>{" "}
                      ihr ruhiges Ent<span className="orig">ſ</span>
                      <span className="corr">s</span>agen
                      <br className="lb" />{" "}
                      die<span className="orig">ſ</span>
                      <span className="corr">s</span>er Rei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e gewundert. Doch mir fällt
                      ein, daß
                      <br className="lb" />{" "}
                      es beim Antritt der{" "}
                      <span className="placeName">Schweizer</span>
                      <span className="orig">⹀</span>
                      <span className="corr">-</span>Rei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e noch nicht aus<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      gemacht war, ob Papa nicht noch nach{" "}
                      <span className="placeName">Berlin</span> mußte,
                      <br className="lb" />{" "}
                      es war damals <span className="orig">ſ</span>
                      <span className="corr">s</span>ogar wahr
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>cheinlich, und da
                      qualifizirt
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ich nach un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er aller häuslichen{" "}
                      <span className="orig">Verhältnißen</span>
                      <span className="corr">Verhältnissen</span> niemand
                      <br className="lb" />{" "}
                      <span className="orig">beßer</span>
                      <span className="corr">besser</span> zur Begleiterin des{" "}
                      <span className="abbr"> l.</span>
                      <span className="expan">
                        l<span className="ex">ieben</span>
                      </span>{" "}
                      Papas als <span className="orig">ſ</span>
                      <span className="corr">s</span>ie; zudem
                      <br className="lb" />{" "}
                      hatte <span className="orig">ſ</span>
                      <span className="corr">s</span>ie von{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chon
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o vieles von Eurer
                      <br className="lb" />{" "}
                      merkwürdigen Stadt gehört, daß{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie darüber der
                      <br className="lb" />{" "}
                      <span className="placeName">Schweiz</span>, wovon{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ie doch
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chon vieles ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ehen hatte,
                      <br className="lb" />{" "}
                      ohne großen Kampf entbehren konnte.
                      <a id="mark.001.e">{/*anchor*/}</a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="religion">
                      <a id="mark.002.s">{/*anchor*/}</a>Was ha
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> Du dem guten Papa mit
                      Deiner
                      <br className="lb" />{" "}
                      Kirchennachricht für Freude gemacht, lieber{" "}
                      <span className="persName">Karl</span>!
                      <br className="lb" />{" "}
                      Er war <span className="orig">ſ</span>
                      <span className="corr">s</span>eelenvergnügt{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">{" "}
                        u<span className="ex">nd</span>
                      </span>{" "}
                      dankbar gegen den höhe
                      <span className="damage">
                        <span className="unclear">rn</span>
                      </span>
                      <br className="lb" />{" "}
                      Lenker die<span className="orig">ſ</span>
                      <span className="corr">s</span>er wichtigen Sache.
                      <a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Da hat <span className="orig">ſ</span>
                    <span className="corr">s</span>o eben{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>{" "}
                    den kleinen Jungen
                    <br className="lb" />{" "}
                    bei <span className="orig">ſ</span>
                    <span className="corr">s</span>ich, und unterhält{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ich mit ihm. Mir laufen
                    <br className="lb" />{" "}
                    immer die Freudenthränen in die Augen, wenn
                    <br className="lb" />{" "}
                    ich das <span className="orig">ſ</span>
                    <span className="corr">s</span>ehe{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    höre. Gott
                    <span className="orig">laße</span>
                    <span className="corr">lasse</span> Dich auch ’mal
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>olche Freuden empfinden,
                    Herzens <span className="persName">Karl</span>.
                  </p>
                  <div className="closer">
                    Nun lebe recht wohl. Dein Andenken lebt
                    <br className="lb" />{" "}
                    bei uns allen, <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    alle{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span> dich herzlich{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (grüß</span>
                    <span className="expan">
                      grüß<span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    be<span className="orig">ſ</span>
                    <span className="corr">s</span>onders aber{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>{" "}
                    und meine gute{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Schwiegermutt </span>
                      <span className="expan">
                        Schwiegermutt<span className="ex">er</span>
                      </span>
                    </span>
                    .<br className="lb" />{" "}
                    Der Herr <span className="orig">ſ</span>
                    <span className="corr">s</span>eÿ ferner mit Dir und
                    <br className="lb" />{" "}
                    <span style={{ display: "inline-block" }} width="12cm">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Deinem
                      <br className="lb" />{" "}
                      <span style={{ display: "inline-block" }} width="13cm">
                        &nbsp;
                      </span>
                      <span className="orig">
                        <span className="glyph">ß</span>
                      </span>
                      <span className="corr" />{" "}
                      <span className="persName">Friedrich</span>.
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
