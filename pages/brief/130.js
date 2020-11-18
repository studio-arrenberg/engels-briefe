import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "130";
  });

  console.log(item);
  const ners = item.map((data, index) => data.id);
  const date = item.map((data, index) => data.date);
  console.log(ners);

  return (
    <Layout>
      <Head>
        <title>Brief {date}</title>
      </Head>

      <Brief_wrapper key={`wrapper-${ners}`} data={item}>
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
                  <div className="kuvert" id="index.xml-body.1_div.1">
          <h2><span className="headingNumber">1. </span></h2>
          <div className="pagebreak" id="index.xml-pb-d29e97">
            <a href>[Page 4]</a>
          </div>
          <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
            <h3><span className="headingNumber">1.1. </span></h3>
            <p className="g.enc.tagsdecl.wd.vertical-left">
              <span className="address"><span style={{display: 'inline-block'}} width="1char">&nbsp;</span>An<br />
                <span className="persName">Fräulein Eliſe
                  <span className="g.rend.script.latin">van Haar</span></span><br />
                <span style={{display: 'inline-block'}} width="3words">&nbsp;</span>in<br />
                <span style={{display: 'inline-block'}} width="2words">&nbsp;</span><span style={{textDecoration: 'underline'}}>Hamm. </span><br /></span>
            </p>
          </div>
        </div>
              </section>
            </div>

            <section className="writing-session" id="index.xml-body.1_div.2">
            <div type="mark">
                <span type="liebe-ehe" from="#mark.001.s" to="#mark.001.e"/>
                <span type="liebe-ehe" from="#mark.002.s" to="#mark.002.e"/>
                <span type="liebe-ehe" from="#mark.003.s" to="#mark.003.e"/>
                <span type="religion" from="#mark.004.s" to="#mark.004.e"/>
            </div>
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
            <span style={{display: 'inline-block'}} width="11cm">&nbsp;</span>
            <div className="dateline">
              Barmen
              <span className="date"><span className="g.enc.tagsdecl.suspension.type1"> (d)</span><span className="expan">d<span className="ex">en</span></span> 21.
                <span className="g.rend.script.latin"><span className="abbr"> (Septemb.)</span><span className="expan">Septemb<span className="ex">er</span></span></span>
                1816. <br className="lb" />
                <span style={{display: 'inline-block'}} width="13cm">&nbsp;</span>Samﬅag</span>
              Abend.
            </div>
          </div>
          <div className="opener">
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>
            <div className="salute" id="teaser.part.001">
              Liebe <span className="persName">Eliſe</span>.
            </div>
          </div>

          
          <p>
          <span className="liebe">
            <a id="mark.001.s">{/*anchor*/}</a>An dieſem ruhigen Abende, wo alle
            Arbeiten<br className="lb" />
            für dieſe Woche ruhen, und alles ſich auf
            <span className="date">den kommenden Tag<br className="lb" />
              des Herrn</span>
            vorbereitet – dachte ich einige Augenblicke Dir, der<br className="lb" />
            Geliebten meines Herzens zu widmen.<a id="mark.001.e">{/*anchor*/}</a>
            </span>
            Die ganze Woche<br className="lb" />
            hatte ich den <span className="date">heutigen</span> Abend dazu beﬅimmt, und
            glücklicher<br className="g.enc.tagsdecl.hyphenation.divis" />weiſe kommt
            mir kein Hinderniß in den Weg.
          </p>
          <p>
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>Vermuthlich ſind
            wir zu einer Zeit in unſern älterlichen<br className="lb" />
            Häuſern wieder angelangt, denn wir waren kurz nach<br className="lb" />
            1 Uhr wieder hier; wo ich froh empfangen wurde.
          </p>
          <p>
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>Das waren ein
            paar frohe und wichtige Wochen, die<br className="lb" />
            Du bei uns verlebteﬅ! Sie haben über unſer beiderſeitiges<br className="lb" />
            Schickſal, will’s Gott beﬅimmt! 

            <span className="liebe">
            <a id="mark.002.s">{/*anchor*/}</a>O es
            wird mir immer<br className="lb" />
            klarer, daß wir für einander geſchaffen, daß unſer Zu<br className="g.enc.tagsdecl.hyphenation.divis" />ſammentreffen von dem gütigen Gotte geleitet wurde.<br className="lb" />
            Die ſonderbare, auffallende Veränderung der Stimmung<br className="lb" />
            in unſerm Hauſe, die Liebe die meine Eltern zu Dir<br className="lb" />
            zeigen, und gewiß auch haben, mein inneres Gefühl,<br className="lb" />
            wenn ich in dieſer wichtigen Sache mich zu unſerm himmliſchen<br className="lb" />
            Vater wandte – alles ſchien mir zu ſagen: „Das iﬅ das<br className="lb" />
            Mädchen, das ſich für Dich paßt, und an Deiner Seite dieſes<br className="lb" />
            Leben durchwandeln ſoll.“ – <a id="mark.004.s">{/*anchor*/}</a>
            
            <span className="religion">
            Nun
            liebe <span className="persName">Eliſe</span> laß uns täglich<br className="lb" />
            den lieben Gott bitten, (wie wir uns auch abgeſprochen haben)<br className="lb" />
            daß Er die Sache lenken und regieren wolle nach Seinem<br className="lb" />
            weiſen Rathe, und wenn’s Sein heiliger Wille iﬅ, uns ſeiner<br className="lb" />
            Zeit zuſammen vereinigen möge, damit wir Ihn alsdann<br className="lb" />
            durch unſer Leben preiſen und Seine gütige Führung bewundern.<br className="lb" />
            Auf dieſe Art wird uns unſere frühzeitige Bekanntſchaft<br className="lb" />
            zum wahren Nutzen dienen, und ein Mittel ſeÿn, im<br className="lb" />
            Chriﬅenthum weiter zu kommen; und Du ſollﬅ ſehen,<br className="lb" />
            die Zeit wird uns ſo ſchnell vergehen, daß wir ſelbﬅ es<br className="lb" />
            nicht begreifen können;
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>denn dieſe
            Stimmung, worin<br className="lb" />
            wir auf Gott vertrauen, bewahrt uns vor jenem Leiden<br className="g.enc.tagsdecl.hyphenation.divis" />ſchaftlichen, welches die Ruhe ﬅört, und zu den äußern<br className="lb" />
            gewöhnlichen <span className="orig">Beſchäfftigungen</span><span className="corr">Beſchäftigungen</span> oft unfähig macht.
            </span>
            </span>
          </p>
                
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
                <span className="liebe">
                  
                  <p>
                  <span className="religion">
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>Nein ſo wollen
            wir es nicht anfangen. „Bethe und arbeite.“<br className="lb" />
            das iﬅ das rechte Präſervatif gegen Melancholie.<a id="mark.004.e">{/*anchor*/}</a>
            
            </span>
            – Ich will<br className="lb" />
            mich nun mit allem Fleiße dran geben, alles zu ﬅudiren,<br className="lb" />
            was zum Fabrikweſen gehört, weil ich meinem guten<br className="lb" />
            Papa keine größere Freude machen kann<span className="overwritten">.</span><span className="add">⟨,⟩</span> ich will alles<br className="lb" />
            thun was ich ihm an den Augen abſehen kann, und ich bin<br className="lb" />
            überzeugt, er läßt mich
            <sup className="sup" id="txt.add001">dann</sup> keine Fehlbitte thun.
          </p>
          <p>
            <span style={{display: 'inline-block'}} width="4em">&nbsp;</span>Auf dieſe Weiſe
            dünkt mich, können wir die folgenden<br className="lb" />
            paar Jahre recht vergnügt verleben; wir wiſſen ja Beide<br className="lb" />
            woran wir ſind, und unſere Liebe wird im Stillen immer<br className="lb" />
            mehr zunehmen. Von Deiner Treue bin ich nur zu ſehr<br className="lb" />
            überzeugt, und auf mich kannﬅ Du unter Gottes Beiﬅand ja<br className="lb" />
            auch zählen; – Dein Bild wird mich begleiten ſeÿ es hier,<br className="lb" />
            oder auf Reiſen.
          </p>
          </span>
          <p>
            <span className="liebe">
            <span style={{display: 'inline-block'}} width="8em">&nbsp;</span><a id="teaser.part.002.s">{/*anchor*/}</a>Dieſer erﬅe Brief, den ich
            in meinem Leben<br className="lb" />
            an <span style={{textDecoration: 'underline'}}>meine</span>
            <span style={{textDecoration: 'underline'}}>Geliebte</span> ſchreibe, iﬅ
            ein wenig ernﬅhaft aus<br className="g.enc.tagsdecl.hyphenation.divis" />gefallen, nicht wahr liebe <span className="persName">Eliſe</span>?<a id="teaser.part.002.e">{/*anchor*/}</a>
            <span className="orig">indeßen</span><span className="corr">Indessen</span> ſage
            ich es gerne<br className="lb" />
            wie’s mir ums Herze iﬅ, und ſo gehts Dir auch das weiß<br className="lb" />
            ich; offen wollen wir dann auch immer mit einander<br className="lb" />
            reden, o es thut einem oft ſo wohl, wenn man ſein<br className="lb" />
            Herze ausſchütten kann!<a id="mark.002.e">{/*anchor*/}</a> 
            </span>
            – Nun von
            was anderm:<br className="lb" />
            <span className="persName"><span className="abbr"> (M.)</span><span className="expan">M<span className="ex">inchen</span></span>
              Sparenberg</span>
            wird in einiger Zeit nach
            <span className="g.rend.script.latin">Wesel </span> reiſen,<br className="lb" />
            und dann den Winter bei Euch zubringen. Dieſes<br className="lb" />
            letztere freut mich ſehr für Dich; Ihr könnt dann noch<br className="lb" />
            zuweilen von dem hieſigen Weſen zuſammen plaudern,<br className="lb" />
            und Du haﬅ für einige Zeit noch jemand um Dich, dem<br className="lb" />
            unſere Angelegenheit bekannt iﬅ.
          </p>
          <span className="liebe">
          <p>
            <span style={{display: 'inline-block'}} width="4em">&nbsp;</span><a id="mark.003.s">{/*anchor*/}</a>Ich glaube faﬅ,
            <span className="g.rend.script.latin">Griesheim </span> hat in
            <span className="placeName">Hagen</span> etwas ge<br className="g.enc.tagsdecl.hyphenation.divis" />merkt, nicht wahr? <span className="orig">das</span><span className="corr">Das</span> thut <span className="orig">indeßen</span><span className="corr">indessen</span> nichts, er wird es<br className="lb" />
            doch einmal beﬅimmter gewahr werden.
            <span style={{display: 'inline-block'}} width="2em">&nbsp;</span><span className="orig">Laße</span><span className="corr">Lasse</span><br className="lb" />
            Du Dir aber nichts merken, denn es iﬅ wirklich
            <span className="orig">beßer</span><span className="corr">besser</span>,<br className="lb" />
            wenn alles für’s erﬅe noch ganz ﬅille bleibt; denn<br className="lb" />
            mein Papa darf meine Liebe zu Dir durchaus durch

            </p>
            </span>
              </div>

              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                <span className="liebe">
                {/* Insert Page 3 */}
                <p>
            keinen andern als durch mich erfahren, ſonﬅ würden wir<br className="lb" />
            unſerer Sache ſelbﬅ ſchaden; und Deinem Vater ſagte<br className="lb" />
            ich es auch gerne ſelbﬅ. –
          </p>
          <p>
            <span style={{display: 'inline-block'}} width="4em">&nbsp;</span>Mit den Briefen
            <span className="orig">müßen</span><span className="corr">müssen</span> wir
            ebenfalls alle Vorſicht<br className="lb" />
            beobachten, und einander lieber nicht ſo häufig ſchreiben.<br className="lb" />
            Wenn ich doch nur jemand wüßte woran Du oder
            <span className="persName"><span className="abbr"> (M.)</span><span className="expan">M<span className="ex">inchen</span></span>
              <br className="lb" />
              Sparenberg</span>
            die Briefe <span className="g.rend.script.latin">adressiren</span> könnte,
            wenn die letztere<br className="lb" />
            nicht mehr bei uns iﬅ! Vielleicht muß es noch Freund<br className="lb" />
            <span className="g.rend.script.latin">Keetmann </span> werden, der doch die
            Sache ſchon ziemlich errathen<br className="lb" />
            hat, wie ich heute noch an ihm merkte; nun, auch hierzu<br className="lb" />
            wird ſich noch ein Ausweg finden.<a id="mark.003.e">{/*anchor*/}</a>
          </p>
          </span>
          <blockquote className="closer">
            <p>
              <span style={{display: 'inline-block'}} width="4em">&nbsp;</span>Jetzt ſoll ich
              wohl ſo allgemach an’s ſchließen denken<br className="lb" />
              <span className="orig">müßen</span><span className="corr">müssen</span>, weil
              es ſchon ziemlich ſpät iﬅ. Lebe dann<br className="lb" />
              innig geliebte <span className="persName">Eliſe</span> recht wohl und
              vergnügt bei den<br className="lb" />
              Deinigen. <span style={{display: 'inline-block'}} width="2em">&nbsp;</span>
              <span className="persName"><span className="abbr"> (M.)</span><span className="expan">M<span className="ex">inchen</span></span>
                Sparenberg</span>
              hat mir verſprochen, Dir<br className="lb" />
              <span className="date">morgen</span> ein Kleid zu kaufen, und es Dir durch
              die<br className="lb" />
              <span className="orig">Ueberbringerinn</span><span className="corr">Überbringerin</span> die<span className="overwritten">s</span><span className="add">⟨ſ⟩</span>e<span className="overwritten">d</span><span className="add">⟨s⟩</span> Briefs mitzuſchicken. Nimm<br className="lb" />
              dieſe Kleinigkeit dann als ein Andenken von mir<br className="lb" />
              an, und erinnere Dich beim Tragen zuweilen des Gebers.<br className="lb" />
              Ich weiß meine <span className="persName">Eliſe</span> ſchätzt ein
              Geſchenk nicht nach deßen<br className="lb" />
              Geldwerth, ſondern nach der Abſicht die da<span className="damage">mi<span className="unclear">t[?]</span></span>
              verbunden<br className="lb" />
              war. – Punktum, Gedankenﬅrich! Für <span className="date">heute</span> iﬅs
              am Ende.<br className="lb" />
              Mein nächﬅer Brief wird luﬅiger werden,
              <span className="date">heute</span> <br className="lb" />
              wollte es nicht recht gehen, und ich zwinge mich
              <span className="overwritten">g</span><span className="add">⟨n⟩</span>icht
              gerne.
            </p>
          </blockquote>
          <blockquote className="closer">
            <p>
              <span style={{display: 'inline-block'}} width="4em">&nbsp;</span>Verzeihe mir
              mein ſchlechtes Schreiben, mein<br className="lb" />
              Federmeſſer iﬅ auf dem Comptoir, die Dinte ſo dick wie<br className="lb" />
              Breÿ, und der Tiſch wohl für
              <span className="g.rend.script.latin">Advocaten</span> aber nicht für<br className="lb" />
              Comptoriﬅen, die die Pulte gewohnt ſind, eingerichtet.
            </p>
          </blockquote>
          <blockquote className="closer">
            <p>
              <span style={{display: 'inline-block'}} width="4em">&nbsp;</span>Nochmals lebe
              recht wohl. Der gute Gott ſeÿ mit<br className="lb" />
              Dir und
            </p>
          </blockquote>
          <div className="closer">
            <span style={{display: 'inline-block'}} width="6words">&nbsp;</span>
            <div className="signed">
              Deinem treuen<br className="lb" />
              <span style={{display: 'inline-block'}} width="7words">&nbsp;</span><span className="g.rend.script.latin">Friedrich</span>.
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
