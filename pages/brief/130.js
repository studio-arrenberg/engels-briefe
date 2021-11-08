import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "130";
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
        <title>Brief 130{date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        <div>
          {/*TEI front*/}
          <div className="toc toc_body">
            <div className="toc toc_back">
              {/*TEI body*/}
              <div className="tei_body">
                <section
                  className="kuvert"
                  id="index.xml-body.1_div.1"
                  style={{ paddingTop: "200px", paddingBottom: "360px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="kuvert" id="index.xml-body.1_div.1">
                    <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                      <h3>
                        <span className="headingNumber">1.1. </span>
                      </h3>
                      <p className="g.enc.tagsdecl.wd.vertical-left">An</p>
                      <span className="persName">
                        Fräulein Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                        <span className="g.rend.script.latin"> van Haar</span>
                      </span>
                      in{" "}
                      <br />
                      <span className="underline">
                        Hamm.{" "}
                      </span>
                    </div>
                  </div>
                </section>
              </div>

              <section className="writing-session  page-small" id="index.xml-body.1_div.2">
                <div type="mark">
                  <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e" />
                  <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e" />
                  <span type="liebe-ehe" from="#mark.003.s" to="#mark.003.e" />
                  <span type="religion" from="#mark.004.s" to="#mark.004.e" />
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "15px",
                    paddingLeft: "80px",
                    paddingBottom: "115px"
                  }}
                >
                  {/* Insert Page 1 */}
                  <div className="opener">
                    <div className="dateline text-right" style={{paddingRight: "250px",}}>
                      Barmen{" "}
                      <span className="date">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          d</span>
                        <span className="expan">
                          d<span className="ex">en</span>
                        </span>{" "}
                        21.{" "}
                        <span className="g.rend.script.latin">
                          <span className="abbr"> Septemb.</span>
                          <span className="expan">
                            Septemb<span className="ex">er</span>
                          </span>
                        </span>
                        {" "}
                        1816. <br className="lb" />{" "}
                        <span style={{ display: "inline-block" }} width="13cm">
                          &nbsp;
                        </span>
                        <span className="corr"><br /></span>
                        Sam<span className="orig">ﬅ</span>
                        <span className="corr">st</span>ag
                      </span>{" "}
                      Abend.
                    </div>
                  </div>
                  <p>
                    <span className="opener">
                      <span className="salute" id="teaser.part.001">
                        Liebe{" "}
                        <span className="persName">
                          Eli<span className="orig">ſ</span>
                          <span className="corr">s</span>e
                        </span>
                        .{" "}
                      </span>
                    </span>
                    <span className="liebe">
                    <span class="orig" style={{ marginLeft: "20px" }}></span>
                      <a id="mark.001.s">{/*anchor*/}</a>An die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>em ruhigen Abende, wo alle
                      Arbeiten
                      <br className="lb" />{" "}
                      für die<span className="orig">ſ</span>
                      <span className="corr">s</span>e Woche ruhen, und alles{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ich auf{" "}
                      <span className="date">
                        den kommenden Tag
                        <br className="lb" />{" "}
                        des Herrn{" "}
                      </span>
                      vorbereitet – dachte ich einige Augenblicke Dir, der
                      <br className="lb" />{" "}
                      Geliebten meines Herzens zu widmen.
                      <a id="mark.001.e">{/*anchor*/}</a>
                    </span>
                    {" "}
                    Die ganze Woche
                    <br className="lb" />{" "}
                    hatte ich den <span className="date">heutigen</span> Abend
                    dazu be<span className="orig">ﬅ</span>
                    <span className="corr">st</span>immt, und glücklicher<span className="orig">⹀</span>
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    wei<span className="orig">ſ</span>
                    <span className="corr">s</span>e kommt mir kein Hinderniß in
                    den Weg.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="2em">
                      &nbsp;
                    </span>
                    Vermuthlich <span className="orig">ſ</span>
                    <span className="corr">s</span>ind wir zu einer Zeit in un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ern älterlichen
                    <br className="lb" />{" "}
                    Häu<span className="orig">ſ</span>
                    <span className="corr">s</span>ern wieder angelangt, denn
                    wir waren kurz nach
                    <br className="lb" />{" "}1 Uhr wieder hier; wo ich froh
                    empfangen wurde.
                  </p>
                  <p>
                    <span style={{ display: "inline-block" }} width="2em">
                      &nbsp;
                    </span>
                    <span className="makierung">Das waren ein paar frohe und wichtige Wochen, die
                    <br className="lb" />{" "}
                    Du bei uns verlebte<span className="orig">ﬅ</span>
                    <span className="corr">st</span></span>! Sie haben über un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>er beider
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>eitiges
                    <br className="lb" />{" "}
                    Schick<span className="orig">ſ</span>
                    <span className="corr">s</span>al, will’s Gott be
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>immt!{" "}
                    <span className="liebe">
                      <a id="mark.002.s">{/*anchor*/}</a>O es wird mir immer
                      <br className="lb" />{" "}
                      klarer, daß wir für einander ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chaffen, daß un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er Zu<span className="orig">⹀</span>
                      <br className="" />
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ammentreffen von dem
                      gütigen Gotte geleitet wurde.
                      <br className="lb" />{" "}
                      Die <span className="orig">ſ</span>
                      <span className="corr">s</span>onderbare, auffallende
                      Veränderung der Stimmung
                      <br className="lb" />{" "}
                      in un<span className="orig">ſ</span>
                      <span className="corr">s</span>erm Hau
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e, die Liebe die meine
                      Eltern zu Dir
                      <br className="lb" />{" "}
                      zeigen, und gewiß auch haben, mein inneres Gefühl,
                      <br className="lb" />{" "}
                      wenn ich in die<span className="orig">ſ</span>
                      <span className="corr">s</span>er wichtigen Sache mich zu
                      un<span className="orig">ſ</span>
                      <span className="corr">s</span>erm himmli
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chen
                      <br className="lb" />{" "}
                      Vater wandte – alles <span className="orig">ſ</span>
                      <span className="corr">s</span>chien mir zu{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>agen: „Das i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> das
                      <br className="lb" />{" "}
                      Mädchen, das <span className="orig">ſ</span>
                      <span className="corr">s</span>ich für Dich paßt, und an
                      Deiner Seite die<span className="orig">ſ</span>
                      <span className="corr">s</span>es
                      <br className="lb" />{" "}
                      Leben durchwandeln <span className="orig">ſ</span>
                      <span className="corr">s</span>oll.“ –{" "}
                      <a id="mark.004.s">{/*anchor*/}</a>
                      <span className="religion">
                        Nun liebe{" "}
                        <span className="persName">
                          Eli<span className="orig">ſ</span>
                          <span className="corr">s</span>e
                        </span>{" "}
                        laß uns täglich
                        <br className="lb" />{" "}
                        den lieben Gott bitten, (wie wir uns auch abge
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>prochen haben)
                        <br className="lb" />{" "}
                        daß Er die Sache lenken und regieren wolle nach Seinem
                        <br className="lb" />{" "}
                        wei<span className="orig">ſ</span>
                        <span className="corr">s</span>en Rathe, und wenn’s Sein
                        heiliger Wille i<span className="orig">ﬅ</span>
                        <span className="corr">st</span>, uns{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>einer
                        <br className="lb" />{" "}
                        Zeit zu<span className="orig">ſ</span>
                        <span className="corr">s</span>ammen vereinigen möge,
                        damit wir <span className="orig">J</span>
<span className="corr">I</span>hn alsdann
                        <br className="lb" />{" "}
                        durch un<span className="orig">ſ</span>
                        <span className="corr">s</span>er Leben prei
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>en und Seine gütige
                        Führung bewundern.
                        <br className="lb" />{" "}
                        Auf die<span className="orig">ſ</span>
                        <span className="corr">s</span>e Art wird uns un
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>ere frühzeitige Bekannt
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chaft
                        <br className="lb" />{" "}
                        zum wahren Nutzen dienen, und ein Mittel{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n, im
                        <br className="lb" />{" "}
                        Chri<span className="orig">ﬅ</span>
                        <span className="corr">st</span>enthum weiter zu kommen;
                        und Du <span className="orig">ſ</span>
                        <span className="corr">s</span>oll
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>ehen,
                        <br className="lb" />{" "}
                        die Zeit wird uns <span className="orig">ſ</span>
                        <span className="corr">s</span>o{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chnell vergehen, daß wir{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>elb
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span> es
                        <br className="lb" />{" "}
                        nicht begreifen können;
                        <span style={{ display: "inline-block" }} width="2em">
                          &nbsp;
                        </span>
                        denn die<span className="orig">ſ</span>
                        <span className="corr">s</span>e Stimmung, worin
                        <br className="lb" />{" "}
                        wir auf Gott vertrauen, bewahrt uns vor jenem Leiden<span className="orig">=</span>
                        <br className="g.enc.tagsdecl.hyphenation.divis" />
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>chaftlichen, welches die
                        Ruhe <span className="orig">ﬅ</span>
                        <span className="corr">st</span>ört, und zu den äußern
                        <br className="lb" />{" "}
                        gewöhnlichen{" "}
                        <span className="orig">
                          Be<span className="orig">ſ</span>
                          <span className="corr">s</span>chäfftigungen
                        </span>
                        <span className="corr">
                          Be<span className="orig">ſ</span>
                          <span className="corr">s</span>chäftigungen
                        </span>{" "}
                        oft unfähig macht.
                      </span>
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "80px",
                    paddingLeft: "80px",
                    paddingBottom: "87px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <span className="liebe">
                    <p>
                      <span className="religion">
                        <span style={{ display: "inline-block" }} width="2em">
                          &nbsp;
                        </span>
                        Nein <span className="orig">ſ</span>
                        <span className="corr">s</span>o wollen wir es nicht
                        anfangen. <spann class="makierung">„Bethe und arbeite.“</spann>
                        <br className="lb" />{" "}
                        das i<span className="orig">ﬅ</span>
                        <span className="corr">st</span> das rechte Prä
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>ervatif gegen
                        Melancholie.<a id="mark.004.e">{/*anchor*/}</a>{" "}
                      </span>
                      – Ich will
                      <br className="lb" />{" "}
                      mich nun mit allem Fleiße dran geben, alles zu{" "}
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>udiren,
                      <br className="lb" />{" "}
                      was zum Fabrikwe<span className="orig">ſ</span>
                      <span className="corr">s</span>en gehört, weil ich meinem
                      guten
                      <br className="lb" />{" "}
                      Papa keine größere Freude machen kann
                      <span className="overwritten">.</span>
                      <span className="add">,</span> ich will alles
                      <br className="lb" />{" "}
                      thun was ich ihm an den Augen ab
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ehen kann, und ich bin
                      <br className="lb" />{" "}
                      überzeugt, er läßt mich{" "}
                      <sup className="sup" id="txt.add001">
                        dann
                      </sup>{" "}
                      keine Fehlbitte thun.
                    </p>
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      Auf die<span className="orig">ſ</span>
                      <span className="corr">s</span>e Wei
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e dünkt mich, können wir
                      die folgenden
                      <br className="lb" />{" "}
                      paar Jahre recht vergnügt verleben; wir wi
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>en ja Beide
                      <br className="lb" />{" "}
                      woran wir <span className="orig">ſ</span>
                      <span className="corr">s</span>ind, und un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ere Liebe wird im Stillen
                      immer
                      <br className="lb" />{" "}
                      mehr zunehmen. Von Deiner Treue bin ich nur zu{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ehr
                      <br className="lb" />{" "}
                      überzeugt, und auf mich kann
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> Du unter Gottes Bei
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>and ja
                      <br className="lb" />{" "}
                      auch zählen; – Dein Bild wird mich begleiten{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span> es hier,
                      <br className="lb" />{" "}
                      oder auf Rei<span className="orig">ſ</span>
                      <span className="corr">s</span>en.
                    </p>
                  </span>
                  <p>
                    <span className="liebe">
                      <span style={{ display: "inline-block" }} width="8em">
                        &nbsp;
                      </span>
                      <a id="teaser.part.002.s">{/*anchor*/}</a>Die
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er er
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>e Brief, den ich in meinem
                      Leben
                      <br className="lb" />{" "}
                      an{" "}
                      <span className="underline">meine</span>{" "}
                      <span className="underline">
                        Geliebte
                      </span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chreibe, i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>{" "}
                      ein wenig ern<span className="orig">ﬅ</span>
                      <span className="corr">st</span>haft aus<span className="orig">=</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      gefallen, nicht wahr liebe{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>
                      ?<a id="teaser.part.002.e">{/*anchor*/}</a>{" "}
                      <span className="orig">indeßen</span>
                      <span className="corr">Indessen</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>age ich es gerne
                      <br className="lb" />{" "}
                      wie’s mir ums Herze i<span className="orig">ﬅ</span>
                      <span className="corr">st</span>, und{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o gehts Dir auch das weiß
                      <br className="lb" />{" "}
                      ich; offen wollen wir dann auch immer mit einander
                      <br className="lb" />{" "}
                      reden, o es thut einem oft <span className="orig">ſ</span>
                      <span className="corr">s</span>o wohl, wenn man{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ein
                      <br className="lb" />{" "}
                      Herze aus<span className="orig">ſ</span>
                      <span className="corr">s</span>chütten kann!{" "}
                      <a id="mark.002.e">{/*anchor*/}</a>
                    </span>
                    {" "}
                    – Nun von was anderm:
                    <br className="lb" />{" "}
                    <span className="persName makierung">
                      <span className="abbr"> M.</span>
                      <span className="expan">
                        M<span className="ex">inchen</span>
                      </span>
                      {" "}Sparenberg{" "}
                    </span>
                    wird in einiger Zeit nach{" "}
                    <span className="g.rend.script.latin">Wesel </span> rei
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en,
                    <br className="lb" />{" "}
                    und dann den Winter bei Euch zubringen. Die
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>es
                    <br className="lb" />{" "}
                    letztere freut mich <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr für Dich; Ihr könnt dann
                    noch
                    <br className="lb" />{" "}
                    zuweilen von dem hie<span className="orig">ſ</span>
                    <span className="corr">s</span>igen We
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en zu
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ammen plaudern,
                    <br className="lb" />{" "}
                    und Du ha<span className="orig">ﬅ</span>
                    <span className="corr">st</span> für einige Zeit noch jemand
                    um Dich, dem
                    <br className="lb" />{" "}
                    un<span className="orig">ſ</span>
                    <span className="corr">s</span>ere Angelegenheit bekannt i
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>.
                  </p>
                  <span className="liebe">
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      <a id="mark.003.s">{/*anchor*/}</a>Ich glaube fa
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>,{" "}
                      <span className="g.rend.script.latin"><span className="makierung">Griesheim</span> </span>{" "}
                      hat in{" "}
                      <span className="placeName">Hagen</span> etwas ge<span className="orig">=</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      merkt, nicht wahr? <span className="orig">das</span>
                      <span className="corr">Das</span> thut{" "}
                      <span className="orig">indeßen</span>
                      <span className="corr">indessen</span> nichts, er wird es
                      <br className="lb" />{" "}
                      doch einmal be<span className="orig">ﬅ</span>
                      <span className="corr">st</span>immter gewahr werden.
                      <span style={{ display: "inline-block" }} width="2em">
                        &nbsp;
                      </span>
                      <span className="orig">Laße</span>
                      <span className="corr">Lasse</span>
                      <br className="lb" />{" "}
                      Du Dir aber nichts merken, denn es i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> wirklich{" "}
                      <span className="orig">beßer</span>
                      <span className="corr">besser</span>,<br className="lb" />{" "}
                      wenn alles für’s er<span className="orig">ﬅ</span>
                      <span className="corr">st</span>e noch ganz{" "}
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>ille bleibt; denn
                      <br className="lb" />{" "}
                      mein Papa darf meine Liebe zu Dir durchaus durch
                    </p>
                  </span>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "60px",
                    paddingLeft: "80px",
                    paddingBottom: "105px",
                  }}
                >
                  <span className="liebe">
                    {/* Insert Page 3 */}
                    <p>
                      keinen andern als durch mich erfahren,{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>on
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> würden wir
                      <br className="lb" />{" "}
                      un<span className="orig">ſ</span>
                      <span className="corr">s</span>erer Sache{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>elb
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chaden; und Deinem Vater{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>agte
                      <br className="lb" />{" "}
                      ich es auch gerne <span className="orig">ſ</span>
                      <span className="corr">s</span>elb
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>. –
                    </p>
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      Mit den Briefen{" "}
                      <span className="orig">müßen</span>
                      <span className="corr">müssen</span> wir ebenfalls alle
                      Vor<span className="orig">ſ</span>
                      <span className="corr">s</span>icht
                      <br className="lb" />{" "}
                      beobachten, und einander lieber nicht{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o häufig{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chreiben.
                      <br className="lb" />{" "}
                      Wenn ich doch nur jemand wüßte woran Du oder{" "}
                      <span className="persName">
                        <span className="abbr"> M.</span>
                        <span className="expan">
                          M<span className="ex">inchen</span>{" "}
                        </span>
                        <br className="lb" />{" "}
                        Sparenberg
                      </span>
                      {" "}die Briefe{" "}
                      <span className="g.rend.script.latin">
                        adressiren
                      </span>{" "}
                      könnte, wenn die letztere
                      <br className="lb" />{" "}
                      nicht mehr bei uns i<span className="orig">ﬅ</span>
                      <span className="corr">st</span>! Vielleicht muß es noch
                      Freund
                      <br className="lb" />{" "}
                      <span className="g.rend.script.latin">
                        <span className="makierung">Keetmann</span>{" "}
                      </span>{" "}
                      werden, der doch die Sache <span className="orig">ſ</span>
                      <span className="corr">s</span>chon ziemlich errathen
                      <br className="lb" />{" "}
                      hat, wie ich heute noch an ihm merkte; nun, auch hierzu
                      <br className="lb" />{" "}
                      wird <span className="orig">ſ</span>
                      <span className="corr">s</span>ich noch ein Ausweg finden.
                      <a id="mark.003.e">{/*anchor*/}</a>
                    </p>
                  </span>
                  <blockquote className="closer">
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      Jetzt <span className="orig">ſ</span>
                      <span className="corr">s</span>oll ich wohl{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o allgemach an’s{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chließen denken
                      <br className="lb" />{" "}
                      <span className="orig">müßen</span>
                      <span className="corr">müssen</span>, weil es{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chon ziemlich{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>pät i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>. Lebe dann
                      <br className="lb" />{" "}
                      innig geliebte{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>{" "}
                      recht wohl und vergnügt bei den
                      <br className="lb" />{" "}
                      Deinigen.{" "}
                      <span style={{ display: "inline-block" }} width="2em">
                        &nbsp;
                      </span>
                      {" "}
                      <span className="persName">
                        <span className="abbr"> M.</span>
                        <span className="expan">
                          M<span className="ex">inchen</span>
                        </span>
                        Sparenberg
                      </span>
                      {" "}hat mir ver<span className="orig">ſ</span>
                      <span className="corr">s</span>prochen, Dir
                      <br className="lb" />{" "}
                      <span className="date">morgen</span> ein Kleid zu kaufen,
                      und es Dir durch die
                      <br className="lb" />{" "}
                      <span className="orig">Ueberbringerinn</span>
                      <span className="corr">Überbringerin</span> die
                      <span className="overwritten">s</span>
                      <span className="add">
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>
                      </span>
                      e<span className="overwritten">d</span>
                      <span className="add">s</span> Briefs mitzu
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chicken. Nimm
                      <br className="lb" />{" "}
                      die<span className="orig">ſ</span>
                      <span className="corr">s</span>e Kleinigkeit dann als ein
                      Andenken von mir
                      <br className="lb" />{" "}
                      an, und erinnere Dich beim Tragen zuweilen des Gebers.
                      <br className="lb" />{" "}
                      Ich weiß meine{" "}
                      <span className="persName">
                        Eli<span className="orig">ſ</span>
                        <span className="corr">s</span>e
                      </span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chätzt ein Ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chenk nicht nach deßen
                      <br className="lb" />{" "}
                      Geldwerth, <span className="orig">ſ</span>
                      <span className="corr">s</span>ondern nach der Ab
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>icht die da
                      <span className="damage">
                        mi<span className="unclear">t</span>
                      </span>
                      {" "}verbunden
                      <br className="lb" />{" "}
                      war. – Punktum, Gedanken<span className="orig">ﬅ</span>
                      <span className="corr">st</span>rich! Für{" "}
                      <span className="date">heute</span> i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>s am Ende.
                      <br className="lb" />{" "}
                      Mein näch<span className="orig">ﬅ</span>
                      <span className="corr">st</span>er Brief wird lu
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>iger werden,{" "}
                      <span className="date">heute</span> <br className="lb" />{" "}
                      {" "}wollte es nicht recht gehen, und ich zwinge mich{" "}
                      <span className="overwritten">g</span>
                      <span className="add">n</span>icht gerne.
                    </p>
                  </blockquote>
                  <blockquote className="closer">
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      Verzeihe mir mein <span className="orig">ſ</span>
                      <span className="corr">s</span>chlechtes Schreiben, mein
                      <br className="lb" />{" "}
                      Federme<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>er i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> auf dem <span className="makierung">Comptoir</span>, die
                      Dinte <span className="orig">ſ</span>
                      <span className="corr">s</span>o dick wie
                      <br className="lb" />{" "}
                      Bre<span className="orig">ÿ</span>
<span className="corr">y</span>, und der Ti<span className="orig">ſ</span>
                      <span className="corr">s</span>ch wohl für{" "}
                      <span className="g.rend.script.latin">
                        <span className="makierung">Advocaten</span>
                      </span>{" "}
                      aber nicht für
                      <br className="lb" />{" "}
                      <span className="makierung">
                      Comptori<span className="orig">ﬅ</span>
                      <span className="corr">st</span>en</span>, die die Pulte gewohnt{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ind, eingerichtet.
                    </p>
                  </blockquote>
                  <blockquote className="closer">
                    <p>
                      <span style={{ display: "inline-block" }} width="4em">
                        &nbsp;
                      </span>
                      Nochmals lebe recht wohl. Der gute Gott{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span> mit
                      <br className="lb" />{" "}
                      Dir und
                    </p>
                  </blockquote>
                  <div className="closer">
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="signed-space" style={{paddingLeft: "320px",}}>
                      Deinem treuen
                      <br className="lb" />{" "}
                      <span style={{ display: "inline-block" }} width="7words">
                        &nbsp;
                      </span>
                      <br className="lb-detail" />
                      <span className="g.rend.script.latin">Friedrich</span>.
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>

          <div
            className="stellenerläuterung"
            style={{
              top: "1040px",
            }}
          >
            <hr />
            <label>Das waren […] verlebtest!</label>
            <p>
            Elise van Haar verbrachte den Sommer 1816 in Barmen. In dieser Zeit entstand die Zuneigung zwischen ihr und Friedrich Engels sen.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1945px",
            }}
          >
            <hr />
            <label>„Bethe und arbeite.“</label>
            <p>
            Das benediktinische Motto „ora et labora“ (bete und arbeite) könnte über die Katechismen des Theologen Johannes Brenz (1499–1570) Eingang in den Protestantismus gefunden haben. (Vgl. Oliver J. Kaftan: „Ora et labora – (k)ein benediktinisches Motto. Eine Spurensuche“. In: Erbe und Auftrag 90, 2014, 415–421.)
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2435px",
            }}
          >
            <hr />
            <label>Minchen Sparenberg</label>
            <p>
            Wilhelmine (Minchen) Elisabeth Sparenberg (1788–1841), langjährige Haushälterin bei Johann Caspar Engels (1753–1821), Friedrich Engels sen. (1796–1860) und Louise Snethlage, geb. Engels (1799–1845).
            </p>
          </div>


          <div
            className="stellenerläuterung"
            style={{
              top: "2580px",
            }}
          >
            <hr />
            <label>Griesheim</label>
            <p>
            Karl von Griesheim (1779–1859), Preußischer Offizier in Hamm. Ehemann von Friederike von Griesheim, geb. van Haar (1789–1880).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3211px",
            }}
          >
            <hr />
            <label>Keetman</label>
            <p>
            Johann Keetman (1793–1865), Kommerzienrat, ab 1823 Teilhaber des Bankhauses Johann Wichelhaus P. S. in Elberfeld. Freund von Friedrich Engels sen.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3762px",
            }}
          >
            <hr />
            <label>Advocaten</label>
            <p>
            Anwälte, Juristen.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3712px",
            }}
          >
            <hr />
            <label>Comptoir</label>
            <p>
            Kontor, Büro, Geschäftsräume der Kaufleute.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3762px",
            }}
          >
            <hr />
            <label>Comptoiristen</label>
            <p>
            Kaufleute.
            </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
