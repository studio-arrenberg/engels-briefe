import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "285";
  });

  return (
    <Brief_wrapper data={item}>
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      {/* <!-- Themenmarkierung --> */}
      <div type="mark">
        {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
        <span type="religion" from="#mark.002.s" to="#mark.002.e" />
        {/* <span type="geschaeftliches" from="#mark.003.s" to="#mark.003.e"/> */}
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
                  <div className="dateline">
                    <span style={{ display: "inline-block" }} width="40em">
                      &nbsp;
                    </span>
                    <span className="placeName">Hamm</span>
                    <span className="date">
                      <span className="abbr"> (d.)</span>
                      <span className="expan">
                        d<span className="ex">en</span>
                      </span>{" "}
                      20
                      <span className="g.enc.tagsdecl.suspension.type1">
                        (
                        <sup>
                          <sup style={{ textDecoration: "underline" }}>ﬅ</sup>
                        </sup>
                        )
                      </span>
                      <span className="expan">
                        <sup>
                          <sup style={{ textDecoration: "underline" }}>
                            ﬅ<span className="ex">en</span>
                          </sup>
                        </sup>
                      </span>
                      April 1826.
                    </span>
                  </div>
                </div>
                <div className="opener">
                  <span style={{ display: "inline-block" }} width="1lines">
                    &nbsp;
                  </span>
                  <div className="salute">
                    <span style={{ display: "inline-block" }} width="3em">
                      &nbsp;
                    </span>
                    Ja, lieber
                    <span className="persName">Friedrich</span>,
                  </div>
                </div>
                <p>
                  der{" "}
                  <sup className="sup" id="txt.add001">
                    Herr
                  </sup>{" "}
                  hat
                  <span style={{ textDecoration: "line-through" }}>h</span> uns
                  im verfloſſenen Winter, ſo wie unſer
                  <br className="lb" />
                  ganzes Leben hindurch unausſprechlich viel Gutes erwieſen. Wir
                  ſind beide
                  <br className="lb" />
                  ſchon in den Jahren, die das Sprichwort machten:
                  <a id="annot.001.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">
                    Senectus ipsa morbus
                  </span>
                  <a id="annot.001.e">{/*anchor*/}</a> <br className="lb" />
                  <span style={{ textDecoration: "line-through" }}>
                    lat
                  </span>{" "}
                  laut welches wir alſo immer krank ſeÿn müßten; und dennoch ha
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ben wir für das ganze <span className="date">Jahr 1825</span>.
                  dem Arzt
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Apotheker nur etwa zwei
                  <br className="lb" />
                  <span className="abbr"> (Rttr.)</span>
                  <span className="expan">Reichsthaler</span>
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (b. c.)</span>
                    <span className="expan">Bergisch Courant</span>
                  </span>
                  bezahlt. Wir? – Nein, – ich iﬅ das rechte Wort; ich bekam eine
                  <br className="lb" />
                  Verhärtung auf das rechte Schlüſſelbein, welche im obern
                  Fleiſch eine hohe
                  <br className="lb" />
                  Geſchwulﬅ verurſachte. Mit Gottes Hülfe zertheilte es der
                  Wundarzt.
                  <br className="lb" />
                  <a id="mark.001.s">{/*anchor*/}</a>
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="religion">
                    <a id="annot.002.s">{/*anchor*/}</a>Wohl erhob ſich im
                    Fabriken
                    <span className="orig">⹀</span>
                    <span className="corr">-</span>{" "}
                    <span className="abbr"> (u)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Handlungsgebiet ein Sturm ſo heftig, daß
                    <br className="lb" />
                    ſelbﬅ maſſive Palläﬅe zuſammenﬅürzten. Und wiewohl ich mich
                    nicht
                    <br className="lb" />
                    rühme, tiefe Blicke in das Handlungsgebäude thun zu können:
                    ſo glaube ich
                    <br className="lb" />
                    doch, daß die Bauherren ſolcher Palläﬅe, zwar nicht alle,
                    aber doch der größte
                    <br className="lb" />
                    Theil derſelben ſolchen Einﬅurz verſchuldet hatten,
                    <span className="abbr"> (u)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    andere mit ſich ins Ver
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    derben zogen.<a id="annot.002.e">{/*anchor*/}</a> Es gehört
                    zur Lebensweisheit, aus dem Böſen oder Unangeneh
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    men nicht nur das Kleinere zu wählen; ſondern aus dieſem
                    <span className="orig">Uebel</span>
                    <span className="corr">Übel</span> noch das
                    <br className="lb" />
                    Gute zu ſuchen, was darin liegt. Das thun Sie ſelbﬅ ſchon;
                    daher ich es unnö
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    thig finde, darüber noch ein Wort zu ſchreiben.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                  <a id="mark.001.e">{/*anchor*/}</a>
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="2em">
                    &nbsp;
                  </span>
                  <a id="annot.003.s">{/*anchor*/}</a>Die Frau
                  <span className="persName">
                    <span style={{ textDecoration: "underline" }}>
                      Gutacker
                    </span>
                  </span>
                  ,<a id="annot.003.e">{/*anchor*/}</a> welche wir nicht kennen,
                  muß viel Erfahrung haben,
                  <br className="lb" />
                  wenn ſie einem Kinde, das ſeine Nahrung mit Appetit zu ſich
                  nimmt, und
                  <br className="lb" />
                  ſich derſelben mit Anﬅand wieder entlediget, eine gute
                  Geſundheit beilegt.
                  <br className="lb" />
                  Aber ſie ﬅeht weit hinter mancher hieſigen Frau zurück, welche
                  es an der
                  <br className="lb" />
                  Wiege ſehen kann, wenn das in derſelben ſchlafende Kind ein
                  Bedürfniß
                  <br className="lb" />
                  der Ausleerung hat. <a id="teaser.part.001.s">{/*anchor*/}</a>
                  Ihr
                  <span className="persName">Friedrich</span>, der ſchon jetzt
                  ſo viel auf Leſen hält, ſchon
                  <br className="lb" />
                  von jeher ſo neu
                  <span className="orig" />
                  <span className="corr">-</span> = wißbegierig iﬅ, wollte ich
                  ſagen, – der durch Fragen
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="63em">
                    &nbsp;
                  </span>
                  <span style={{ textDecoration: "underline" }}>jedem</span>
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
                  jedem Dinge auf den Grund kommen will, wird einﬅ ein großer Ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lehrter werden.<a id="teaser.part.001.e">{/*anchor*/}</a> Im
                  vorigen Herbﬅ kam er jeden Morgen, ſo bald er
                  <br className="lb" />
                  angezogen war zu mir geſprungen: – guten Morgen, Großvater,
                  nun
                  <br className="lb" />
                  erzähle mir etwas! –{" "}
                  <a id="teaser.part.002.s">{/*anchor*/}</a>Ich werde mich bei
                  ſeiner Wißbegierde wohl für
                  <br className="lb" />
                  das nächﬅe Wiederſehen auf einige ſeinem Alter
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſeinen Fortſchritten
                  <br className="lb" />
                  angemeſſene Erzählungen vorbereiten müſſen.
                  <a id="teaser.part.002.e">{/*anchor*/}</a>
                  Dem <span className="persName">Hermann</span> las
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ſen Sie immer noch ſeine Peitſche{" "}
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſein Steckenpferd. Haben doch wir al
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Leute noch das Unſrige, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  von je her eins gehabt. Der ganze Unter
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ſchied iﬅ nur, daß wir es mehrmals vertauſcht haben. Auch für
                  den gemüth
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lichen <span className="persName">Herman̅</span> wird die Zeit
                  kommen, wo er das Eigentliche mit dem Un
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  eigentlichen vertauſcht. Daß die kleine
                  <span className="persName">Marie</span>, die Mädchen oder Frau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  en im Allgemeinen – (wobei ich jedoch, um mich gegen jeden
                  <span className="orig">Ueberfall</span>
                  <span className="corr">Überfall</span>
                  <br className="lb" />
                  zu decken, Ausnahmen einräume,{" "}
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  es jedem Mädchen
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  jeder Frau
                  <br className="lb" />
                  gerne geﬅatte, ſich zu dieſen Ausnahmen zu zählen,) – eitel
                  ſind, wer
                  <br className="lb" />
                  iﬅ Schuld daran? – Wer putzt die kleinen Dingerchen – mit
                  Bändern, net
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Kleidern oder Schlüſſelplaggen, ﬅellt ſie vor den Spiegel,
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſagt „
                  <span style={{ textDecoration: "underline" }}>ﬅaats</span>„
                  <span className="orig">.</span>
                  <span className="corr">?</span>
                  <br className="lb" />
                  Wer nennt die jungen, heranreifenden Mädchen: „mein ſchönes
                  Kind„; mag
                  <br className="lb" />
                  es nun Kätchen oder Klärchen heißen
                  <span className="orig">.</span>
                  <span className="corr">?</span> Welcher Bräutigam hält nicht
                  ſeine Braut
                  <span className="orig">,</span>
                  <span className="corr" />
                  <br className="lb" />
                  für ſchön, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſagt ihr auch, daß ſie es iﬅ. Und wenn der Mann aufhört,
                  <br className="lb" />
                  ſeiner Frau die Schönheit zum Vorwurf zu machen: ſo ſieht er
                  es doch gerne,
                  <br className="lb" />
                  nicht daß ſie ſich in ihrem Hauſe täglich reinlich kleide –
                  das
                  <span style={{ textDecoration: "underline" }}>muß</span> jede
                  <br className="lb" />
                  erdenkliche Frau – , ſondern, daß ſie ſich bei
                  Feierlichkeiten,
                  <span className="abbr"> (z. B.)</span>
                  <span className="expan">
                    z<span className="ex">um</span>{" "}
                    <span className="ex"> </span>B
                    <span className="ex">eiſpiel</span>
                  </span>
                  Kindtau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  fen, Hochzeiten, Concerten{" "}
                  <span className="abbr"> (p.p.)</span>
                  <span className="expan">
                    p<span className="ex">erge</span> <span className="ex" />p
                    <span className="ex">erge</span>
                  </span>
                  wirklich etwas putze. Hiemit will ich
                  <br className="lb" />
                  nun behauptet haben, daß wir Männer nicht alleine aber ſo
                  eitel ſind
                  <br className="lb" />
                  als das weibliche Geſchlecht, ſondern daß wir in dieſem ſo gar
                  die Eitel
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span style={{ display: "inline-block" }} width="65em">
                    &nbsp;
                  </span>
                  <span style={{ textDecoration: "underline" }}>keit</span>
                  jedem Dinge auf den Grund kommen will, wird einﬅ ein großer Ge
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lehrter werden.<a id="teaser.part.001.e">{/*anchor*/}</a> Im
                  vorigen Herbﬅ kam er jeden Morgen, ſo bald er
                  <br className="lb" />
                  angezogen war zu mir geſprungen: – guten Morgen, Großvater,
                  nun
                  <br className="lb" />
                  erzähle mir etwas! –{" "}
                  <a id="teaser.part.002.s">{/*anchor*/}</a>Ich werde mich bei
                  ſeiner Wißbegierde wohl für
                  <br className="lb" />
                  das nächﬅe Wiederſehen auf einige ſeinem Alter
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſeinen Fortſchritten
                  <br className="lb" />
                  angemeſſene Erzählungen vorbereiten müſſen.
                  <a id="teaser.part.002.e">{/*anchor*/}</a>
                  Dem <span className="persName">Hermann</span> las
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ſen Sie immer noch ſeine Peitſche{" "}
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſein Steckenpferd. Haben doch wir al
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Leute noch das Unſrige, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  von je her eins gehabt. Der ganze Unter
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ſchied iﬅ nur, daß wir es mehrmals vertauſcht haben. Auch für
                  den gemüth
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  lichen <span className="persName">Herman̅</span> wird die Zeit
                  kommen, wo er das Eigentliche mit dem Un
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  eigentlichen vertauſcht. Daß die kleine
                  <span className="persName">Marie</span>, die Mädchen oder Frau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  en im Allgemeinen – (wobei ich jedoch, um mich gegen jeden
                  <span className="orig">Ueberfall</span>
                  <span className="corr">Überfall</span>
                  <br className="lb" />
                  zu decken, Ausnahmen einräume,{" "}
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  es jedem Mädchen
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  jeder Frau
                  <br className="lb" />
                  gerne geﬅatte, ſich zu dieſen Ausnahmen zu zählen,) – eitel
                  ſind, wer
                  <br className="lb" />
                  iﬅ Schuld daran? – Wer putzt die kleinen Dingerchen – mit
                  Bändern, net
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten Kleidern oder Schlüſſelplaggen, ﬅellt ſie vor den Spiegel,
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſagt „
                  <span style={{ textDecoration: "underline" }}>ﬅaats</span>„
                  <span className="orig">.</span>
                  <span className="corr">?</span>
                  <br className="lb" />
                  Wer nennt die jungen, heranreifenden Mädchen: „mein ſchönes
                  Kind„; mag
                  <br className="lb" />
                  es nun Kätchen oder Klärchen heißen
                  <span className="orig">.</span>
                  <span className="corr">?</span> Welcher Bräutigam hält nicht
                  ſeine Braut
                  <span className="orig">,</span>
                  <span className="corr" />
                  <br className="lb" />
                  für ſchön, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſagt ihr auch, daß ſie es iﬅ. Und wenn der Mann aufhört,
                  <br className="lb" />
                  ſeiner Frau die Schönheit zum Vorwurf zu machen: ſo ſieht er
                  es doch gerne,
                  <br className="lb" />
                  nicht daß ſie ſich in ihrem Hauſe täglich reinlich kleide –
                  das
                  <span style={{ textDecoration: "underline" }}>muß</span> jede
                  <br className="lb" />
                  erdenkliche Frau – , ſondern, daß ſie ſich bei
                  Feierlichkeiten,
                  <span className="abbr"> (z. B.)</span>
                  <span className="expan">
                    z<span className="ex">um</span>{" "}
                    <span className="ex"> </span>B
                    <span className="ex">eiſpiel</span>
                  </span>
                  Kindtau
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  fen, Hochzeiten, Concerten{" "}
                  <span className="abbr"> (p.p.)</span>
                  <span className="expan">
                    p<span className="ex">erge</span> <span className="ex" />p
                    <span className="ex">erge</span>
                  </span>
                  wirklich etwas putze. Hiemit will ich
                  <br className="lb" />
                  nun behauptet haben, daß wir Männer nicht alleine aber ſo
                  eitel ſind
                  <br className="lb" />
                  als das weibliche Geſchlecht, ſondern daß wir in dieſem ſo gar
                  die Eitel
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span style={{ display: "inline-block" }} width="65em">
                    &nbsp;
                  </span>
                  <span style={{ textDecoration: "underline" }}>keit</span>
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
                  keit anfachen <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  nähren. Das mag ein Paradoxon ſcheinen; aber wenn
                  <br className="lb" />
                  man darüber die Stimmen ſammeln,{" "}
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die Sache hiedurch <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  durch Erhebung
                  <br className="lb" />
                  eines Schreiens wollte entscheiden laſſen: ſo wären gewiß
                  nicht nur die
                  <br className="lb" />
                  meiﬅen Stimmen, ſondern auch das lauteﬅe Geſchrei auf meiner
                  Seite.
                  <br className="lb" />
                  Denn, außer dem ganzen weiblichen Geſchlechte, würden mir doch
                  einige
                  <br className="lb" />
                  Männer beifallen. Meine Parthei könnte dieſe Wahrheit
                  volltönend vier
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ﬅimmig ſingen, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  der Gegenparthei würden die Sopranﬅimmen fehlen.
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  <a id="mark.003.s">{/*anchor*/}</a>Ihr
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Conto–Corrent</span>
                  <a id="annot.004.e">{/*anchor*/}</a> enthält ohne Ihr
                  Verſchulden ein Verſehen. Sie konn
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ten nicht wiſſen, daß ich <span className="abbr"> (d)</span>
                  <span className="expan">
                    d<span className="ex">em </span>
                  </span>
                  <span className="g.enc.tagsdecl.suspension.type2"> (H.)</span>
                  <span className="expan">
                    H<span className="ex">errn</span>
                  </span>
                  <span className="persName">
                    <span className="abbr">
                      {" "}
                      (<span className="hi">vdKuhlen</span>)
                    </span>
                    <span className="expan">
                      v<span className="ex">on </span>d
                      <span className="ex">er </span>Kuhlen
                    </span>
                  </span>
                  <span className="abbr"> (d.)</span>
                  <span className="expan">
                    d<span className="ex">en</span>
                  </span>{" "}
                  14. Januar dieſes Jahrs zum
                  <br className="lb" />
                  zweiten Mal die vollen 75.{" "}
                  <span className="abbr"> (rttr.)</span>
                  <span className="expan">Reichsthaler</span> gegen Quittung
                  namens
                  <span className="orgName">
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (Casp.)</span>
                      <span className="expan">
                        Casp<span className="ex">ar</span>
                      </span>
                      Engels
                    </span>
                    <br className="lb" />
                    Söhne
                  </span>
                  bezahlt habe, <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  es, ohne mir wehe zu thun, zahlen konnte. Dieſe 2
                  <sup>
                    <sup style={{ textDecoration: "underline" }}>te</sup>
                  </sup>
                  <br className="lb" />
                  Quittung ﬅeht auf dem Blatt der erﬅen. Unter dieſelben wird
                  bei
                  <br className="lb" />
                  Leben <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Wohlſein im künftigen Januar auch die dritte kommen, wenn
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="-4em">
                    &nbsp;
                  </span>
                  <span className="add" id="txt.add002">
                    ⟨Sie ⟩
                  </span>
                  anders mich mit der Zahlung ferner beauftragen.
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  Wenn Sie
                  <span className="g.rend.script.latin">Snethlage</span> bei
                  ſeiner Reiſe nach
                  <span className="placeName">Berlin</span> die 6.
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (Fr. d’or)</span>
                    <span className="expan">Friedrichs d’or</span>
                  </span>
                  für
                  <br className="lb" />
                  ſeinen Vater in meinem Namen mitgeben wollen: ſo wird mir
                  <br className="lb" />
                  das ſehr lieb ſeÿn. Ich erſpare dann das Konto. Haben Sie nur
                  dann die
                  <br className="lb" />
                  Güte mir den Betrag dieſer 6.
                  <span className="abbr">
                    <span className="g.rend.script.latin">Fr. d’or</span>
                  </span>
                  in <span className="abbr"> (Berg.)</span>
                  <span className="expan">
                    Berg<span className="ex">iſch</span>
                  </span>
                  <span className="abbr"> (Cour.)</span>
                  <span className="expan">
                    Cour<span className="ex">ant</span>
                  </span>{" "}
                  zu melden. Entweder
                  <br className="lb" />
                  weder ſende ich Ihnen dieſen gelegentlich{" "}
                  <span className="orig">baar</span>
                  <span className="corr">bar</span> zurück, oder bezahle ihn
                  <br className="lb" />
                  durch Lieferung von Butter, wenn anders die dortigen
                  Hausfrauen die
                  <br className="lb" />
                  hieſige zum Kochen geeigneter finden, als die dortige.
                  <a id="mark.003.e">{/*anchor*/}</a>
                </p>
                <div className="closer">
                  <span style={{ display: "inline-block" }} width="1char">
                    &nbsp;
                  </span>
                  Leben Sie wohl! <a id="annot.005.s">{/*anchor*/}</a>Gott ſegne
                  Sie
                  <a id="annot.005.e">{/*anchor*/}</a>
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die
                  <span className="abbr"> (l.)</span>
                  <span className="expan">
                    l<span className="ex">ieben</span>
                  </span>{" "}
                  Ihrigen! tauſend Grüße an
                  <br className="lb" />
                  alle dortigen Fremden von allen hieſigen. Mit Liebe
                  <span className="abbr"> (u)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Achtung der
                  <br className="lb" />
                  <div className="signed">
                    <span style={{ display: "inline-block" }} width="56em">
                      &nbsp;
                    </span>
                    Ihrige
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="54em">
                      &nbsp;
                    </span>
                    <span className="g.rend.script.latin">van Haar</span>.
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
                {/* Insert Page 4 */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
