import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "21";
  });

  const key = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);

  const [isStellen, setStellen] = useState(true);
  function stellen(state) {
    // console.log("Stellen: " + state);
    setStellen(state);
    // alert(isStellen);
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
                  style={{ paddingTop: "220px", paddingBottom: "235px" }}
                >
                  {" "}
                  <h2>
                    <span className="headingNumber">1. </span>
                  </h2>
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-left">
                      <span className="address">
                        <span className="small">
                          <span className="g.rend.script.latin">Madame</span>
                          <br />{" "}
                          <span className="abbr">
                            {" "}Mad
                            <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                              <sup>e</sup>
                              ..
                            </span>
                          </span>
                          <span className="expan">
                            Mad<sup class="double-underline">e</sup><span className="ex">ame</span>
                          </span>{" "}
                        </span>
                        <span className="persName">Louise Engels <span className="small"> <span className="makierung">né</span> Nooth</span></span>
                        <br />{" "}
                        <span style={{ display: "inline-block" }} width="6cm">
                          &nbsp;
                        </span>
                        <span className="g.rend.script.latin xsmall"   style={{ marginLeft: "130px" }}>à</span>
                        <br />{" "}
                        <span
                          style={{ display: "inline-block" }}
                          width="2lines"
                        >
                          &nbsp;
                        </span>{" "}
                       
                        <span className="g.rend.script.latin" style={{ marginLeft: "55px" }}>Ruhrorth</span>
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
                    paddingTop: "95px",
                    paddingLeft: "80px",
                    paddingBottom: "240px",
                  }}
                >
                  <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e" />
                  <span type="religion" from="#mark.003.s" to="#mark.003.e" />
                  <span
                    type="geschaeftliches"
                    from="#mark.004.s"
                    to="#mark.004.e"
                  />

                  <p>
                    <span className="reisen active">
                      Meine Liebe <span className="orig">theüre</span>
                      <span className="corr">theure</span>{" "}
                      Gattin! <span className="orig">noch</span>
                      <span className="corr">Noch</span>
                      {" "}ehe ich mich <span className="orig">ſ</span>
                      <span className="corr">s</span>chlafen
                      <br className="lb" />{" "} <span className="orig">Lege</span>
                      <span className="corr">lege</span>, muß ich dir{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>agen: daß ich unter der
                      Güte Gottes
                      <br className="lb" />{" "} recht vergnügt{" "}
                      <span className="makierung"><span className="orig">gereißt</span>
                      <span className="corr">gereist</span></span> und wohlbehalten
                      angekom̅en bin.
                      <br className="lb" />{" "}{" "}
                      <span className="orig">
                        ju<span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">Just</span> um 9 Uhr, wie ich dir
                      auch ge<span className="orig">ſ</span>
                      <span className="corr">s</span>agt hatte.
                      <span className="liebe-ehe religion ">{" "}
                        Du,
                        <br className="lb" />{" "} meine be
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>e innig
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span> Verbundene, wir
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                        {" "}mit mir dafür{" "}
                        <br className="lb" />{" "}
                        den <span className="abbr"> L.</span>
                        <span className="expan">
                          L<span className="ex">ieben</span>
                        </span>
                        {" "}Him̅li<span className="orig">ſ</span>
                        <span className="corr">s</span>chen Vater{" "}
                        <span className="orig">
                          Prei<span className="orig">ſ</span>
                          <span className="corr">s</span>en
                        </span>
                        <span className="corr">preisen</span>, der mich nun{" "}
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>o{" "}
                        <span className="orig">oﬀte</span>
                        <span className="corr">ofte</span>
                        <br className="lb" />{" "} im̅er{" "}
                        <span className="orig">Glüklich</span>
                        <span className="corr">glücklich</span> und unver
                        <span className="orig">ſ</span>
                        <span className="corr">s</span>ehrt hin und her
                        gebracht, und
                        <br className="lb" />{" "} dadurch noch meinen Cörper ge
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>ärkt hat.
                        <br className="lb" />{" "}
                      </span>
                    </span>
                    <span className="liebe-ehe religion ">
                      wie wir<span className="orig">ﬅ</span>
                      <span className="corr">st</span> du mich im Gei
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> begleitet und für mich
                      <br className="lb" />{" "}{" "}
                      <span className="orig">gebäten</span>
                      <span className="corr">gebeten</span> haben!{" "}
                      <span className="orig">habe</span>
                      <span className="corr">Habe</span> herzlich{" "}
                      <span className="orig">dank</span>
                      <span className="corr">Dank</span> dafür, Liebe{" "}
                      <span className="orig">
                        be<span className="orig">ﬅ</span>
                        <span className="corr">st</span>e
                      </span>
                      <span className="corr">Beste</span>!<br className="lb" />{" "}{" "}
                      mein inner<span className="orig">ﬅ</span>
                      <span className="corr">st</span>er Wun
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ch und mein{" "}
                      <span className="orig">Gebät</span>
                      <span className="corr">Gebet</span> zu Gott i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>: daß
                      <br className="lb" />{" "}
                      du dich eben so wohl befinde
                      <span className="overwritten">n</span>
                      <span className="add">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>
                        möge<span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      , und deine Ruhe
                      <br className="lb" />{" "} und dein Wohlbefinden{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ich vermehren möge.{" "}
                      <span className="orig">ja</span>
                      <span className="corr">Ja</span> meine
                      <br className="lb" />{" "} herzlich{" "}
                      <span className="orig">geliebte</span>
                      <span className="corr">Geliebte</span>! ich fühle es im̅er
                      mehr in meiner Seele
                      <br className="lb" />{" "} wie groß die Liebe, Güte und Auf
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>icht un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>res Gottes
                      <br className="lb" />{" "} in den vergangenen Tagen über uns
                      gewe<span className="orig">ſ</span>
                      <span className="corr">s</span>en; daß
                      <br className="lb" />{" "} alles{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o ordentlich und erwün
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>cht hergegangen, und alle
                      <br className="lb" />{" "} Freunde{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o befriedigt, ja hoch
                      zufrieden <span className="orig">ſ</span>
                      <span className="corr">s</span>ind, i
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>eine
                      <br className="lb" />{" "}{" "}
                      <span className="orig">mitwürkung</span>
                      <span className="corr">Mitwirkung</span>, die wir
                      erkennen, und Ihm verdanken
                      <br className="lb" />{" "} wollen.{" "}
                      <span className="orig">du</span>
                      <span className="corr">Du</span> meine ganz{" "}
                      <span className="orig">geliebte</span>
                      <span className="corr">Geliebte</span>! wir
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span> gerne mit mir
                      <br className="lb" />{" "} <span className="orig">ſ</span>
                      <span className="corr">s</span>agen: bis hiehin hat uns
                      der Herr geholfen! und
                      <br className="lb" />{" "} darum wollen wir un
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ren Herzen zurufen,{" "}
                      <span className="orig">Vergiß</span>
                      <span className="corr">vergiß</span>
                      <br className="lb" />{" "} nicht was er uns{" "}
                      <span className="orig">gutes</span>
                      <span className="corr">Gutes</span> gethan; mit voller
                      kindlicher
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "55px",
                    paddingLeft: "80px",
                    paddingBottom: "220px",
                  }}
                >
                  <span className="liebe-ehe religion ">
                    <span className="orig">Hofnung</span>
                    <span className="corr">Hoffnung</span> wollen wirs Ihm
                    zutrauen, daß er uns ferner
                    <br className="lb" />{" "} bei<span className="orig">ﬅ</span>
                    <span className="corr">st</span>ehen, und in un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>rem {" "}
                    <span className="makierung">Ehe
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>and {" "}
                    </span>
                    un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re Hülfe,{" "}
                    <span className="orig">Schuz</span>
                    <span className="corr">Schutz</span> Schirm
                    <br className="lb" />{" "} und Schild{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ein wird.{" "}
                    <span className="orig">er</span>
                    <span className="corr">Er</span> wird uns auch um un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>res
                    <br className="lb" />{" "} Herrn Je
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>u willen all un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re Sünden vergeben und von{" "}
                    <br className="lb" />{" "} un<span className="orig">ſ</span>
                    <span className="corr">s</span>ren Gebrechen heilen, daß wir
                    im̅er tüchtiger und fertiger
                    <br className="lb" />{" "} gemacht werden zu thun, was Ihm{" "}
                    <span className="orig">wohlgefält</span>
                    <span className="corr">wohlgefällt</span>.
                  </span>
                  <p>
                    ich kam wie ge<span className="orig">ſ</span>
                    <span className="corr">s</span>agt um 9 Uhr mit ungemeiner
                    Munterkeit
                    <br className="lb" />{" "} bei {" "}
                    
                    <span className="makierung">
                    un<span className="orig">ſ</span>
                    <span className="corr">s</span>ren Brüdern</span> an, und aß bei
                    den<span className="orig">ſ</span>
                    <span className="corr">s</span>elben den{" "}
                    <span className="g.rend.script.latin">Salat</span>.
                    <br className="lb" />{" "} Bruder{" "}
                    <span className="g.rend.script.latin">Peter</span> , der
                    noch etwas mit <span className="orig">ſ</span>
                    <span className="corr">s</span>einer{" "}
                    <span className="makierung">
                    <span className="g.rend.script.latin">
                      <span className="orig">Catarre</span>
                      <span className="corr">Katarrhe</span>
                    </span>
                    </span>
                    {" "}zu thun
                    <br className="lb" />{" "} hat, <span className="orig">ſ</span>
                    <span className="corr">s</span>ich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>on
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> aber wohl befindet hat dich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr{" "}
                    <span className="orig">Lieb</span>
                    <span className="corr">lieb</span> ge
                    <br className="g.enc.tagsdecl.hyphenation.eq" /> wonnen, und
                    beide Brüder erwarten verlangend je eher{" "}
                    <br className="lb" />{" "} je{" "}
                    <span className="orig">Lieber</span>
                    <span className="corr">lieber</span> deinen Einzug und{" "}
                    <span className="orig">Laßen</span>
                    <span className="corr">lassen</span> Ihren herzlichen{" "}
                    <span className="orig">
                      gegen
                      <br className="g.enc.tagsdecl.hyphenation.eq" />
                      Gruß
                    </span>
                    <span className="corr">
                      Gegen
                      <br className="lb" />{" "}
                      gruß
                    </span>{" "}
                    melden.
                  </p>

                  <p className="enc.tagsdecl.indent-medium">
                    <span className="reisen ">
                      <span className="orig">nun</span>
                      <span className="corr">Nun</span> meine Liebe Frau{" "}
                      <span className="persName">Engels</span> wink ich dir
                      meinen zärtlichen
                      <br className="lb" />{" "} Morgen Gruß und{" "}
                      <span className="orig">küße</span>
                      <span className="corr">küsse</span> Dich in Gedanken, ich
                      hoffe du wir<span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                      <br className="lb" />{" "} eine eben
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>o{" "}
                      <span className="orig">erquikende</span>
                      <span className="corr">erquickende</span>
                      {" "}Nacht Ruhe gehabt haben, wie ich
                      <br className="lb" />{" "} es dir Gott Lob von mir{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>agen{" "}
                      <span className="orig">kan</span>
                      <span className="corr">kann</span>.{" "}
                      <a id="mark.004.s">{/*anchor*/}</a>ich habe mit dir
                      <br className="lb" />{" "} um 8 Uhr gebäten, und werde{" "}
                      <sup className="sup">nun</sup> mit dir in Gedanken und im
                      <br className="lb" />{" "} Herzen, meine Ge
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chäfte anfangen
                    </span>
                    , und das Nöthige wieder
                    <br className="lb" />{" "} aus dem{" "}
                    <span className="orig">wege</span>
                    <span className="corr">Wege</span>{" "}
                    <span className="orig">Räumen</span>
                    <span className="corr">räumen</span>.
                  </p>
                  <p>
                    Den <span className="makierung">Fuhrmann</span> will ich gleich kom̅en{" "}
                    <span className="orig">Laßen</span>
                    <span className="corr">lassen</span>, und überhaupt
                    <br className="lb" />{" "} 
                    <span className="makierung">
                    alles{" "}
                    <span className="orig">
                      abge<span className="orig">ſ</span>
                      <span className="corr">s</span>prochene
                    </span>
                    <span className="corr">Abgesprochene</span></span> be
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>orgen.
                  </p>
                  <p>
                    Den <span className="orig">nachmittag</span>
                    <span className="corr">Nachmittag</span> mache ich meinen
                    Gemarker Gang und
                    <br className="lb" />{" "} <span className="orig">ſ</span>
                    <span className="corr">s</span>age dir Liebe{" "}
                    <span className="orig">
                      nech<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ens
                    </span>
                    <span className="corr">
                      näch<span className="orig">ﬅ</span>
                      <span className="corr">st</span>ens
                    </span>
                    mehr;<a id="mark.004.e">{/*anchor*/}</a> du wir
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> heute{" "}
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "70px",
                    paddingBottom: "450px",
                  }}
                >
                  <p>
                    deinen{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Caspar</span>
                    </span>
                    <span className="damage">
                      <span className="gap"> [...]</span>{" "}
                      <span className="supplied">
                        <span className="hide-normalisiert">⟨</span>ent<span className="orig">ſ</span>
                        <span className="corr">s</span>chuldigen<span className="hide-normalisiert">⟩</span>
                      </span>
                    </span>{" "}
                    und mit einem kurzen Brief
                    <br className="lb" />{" "} <span className="orig">Vorlieb</span>
                    <span className="corr">vorlieb</span>
                    nehmen. <span className="orig">ich</span>
                    <span className="corr">Ich</span> befehle dich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o wie alle un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>re
                    <br className="lb" />{" "} dortigen{" "}
                    <span className="orig">Freünde</span>
                    <span className="corr">Freunde</span>
                    {" "}und Verwandte, die ich herzlich zu{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (grüß</span>
                    <span className="expan">
                      grüß<span className="ex">en</span>
                    </span>{" "}
                    <br className="lb" />{" "} er<span className="orig">ſ</span>
                    <span className="corr">s</span>uche, dem{" "}
                    <span className="orig">Schuz</span>
                    <span className="corr">Schutz</span> und der Bewahrung un
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>res Gottes
                    <br className="lb" />{" "} und bleibe unter innig
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span> zärtlich
                    <span className="orig">ﬅ</span>
                    <span className="corr">st</span>en{" "}
                    <span className="orig">Küßen</span>
                    <span className="corr">Küssen</span> von
                    <br className="lb" />{" "} ganzem Herzen
                  </p>
                  <div
                    className="closer"
                    style={{
                      textAlign: "right",
                      marginRight: "30px",
                    }}
                  >
                    Dein ewig verbundner und{" "}
                    <span className="orig">treüer</span>
                    <span className="corr">
                      treuer
                    </span> <br className="lb" />{" "}{" "}
                    <div className="signed">
                      <span className="persName">
                        <span className="g.rend.script.latin">
                          Casper Engels
                        </span>
                      </span>
                    </div>{" "}
                    <br className="lb" />{" "}{" "}
                    <span style={{ display: "inline-block" }} width="1lines">
                      &nbsp;
                    </span>{" "}
                    <span style={{ display: "inline-block" }} width="6words">
                      &nbsp;
                    </span>
                    <div className="dateline">
                      <span className="g.rend.script.latin">
                        <span className="g.enc.tagsdecl.suspension.type1">
                          (d.</span>
                        <span className="expan">
                          d<span className="ex">en</span>
                        </span>
                      </span>{" "}
                      9{" "}
                      <span className="g.rend.script.latin">
                        <span className="abbr">
                          {" "}7<sup>ber</sup></span>
                        <span className="expan" />
                      </span>{" "}
                      1791
                    </div>
                  </div>
                  <p>
                    Dem guten{" "}<span className="makierung">
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hr.</span>
                    <span className="expan">
                      H<span className="ex">er</span>r
                      <span className="ex">n</span>
                    </span>{" "}
                    Pa<span className="orig">ﬅ</span>
                    <span className="corr">st</span>or</span> hatte ich{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (ein</span>
                    <span className="expan">
                      ein<span className="ex">en</span>
                    </span>{" "}
                    Besuch ver<span className="orig">ſ</span>
                    <span className="corr">s</span>prochen, bei
                    <br className="lb" />{" "}{" "}
                    <span className="orig">gelegenheit</span>
                    <span className="corr">Gelegenheit</span> bitte mich zu{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (ent<span className="orig">ſ</span>
                      <span className="corr">s</span>chuldig</span>
                    <span className="expan">
                      ent<span className="orig">ſ</span>
                      <span className="corr">s</span>chuldig
                      <span className="ex">en</span>
                    </span>
                    ,
                  </p>
                  <p>
                    un<span className="orig">ſ</span>
                    <span className="corr">s</span>er Knecht{" "}
                    <span className="g.rend.script.latin"><span className="makierung">Arnold</span></span>, der
                    viel Liebe und Hochachtung für dich
                    <br className="lb" />{" "} hat, bat mich eben, dich zu grüßen.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung"
            style={{
              top: "741px",
            }}
          >
            <hr />
            <label>gereist</label>
            <p>
            Johann Caspar Engels kehrt aus Ruhrort zurück,<br /> wo am 1. September 1791 die Hochzeit <br />mit Louise Noot stattfand.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1590px",
            }}
          >
            <hr />
            <label>Eheﬅand</label>
            <p>
            Johann Caspar Engels und Louise Noot <br />hatten am 1. September 1791 in Ruhrort geheiratet.

            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1698px",
            }}
          >
            <hr />
            <label>unſren Brüdern</label>
            <p>Benjamin Engels (1751–1820) und <br />Johann Peter Engels (1754–1794).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1757px",
            }}
          >
            <hr />
            <label>Catarre</label>
            <p> Katarrh.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2051px",
            }}
          >
            <hr />
            <label>Fuhrmann</label>
            <p> Johann Jäger (1761–1833), Fuhrmann. <br /> Nachbar der Familie Engels in Barmen.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2051px",
            }}
          >
            <hr />
            <label>alles Abgesprochene</label>
            <p>Gemeint sind die Vorbereitung und die Durchführung der Übersiedlung von Louise Engels, geb. Noot, von Ruhrort nach Barmen im September 1791.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2772px;",
            }}
          >
            <hr />
            <label>Paﬅor</label>
            <p> Evtl. ist Samuel Collenbusch (1724–1803),<br /> Arzt und bekannter Pietist, gemeint.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2832px",
            }}
          >
            <hr />
            <label>Arnold</label>
            <p> Johann Arnold Pilgram (1755–1828), <br />Langettenwirker (Spitzenhersteller) in der Firma <br />Caspar Engels Söhne in Barmen.
            </p>
          </div>

          {/* <div
            className="stellenerläuterung"
            style={{
              top: "350px",
            }}
          >
            <hr />
            <label>né</label>
            <p> Frz. (korrekt wäre die feminine Form née) „geborene“.
            </p>
          </div>
 */}

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
