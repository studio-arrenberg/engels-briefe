import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "295";
  });

  return (
    <Brief_wrapper data={item}>
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      {/* <!-- Themenmarkierung --> */}
      <div type="mark">
        {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
        {/* <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e" /> */}
        <span type="reisen" corresp="#fe294.text" />
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
                  <h2>
                    <span className="headingNumber">1. </span>
                  </h2>
                  <div className="pagebreak" id="index.xml-pb-d29e135">
                    
                  </div>
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-right">
                      <span className="g.rend.script.latin">
                        Madame <span className="persName">Elise Engels</span>.
                        <br className="lb" />
                        <span className="g.enc.tagsdecl.suspension.type3">
                          {" "}
                          (Adrs.)
                        </span>
                        <span className="expan">
                          Adr<span className="ex">e</span>s
                          <span className="ex">se</span>
                        </span>
                        <span className="persName">
                          Mad<sup>m</sup>. de Griesheim
                        </span>
                        <br className="lb" />
                        <span style={{ display: "inline-block" }} width="1line">
                          &nbsp;
                        </span>
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        à<br className="lb" />
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        <span className="placeName">Hamm</span>
                        <br className="lb" />
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        puis
                        <span className="placeName">Münster</span>
                        <br className="lb" />
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        <span style={{ textDecoration: "underline" }}>
                          en <span className="placeName">Westphalie</span>. ‒
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.2">
                    <h3>
                      <span className="headingNumber">1.2. </span>
                    </h3>
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
                  <div className="dateline">
                    <span style={{ display: "inline-block" }} width="10cm">
                      &nbsp;
                    </span>
                    <span className="g.rend.script.latin">
                      <span className="placeName">Paris</span>
                    </span>
                    den
                    <span className="date">
                      16. <span className="g.rend.script.latin">August</span>{" "}
                      1827
                    </span>
                    .
                  </div>
                  <span style={{ display: "inline-block" }} width="1lines">
                    &nbsp;
                  </span>
                </div>
                <br className="lb" />
                <div className="opener">
                  <a id="teaser.part.001.s">{/*anchor*/}</a>Seit Vorgeﬅern Abend
                  ſind wir hier in{" "}
                  <span className="g.rend.script.latin">Paris</span> liebe
                  <br className="lb" />
                  <span className="persName">Eliſe</span>,
                  <a id="teaser.part.001.e">{/*anchor*/}</a>
                </div>
                <p>
                  wo wir zwar etwas ermüdet nach einer
                  <a id="annot.001.s">{/*anchor*/}</a>32ﬅündigen
                  <br className="lb" />
                  Fahrt auf der Diligence<a id="annot.001.e">{/*anchor*/}</a>,
                  aber ſehr vergnügt an
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  kamen. In
                  <span className="placeName">
                    <span className="g.rend.script.latin">Boulogne</span>
                  </span>
                  waren wir in einem Hôtel
                  <br className="lb" />
                  welches ſo ſehr auf
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (engliſch)
                  </span>
                  <span className="expan">
                    engliſch<span className="ex">en</span>
                  </span>{" "}
                  Fuß eingerichtet war
                  <br className="lb" />
                  daß. ſelbﬅ ſämmtliche Domeﬅiken kaum franzöſiſch
                  <br className="lb" />
                  verﬅanden. Wir glaubten faﬅ noch in
                  <span className="placeName">
                    <span className="g.rend.script.latin">England</span>
                  </span>
                  <br className="lb" />
                  zu ſeÿn; auch trug die Rechnung, noch ſo ziemlich
                  <br className="lb" />
                  das engliſche Gepräge. Hier in
                  <span className="placeName">
                    <span className="g.rend.script.latin">Paris</span>
                  </span>
                  waren wir
                  <br className="lb" />
                  nun auf einmal mitten in
                  <span className="placeName">
                    <span className="g.rend.script.latin">Frankreich</span>
                  </span>
                  , und ich
                  <br className="lb" />
                  kann wohl ſagen, ich wurde ſehr angenehm durch
                  <br className="lb" />
                  die franzöſiſche Arti<span className="overwritten">k</span>
                  <span className="add">⟨g⟩</span>keit und Zuvorkom̅enheit,
                  <br className="lb" />
                  womit wir in unſerm
                  <span className="g.rend.script.latin">Hôtel</span> empfangen
                  wurden
                  <br className="lb" />
                  durch die Bequemlichkeit welche wir über
                  <span style={{ display: "inline-block" }}>&nbsp;</span>all
                  fanden
                  <br className="lb" />
                  überraſcht. Wir beﬅellten ein kleines Abendbrot,
                  <br className="lb" />
                  und bekamen ſehr gute Gerichte. Es charakteriſirt
                  <br className="lb" />
                  ſo das Ganze wenn ich Dir ſage, daß z. B. die beiden
                  <br className="lb" />
                  <span className="orig">Waßerflaſchen</span>
                  <span className="corr">Wasserflaschen</span>
                  <sup className="sup" id="txt.add001">
                    (es war ein warmer Tag)
                  </sup>{" "}
                  in Eis geﬅanden hatten, und ſo
                  <br className="lb" />
                  noch rund um eine dünne Eisſchale hatten. Man
                  <br className="lb" />
                  glaubt etwa alles dieſes <span className="orig">müße</span>
                  <span className="corr">müsse</span> mit Geld auf
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  gewogen werden, allein im Gegentheil finde ich
                  <br className="lb" />
                  alles ſehr wohlfeil. In
                  <span className="placeName">
                    <span className="g.rend.script.latin">London</span>
                  </span>
                  dagegen ſauſen
                  <br className="lb" />
                  einem die Schillinge (26 ﬅüber) um die
                  <span style={{ textDecoration: "line-through" }}>Köpfe</span>,
                  Ohren
                  <br className="lb" />
                  und was hat man am Ende, ‒ ein Glas Bier,
                  <br className="lb" />
                  ein <span className="orig">Stük</span>
                  <span className="corr">Stück</span>
                  <span className="g.rend.script.latin">Beaf-Steak</span> ‒ 4
                  Kartoffeln, eine
                  <span className="orig">Aepfeltorte</span>
                  <span className="corr">Äpfeltorte</span>
                  <br className="lb" />
                  das iﬅ alles. Nein
                  <span className="placeName">
                    <span className="g.rend.script.latin">London</span>
                  </span>
                  kann den Vergleich
                  <br className="lb" />
                  mit
                  <span className="placeName">
                    <span className="g.rend.script.latin">Paris</span>
                  </span>
                  in keinem Betracht auſhalten.
                </p>
                <p>
                  <span style={{ display: "inline-block" }} width="3em">
                    &nbsp;
                  </span>
                  <a id="mark.001.s">{/*anchor*/}</a>Am andern Morgen ſchickten
                  wir gleich zu
                  <br className="lb" />
                  <span className="orgName">
                    <span className="g.rend.script.latin">
                      Andry &amp; Guibout
                    </span>
                  </span>
                  , und zu meiner Freude brachte
                  <br className="lb" />
                  man mir Deinen Brief vom{" "}
                  <span className="date">30. Juli</span>, der
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
                  Gottlob ſo gute Nachrichten für mich enthielt.
                  <a id="mark.001.e">{/*anchor*/}</a>
                  Außeror
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  dentlich freute mich die{" "}
                  <span className="orig">Beßerung</span>
                  <span className="corr">Besserung</span> von
                  <span className="g.rend.script.latin">Lipkas</span>{" "}
                  <br className="lb" />
                  <span className="persName">Kinde</span>. Gott gebe, daß es
                  wieder hergeﬅellt werde.
                  <br className="lb" />
                  
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="liebe">
                    <a id="teaser.part.002.s">{/*anchor*/}</a>Aber Herzens
                    Geſichtchen Du ſchreibﬅ mir lange nicht
                    <br className="lb" />
                    fleißig genug; bedenke doch ich habe nun erﬅ
                    <br className="lb" />
                    2 Briefe von Dir, und dieſer letzte iﬅ wieder 17
                    <br className="lb" />
                    Tage alt. Antworte mir doch
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>
                    <span style={{ textDecoration: "underline" }}>umgehen</span>
                    d<a id="txt.hi.underline001.int.e">{/*anchor*/}</a>
                    ſo wie
                    <br className="lb" />
                    du dieſen Brief erhältﬅ damit ich doch einmal
                    <br className="lb" />
                    friſche Nachricht bekomme.
                    <a id="teaser.part.002.e">{/*anchor*/}</a>
                    Zwar erwarte ich
                    <br className="lb" />
                    in den erﬅen Tagen einen neuen Brief von Dir,
                    <br className="lb" />
                    aber doch kann ich mir es nicht recht erklären warum
                    <br className="lb" />
                    noch keiner hier iﬅ.<a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                  Die Nachrichten welche deine
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="-8em">
                    &nbsp;
                  </span>
                  <span className="add">
                    ⟨
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (nächﬅ)
                    </span>
                    <span className="expan">
                      nächﬅ<span className="ex">en</span>
                    </span>
                    ⟩
                  </span>
                  Briefe enthalten, werden auch meinen hieſigen
                  <br className="lb" />
                  Aufenthalt beſtimmen. ‒ Ich möchte ſehr gerne
                  <br className="lb" />
                  mit <span className="abbr"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">e</span>r
                    <span className="ex">rn</span>
                  </span>
                  <span className="persName">
                    <span className="g.rend.script.latin">Bredt</span>
                  </span>
                  wieder zurükreiſen, und da er
                  <br className="lb" />
                  wenigﬅens 14 Tage hier zu thun hat, und ich die
                  <br className="lb" />
                  Zeit{" "}
                  <sup className="sup" id="txt.add002">
                    auch
                  </sup>{" "}
                  vollauf zu thun habe, um nur das Sehens
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  würdigﬅe durchzugehen; ſo möchte ich jetzt nicht
                  <br className="lb" />
                  auf eine Woche mehr oder weniger ſehen.
                </p>
                <p>
                  <span className="orig">Ueberhaupt</span>
                  <span className="corr">Überhaupt</span> werde ich immer mehr
                  überzeugt
                  <br className="lb" />
                  daß <span className="placeName">Paris</span> der Ort iﬅ, den
                  wir einmal mit
                  <br className="lb" />
                  <span className="persName">
                    <span className="g.rend.script.latin">August</span>
                  </span>
                  und
                  <span className="persName">
                    <span className="g.rend.script.latin">Luise</span>
                  </span>
                  zuſammen beſuchen <span className="orig">müßen</span>
                  <span className="corr">müssen</span>.
                  <a id="index.xml-anchor-d29e524" />
                  <br className="lb" />
                  Alles was Pracht und Eleganz heißt ſieht man
                  <br className="lb" />
                  hier vereint, in Kunﬅſachen überbieten die
                  <br className="lb" />
                  Museen und Ausﬅellungen einander, kurz
                  <br className="lb" />
                  es bleibt nichts in der Art zu wünſchen übrig.
                  <br className="lb" />
                  Dabei lebt man hier, was für wenig Geld
                  <br className="lb" />
                  vortrefflich, und <span className="orig">Speiß</span>
                  <span className="corr">Speis</span> und Trank bleibt doch
                  <br className="lb" />
                  immer eine Hauptſache mit. Ich weiß nicht,
                  <br className="lb" />
                  ob es <span className="orig">am</span>
                  <span className="corr">an</span> mir oder an den herrlich zu
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  <span id="txt.add003_return">
                    <a
                      className="notelink"
                      title="und ſchon aus dieſer Rücksicht will ich mich gerne mit allem bekannt machen um ſpäter einen guten F…"
                      href="#txt.add003"
                    >
                      <sup>1</sup>
                    </a>
                  </span>
                  <span
                    style={{ display: "block" }}
                    className="noteleft aside"
                    id="Note3"
                  >
                    <span style={{ display: "block" }} className="p">
                      Grüße alle dort herzlich von mir, und ſage mir auch ob
                      <span className="persName">Caspar</span> glücklich mit
                      <br className="lb" />
                      ſeiner Hälfte unter Segel iﬅ und wie lange ſeine Fahrt
                      dauert.
                      <br className="lb" />
                      Am
                      <span className="date">
                        <span style={{ textDecoration: "line-through" }}>
                          24.
                        </span>
                        <span className="add">⟨25.⟩</span>
                        <span className="g.rend.script.latin">August</span>
                      </span>
                      liebe <span className="persName">Eliſe</span> kannﬅ Du mir
                      zuletzt nach
                      <span className="placeName">
                        <span className="g.rend.script.latin">Paris</span>
                      </span>
                      ſchreiben.
                    </span>
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
                  bereiteten Gerichten liegt, ein Gericht{" "}
                  <span className="orig">ſchmekt</span>
                  <span className="corr">schmeckt</span>
                  <br className="lb" />
                  mir noch <span className="orig">beßer</span>
                  <span className="corr">besser</span> wie das andere. Wir
                  <span className="orig">eßen</span>
                  <span className="corr">essen</span> hier
                  <br className="lb" />
                  nicht an <a id="annot.002.s">{/*anchor*/}</a>Table
                  <span className="g.rend.script.latin">dʼhote</span>
                  <a id="annot.002.e">{/*anchor*/}</a> sondern Portionen Weise
                  im
                  <br className="lb" />
                  <a id="annot.003.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Palais Royal</span> bei
                  <span className="g.rend.script.latin">Prevot</span>
                  <a id="annot.003.e">{/*anchor*/}</a>. Doch Du ſollﬅ wohl bange
                  <br className="lb" />
                  werden, ich würde verwöhnt allein ſeÿ nur ganz
                  <br className="lb" />
                  ruhig, zu Hauſe wird es mir drum eben ſo gut
                  <br className="lb" />
                  <span className="orig">ſchmeken</span>
                  <span className="corr">schmecken</span>. Der Abﬅich zwiſchen
                  <span className="placeName">
                    <span className="g.rend.script.latin">London</span>
                  </span>
                  iﬅ nur{" "}
                  <span style={{ textDecoration: "line-through" }}>ſ</span> zu
                  <br className="lb" />
                  groß, wo wir für unſre guten{" "}
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <span className="g.rend.script.latin">Sovereigne d'ors</span>
                  <a id="annot.004.e">{/*anchor*/}</a> eigent
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  lich miſerabel <span className="orig">gegeßen</span>
                  <span className="corr">gegessen</span> haben. Doch ſage davon
                  <br className="lb" />
                  nichts, es <span className="orig">müßen</span>
                  <span className="corr">müssen</span> noch mehrere aus
                  <span className="placeName">
                    <span className="g.rend.script.latin">Barmen</span>
                  </span>
                  nach
                  <br className="lb" />
                  <span className="placeName">
                    <span className="g.rend.script.latin">London</span>
                  </span>
                  , und ſonﬅ werden sie{" "}
                  <span className="orig">abgeſchrekt</span>
                  <span className="corr">abgeschreckt</span>.
                  <br className="lb" />
                  Was unſer Logis angebelangt ſo
                  <span style={{ textDecoration: "line-through" }}>
                    ſind wir
                  </span>{" "}
                  wohnen wir
                  <br className="lb" />
                  wie die Prinzen. Wir bewohnen nämlich
                  <br className="lb" />
                  hier im{" "}
                  <span className="g.rend.script.latin">Hôtel de l'Europe</span>
                  , dicht neben dem
                  <span className="g.rend.script.latin">
                    Palais
                    <br className="lb" />
                    Royal
                  </span>
                  , und im Mittelpunkt der Stadt ‒ einen Theil
                  <br className="lb" />
                  der ſogenannten{" "}
                  <span className="g.rend.script.latin">Entrevols</span>, oder
                  die 2
                  <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                    <sup>t</sup> .
                  </span>
                  Etage ‒ beﬅehend
                  <br className="lb" />
                  aus 4 Stuben und ganz für eine vollﬅändige
                  <br className="lb" />
                  Familie eingerichtet, und alles für ‒ 10
                  <span className="g.rend.script.latin">francs</span>
                  <span className="abbr"> (p)</span>
                  <span className="expan">
                    p<span className="ex">ro</span>
                  </span>{" "}
                  Tag.
                  <br className="lb" />
                  Damit Du einen Begriff von unſrer Haushaltung
                  <br className="lb" />
                  bekommﬅ habe ich dir eine Zeichnung von
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (unſer)
                  </span>
                  <span className="expan">
                    unſer<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  brillant meublirten Stuben beigelegt. In
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (beid)
                  </span>
                  <span className="expan">
                    beid<span className="ex">en</span>
                  </span>
                  <br className="lb" />
                  Schlafﬅuben gehen ſehr ſchöne
                  <a id="annot.005.s">{/*anchor*/}</a>Pendülen
                  <a id="annot.005.e">{/*anchor*/}</a>. Die
                  <br className="lb" />
                  Zeichnung hebe auf damit ich euch einmal alles
                  <br className="lb" />
                  erzählen kann. Doch ich muß
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (aufhör)
                  </span>
                  <span className="expan">
                    aufhör<span className="ex">en</span>
                  </span>{" "}
                  ich habe
                  <br className="lb" />
                  ſchon zuviel geplaudert. Indeß Du ſiehﬅ aus allem
                  <br className="lb" />
                  daß es mir hier behagt und das macht dir Freude.
                  <br className="lb" />
                  Um deine Briefe mache kein Couvert mehr
                  <a id="index.xml-anchor-d29e818" />
                  die Hand
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ſchrift und das
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Poﬅzeich)
                  </span>
                  <span className="expan">
                    Poﬅzeich<span className="ex">en</span>
                  </span>
                  unterſcheidet unſre Briefe hin
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  länglich auch nimm nicht ſo{" "}
                  <span className="orig">dikes</span>
                  <span className="corr">dickes</span> Poﬅpapier, ſchreibe aber
                  <br className="lb" />
                  recht viel darauf. Mit deiner Abreiſe von
                  <span className="placeName">
                    <span className="g.rend.script.latin">Hamm</span>
                  </span>
                  mache
                  <br className="lb" />
                  es nur ganz nach Deiner Bequemlichkeit und ﬅöre dich an
                  <br className="lb" />
                  meinen Brief
                  <span className="orig">
                    a
                    <span className="damage">
                      <span className="supplied">&lt;us Bóu&gt;</span>
                    </span>
                    logne
                  </span>
                  <span className="corr">aus Boulogne</span> nicht, wo ich
                  eigentlich etwas
                  <br className="lb" />
                  Heimweh hatte.
                  <span className="damage">
                    <span className="gap"> [...]</span>
                    <span className="supplied">&lt;wir n&gt;</span>
                  </span>
                  <span className="orig" />
                  <span className="corr">oc</span>h 14 Tage hier bleiben ſo
                  werden <a id="index.xml-anchor-d29e871" />
                </p>
                <div id="txt.add004_return">
                  <a
                    className="notelink"
                    title="die Adresse behalte aber bei"
                    href="#txt.add004"
                  >
                    <sup>2</sup>
                  </a>
                  <sup>,</sup>
                </div>
                <div className="notemarginLeft" id="txt.add005">
                  <p>
                    wir <span className="orig">ohngefähr</span>
                    <span className="corr">ungefähr</span> gegen den
                    <span className="date">
                      5 <span className="abbr"> (Septbr)</span>
                      <span className="expan">
                        Sept<span className="ex">em</span>b
                        <span className="ex">e</span>r
                      </span>
                    </span>
                    <span style={{ textDecoration: "line-through" }}>dort</span>{" "}
                    in
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>
                    </span>
                    ankom̅en. Es thut ja auch nichts wenn
                    <br className="lb" />
                    die Eltern ſchon einige Tage vor meiner Ankunft in
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>
                    </span>
                    ſind. Die Sache mit
                    <br className="lb" />
                    <span className="persName">
                      <span className="g.rend.script.latin">
                        Albert Griesheim
                      </span>
                    </span>
                    hat mich recht gefreut; dem
                    <span className="g.rend.script.latin">
                      ollen Hezken
                    </span>{" "}
                    wird die Reiſe nach
                    <span className="placeName">
                      <span className="g.rend.script.latin">Berlin</span>
                    </span>
                    <br className="lb" />
                    auch nicht unangenehm ſeÿn. Nun lebe recht wohl
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Herzensweibch)
                    </span>
                    <span className="expan">
                      Herzensweibch<span className="ex">en</span>
                    </span>
                    <span className="orig">küße</span>
                    <span className="corr">küsse</span> die Kinder und in
                    <br className="lb" />
                    Gedanken auch einmal recht tüchtig
                    <span style={{ display: "inline-block" }} width="1words">
                      &nbsp;
                    </span>{" "}
                    Deinen
                    <span className="persName">Friedrich</span>
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
                {/* Insert Page 4 */}

                <p>
                  <span style={{ display: "inline-block" }} width="2words">
                    &nbsp;
                  </span>
                  mein
                  <span style={{ textDecoration: "underline" }}>
                    e <span className="g.rend.script.latin">Adre</span>
                  </span>
                  <span className="g.rend.script.latin">sse</span> iﬅ:
                  <br className="lb" />
                  <span className="g.rend.script.latin">
                    An
                    <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                      (Mſ<sup>r</sup>.)
                    </span>
                    <span className="expan">
                      M<span className="ex">on</span>s
                      <span className="ex">ieu</span>r
                    </span>
                    <span className="persName">Charles Bredt</span>{" "}
                    <br className="lb" />
                    <span className="abbr"> (Adr.)</span>
                    <span className="expan">
                      Adr<span className="ex">esse</span>
                    </span>
                    <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                      (Meſſ<sup>r</sup>.)
                    </span>
                    <span className="expan">
                      Mes<span className="ex">sieu</span>r
                      <span className="ex">s</span>
                    </span>
                    <span className="orgName">
                      Andry &amp;
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="2words">
                        &nbsp;
                      </span>
                      Guibout
                    </span>
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="1words">
                      &nbsp;
                    </span>
                    Rue S<span className="abbr">(t.)</span>
                    <span className="expan">
                      <span className="ex">ain</span>t
                    </span>{" "}
                    Denis
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="2words">
                      &nbsp;
                    </span>
                    <span className="placeName">Paris</span>
                  </span>
                  <br className="lb" />
                  Falls Du die frühere ver
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (lor)
                  </span>
                  <span className="expan">
                    verlor<span className="ex">en</span>
                  </span>{" "}
                  hätteﬅ.
                </p>
                <span style={{ display: "inline-block" }} width="1line">
                  &nbsp;
                </span>
                <p>
                  <span className="persName">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Minch)
                    </span>
                    <span className="expan">
                      Minch<span className="ex">en</span>
                    </span>
                    Sparenberg
                  </span>
                  könnte
                  <br className="lb" />
                  auch wohl an{" "}
                  <span className="g.enc.tagsdecl.suspension.type1"> (Hr)</span>
                  <span className="expan">
                    H<span className="ex">e</span>r
                    <span className="ex">rn</span>
                  </span>
                  <span style={{ display: "inline-block" }} width="1letter">
                    &nbsp;
                  </span>
                  <span className="persName">Schmitz</span> ſagen
                  <br className="lb" />
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span> daß Du direct nach
                  <br className="lb" />
                  <span className="placeName">
                    <span className="g.rend.script.latin">Paris</span>
                  </span>
                  jetzt ſchreibﬅ; er möchte
                  <br className="lb" />3
                  ſonﬅ auf deine Briefe warten.
                </p>
              </div>
              
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
