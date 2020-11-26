import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "22";
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
                <div
                  className="kuvert"
                  style={{ paddingTop: "220px", paddingBottom: "260px" }}
                  id="index.xml-body.1_div.1"
                >
                  <h2>
                    <span className="headingNumber">1. </span>
                  </h2>

                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-right">
                      <span className="address">
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        Herrn
                        <br />
                        <span style={{ display: "inline-block" }} width="1cm">
                          &nbsp;
                        </span>
                        <span style={{ display: "inline-block" }} width="1cm">
                          &nbsp;
                        </span>{" "}
                        Herrn
                        <span className="g.rend.script.latin">
                          Caspar Engels
                        </span>
                        <br />
                        <span style={{ display: "inline-block" }} width="2cm">
                          &nbsp;
                        </span>{" "}
                        zur eigenhändigen
                        <span style={{ display: "inline-block" }} width="15mm">
                          &nbsp;
                        </span>
                        im
                        <br />
                        <span style={{ display: "inline-block" }} width="2cm">
                          &nbsp;
                        </span>
                        <span style={{ textDecoration: "underline" }}>
                          Erbrechung
                        </span>
                        <span className="g.rend.script.latin">
                          <span style={{ textDecoration: "underline" }}>
                            Barmen
                          </span>
                        </span>
                        <br />
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "150px",
                    paddingLeft: "100px",
                    paddingBottom: "230px",
                  }}
                >
                   <p>
                  <span className="opener">
                    <span className="salute">
                      <a id="teaser.part.001.s">{/*anchor*/}</a>Liebﬅes beﬅes
                      Männchen! <a id="teaser.part.001.e">{/*anchor*/}</a>
                    </span>
                  </span>
                 
                    <a id="mark.002.s">{/*anchor*/}</a>Wie freue ich mich
                    <br className="lb" />
                    daß Du glücklich, geſund und munter zu
                    <br className="lb" />
                    <span className="orig">Hauße</span>
                    <span className="corr">Hause</span> gekom̅en biﬅ, und Dich
                    nachspan der <span className="orig">Reiße</span>
                    <span className="corr">Reise</span>
                    <br className="lb" />
                    ſo wohl befindeﬅ – der gütige Gott ſeÿe
                    <br className="lb" />
                    von ganzem Herzen dafür{" "}
                    <span className="orig">gedanckt</span>
                    <span className="corr">gedankt</span> daß Er
                    <br className="lb" />
                    Dich begleitet und vor Unglück bewahret
                    <br className="lb" />
                    hat – Er der liebevolle Menſchenhüter ſeÿe Dir
                    <br className="lb" />
                    dann auf Deiner nächﬅen <span className="orig">Reiße</span>
                    <span className="corr">Reise</span> hierhin auch
                    <br className="lb" />
                    wieder recht nahe und führe Dich doch geſund
                    <br className="lb" />
                    und wohl in meine Armen.<a id="mark.002.e">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="2cm">
                      &nbsp;
                    </span>
                    <a id="mark.003.s">{/*anchor*/}</a>Ja! mein
                    <br className="lb" />
                    beﬅer innig <span className="orig">geliebter</span>
                    <span className="corr">Geliebter</span>!
                    <a id="teaser.part.002.s">{/*anchor*/}</a>ofte w
                    <span className="overwritten">i</span>
                    <span className="add">⟨o⟩</span>ll
                    <span className="add" id="txt.add001">
                      ⟨en⟩
                    </span>
                    wir uns
                    <br className="lb" />
                    der überſchwenglich großen Liebe und Güte
                    <br className="lb" />
                    unſers lieben him̅liſchen Vaters
                    <span style={{ textDecoration: "line-through" }}>
                      dir
                    </span>{" "}
                    verge
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    genwärtigen, die Er uns auf ſo mannigfal
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    tige Art, und beſonders auch{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> wieder
                    <br className="lb" />
                    beÿ unſerm <span className="orig">HochzeitsFeﬅ</span>
                    <span className="corr">Hochzeitsfeﬅ</span> und die übrigen
                    <br className="lb" />
                    Tagen erwieſen hat; und uns gegenſeitig
                    <br className="lb" />
                    zum warmen herzlichen <span className="orig">Danck</span>
                    <span className="corr">Dank</span> dafür er
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    muntern.<a id="teaser.part.002.e">{/*anchor*/}</a> O! mein
                    lieber! ganz
                    <span className="orig">oﬀenbahr</span>
                    <span className="corr">oﬀenbar</span>
                    <br className="lb" />
                    ganz hell iﬅ es mir daß die Hand unſers
                    <br className="lb" />
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "100px",
                    paddingLeft: "70px",
                    paddingBottom: "225px",
                  }}
                >
                  <p>
                    guten Gottes mit uns war, und dieſe alles
                    <br className="lb" />
                    ſo in der beﬅen Ordnung gehalten hat.
                    <br className="lb" />
                    Gelobet ſeÿ dann Gott der unſer{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>
                    <br className="lb" />
                    nicht verworfen, noch ſeine Güte von uns
                    <br className="lb" />
                    gewendet hat
                    <span className="abbr">
                      (Ps<span className="orig">:</span>
                      <span className="corr">.</span>)
                    </span>
                    <span className="expan">
                      Ps<span className="ex">alm</span>
                    </span>{" "}
                    66,
                    <span className="abbr"> (vs)</span>
                    <span className="expan">
                      v<span className="ex">er</span>s
                    </span>{" "}
                    20.<a id="annot.001.e">{/*anchor*/}</a>
                    <a id="mark.001.e">{/*anchor*/}</a> Wann’s unsren
                    <br className="lb" />
                    lieben him̅lischen Vater <span className="orig">gefält</span>
                    <span className="corr">gefällt</span> uns gesund und wohl
                    <br className="lb" />
                    zu erhalten, dann mein Lieber! werden uns die
                    <br className="lb" />
                    lange Winter Abenden noch manche{" "}
                    <span className="orig">erquikende</span>
                    <span className="corr">erquickende</span> Seel
                    <span className="orig">
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    </span>
                    <span className="corr">
                      <br className="lb" />
                    </span>
                    erhebende
                    <span className="orig">Freüden</span>
                    <span className="corr">Freuden</span> gewähren, wann wir
                    dann so
                    <br className="lb" />
                    mit völliger Ruhe die lange Reihe von Wohlthaten
                    <br className="lb" />
                    durchgehen und uns ins{" "}
                    <span className="orig">Gedächtnäß</span>
                    <span className="corr">Gedächtniß</span> zurück
                    <span style={{ display: "inline-block" }}>&nbsp;</span>rufen
                    die
                    <br className="lb" />
                    wir durch die Güte unsers großen Gottes erfahren
                    <br className="lb" />
                    haben – O! Wie wohl wie innig wohl wird's uns
                    <br className="lb" />
                    dann beÿ'm neuen Antrieb zum wiederholten
                    <br className="lb" />
                    gemeinschaftlichen <span className="orig">Danck</span>
                    <span className="corr">Dank</span> werden, und wir werden
                    <br className="lb" />
                    unsere Seelen durch Erfahrung der Liebe, Güte und
                    <br className="lb" />
                    <span className="orig">Hülﬀe</span>
                    <span className="corr">Hülfe</span> Gottes, zum Glauben,{" "}
                    <span className="orig">hoﬀen</span>
                    <span className="corr">Hoﬀen</span> und Ver
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    trauen <span className="orig">geﬅärckt</span>
                    <span className="corr">geﬅärkt</span> werden!
                  </p>
                  <p>
                    Von meiner Gesundheit,{" "}
                    <span className="orig">heiterkeit</span>
                    <span className="corr">Heiterkeit</span> und Ruhe kann
                    <br className="lb" />
                    ich Dir zärtlich geliebter Mann! die beﬅe Nachricht
                    <br className="lb" />
                    geben – denn ich genieße Gottlob! Alle diese
                    <br className="lb" />
                    große Vorzügen – die Erfahrung der{" "}
                    <span className="orig">Hülﬀe</span>
                    <span className="corr">Hülfe</span> Gottes
                    <br className="lb" />
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
