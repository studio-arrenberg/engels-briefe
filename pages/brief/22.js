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
                      <a id="teaser.part.001.s">{/*anchor*/}</a>Lieb<span className="orig">ﬅ</span><span className="corr">st</span>es be<span className="orig">ﬅ</span><span className="corr">st</span>es
                      Männchen! <a id="teaser.part.001.e">{/*anchor*/}</a>
                    </span>
                  </span>
                 
                    <a id="mark.002.s">{/*anchor*/}</a>Wie freue ich mich
                    <br className="lb" />
                    daß Du glücklich, ge<span className="orig">ſ</span><span className="corr">s</span>und und munter zu
                    <br className="lb" />
                    <span className="orig">Hauße</span>
                    <span className="corr">Hause</span> gekom̅en bi<span className="orig">ﬅ</span><span className="corr">st</span>, und Dich
                    nachspan der <span className="orig">Reiße</span>
                    <span className="corr">Reise</span>
                    <br className="lb" />
                    <span className="orig">ſ</span><span className="corr">s</span>o wohl befinde<span className="orig">ﬅ</span><span className="corr">st</span> – der gütige Gott <span className="orig">ſ</span><span className="corr">s</span>eÿe
                    <br className="lb" />
                    von ganzem Herzen dafür{" "}
                    <span className="orig">gedanckt</span>
                    <span className="corr">gedankt</span> daß Er
                    <br className="lb" />
                    Dich begleitet und vor Unglück bewahret
                    <br className="lb" />
                    hat – Er der liebevolle Men<span className="orig">ſ</span><span className="corr">s</span>chenhüter <span className="orig">ſ</span><span className="corr">s</span>eÿe Dir
                    <br className="lb" />
                    dann auf Deiner näch<span className="orig">ﬅ</span><span className="corr">st</span>en <span className="orig">Reiße</span>
                    <span className="corr">Reise</span> hierhin auch
                    <br className="lb" />
                    wieder recht nahe und führe Dich doch ge<span className="orig">ſ</span><span className="corr">s</span>und
                    <br className="lb" />
                    und wohl in meine Armen.<a id="mark.002.e">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="2cm">
                      &nbsp;
                    </span>
                    <a id="mark.003.s">{/*anchor*/}</a>Ja! mein
                    <br className="lb" />
                    be<span className="orig">ﬅ</span><span className="corr">st</span>er innig <span className="orig">geliebter</span>
                    <span className="corr">Geliebter</span>!
                    <a id="teaser.part.002.s">{/*anchor*/}</a>ofte w
                    <span className="overwritten">i</span>
                    <span className="add">⟨o⟩</span>ll
                    <span className="add" id="txt.add001">
                      ⟨en⟩
                    </span>
                    wir uns
                    <br className="lb" />
                    der über<span className="orig">ſ</span><span className="corr">s</span>chwenglich großen Liebe und Güte
                    <br className="lb" />
                    un<span className="orig">ſ</span><span className="corr">s</span>ers lieben him̅li<span className="orig">ſ</span><span className="corr">s</span>chen Vaters
                    <span style={{ textDecoration: "line-through" }}>
                      dir
                    </span>{" "}
                    verge
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    genwärtigen, die Er uns auf <span className="orig">ſ</span><span className="corr">s</span>o mannigfal
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    tige Art, und be<span className="orig">ſ</span><span className="corr">s</span>onders auch{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> wieder
                    <br className="lb" />
                    beÿ un<span className="orig">ſ</span><span className="corr">s</span>erm <span className="orig">HochzeitsFe<span className="orig">ﬅ</span><span className="corr">st</span></span>
                    <span className="corr">Hochzeitsfe<span className="orig">ﬅ</span><span className="corr">st</span></span> und die übrigen
                    <br className="lb" />
                    Tagen erwie<span className="orig">ſ</span><span className="corr">s</span>en hat; und uns gegen<span className="orig">ſ</span><span className="corr">s</span>eitig
                    <br className="lb" />
                    zum warmen herzlichen <span className="orig">Danck</span>
                    <span className="corr">Dank</span> dafür er
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    muntern.<a id="teaser.part.002.e">{/*anchor*/}</a> O! mein
                    lieber! ganz
                    <span className="orig">oﬀenbahr</span>
                    <span className="corr">oﬀenbar</span>
                    <br className="lb" />
                    ganz hell i<span className="orig">ﬅ</span><span className="corr">st</span> es mir daß die Hand un<span className="orig">ſ</span><span className="corr">s</span>ers
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
                    guten Gottes mit uns war, und die<span className="orig">ſ</span><span className="corr">s</span>e alles
                    <br className="lb" />
                    <span className="orig">ſ</span><span className="corr">s</span>o in der be<span className="orig">ﬅ</span><span className="corr">st</span>en Ordnung gehalten hat.
                    <br className="lb" />
                    Gelobet <span className="orig">ſ</span><span className="corr">s</span>eÿ dann Gott der un<span className="orig">ſ</span><span className="corr">s</span>er{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>
                    <br className="lb" />
                    nicht verworfen, noch <span className="orig">ſ</span><span className="corr">s</span>eine Güte von uns
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
                    trauen <span className="orig">ge<span className="orig">ﬅ</span><span className="corr">st</span>ärckt</span>
                    <span className="corr">ge<span className="orig">ﬅ</span><span className="corr">st</span>ärkt</span> werden!
                  </p>
                  <p>
                    Von meiner Gesundheit,{" "}
                    <span className="orig">heiterkeit</span>
                    <span className="corr">Heiterkeit</span> und Ruhe kann
                    <br className="lb" />
                    ich Dir zärtlich geliebter Mann! die be<span className="orig">ﬅ</span><span className="corr">st</span>e Nachricht
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
