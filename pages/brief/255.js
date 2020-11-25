import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "255";
  });

  return (
    <Brief_wrapper data={item}>
      {/* brief text goes here */}
      {/* Insert Themenmarkierungen */}
      {/* <!-- Themenmarkierung --> */}
      <div type="mark">
        {/* <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e" /> */}
        {/* <span type="reisen" from="#mark.002.s" to="#mark.002.e" /> */}
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
                  <span style={{ display: "inline-block" }} width="5cm">
                    &nbsp;
                  </span>
                  <div className="dateline">
                    <span className="g.rend.script.latin">Barmen</span>
                    <span className="date">
                      9. <span className="g.rend.script.latin">Juli</span> 1822
                    </span>
                    .
                  </div>
                </div>
                <span style={{ display: "inline-block" }} width="1lines">
                  &nbsp;
                </span>
                <p className="enc.tagsdecl.indent-small">
                  <a id="teaser.part.001.s">{/*anchor*/}</a>Dein lieber Brief
                  vom
                  <span className="date">
                    5. <span className="abbr"> (ds.)</span>
                    <span className="expan">
                      d<span className="ex">iese</span>s{" "}
                      <span className="ex">Monats</span>
                    </span>
                  </span>
                  <br className="lb" />
                  gewährte mir eine rechte Be
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ruhigung, denn ich ſahe daraus,
                  <br className="lb" />
                  daß es Dir und dem kleinen
                  <span className="orig">
                    Her
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    zens<span style={{ display: "inline-block" }}>&nbsp;</span>
                    tippel
                  </span>
                  <span className="corr">
                    Her
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    zenstippel
                  </span>
                  gut geht. Du glaubﬅ
                  <br className="lb" />
                  gar nicht,
                  <span className="orig">
                    Herzens
                    <span style={{ display: "inline-block" }}>&nbsp;</span>mama
                  </span>
                  <span className="corr">Herzensmama</span>, wie ſehr Du
                  <br className="lb" />
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  er mir ans Herz gewachſen ſeÿd,{" "}
                  <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>
                  <br className="lb" />
                  Du glaubﬅ auch gar nicht, wie un
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  behaglich, wie ekelig mir zu Muthe
                  <br className="lb" />
                  ohne Euch iﬅ.<a id="teaser.part.001.e">{/*anchor*/}</a> Ich
                  habe hier überall
                  <br className="lb" />
                  freundliche Geſichter, wo ich hinkom̅e,
                  <br className="lb" />
                  aber demohngeachtet fühle ich eine
                  <br className="lb" />
                  Leere. <a id="mark.001.s">{/*anchor*/}</a>
                  <span className="liebe">
                    Aber höre einmal
                    <span className="persName">Eliſe</span>{" "}
                    <br className="lb" />
                    meine Briefe darfﬅ Du
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (niemand)
                    </span>
                    <span className="expan">
                      niemand<span className="ex">en</span>
                    </span>
                    <br className="lb" />
                    leſen <span className="orig">laßen</span>
                    <span className="corr">lassen</span>, darauf muß ich mich
                    <br className="lb" />
                    <span className="orig">verlaßen</span>
                    <span className="corr">verlassen</span> dürfen, ſonﬅ
                    <span className="g.rend.script.latin">genire</span> ich
                    <br className="lb" />
                    mich, und glaube immer auch auf
                    <br className="lb" />
                    andere <span className="orig">Rükſicht</span>
                    <span className="corr">Rückſicht</span> nehmen zu
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>
                    <br className="lb" />
                    wenn ich gerne zärtlich mit Dir,
                    <br className="lb" />
                    Du altes liebes Geſicht wäre. –<br className="lb" />
                    Hörﬅ Du, Du läßt meine Briefe
                    <br className="lb" />
                    nicht leſen, nicht wahr?<a id="mark.001.e">{/*anchor*/}</a>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Aber was macht denn mein klein
                  <br className="g.enc.tagsdecl.hyphenation.eq" />
                  <span style={{ display: "inline-block" }} width="-4em">
                    &nbsp;
                  </span>
                  <span className="add" id="txt.add002">
                    ⟨ﬅe⟩
                  </span>
                  <span className="orig">
                    Herzens
                    <span style={{ display: "inline-block" }}>&nbsp;</span>
                    tuksken
                  </span>
                  <span className="corr">Herzenstuksken</span>? Du kennﬅ es ja
                  <br className="lb" />
                  wohl. Ich weis bald nicht, wo ich vor
                  <br className="lb" />
                  all’ den Kleinen bleiben ſoll, und
                  <br className="lb" />
                  weiß vor Plaiſir darüber nicht wohin.
                  <br className="lb" />
                  <a id="annot.001.s">{/*anchor*/}</a>Nun bald haben wir ja
                  zwei,
                  <span className="orig">
                    Herzens
                    <span style={{ display: "inline-block" }}>&nbsp;</span>
                    <br className="g.enc.tagsdecl.hyphenation.space" />
                    lieſeli
                  </span>
                  <span className="corr">
                    Herzens
                    <br className="g.enc.tagsdecl.hyphenation.space" />
                    lieſeli
                  </span>
                  !<a id="annot.001.e">{/*anchor*/}</a>
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
                <a id="annot.002.s">{/*anchor*/}</a>
                <p>
                  <span className="g.rend.script.latin">Casper</span> hat
                  <span className="date">geﬅern</span> geſchrieben, daß
                  <br className="lb" />
                  das Bad fort
                  <span style={{ display: "inline-block" }}>&nbsp;</span>während
                  ſeiner Frau <br className="lb" />
                  gut bekommt, daß er nicht nach
                  <br className="lb" />
                  <span className="g.rend.script.latin">Schwalbach</span>{" "}
                  braucht und er in
                  <span className="abbr">
                    (C
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>a</sup>.
                    </span>
                    )
                  </span>
                  <span className="expan">
                    C<span className="ex">irc</span>a
                  </span>
                  <br className="lb" />3 Wochen wieder hier ſeÿn kann.
                </p>
                <a id="annot.002.e">{/*anchor*/}</a>
                <p>
                  Die junge
                  <span className="persName">
                    Frau{" "}
                    <span className="g.rend.script.latin">Böddinghaus</span>
                  </span>
                  iﬅ
                  <br className="lb" />
                  aber ſehr ſchwach, ſie hat in{" "}
                  <span className="placeName">Ems</span>
                  <br className="lb" />
                  bei ihrer Ankunft wieder einen
                  <br className="lb" />
                  Blutﬅurz gehabt, <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  war ſo gefährlich
                  <br className="lb" />
                  daß <span className="g.rend.script.latin">Casper</span> eine
                  Stafette an
                  <span className="g.rend.script.latin">
                    <span className="abbr">
                      (W
                      <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                        <sup>m</sup>.
                      </span>
                      )
                    </span>
                    <span className="expan">
                      W<span className="ex">ilhel</span>m
                    </span>
                    <br className="lb" />
                    Wittenstein
                  </span>
                  abſchickte, worauf ihr
                  <br className="lb" />
                  Mann gleich von
                  <span className="g.rend.script.latin">Elberfeld</span>{" "}
                  abreiste.
                  <br className="lb" />
                  Nach dem letzten Briefe von
                  <span className="g.rend.script.latin">Casper</span>{" "}
                  <br className="lb" />
                  geht’s ihr ein wenig <span className="orig">beßer</span>
                  <span className="corr">besser</span>, doch
                  <br className="lb" />
                  zweifelt man an ihrem
                  <span className="orig">
                    Aufkom̅
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    men
                  </span>
                  <span className="corr">
                    Aufkom
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    men
                  </span>
                  . Es wäre doch recht ſchade um
                  <br className="lb" />
                  die gute junge Frau.
                </p>
                <a id="annot.003.s">{/*anchor*/}</a>
                <p className="enc.tagsdecl.indent-medium">
                  Deine Erzählung vom kleinen
                  <span className="g.rend.script.latin">
                    <span className="abbr"> (Fried.)</span>
                    <span className="expan">
                      Fried<span className="ex">rich</span>
                    </span>
                  </span>
                  <br className="lb" />
                  mit ſeinen <span className="orig">Waßermühlen</span>
                  <span className="corr">Wassermühlen</span> hat mir
                  <br className="lb" />
                  vielen <span className="orig">Spas</span>
                  <span className="corr">Spaß</span> gemacht, gieb Acht
                  <br className="lb" />
                  ob kein{" "}
                  <span className="g.rend.script.latin">Mechanicus</span> drin
                  ﬅekt.
                </p>
                <a id="annot.003.e">{/*anchor*/}</a>
                <p className="enc.tagsdecl.indent-medium">
                  Wie ich Euch übrigens von dort <br className="lb" />
                  wieder abholen kann, iﬅ mir
                  <br className="lb" />
                  noch nicht recht klar. Nach meiner
                  <br className="lb" />
                  Meinung wird{" "}
                  <span className="g.rend.script.latin">Casper</span> gegen Ende
                  <br className="lb" />
                  <span className="g.rend.script.latin">Juli</span> wieder hier
                  ſeÿn; am
                  <span className="date">
                    erﬅen
                    <br className="lb" />
                    <span className="g.rend.script.latin">August</span>
                  </span>
                  haben wir <span className="g.rend.script.latin">Bilanz</span>,
                  und dann
                  <br className="lb" />
                  darf ich nicht fehlen; früher kann
                  <br className="lb" />
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
                  ich <span className="g.rend.script.latin">August</span> nicht
                  <sup className="sup" id="txt.add001">
                    lange
                  </sup>{" "}
                  allein
                  <span className="orig">laßen</span>
                  <span className="corr">lassen</span>, und
                  <br className="lb" />
                  doch kann ich meine Einſamkeit
                  <br className="lb" />
                  nicht länger ertragen; was läßt
                  <br className="lb" />
                  ſich nur für ein vernünftiges Re
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ſultat hieraus ziehen?
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <span className="reisen">
                    Ich ſehe es kom̅en, daß ich es
                    <br className="lb" />
                    ſo machen muß; ich werde gegen
                    <br className="lb" />
                    <span className="date">den 22.</span> von hier abfahren
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>,<br className="lb" />
                    mich 1 à 2 Tage dort aufhalten, und
                    <br className="lb" />
                    dann mit meiner ſüßen Laﬅ wieder
                    <br className="lb" />
                    heimfahren. Deine Reiſe trifft in
                    <br className="lb" />
                    dieſer Hinſicht diesmal wirklich in
                    <br className="lb" />
                    einen sehr <span className="orig">mislichen</span>
                    <span className="corr">mißlichen</span> Zeitpunkt.
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </span>
                  <br className="lb" />
                  <a id="annot.004.s">{/*anchor*/}</a>
                  <a id="mark.003.s">{/*anchor*/}</a>Unſer Geſchäft erleidet
                  täglich neue
                  <br className="lb" />
                  Veränderungen, welche unſere Gegen
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  wart <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  ſchnelles Handeln erfordern,
                  <br className="lb" />
                  dabei iﬅ <span className="g.rend.script.latin">
                    Casper
                  </span>{" "}
                  abweſend, und wahr
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  haftig ich ſage Dir mir hat in voriger
                  <br className="lb" />
                  Woche der Kopf vor aller Arbeit
                  <br className="lb" />
                  gebrummt, denn äußere Ange
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  legenheiten <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Handlungsſachen,
                  <br className="lb" />
                  meine <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>
                  <span className="g.rend.script.latin">Caspers</span> Geſchäfte
                  zum Theil,
                  <br className="lb" />
                  alles kommt zusam̅en.<a id="annot.004.e">{/*anchor*/}</a>
                  <span style={{ display: "inline-block" }} width="2char">
                    &nbsp;
                  </span>
                  Doch mir
                  <br className="lb" />
                  iﬅs recht, je krauſer, je lieber.
                  <br className="lb" />
                  Wir ſind noch jung <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  wollen die
                  <br className="lb" />
                  Glieder rühren.<a id="mark.003.e">{/*anchor*/}</a>
                  <a id="annot.005.s">{/*anchor*/}</a>Vielleicht kann
                  <br className="lb" />
                  ich im Herbﬅ wenn ich{" "}
                  <span className="persName">Friederike</span> hole
                  <a id="annot.005.e">{/*anchor*/}</a>
                  <br className="lb" />
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
                  ein paar Tage länger bei den Eltern <br className="lb" />
                  bleiben.
                  <span style={{ display: "inline-block" }} width="3char">
                    &nbsp;
                  </span>
                  Wirklich, ich thäte es auch
                  <br className="lb" />
                  diesmal gerne. <a id="annot.006.s">{/*anchor*/}</a>Aber ich
                  darf
                  <span className="g.rend.script.latin">August</span>{" "}
                  <br className="lb" />
                  nicht lange alleine <span className="orig">laßen</span>
                  <span className="corr">lassen</span>. Es iﬅ
                  <br className="lb" />
                  ihm manches von meinen Sachen
                  <br className="lb" />
                  fremd.
                  <br className="lb" />
                  <a id="annot.006.e">{/*anchor*/}</a>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Deine{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Beﬅellung)
                  </span>
                  <span className="expan">
                    Beﬅellung<span className="ex">en</span>
                  </span>{" "}
                  werde ich
                  <br className="lb" />
                  <span className="orig">beßtens</span>
                  <span className="corr">bestens</span> ausführen. Die Stiefel
                  ſah
                  <br className="lb" />
                  ich ſchon den Tag nach Eurer Abreiſe.
                  <br className="lb" />
                  Nach den andern 3 Punkten ſchaue
                  <br className="lb" />
                  ich <span className="date">morgen</span> frühe um.
                </p>
                <p className="enc.tagsdecl.indent-small">
                  Aber <span className="g.rend.script.latin">à propos</span>!
                  Wollteﬅ Du nicht
                  <br className="lb" />
                  <a id="annot.007.s">{/*anchor*/}</a>
                  <span className="persName">Rike Menkhoff</span>
                  <span style={{ textDecoration: "line-through" }}>
                    bitten
                  </span>{" "}
                  nicht
                  <span className="persName">Schmits</span>
                  <a id="annot.007.e">{/*anchor*/}</a> <br className="lb" />
                  bitten, daß
                  <span className="orig">
                    <span className="overwritten">S</span>
                    <span className="add">⟨ſ⟩</span>ie
                  </span>
                  <span className="corr">sie</span> ihrem Manne ſchrei
                  <br className="g.enc.tagsdecl.hyphenation.divis" />
                  ben möchte, daß ich ſchwerlich am
                  <br className="lb" />
                  <span className="date">
                    3
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>n</sup>.
                    </span>
                    <span className="g.rend.script.latin">
                      <span className="abbr"> (Aug.)</span>
                      <span className="expan">
                        Aug<span className="ex">ust</span>
                      </span>
                    </span>
                  </span>
                  in <span className="placeName">Ham̅</span> ſeÿn könnte damit
                  <br className="lb" />
                  er ſeine
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Einrichtung)
                  </span>
                  <span className="expan">
                    Einrichtung<span className="ex">en</span>
                  </span>
                  darnach trifft.
                  <br className="lb" />
                  Wenn er mich aber gegen <span className="date">den 22</span>
                  <br className="lb" />
                  bis
                  <span className="date">
                    23
                    <span className="g.enc.tagsdecl.cc.abbr-period-sup">
                      <sup>n</sup>.
                    </span>
                  </span>
                  begleiten will, ſoll’s
                  <br className="lb" />
                  mich freuen. –
                </p>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-medium">
                    Nun Adieu, es iﬅ gleich eilf Uhr.
                    <br className="lb" />
                    <span className="orig">Küße</span>
                    <span className="corr">Küsse</span> mein liebes Kind.
                    Schreibe mir
                    <br className="lb" />
                    doch jeden Poﬅtag ein paar Worte
                    <br className="lb" />
                    willﬅ Du, es thut mir ſo gut. –
                  </p>
                </blockquote>
                <blockquote className="closer">
                  <p className="enc.tagsdecl.indent-small">
                    Lebe recht wohl, Du
                    <span className="orig">
                      Herzens
                      <span style={{ display: "inline-block" }}>&nbsp;</span>
                      kind
                    </span>
                    <span className="corr">Herzenskind</span>{" "}
                    <br className="lb" />
                    und behalte mich ſo lieb wie ich Dich.
                  </p>
                </blockquote>
                <div className="closer">
                  Grüße Eltern <span className="abbr"> (u.)</span>
                  <span className="expan">
                    u<span className="ex">nd</span>
                  </span>{" "}
                  Geſchwister herzlich <br className="lb" />
                  <div className="enc.tagsdecl.indent-small">
                    von Deinem treuen <br className="lb" />
                    <span style={{ display: "inline-block" }} width="4words">
                      &nbsp;
                    </span>
                    <span className="glyph">
                      <sup>.</sup>//.
                    </span>
                    <span className="g.rend.script.latin">Friedrich</span>.
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
