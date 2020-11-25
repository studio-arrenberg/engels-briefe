import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "169";
  });

  return (
    <Brief_wrapper data={item}>
      {/* brief text goes here */}

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
                  <p className="g.enc.tagsdecl.wd.vertical-right">
                    <span className="address">
                      <span style={{ display: "inline-block" }} width="2cm">
                        &nbsp;
                      </span>
                      <span style={{ display: "inline-block" }} width="2cm">
                        &nbsp;
                      </span>{" "}
                      An meine liebe <span className="persName">Eliſe</span>.
                      <br />
                    </span>
                  </p>
                </div>
              </section>
            </div>

            {/* <!-- Themenmarkierung --> */}
            <div type="mark">
              {/* <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e" /> */}
              {/* <span type="reisen" from="#mark.002.s" to="#mark.002.e" /> */}
              {/* <span type="liebe-ehe" from="#mark.003.s" to="#mark.003.e" /> */}
              {/* <span type="liebe-ehe" from="#mark.004.s" to="#mark.004.e" /> */}
              {/* <span type="religion" from="#mark.005.s" to="#mark.005.e" /> */}
              {/* <span type="reisen" from="#mark.006.s" to="#mark.006.e" /> */}
              {/* <span type="liebe-ehe" corresp="#mark.007" /> */}
              {/* <span type="liebe-ehe" from="#mark.008.s" to="#mark.008.e" /> */}
              {/* <span type="liebe-ehe" from="#mark.009.s" to="#mark.009.e" /> */}
              
              {/* 009 Themenmarkierung doppelt vorhanden! */}
              {/* <span type="reisen" from="#mark.009.s" to="#mark.009.e" /> */}

              {/* <span type="reisen" from="#mark.010.s" to="#mark.010.e" /> */}
              {/* <span type="liebe-ehe" from="#mark.011.s" to="#mark.011.e" /> */}
              <span type="religion" corresp="#mark.012" />
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
                {/* Page 1 */}
                <div>
                  <div classname="opener">
                    <span style={{ display: "inline-block" }} width="9.5cm">
                      &nbsp;
                    </span>
                    <div classname="dateline">
                      <span classname="g.rend.script.latin">Barmen</span>,
                      <span classname="date">
                        3. <span classname="g.rend.script.latin">Juli</span>{" "}
                        1818
                      </span>
                      .
                    </div>
                  </div>
                  <span style={{ display: "inline-block" }} width="1line">
                    &nbsp;
                  </span>
                  <div classname="opener">
                    <div classname="salute">
                      <a id="teaser.part.001.s"></a>

                      <span className="liebe">
                        <a id="mark.001.s"></a>
                        Mit welchem frohen, ſeligen Gefühle ich jetzt an
                        <br classname="lb" />
                        dich meine gute innigﬅ geliebte
                        <span classname="persName">Eliſe</span> ſchreibe, kann
                        <br classname="lb" />
                        ich mit Worten nicht ausdrücken; dein mit mir
                        <br classname="lb" />
                        ſo ganz ﬅimmendes Herz wird es kennen.
                      </span>
                    </div>
                  </div>
                </div>

                <p>
                  <span className="liebe">
                    Ich ſchreibe
                    <br className="lb" />
                    nämlich mit der völligen Einwilligung meiner lieben
                    <br className="lb" />
                    Eltern.<a id="teaser.part.001.e"></a> Gleich den anderen
                    Morgen nach unſerer
                    <br className="lb" />
                    Ankunft ſagte mein Vater unſer Verhältniß meiner
                    <br className="lb" />
                    Mutter, ſie war damit ebenfalls ganz zufrieden, und
                    <br className="lb" />
                    ſprach den Nachmittag recht freundlich mit mir über dich.
                    <br className="lb" />
                    Meine <span className="abbr"> (l.)</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>{" "}
                    Eltern fanden es für nöthig auch jetzt ſchon
                    <br className="lb" />
                    mit meinem Oncle davon zu ſprechen, und ich ﬅimmte
                    <br className="lb" />
                    ihnen ganz bei. Du wirﬅ dieſen indeß ſo auch
                    <span className="strikethrough">haben</span>
                    <br className="lb" />
                    kennen gelernt haben, daß es bei dieſem herzensguten
                    <br className="lb" />
                    Manne viel darauf ankommt, in welcher Stimmung
                    <br className="lb" />
                    und auf welche Art ihm eine Sache beigebracht wird, und
                    <br className="lb" />
                    daß bei ihm der erﬅe Eindruck, den etwas der Art
                    <br className="lb" />
                    auf ihn macht, von langer Dauer iﬅ; wir hielten es
                    <br className="lb" />
                    daher für gut, einen ſchicklichen Zeitpunkt bei ihm
                    <br className="lb" />
                    abzuwarten. Durch einen
                    <span className="placeName">
                      <span className="g.rend.script.latin">Bremer</span>
                    </span>
                    Freund, der ſeit
                    <br className="lb" />
                    ein paar Tagen bei ihm logirt, iﬅ er nun mehr be
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    ſchäftigt, bleibt aber dabei froh, und ſo denke ich wird
                    <br className="lb" />
                    Papa ihm in Gottes Namen erﬅer Tage alles mittheilen.
                    <br className="lb" />
                    Ich zweifle keinen Augenblick an ſeiner völligen Ge
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    nehmigung, indeß hats mich doch bis jetzt an einem
                    <br className="lb" />
                    Schritte abgehalten, den du gewiß auch für gut finden
                    <br className="lb" />
                    wirﬅ. Ich hatte nämlich vor, liebe{" "}
                    <span className="persName">Eliſe</span>, meinen
                    <br className="lb" />
                    erﬅen Brief an dich in einen Brief an deine guten
                    <br className="lb" />
                    Eltern einzuſchlagen, und dieſe in demſelben mit der
                    <br className="lb" />
                    Bewilligung meiner Eltern um die Erlaubniß
                    <br className="lb" />
                    zu bitten, mit dir Briefe wechſeln zu dürfen. Dieſes
                    <br className="lb" />
                    durfte ich aber ohne meinen Oncle nicht thun, der wie
                    <br className="lb" />
                    du weißt, durch ſeine große Liebe zu uns auch mehr
                    <br className="lb" />
                    Rechte wie gewöhnliche Verwandten hat. Sobald er alſo
                    <br className="lb" />
                    eingeweiht iﬅ,
                    <span style={{ textDecoration: "line-through" }}>
                      leite
                    </span>{" "}
                    ſchreibe ich an deine lieben Eltern.
                    <a id="mark.001.e"></a>
                  </span>

                  <br className="lb" />
                  <span className="reisen">
                    <a id="mark.002.s"></a>Binnen 8 Tagen muß alles in Ordnung
                    ſeyn, denn
                    <br className="lb" />
                    höchﬅwahrſcheinlich werde ich dann meine Reiſe antreten
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    dieſes thue ich nicht eher bis ich alles in Ordnung weiß!
                    <a id="mark.002.e"></a>
                  </span>
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
                {/* Page 2 */}

                <p className="enc.tagsdecl.indent-medium">
                  <span className="liebe">
                    <a id="mark.003.s"></a>Wäre es nicht gut liebe
                    <span className="persName">Eliſe</span>, wenn du vorläufig
                    deinen
                    <br className="lb" />
                    lieben Eltern deine Liebe zu mir entdeckteﬅ, damit ſie
                    <br className="lb" />
                    zuerﬅ von dir, als Tochter etwas Beﬅimmtes darüber
                    <br className="lb" />
                    erführen?<a id="mark.003.e"></a>
                  </span>
                  Mache du dieſes wie es dir und Friederike
                  <br className="lb" />
                  am beßten ſcheint.
                </p>
                <span className="liebe">
                  <p className="enc.tagsdecl.indent-medium">
                    <a id="mark.004.s"></a>Wenn ich ſo, meine gute
                    <span className="persName">Eliſe</span> die ſchnelle und
                    <br className="lb" />
                    die ſo überaus günﬅige Wendung unſerer Angelegenheit
                    <br className="lb" />
                    bedenke, ſo kommt mir oft das ganze wie ein
                    <br className="lb" />
                    angenehmer Traum vor; es kam alles ſo ſchnell,
                    <br className="lb" />
                    und ſo unerwartet. Wenn ich mir ſo oft den möglichﬅ
                    <br className="lb" />
                    leichteﬅen Ausgang dachte, ſo war er immer noch mit
                    <br className="lb" />
                    mehr Schwierigkeiten verbunden, als nun in der
                    <br className="lb" />
                    Wirklichkeit ſich zeigten.
                    <span className="religion">
                      <a id="mark.005.s"></a>O laß uns nicht{" "}
                      <span className="orig">vergeßen</span>
                      <span className="corr">vergessen</span>,
                      <br className="lb" />
                      unſerm lieben himmliſchen Vater
                      <span style={{ textDecoration: "line-through" }}>
                        für
                      </span>
                      <span style={{ textDecoration: "line-through" }}>
                        dieſen
                      </span>{" "}
                      herzlich
                      <br className="lb" />
                      zu danken, daß Er die Herzen unſerer Eltern
                      <br className="lb" />
                      ſo lenkte, und uns beiden durch die ſo liebevolle
                      <br className="lb" />
                      Einwilligung derſelben einen Beweis gab, daß
                      <br className="lb" />
                      unſere Verbindung ſeinem heiligen Willen gemäß iﬅ;
                      <br className="lb" />
                      ich wenigﬅens bin von dem letztern dadurch um ſo
                      <br className="lb" />
                      mehr überzeugt worden. –<a id="mark.005.e"></a>
                    </span>

                  </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                  <span className="liebe">
                    Nun gutes Mädchen mußt du mir aber auch
                    <br className="lb" />
                    einen einzigen Gefallen thun, und recht froh
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>
                    <br className="lb" />
                    vergnügt leben, damit du dich wieder recht erholﬅ,
                    <br className="lb" />
                    denn der Druck, den wir fühlten, hatte dich doch
                    <br className="lb" />
                    etwas angegriffen; <span className="orig">Wir</span>
                    <span className="corr">wir</span> wollen nun beiderſeits
                    <br className="lb" />
                    recht munter in unſerm Berufe arbeiten, und
                    <br className="lb" />
                    uns über unſere jetzt nur kurze Trennung
                    <br className="lb" />
                    durch öftere frohe Blicke in die Zukunft tröﬅen.
                    <br className="lb" />


                    <span className="reisen">
                      <a id="mark.006.s"></a>Mir wirds freilich oft ſehr ſchwer,
                      nicht bei dir
                      <br className="lb" />
                      ſeÿn zu können, und es wird auf der langen
                      <br className="lb" />
                      Reiſe, die ich vorhabe, es mir noch oft ſauer
                      <br className="lb" />
                      werden, ganz allein in der Welt herum zu reiſen,
                      <br className="lb" />
                      und mit Niemanden von dir nur ſprechen zu
                      <br className="lb" />
                      können!<a id="mark.006.e"></a>
                    </span>
                    O wie ſehnt ſich mein liebendes Herz nach
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
                {/* Page 3 */}
                <span className="liebe">
                  <p>
                    dir, wenn ich allein bin, wie verlangt mich oft, mein
                    <br className="lb" />
                    Herz ſo recht dir auszuſchütten, du treues Mädchen! O der
                    <br className="lb" />
                    böſe Raum, der uns noch trennt!
                  </p>
                </span>
                <p className="enc.tagsdecl.indent-medium">
                  <span className="liebe">
                    Meine Aeltern ſind jetzt recht mit unſerer Liebe
                    <br className="lb" />
                    auf ihrem Schick, wie man hier zu ſagen pflegt. Die
                    <br className="lb" />
                    <span className="abbr"> (l.)</span>
                    <span className="expan">
                      l<span className="ex">iebe</span>
                    </span>{" "}
                    Mutter ſpricht mit mir ſchon über Wohnung Einrichtung
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>
                    <span className="abbr"> (ſ.)</span>
                    <span className="expan">
                      ſ<span className="ex">o</span>
                    </span>
                    <span className="abbr"> (w.)</span>
                    <span className="expan">
                      w<span className="ex">eiter</span>
                    </span>
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    äußerte bei der Gelegenheit, daß die
                    <br className="lb" />
                    Braut gewöhnlich gerne das Einrichten ſelbﬅ leitete,
                    <br className="lb" />
                    daß du dann doch herkommen{" "}
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    bei
                    <span className="persName">
                      <span className="g.rend.script.latin">Julchen</span>
                    </span>
                    oder
                    <br className="lb" />
                    <span className="persName">
                      <span className="g.rend.script.latin">Overbecks</span>
                    </span>
                    logiren mögteﬅ, kurz ſie ſpricht von
                    <br className="lb" />
                    unſerer Haushaltung als einer nahen gewohnten Sache,
                    <br className="lb" />
                    und zwar immer mit vieler Gemüthlichkeit. Beſonders
                    <br className="lb" />
                    iﬅ ihr aufgefallen, daß Papa ihr die Sache mit einer
                    <br className="lb" />
                    ſo außergewöhnlichen Fröhlichkeit{" "}
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Ruhe erzählt habe,
                    <br className="lb" />
                    da er doch ſonﬅ nie habe vom Heirathen hören wollen,
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    ſie ſieht dieſe Stimmung des guten Papas als nicht
                    <br className="lb" />
                    von Ungefähr an, und hat auch recht
                    <a id="txt.subst001.norm.s"></a>da
                    <span className="overwritten">zu</span>
                    <span className="add">⟨bei⟩</span>
                    <a id="txt.subst001.norm.e"></a>.<a id="mark.004.e"></a>
                  </span>
                  Sie lobte
                  <br className="lb" />
                  den
                  <span className="persName">
                    <span className="g.rend.script.latin">August</span>
                  </span>
                  ſehr, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſagte er habe ſich treu und
                  <br className="lb" />
                  bürgerlich gezeigt, daß er mir ſo redlich beigeﬅanden
                  <br className="lb" />
                  habe. Kurz, täglich habe ich neue Urſache, mich zu
                  <br className="lb" />
                  freuen, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Gott für die gnädige Erhörung unſerer beider
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  ſeitigen <span className="orig">Gebäte</span>
                  <span className="corr">Gebete</span> zu danken. – Als mein
                  Bruder
                  <span className="persName">
                    <span className="g.rend.script.latin">Casper</span>
                  </span>
                  <br className="lb" />
                  <span style={{ textDecoration: "line-through" }}>es</span> der
                  guten
                  <span className="persName">
                    <span className="g.rend.script.latin">Julchen</span>
                  </span>
                  ſagte, daß ſie dich zur Schweﬅer
                  <br className="lb" />
                  bekommen würde, weinte dieſe Freudenthränen,
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>
                  <br className="lb" />
                  konnte vor froher <span className="orig">Ueberraſchung</span>
                  <span className="corr">Überraſchung</span> die Nacht kaum
                  ſchlafen.
                  <br className="lb" />
                  Du wirﬅ an ihr eine rechte liebe Schweﬅer bekommen.
                  <br className="lb" />
                  <span className="orig">Ueberhaupt</span>
                  <span className="corr">Überhaupt</span> ſpricht alles hier mit
                  großer Theilnahme
                  <br className="lb" />
                  von dir beſonders
                  <span className="persName">
                    <span className="g.rend.script.latin">Overbecks</span>
                  </span>
                  und
                  <span className="persName">
                    <span className="g.rend.script.latin">Wittensteins</span>
                  </span>
                  , wo das Haus
                  <br className="lb" />
                  damals verſchoben wurde, weißt du noch? Den alten
                  <br className="lb" />
                  <span className="persName">
                    <span className="g.rend.script.latin">Overbecks</span>
                  </span>
                  will ich erﬅer Tage mein Glück auch mittheilen,
                  <br className="lb" />
                  denn die nehmen recht herzlich Antheil an mir.
                </p>
                <p className="enc.tagsdecl.indent-medium" id="mark.007">
                  Zu Zeiten will mir die Geduld reißen, bis ich
                  <br className="lb" />
                  unter unſeren beiden Familien unſer Verhältniß ganz be
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  kannt ſehe, denn du glaubﬅ gar nicht, wie unangenehm
                  <br className="lb" />
                  es mir oft geweſen iﬅ, eine ſo ehrliche{" "}
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  gute Sache wie
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
                {/* Page 4 */}
                <p>
                  unſere Liebe mit einer ſo ängﬅlichen Vorſichtigkeit
                  <br className="lb" />
                  behandeln zu <span className="orig">müßen</span>
                  <span className="corr">müssen</span>. Und doch, ich ſehe es
                  jetzt mehr
                  <br className="lb" />
                  ein wie je, war dieſe nöthig um einen ſo glücklichen
                  <br className="lb" />
                  Ausgang herbei führen zu helfen, denn es würde auf
                  <br className="lb" />
                  Papa einen ganz verkehrten Eindruck gemacht haben
                  <br className="lb" />
                  wenn er auf einem andern Wege als durch mich, etwas
                  <br className="lb" />
                  Beﬅimmtes darüber gehört hätte.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Bis nach meiner Reiſe – doch darüber Morgen mehr,
                  <br className="lb" />
                  denn es iﬅ ½ 1 <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die Natur fordert auch das ihre; nämlich
                  <br className="lb" />
                  den Schlaf. Du ſchläfﬅ jetzt wohl ſüß,{" "}
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  träumﬅ vielleicht
                  <br className="lb" />
                  von mir. Schlafe dann unter Gottes Schutz ſanft, und
                  <br className="lb" />
                  wache morgen froh auf.
                </p>
                <div className="writing-session" id="index.xml-body.1_div.3">
                  <h2>
                    <span className="headingNumber">3. </span>
                  </h2>
                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="dateline">
                      <span className="date">
                        den 4
                        <span className="#g.enc.tagsdecl.cc.abbr-colon-sup">
                          .<sup>ten</sup>
                        </span>
                        Nachmittags
                      </span>
                      .
                    </div>
                  </div>
                  <p>
                    Zu meinem Bedauern ging heute keine Poﬅ nach
                    <span className="placeName">
                      <span className="g.rend.script.latin">Hamm</span>
                    </span>
                    <br className="lb" />
                    ab, und du bekommﬅ daher meinen Brief um einen
                    <br className="lb" />
                    Tag ſpäter. <a id="mark.008.s"></a>
                    <span className="liebe">
                      Du würdeﬅ dieſen Brief ſchon ſeit Mittwoch
                      <br className="lb" />
                      oder Dienﬅag gehabt haben, denn nichts lag mir mehr am
                      <br className="lb" />
                      Herzen, als dich gutes treues Bräutchen ganz zu beruhigen,
                      <br className="lb" />
                      aber ich wollte dir gerne den erﬅen Brief auf die
                      <br className="lb" />
                      neben erzählte Art ſchicken{" "}
                      <span className="abbr"> (u.)</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      hoffte von Tag zu Tag,
                      <br className="lb" />
                      daß ſich eine günﬅige Gelegenheit, mit Pathohm zu
                      ſprechen,
                      <br className="lb" />
                      darbieten würde. Zulezt konnte ich’s
                      <sup className="sup" id="txt.add002">
                        aber
                      </sup>{" "}
                      nicht mehr aushalten,
                      <br className="lb" />
                      und bat meine Eltern um Erlaubniß, dir vorläufig
                      <br className="lb" />
                      ſchreiben und die Einwilligung von Mama zu deiner
                      Beruhigung
                      <br className="lb" />
                      mittheilen zu dürfen. Von dieſer Seite mußt du meinen
                      <br className="lb" />
                      jetzigen Brief anſehen, es koﬅet mir faﬅ
                      <span className="orig">Ueberwindung</span>
                      <span className="corr">Überwindung</span>,
                      <br className="lb" />
                      ihn an <span className="persName">Friederike</span>
                      <span className="g.rend.script.latin">adressiren</span> zu
                      <span className="orig">müßen</span>
                      <span className="corr">müssen</span>, ſo ſehr ſcheue
                      <br className="lb" />
                      ich nun noch jeden Umweg,{" "}
                      <span className="abbr"> (u.)</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      ſo gerne möchte ich die Sache
                      <br className="lb" />
                      zwiſchen unſeren Familien klar ſehen.
                      <a id="mark.008.e"></a>
                    </span>
                    Nun wieder
                    <br className="lb" />
                    da angefangen wo ich die vergangene Nacht aufhörte.
                    <br className="lb" />
                    <a id="mark.009.s"></a>
                    <span className="liebe">
                      Bis nach meiner Reiſe, alſo gegen den Herbﬅ, wird unſere
                      <br className="lb" />
                      Liebe nur unſern Familien bekannt ſeÿn dürfen
                      <br className="lb" />
                      dann können unſere Aeltern ja entſcheiden, ob es
                      <br className="lb" />
                      Zeit zur öffentlichen Bekanntmachung ſeÿe.
                      <a id="mark.009.e"></a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Wir wollen uns nun ganz geduldig verhalten
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    uns des Guten freuen, was wir Gott ſeÿ Dank jetzt
                    <br className="lb" />
                    zu genießen haben, nun wird uns ein wenig Warten
                  </p>
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
                {/* Page 5 */}
                <p>
                  nicht ſauer nicht wahr liebe{" "}
                  <span className="persName">Eliſe</span>?
                  <span className="orig">Uebrigens</span>
                  <span className="corr">Übrigens</span> werde ich hier
                  <br className="lb" />
                  ſchon von allen Seiten mit dir geneckt,{" "}
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  dir wirds auch ſo gehen.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <a id="mark.010.s"></a>
                  <span className="reisen">
                    Meine Mutter frug mich geﬅern, ob mich meine
                    <br className="lb" />
                    Reiſe nicht über <span className="placeName">
                      Hamm
                    </span>{" "}
                    führte; durch Umwege wohl,
                    <br className="lb" />
                    antwortete ich. Vielleicht könnteﬅ du es dann bei deiner
                    <br className="lb" />
                    Rückreiſe einrichten, daß du deine
                    <span className="persName">Eliſe</span> einmal wieder
                    <br className="lb" />
                    ſäheﬅ, erwiederte ſie freundlich. – Ob dieſes gehen kann
                    <br className="lb" />
                    darüber bin ich zwar noch nicht im Stande dir etwas be
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    ﬅimmtes zu ſagen, wenns mir halb möglich iﬅ, ſo wirﬅ
                    <br className="lb" />
                    du überzeugt ſeÿn, daß kein Umweg von 30 Stunden mich davon
                    <br className="lb" />
                    abhalten kann; mich freute nur bei dieſer Äußerung
                    <br className="lb" />
                    die liebevolle Sorge meiner Mutter.
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <span className="reisen">
                    Meine Reiſe wird mich über
                    <span className="placeName">
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          {" "}
                          (Frankfurt <sup>a</sup>/M)
                        </span>
                        <span className="expan">
                          Frankfurt a<span className="ex">m</span> M
                          <span className="ex">ain</span>
                        </span>
                      </span>
                    </span>
                    ,
                    <span className="placeName">
                      <span className="g.rend.script.latin">Stuttgardt</span>
                    </span>
                    ,<br className="lb" />
                    <span className="placeName">
                      <span className="g.rend.script.latin">München</span>
                    </span>
                    ,
                    <span className="placeName">
                      <span className="g.rend.script.latin">Augsburg</span>,
                    </span>
                    <span className="placeName">
                      <span className="g.rend.script.latin">Salzburg</span>
                    </span>
                    vielleicht
                    <span style={{ textDecoration: "line-through" }}>
                      <span className="placeName">
                        <span className="g.rend.script.latin">
                          <sup>Linz an der</sup>/Donau
                        </span>
                      </span>
                    </span>
                    <span className="orig">,</span>
                    <span className="corr" />
                    <span className="placeName">
                      <span className="g.rend.script.latin">Inspruk</span>
                    </span>
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    dann über
                    <span className="placeName">
                      <span className="g.rend.script.latin">Nürnberg</span>
                    </span>
                    wieder zurück führen. Mein
                    <br className="lb" />
                    Troﬅ auf der Reiſe wird ſeyn, daß ich an dich ſchreiben
                    <br className="lb" />
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    denken kann,
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    beides werde ich redlich thun. Mit
                    <br className="lb" />
                    dem Aufgeben der{" "}
                    <span className="g.rend.script.latin">Adressen</span> hat es
                    ſeine Schwierigkeiten
                    <br className="lb" />
                    weil du meine Route nicht ſo verfolgen kannﬅ
                    <span className="overwritten">,</span>
                    <span className="add">⟨.⟩</span>
                    <span className="overwritten">
                      <span className="gap"> [...]</span>
                    </span>
                    <span className="add">⟨Es⟩</span>
                    <br className="lb" />
                    wird daher am beﬅen ſeÿn, daß du deine Briefe an
                    <br className="lb" />
                    meinen Bruder
                    <span className="persName">
                      <span className="g.rend.script.latin">Casper</span>
                    </span>
                    ſchickﬅ, <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    dieſer ſie an den Handlungs
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    briefen an mich beifügt.<a id="mark.010.e">
                  </a>
                  </span>
                  {" "}
                  Nur daß du mir recht fleißig
                  <br className="lb" />
                  ſchreibﬅ, und immer eingedenk biﬅ, daß ſo etwas
                  <br className="lb" />
                  ein wahres Labſal in der Ferne iﬅ. Vor meiner
                  <br className="lb" />
                  Abreiſe beſuche ich den guten
                  <span className="persName">
                    <span className="g.rend.script.latin">Ludwig</span>
                  </span>
                  in
                  <span className="placeName">
                    <span className="g.rend.script.latin">Moeurs</span>
                  </span>
                  , um
                  <br className="lb" />
                  auch mit dieſem recht von der Leber ſprechen zu können.
                  <br className="lb" />
                  Ich hoffe er wird nichts gegen den neuen Schwager ein
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  zuwenden haben.
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <span className="persName">
                    <span className="g.rend.script.latin">August</span>
                  </span>
                  ſchreibt mir geﬅern, daß ſie übermorgen
                  <br className="lb" />
                  nach <span className="placeName">Siegburg</span>{" "}
                  abmarſchieren, um dort Batterien zu
                  <br className="lb" />
                  bauen, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  die Revüe abzuhalten. Der arme Schelm
                  <br className="lb" />
                  wird noch tüchtig ſchwitzen{" "}
                  <span className="orig">müßen</span>
                  <span className="corr">müssen</span>. – Er läßt dich
                  <br className="lb" />
                  aufs herzlichﬅe <span className="overwritten">G</span>
                  <span className="add">⟨g⟩</span>rüßen. –{" "}
                  <span className="orig">Ueber</span>
                  <span className="corr">Über</span> den wichtigern Sachen
                  <br className="lb" />
                  habe ich <span className="orig">vergeßen</span>
                  <span className="corr">vergessen</span>, dir mein gutes
                  Mädchen für den ſchönen
                  <br className="lb" />
                  Tabaksbeutel zu danken, thue es aber hiermit herzlich,
                  <br className="lb" />
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  küßte dich gar zu gerne dafür, wenn du nur ﬅatt
                  <br className="lb" />
                  der alten Frau da auf der Kuppel der Tabaksdoſe, die
                  <br className="lb" />
                  grade vor mir ﬅeht, vor mir ﬅändeﬅ. Doch ganz gelaßen??
                  <br className="lb" />
                  wiſche ich mir den Mund, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſchreibe weiter. Ja wohl
                  <br className="lb" />
                  Geduld überwindet alles!
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
                {/* Page 6 */}
                <p>
                  Doch bald iﬅ es Zeit daß ich ans Ende denke, denn
                  <br className="lb" />
                  ſonﬅ verſchreibe ich unſern ganzen Papiervorrath:
                  <br className="lb" />
                  Ich glaube ich könnte noch einen ganzen Tag am Plaudern
                  <br className="lb" />
                  mit dir bleiben. <a id="mark.011.s"></a>
                  <span className="liebe">
                  Wir wollen uns freuen,
                  daß wir
                  <br className="lb" />
                  durch Schreiben uns etwas mittheilen können, indeß
                  <br className="lb" />
                  im Ganzen iﬅ es doch ein erbärmliches Behelfsmittel
                  <br className="lb" />
                  <span className="striketrough">
                    ﬅ<span className="gap"> [...]</span>
                  </span>
                  <sup className="sup" id="txt.add001">
                    im Vergleich mit
                  </sup>{" "}
                  der Wonne, im Arme eines ſolchen Mädchens wie
                  <br className="lb" />
                  <span className="persName">
                    <span style={{ textDecoration: "underline" }}>
                      meine Eliſe
                    </span>
                  </span>
                  die Stunden vorbeifliegen zu{" "}
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span>
                  <br className="lb" />
                  und die Seelen in einander zu ergießen.
                  <a id="mark.011.e"></a>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Wie ſieht es nun mit deiner Antwort aus? Ich
                  <br className="lb" />
                  hoffe du wirﬅ mich nicht warten{" "}
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span>, und dich
                  <br className="lb" />
                  gleich, wenns dir möglich iﬅ hinſetzen und mir auch
                  <br className="lb" />
                  einen recht ellenlangen Brief ſchreiben;{" "}
                  <span className="orig">Es</span>
                  <span className="corr">es</span> wird
                  <br className="lb" />
                  dir gewiß auch wohl thun, einmal ſo recht nach Herzenſluﬅ
                  <br className="lb" />
                  mit mir plaudern zu können. Schlage deinen Brief
                  <br className="lb" />
                  an
                  <span className="persName">
                    <span className="abbr"> (M.)</span>
                    <span className="expan">
                      M<span className="ex">inchen</span>
                    </span>
                    Sparrenberg
                  </span>
                  ein.
                </p>
                <p className="enc.tagsdecl.indent-medium" id="mark.012">
                  Morgen gehe ich zum <span className="abbr"> (heil.)</span>
                  <span className="expan">
                    heil<span className="ex">igen</span>
                  </span>{" "}
                  Abendmahl; o Gott wie danke
                  <br className="lb" />
                  ich dir, daß ich nun mit einer ſo gänzlichen Ruhe dieſe
                  <br className="lb" />
                  wichtige Handlung begehen kann!
                </p>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-medium">
                    Meine Geſchwiﬅer, meine <span className="abbr"> (l.)</span>
                    <span className="expan">
                      l<span className="ex">ieben</span>
                    </span>{" "}
                    Eltern
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>
                    <span className="persName">
                      <span className="abbr"> (M.)</span>
                      <span className="expan">
                        M<span className="ex">inchen</span>
                      </span>
                      Sparrenberg
                    </span>
                    <br className="lb" />
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span> dich herzlich grüßen.
                    Schreibe mir ja bald, und
                    <br className="lb" />
                    grüße <span className="persName">Hannchen</span>
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    deine Freundinn
                    <span className="persName">
                      <span className="abbr"> (F.)</span>
                      <span className="expan">
                        F<span className="ex">riederike</span>
                      </span>
                      Schmitz
                    </span>
                    unbe
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    kannter Weiſe herzlich von mir,{" "}
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    denke oft an
                  </p>
                </blockquote>
                <span style={{ display: "inline-block" }} width="10cm">
                  &nbsp;
                </span>
                <div className="closer">
                  <div className="signed">Deinen treuen</div>
                </div>
                <span style={{ display: "inline-block" }} width="10cm">
                  &nbsp;
                </span>
                <div className="closer">
                  <div className="signed">
                    <span className="glyph">
                      <sup>.</sup>//.
                    </span>
                    <span className="persName">Friedrich</span>.
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
                {/* Page 7 */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
