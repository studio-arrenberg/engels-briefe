import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {

  const item = data.briefe.filter((data, index) => {
    return data.id === "4";
  });

  console.log(item);
  const ners = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);
  console.log(ners);
  
  return (
    <Layout>
    <Head>
      <title>Brief {date}</title>
    </Head>

    <Brief_wrapper key={`wrapper-${ners}`} data={item}>
      <div>
        {/*TEI front*/}
        <div className="toc toc_body">
          <div className="toc toc_back">
            {/*TEI body*/}
            <div className="tei_body">
              <section
                className="kuvert"
                id="index.xml-body.1_div.1"
                style={{ paddingTop: "200px", paddingBottom: "210px" }}
              >
                An Herrn{" "}
                <span className="g.rend.script.latin">Caspar Engels</span>
                <br />{" "}
                <span style={{ display: "inline-block" }} width="45mm">
                  &nbsp;
                </span>{" "}
                <small> Zu eigenen Händen.</small>
                <br />
              </section>
            </div>

            <section className="writing-session" id="index.xml-body.1_div.2">
              <div
                className="page"
                style={{
                  paddingTop: "80px",
                  paddingLeft: "80px",
                  paddingBottom: "115px",
                }}
              >
                <div className="opener">
                  <div className="salute">Mein werther Freund!</div>
                </div>
                <p>
                  Nach meinem Wunſch, und nach meiner Hoffnung
                  <br className="lb" /> ſind Sie, wenn Sie dieſen Brief
                  erhalten, von Ihrer Sÿnodal-Reiſe
                  <br className="lb" /> geſund und{" "}
                  <span className="orig">glüklich</span>
                  <span className="corr">glücklich</span> zurückgekom̅en;{" "}
                  <a id="mark.002.s">{/*anchor*/}</a>
                  <a id="teaser.part.002.s">{/*anchor*/}</a>
                  <span className="liebe-ehe active">Ihrer Bitte, daß ich
                  Ihnen eine
                  <br className="lb" /> etwaige Beſchreibung des{" "}
                  <span className="g.rend.script.latin">Characters</span>, der
                  Geſinnungen, und der Familie
                  <br className="lb" /> der{" "}
                  <span className="abbr"> (Demoiſ.)</span>
                  <span className="expan">
                    Demoiſ<span className="ex">elle</span>
                  </span>{" "}
                  <span className="g.rend.script.latin">Noot</span> machen
                  mögte, will ich denn nun, ſo gut ich{" "}
                  <span className="orig">kan</span>
                  <span className="corr">kann</span>,<br className="lb" />{" "}
                  entſprechen:<a id="teaser.part.002.e">{/*anchor*/}</a></span> Ihr
                  natürlicher{" "}
                  <span className="g.rend.script.latin">Character</span> iﬅ
                  aufrichtig, gefällig, zuvorkom̅end,
                  <br className="lb" /> und gar nichts fordernd, meine Frau, und
                  ich, wir haben in der
                  <br className="lb" /> <span className="orig">gantzen</span>
                  <span className="corr">ganzen</span> Zeit unſers Umgangs mit
                  ihr, gar nichts <span className="orig">falsches</span>
                  <span className="corr">Falsches</span> und{" "}
                  <span className="orig">ungerades</span>
                  <span className="corr">Ungerades</span>
                  <br className="lb" /> an ihr bemerkt; etwas zu ſagen, das ihr
                  nicht von <span className="orig">Hertzen gienge</span>
                  <span className="corr">Herzen ginge</span>,
                  <br className="lb" /> würde ihr, wie ich vermuthe, überaus
                  ſchwer werden — aber gar nicht
                  <br className="lb" /> ſchwer wird es ihr, ſich nach andern,
                  ſoweit es die Aufrichtigkeit zuläßt,
                  <br className="lb" /> zu{" "}
                  <span className="g.rend.script.latin">accommodi</span>ren; auf
                  ihren Sinn eigenwillig zu beﬅehen, ſcheint ihr
                  <br className="lb" /> gar nicht eigen, ſondern Nachgiebigkeit,
                  und leichte Lenkſamkeit ein
                  <br className="lb" /> Hauptzug ihrer{" "}
                  <span className="g.rend.script.latin">Characters</span> zu
                  ſeÿn, dabeÿ iﬅ ſie aber von aller Schmeicheleÿ
                  <br className="lb" /> und Heucheleÿ, ſo wie von allem{" "}
                  <span className="orig">Stoltz</span>
                  <span className="corr">Stolz</span> weit entfernt; ſie hat
                  eine
                  <br className="lb" /> ſchlechte{" "}
                  <span className="orig">Meÿnung</span>
                  <span className="corr">Meinung</span> von ſich ſelbﬅ, und irrt
                  ſich <span className="orig">darinn</span>
                  <span className="corr">darin</span> oft zu ihrem
                  <br className="lb" /> Nachtheil, indem ſie ſich viel weniger
                  Gutes zuschreibt, und zutraut, als
                  <br className="lb" /> ſie würklich hat; dieſer niedrige Sinn
                  macht dann auch, daß ſie wenig
                  <br className="lb" /> von andern fordert, und weit mehr daran
                  denkt, wie ſie ſich andern
                  <br className="lb" /> gefällig machen, und ihnen zur Freude
                  ſeÿn möge; — <a id="mark.001.s">{/*anchor*/}</a><span className="religion active">Was ihre
                  Geſinnungen
                  <br className="lb" /> <span className="orig">betrift</span>
                  <span className="corr">betrifft</span>, ſo glaube ich, es
                  ſagen zu dürfen, daß ihr Chriﬅenthum aufrichtig,
                  <br className="lb" /> und nicht nur oberflächig, ſondern feﬅ
                  und tief gegründet iﬅ; Es iﬅ ihr
                  <br className="lb" /> ernﬅlich um ihre Selbﬅbeſſerung zu thun,
                  und ſie hat würklich <span className="orig">darinn</span>
                  <span className="corr">darin</span> ſchon{" "}
                  <span style={{ display: "inline-block" }} width="10cm">
                    &nbsp;
                  </span>
                  Fort=
                  <br className="lb" />
                  <span style={{ display: "inline-block" }} width="10cm">
                    &nbsp;
                  </span>
                  _ <br className="lb" />
                </span></p>{" "}
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "120px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                <p><span className="religion active">
                  Fortſchritte gemacht; daß ihr das Wohlgefallen Gottes, und
                  ihre innre
                  <br className="lb" /> Ruhe mehr werth iﬅ, als alle Luﬅ dieſer
                  Welt, und alle{" "}
                  <span className="g.enc.tagsdecl.suspension.type1">
                    {" "}
                    (Luﬅbarkeit)
                  </span>
                  <span className="expan">
                    Luﬅbarkeit<span className="ex">en</span>
                  </span>
                  ,<br className="lb" /> davon hat ſie verſchiedene ſehr
                  entſcheidende Proben abgelegt;{" "}
                  <span className="orig">Schon</span>
                  <span className="corr">schon</span>
                  <br className="lb" /> ſeit einigen Jahren nahm ſie an denen
                  Vergnügungen, die in{" "}
                  <span className="g.rend.script.latin">Ruhrorth</span>,
                  <br className="lb" /> und in{" "}
                  <span className="g.rend.script.latin">Hagen</span> üblich
                  ſind, nicht mehr Theil, weil ſie dieſelbe einem
                  <br className="lb" /> Chriﬅen unanﬅändig hielt — ;
                  <a id="mark.001.e">{/*anchor*/}</a></span>Was zuletzt ihre{" "}
                  <span className="g.rend.script.latin">Familie</span> betrift,
                  ſo
                  <br className="lb" /> iﬅ in derſelben keine{" "}
                  <span className="orig">Perſohn</span>
                  <span className="corr">Person</span>, deren ſie Urſache hätte,
                  ſich zu ſchämen.
                  <br className="lb" /> ſie hat, ſoviel ich weiß, 3 Brüder und 2
                  Schweﬅern; der ältere Bruder <br className="lb" /> iﬅ
                  OberSaltz <span className="orig">=</span>
                  <span className="corr">-</span>{" "}
                  <span className="g.rend.script.latin">Inspector</span>, und
                  ZollEinnehmer in{" "}
                  <span className="g.rend.script.latin">Ruhrorth</span>; Zweÿ
                  ſehr ein
                  <br className="g.enc.tagsdecl.hyphenation.eq" /> trägliche und
                  ehrenvolle Bedienungen; ſeine Frau iﬅ eine{" "}
                  <span className="g.rend.script.latin">Mauritz</span> von{" "}
                  <span className="placeName">Weſel</span>,<br className="lb" />{" "}
                  Der{" "}
                  <span className="orig">
                    Zwe
                    <span className="orig">
                      <span className="corr">y</span>te
                    </span>
                    <span className="corr">
                      zwe
                      <span className="orig">
                        <span className="corr">y</span>te
                      </span>{" "}
                      Bruder iﬅ <span className="orig">Creiß=Einnehmer</span>
                      <span className="corr">Kreis-Einnehmer</span> gleichfalls
                      in <span className="g.rend.script.latin">Ruhrorth</span>,
                      und mit
                      <br className="lb" /> einer Karthaus von{" "}
                      <span className="g.rend.script.latin">Hagen</span>{" "}
                      verheirathet; der dritte noch unverheirathete
                      <br className="lb" /> beſorgt die Geſchäfte der älteren
                      Schweﬅer, die{" "}
                      <span className="orig">
                        <span className="corr">eine</span>{" "}
                        <span className="g.rend.script.latin">Spedition</span>{" "}
                        hat, und gleichfalls
                        <br className="lb" /> in{" "}
                        <span className="g.rend.script.latin">Ruhrorth</span>{" "}
                        wohnt — ; dieſe iﬅ durch die{" "}
                        <span className="abbr"> (Demo.)</span>
                        <span className="expan">
                          Demo<span className="ex">iſelle</span>
                        </span>{" "}
                        <span className="g.rend.script.latin">Noot</span>{" "}
                        aufmerkſahm auf ſich
                        <br className="lb" /> ſelbﬅ, und auf Gottes Wort
                        geworden, und hegt den ernﬅlichen Wunſch ſich
                        <br className="lb" /> zu beſſern; die jüngere Schweﬅer
                        iﬅ an Herrn{" "}
                        <span className="g.rend.script.latin">
                          Doctor <span className="persName">Maercker</span>
                        </span>{" "}
                        in <span className="g.rend.script.latin">Hagen</span>{" "}
                        <br className="lb" /> verheirathet — ;
                      </span>
                    </span>
                  </span>
                </p>
                <p className="enc.tagsdecl.indent-medium">
                  Dieß mein Wertheﬅer! wäre{" "}
                  <span className="orig">ohngefehr</span>
                  <span className="corr">ungefähr</span> das, was ich Ihnen in
                  Anſehung <br className="lb" /> der{" "}
                  <span className="abbr"> (Dem.)</span>
                  <span className="expan">
                    Dem<span className="ex">oiſelle</span>
                  </span>{" "}
                  <span className="persName">
                    <span className="g.rend.script.latin">Noot</span>
                  </span>{" "}
                  ſagen könnte — ; Sie werden daraus ſelbﬅ den Schluß machen,
                  <br className="lb" /> daß ſie nicht zu den alltäglichen
                  Frauenzimmern gehört, ſondern zu denen,
                  <br className="lb" /> die man ſelten antrifft — beſonders in
                  den <span className="orig">itzigen</span>
                  <span className="corr">jetzigen</span> Zeiten, wo Eitelkeit
                  und
                  <br className="lb" /> <span className="orig">LeichtSinn</span>
                  <span className="corr">Leichtsinn</span> ſo ſehr überhand
                  nimmt; <span className="orig">Nach</span>
                  <span className="corr">nach</span> meinem Urtheil{" "}
                  <span className="orig">kan</span>
                  <span className="corr">kann</span> ich nicht
                  <br className="lb" /> anders, als den Mann glücklich ſchätzen,
                  der ſie zur Gattin bekömmt.<a id="mark.002.e">{/*anchor*/}</a>
                </p>
                <div className="closer">
                  <span className="orig">meine</span>
                  <span className="corr">Meine</span> Frau und ich, wir grüßen
                  Sie auf das Herzlichﬅe, ich bin mit
                  <br className="lb" /> denen Ihren bekannten Geſinnungen.{" "}
                  <br className="lb" />{" "}
                  <span style={{ display: "inline-block" }} width="11cm">
                    &nbsp;
                  </span>{" "}
                  Ihr aufrichtiger Freund <br className="lb" />
                  <div className="dateline">
                    <span className="placeName">
                      <span className="abbr"> (D.)</span>
                      <span className="expan">
                        D<span className="ex">üſſeldorf</span>
                      </span>
                    </span>{" "}
                    am <span className="date">12 Maÿ 1791</span>.
                  </div>{" "}
                  <span style={{ display: "inline-block" }} width="8cm">
                    &nbsp;
                  </span>
                  <div className="signed">
                    <span className="persName">
                      <span className="abbr"> (Fr.)</span>
                      <span className="expan">
                        Fr<span className="ex">iedrich</span>
                      </span>{" "}
                      Hoffmann
                    </span>
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
