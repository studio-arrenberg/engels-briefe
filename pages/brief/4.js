import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "4";
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
        <div>
          {/*TEI front*/}
          <div className="toc toc_body">
            <div className="toc toc_back">
              {/*TEI body*/}
              <div className="tei_body">
                <section
                  className="kuvert"
                  id="index.xml-body.1_div.1"
                  style={{ paddingTop: "300px", paddingBottom: "290px" }}
                >
                  An Herrn{" "}
                  <span className="g.rend.script.latin">Caspar Engels</span>
                  <br />{" "}
                  <span style={{ display: "inline-block" }} width="45mm">
                    &nbsp;
                  </span>{" "}
                  <small> Zu eignen Händen.</small>
                  <br />
                </section>
              </div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "115px",
                    paddingLeft: "80px",
                    paddingBottom: "10px",
                  }}
                >
                  <p>
                  <span className="opener">
                    <span className="salute indent-negativ">Mein werther Freund! </span>
                  </span>
                  
                    Nach meinem Wun<span className="orig">ſ</span><span className="corr">s</span>ch, und nach meiner Hoffnung
                    <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>ind Sie, wenn Sie die<span className="orig">ſ</span><span className="corr">s</span>en Brief
                    erhalten, von Ihrer <span className="makierung">Sÿnodal-Rei<span className="orig">ſ</span><span className="corr">s</span>e</span>
                    <br className="lb" /> ge<span className="orig">ſ</span><span className="corr">s</span>und und{" "}
                    <span className="orig">glüklich</span>
                    <span className="corr">glücklich</span>
                    <span className="orig">zurückgekom̅en;</span>
                    <span className="corr">zurückgekommen;</span>
                     {" "}
                    <a id="mark.002.s">{/*anchor*/}</a>
                    <a id="teaser.part.002.s">{/*anchor*/}</a>
                    <span className="liebe active">
                      Ihrer Bitte, daß ich Ihnen eine
                      <br className="lb" /> etwaige Be<span className="orig">ſ</span><span className="corr">s</span>chreibung des{" "}
                      <span className="g.rend.script.latin">Characters</span>,
                      der Ge<span className="orig">ſ</span><span className="corr">s</span>innungen, und der Familie
                      <br className="lb" /> der{" "}
                      <span className="abbr"> Demoi<span className="orig">ſ</span><span className="corr">s</span>.</span>
                      
                      <span className="makierung">
                      <span className="expan">
                        Demoi<span className="orig">ſ</span><span className="corr">s</span><span className="ex">elle</span>
                      </span>{" "}
                      </span>
                      <span className="g.rend.script.latin">Noot</span> machen
                      mögte, will ich denn nun, <span className="orig">ſ</span><span className="corr">s</span>o gut ich{" "}
                      <span className="orig">kan</span>
                      <span className="corr">kann</span>,<br className="lb" />{" "}
                      ent<span className="orig">ſ</span><span className="corr">s</span>prechen:<a id="teaser.part.002.e">{/*anchor*/}</a>
                    </span>{" "}
                    ihr natürlicher{" "}
                    <span className="g.rend.script.latin">Character</span> i<span className="orig">ﬅ</span><span className="corr">st</span>{" "}
                    aufrichtig, gefällig, <span className="orig">zuvorkom̅end,</span><span className="corr">zuvorkommmend,</span>
                    <br className="lb" /> und gar nichts fordernd, <span className="makierung">meine Frau</span>,
                    und ich, wir haben in der
                    <br className="lb" /> <span className="orig">gantzen</span>
                    <span className="corr">ganzen</span> Zeit un<span className="orig">ſ</span><span className="corr">s</span>ers Umgangs mit
                    ihr, gar nichts <span className="orig">falsches</span>
                    <span className="corr">Falsches</span> und{" "}
                    <span className="orig">ungerades</span>
                    <span className="corr">Ungerades</span>
                    <br className="lb" /> an ihr bemerkt; etwas zu <span className="orig">ſ</span><span className="corr">s</span>agen, das
                    ihr nicht von <span className="orig">Hertzen gienge</span>
                    <span className="corr">Herzen ginge</span>,
                    <br className="lb" /> würde ihr, wie ich vermuthe, überaus{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chwer werden — aber gar nicht
                    <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>chwer wird es ihr, <span className="orig">ſ</span><span className="corr">s</span>ich nach andern,{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>oweit es die Aufrichtigkeit zuläßt,
                    <br className="lb" /> zu{" "}
                    <span className="makierung"><span className="g.rend.script.latin">accommodi</span>ren</span>;{" "}
                    auf ihren Sinn eigenwillig zu be<span className="orig">ﬅ</span><span className="corr">st</span>ehen, <span className="orig">ſ</span><span className="corr">s</span>cheint ihr
                    <br className="lb" /> gar nicht eigen, <span className="orig">ſ</span><span className="corr">s</span>ondern
                    Nachgiebigkeit, und leichte Lenk<span className="orig">ſ</span><span className="corr">s</span>amkeit ein
                    <br className="lb" /> Hauptzug ihrer{" "}
                    <span className="g.rend.script.latin">Characters</span> zu{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>
                    
                    <span className="orig">eÿn, dabeÿ i</span>
                    <span className="corr">eyn, dabey i</span> 
                    
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> <span className="orig">ſ</span>
                    
                    <span className="corr">s</span>ie aber von aller 
                    <span className="orig">Schmeicheleÿ</span>
                    <span className="corr">Schmeicheley</span> 
                    
                    <br className="lb" /> und 
                    <span className="orig">Heucheleÿ,</span>
                    <span className="corr">Heucheley,</span> 
                     <span className="orig">ſ</span><span className="corr">s</span>o wie von allem{" "}
                    <span className="orig">Stoltz</span>
                    <span className="corr">Stolz</span> weit entfernt;{" "}
                    <span className="makierung">
                    <span className="orig">ſ</span><span className="corr">s</span>ie hat
                    eine
                    <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>chlechte{" "}
                    <span className="orig">Meÿnung</span>
                    <span className="corr">Meinung</span> von <span className="orig">ſ</span><span className="corr">s</span>ich <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span></span>, und
                    irrt <span className="orig">ſ</span><span className="corr">s</span>ich <span className="orig">darinn</span>
                    <span className="corr">darin</span> oft zu ihrem
                    <br className="lb" /> Nachtheil, indem <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>ich viel weniger
                    Gutes zuschreibt, und zutraut, als
                    <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>ie würklich hat; die<span className="orig">ſ</span><span className="corr">s</span>er niedrige Sinn
                    macht dann auch, daß <span className="orig">ſ</span><span className="corr">s</span>ie wenig
                    <br className="lb" /> von andern fordert, und weit mehr
                    daran denkt, wie <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>ich andern
                    <br className="lb" /> gefällig machen, und ihnen zur Freude{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>
                    <span className="orig">eÿn möge;</span><span className="corr">eyn möge;</span>
                     {" "}— <a id="mark.001.s">{/*anchor*/}</a>
                    <span className="religion active">
                      Was ihre Ge<span className="orig">ſ</span><span className="corr">s</span>innungen
                      <br className="lb" />{" "}
                      <span className="orig">betrift</span>
                      <span className="corr">betrifft</span>, <span className="orig">ſ</span><span className="corr">s</span>o glaube ich, es{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>agen zu dürfen, daß ihr Chri<span className="orig">ﬅ</span><span className="corr">st</span>enthum aufrichtig,
                      <br className="lb" /> und nicht nur oberflächig, <span className="orig">ſ</span><span className="corr">s</span>ondern
                      fe<span className="orig">ﬅ</span><span className="corr">st</span> und tief gegründet i<span className="orig">ﬅ</span><span className="corr">st</span>; Es i<span className="orig">ﬅ</span><span className="corr">st</span> ihr
                      <br className="lb" /> ern<span className="orig">ﬅ</span><span className="corr">st</span>lich um ihre Selb<span className="orig">ﬅ</span><span className="corr">st</span>be<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>erung zu
                      thun, und <span className="orig">ſ</span><span className="corr">s</span>ie hat würklich{" "}
                      <span className="orig">darinn</span>
                      <span className="corr">darin</span> <span className="orig">ſ</span><span className="corr">s</span>chon{" "}
                      <span style={{ display: "inline-block" }} width="10cm">
                        &nbsp;
                      </span>
                      <br />
                      <span className="text-right hide-normalisiert">Fort=<br />
                      –</span>
                      
                      <br className="lb" />
                      <span style={{ display: "inline-block" }} width="10cm">
                        &nbsp;
                      </span>
                    </span>
                  </p>{" "}
                </div>

                <div
                  className="page"
                  style={{
                    marginTop: "40px",
                    paddingTop: "120px",
                    paddingLeft: "70px",
                    paddingBottom: "30px",
                  }}
                >
                  <p>
                    <span className="religion active">
                      Fort<span className="orig">ſ</span><span className="corr">s</span>chritte gemacht; daß ihr das Wohlgefallen Gottes, und
                      ihre innre
                      <br className="lb" /> Ruhe mehr werth i<span className="orig">ﬅ</span><span className="corr">st</span>, als alle Lu<span className="orig">ﬅ</span><span className="corr">st</span>{" "}
                      die<span className="orig">ſ</span><span className="corr">s</span>er Welt, und alle{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        Lu<span className="orig">ﬅ</span><span className="corr">st</span>barkeit</span>
                      <span className="expan">
                        Lu<span className="orig">ﬅ</span><span className="corr">st</span>barkeit<span className="ex">en</span>
                      </span>
                      ,<br className="lb" /> davon hat <span className="orig">ſ</span><span className="corr">s</span>ie ver<span className="orig">ſ</span><span className="corr">s</span>chiedene <span className="orig">ſ</span><span className="corr">s</span>ehr
                      ent<span className="orig">ſ</span><span className="corr">s</span>cheidende Proben abgelegt;{" "}
                      <span className="orig">Schon</span>
                      <span className="corr">schon</span>
                      <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>eit einigen Jahren nahm <span className="orig">ſ</span><span className="corr">s</span>ie an
                      denen Vergnügungen, die in{" "}
                      <span className="g.rend.script.latin">Ruhrorth</span>,
                      <br className="lb" /> und in{" "}
                      <span className="g.rend.script.latin">Hagen</span> üblich{" "}
                      {" "}<span className="orig">ſ</span><span className="corr">s</span>ind, nicht mehr Theil, weil <span className="orig">ſ</span><span className="corr">s</span>ie die<span className="orig">ſ</span><span className="corr">s</span>elbe einem
                      <br className="lb" /> Chri<span className="orig">ﬅ</span><span className="corr">st</span>en unan<span className="orig">ﬅ</span><span className="corr">st</span>ändig hielt — ;
                      <a id="mark.001.e">{/*anchor*/}</a>
                    </span>{" "}
                    Was zuletzt ihre{" "}
                    <span className="g.rend.script.latin">Familie</span>{" "}
                    <span className="orig">betrift,</span><span className="corr">betrifft,</span>
                     <span className="orig">ſ</span><span className="corr">s</span>o
                    <br className="lb" /> i<span className="orig">ﬅ</span><span className="corr">st</span> in der<span className="orig">ſ</span><span className="corr">s</span>elben keine{" "}
                    <span className="orig">Per<span className="orig">ſ</span><span className="corr">s</span>ohn</span>
                    <span className="corr">Person</span>, deren <span className="orig">ſ</span><span className="corr">s</span>ie Ur<span className="orig">ſ</span><span className="corr">s</span>ache
                    hätte, <span className="orig">ſ</span><span className="corr">s</span>ich zu <span className="orig">ſ</span><span className="corr">s</span>chämen.
                    <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>ie hat, <span className="orig">ſ</span><span className="corr">s</span>oviel ich weiß, 3 Brüder und
                    2 Schwe<span className="orig">ﬅ</span><span className="corr">st</span>ern; der <span className="makierung">ältere Bruder</span> <br className="lb" /> i<span className="orig">ﬅ</span><span className="corr">st</span>
                    <span className="makierung">
                    OberSaltz<span className="orig"></span>
                    <span className="corr">-</span>
                    <span className="g.rend.script.latin">Inspector</span></span>, und
                    Zoll-Einnehmer in{" "}
                    <span className="g.rend.script.latin">Ruhrorth</span>; <span className="orig">Zweÿ</span>
                    <span className="corr">Zwey</span> {" "}
                    <span className="orig">ſ</span><span className="corr">s</span>ehr ein =
                    <br className="g.enc.tagsdecl.hyphenation.eq" />trägliche
                    und ehrenvolle <span className="makierung">Bedienungen</span>; <span className="orig">ſ</span>
                    <span className="makierung">
                    <span className="corr">s</span>eine Frau </span>i<span className="orig">ﬅ</span><span className="corr">st</span> eine{" "}
                    <span className="g.rend.script.latin">Mauritz</span> von{" "}
                    <span className="placeName">We<span className="orig">ſ</span><span className="corr">s</span>el</span>;
                    <br className="lb" /> Der{" "}
                      Zwe
                      <span className="orig">
                        <span className="corr">y</span>te
                      </span>
                      <span className="corr">
                        zwe
                        <span className="orig">
                          <span className="corr">y</span>te
                        </span>{" "}
                        </span>{" "}
                        <span className="makierung">Bruder</span> i<span className="orig">ﬅ</span><span className="corr">st</span> <span className="makierung"><span className="orig">Creiß Einnehmer</span>
                        <span className="corr">Kreis-Einnehmer</span></span>{" "}
                        gleichfalls in{" "}
                        <span className="g.rend.script.latin">Ruhrorth</span>,
                        und mit
                        <br className="lb" /> einer <span className="makierung">Karthaus</span> von{" "}
                        <span className="g.rend.script.latin">Hagen</span>{" "}
                        verheirathet; <span className="makierung">der dritte</span> noch unverheirathete
                        <br className="lb" /> be<span className="orig">ſ</span><span className="corr">s</span>orgt die Ge<span className="orig">ſ</span><span className="corr">s</span>chäfte der <span className="makierung">älteren
                        Schwe<span className="orig">ﬅ</span><span className="corr">st</span>er,</span> die{" "}
                          <span className="corr">eine</span>{" "}
                          <span className="g.rend.script.latin">Spedition</span>{" "}
                          hat, und gleichfalls
                          <br className="lb" /> in{" "}
                          <span className="g.rend.script.latin">Ruhrorth</span>{" "}
                          wohnt — ; die<span className="orig">ſ</span><span className="corr">s</span>e i<span className="orig">ﬅ</span><span className="corr">st</span> durch die{" "}
                          <span className="abbr"> Demo.</span>
                          <span className="expan">
                            Demo<span className="ex">i<span className="orig">ſ</span><span className="corr">s</span>elle</span>
                          </span>{" "}
                          <span className="g.rend.script.latin">Noot</span>{" "}
                          aufmerk<span className="orig">ſ</span><span className="corr">s</span>ahm auf <span className="orig">ſ</span><span className="corr">s</span>ich
                          <br className="lb" /> <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span>, und auf Gottes Wort
                          geworden, und hegt den ern<span className="orig">ﬅ</span><span className="corr">st</span>lichen Wun<span className="orig">ſ</span><span className="corr">s</span>ch <span className="orig">ſ</span><span className="corr">s</span>ich
                          <br className="lb" /> zu be<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>ern; die <span className="makierung">jüngere Schwe<span className="orig">ﬅ</span><span className="corr">st</span>er</span>
                          i<span className="orig">ﬅ</span><span className="corr">st</span>{" "} an Herrn{" "}
                          <span className="g.rend.script.latin">
                            <span className="makierung">Doctor <span className="persName">Maercker</span></span>
                          </span>{" "}
                          in <span className="g.rend.script.latin">Hagen</span>{" "}verheirathet —;
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Dieß mein Werthe<span className="orig">ﬅ</span><span className="corr">st</span>er! wäre{" "}
                    <span className="orig">ohngefehr</span>
                    <span className="corr">ungefähr</span> das, was ich Ihnen in
                    An<span className="orig">ſ</span><span className="corr">s</span>ehung <br className="lb" /> der{" "}
                    <span className="abbr"> Dem.</span>
                    <span className="expan">
                      Dem<span className="ex">oi<span className="orig">ſ</span><span className="corr">s</span>elle</span>
                    </span>{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Noot</span>
                    </span>{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>agen könnte — ; Sie werden daraus <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span> den Schluß machen,
                    <br className="lb" /> daß <span className="orig">ſ</span><span className="corr">s</span>ie nicht zu den alltäglichen
                    Frauenzimmern gehört, <span className="orig">ſ</span><span className="corr">s</span>ondern zu denen,
                    <br className="lb" /> die man <span className="orig">ſ</span><span className="corr">s</span>elten antrift — be<span className="orig">ſ</span><span className="corr">s</span>onders in
                    den <span className="orig">itzigen</span>
                    <span className="corr">jetzigen</span> Zeiten, wo Eitelkeit
                    und
                    <br className="lb" />{" "}
                    <span className="orig">LeichtSinn</span>
                    <span className="corr">Leichtsinn</span> <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">ſ</span><span className="corr">s</span>ehr überhand
                    nimmt; <span className="orig">Nach</span>
                    <span className="makierung"><span className="corr">nach</span> meinem Urtheil{" "}
                    <span className="orig">kan</span>
                    <span className="corr">kann</span> ich nicht
                    <br className="lb" /> anders, als den Mann glücklich{" "}
                    {" "}<span className="orig">ſ</span><span className="corr">s</span>chätzen, der <span className="orig">ſ</span><span className="corr">s</span>ie zur Gattin bekömmt.</span>
                    <a id="mark.002.e">{/*anchor*/}</a>
                  </p>
                  <div className="closer indent-medium">
                    <span className="orig">meine</span>
                    <span className="corr">Meine</span> Frau und ich, wir grüßen
                    Sie auf das Herzlich<span className="orig">ﬅ</span><span className="corr">st</span>e, ich bin mit
                    <br className="lb" /> denen Ihren bekannten Ge<span className="orig">ſ</span><span className="corr">s</span>innungen.{" "}
                    <br className="lb" />{" "}
                    <span style={{ display: "inline-block" }} width="11cm">
                      &nbsp;
                    </span>{" "}

                    <div className="dateline" className="dateline-left">
                      <span className="placeName">
                        <span className="abbr"> D.</span>
                        <span className="expan">
                          D<span className="ex">ü<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>eldorf</span>
                        </span>
                      </span>{" "}
                      am <span className="date">12 Maÿ 1791</span>.
                    </div>{" "}
                    
                    </div>

                    
                    <div className="signed-right">
                    Ihr aufrichtiger Freund <br className="lb" />
                      <span className="persName">
                        <span className="abbr"> Fr.</span>
                        <span className="expan">
                          Fr<span className="ex">iedrich</span>
                        </span>{" "}
                        Hoffmann
                      </span>
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
              top: "749px",
            }}
          >
            <hr />
            <label>Sÿnodal-Reise</label>
            <p>
            Synode: auch Kirchenrat oder Konsistorium; bezeichnet die Versammlung der Geistlichen und Laien evangelischer Gemeinden einer Region. Zwischen dem 10. und 12. Mai 1791 fand in der Pfarrkirche zu Haan die bergische Provinzialsynode statt. Johann Caspar Engels erhielt am 3. April 1791 das Mandat für die Synode der Elberfelder Classis.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "830px",
            }}
          >
            <hr />
            <label>Demoiselle</label>
            <p>Frz. „Fräulein“.</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "891px;",
            }}
          >
            <hr />
            <label>meine Frau</label>
            <p>Clara Friederika Hoffmann, geb. Klein (1753–1823).</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1035px",
            }}
          >
            <hr />
            <label>accomodiren</label>
            <p>Sich anpassen.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1147px",
            }}
          >
            <hr />
            <label>eine schlechte Meynung von sich selbst</label>
            <p>Mangelndes bzw. schwach ausgeprägtes Selbstbewusstsein gilt hier nicht nur als Ausdruck exemplarischer christlicher Demut, sondern gemäß zeitgenössischen Geschlechtervorstellungen auch insbesondere als eine weibliche Tugend.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1918px",
            }}
          >
            <hr />
            <label>ältere Bruder</label>
            <p>Diederich Walter Noot (1746–1817).</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1932px",
            }}
          >
            <hr />
            <label>OberSaltz-Inspector</label>
            <p>Obrigkeitlicher Kontrolleur des Salzhandels.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1972px",
            }}
          >
            <hr />
            <label>Bedienungen</label>
            <p>Hier: Obrigkeitliche Stellungen.</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1983px",
            }}
          >
            <hr />
            <label>seine Frau</label>
            <p>Anna Catharina Noot, geb. Mauritz (1756–1825).</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1850px",
            }}
          >
            <hr />
            <label>zweyte Bruder</label>
            <p>Gerhard Peter Noot (1751–1836).</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2040px",
            }}
          >
            <hr />
            <label>Creiß-Einnehmer</label>
            <p>Vereidigter Einnehmer der Kreissteuern.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2085px",
            }}
          >
            <hr />
            <label>Karthaus</label>
            <p>Anna Clara Maria Noot, geb. Karthaus (1750–1860).</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2040px",
            }}
          >
            <hr />
            <label>der dritte</label>
            <p>Samuel Wilhelm Noot (1756–1828), Kaufmann in Ruhrort.</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2090px",
            }}
          >
            <hr />
            <label>älteren Schwester</label>
            <p>Johanna Sophia Aletta Haniel, geb. Noot (1742–1815).</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2130px",
            }}
          >
            <hr />
            <label>jüngere Schwester</label>
            <p>Maria Elisabeth Märker, geb. Noot (1753–1831).</p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2180px",
            }}
          >
            <hr />
            <label>Doctor Maercker</label>
            <p> Johann Christoph Märker (1753–1830), Dr. jur., Notar und Justizkommissar in Hagen.</p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2200px",
            }}
          >
            <hr />
            <label>Nach meinem Urtheil […] zur Gattinn bekömmt.</label>
            <p> Johann Caspar Engels’ briefliche Erkundigungen über Luise Noot zum Zwecke der Entscheidungsfindung, ob er sie zur Frau nehmen solle oder nicht, ist Ausdruck einer vormodernen Liebes- und Ehekonzeption, der zufolge die Partnerschaft (noch) nicht in einer individualisierenden gegenseitigen ‚Liebe‘ ihren Legitimationsgrund findet, sondern in einem Katalog angebbarer positiver Merkmale der Person (wie Tugend, Frömmigkeit, soziale Reputation etc.) Siehe hierzu auch: Thorsten Dette: „Ach Gott, welch ein seliges Gefühl ist doch die Liebe“: Brautbriefe der Familie Engels im Kontext zeitgenössischer Standesschranken und Hochzeitsbräuche, in: Geschichte im Wuppertal (GIW) 24, 2015, 6–22.
</p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
