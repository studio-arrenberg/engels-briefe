import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "308";
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
        <title>Brief 308 {date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
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
                  style={{ paddingTop: "260px", paddingBottom: "280px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="address">
                        <span className="small">An Frau </span>
                        <span className="sans">Elise Engels</span>
                        <span className="small"><span className="sans">
                          <br />p <span className="abbr"> Adr.</span>
                          <span className="expan">
                            Adr<span className="ex">esse</span>
                          </span>{" "}</span>
                          dHerren{" "}
                        </span>
                        <span className="sans">
                        <span className="abbr"> Friedr.</span>
                        <span className="expan">
                          Friedr<span className="ex">ich</span>
                        </span>{" "}
                        </span> <span className="sans"> Engels </span> <span className="small ">  &amp; <span className="sans">C<sup>o</sup>.</span></span>
                        <br />
                        <span
                          style={{ width: "400px",
                        paddingLeft: "280px" }}
                        >
                          <span className="small">in</span>
                          <br />
                          <span
                            style={{ display: "inline-block sans", paddingLeft: "180px" }}
                            width="2words"
                          >
                          <span className="underline">Barmen</span></span>
                          .{" "}–
                          <br />
                        </span>
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              <section
                className="page-small writing-session"
                id="index.xml-body.1_div.2"
              >
                <div
                  className="page"
                  style={{
                    paddingTop: "15px",
                    paddingLeft: "80px",
                    paddingBottom: "10px",
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <div className="dateline text-right" style={{paddingRight: "250px",}}>
                      <span className="placeName">
                        <span className="g.rend.script.latin">Bremen </span>
                      </span>
                      <span className="date">
                        11. <span className="g.rend.script.latin">August</span>{" "}
                        1838.
                      </span>
                    </div>
                  </div>

                  <div className="opener">
                    <div className="salute">
                      Liebe{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>
                    </div>
                  </div>
                  <p>
                    <span className="reisen">
                    Ge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern Abend{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wir hier Gott{" "}
                    <span className="orig">ſeÿ</span>
                    <span className="corr">sey</span> Dank ge
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>und und wohl an<span className="orig doublehyphen">⹀</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    gekommen, und ich eile Dich davon mit der er
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en Po
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> zu be
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    nachrichtigen. Zu un<span className="orig">ſ</span>
                    <span className="corr">s</span>rer Freude fanden wir hier
                    einen
                    <br className="lb" /> Brief von Dir, woraus wir{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen daß es im Allgemeinen
                    dort
                    <br className="lb" /> gut geht, was uns auch{" "}
                    <span className="g.rend.script.latin">
                      <span className="persName makierung">
                        <span className="abbr"> M.</span>
                        <span className="expan">
                          M<span className="ex">athilde</span>
                        </span>{" "}
                        Treviranus
                      </span>
                    </span>
                    {" "}ge<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ern{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>agte. <span className="orig">J</span><span className="corr">I</span>ch<span className="orig doublehyphen">⹀</span>
                    <br className="lb" /> bedaure nun nicht aus{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Manchester</span>
                    </span>{" "}
                    noch an Dich ge<span className="orig">ſ</span>
                    <span className="corr">s</span>chrieben zu haben,
                    <br className="lb" /> da ich bemerke daß Du in einiger
                    Unruhe bi<span className="orig">ﬅ</span>
                    <span className="corr">st</span>; allein Du wußte
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>
                    <br className="lb" /> uns dort gut aufgehoben, und{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o hielten wir es bei meiner
                    <br className="lb" /> vielen Arbeit für{" "}
                    <span className="orig">beßer</span>
                    <span className="corr">besser</span>, Dich lieber über den
                    Tag un<span className="orig">ſ</span>
                    <span className="corr">s</span>rer
                    <br className="lb" /> Seefahrt in Ungewißheit zu{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span>.
                    </span>
                  </p>
                  <p>
                    <span className="reisen">
                    <span style={{ display: "inline-block" }} width="4em">
                      &nbsp;
                    </span>
                    Die <span className="makierung">Rei<span className="orig">ſ</span>
                    <span className="corr">s</span>e </span>von{" "}
                    <span className="placeName sans">
                      <span
                        className="strike-through sans"
                        style={{ textDecoration: "line-through" }}
                      >
                        Ha
                      </span>{" "}
                        <span className="g.rend.script.latin">London</span>
                      </span>{" "}
                    nach{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Cuxhaven</span>
                    </span>{" "}
                    war <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr
                    <br className="lb" /> gut und ziemlich ra
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ch, wir machten nämlich die{" "}
                    <span className="orig">Ueberfahrt</span>
                    <span className="corr">Überfahrt</span>
                    <br className="lb" /> in 43 Stunden,{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>att der 8–10 Tage, was im
                    Winter und
                    <br className="lb" /> bei ganz{" "}
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ürmi
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chem Wetter wohl der Fall{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ein kann.
                    <br className="lb" /> Wir haben ein{" "}
                    <span className="orig">bischen</span>
                    <span className="corr">bißchen</span> Seekrankheit
                    abgerechnet eine
                    <br className="lb" /> ganz angenehme Reise gehabt, und sind
                    ganz vergnügt,
                    <br className="lb" /> trotz dem entsetzlichen Wetter. </span>(Meine
                    armen Ziegel<span className="orig">ﬅ</span>
                    <span className="corr">st</span>eine
                    <br className="lb" /> und Hafer!!) Die Ruhe am fe
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en Lande thut uns{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr wohl,
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>o daß wir heute Morgen bis 10
                    Uhr <span className="orig">ſ</span>
                    <span className="corr">s</span>chliefen und der gute
                    <br className="lb" />{" "}
                    <span className="persName">
                      Pa<span className="orig">ﬅ</span>
                      <span className="corr">st</span>or{" "}
                      <span className="g.rend.script.latin">Treviranus</span>
                    </span>{" "}
                    uns noch im Bette traf. Deshalb kann{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      un<span className="orig">ſ</span>
                      <span className="corr">s</span>er
                    </span>
                    <br className="lb" /> mein Brief auch nur kurz{" "}
                    <span className="orig">ſeÿn</span>
                    <span className="corr">seyn</span> da wir die Zeit nun
                    nutzen
                    <br className="lb" /> <span className="orig">müßen</span>
                    <span className="corr">müssen</span>.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="8em">
                      &nbsp;
                    </span>
                    <span className="business">
                    <a id="mark.001.s">{/*anchor*/}</a>Dem{" "}
                    
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Hr
                      </span>
                      <span className="expan">
                        H<span className="ex">e</span>r
                        <span className="ex">rn</span>
                      </span>{" "}
                      <span className="persName">
                      Strücker
                    </span>{" "}
                    danke für <span className="orig">ſ</span>
                    <span className="corr">s</span>eine Briefe die mich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      intere<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>irt
                    </span>
                    <span className="expan">
                      intere<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>irt
                      <span className="ex">en</span>
                    </span>
                    ,<br className="lb" /> es i<span className="orig">ﬅ</span>
                    <span className="corr">st</span> wahr, wenn es regnen{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>oll muß <span className="makierung">der <span className="sans">Loh </span> in den
                    Springen</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eine{" "}
                    <br className="lb" /> Wie<span className="orig">ſ</span>
                    <span className="corr">s</span>e mähen, und wenn die Seide
                    auf<span className="orig">ſ</span>
                    <span className="corr">s</span>chlagen{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>oll, muß ich nach
                    <br className="lb" />{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">England</span>
                    </span>{" "}
                    rei<span className="orig">ſ</span>
                    <span className="corr">s</span>en! Wer hätte das denken{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ollen. <span className="orig">J</span><span className="corr">I</span>n{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">London</span>
                    </span>
                    <br className="lb" /> habe ich ziemlich{" "}
                    <span className="g.rend.script.latin makierung">Grège</span> gekauft,
                    etwa 30 Ballen zu ziemlich billigen
                    <br className="lb" />{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      Ballen,
                    </span>{" "}
                    Prei<span className="orig">ſ</span>
                    <span className="corr">s</span>en,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>age{" "}
                    <span className="persName makierung">Strücker</span> nichts{" "}
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      da
                    </span>
                    von der Zahl damit <span className="orig">ſ</span>
                    <span className="corr">s</span>olche
                    <br className="lb" /> nicht bekannt wird. <span className="orig">J</span><span className="corr">I</span>n{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Manchester</span>
                    </span>{" "}
                    bin ich auch mit dem
                    <br className="lb" /> Ge<span className="orig">ſ</span>
                    <span className="corr">s</span>chäft recht zufrieden, es
                    geht alles <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr regelmäßig, doch
                    <br className="lb" /> darüber bald mündlich. Für{" "}
                    <span className="persName makierung">Eduard</span> habe ich die Stelle
                    aus
                    <span className="orig doublehyphen">⹀</span><br className="g.enc.tagsdecl.hyphenation.divis" />
                    gemittelt, er muß <span className="orig">ſ</span>
                    <span className="corr">s</span>o gleich abrei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en; ich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chreibe heute nach
                    <br className="lb" />{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Hamm</span>
                    </span>{" "}
                    daß er gegen 18
                    <sup className="orig">tƺ</sup>.
                     <span className="abbr sans"> Aug</span>
                    <span className="expan">
                      Aug<span className="ex">ust</span>
                    </span>{" "}
                    nach{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Barmen</span>
                    </span>{" "}
                    kommt, um die
                    <br className="lb" />{" "}
                    <span className="persName"><small className="orig">E</small>Mutter</span>{" "}
                    <sup className="sup" id="txt.add001">
                      <span className="persName">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          Hannch
                        </span>
                        <span className="expan">
                          Hannch<span className="ex">en</span>
                        </span>
                      </span>
                    </sup>{" "}
                    <span className="abbr"> u</span><span className="orig">.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Dich noch zu <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen{" "}
                    <span className="abbr"> u</span><span className="orig">.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eine 
                    <span className="orig">J</span><span className="corr">I</span>n
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ruktionen von mir
                    <br className="lb" /> zu empfangen.
                    <a id="mark.001.e">{/*anchor*/}</a></span> <span className="reisen">Hier werde ich nicht
                    lange bleiben, und am
                    <br className="lb" /> Montag oder Dien
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ag abrei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en.{" "}</span>
                    <span className="persName">Friedrich</span> wird noch
                    etwas <span className="orig">ſ</span>
                    <span className="corr">s</span>chreiben   </p>

                  <div className="closer">
                    <span style={{ display: "inline-block" }} width="2em">
                      &nbsp;
                    </span>
                    Nun <small className="orig">l</small>Adieu liebe{" "}
                    <span className="persName">
                      Eli<span className="orig">ſ</span>
                      <span className="corr">s</span>e
                    </span>
                    , ich freue mich Dich bald wieder zu{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen
                    <br className="lb" /> Grüße die{" "}
                    <span className="persName makierung">Mutter</span>,{" "}
                    <span className="persName makierung">Hannchen</span>{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
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
                    marginTop: "-20px",
                    paddingTop: "45px",
                    paddingLeft: "80px",
                    paddingBottom: "150px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <span className="engelsjunior">
                  <div className="opener">
                   
                    <div className="salute" >
                     <span className="orig" style={{ display: "inline-block", marginLeft: "30px" }} width="4em" />
                      &nbsp;
                      Liebe <span className="persName">Mutter</span>
                    </div>
                  </div>
                  <p>
                    <a id="teaser.part.001.s">{/*anchor*/}</a>Wie Du aus des{" "}
                    <span className="persName">Vaters</span> Brief wir
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> er
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehen haben, war un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re Rei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e ziem<span className="orig">-</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    lich glücklich, und ich will Dir nur noch einige Worte über
                    das Einzelne hinzu<span className="orig">-</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    fügen.<a id="teaser.part.001.e">{/*anchor*/}</a> <span className="orig">J</span><span className="corr">I</span>n London
                    blieben wir drei Tage, und rei
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en den vierten, es war
                    <br className="lb" /> ein Sonntag, morgen werden es vierzehn
                    Tage, ab; am Abend waren
                    <br className="lb" /> wir gegen 12 Uhr in{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      der
                    </span>{" "}
                    <span className="placeName">
                      Manche<span className="orig">ﬅ</span>
                      <span className="corr">st</span>er
                    </span>
                    . Dort blieben wir bis zum näch
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en
                    <br className="lb" /> Sonntag, wo wir wieder nach{" "}
                    <span className="placeName">London</span> rei
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en. Montag und Dien
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ag blieben
                    <br className="lb" /> wir dort, gingen zu den Maklern, be
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ahen noch einiges Merkwürdige
                    <br className="lb" /> und gingen Dien
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>ag Abend etwas vor zwölf auf
                    das Schiff. Den andern
                    <br className="lb" /> Morgen waren wir{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon in der See; der{" "}
                    <span className="persName">Vater</span> wurde leider bald{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ee<span className="orig">-</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    krank und legte <span className="orig">ſ</span>
                    <span className="corr">s</span>ich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon vor Mittag zu Bette; ich
                    blieb ganz wohl,
                    <br className="lb" /> aber wenn ich was aß, mußte ich es
                    gleich wieder von mir geben.
                    <br className="lb" /> Endlich gegen Abends{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ieben Uhr fühlte auch ich
                    anhaltende <span className="orig">Uebelkeit</span>
                    <span className="corr">Übelkeit</span>
                    <br className="lb" /> und legte mich gleichfalls nieder; den
                    andern Tag <span className="orig">ﬅ</span>
                    <span className="corr">st</span>and ich gegen 3
                    <br className="lb" /> oder 4 Uhr Nachmittags wieder auf, aß
                    etwas, das mir gut bekam, und
                    <br className="lb" />{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      als
                    </span>{" "}
                    einige Stunden nachher <span className="orig">ﬅ</span>
                    <span className="corr">st</span>and der{" "}
                    <span className="persName">Vater</span> auch auf. Als es
                    dunkel wur<span className="orig">-</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    de, <span className="orig">ſ</span>
                    <span className="corr">s</span>ahen wir die Leuchtthürme an
                    der deut<span className="orig">ſ</span>
                    <span className="corr">s</span>chen Kü
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>e, und wenn wir noch
                    <br className="lb" /> eine Stunde gefahren hätten, hätten
                    wir <span className="orig">ſ</span>
                    <span className="corr">s</span>chon a<small className="orig">u</small>ns Land gehen können,
                    <br className="lb" /> aber der Loot
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>e wollte nicht weiter fahren,
                    weil er die Untiefen fürchtete
                    <br className="lb" /> und <span className="orig">ſ</span>
                    <span className="corr">s</span>o blieben wir die Nacht über
                    liegen; am andern Morgen aber
                    <br className="lb" /> waren wir um 5 Uhr in{" "}
                    <span className="placeName">Cuxhaven</span>, fuhren gleich
                    durch{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      die Lu
                    </span>{" "}
                    einen
                    <br className="lb" /> Theil der{" "}
                    <span className="placeName makierung">lüneburger Heide</span> nach{" "}
                    <span className="placeName">Bremerhafen</span>, und kamen
                    Abends
                    <br className="lb" /> <span className="orig">ſ</span>
                    <span className="corr">s</span>ieben Uhr{" "}
                    <span
                      className="strike-through"
                      style={{ textDecoration: "line-through" }}
                    >
                      bei
                    </span>{" "}
                    in{" "}
                    <span className="placeName">Bremen</span> an. Nach einigem
                    Umkleiden gingen <br className="lb" /> wir noch eben zu{" "}
                    <span className="persName ">Treviranus</span>, fanden ihn
                    aber nicht zu Hau<span className="orig">ſ</span>
                    <span className="corr">s</span>e,
                    <br className="lb" /> er kam aber heute Morgen und fand uns,
                    wie Du gele<span className="orig">ſ</span>
                    <span className="corr">s</span>en haben
                    <br className="lb" /> wir<span className="orig">ﬅ</span>
                    <span className="corr">st</span>, im Bette.
                    Jetzt <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wir im Begriffe,
                    hinzugehen, wir e<span className="orig">ſ</span>
                    <span className="corr">s</span>
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en heute
                    <br className="lb" /> Mittag da, darum{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chließe ich. Grüße Alle recht
                    herzlich von mir,
                    <br className="lb" /> auch die Großmutter und die Tante, und
                    lebe recht wohl
                    <br className="lb" />{" "}
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="signed orig" style={{marginLeft: "-85px"}}>
                      Dein treuer Sohn
                      <br />{" "}
                      <div className="persName">Friedrich</div>
                    </div>
                    <div className="signed corr" style={{marginLeft: "-85px", textAlign: "right"}}>
                      Dein treuer Sohn
                      <br />
                      <div className="persName">Friedrich</div>
                    </div>
                    </p>
                    </span>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1100px",
            }}
          >
            <hr />
            <label>Reise</label>
            <p>
              „Die Rückreise erfolgte mit dem englischen Dampfschiff ‚Countess
              of Lonsdale‘.“ (Michael Knieriem (Hg.): Die Herkunft des Friedrich Engels. Trier 1991, S. 580.)
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "960px",
            }}
          >
            <hr />
            <label>Mathilde Treviranus</label>
            <p>
              Mathilde Catharine Treviranus, geb. Castendyck (1794–1878),
              verheiratet mit Georg Gottfried Treviranus (1788–1868).
            </p>
          </div>
          
          <div
            className="stellenerläuterung"
            style={{
              top: "1545px",
            }}
          >
            <hr />
            <label>Strücker</label>
            <p>Friedrich Strücker. Näheres nicht ermittelt.</p>
          </div>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1430px",
            }}
          >
            <hr />
            <label>der Loh in den Springen</label>
            <p>
              Nicht ermittelter Nachbar der Familie Engels. Die Flur ‚In den
              Springen‘ lag südlich des ‚Barmer Bruchs‘ und ist z.B. verzeichnet
              in der Topographische Aufnahme der Rheinlande (1801–1828) von Jean
              Joseph Tranchot (1752–1815), frz. Geograph. Die heutigen
              Straßennamen „Im Springen“ und „Springer Straße“ nehmen Bezug auf
              die historische Flurbezeichnung.
            </p>
          </div>
          <div
            className="stellenerläuterung"
            style={{
              top: "1460px",
            }}
          >
            <hr />
            <label>Grège</label>
            <p>
              Frz. Bezeichnung für ungezwirnte Rohseidenfäden, die nur durch den
              natürlichen Seidenleim zusammengehalten werden.
            </p>
          </div>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1600px",
            }}
          >
            <hr />
            <label>Eduard</label>
            <p>
              Franz Eduard Johann Daniel Friedrich von Griesheim (1811–?),
              kaufmännischer Lehrling in der Firma Friedr. Engels & Comp. in
              Barmen. Er war der älteste Sohn von Friederike von Griesheim, geb.
              van Haar (1789–1880), Tante von Friedrich Engels jun.
            </p>
          </div>
          <div
            className="stellenerläuterung"
            style={{
              top: "1797px",
            }}
          >
            <hr />
            <label>Mutter</label>
            <p>
              Die Schwiegermutter Franziska van Haar, geb. Snethlage <br />
              (1758–1846).
            </p>
          </div>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1797px",
            }}
          >
            <hr />
            <label>Hannchen</label>
            <p>
              Susanne Christine Johanne, genannt „Hannchen“, Lipka, geb. van
              Haar (1802–1864), Schwester von Elise Engels, geb. van Haar, und
              Tante von Friedrich Engels jun. 1824 Heirat mit <br />Heinrich Adolph
              Lipka (1792–1829).
            </p>
          </div>
          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2780px",
            }}
          >
            <hr />
            <label>Lüneburger Heide</label>
            <p>
              Auf dem Weg von Cuxhaven und Bremerhaven liegen die Marschgebiete
              Land Hadeln und Land Wursten, die südlich bzw. östlich von
              Geestrücken eingefasst werden. Deren sandiger Untergrund hat die
              Entstehung der ‚Wurster Heide‘ begünstigt. Die Ähnlichkeit dieser
              Landschaft mit der ‚Lüneburger Heide‘ mag zu Friedrich Engels‘
              Irrtum geführt haben (vgl. Michael Knieriem (Hg.): Die Herkunft des Friedrich Engels. Trier 1991, S. 580, Anm. 5).
            </p>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
