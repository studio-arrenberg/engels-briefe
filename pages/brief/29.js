import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "29";
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
              <div className="tei_body"></div>

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "100px",
                    paddingLeft: "80px",
                    paddingBottom: "290px",
                    marginTop: "20px",
                  }}
                >
                  <div type="mark">
                    {/* <span type="reisen" from="#mark.001.s" to="#mark.001.e" /> */}
                    {/* <span type="krieg" from="#mark.002.s" to="#mark.002.e" /> */}
                    {/* <span type="religion" from="#mark.003.s" to="#mark.003.e" /> */}
                    {/* <span type="liebe-ehe" from="#mark.004.s" to="#mark.004.e" /> */}
                    {/* <span type="reisen" from="#mark.005.s" to="#mark.005.e" /> */}
                    {/* <span type="krieg" from="#mark.006.s" to="#mark.006.e" /> */}
                    {/* <span type="religion" from="#mark.007.s" to="#mark.007.e" /> */}
                    <span
                      type="geschaeftliches"
                      from="#mark.008.s"
                      to="#mark.008.e"
                    />
                    <span type="krieg" from="#mark.009.s" to="#mark.009.e" />
                  </div>

                  {/* Insert Page 1 */}
                  <p>
                    <span className="opener">
                      <span className="salute">
                        <a id="teaser.part.001.s">{/*anchor*/}</a>
                        <span className="orig">Herzlichgeliebter</span>
                        <span className="corr">
                          Herzlich geliebter
                        </span> Papa! <a id="teaser.part.001.e">{/*anchor*/}</a>
                      </span>
                    </span>
                    Deine beÿde liebe Briefe
                    {" "}<br className="lb" />
                    habe ich vorge<span className="orig">ﬅ</span><span className="corr">st</span>ern Morgen zugleich erhalten, der
                    {" "}<br className="lb" />
                    aus <span className="placeName">Schwalbach</span> muß al<span className="orig">ſ</span><span className="corr">s</span>o
                    Unterwegens liegen ge
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    blieben <span className="orig">ſ</span><span className="corr">s</span>eÿn –
                    <span className="reisen">
                      <a id="mark.001.s">{/*anchor*/}</a>
                      wie groß war meine{" "}
                      <span className="orig">Freüde</span>
                      <span className="corr">Freude</span>
                      {" "}<br className="lb" />
                      als ich etwas von Deiner lieben Hand erblickte,
                      {" "}<br className="lb" />
                      und die erfreuliche Nachricht las, daß Du mein
                      {" "}<br className="lb" />
                      Be<span className="orig">ﬅ</span><span className="corr">st</span>er! Dich <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      <span className="corr">ge<span className="orig">ſ</span><span className="corr">s</span>und</span> und munter befände<span className="orig">ﬅ</span><span className="corr">st</span>
                      {" "}<br className="lb" />
                      und bis dahin <span className="orig">Glücklich</span>
                      <span className="corr">glücklich</span>{" "}
                      <span className="orig">gereißet</span>
                      <span className="corr">gerei<span className="orig">ſ</span><span className="corr">s</span>et</span> wäre<span className="orig">ﬅ</span><span className="corr">st</span>.{" "}
                      <a id="teaser.part.002.s">{/*anchor*/}</a>
                      <span className="krieg">
                        <a id="mark.002.s">{/*anchor*/}</a>
                        <span className="orig">ich</span>
                        <span className="corr">Ich</span>
                        {" "}<br className="lb" />
                        verlangte au<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>erordentlich nach einen Brief von
                        {" "}<br className="lb" />
                        Dir, weil ich wegen den Unruhen mit den
                        {" "}<br className="lb" />
                        Franzo<span className="orig">ſ</span><span className="corr">s</span>en freÿlich etwas beküm̅ert war, indem
                        {" "}<br className="lb" />
                        ich’s gehört hatte, daß sie{" "}
                        <span className="placeName">Mainz</span> bombardirten
                        <a id="teaser.part.002.e">{/*anchor*/}</a>
                        {" "}<br className="lb" />
                        und ich glaubte, daß Du da drüber rei<span className="orig">ſ</span><span className="corr">s</span>en
                        {" "}<br className="lb" />
                        würde<span className="orig">ﬅ</span><span className="corr">st</span>
                        <a id="mark.002.e">{/*anchor*/}</a>
                      </span>
                      <a id="mark.001.e">{/*anchor*/}</a> –
                    </span>
                    <span className="religion">
                      <a id="mark.003.s">{/*anchor*/}</a>doch suchte ich mir zu
                      hüten nicht
                      {" "}<br className="lb" />
                      in zu äng<span className="orig">ﬅ</span><span className="corr">st</span>licher Sorge zu gerathen, weil
                      {" "}<br className="lb" />
                      dies kein Wohlverhalten gegen Gott gewesen
                      {" "}<br className="lb" />
                      wäre, <span className="orig">ſ</span><span className="corr">s</span>ondern mich im Vertrauen zu Jhm
                      {" "}<br className="lb" />
                      zu <span className="orig"><span className="orig">ﬅ</span><span className="corr">st</span>ärcken</span>
                      <span className="corr"><span className="orig">ﬅ</span><span className="corr">st</span>ärken</span>, und es von <span className="orig">ſ</span><span className="corr">s</span>einer
                      großen
                      {" "}<br className="lb" />
                      Güte zu hoﬀen daß Er mein{" "}
                      <span className="orig">Gebät</span>
                      <span className="corr">Gebet</span> erhören
                      {" "}<br className="lb" />
                      würde. Er der Liebevolle! <span className="orig">ſ</span><span className="corr">s</span>eÿn dann auch
                      {" "}<br className="lb" />
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "80px",
                    paddingBottom: "180px",
                  }}
                >
                  {/* Insert Page 2 */}
                  <p>

                  <span className="religion">
                      hochgelobet, und von ganzem Herzen dafür{" "}
                      <span className="orig">gedanckt</span>
                      <span className="corr">gedankt</span>!
                      {" "}<br className="lb" />
                      <span className="overwritten">g</span>
                      <span className="add">⟨daß⟩</span> Er Dich mein Be<span className="orig">ﬅ</span><span className="corr">st</span>er!
                      geleitet, und für die
                      {" "}<br className="lb" />
                      Gefahr <span className="orig">ſ</span><span className="corr">s</span>o Dir hätte treﬀen können be<span className="orig">ſ</span><span className="corr">s</span>chützet hat.
                      {" "}<br className="lb" />
                      Er <span className="orig">ſ</span><span className="corr">s</span>eÿe Dir dann auch ferner nahe, und{" "}
                      <span className="orig">laße</span>
                      <span className="corr">lasse</span> uns
                      {" "}<br className="lb" />
                      doch die große Freude zu Theil werden, uns
                      <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      <span className="corr">ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      {" "}<br className="lb" />
                      wieder zu umarmen, dann wollen wir Ihm{" "}
                      <span className="orig">
                        gemein
                        <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                        <span className="orig">ſ</span><span className="corr">s</span>chaﬀtlich
                      </span>
                      <span className="corr">
                        gemein
                        <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                        <span className="orig">ſ</span><span className="corr">s</span>chaftlich
                      </span>{" "}
                      danken, und miteinander Seinen Nahmen
                      {" "}<br className="lb" />
                      erhöhen!
                      <a id="mark.003.e">{/*anchor*/}</a>
                  </span>

                  </p>
                  <p>
                  <span className="liebe">
                    <a id="mark.004.s">{/*anchor*/}</a>
                    Für Deine Sorgfalt, mir{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chon <span className="orig">ſ</span><span className="corr">s</span>o bald Nachricht von
                    {" "}<br className="lb" />
                    Dir zu geben <span className="orig">dancke</span>
                    <span className="corr">danke</span> ich Dir mein guter Papa!
                    {" "}<br className="lb" />
                    herzlich, ich erkenne daraus Deine zärtliche Liebe,
                    {" "}<br className="lb" />
                    und möchte Dir gerne einen warmen Kuß{" "}
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>i
                    <span style={{ textDecoration: "underline" }}>
                      n Natura
                    </span>
                    <a id="txt.hi.underline001.int.e">{/*anchor*/}</a>{" "}
                    {" "}<br className="lb" />
                    dafür geben, da die<span className="orig">ſ</span><span className="corr">s</span>es aber nun nicht <span className="orig">ſ</span><span className="corr">s</span>eÿn{" "}
                    <sup className="sup" id="txt.add001">
                      kann
                    </sup>
                    , will
                    {" "}<br className="lb" />
                    ich ihn Dir doch in <span className="orig">Gedancken</span>
                    <span className="corr">Gedanken</span> <span className="orig">ſ</span><span className="corr">s</span>chicken.
                    <a id="mark.004.e">{/*anchor*/}</a>
                
                    </span>

                    </p>
                  <p>
                    Jch hätte Dir <span className="orig">ſ</span><span className="corr">s</span>chon gleich{" "}
                    <span className="orig">Ge<span className="orig">ﬅ</span><span className="corr">st</span>ern</span>
                    <span className="corr">ge<span className="orig">ﬅ</span><span className="corr">st</span>ern</span> geantwortet,
                    {" "}<br className="lb" />
                    weil wir aber am Kappes <span className="orig">ſ</span><span className="corr">s</span>chneiden waren, und ich
                    {" "}<br className="lb" />
                    auch Kramsvogel gepackt habe, um{" "}
                    <span className="persName">Bruder Wilhelm</span>{" "}
                    {" "}<br className="lb" />
                    zu <span className="orig">ſ</span><span className="corr">s</span>chicken, kon̅te ich nicht.{" "}
                  </p>
                  <span className="reisen">
                    <p>
                      <a id="mark.005.s">{/*anchor*/}</a>
                      <a id="mark.006.s">{/*anchor*/}</a>
                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      <span className="orig">meinen</span>
                      <span className="corr">Meinen</span> Brief
                      {" "}<br className="lb" />
                      <span className="orig">ſ</span><span className="corr">s</span>o ich un<span className="orig">ſ</span><span className="corr">s</span>erer Ab<span className="orig">ſ</span><span className="corr">s</span>prache gemäß nach<span className="placeName"> Manheim</span> adre<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>irt
                      {" "}<br className="lb" />
                      hatte, hoﬀe ich wir<span className="orig">ﬅ</span><span className="corr">st</span> Du <span className="orig">jezt</span>
                      <span className="corr">jetzt</span> erhalten haben –
                      {" "}<br className="lb" />
                      wann er nur{" "}
                      <sup className="sup" id="txt.add002">
                        nicht
                      </sup>{" "}
                      wegen den Unruhen <span className="orig">verlohren</span>
                      <span className="corr">verloren</span> ge
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      gangen i<span className="orig">ﬅ</span><span className="corr">st</span>!
                    </p>
                    <p>
                      Sehr wohl ha<span className="orig">ﬅ</span><span className="corr">st</span> Du gethan mein Jnniggeliebter! und
                      {" "}<br className="lb" />
                      es freÿlich ganz nach meinen Wun<span className="orig">ſ</span><span className="corr">s</span>ch gemacht, daß Du wie
                      {" "}<br className="lb" />
                    </p>
                  </span>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "65px",
                    paddingLeft: "70px",
                    paddingBottom: "275px",
                    marginTop: "20px",
                  }}
                >
                  {/* Insert Page 3 */}
                  <p>

                  <span className="reisen">
                      es etwas un<span className="orig">ſ</span><span className="corr">s</span>icher war, nicht über
                      <span className="placeName"> Manheim</span> ge
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      rei<span className="orig">ﬅ</span><span className="corr">st</span> bi<span className="orig">ﬅ</span><span className="corr">st</span> <a id="mark.006.e">{/*anchor*/}</a>– Vielleicht
                      i<span className="orig">ﬅ</span><span className="corr">st</span> es auch für die Sache
                      {" "}<br className="lb" />
                      <span className="orig">beßer</span>
                      <span className="corr">besser</span>.
                      <span style={{ display: "inline-block" }} width="2cm">
                        &nbsp;
                      </span>
                      Un<span className="orig">ſ</span><span className="corr">s</span>erer Vermuthung nach wir<span className="orig">ﬅ</span><span className="corr">st</span> Du{" "}
                      <span className="orig">Heute</span>
                      <span className="corr">heute</span>
                      {" "}<br className="lb" />
                      in <span className="placeName">München</span> ankom̅en.{" "}
                      <a id="mark.005.e">{/*anchor*/}</a>
                  </span>
                  <span className="religion">
                      <a id="mark.007.s">{/*anchor*/}</a>
                      <span className="orig">ich</span>
                      <span className="corr">Ich</span>{" "}
                      <span className="orig">bäte</span>
                      <span className="corr">bete</span> mit Dir, daß
                      {" "}<br className="lb" />
                      un<span className="orig">ſ</span><span className="corr">s</span>er liebreicher Herr Je<span className="orig">ſ</span><span className="corr">s</span>u Dir ge<span className="orig">ſ</span><span className="corr">s</span>chickt machen möge
                      {" "}<br className="lb" />
                      <span className="orig">ſ</span><span className="corr">s</span>o zu handlen, wie Er es machen würde, wann
                      {" "}<br className="lb" />
                      Er an Deiner Stelle wäre. Er, un<span className="orig">ſ</span><span className="corr">s</span>er Göttlicher Hohen
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      prie<span className="orig">ﬅ</span><span className="corr">st</span>er gebe Euch Beÿde,{" "}
                      <span className="orig">Weißheit</span>
                      <span className="corr">Weisheit</span>, und Ver<span className="orig">ﬅ</span><span className="corr">st</span>and,
                      {" "}<br className="lb" />
                      Muth, und <span className="orig">Stärcke</span>
                      <span className="corr">Stärke</span>, ja, alles was Jhr{" "}
                      <span className="orig">jezt</span>
                      <span className="corr">jetzt</span> nöthig
                      {" "}<br className="lb" />
                      habt. Wann es mit Seinen vollkom̅nen Willen be
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      <span className="orig">ﬅ</span><span className="corr">st</span>ehen kann, <span className="orig">ſ</span><span className="corr">s</span>o glaube ich ganz <span className="orig">ſ</span><span className="corr">s</span>icher wird die
                      {" "}<br className="lb" />
                      Sache gelingen, und ge<span className="orig">ſ</span><span className="corr">s</span>chicht die<span className="orig">ſ</span><span className="corr">s</span>es nicht, <span className="orig">ſ</span><span className="corr">s</span>o wollen
                      {" "}<br className="lb" />
                      wirs Jhm zutrauen, daß es alsdenn, wenig<span className="orig">ﬅ</span><span className="corr">st</span>ens
                      {" "}<br className="lb" />
                      für uns, <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">beßer</span>
                      <span className="corr">besser</span>{" "}
                      <span style={{ textDecoration: "line-through" }}>
                        i<span className="orig">ﬅ</span><span className="corr">st</span>
                      </span>{" "}
                      und{" "}
                      <span className="orig">nüzlicher</span>
                      <span className="corr">nützlicher</span> i<span className="orig">ﬅ</span><span className="corr">st</span>.
                    </span>
                    </p>
                    <p>
                      Herr{" "}
                      <span className="persName">
                        Doctor{" "}
                        <span className="abbr">
                          (C<span className="orig">:</span>
                          <span className="corr">.</span>)
                        </span>
                        <span className="expan">
                          C<span className="ex">ollenbu<span className="orig">ſ</span><span className="corr">s</span>ch</span>
                        </span>
                      </span>{" "}
                      hat vorigen Montag mit mir
                      {" "}<br className="lb" />
                      gege<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en, und nachher den Thee getrunken; die<span className="orig">ſ</span><span className="corr">s</span>er
                      {" "}<br className="lb" />
                      wün<span className="orig">ſ</span><span className="corr">s</span>chte noch im̅er daß die Sache nicht durch Geld
                      {" "}<br className="lb" />
                      getrieben würde, weil er befürchtet daß <span className="orig">ſ</span><span className="corr">s</span>on<span className="orig">ﬅ</span><span className="corr">st</span>
                      {" "}<br className="lb" />
                      nachher das Geld, und nicht Gott die Ehre gegeben
                      {" "}<br className="lb" />
                      wird. Wir haben zu<span className="orig">ſ</span><span className="corr">s</span>am̅en einige P<span className="orig">ſ</span><span className="corr">s</span>almen durch
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      gele<span className="orig">ſ</span><span className="corr">s</span>en und darüber ge<span className="orig">ſ</span><span className="corr">s</span>prochen, unter andern
                      {" "}<br className="lb" />
                      auch den 36
                      <span className="orig" />
                      <span className="corr">.</span> P<span className="orig">ſ</span><span className="corr">s</span>alm.{" "}
                      <span className="orig">die</span>
                      <span className="corr">Die</span> 4 er<span className="orig">ﬅ</span><span className="corr">st</span>e Ver<span className="orig">ſ</span><span className="corr">s</span>en <span className="orig">ſ</span><span className="corr">s</span>a
                      <span className="overwritten">t</span>
                      <span className="add">⟨g⟩</span>te er
                      {" "}<br className="lb" />
                      paßten ganz auf den <span className="persName">
                        Knap
                      </span>{" "}
                      – die Lehre <span className="orig">ſ</span><span className="corr">s</span>o im
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
                  <span className="religion">
                    <p>
                      3<sup style={{ textDecoration: "underline" }}>ten</sup>{" "}
                      Vers vorkämen,{" "}
                      <span className="orig">könte</span>
                      <span className="corr">könnte</span> man <span className="orig">ſ</span><span className="corr">s</span>eine{" "}
                      <span className="orig">Schriﬀten</span>
                      <span className="corr">Schriften</span>
                      {" "}<br className="lb" />
                      durch ver<span className="orig">ﬅ</span><span className="corr">st</span>ehen.
                    </p>
                    <p>
                      <a id="mark.008.s">{/*anchor*/}</a>Daß die Witterung <span className="orig">ſ</span><span className="corr">s</span>o
                      gün<span className="orig">ﬅ</span><span className="corr">st</span>ig i<span className="orig">ﬅ</span><span className="corr">st</span>, und Du mein Lieber!
                      {" "}<br className="lb" />
                      in der <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>ell<span className="orig">ſ</span><span className="corr">s</span>chaﬀt</span>
                      <span className="corr">Ge<span className="orig">ſ</span><span className="corr">s</span>ell<span className="orig">ſ</span><span className="corr">s</span>chaft</span> des{" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon">
                        (H<span className="orig">:</span>
                        <span className="corr">.</span>)
                      </span>{" "}
                      <span className="expan">
                        H<span className="ex">err</span>
                      </span>{" "}
                      <span className="persName">Wortmann</span> <span className="orig">ſ</span><span className="corr">s</span>o vergnügt{" "}
                      <span className="orig">reiße<span className="orig">ﬅ</span><span className="corr">st</span></span>
                      <span className="corr">reise<span className="orig">ﬅ</span><span className="corr">st</span></span>
                      {" "}<br className="lb" />
                      <span className="orig">freüt</span>
                      <span className="corr">freut</span> mich <span className="orig">ſ</span><span className="corr">s</span>ehr – grüße ihm
                      recht <span className="orig">freund<span className="orig">ſ</span><span className="corr">s</span>chaﬀtlich</span>
                      <span className="corr">freund<span className="orig">ſ</span><span className="corr">s</span>chaftlich</span> von
                      {" "}<br className="lb" />
                      mir. Vielleicht kann<span className="orig">ﬅ</span><span className="corr">st</span> Du ihm{" "}
                      <span className="orig">nüzlich</span>
                      <span className="corr">nützlich</span> werden, durch Mit
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      theilung der Gei<span className="orig">ﬅ</span><span className="corr">st</span>esgaben, <span className="orig">ſ</span><span className="corr">s</span>o Du <span className="orig">ſ</span><span className="corr">s</span>chon aus Gnaden vom
                      {" "}<br className="lb" />
                      Herrn empfangen ha<span className="orig">ﬅ</span><span className="corr">st</span><a id="mark.008.e">{/*anchor*/}</a> und
                      einige Vorurtheile und Jrr
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      thümer beÿ ihm zer<span className="orig">ﬅ</span><span className="corr">st</span>ören.
                      <a id="mark.007.e">{/*anchor*/}</a>
                    </p>
                  </span>
                  <p>
                    <a id="mark.009.s">{/*anchor*/}</a>
                    <span className="persName">Bruder Benjamin</span> brachte
                    mir Deine liebe Briefe, ich
                    {" "}<br className="lb" />
                    habe ihm al<span className="orig">ſ</span><span className="corr">s</span>o einiges daraus vorgele<span className="orig">ſ</span><span className="corr">s</span>en – auch habe
                    {" "}<br className="lb" />
                    ich einen Auszug, be<span className="orig">ſ</span><span className="corr">s</span>onders wegen den kriegeri<span className="orig">ſ</span><span className="corr">s</span>chen
                    {" "}<br className="lb" />
                    Angelegenheiten daraus ge<span className="orig">ſ</span><span className="corr">s</span>chrieben, und <span className="orig">ſ</span><span className="corr">s</span>elbigen{" "}
                    <span className="abbr">
                      (H<span className="orig">:</span>
                      <span className="corr">.</span>)
                    </span>
                    <span className="expan">
                      H<span className="ex">err</span>
                    </span>
                    {" "}<br className="lb" />
                    Vater, und Brögelmanns mitgetheilt.
                    <a id="mark.009.e">{/*anchor*/}</a>
                    <span style={{ display: "inline-block" }} width="12mm">
                      &nbsp;
                    </span>
                    Alle liebe
                    {" "}<br className="lb" />
                    Verwandten, und gute Freunden{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span> Dir herzlich
                    {" "}<br className="lb" />
                    grüßen, be<span className="orig">ſ</span><span className="corr">s</span>onders auch{" "}
                    <span className="persName">Nichte Haniel</span>.
                  </p>
                  <p>
                    Vorigen Sonntag Abend haben wir beÿ{" "}
                    <span className="persName">
                      Bruder Brögel
                      <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      mann
                    </span>{" "}
                    gege<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en, wir gingen zum Caﬀee hin, und
                    {" "}<br className="lb" />
                    fanden Pelzers und{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.cc.abbr-colon">
                        (H<span className="orig">:</span>
                        <span className="corr">.</span>){" "}
                      </span>
                      <span className="expan">
                        H<span className="ex">errn</span>
                      </span>{" "}
                      Brögelmann{" "}
                    </span>
                    von <span className="placeName">Elberfeld</span> da,
                    {" "}<br className="lb" />
                    und weil die<span className="orig">ſ</span><span className="corr">s</span>e da <span className="orig">eßen</span>
                    <span className="corr">essen</span> blieben{" "}
                    <span className="orig">wolten</span>
                    <span className="corr">wollten</span> <span className="orig">ſ</span><span className="corr">s</span>ie uns
                    {" "}<br className="lb" />
                    auch nicht gehen <span className="orig">laßen</span>
                    <span className="corr">lassen</span>.
                  </p>
                  <p>
                    Daß ich Gottlob! noch wohl bin, kann<span className="orig">ﬅ</span><span className="corr">st</span> Du mein
                    {" "}<br className="lb" />
                    Jnniggeliebter! aus dem ganzen{" "}
                    <span className="orig">Jnnhalt</span>
                    <span className="corr">Jnhalt</span> meines Briefes
                    {" "}<br className="lb" />
                    wohl <span className="orig">ſ</span><span className="corr">s</span>ehen, ich brauche es Dir al<span className="orig">ſ</span><span className="corr">s</span>o nicht er<span className="orig">ﬅ</span><span className="corr">st</span> zu ver
                    <br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    <span className="orig">ſ</span><span className="corr">s</span>ichern.
                  </p>
                  <div className="closer">
                    Das Blatt i<span className="orig">ﬅ</span><span className="corr">st</span> voll, ich Dir mein Be<span className="orig">ﬅ</span><span className="corr">st</span>er! al<span className="orig">ſ</span><span className="corr">s</span>o
                    {" "}<br className="lb" />
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span>{" "}
                    <span className="g.rend.script.latin">adieu</span> <span className="orig">ſ</span><span className="corr">s</span>agen.{" "}
                    <span className="orig">von</span>
                    <span className="corr">Von</span> ganzem Herzen bin ich
                    Deine treue {" "}<br className="lb" />
                    <span style={{ display: "inline-block" }} width="13cm">
                      &nbsp;
                    </span>
                    <div className="signed">
                      Lui<span className="orig">ſ</span><span className="corr">s</span>e Engels{" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon">
                        (geb<span className="orig">:</span>
                        <span className="corr">.</span>){" "}
                      </span>
                      <span className="expan">
                        geb<span className="ex">orene</span>
                      </span>{" "}
                      Noot.
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
