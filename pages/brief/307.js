import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "308";
  });

  console.log(item);
  const ners = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);
  console.log(ners);

  return (
    <Layout>
      <Head>
        <title>Brief 307 {date}</title>
      </Head>
      <Brief_wrapper data={item}>
        {/* brief text goes here */}
        {/* Insert Themenmarkierungen */}
        {/* <!-- Themenmarkierung --> */}
            <div type="mark">
                {/* <span type="geschaeftliches" from="#mark.001.s" to="#mark.001.e"/> */}
                {/* <span type="reisen" corresp="#fe307.text"/> */}
                {/* <span type="FE_jugend" corresp="#fe307.text"/> */}
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
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="address">
                        An <span className="persName">Frau Elise Engels</span>
                        <br />p <span className="abbr"> (Adr.)</span>
                        <span className="expan">
                          Adr<span className="ex">esse</span>
                        </span>{" "}
                        dHerren
                        <span className="abbr"> (Friedr.)</span>
                        <span className="expan">
                          Friedr<span className="ex">ich</span>
                        </span>{" "}
                        Engels &amp; Co.
                        <br />
                        <span
                          style={{ display: "inline-block" }}
                          width="3words"
                        >
                          &nbsp;
                        </span>
                        in
                        <br />
                        <span
                          style={{ display: "inline-block" }}
                          width="2words"
                        >
                          &nbsp;
                        </span>
                        <span style={{ textDecoration: "underline" }}>
                          Barmen
                        </span>
                        .-
                        <br />
                      </span>
                    </p>
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
                    <span style={{ display: "inline-block" }} width="7words">
                      &nbsp;
                    </span>
                    <div className="dateline">
                      <span className="placeName">
                        <span className="g.rend.script.latin">Bremen</span>
                      </span>
                      <span className="date">
                        11. <span className="g.rend.script.latin">August</span>{" "}
                        1838.
                      </span>
                    </div>
                  </div>
                  <div className="opener">
                    <div className="salute">
                      Liebe <span className="persName">Eliſe</span>
                    </div>
                  </div>
                  <p>
                    Geﬅern Abend ſind wir hier Gott ſeÿ Dank geſund und wohl an
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gekommen, und ich eile Dich davon mit der erﬅen Poﬅ zu be
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    nachrichtigen. Zu unſrer Freude fanden wir hier einen
                    <br className="lb" />
                    Brief von Dir, woraus wir ſehen daß es im Allgemeinen dort
                    <br className="lb" />
                    gut geht, was uns auch
                    <span className="g.rend.script.latin">
                      <span className="persName">
                        <span className="abbr"> (M.)</span>
                        <span className="expan">
                          M<span className="ex">athilde</span>
                        </span>
                        Treviranus
                      </span>
                    </span>
                    geﬅern ſchon ſagte. Ich
                    <br className="lb" />
                    bedaure nun nicht aus
                    <span className="placeName">
                      <span className="g.rend.script.latin">Manchester</span>
                    </span>
                    noch an Dich geſchrieben zu haben,
                    <br className="lb" />
                    da ich bemerke daß Du in einiger Unruhe biﬅ; allein Du
                    wußteﬅ
                    <br className="lb" />
                    uns dort gut aufgehoben, und ſo hielten wir es bei meiner
                    <br className="lb" />
                    vielen Arbeit für <span className="orig">beßer</span>
                    <span className="corr">besser</span>, Dich lieber über den
                    Tag unſerer
                    <br className="lb" />
                    Seefahrt in Ungewißheit zu{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span>.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="4em">
                      &nbsp;
                    </span>
                    Die Reiſe von
                    <span style={{ textDecoration: "line-through" }}>Ha</span>
                    <span className="placeName">
                      <span className="g.rend.script.latin">London</span>
                    </span>
                    nach
                    <span className="placeName">
                      <span className="g.rend.script.latin">Cuxhaven</span>
                    </span>
                    war ſehr
                    <br className="lb" />
                    gut und ziemlich raſch, wir machten nämlich die
                    <span className="orig">Ueberfahrt</span>
                    <span className="corr">Überfahrt</span>
                    <br className="lb" />
                    in 43 Stunden, ﬅatt der 8–10 Tage, was im Winter und
                    <br className="lb" />
                    bei ganz ﬅürmiſchem Wetter wohl der Fall ſein kann.
                    <br className="lb" />
                    Wir haben ein <span className="orig">bischen</span>
                    <span className="corr">bißchen</span> Seekrankheit
                    abgerechnet eine
                    <br className="lb" />
                    ganz angenehme Reise gehabt, und sind ganz vergnügt,
                    <br className="lb" />
                    trotz dem entsetzlichen Wetter. (Meine armen Ziegelﬅeine
                    <br className="lb" />
                    und Hafer!!) Die Ruhe am feﬅen Lande thut uns ſehr wohl,
                    <br className="lb" />
                    ſo daß wir heute Morgen bis 10 Uhr ſchliefen und der gute
                    <br className="lb" />
                    <span className="persName">
                      Paﬅor{" "}
                      <span className="g.rend.script.latin">Treviranus</span>
                    </span>
                    uns noch im Bette traf. Deshalb kann
                    <span style={{ textDecoration: "line-through" }}>
                      unſer
                    </span>
                    <br className="lb" />
                    mein Brief auch nur kurz ſeÿn da wir die Zeit nun nutzen
                    <br className="lb" />
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="8em">
                      &nbsp;
                    </span>
                    <a id="mark.001.s">{/*anchor*/}</a>Dem
                    <span className="persName">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (Hr.)
                      </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>
                      Strücker
                    </span>
                    danke für ſeine Briefe die mich ſehr
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (intereſſirt)
                    </span>
                    <span className="expan">
                      intereſſirt<span className="ex">en</span>
                    </span>
                    ,<br className="lb" />
                    es iﬅ wahr, wenn es regnen ſoll muß der Loh in den Springen
                    ſeine
                    <br className="lb" />
                    Wieſe mähen, und wenn die Seide aufſchlagen ſoll, muß ich
                    nach
                    <br className="lb" />
                    <span className="placeName">
                      <span className="g.rend.script.latin">England</span>
                    </span>
                    reiſen! Wer hätte das denken ſollen. In
                    <span className="placeName">
                      <span className="g.rend.script.latin">London</span>
                    </span>
                    <br className="lb" />
                    habe ich ziemlich
                    <span className="g.rend.script.latin">Grège</span> gekauft,
                    etwa 30 Ballen zu ziemlich billigen
                    <br className="lb" />
                    <span style={{ textDecoration: "line-through" }}>
                      Ballen,
                    </span>{" "}
                    Preiſen, ſage
                    <span className="persName">Strücker</span> nichts
                    <span style={{ textDecoration: "line-through" }}>da</span>
                    von der Zahl damit ſolche
                    <br className="lb" />
                    nicht bekannt wird. In
                    <span className="placeName">
                      <span className="g.rend.script.latin">Manchester</span>
                    </span>
                    bin ich auch mit dem
                    <br className="lb" />
                    Geſchäft recht zufrieden, es geht alles ſehr regelmäßig,
                    doch
                    <br className="lb" />
                    darüber bald mündlich. Für{" "}
                    <span className="persName">Eduard</span> habe ich die Stelle
                    aus
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gemittelt, er muß ſo gleich abreiſen; ich ſchreibe heute
                    nach
                    <br className="lb" />
                    <span className="placeName">
                      <span className="g.rend.script.latin">Hamm</span>
                    </span>
                    daß er gegen 18. <span className="abbr"> (Aug)</span>
                    <span className="expan">
                      Aug<span className="ex">ust</span>
                    </span>{" "}
                    nach
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>
                    </span>
                    kommt, um die
                    <br className="lb" />
                    <span className="persName">Mutter</span>
                    <sup className="sup" id="txt.add001">
                      <span className="persName">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (Hannch)
                        </span>
                        <span className="expan">
                          Hannch<span className="ex">en</span>
                        </span>
                      </span>
                    </sup>
                    <span className="abbr"> (u)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Dich noch zu ſehen <span className="abbr"> (u)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    ſeine Inﬅruktionen von mir
                    <br className="lb" />
                    zu empfangen.<a id="mark.001.e">{/*anchor*/}</a> Hier werde
                    ich nicht lange bleiben, und am
                    <br className="lb" />
                    Montag oder Dienﬅag abreiſen.
                  </p>
                  <blockquote className="closer">
                    <p className="inline">
                      <span className="persName">Friedrich</span> wird noch
                      etwas ſchreiben
                    </p>
                  </blockquote>
                  <div className="closer">
                    <span style={{ display: "inline-block" }} width="2em">
                      &nbsp;
                    </span>
                    Nun Adieu, liebe
                    <span className="persName">Eliſe</span>, ich freue mich Dich
                    bald wieder zu ſehen
                    <br className="lb" />
                    Grüße die <span className="persName">Mutter</span>,
                    <span className="persName">Hannchen</span>{" "}
                    <span className="abbr"> (u.)</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>
                    <span className="orig">küße</span>
                    <span className="corr">küsse</span> die Kinder
                    <span style={{ display: "inline-block" }} width="8em">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Dein <span className="persName">Friedrich</span>.
                    </div>
                  </div>
                </div>
                <div className="writing-session" id="index.xml-body.1_div.3">
                  <h2>
                    <span className="headingNumber">3. </span>
                  </h2>
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

                  <div className="opener">
                    <span style={{ display: "inline-block" }} width="4em">
                      &nbsp;
                    </span>
                    <div className="salute">
                      Liebe <span className="persName">Mutter</span>
                    </div>
                  </div>
                  <p>
                    <a id="teaser.part.001.s">{/*anchor*/}</a>Wie Du aus des
                    <span className="persName">Vaters</span> Brief wirﬅ erſehen
                    haben, war unſere Reiſe ziem
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    lich glücklich, und ich will Dir nur noch einige Worte über
                    das Einzelne hinzu
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    fügen.<a id="teaser.part.001.e">{/*anchor*/}</a> In London
                    blieben wir drei Tage, und reiﬅen den vierten, es war
                    <br className="lb" />
                    ein Sonntag, morgen werden es vierzehn Tage, ab; am Abend
                    waren
                    <br className="lb" />
                    wir gegen 12 Uhr in
                    <span style={{ textDecoration: "line-through" }}>de</span>
                    <span className="placeName">Mancheﬅer</span>. Dort blieben
                    wir bis zum nächﬅen
                    <br className="lb" />
                    Sonntag, wo wir wieder nach
                    <span className="placeName">London</span> reiﬅen. Montag und
                    Dienﬅag blieben
                    <br className="lb" />
                    wir dort, gingen zu den Maklern, beſahen noch einiges
                    Merkwürdige
                    <br className="lb" />
                    und gingen Dienﬅag Abend etwas vor zwölf auf das Schiff. Den
                    andern
                    <br className="lb" />
                    Morgen waren wir ſchon in der See; der
                    <span className="persName">Vater</span> wurde leider bald
                    ſee
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    krank und legte ſich ſchon vor Mittag zu Bette; ich blieb
                    ganz wohl,
                    <br className="lb" />
                    aber wenn ich was aß, mußte ich es gleich wieder von mir
                    geben.
                    <br className="lb" />
                    Endlich gegen Abends ſieben Uhr fühlte auch ich anhaltende
                    <span className="orig">Uebelkeit</span>
                    <span className="corr">Übelkeit</span>
                    <br className="lb" />
                    und legte mich gleichfalls nieder; den andern Tag ﬅand ich
                    gegen 3
                    <br className="lb" />
                    oder 4 Uhr Nachmittags wieder auf, aß etwas, das mir gut
                    bekam, und
                    <br className="lb" />
                    <span style={{ textDecoration: "line-through" }}>
                      als
                    </span>{" "}
                    einige Stunden nachher ﬅand der{" "}
                    <span className="persName">Vater</span> auch auf. Als es
                    dunkel wur
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    de, ſahen wir die Leuchtthürme an der deutſchen Küﬅe, und
                    wenn wir noch
                    <br className="lb" />
                    eine Stunde gefahren hätten, hätten wir ſchon ans Land gehen
                    können,
                    <br className="lb" />
                    aber der Lootſe wollte nicht weiter fahren, weil er die
                    Untiefen fürchtete
                    <br className="lb" />
                    und ſo blieben wir die Nacht über liegen; am andern Morgen
                    aber
                    <br className="lb" />
                    waren wir um 5 Uhr in{" "}
                    <span className="placeName">Cuxhaven</span>, fuhren gleich
                    durch
                    <span style={{ textDecoration: "line-through" }}>
                      die Lu
                    </span>{" "}
                    einen
                    <br className="lb" />
                    Theil der{" "}
                    <span className="placeName">lüneburger Heide</span> nach
                    <span className="placeName">Bremerhafen</span>, und kamen
                    Abends
                    <br className="lb" />
                    ſieben Uhr{" "}
                    <span style={{ textDecoration: "line-through" }}>
                      bei
                    </span>{" "}
                    in
                    <span className="placeName">Bremen</span> an. Nach einigem
                    Umkleiden gingen
                    <br className="lb" />
                    wir noch eben zu{" "}
                    <span className="persName">Treviranus</span>, fanden ihn
                    aber nicht zu Hauſe,
                    <br className="lb" />
                    er kam aber heute Morgen und fand uns, wie Du geleſen haben
                    <br className="lb" />
                    wirﬅ, im Bette.
                  </p>
                  <div className="closer">
                    Jetzt ſind wir im Begriffe, hinzugehen, wir eſſen heute
                    <br className="lb" />
                    Mittag da, darum ſchließe ich. Grüße Alle recht herzlich von
                    mir,
                    <br className="lb" />
                    auch die Großmutter und die Tante, und lebe recht wohl
                    <br className="lb" />
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Dein treuer Sohn
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="7words">
                        &nbsp;
                      </span>
                      <span className="persName">Friedrich</span>
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
                  {/* Insert Page 3 */}
                </div>
              </section>
            </div>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
