import data from "../../public/data.json";
import React, { Children, Component } from "react";
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
                style={{ paddingTop: "100px", paddingBottom: "160px" }}
              >
                {/* Insert Kuvert */}
                <div className="kuvert" id="index.xml-body.1_div.1">
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-right">
                      <span className="address">
                        An den DomCandidaten
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="3cm">
                          &nbsp;
                        </span>
                        Herrn
                        <span className="g.rend.script.latin">Snetlage</span>
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="5cm">
                          &nbsp;
                        </span>
                        Wohlgeboren
                        <br className="lb" />
                        <span style={{ textDecoration: "underline" }}>
                          frei.
                        </span>
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        in
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="5cm">
                          &nbsp;
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
                  paddingTop: "55px",
                  paddingLeft: "80px",
                  paddingBottom: "100px",
                }}
              >
                {/* Insert Page 1 */}
                <div className="opener">
                  <span style={{ display: "inline-block" }} width="6words">
                    &nbsp;
                  </span>
                  <div className="dateline">
                    <span className="g.rend.script.latin">Barmen</span>,
                    <span className="date">
                      1.
                      <span className="g.rend.script.latin">
                        <span className="abbr"> (Decr.)</span>
                        <span className="expan">
                          Dec<span className="ex">embe</span>r
                        </span>
                      </span>
                      1820.
                    </span>
                  </div>
                </div>
                <div className="opener">
                  <div className="salute">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>Freue Dich mit
                    mir, innigﬅ geliebter <span className="persName">Karl</span>
                    !
                  </div>
                </div>
                <p>
                  der
                  <br className="lb" />
                  liebe Gott hat unſer <span className="orig">Gebät</span>
                  <span className="corr">Gebet</span> erhört, und uns am
                  <br className="lb" />
                  verfloßnen Dienﬅagabend, den
                  <span className="date">
                    29.
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (Nov.)</span>
                      <span className="expan">
                        Nov<span className="ex">ember</span>
                      </span>
                    </span>
                  </span>
                  Abends um
                  <br className="lb" />
                  9 Uhr ein Kindlein, und zwar einen geſunden
                  <br className="lb" />
                  wohlgeﬅalteten Knaben geſchenkt.
                  <a id="teaser.part.001.e">{/*anchor*/}</a>
                  Ihm <span className="orig">ſeÿ</span>
                  <span className="corr">ſey</span> Lob und
                  <br className="lb" />
                  Preis aus unſern vollen Herzen gebracht für dieſes
                  <br className="lb" />
                  Kind und für die gnädige Hülfe und Bewahrung, welche
                  <br className="lb" />
                  wir bei der Entbindung für Mutter und Kind er
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  fahren haben! Es ging zwar alles{" "}
                  <span className="orig">glüklich</span>
                  <span className="corr">glücklich</span>, doch war
                  <br className="lb" />
                  es eine ſchwere Geburt. Ach Gott, was fühlte ich, als
                  <br className="lb" />
                  ich mein armes Weib ſo leiden ſah; es iﬅ nicht zu be
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ſchreiben. Oft war es mir, als wenn ich es nicht mehr
                  <br className="lb" />
                  anſehen könnte, und doch <span className="orig">lies</span>
                  <span className="corr">ließ</span> mich dieſelbe Liebe
                  <br className="lb" />
                  keinen <span className="orig">Augenblik</span>
                  <span className="corr">Augenblick</span> von ihrem
                  Schmerzenslager
                  <br className="lb" />
                  weichen, um ihr wo möglich einige Erleichterung
                  <br className="lb" />
                  verſchaﬀen zu helfen. Der Herr ſeÿ gelobt,
                  <br className="lb" />
                  daß dieſe Zeit der Angﬅ vorüber iﬅ! und nicht
                  <br className="lb" />
                  nur vorüber iﬅ, ſondern durch Freude verdrängt
                  <br className="lb" />
                  wurde, als wir nun das Jüngelchen ſo geſund hatten.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Meine gute <span className="persName">Eliſe</span> iﬅ nun
                  ſeitdem den
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Umﬅänd)
                  </span>
                  <span className="expan">
                    Umﬅänd<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  nach ganz wohl geweſen, <span className="orig">blos</span>
                  <span className="corr">bloß</span> dieſe Nacht bekam
                  <br className="lb" />
                  ſie ſehr heftige Leibſchmerzen, welche jedoch von
                  <br className="lb" />
                  Blähungen herrührten, und auf einige Verordnung
                  <br className="lb" />
                  des Arztes bald wieder verſchwanden. Das
                  <br className="lb" />
                  kleine Knäbchen ſchläft faﬅ immer recht ruhig, und
                  <br className="lb" />
                  das iﬅ recht gut, denn Gott ﬅärkt ja die Kleinen
                  <br className="lb" />
                  im Schlafe. Sein kleines Haus ﬅeht neben mir,
                  <br className="lb" />
                  mit ſeinem ſanft ſchlummernden Bewohner, und
                  <br className="lb" />
                  macht mir eine ganz neue große Freude, ſo oft ich
                  <br className="lb" />
                  es ſehe. Der gute Gott nehme nun ferner beide
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
                  Lieben in Seinen Heiligen Schutz. Er ſeÿe auch dem
                  <br className="lb" />
                  Kindlein ein ſo gütiger Gott{" "}
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Vater, wie er mir
                  <br className="lb" />
                  bisher war, und gebe, daß wir einﬅ vor Seinem Throne
                  <br className="lb" />
                  noch Freude von dieſer Geburt haben. Er gebe uns
                  <br className="lb" />
                  aber auch Weisheit, es gut und in Seiner Furcht zu
                  <br className="lb" />
                  erziehen, und ihm durch unſer Beiſpiel die beßte Lehre
                  <br className="lb" />
                  zu geben! Dieß iﬅ nun mein tägliches{" "}
                  <span className="orig">Gebät</span>
                  <span className="corr">Gebet</span>.<br className="lb" />
                  Ich hatte vor, Dir ſchon am Mittwoch unmittelbar
                  <br className="lb" />
                  nach der Entbindung meiner <span className="abbr"> (l.)</span>
                  <span className="expan">
                    l<span className="ex">ieben</span>
                  </span>{" "}
                  Frau zu ſchreiben,
                  <br className="lb" />
                  aber es ging ſo unruhig hier her, und meine
                  <br className="lb" />
                  Thätigkeit wurde den erﬅen Morgen von ſo vielen
                  <br className="lb" />
                  Seiten in Anſpruch genommen, daß es mir
                  <br className="lb" />
                  unmöglich war.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Deinen lieben Eltern und Geſchwiﬅern theilﬅ
                  <br className="lb" />
                  Du die heutige frohe Nachricht wohl mit, und
                  <br className="lb" />
                  ſey ſo gut, meine <span className="persName">Eliſe</span> und
                  mich ihnen allen
                  <br className="lb" />
                  aufs herzlichﬅe zu empfehlen.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Deinen lieben Brief vom
                  <span className="date">
                    16.
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (Nov.)</span>
                      <span className="expan">
                        Nov<span className="ex">ember</span>
                      </span>
                    </span>
                  </span>
                  habe ich
                  <br className="lb" />
                  richtig erhalten; er hat mir große Freude gemacht,
                  <br className="lb" />
                  obgleich Deine Schreibe-Großmut mich etwas beſchämte.
                  <br className="lb" />
                  Ich will mich{" "}
                  <sup className="sup" id="txt.add001">
                    aber
                  </sup>
                  <span className="orig">beßern</span>
                  <span className="corr">bessern</span> in dieſem Stücke, und
                  mehr
                  <br className="lb" />
                  ſchreiben wenn auch noch mehr wirkliche
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Abhaltung)
                  </span>
                  <span className="expan">
                    Abhaltung<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  eintreten ſollten, als ſeit meinem letzten
                  <br className="lb" />
                  ordentlichen Briefe wirklich exiﬅirten.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  <a id="mark.001.s">{/*anchor*/}</a>
                  <span className="reisen">
                    <span className="g.rend.script.latin">August</span> und
                    <span className="g.rend.script.latin">Louise</span> (die
                    Frau) haben eine ſehr
                    <br className="lb" />
                    ſchöne Reiſe, faﬅ die ſelbe wie Du gemacht,
                    <br className="lb" />
                    und erzählen zuweilen von ihren Abentheuern,
                    <br className="lb" />
                    und von den guten Leuten, die ſie haben kennen
                    <br className="lb" />
                    gelernt. Was ſoll ich Dir auf Deine
                    <br className="lb" />
                    Frage warum{" "}
                    <span className="g.rend.script.latin">Louise</span> |unſere|
                    nicht Luﬅ hatte
                    <br className="lb" />
                    die ſchöne Reiſe mitzumachen, antworten?
                  </span>
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
                  <span className="reisen">
                    Ich habe mich ſelbﬅ
                    <span className="damage">
                      <span className="supplied">&lt;über&gt;</span>
                    </span>
                    ihr ruhiges Entſagen
                    <br className="lb" />
                    dieſer Reiſe gewundert. Doch mir fällt ein, daß
                    <br className="lb" />
                    es beim Antritt der{" "}
                    <span className="placeName">Schweizer</span>
                    <span className="orig">⹀</span>
                    <span className="corr">-</span>Reiſe noch nicht aus
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    gemacht war, ob Papa nicht noch nach
                    <span className="placeName">Berlin</span> mußte,
                    <br className="lb" />
                    es war damals ſogar wahrſcheinlich, und da qualifizirt
                    <br className="lb" />
                    ſich nach unſer aller häuslichen{" "}
                    <span className="orig">Verhältnißen</span>
                    <span className="corr">Verhältnissen</span> niemand
                    <br className="lb" />
                    <span className="orig">beßer</span>
                    <span className="corr">besser</span> zur Begleiterin des{" "}
                    <span className="abbr"> (l.)</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>{" "}
                    Papas als ſie; zudem
                    <br className="lb" />
                    hatte ſie von <span className="persName">Eliſe</span> ſchon
                    ſo vieles von Eurer
                    <br className="lb" />
                    merkwürdigen Stadt gehört, daß ſie darüber der
                    <br className="lb" />
                    <span className="placeName">Schweiz</span>, wovon ſie doch
                    ſchon vieles geſehen hatte,
                    <br className="lb" />
                    ohne großen Kampf entbehren konnte.
                    <a id="mark.001.e">{/*anchor*/}</a>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <span className="religion">
                    <a id="mark.002.s">{/*anchor*/}</a>Was haﬅ Du dem guten Papa
                    mit Deiner
                    <br className="lb" />
                    Kirchennachricht für Freude gemacht, lieber
                    <span className="persName">Karl</span>!<br className="lb" />
                    Er war ſeelenvergnügt <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    dankbar gegen den höhe
                    <span className="damage">
                      <span className="unclear">rn[?]</span>
                    </span>
                    <br className="lb" />
                    Lenker dieſer wichtigen Sache.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Da hat ſo eben <span className="persName">Eliſe</span> den
                  kleinen Jungen
                  <br className="lb" />
                  bei ſich, und unterhält ſich mit ihm. Mir laufen
                  <br className="lb" />
                  immer die Freudenthränen in die Augen, wenn
                  <br className="lb" />
                  ich das ſehe <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  höre. Gott
                  <span className="orig">laße</span>
                  <span className="corr">lasse</span> Dich auch ’mal
                  <br className="lb" />
                  ſolche Freuden empfinden, Herzens{" "}
                  <span className="persName">Karl</span>.
                </p>
                <div className="closer">
                  Nun lebe recht wohl. Dein Andenken lebt
                  <br className="lb" />
                  bei uns allen, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  alle
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span> dich herzlich{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (grüß)
                  </span>
                  <span className="expan">
                    grüß<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  beſonders aber <span className="persName">Eliſe</span> und
                  meine gute
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Schwiegermutt)
                    </span>
                    <span className="expan">
                      Schwiegermutt<span className="ex">er</span>
                    </span>
                  </span>
                  .<br className="lb" />
                  Der Herr ſeÿ ferner mit Dir und
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="12cm">
                    &nbsp;
                  </span>
                  <div className="signed">
                    Deinem
                    <br className="lb" />
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
