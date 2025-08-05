import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "169";
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
        <title>Brief 169{date}</title>
      </Head>

      <Brief_wrapper stellen={stellen} key={`wrapper-${key}`} data={item}>
        {/* brief text goes here */}

        <div>
          {/*TEI front*/}
          <div className="toc toc_body">
            <div className="toc toc_back">
              {/*TEI body*/}
              <div className="tei_body">
                <section
                  className="kuvert"
                  id="index.xml-body.1_div.1"
                  style={{ paddingTop: "300px", paddingBottom: "360px" }}
                >
                  {/* Insert Kuvert */}
                  <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                    <h3>
                      <span className="headingNumber">1.1. </span>
                    </h3>
                    <p className="g.enc.tagsdecl.wd.vertical-right">
                      <span className="address">
                        
                        An meine liebe <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span>.
                        <br />
                      </span>
                    </p>
                  </div>
                </section>
              </div>

              {/* <!-- Themenmarkierung --> */}
              <div type="mark">
                {/* <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e" /> */}
                {/* <span type="liebe-ehe" from="#mark.003.s" to="#mark.003.e" /> */}
                {/* <span type="liebe-ehe" from="#mark.004.s" to="#mark.004.e" /> */}
                {/* <span type="liebe-ehe" corresp="#mark.007" /> */}
                {/* <span type="liebe-ehe" from="#mark.008.s" to="#mark.008.e" /> */}
                {/* <span type="liebe-ehe" from="#mark.009.s" to="#mark.009.e" /> */}
                {/* <span type="liebe-ehe" from="#mark.011.s" to="#mark.011.e" /> */}

                {/* <span type="reisen" from="#mark.002.s" to="#mark.002.e" /> */}
                {/* <span type="reisen" from="#mark.010.s" to="#mark.010.e" /> */}
                {/* <span type="reisen" from="#mark.009.s" to="#mark.009.e" /> */}
                {/* <span type="reisen" from="#mark.006.s" to="#mark.006.e" /> */}

                {/* <span type="religion" from="#mark.005.s" to="#mark.005.e" /> */}
                
                

                {/* 009 Themenmarkierung doppelt vorhanden! */}
                

                
                
                <span type="religion" corresp="#mark.012" />
              </div>

              <section
                className="writing-session page-small"
                id="index.xml-body.1_div.2"
              >
                <div
                  className="page"
                  style={{
                    paddingTop: "23px",
                    paddingLeft: "110px",
                    paddingBottom: "17px",
                  }}
                >
                  {/* Page 1 */}
                  <div>
                    <div className="text-right nopadding" style={{paddingBottom: "20px",paddingRight:"300px",}}>
                      
                      <span classname="g.rend.script.latin">Barmen</span>,{" "}
                      <span classname="date">
                        3. <span classname="g.rend.script.latin">Juli</span>{" "}
                        1818
                      </span>
                      .
                      
                    </div>
                  </div>

                  <p>
                    <span className="liebe">
                      <a id="mark.001.s"></a>
                      <span className="makierung">
                      Mit welchem frohen, <span className="orig">ſ</span><span className="corr">s</span>eligen Gefühle ich jetzt an
                      <br className="lb" />{" "}
                      dich meine gute innig<span className="orig">ﬅ</span><span className="corr">st</span> geliebte
                      <span classname="persName">{" "}Eli<span className="orig">ſ</span><span className="corr">s</span>e</span> <span className="orig">ſ</span><span className="corr">s</span>chreibe, kann
                      <br className="lb" />{" "}
                      ich mit Worten nicht ausdrücken; dein mit mir
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>o ganz <span className="orig">ﬅ</span><span className="corr">st</span>immendes Herz wird es kennen.</span>
                    </span>

                    <span className="liebe">{" "}
                      Ich <span className="orig">ſ</span><span className="corr">s</span>chreibe
                      <br className="lb" />{" "}
                      nämlich mit der völligen Einwilligung meiner lieben
                      <br className="lb" />{" "}
                      Eltern.<a id="teaser.part.001.e"></a> Gleich den anderen
                      Morgen nach un<span className="orig">ſ</span><span className="corr">s</span>erer
                      <br className="lb" />{" "}
                      Ankunft <span className="orig">ſ</span><span className="corr">s</span>agte mein Vater un<span className="orig">ſ</span><span className="corr">s</span>er Verhältniß meiner
                      <br className="lb" />{" "}
                      Mutter, <span className="orig">ſ</span><span className="corr">s</span>ie war damit ebenfalls ganz zufrieden, und
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>prach den Nachmittag recht freundlich mit mir über dich.
                      <br className="lb" />{" "}
                      Meine <span className="abbr"> l.</span>
                      <span className="expan">
                        l<span className="ex">ieben</span>
                      </span>{" "}
                      Eltern fanden es für nöthig auch jetzt <span className="orig">ſ</span><span className="corr">s</span>chon
                      <br className="lb" />{" "}
                      mit <span className="makierung">meinem Oncle</span> davon zu <span className="orig">ſ</span><span className="corr">s</span>prechen, und ich <span className="orig">ﬅ</span><span className="corr">st</span>immte
                      <br className="lb" />{" "}
                      ihnen ganz bei. Du wir<span className="orig">ﬅ</span><span className="corr">st</span> die<span className="orig">ſ</span><span className="corr">s</span>en indeß <span className="orig">ſ</span><span className="corr">s</span>o auch
                      {" "}<span className="strikethrough" style={{ textDecoration: "line-through", transform: "translateY(10%)" }}>haben</span>
                      <br className="lb" />{" "}
                      kennen gelernt haben, daß es bei die<span className="orig">ſ</span><span className="corr">s</span>em herzensguten
                      <br className="lb" />{" "}
                      Manne viel darauf ankommt, in welcher Stimmung
                      <br className="lb" />{" "}
                      und auf welche Art ihm eine Sache beigebracht wird, und
                      <br className="lb" />{" "}
                      daß bei ihm der er<span className="orig">ﬅ</span><span className="corr">st</span>e Eindruck, den etwas der Art
                      <br className="lb" />{" "}
                      auf ihn macht, von langer Dauer i<span className="orig">ﬅ</span><span className="corr">st</span>; wir hielten es
                      <br className="lb" />{" "}
                      daher für gut, einen <span className="orig">ſ</span><span className="corr">s</span>chicklichen Zeitpunkt bei ihm
                      <br className="lb" />{" "}
                      abzuwarten. Durch einen{" "}
                      <span className="makierung"><span className="placeName">
                        <span className="g.rend.script.latin">Bremer</span>
                      </span>
                      {" "}
                      Freund</span>, der <span className="orig">ſ</span><span className="corr">s</span>eit
                      <br className="lb" />{" "}
                      ein paar Tagen bei ihm logirt, i<span className="orig">ﬅ</span><span className="corr">st</span> er nun mehr be<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      <span className="orig">ſ</span><span className="corr">s</span>chäftigt, bleibt aber dabei froh, und <span className="orig">ſ</span><span className="corr">s</span>o denke ich wird
                      <br className="lb" />{" "}
                      Papa ihm in Gottes Namen er<span className="orig">ﬅ</span><span className="corr">st</span>er Tage alles mittheilen.
                      <br className="lb" />{" "}
                      <span className="orig">J</span>
<span className="corr">I</span>ch zweifle keinen Augenblick an <span className="orig">ſ</span><span className="corr">s</span>einer völligen Ge<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      nehmigung, indeß hats mich doch bis jetzt an einem
                      <br className="lb" />{" "}
                      Schritte abgehalten, den du gewiß auch für gut finden
                      <br className="lb" />{" "}
                      wir<span className="orig">ﬅ</span><span className="corr">st</span>. <span className="orig">J</span>
<span className="corr">I</span>ch hatte nämlich vor, liebe{" "}
                      <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span>, meinen
                      <br className="lb" />{" "}
                      er<span className="orig">ﬅ</span><span className="corr">st</span>en Brief an dich in einen Brief an <span className="makierung">deine guten
                      <br className="lb" />{" "}
                      Eltern</span> einzu<span className="orig">ſ</span><span className="corr">s</span>chlagen, und die<span className="orig">ſ</span><span className="corr">s</span>e in dem<span className="orig">ſ</span><span className="corr">s</span>elben mit der
                      <br className="lb" />{" "}
                      Bewilligung meiner Eltern um die Erlaubniß
                      <br className="lb" />{" "}
                      zu bitten, mit dir Briefe wech<span className="orig">ſ</span><span className="corr">s</span>eln zu dürfen. Die<span className="orig">ſ</span><span className="corr">s</span>es
                      <br className="lb" />{" "}
                      durfte ich aber ohne meinen Oncle nicht thun, der wie
                      <br className="lb" />{" "}
                      du weißt, durch <span className="orig">ſ</span><span className="corr">s</span>eine große Liebe zu uns auch mehr
                      <br className="lb" />{" "}
                      Rechte wie gewöhnliche Verwandten hat. Sobald er al<span className="orig">ſ</span><span className="corr">s</span>o
                      <br className="lb" />{" "}
                      eingeweiht i<span className="orig">ﬅ</span><span className="corr">st</span>,{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through", transform: "translateY(10%)" }}>
                        leite
                      </span>{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>chreibe ich an deine lieben Eltern.
                      <a id="mark.001.e"></a>
                    </span>

                    <br className="lb" />{" "}
                    <span className="reisen">
                      <a id="mark.002.s"></a>Binnen 8 Tagen muß alles in Ordnung{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>eyn, denn
                      <br className="lb" />{" "}
                      höch<span className="orig">ﬅ</span><span className="corr">st</span>wahr<span className="orig">ſ</span><span className="corr">s</span>cheinlich werde ich dann meine Rei<span className="orig">ſ</span><span className="corr">s</span>e antreten
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      die<span className="orig">ſ</span><span className="corr">s</span>es thue ich nicht eher bis ich alles in Ordnung weiß!
                      <a id="mark.002.e"></a>
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    marginTop: "50px",
                    paddingTop: "75px",
                    paddingLeft: "110px",
                    paddingBottom: "89px",
                  }}
                >
                  {/* Page 2 */}

                  <p className="enc.tagsdecl.indent-medium">
                    <span className="liebe">
                      <a id="mark.003.s"></a>Wäre es nicht gut liebe{" "}
                      <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span>, wenn du vorläufig
                      deinen
                      <br className="lb" />{" "}
                      lieben Eltern deine Liebe zu mir entdeckte<span className="orig">ﬅ</span><span className="corr">st</span>, damit <span className="orig">ſ</span><span className="corr">s</span>ie
                      <br className="lb" />{" "}
                      zuer<span className="orig">ﬅ</span><span className="corr">st</span> von dir, als Tochter etwas Be<span className="orig">ﬅ</span><span className="corr">st</span>immtes darüber
                      <br className="lb" />{" "}
                      erführen?<a id="mark.003.e"></a>
                    </span>
                    {" "}Mache du die<span className="orig">ſ</span><span className="corr">s</span>es wie es dir und <span className="makierung">Friederike</span>
                    <br className="lb" />{" "}
                    am beßten <span className="orig">ſ</span><span className="corr">s</span>cheint.
                  </p>
                  <span className="liebe">
                    <p className="enc.tagsdecl.indent-medium">
                      <a id="mark.004.s"></a>Wenn ich <span className="orig">ſ</span><span className="corr">s</span>o, meine gute
                      <span className="persName">{" "}Eli<span className="orig">ſ</span><span className="corr">s</span>e</span> die <span className="orig">ſ</span><span className="corr">s</span>chnelle und
                      <br className="lb" />{" "}
                      die <span className="orig">ſ</span><span className="corr">s</span>o überaus gün<span className="orig">ﬅ</span><span className="corr">st</span>ige Wendung un<span className="orig">ſ</span><span className="corr">s</span>erer Angelegenheit
                      <br className="lb" />{" "}
                      bedenke, <span className="orig">ſ</span><span className="corr">s</span>o kommt mir oft das ganze wie ein an<span className="orig doublehyphen">⹀</span>
                      <br className="lb" />{" "}
                      genehmer Traum vor; es kam alles <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">ſ</span><span className="corr">s</span>chnell,
                      <br className="lb" />{" "}
                      und <span className="orig">ſ</span><span className="corr">s</span>o unerwartet. Wenn ich mir <span className="orig">ſ</span><span className="corr">s</span>o oft den möglich<span className="orig">ﬅ</span><span className="corr">st</span>
                      <br className="lb" />{" "}
                      leichte<span className="orig">ﬅ</span><span className="corr">st</span>en Ausgang dachte, <span className="orig">ſ</span><span className="corr">s</span>o war er immer noch mit
                      <br className="lb" />{" "}
                      mehr Schwierigkeiten verbunden, als nun in der
                      <br className="lb" />{" "}
                      Wirklichkeit <span className="orig">ſ</span><span className="corr">s</span>ich zeigten.{" "}
                      <span className="religion">
                        <a id="mark.005.s"></a>O laß uns nicht{" "}
                        <span className="orig">vergeßen</span>
                        <span className="corr">vergessen</span>,
                        <br className="lb" />{" "}
                        un<span className="orig">ſ</span><span className="corr">s</span>erm lieben himmli<span className="orig">ſ</span><span className="corr">s</span>chen Vater{" "}
                        <span className="strike-through" style={{ textDecoration: "line-through", transform: "translateY(10%)" }}>
                          für
                        </span>{" "}
                        <span className="strike-through" style={{ textDecoration: "line-through", transform: "translateY(10%)" }}>
                          die<span className="orig">ſ</span><span className="corr">s</span>en
                        </span>{" "}
                        herzlich
                        <br className="lb" />{" "}
                        zu danken, daß Er die Herzen un<span className="orig">ſ</span><span className="corr">s</span>erer Eltern
                        <br className="lb" />{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>o lenkte, und uns beiden durch die <span className="orig">ſ</span><span className="corr">s</span>o liebevolle
                        <br className="lb" />{" "}
                        Einwilligung der<span className="orig">ſ</span><span className="corr">s</span>elben einen Beweis gab, daß
                        <br className="lb" />{" "}
                        un<span className="orig">ſ</span><span className="corr">s</span>ere Verbindung <span className="orig">ſ</span><span className="corr">s</span>einem heiligen Willen gemäß i<span className="orig">ﬅ</span><span className="corr">st</span>;
                        <br className="lb" />{" "}
                        ich wenig<span className="orig">ﬅ</span><span className="corr">st</span>ens bin von dem letztern dadurch um <span className="orig">ſ</span><span className="corr">s</span>o
                        <br className="lb" />{" "}
                        mehr überzeugt worden. –<a id="mark.005.e"></a>
                      </span>
                    </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="liebe">
                      Nun gutes Mädchen mußt du mir aber auch
                      <br className="lb" />{" "}
                      einen einzigen Gefallen thun, und recht froh{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>
                      <br className="lb" />{" "}
                      vergnügt leben, damit du dich wieder recht erhol<span className="orig">ﬅ</span><span className="corr">st</span>,
                      <br className="lb" />{" "}
                      denn der Druck, den wir fühlten, hatte dich doch
                      <br className="lb" />{" "}
                      etwas angegriffen; <span className="orig">Wir</span>
                      <span className="corr">wir</span> wollen nun beider<span className="orig">ſ</span><span className="corr">s</span>eits
                      <br className="lb" />{" "}
                      recht munter in un<span className="orig">ſ</span><span className="corr">s</span>erm Berufe arbeiten, und
                      <br className="lb" />{" "}
                      uns über un<span className="orig">ſ</span><span className="corr">s</span>ere jetzt nur kurze Trennung
                      <br className="lb" />{" "}
                      durch öftere frohe Blicke in die Zukunft trö<span className="orig">ﬅ</span><span className="corr">st</span>en.
                      <br className="lb" />{" "}
                      <span className="reisen">
                        <a id="mark.006.s"></a>Mir wirds freilich oft <span className="orig">ſ</span><span className="corr">s</span>ehr{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>chwer, nicht bei dir
                        <br className="lb" />{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n zu können, und es wird auf der langen
                        <br className="lb" />{" "}
                        Rei<span className="orig">ſ</span><span className="corr">s</span>e, die ich vorhabe, es mir noch oft <span className="orig">ſ</span><span className="corr">s</span>auer
                        <br className="lb" />{" "}
                        werden, ganz allein in der Welt herum zu rei<span className="orig">ſ</span><span className="corr">s</span>en,
                        <br className="lb" />{" "}
                        und mit Niemanden von dir nur <span className="orig">ſ</span><span className="corr">s</span>prechen zu
                        <br className="lb" />{" "}
                        können!<a id="mark.006.e"></a>
                      </span>
                      {" "}O wie <span className="orig">ſ</span><span className="corr">s</span>ehnt <span className="orig">ſ</span><span className="corr">s</span>ich mein liebendes Herz nach
                    </span>
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "110px",
                    paddingBottom: "76px",
                  }}
                >
                  {/* Page 3 */}
                  <span className="liebe">
                    <p>
                      dir, wenn ich allein bin, wie verlangt mich oft, mein
                      <br className="lb" />{" "}
                      Herz <span className="orig">ſ</span><span className="corr">s</span>o recht dir auszu<span className="orig">ſ</span><span className="corr">s</span>chütten, du treues Mädchen! O der
                      <br className="lb" />{" "}
                      bö<span className="orig">ſ</span><span className="corr">s</span>e Raum, der uns noch trennt!
                    </p>
                  </span>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="liebe">
                      Meine Aeltern <span className="orig">ſ</span><span className="corr">s</span>ind jetzt recht mit un<span className="orig">ſ</span><span className="corr">s</span>erer Liebe
                      <br className="lb" />{" "}
                      auf ihrem Schick, wie man hier zu <span className="orig">ſ</span><span className="corr">s</span>agen pflegt. Die
                      <br className="lb" />{" "}
                      <span className="abbr"> l.</span>
                      <span className="expan">
                        l<span className="ex">iebe</span>
                      </span>{" "}
                      Mutter <span className="orig">ſ</span><span className="corr">s</span>pricht mit mir <span className="orig">ſ</span><span className="corr">s</span>chon über Wohnung Einrichtung
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      <span className="abbr"> <span className="orig">ſ</span><span className="corr">s</span>.</span>
                      <span className="expan">
                        <span className="orig">ſ</span><span className="corr">s</span><span className="ex">o</span>
                      </span>{" "}
                      <span className="abbr"> w.</span>
                      <span className="expan">
                        w<span className="ex">eiter</span>
                      </span>{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      äußerte bei der Gelegenheit, daß die
                      <br className="lb" />{" "}
                      Braut gewöhnlich gerne das Einrichten <span className="orig">ſ</span><span className="corr">s</span>elb<span className="orig">ﬅ</span><span className="corr">st</span> leitete,
                      <br className="lb" />{" "}
                      daß du dann doch herkommen{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      bei{" "}
                      <span className="persName">
                        <span className="makierung">
                        <span className="g.rend.script.latin">Julchen</span>{" "}
                        </span>
                      </span>
                      oder
                      <br className="lb" />{" "}
                      <span className="persName">
                        <span className="makierung">
                        <span className="g.rend.script.latin">Overbecks</span>
                        </span>
                      </span>{" "}
                      logiren mögte<span className="orig">ﬅ</span><span className="corr">st</span>, kurz <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>pricht von
                      <br className="lb" />{" "}
                      un<span className="orig">ſ</span><span className="corr">s</span>erer Haushaltung als einer nahen gewohnten Sache,
                      <br className="lb" />{" "}
                      und zwar immer mit vieler Gemüthlichkeit. Be<span className="orig">ſ</span><span className="corr">s</span>onders
                      <br className="lb" />{" "}
                      i<span className="orig">ﬅ</span><span className="corr">st</span> ihr aufgefallen, daß Papa ihr die Sache mit einer
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>o außergewöhnlichen Fröhlichkeit{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      Ruhe erzählt habe,
                      <br className="lb" />{" "}
                      da er doch <span className="orig">ſ</span><span className="corr">s</span>on<span className="orig">ﬅ</span><span className="corr">st</span> nie habe vom Heirathen hören wollen,
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>ie <span className="orig">ſ</span><span className="corr">s</span>ieht die<span className="orig">ſ</span><span className="corr">s</span>e Stimmung des guten Papas als nicht
                      <br className="lb" />{" "}
                      von Ungefähr an, und hat auch recht{" "}
                      <a id="txt.subst001.norm.s"></a>da
                      <span className="overwritten">zu</span>
                      <span className="add">bei</span>
                      <a id="txt.subst001.norm.e"></a>.<a id="mark.004.e"></a>
                    </span>
                    {" "}Sie lobte
                    <br className="lb" />{" "}
                    den{" "}
                    <span className="persName">
                        <span className="makierung">
                      <span className="g.rend.script.latin">August</span>
                      </span>
                    </span>{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>ehr, <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>agte er habe <span className="orig">ſ</span><span className="corr">s</span>ich treu und
                    <br className="lb" />{" "}
                    bürgerlich gezeigt, daß er mir <span className="orig">ſ</span><span className="corr">s</span>o redlich beige<span className="orig">ﬅ</span><span className="corr">st</span>anden
                    <br className="lb" />{" "}
                    habe. Kurz, täglich habe ich neue Ur<span className="orig">ſ</span><span className="corr">s</span>ache, mich zu
                    <br className="lb" />{" "}
                    freuen, <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    Gott für die gnädige Erhörung un<span className="orig">ſ</span><span className="corr">s</span>erer beider<span className="orig doublehyphen">⹀</span>
                    <br className="g.enc.tagsdecl.hyphenation.eq" />
                    <span className="orig">ſ</span><span className="corr">s</span>eitigen <span className="orig">Gebäte</span>
                    <span className="corr">Gebete</span> zu danken. – Als mein
                    Bruder{" "}
                    <span className="persName">
                      <span className="makierung">
                      <span className="g.rend.script.latin">Casper</span>
                      </span>
                    </span>
                    <br className="lb" />{" "}
                    <span className="strike-through" style={{ textDecoration: "line-through" }}>
                      es
                    </span>{" "}
                    der guten{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Julchen</span>
                    </span>{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>agte, daß <span className="orig">ſ</span><span className="corr">s</span>ie dich zur Schwe<span className="orig">ﬅ</span><span className="corr">st</span>er
                    <br className="lb" />{" "}
                    bekommen würde, weinte die<span className="orig">ſ</span><span className="corr">s</span>e Freudenthränen,{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>
                    <br className="lb" />{" "}
                    konnte vor froher{" "}
                    <span className="orig">Ueberra<span className="orig">ſ</span><span className="corr">s</span>chung</span>
                    <span className="corr">Überra<span className="orig">ſ</span><span className="corr">s</span>chung</span> die Nacht kaum{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chlafen.
                    <br className="lb" />{" "}
                    Du wir<span className="orig">ﬅ</span><span className="corr">st</span> an ihr eine rechte liebe Schwe<span className="orig">ﬅ</span><span className="corr">st</span>er bekommen.
                    <br className="lb" />{" "}
                    <span className="orig">Ueberhaupt</span>
                    <span className="corr">Überhaupt</span> <span className="orig">ſ</span><span className="corr">s</span>pricht alles hier
                    mit großer Theilnahme
                    <br className="lb" />{" "}
                    von dir be<span className="orig">ſ</span><span className="corr">s</span>onders{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Overbecks</span>
                    </span>{" "}
                    und{" "}
                    <span className="persName">
                        <span className="makierung">
                      <span className="g.rend.script.latin">Wittensteins</span>
                      </span>
                    </span>
                    , wo das Haus
                    <br className="lb" />{" "}
                    damals ver<span className="orig">ſ</span><span className="corr">s</span>choben wurde, weißt du noch? Den alten
                    <br className="lb" />{" "}
                    <span className="persName">
                      <span className="g.rend.script.latin">Overbecks</span>
                    </span>
                    {" "}will ich er<span className="orig">ﬅ</span><span className="corr">st</span>er Tage mein Glück auch mittheilen,
                    <br className="lb" />{" "}
                    denn die nehmen recht herzlich Antheil an mir.
                  </p>
                  <p id="mark.007">
                  <span className="liebe">
                    <span style={{ marginLeft: "30px" }}>
                      Zu Zeiten will mir die Geduld reißen, bis ich
                    </span>
                      <br className=" red" />{" "}                      
                      unter un<span className="orig">ſ</span>
                      <span className="corr">s</span>eren beiden Familien un<span className="orig">ſ</span>
                      <span className="corr">s</span>
                      <span>er Verhältniß</span> <sup className="sup txt-add002" id="txt.add002">ganz</sup> be
                      <span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      kannt <span className="orig">ſ</span><span className="corr">s</span>ehe, denn du glaub<span className="orig">ﬅ</span><span className="corr">st</span> gar nicht, wie unangenehm
                      <br className="lb" />{" "}                      
                      es mir oft gewe<span className="orig">ſ</span><span className="corr">s</span>en i<span className="orig">ﬅ</span><span className="corr">st</span>, eine <span className="orig">ſ</span><span className="corr">s</span>o ehrliche{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      gute Sache wie
                    </span>
                  </p>
                </div>
                <div
                  className="page"
                  style={{
                    paddingTop: "40px",
                    paddingLeft: "110px",
                    paddingBottom: "46px",
                    marginTop: "-7px",
                  }}
                >
                  {/* Page 4 */}
                  <p>
                    <span className="liebe">
                    un<span className="orig">ſ</span><span className="corr">s</span>ere Liebe mit einer <span className="orig">ſ</span><span className="corr">s</span>o äng<span className="orig">ﬅ</span><span className="corr">st</span>lichen Vor<span className="orig">ſ</span><span className="corr">s</span>ichtigkeit
                    <br className="lb" />{" "}
                    behandeln zu <span className="orig">müßen</span>
                    <span className="corr">müssen</span>. Und doch, ich <span className="orig">ſ</span><span className="corr">s</span>ehe es
                    jetzt mehr
                    <br className="lb" />{" "}
                    ein wie je, war die<span className="orig">ſ</span><span className="corr">s</span>e nöthig um einen <span className="orig">ſ</span><span className="corr">s</span>o glücklichen
                    <br className="lb" />{" "}
                    Ausgang herbei führen zu helfen, denn es würde auf
                    <br className="lb" />{" "}
                    Papa einen ganz verkehrten Eindruck gemacht haben
                    <br className="lb" />{" "}
                    wenn er auf einem andern Wege als durch mich, etwas
                    <br className="lb" />{" "}
                    Be<span className="orig">ﬅ</span><span className="corr">st</span>immtes darüber gehört hätte.
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Bis nach meiner Rei<span className="orig">ſ</span><span className="corr">s</span>e – doch darüber Morgen mehr,
                    <br className="lb" />{" "}
                    denn es i<span className="orig">ﬅ</span><span className="corr">st</span> ½ 1 <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    die Natur fordert auch das ihre; nämlich
                    <br className="lb" />{" "}
                    den Schlaf. Du <span className="orig">ſ</span><span className="corr">s</span>chläf<span className="orig">ﬅ</span><span className="corr">st</span> jetzt wohl <span className="orig">ſ</span><span className="corr">s</span>üß,{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    träum<span className="orig">ﬅ</span><span className="corr">st</span> vielleicht
                    <br className="lb" />{" "}
                    von mir. Schlafe dann unter Gottes Schutz <span className="orig">ſ</span><span className="corr">s</span>anft, und
                    <br className="lb" />{" "}
                    wache morgen froh auf.
                    
                      <div className="dateline text-right nopadding" style={{paddingRight: "310px",}}>
                        <span className="date">
                          den 4
                          <span className="#g.enc.tagsdecl.cc.abbr-colon-sup">
                            .<sup className="hochgestellt">ten</sup>
                          </span>{" "}
                          Nachmittags
                        </span>
                        .
                      </div>
                      </p>

                    <p>
                      Zu meinem Bedauern ging heute keine Po<span className="orig">ﬅ</span><span className="corr">st</span> nach{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">Hamm</span>
                      </span>
                      <br className="lb" />{" "}
                      ab, und du bekomm<span className="orig">ﬅ</span><span className="corr">st</span> daher meinen Brief um einen
                      <br className="lb" />{" "}
                      Tag <span className="orig">ſ</span><span className="corr">s</span>päter. <a id="mark.008.s"></a>
                      <span className="liebe">
                        Du würde<span className="orig">ﬅ</span><span className="corr">st</span> die<span className="orig">ſ</span><span className="corr">s</span>en Brief <span className="orig">ſ</span><span className="corr">s</span>chon <span className="orig">ſ</span><span className="corr">s</span>eit Mittwoch
                        <br className="lb" />{" "}
                        oder Dien<span className="orig">ﬅ</span><span className="corr">st</span>ag gehabt haben, denn nichts lag mir mehr am
                        <br className="lb" />{" "}
                        Herzen, als dich gutes treues Bräutchen ganz zu
                        beruhigen,
                        <br className="lb" />{" "}
                        aber ich wollte dir gerne den er<span className="orig">ﬅ</span><span className="corr">st</span>en Brief auf die
                        <br className="lb" />{" "}
                        neben erzählte Art <span className="orig">ſ</span><span className="corr">s</span>chicken{" "}
                        <span className="abbr"> u.</span>
                        <span className="expan">
                          u<span className="ex">nd</span>
                        </span>{" "}
                        hoffte von Tag zu Tag,
                        <br className="lb" />{" "}
                        daß <span className="orig">ſ</span><span className="corr">s</span>ich eine gün<span className="orig">ﬅ</span><span className="corr">st</span>ige Gelegenheit, mit <span className="makierung">Pathohm</span> zu{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>prechen,
                        <br className="lb" />{" "}
                        darbieten würde. Zulezt konnte ich’s{" "}
                        <sup className="sup" id="txt.add002">
                          aber
                        </sup>{" "}
                        nicht mehr aushalten,
                        <br className="lb" />{" "}
                        und bat meine Eltern um Erlaubniß, dir vorläufig
                        <br className="lb" />{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>chreiben und die Einwilligung von Mama zu deiner
                        Beruhigung
                        <br className="lb" />{" "}
                        mittheilen zu dürfen. Von die<span className="orig">ſ</span><span className="corr">s</span>er Seite mußt du meinen
                        <br className="lb" />{" "}
                        jetzigen Brief an<span className="orig">ſ</span><span className="corr">s</span>ehen, es ko<span className="orig">ﬅ</span><span className="corr">st</span>et mir fa<span className="orig">ﬅ</span><span className="corr">st</span>{" "}
                        <span className="orig">Ueberwindung</span>
                        <span className="corr">Überwindung</span>,
                        <br className="lb" />{" "}
                        ihn an <span className="persName"><span className="makierung">Friederike</span></span>{" "}
                        <span className="g.rend.script.latin">
                          adressiren
                        </span>{" "}
                        zu{" "}
                        <span className="orig">müßen</span>
                        <span className="corr">müssen</span>, <span className="orig">ſ</span><span className="corr">s</span>o <span className="orig">ſ</span><span className="corr">s</span>ehr <span className="orig">ſ</span><span className="corr">s</span>cheue
                        <br className="lb" />{" "}
                        ich nun noch jeden Umweg,{" "}
                        <span className="abbr"> u.</span>
                        <span className="expan">
                          u<span className="ex">nd</span>
                        </span>{" "}
                        <span className="orig">ſ</span><span className="corr">s</span>o gerne möchte ich die Sache
                        <br className="lb" />{" "}
                        zwi<span className="orig">ſ</span><span className="corr">s</span>chen un<span className="orig">ſ</span><span className="corr">s</span>eren Familien klar <span className="orig">ſ</span><span className="corr">s</span>ehen.{" "}
                        <a id="mark.008.e"></a>
                      </span>
                      Nun wieder
                      <br className="lb" />{" "}
                      da angefangen wo ich die vergangene Nacht aufhörte.
                      <br className="lb" />{" "}
                      <a id="mark.009.s"></a>
                      <span className="liebe reisen">
                        Bis nach meiner Rei<span className="orig">ſ</span><span className="corr">s</span>e, al<span className="orig">ſ</span><span className="corr">s</span>o gegen den Herb<span className="orig">ﬅ</span><span className="corr">st</span>, wird un<span className="orig">ſ</span><span className="corr">s</span>ere
                        <br className="lb" />{" "}
                        Liebe nur un<span className="orig">ſ</span><span className="corr">s</span>ern Familien bekannt <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n dürfen
                        <br className="lb" />{" "}
                        dann können un<span className="orig">ſ</span><span className="corr">s</span>ere Aeltern ja ent<span className="orig">ſ</span><span className="corr">s</span>cheiden, ob es
                        <br className="lb" />{" "}
                        Zeit zur öffentlichen Bekanntmachung <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>e.
                        <a id="mark.009.e"></a>
                      </span>
                    </p>
                    <p className="enc.tagsdecl.indent-medium">
                      Wir wollen uns nun ganz geduldig verhalten
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      uns des Guten freuen, was wir Gott <span /><span className="orig">ſeÿ</span><span className="corr">sey</span> Dank jetzt
                      <br className="lb" />{" "}
                      zu genießen haben, nun wird uns ein wenig Warten
                    </p>
                  </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "35px",
                    paddingLeft: "110px",
                    paddingBottom: "35px",
                  }}
                >
                  {/* Page 5 */}
                  <p>
                    nicht <span className="orig">ſ</span><span className="corr">s</span>auer nicht wahr liebe{" "}
                    <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span>?{" "}
                    <span className="orig">Uebrigens</span>
                    <span className="corr">Übrigens</span> werde ich hier
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chon von allen Seiten mit dir geneckt,{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    dir wirds auch <span className="orig">ſ</span><span className="corr">s</span>o gehen.
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <a id="mark.010.s"></a>
                    <span className="reisen">
                      Meine Mutter frug mich ge<span className="orig">ﬅ</span><span className="corr">st</span>ern, ob mich meine
                      <br className="lb" />{" "}
                      Rei<span className="orig">ſ</span><span className="corr">s</span>e nicht über <span className="placeName">
                        Hamm
                      </span>{" "}
                      führte; durch Umwege wohl,
                      <br className="lb" />{" "}
                      antwortete ich. Vielleicht könnte<span className="orig">ﬅ</span><span className="corr">st</span> du es dann bei deiner
                      <br className="lb" />{" "}
                      Rückrei<span className="orig">ſ</span><span className="corr">s</span>e einrichten, daß du deine{" "}
                      <span className="persName">Eli<span className="orig">ſ</span><span className="corr">s</span>e</span> einmal wieder
                      <br className="lb" />{" "}
                      <span className="orig">ſ</span><span className="corr">s</span>ähe<span className="orig">ﬅ</span><span className="corr">st</span>, erwiederte <span className="orig">ſ</span><span className="corr">s</span>ie freundlich. – Ob die<span className="orig">ſ</span><span className="corr">s</span>es gehen kann
                      <br className="lb" />{" "}
                      darüber bin ich zwar noch nicht im Stande dir etwas be<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      <span className="orig">ﬅ</span><span className="corr">st</span>immtes zu <span className="orig">ſ</span><span className="corr">s</span>agen, wenns mir halb möglich i<span className="orig">ﬅ</span><span className="corr">st</span>, <span className="orig">ſ</span><span className="corr">s</span>o wir<span className="orig">ﬅ</span><span className="corr">st</span>
                      <br className="lb" />{" "}
                      du überzeugt <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n, daß kein Umweg von 30 Stunden mich
                      davon
                      <br className="lb" />{" "}
                      abhalten kann; mich freute nur bei die<span className="orig">ſ</span><span className="corr">s</span>er Äußerung
                      <br className="lb" />{" "}
                      die liebevolle Sorge meiner Mutter.
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="reisen">
                      Meine Rei<span className="orig">ſ</span><span className="corr">s</span>e wird mich über{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">
                          <span className="abbr">
                            {" "}Frankfurt <sup>a</sup>/M
                          </span>
                          <span className="expan">
                            Frankfurt a<span className="ex">m</span> M
                            <span className="ex">ain</span>
                          </span>
                        </span>
                      </span>
                      ,{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">Stuttgardt</span>
                      </span>
                      ,{" "}<br className="lb" />{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">München</span>
                      </span>
                      ,{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">Augsburg</span>,{" "}
                      </span>
                      <span className="placeName">
                        <span className="g.rend.script.latin">Salzburg</span>{" "}
                      </span> 
                      vielleicht{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>
                        <span className="placeName">
                          <span className="g.rend.script.latin">Linz{" "}{" "}
                            <sup style={{marginRight: "-32px", marginLeft: "10px", textDecoration: "underline", textDecorationThickness: "2px"}}>an der</sup>
                            <sub className="strike-through" style={{textDecoration: "line-through", transform: "translateX(-35px)", display: "inline-block", marginRight: "-30px"}}>Donau</sub>
                          </span>
                        </span>
                      </span>
                      <span className="orig">,</span>{" "}
                      <span className="corr" />
                      <span className="placeName">
                        <span className="g.rend.script.latin">Inspruk</span>
                      </span>
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      dann über{" "}
                      <span className="placeName">
                        <span className="g.rend.script.latin">Nürnberg</span>
                      </span>{" "}
                      wieder zurück führen. Mein
                      <br className="lb" />{" "}
                      Tro<span className="orig">ﬅ</span><span className="corr">st</span> auf der Rei<span className="orig">ſ</span><span className="corr">s</span>e wird <span className="orig">ſ</span><span className="corr">s</span>eyn, daß ich an dich <span className="orig">ſ</span><span className="corr">s</span>chreiben
                      <br className="lb" />{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      denken kann,{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      beides werde ich redlich thun. Mit
                      <br className="lb" />{" "}
                      dem Aufgeben der{" "}
                      <span className="g.rend.script.latin">Adressen</span> hat
                      es <span className="orig">ſ</span><span className="corr">s</span>eine Schwierigkeiten
                      <br className="lb" />{" "}
                      weil du meine Route nicht <span className="orig">ſ</span><span className="corr">s</span>o verfolgen kann<span className="orig">ﬅ</span><span className="corr">st</span>
                      <span className="overwritten">,</span>
                      <span className="add">.</span>
                      <span className="overwritten">
                        <span className="gap"><span className="corr">[...]</span><span class="gap-x"> xxx</span></span>
                      </span>
                      
                      <span className="add">Es</span>
                      <br className="lb" />{" "}
                      wird daher am be<span className="orig">ﬅ</span><span className="corr">st</span>en <span className="orig">ſ</span><span className="corr">s</span>e<span className="orig">ÿ</span>
<span className="corr">y</span>n, daß du deine Briefe an
                      <br className="lb" />{" "}
                      meinen Bruder{" "}
                      <span className="persName">
                        <span className="g.rend.script.latin">Casper</span>
                      </span>
                      {" "}
                      <span className="orig">ſ</span><span className="corr">s</span>chick<span className="orig">ﬅ</span><span className="corr">st</span>, <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      die<span className="orig">ſ</span><span className="corr">s</span>er <span className="orig">ſ</span><span className="corr">s</span>ie an den <span className="makierung">Handlungs<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      briefen</span> an mich beifügt.<a id="mark.010.e"></a>
                    </span>{" "}
                    Nur daß du mir recht fleißig
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chreib<span className="orig">ﬅ</span><span className="corr">st</span>, und immer eingedenk bi<span className="orig">ﬅ</span><span className="corr">st</span>, daß <span className="orig">ſ</span><span className="corr">s</span>o etwas
                    <br className="lb" />{" "}
                    ein wahres Lab<span className="orig">ſ</span><span className="corr">s</span>al in der Ferne i<span className="orig">ﬅ</span><span className="corr">st</span>. Vor meiner
                    <br className="lb" />{" "}
                    Abrei<span className="orig">ſ</span><span className="corr">s</span>e be<span className="orig">ſ</span><span className="corr">s</span>uche ich den guten
                    {" "}<span className="persName">
                      <span className="makierung">
                      <span className="g.rend.script.latin">Ludwig</span>
                      </span>
                    </span>{" "}
                    in{" "}
                    <span className="placeName">
                      <span className="g.rend.script.latin">Moeurs</span>
                    </span>
                    , um
                    <br className="lb" />{" "}
                    auch mit die<span className="orig">ſ</span><span className="corr">s</span>em recht von der Leber <span className="orig">ſ</span><span className="corr">s</span>prechen zu können.
                    <br className="lb" />{" "}
                    <span className="orig">J</span>
<span className="corr">I</span>ch hoffe er wird nichts gegen den neuen Schwager ein
                    <br className="g.enc.tagsdecl.hyphenation.divis" />
                    zuwenden haben.
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    <span className="persName">
                      <span className="g.rend.script.latin">August</span>
                    </span>
                    {" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chreibt mir ge<span className="orig">ﬅ</span><span className="corr">st</span>ern, daß <span className="orig">ſ</span><span className="corr">s</span>ie übermorgen
                    <br className="lb" />{" "}
                    nach <span className="placeName">Siegburg</span>{" "}
                    abmar<span className="orig">ſ</span><span className="corr">s</span>chieren, um dort Batterien zu
                    <br className="lb" />{" "}
                    bauen, <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    die Revüe abzuhalten. Der arme Schelm
                    <br className="lb" />{" "}
                    wird noch tüchtig <span className="orig">ſ</span><span className="corr">s</span>chwitzen{" "}
                    <span className="orig">müßen</span>
                    <span className="corr">müssen</span>. – Er läßt dich
                    <br className="lb" />{" "}
                    aufs herzlich<span className="orig">ﬅ</span><span className="corr">st</span>e <span className="overwritten">G</span>
                    <span className="add">g</span>rüßen. –{" "}
                    <span className="orig">Ueber</span>
                    <span className="corr">Über</span> den wichtigern Sachen
                    <br className="lb" />{" "}
                    habe ich <span className="orig">vergeßen</span>
                    <span className="corr">vergessen</span>, dir mein gutes
                    Mädchen für den <span className="orig">ſ</span><span className="corr">s</span>chönen
                    <br className="lb" />{" "}
                    Tabaksbeutel zu danken, thue es aber hiermit herzlich,
                    <br className="lb" />{" "}
                    <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    küßte dich gar zu gerne dafür, wenn du nur <span className="orig">ﬅ</span><span className="corr">st</span>att
                    <br className="lb" />{" "}
                    der alten Frau da auf der Kuppel der Tabaksdo<span className="orig">ſ</span><span className="corr">s</span>e, die
                    <br className="lb" />{" "}
                    grade vor mir <span className="orig">ﬅ</span><span className="corr">st</span>eht, vor mir <span className="orig">ﬅ</span><span className="corr">st</span>ände<span className="orig">ﬅ</span><span className="corr">st</span>. Doch ganz gelaßen??
                    <br className="lb" />{" "}
                    wi<span className="orig">ſ</span><span className="corr">s</span>che ich mir den Mund, <span className="abbr"> u.</span>
                    <span className="expan">
                      u<span className="ex">nd</span>
                    </span>{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>chreibe weiter. Ja wohl
                    <br className="lb" />{" "}
                    Geduld überwindet alles!
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "85px",
                    paddingLeft: "110px",
                    paddingBottom: "261px",
                  }}
                >
                  {/* Page 6 */}
                  <p>
                    Doch bald i<span className="orig">ﬅ</span><span className="corr">st</span> es Zeit daß ich ans Ende denke, denn
                    <br className="lb" />{" "}
                    <span className="orig">ſ</span><span className="corr">s</span>on<span className="orig">ﬅ</span><span className="corr">st</span> ver<span className="orig">ſ</span><span className="corr">s</span>chreibe ich un<span className="orig">ſ</span><span className="corr">s</span>ern ganzen Papiervorrath:
                    <br className="lb" />{" "}
                    <span className="orig">J</span>
<span className="corr">I</span>ch glaube ich könnte noch einen ganzen Tag am Plaudern
                    <br className="lb" />{" "}
                    mit dir bleiben. <a id="mark.011.s"></a>
                    <span className="liebe">
                      Wir wollen uns freuen, daß wir
                      <br className="lb" />{" "}
                      durch Schreiben uns etwas mittheilen können, indeß
                      <br className="lb" />{" "}
                      im Ganzen i<span className="orig">ﬅ</span><span className="corr">st</span> es doch ein erbärmliches Behelfsmittel
                      <br className="lb" />{" "}
                      <span className="">
                        <span className="orig strikethrough">ﬅ</span>
                        <span className="gap"> 
                          <span className="gap-x strikethrough"> xxxxx</span>
                        </span>
                      </span>{" "}
                      <span className="corr">st</span>
                      <span className="corr">[...]{" "}</span>
                      <sup className="sup" id="txt.add001">
                        im Vergleich mit
                      </sup>{" "}
                      der Wonne, im Arme eines <span className="orig">ſ</span><span className="corr">s</span>olchen Mädchens wie
                      <br className="lb" />{" "}
                      <span className="persName">
                        <span className="underline">
                          meine Eli<span className="orig">ſ</span><span className="corr">s</span>e
                        </span>
                      </span>
                      {" "}die Stunden vorbeifliegen zu{" "}
                      <span className="orig">laßen</span>
                      <span className="corr">lassen</span>
                      <br className="lb" />{" "}
                      und die Seelen in einander zu ergießen. <span className="">–</span>
                      <a id="mark.011.e"></a>
                    </span>
                  </p>
                  <p className="enc.tagsdecl.indent-medium">
                    Wie <span className="orig">ſ</span><span className="corr">s</span>ieht es nun mit deiner Antwort aus? <span className="orig">J</span>
<span className="corr">I</span>ch
                    <br className="lb" />{" "}
                    hoffe du wir<span className="orig">ﬅ</span><span className="corr">st</span> mich nicht warten{" "}
                    <span className="orig">laßen</span>
                    <span className="corr">lassen</span>, und dich
                    <br className="lb" />{" "}
                    gleich, wenns dir möglich i<span className="orig">ﬅ</span><span className="corr">st</span> hin<span className="orig">ſ</span><span className="corr">s</span>etzen und mir auch
                    <br className="lb" />{" "}
                    einen recht ellenlangen Brief <span className="orig">ſ</span><span className="corr">s</span>chreiben;{" "}
                    <span className="orig">Es</span>
                    <span className="corr">es</span> wird
                    <br className="lb" />{" "}
                    dir gewiß auch wohl thun, einmal <span className="orig">ſ</span><span className="corr">s</span>o recht nach Herzen<span className="orig">ſ</span><span className="corr">s</span>lu<span className="orig">ﬅ</span><span className="corr">st</span>
                    <br className="lb" />{" "}
                    mit mir plaudern zu können. Schlage deinen Brief
                    <br className="lb" />{" "}
                    an{" "}
                    <span className="makierung">
                    <span className="persName">
                      <span className="abbr"> M.</span>
                      <span className="expan">
                        M<span className="ex">inchen</span>
                      </span></span>{" "}
                      <span className="makierung">Sparrenberg</span>
                    </span>
                    {" "}
                    ein.
                  </p>
                  <span className="religion">
                  <p className="enc.tagsdecl.indent-medium" id="mark.012">
                    Morgen gehe ich zum <span className="abbr"> heil.</span>
                    <span className="expan">
                      heil<span className="ex">igen</span>
                    </span>{" "}
                    Abendmahl; o Gott wie danke
                    <br className="lb" />{" "}
                    ich dir, daß ich nun mit einer <span className="orig">ſ</span><span className="corr">s</span>o gänzlichen Ruhe die<span className="orig">ſ</span><span className="corr">s</span>e
                    <br className="lb" />{" "}
                    wichtige Handlung begehen kann!
                  </p>
                  </span>
                  <div className="closer">
                    <p className="enc.tagsdecl.indent-medium">
                      <span className="makierung">Meine Ge<span className="orig">ſ</span><span className="corr">s</span>chwi<span className="orig">ﬅ</span><span className="corr">st</span>er</span>, meine{" "}
                      <span className="abbr"> l.</span>
                      <span className="expan">
                        l<span className="ex">ieben</span>
                      </span>{" "}
                      Eltern{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>
                      {" "}
                      <span className="persName">
                        <span className="abbr"> M.</span>
                        <span className="expan">
                          M<span className="ex">inchen</span>
                        </span>
                        {" "}
                        Sparrenberg
                      </span>
                      <br className="lb" />{" "}
                      <span className="orig">laßen</span>
                      <span className="corr">lassen</span> dich herzlich grüßen.
                      Schreibe mir ja bald, und
                      <br className="lb" />{" "}
                      grüße <span className="persName"><span className="makierung">Hannchen</span></span>{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      deine Freundinn{" "}
                      <span className="persName">
                        <span className="abbr"> F.</span>
                        <span className="expan">
                          F<span className="ex">riederike</span>
                        </span>{" "}
                        Schmitz{" "}
                      </span>
                      unbe<span className="orig doublehyphen">⹀</span>
                      <br className="g.enc.tagsdecl.hyphenation.divis" />
                      kannter Wei<span className="orig">ſ</span><span className="corr">s</span>e herzlich von mir,{" "}
                      <span className="abbr"> u.</span>
                      <span className="expan">
                        u<span className="ex">nd</span>
                      </span>{" "}
                      denke oft an
                    </p>
                  </div>
                    <div className="closer">
                    <div className="signed-morespace-2 signed-right padding-169" >Deinen treuen</div>
                    <br />
                  </div>
                  
                  <div className="closer">
                    <div className="signed-morespace signed-right">
                      <span className="glyph">
                        <sup>.</sup>//.
                      </span>{" "}
                      <span className="persName">Friedrich</span>.
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
              top: "800px",
            }}
          >
            <hr />
            <label>Mit welchem frohen, […] wird es kennen.</label>
            <p>
            Im Vergleich mit den Brautbriefen seiner Eltern weisen die von Friedrich sen. mit seiner Geliebten und späteren Gattin Elise van Haar unzweideutig einen gefühlsbetonteren und intimeren Charakter auf – Beleg für den historischen Wandel der Liebes- und Ehekonzeption (siehe hierzu auch: Thorsten Dette: <i>„Ach Gott, welch ein seliges Gefühl ist doch die Liebe“: Brautbriefe der Familie Engels im Kontext zeitgenössischer Standesschranken und Hochzeitsbräuche.</i> In: Geschichte im Wuppertal (GIW) 24, 2015, <br />S. 6–22).
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1000px",
            }}
          >
            <hr />
            <label>meinem Oncle</label>
            <p>
            Benjamin Engels (1751–1820), genannt ‚Pathohm’ (Patenonkel), Teilhaber der Firma Caspar Engels Söhne in Barmen. Onkel von Friedrich Engels sen.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "1172px",
            }}
          >
            <hr />
            <label>Bremer Freund</label>
            <p>
            Nicht ermittelt.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1373px",
            }}
          >
            <hr />
            <label>deine guten Eltern</label>
            <p>
            Gerhard Bernhard van Haar (1760–1837) und Franziska Christina van Haar, geb. Snethlage (1758–1846). Großeltern von <br />Friedrich Engels jun.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "2054px",
            }}
          >
            <hr />
            <label>Friederike</label>
            <p>
            Louise Friederike Wilhelmine von Griesheim, geb. van Haar <br />(1789–1880), Schwester von Elise Engels, geb. van Haar <br />(1797–1873) und Tante von Friedrich Engels jun.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3228px",
            }}
          >
            <hr />
            <label>Julchen</label>
            <p>
            Wilhelmine Julie (Julchen) Engels, geb. Overbeck (1795–1846), 1815 Heirat mit Johann Caspar Engels III (1792–1863). Tante von Friedrich Engels jun.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3228px",
            }}
          >
            <hr />
            <label>Overbecks</label>
            <p>
            Johann Heinrich Overbeck (1767–1833), Kaufmann in Unterbarmen, und Johanna Wilhelmine Overbeck, geb. Wittenstein (1774–1844).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3430px",
            }}
          >
            <hr />
            <label>August</label>
            <p>
            August Engels (1797–1874), Fabrikbesitzer in Barmen. Onkel von Friedrich Engels jun.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "3546px",
            }}
          >
            <hr />
            <label>Caspar</label>
            <p>
            Johann Caspar Engels III (1792–1863), Teilhaber der Firma Caspar Engels Söhne in Barmen. (Erstgeborener) Bruder von<br /> Friedrich Engels sen.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "3664px",
            }}
          >
            <hr />
            <label>Wittensteins</label>
            <p>
            Vermutlich die Familien von Caspar Wilhelm Wittenstein (1770–1847) und Johannes Friedrich Wittenstein (1772–1847), Besitzer einer Türkischrot-Färberei an der Haspeler Brücke (Barmen). Es handelt sich um die Brüder von Johanna Wilhelmine Overbeck, geb. Wittenstein (1774–1844).
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "4739px",
            }}
          >
            <hr />
            <label>Pathohm</label>
            <p>
            Benjamin Engels (1751–1820), genannt ‚Pathohm‘ (Patenonkel), Teilhaber der Firma Caspar Engels Söhne in Barmen. Onkel des Vaters von Friedrich Engels.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "6002px",
            }}
          >
            <hr />
            <label>Handlungsbriefen</label>
            <p>
            Geschäftsbriefe.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "6062px",
            }}
          >
            <hr />
            <label>Ludwig</label>
            <p>
            Ludwig Leonhard Moritz van Haar (1790–1873), preußischer Oberförster in Moers und Xanten. Bruder von Elise Engels, geb. van Haar (1797–1873), und Onkel von Friedrich Engels.
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "7114px",
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
              top: "7260px",
            }}
          >
            <hr />
            <label>Meine Geschwister</label>
            <p>
            Johann Caspar Engels (1792–1863), August Engels (1797–1874) und Louise Engels (1799–1845).
            </p>
          </div>

          <div
            className="stellenerläuterung push-right"
            style={{
              top: "7316px",
            }}
          >
            <hr />
            <label>Hannchen</label>
            <p>
            Susanne Christine Johanne (Hannchen) van Haar (1802–1864), Schwester von Elise Engels, geb. van Haar (1797–1873), und Tante von Friedrich Engels jun.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "4883px",
            }}
          >
            <hr />
            <label>Friederike</label>
            <p>
            Friederike (Riekchen) Maria Menkhoff, geb. Schmits (1800–1882), Freundin von Elise Engels in Hamm.
            </p>
          </div>

        </div>
      </Brief_wrapper>
    </Layout>
  );
}
