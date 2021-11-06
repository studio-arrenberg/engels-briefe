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
                    paddingBottom: "300px",
                    marginTop: "20px",
                  }}
                >
                  <div type="mark">
                    {/* <span type="reisen" from="#mark.001.s" to="#mark.001.e" /> */}
                    {/* <span type="religion" from="#mark.003.s" to="#mark.003.e" /> */}
                    {/* <span type="liebe-ehe" from="#mark.004.s" to="#mark.004.e" /> */}
                    {/* <span type="reisen" from="#mark.005.s" to="#mark.005.e" /> */}
                    {/* <span type="religion" from="#mark.007.s" to="#mark.007.e" /> */}
                    
                    {/* <span type="krieg" from="#mark.006.s" to="#mark.006.e" /> */}
                    {/* <span type="krieg" from="#mark.002.s" to="#mark.002.e" /> */}
                    {/* <span type="krieg" from="#mark.009.s" to="#mark.009.e" /> */}
                    <span
                      type="geschaeftliches"
                      from="#mark.008.s"
                      to="#mark.008.e"
                    />
                    
                  </div>

                  {/* Insert Page 1 */}
                  <p>
                    <span className="opener">
                      <span className="salute">
                        <a id="teaser.part.001.s">{/*anchor*/}</a>
                        <span className="orig">Herzlichgeliebter</span>
                        <span className="corr">
                          Herzlich geliebter
                        </span> <span className="makierung"> Papa!</span> <a id="teaser.part.001.e">{/*anchor*/}</a>
                      </span> 
                    </span>
                    Deine be<span className="orig">ÿ</span>
<span className="corr">y</span>de liebe Briefe
                    {" "}<br className="lb" />
                    habe ich vorge<span className="orig">ﬅ</span><span className="corr">st</span>ern Morgen zugleich erhalten, der
                    {" "}<br className="lb" />
                    aus <span className="placeName">Schwalbach</span> muß al<span className="orig">ſ</span><span className="corr">s</span>o
                    Unterwegens liegen ge<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                    blieben <span className="orig">ſ</span><span className="corr">s</span>eÿn –{" "}
                    <span className="reisen">
                      <a id="mark.001.s">{/*anchor*/}</a>
                      wie groß war meine{" "}
                      <span className="orig">Freüde</span>
                      <span className="corr">Freude</span>
                      {" "}<br className="lb" />
                      als ich etwas von Deiner lieben Hand erblickte,
                      {" "}<br className="lb" />
                      und die erfre<span className="orig">ü</span>
<span className="corr">u</span>liche Nachricht las, daß Du mein
                      {" "}<br className="lb" />
                      Be<span className="orig">ﬅ</span><span className="corr">st</span>er! Dich <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      <span className="corr">ge<span className="orig">ſ</span><span className="corr">s</span>und</span> und munter befände<span className="orig">ﬅ</span><span className="corr">st</span>
                      {" "}<br className="lb" />
                      und bis dahin <span className="orig">Glücklich</span>
                      <span className="corr">glücklich</span>{" "}
                      <span className="orig">gereißet</span>
                      <span className="corr">gerei<span className="orig">ſ</span><span className="corr">s</span>et</span> wäre<span className="orig">ﬅ</span><span className="corr">st</span>.{" "}
                      <a id="teaser.part.002.s">{/*anchor*/}</a>
                      <span className="politik">
                        <a id="mark.002.s">{/*anchor*/}</a>
                        <span className="orig">ich</span>
                        <span className="corr">Ich</span>
                        {" "}<br className="lb" />
                        verlangte au<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>erordentlich nach einen Brief von
                        {" "}<br className="lb" />
                        Dir, weil ich wegen den Unruhen mit den
                        {" "}<br className="lb" />
                        Franzo<span className="orig">ſ</span><span className="corr">s</span>en fre<span className="orig">ÿ</span>
<span className="corr">y</span>lich etwas bekü<span className="orig">m̅</span>
<span className="corr">mm</span>ert war, indem
                        {" "}<br className="lb" />
                        ich’s gehört hatte, daß sie{" "}
                        <span className="makierung"><span className="placeName">Mainz</span> bombardirten</span>
                        <a id="teaser.part.002.e">{/*anchor*/}</a>
                        {" "}<br className="lb" />
                        und ich glaubte, daß Du da drüber rei<span className="orig">ſ</span><span className="corr">s</span>en
                        {" "}<br className="lb" />
                        würde<span className="orig">ﬅ</span><span className="corr">st</span>
                        <a id="mark.002.e">{/*anchor*/}</a>
                      </span>
                      <a id="mark.001.e">{/*anchor*/}</a> –{" "}
                    </span>
                    {" "}
                    <span className="religion">
                      <a id="mark.003.s">{/*anchor*/}</a>doch suchte ich mir zu
                      hüten nicht
                      {" "}<br className="lb" />
                      in zu äng<span className="orig">ﬅ</span><span className="corr">st</span>licher Sorge zu gerathen, weil
                      {" "}<br className="lb" />
                      dies kein Wohlverhalten gegen Gott gewesen
                      {" "}<br className="lb" />
                      wäre, <span className="orig">ſ</span><span className="corr">s</span>ondern mich im Vertrauen zu <span className="orig">J</span>
<span className="corr">I</span>hm
                      {" "}<br className="lb" />
                      zu <span className="orig"><span className="orig">ﬅ</span><span className="corr">st</span>ärcken</span>
                      <span className="corr"><span className="orig">ﬅ</span><span className="corr">st</span>ärken</span>, und es von <span className="orig">ſ</span><span className="corr">s</span>einer
                      großen
                      {" "}<br className="lb" />
                      Güte zu hoﬀen daß Er mein{" "}
                      <span className="orig">Gebät</span>
                      <span className="corr">Gebet</span> erhören
                      {" "}<br className="lb" />
                      würde. Er der Liebevolle! <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n dann auch
                      {" "}<br className="lb" />
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "80px",
                    paddingBottom: "230px",
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
                      <span className="add">d</span>aß Er Dich mein Be<span className="orig">ﬅ</span><span className="corr">st</span>er!
                      geleitet, und für die
                      {" "}<br className="lb" />
                      Gefahr <span className="orig">ſ</span><span className="corr">s</span>o Dir hätte treﬀen können be<span className="orig">ſ</span><span className="corr">s</span>chützet hat.
                      {" "}<br className="lb" />
                      Er <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>e Dir dann auch ferner nahe, und{" "}
                      <span className="orig">laße</span>
                      <span className="corr">lasse</span> uns
                      {" "}<br className="lb" />
                      doch die große Freude zu Theil werden, uns{" "}
                      <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      <span className="corr">ge<span className="orig">ſ</span><span className="corr">s</span>und</span>
                      {" "}<br className="lb" />
                      wieder zu umarmen, dann wollen wir Ihm{" "}
                      <span className="orig">
                        gemein<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                        <span className="orig">ſ</span><span className="corr">s</span>chaﬀtlich
                      </span>
                      <span className="corr">
                        gemein<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
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
                    <span className="corr">danke</span> ich Dir mein guter <span className="makierung">Papa!</span>
                    {" "}<br className="lb" />
                    herzlich, ich erkenne daraus Deine zärtliche Liebe,
                    {" "}<br className="lb" />
                    und möchte Dir gerne einen warmen Kuß{" "}
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>i
                    <span className="underline">
                      n Natura
                    </span>
                    <a id="txt.hi.underline001.int.e">{/*anchor*/}</a>{" "}
                    {" "}<br className="lb" />
                    dafür geben, da die<span className="orig">ſ</span><span className="corr">s</span>es aber nun nicht <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n{" "}
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
                  <span className="orig">J</span>
<span className="corr">I</span>ch hätte Dir <span className="orig">ſ</span><span className="corr">s</span>chon gleich{" "}
                    <span className="orig">Ge<span className="orig">ﬅ</span><span className="corr">st</span>ern</span>
                    <span className="corr">ge<span className="orig">ﬅ</span><span className="corr">st</span>ern</span> geantwortet,
                    {" "}<br className="lb" />
                    weil wir aber am <span className="makierung">Kappes</span> <span className="orig">ſ</span><span className="corr">s</span>chneiden waren, und ich
                    {" "}<br className="lb" />
                    auch <span className="makierung">Kramsvogel</span> gepackt habe, um{" "}
                    <span className="makierung"><span className="persName">Bruder Wilhelm</span></span>{" "}
                    {" "}<br className="lb" />
                    zu <span className="orig">ſ</span><span className="corr">s</span>chicken, kon̅te ich nicht.{" "}
                  </p>
                  <span className="reisen">
                    <span className="politik">
                    <p>
                      <a id="mark.005.s">{/*anchor*/}</a>
                      <a id="mark.006.s">{/*anchor*/}</a>

                      <span style={{ display: "inline-block" }} width="1cm">
                        &nbsp;
                      </span>
                      <span className="orig">meinen</span>
                      <span className="corr">Meinen</span> Brief
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
                      <span className="corr">verloren</span> ge<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      gangen i<span className="orig">ﬅ</span><span className="corr">st</span>!
                    </p>
                    <p>
                      Sehr wohl ha<span className="orig">ﬅ</span><span className="corr">st</span> Du gethan mein <span className="orig">J</span>
<span className="corr">I</span>nniggeliebter! und
                      {" "}<br className="lb" />
                      es fre<span className="orig">ÿ</span>
<span className="corr">y</span>lich ganz nach meinen Wun<span className="orig">ſ</span><span className="corr">s</span>ch gemacht, daß Du wie
                      {" "}<br className="lb" />
                    </p>
                    </span>
                  </span>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "65px",
                    paddingLeft: "70px",
                    paddingBottom: "290px",
                    marginTop: "20px",
                  }}
                >
                  {/* Insert Page 3 */}
                  <p>
<span className="politik">
                  <span className="reisen">
                      es etwas un<span className="orig">ſ</span><span className="corr">s</span>icher war, <span className="makierung">nicht über
                      <span className="placeName"> Manheim</span></span> ge
                      <span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />rei<span className="orig">ﬅ</span><span className="corr">st</span> bi<span className="orig">ﬅ</span><span className="corr">st</span> <a id="mark.006.e">{/*anchor*/}</a>
                      </span>
                      – Vielleicht
                      i<span className="orig">ﬅ</span><span className="corr">st</span> es auch für die Sache
                      {" "}<br className="lb" />
                      <span className="orig">beßer</span>
                      <span className="corr">besser</span>.
                      <span style={{ display: "inline-block" }} width="2cm">
                        &nbsp;
                      </span>
                      Un<span className="orig">ſ</span><span className="corr">s</span>erer Vermuthung nach wir<span className="orig">ﬅ</span><span className="corr">st</span> Du{" "}
                      <span className="orig">Heüte</span>
                      <span className="corr">heute</span>
                      {" "}<br className="lb" />
                      in <span className="placeName">München</span> anko<span className="orig">m̅</span>
<span className="corr">mm</span>en.{" "}
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
                      Er an Deiner Stelle wäre. Er, un<span className="orig">ſ</span><span className="corr">s</span>er Göttlicher Hohen<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />prie<span className="orig">ﬅ</span><span className="corr">st</span>er gebe Euch Be<span className="orig">ÿ</span>
<span className="corr">y</span>de,{" "}
                      <span className="orig">Weißheit</span>
                      <span className="corr">Weisheit</span>, und Ver<span className="orig">ﬅ</span><span className="corr">st</span>and,
                      {" "}<br className="lb" />
                      Muth, und <span className="orig">Stärcke</span>
                      <span className="corr">Stärke</span>, ja, alles was Jhr{" "}
                      <span className="orig">jezt</span>
                      <span className="corr">jetzt</span> nöthig
                      {" "}<br className="lb" />
                      habt. Wann es mit Seinen vollko<span className="orig">m̅</span>
<span className="corr">mm</span>nen Willen be<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" /><span className="orig">ﬅ</span><span className="corr">st</span>ehen kann, <span className="orig">ſ</span><span className="corr">s</span>o glaube ich ganz <span className="orig">ſ</span><span className="corr">s</span>icher wird die
                      {" "}<br className="lb" />
                      Sache gelingen, und ge<span className="orig">ſ</span><span className="corr">s</span>chicht die<span className="orig">ſ</span><span className="corr">s</span>es nicht, <span className="orig">ſ</span><span className="corr">s</span>o wollen
                      {" "}<br className="lb" />
                      wirs <span className="orig">J</span>
<span className="corr">I</span>hm zutrauen, daß es alsdenn, wenig<span className="orig">ﬅ</span><span className="corr">st</span>ens
                      {" "}<br className="lb" />
                      für uns, <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">beßer</span>
                      <span className="corr">besser</span>{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>
                        i<span className="orig">ﬅ</span><span className="corr">st</span>
                      </span>{" "}
                      und{" "}
                      <span className="orig">nüzlicher</span>
                      <span className="corr">nützlicher</span> i<span className="orig">ﬅ</span><span className="corr">st</span>.
                    </span>
                    </p>
                    <p>
                      Herr{" "}
                      <span className="makierung"><span className="persName">
                        Doctor{" "}
                        <span className="abbr">
                          C<span className="orig">:</span>
                          <span className="corr">.</span>
                        </span>
                        <span className="expan">
                          C<span className="ex">ollenbu<span className="orig">ſ</span><span className="corr">s</span>ch</span>
                        </span>
                      </span></span>{" "}
                      hat vorigen Montag mit mir
                      {" "}<br className="lb" />
                      gege<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en, und nachher den Thee getrunken; die<span className="orig">ſ</span><span className="corr">s</span>er
                      {" "}<br className="lb" />
                      wün<span className="orig">ſ</span><span className="corr">s</span>chte noch i<span className="orig">m̅</span>
<span className="corr">mm</span>er daß <span className="makierung">die Sache nicht durch Geld
                      {" "}<br className="lb" />
                      getrieben </span>würde, weil er befürchtet daß <span className="orig">ſ</span><span className="corr">s</span>on<span className="orig">ﬅ</span><span className="corr">st</span>
                      {" "}<br className="lb" />
                      nachher das Geld, und nicht Gott die Ehre gegeben
                      {" "}<br className="lb" />
                      wird. Wir haben zu<span className="orig">ſ</span><span className="corr">s</span>a<span className="orig">m̅</span>
<span className="corr">mm</span>en einige P<span className="orig">ſ</span><span className="corr">s</span>almen durch<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      gele<span className="orig">ſ</span><span className="corr">s</span>en und darüber ge<span className="orig">ſ</span><span className="corr">s</span>prochen, unter andern
                      {" "}<br className="lb" />
                      auch den <span className="makierung">36
                      <span className="orig" />
                      <span className="corr">.</span> P<span className="orig">ſ</span><span className="corr">s</span>alm.</span>{" "}
                      <span className="orig">die</span>
                      <span className="corr">Die</span> 4 er<span className="orig">ﬅ</span><span className="corr">st</span>e Ver<span className="orig">ſ</span><span className="corr">s</span>en <span className="orig">ſ</span><span className="corr">s</span>a
                      <span className="overwritten">t</span>
                      <span className="add">g</span>te er
                      {" "}<br className="lb" />
                      paßten ganz auf den <span className="persName">
                        <span className="makierung">Knap</span>
                      </span>{" "}
                      – die Lehre <span className="orig">ſ</span><span className="corr">s</span>o im
                    </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "70px",
                    paddingBottom: "130px",
                  }}
                >
                  {/* Insert Page 4 */}
                  <span className="religion">
                    <p>
                      3<sup className="underline">ten</sup>{" "}
                      Vers vorkämen,{" "}
                      <span className="orig">könte</span>
                      <span className="corr">könnte</span> man <span className="orig">ſ</span>
                      <span className="makierung">
                      <span className="corr">s</span>eine{" "}
                      <span className="orig">Schriﬀten</span>
                      <span className="corr">Schriften</span></span>
                      {" "}<br className="lb" />
                      durch ver<span className="orig">ﬅ</span><span className="corr">st</span>ehen.
                    </p>
                    <p>
                      <a id="mark.008.s">{/*anchor*/}</a>Daß die Witterung <span className="orig">ſ</span><span className="corr">s</span>o
                      gün<span className="orig">ﬅ</span><span className="corr">st</span>ig i<span className="orig">ﬅ</span><span className="corr">st</span>, und Du mein Lieber!
                      {" "}<br className="lb" />
                      in der <span className="orig">Ge<span className="orig">ſ</span><span className="corr">s</span>ell<span className="orig">ſ</span><span className="corr">s</span>chaﬀt</span>
                      <span className="corr">Ge<span className="orig">ſ</span><span className="corr">s</span>ell<span className="orig">ſ</span><span className="corr">s</span>chaft</span> des{" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon">hE<span className="orig">:</span>
                        <span className="corr">.</span>
                      </span>{" "}
                      <span className="expan">
                        H<span className="ex">err</span>
                      </span>{" "}
                      <span className="persName"><span className="makierung">Wortmann</span></span> <span className="orig">ſ</span><span className="corr">s</span>o vergnügt{" "}
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
                      <span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />theilung der Gei<span className="orig">ﬅ</span><span className="corr">st</span>esgaben, <span className="orig">ſ</span><span className="corr">s</span>o Du <span className="orig">ſ</span><span className="corr">s</span>chon aus Gnaden vom
                      {" "}<br className="lb" />
                      Herrn empfangen ha<span className="orig">ﬅ</span><span className="corr">st</span><a id="mark.008.e">{/*anchor*/}</a> und
                      einige Vorurtheile und <span className="orig">J</span>
<span className="corr">I</span>rr<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      thümer be<span className="orig">ÿ</span>
<span className="corr">y</span> ihm zer<span className="orig">ﬅ</span><span className="corr">st</span>ören.
                      <a id="mark.007.e">{/*anchor*/}</a>
                    </p>
                  </span>
                  <p>
                    <a id="mark.009.s">{/*anchor*/}</a>
                    <span className="politik">
                    <span className="persName"><span className="makierung">Bruder Benjamin</span></span> brachte
                    mir Deine liebe Briefe, ich
                    {" "}<br className="lb" />
                    habe ihm al<span className="orig">ſ</span><span className="corr">s</span>o einiges daraus vorgele<span className="orig">ſ</span><span className="corr">s</span>en – auch habe
                    {" "}<br className="lb" />
                    ich <span className="makierung">einen Auszug, be<span className="orig">ſ</span><span className="corr">s</span>onders wegen den kriegeri<span className="orig">ſ</span><span className="corr">s</span>chen
                    {" "}<br className="lb" />
                    Angelegenheiten daraus ge<span className="orig">ſ</span><span className="corr">s</span>chrieben</span>, und <span className="orig">ſ</span><span className="corr">s</span>elbigen{" "}
                    <span className="abbr"> hE<span className="orig">:</span>
                      <span className="corr">.</span>
                    </span>
                    <span className="expan">
                      H<span className="ex">err</span>
                    </span>
                    {" "}<br className="lb" />
                    <span className="makierung">Vater</span>, und <span className="makierung">Brögelmanns</span> mitgetheilt.
                    <a id="mark.009.e">{/*anchor*/}</a>
                    </span>
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
                    <span className="persName"><span className="makierung">Nichte Haniel</span></span>.
                  </p>
                  <p>
                    Vorigen Sonntag Abend haben wir be<span className="orig">ÿ</span>
<span className="corr">y</span>{" "}
                    <span className="persName">
                      Bruder Brögel<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
                      mann
                    </span>{" "}
                    gege<span className="orig">ſ</span><span className="corr">s</span><span className="orig">ſ</span><span className="corr">s</span>en, wir <span className="orig">giengen</span>
<span className="corr">gingen</span> zum Caﬀee hin, und
                    {" "}<br className="lb" />
                    fanden <span className="makierung">Pelzers</span> und{" "}
                    <span className="persName">
                      <span className="g.enc.tagsdecl.cc.abbr-colon">hE<span className="orig">:</span>
                        <span className="corr">.</span>{" "}
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
                    <span className="orig">J</span>
<span className="corr">I</span>nniggeliebter! aus dem ganzen{" "}
                    <span className="orig">Jnnhalt</span>
                    <span className="corr">Inhalt</span> meines Briefes
                    {" "}<br className="lb" />
                    wohl <span className="orig">ſ</span><span className="corr">s</span>ehen, ich brauche es Dir al<span className="orig">ſ</span><span className="corr">s</span>o nicht er<span className="orig">ﬅ</span><span className="corr">st</span> zu ver<span className="hide-doublehypen">⹀</span><br className="g.enc.tagsdecl.hyphenation.doublehyphen" />
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
                    <div className="signed-morespace">
                      Lui<span className="orig">ſ</span><span className="corr">s</span>e Engels{" "}
                      <span className="g.enc.tagsdecl.cc.abbr-colon">geb<span className="orig">:</span>
                        <span className="corr">.</span>{" "}
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
        <div className={`stellenerläuterungen ${isStellen ? "activ" : null}`}>
          <div
            className="stellenerläuterung"
            style={{
              top: "44px",
            }}
          >
            <hr />
            <label>Papa</label>
            <p>
            Gemäß einem im Bürgertum des 19. Jhs. weitverbreiteten Code übernahmen Ehegatten die Perspektive der Kinder und redeten einander mit „Papa“ bzw. „Mama“ an – die eheliche Beziehung wurde damit sprachlich entsexualisiert. Louise Engels tut dies hier bereits als Schwangere, vor ihrer Niederkunft (mit dem Erstgeborenen Johann Caspar III Ende 1792).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "240px",
            }}
          >
            <hr />
            <label>Mainz bombardirten</label>
            <p>
            Ab Oktober 1792 kam es zu Kampfhandlungen rund um die Stadt, und am 21. Oktober 1792 kapitulierte die Mainzer Militärführung schließlich.

            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1060px",
            }}
          >
            <hr />
            <label>Kappes</label>
            <p>
            Weißkohl.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1076px",
            }}
          >
            <hr />
            <label>Krammetsvogel</label>
            <p>
            Wacholderdrossel. Die Vögel wurden bis zum Beginn des 20. Jhs. in großer Zahl gefangen und gegessen.

            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1116px;",
            }}
          >
            <hr />
            <label>Bruder Wilhelm</label>
            <p>
            Samuel Wilhelm Noot (1756–1828), Kaufmann in Ruhrort.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1604px",
            }}
          >
            <hr />
            <label>nicht über Manheim</label>
            <p>
            Im Zuge des ersten Koalitionskriegs 1792–1797 (Koalition von Preußen, Österreich und Russland gegen das revolutionäre Frankreich) geriet auch die Kurpfalz am 23. Oktober 1792 unter französische Kontrolle.

            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1887px",
            }}
          >
            <hr />
            <label>Doctor Collenbusch</label>
            <p>
            Samuel Collenbusch (1724–1803), Arzt und bekannter Pietist.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1917px",
            }}
          >
            <hr />
            <label>die Sache […] getrieben</label>
            <p>
            Knieriem (Die Herkunft des Friedrich Engels. Briefe aus der Verwandschaft 1791-1847. Trier 1991, S.106, Anm.1 zu Dokument 28) verweist auf eine Auseinandersetzung der Barmer Garnnahrungsgenossen mit dem Elberfelder Kaufmann Johann Peter Schlickum (1758–1841). Gegen Schlickum wurde bei den kurfürstlichen Behörden der Vorwurf des Verstoßes gegen den Eid der Garnnahrungsgenossen erhoben. Er hatte einen Bandwebstuhl herstellen lassen und ins Elsass bringen lassen wollen, wo er Anteile an einer Firma der Bandfabrikation hielt, und zudem versucht, Facharbeiter abzuwerben. Letztlich ohne Erfolg trugen die Barmer ihre Klage gegen die unliebsame Konkurrenz für das französische Absatzgebiet nicht nur in Düsseldorf bei den zuständigen Stellen vor, sondern auch am kurfürstlichen Hof in München. (Vgl. Anne Sophie Overkamp: Fleiß, Glaube, Bildung. Kaufleute als gebildete Stände im Wuppertal 1760–1840. Göttingen 2020, S. 153–155.) Johann Caspar Engels II war einer der Deputierten. Im Zusammenhang mit dem unten angesprochenen Psalm 36 ist anzunehmen, dass Samuel Collenbusch wünschte, die Sühne des Frevels gegen den Eid der Garnnahrungsgenossen würde im Vordergrund stehen gegenüber entgangenen Gewinnen durch entstehende Konkurrenz.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2030px",
            }}
          >
            <hr />
            <label>36. Psalm</label>
            <p>
            Verse 1–4 lauten: „Von David, dem Knecht des Herrn, vorzusingen. Es sinnt der Sünder auf Frevel im Grund seines Herzens, er kennt kein Erschrecken vor Gott. Er schmeichelt Gott vor dessen Augen und findet doch seine Strafe für seinen Hass. Seine Worte sind falsch und erlogen, verständig und gut handelt er nicht mehr.“ (LUT)
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2200px;",
            }}
          >
            <hr />
            <label>Knap</label>
            <p>
            Statt Georg Christian Knapp (1753–1825), einem Repräsentanten des Halleschen Pietismus, könnte auch Georg Joseph von Knapp (1726–1802), Jurist  und jülich-bergischer Vizekanzler der Regierung von Kurpfalz-Bayern, gemeint sein, der in die Bearbeitung der Klage gegen Johann Peter Schlickum involviert war.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2400px",
            }}
          >
            <hr />
            <label>seine Schriften</label>
            <p>
            Nicht ermittelt.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2462px",
            }}
          >
            <hr />
            <label>Wortmann</label>
            <p>
            Peter Carl Ludwig Wortmann (1757–1823), Kaufmann in Barmen.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2612px",
            }}
          >
            <hr />
            <label>Bruder Benjamin</label>
            <p>
            Benjamin Engels (1751–1820), genannt „Patohm“ (Patenonkel), Teilhaber der Firma Caspar Engels Söhne in Barmen. Onkel des Vaters von Friedrich Engels.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2631px",
            }}
          >
            <hr />
            <label>einen Auszug daraus […] geschrieben</label>
            <p>
            Briefe wurden damals im engeren Familien- und Freundeskreis ganz oder teilweise vorgelesen bzw. wie hier schriftlich mitgeteilt.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2700px",
            }}
          >
            <hr />
            <label>Herrn Vater</label>
            <p>
            Johann Caspar Korten (1721–1805), Kaufmann und Besitzer einer Bleicherei in Barmen. Vater von Johanna Konstantia Engels, geb. Korten (1761–1790), heiratete 1789 Johann Caspar Engels II (1753–1821).
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2700px",
            }}
          >
            <hr />
            <label>Brögelmanns</label>
            <p>
            Die Eheleute (seit 1781) Christian Gerhard Brögelmann (1743–1821), Kaufmann in Barmen, und Sara Brögelmann, geb. Korten <br />(1756–1830).
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "2787px",
            }}
          >
            <hr />
            <label>Nichte Haniel</label>
            <p>
            Johanna Sophia Haniel (1773–1843 ), Tochter von Johanna Sophia Aletta Haniel, geb. Noot (1742–1815) und Jakob Wilhelm Haniel (1734–1782), 1800 Heirat mit Julius Gottlob Jacobi (1770–1823).
            </p>
          </div>
          
          <div
            className="stellenerläuterung"
            style={{
              top: "2813px",
            }}
          >
            <hr />
            <label>Pelzers</label>
            <p>
            Die Eheleute (seit 1780) Anna Hendrina Catharina, geb. Brögelmann (1746–1839), und Mathias Werner Pelzer (1734–1805), Kaufmann in Elberfeld.
            </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
