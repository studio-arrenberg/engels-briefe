import data from "../../public/data.json";
import React, { Children, Component } from "react";
import Brief_wrapper from "../../components/brief_wrapper";

export default function page() {
  const item = data.briefe.filter((data) => {
    return data.id === "21";
  });

  return (
    <Brief_wrapper data={item}>
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
                style={{ paddingTop: "100px", paddingBottom: "160px" }}
              >                <h2><span className="headingNumber">1. </span></h2>
                <div className="teidiv1" id="index.xml-body.1_div.1_div.1">
                  <h3><span className="headingNumber">1.1. </span></h3>
                  <p className="g.enc.tagsdecl.wd.vertical-left"><span className="address"><span
                        style={{display: 'inline-block'}} width="2cm">&nbsp;</span> <span
                        className="g.rend.script.latin">Madame</span><br /> <span className="g.rend.script.latin"><span
                          className="abbr"> (Mad<span className="g.enc.tagsdecl.cc.abbr-colon-sup"><sup>e</sup>
                            ..</span>)</span><span className="expan">Mad<span className="ex">ame</span></span> <span
                          className="persName">Louise Engels né
                          Nooth</span></span><br /> <span style={{display: 'inline-block'}}
                        width="6cm">&nbsp;</span><span className="g.rend.script.latin">à</span><br /> <span
                        style={{display: 'inline-block'}} width="2lines">&nbsp;</span> <span
                        style={{display: 'inline-block'}} width="2cm">&nbsp;</span> <span
                        className="g.rend.script.latin">Ruhrorth</span><br /></span></p>
              </div>
	          </section>
            </div>

            <section className="writing-session" id="index.xml-body.1_div.2">
              <div
                className="page"
                style={{
                  paddingTop: "35px",
                  paddingLeft: "80px",
                  paddingBottom: "5px",
                }}
              >
                
			<a id="mark.001.s">
					{/*anchor*/}</a><p className="enc.tagsdecl.indent-medium">Meine Liebe <span className="orig">theüre</span><span className="corr">theure</span>
				Gattin! <span className="orig">noch</span><span className="corr">Noch</span>
			ehe ich mich
			ſchlafen<br className="lb" /> <span className="orig">Lege</span><span className="corr">lege</span>, muß ich
			dir ſagen:
			daß ich unter der Güte Gottes<br className="lb" /> recht vergnügt <span className="orig">gereißt</span><span
				className="corr">gereist</span> und wohlbehalten angekom̅en bin.<br className="lb" /> <span
				className="orig">juﬅ</span><span className="corr">Just</span> um 9 Uhr, wie ich dir auch geſagt hatte.
			<a id="mark.002.s">
				{/*anchor*/}</a><a id="mark.003.s">
				{/*anchor*/}</a>Du,<br className="lb" /> meine beﬅe innigﬅ Verbundene, wirﬅ mit mir dafür<br
				className="lb" />
			den <span className="abbr"> (L.)</span><span className="expan">L<span className="ex">ieben</span></span>
			Him̅liſchen
			Vater <span className="orig">Preiſen</span><span className="corr">preisen</span>, der mich nun ſo <span
				className="orig">oﬀte</span><span className="corr">ofte</span><br className="lb" /> im̅er <span
				className="orig">Glüklich</span><span className="corr">glücklich</span> und unverſehrt hin und her
			gebracht,
			und<br className="lb" /> dadurch noch meinen Cörper geﬅärkt hat.<a id="mark.001.e">
				{/*anchor*/}</a></p>
		<p>wie wirﬅ du mich im Geiﬅ begleitet und für mich<br className="lb" /> <span
				className="orig">gebäten</span><span className="corr">gebeten</span> haben! <span
				className="orig">habe</span><span className="corr">Habe</span> herzlich
			<span className="orig">dank</span><span className="corr">Dank</span> dafür, Liebe <span
				className="orig">beﬅe</span><span className="corr">Beste</span>!<br className="lb" /> mein innerﬅer
			Wunſch und mein
			<span className="orig">Gebät</span><span className="corr">Gebet</span> zu Gott iﬅ: daß<br className="lb" />
			du dich eben
			so wohl befinde<span className="overwritten">n</span><span className="add">⟨ﬅ⟩</span> <span
				style={{textDecoration: 'line-through'}}>mögeﬅ</span>, und deine Ruhe<br className="lb" /> und dein
			Wohlbefinden ſich vermehren möge. <span className="orig">ja</span><span className="corr">Ja</span> meine<br
				className="lb" /> herzlich <span className="orig">geliebte</span><span className="corr">Geliebte</span>!
			ich fühle
			es im̅er mehr in meiner Seele<br className="lb" /> wie groß die Liebe, Güte und Aufſicht unſres Gottes<br
				className="lb" /> in den vergangenen Tagen über uns geweſen; daß<br className="lb" /> alles ſo
			ordentlich und
			erwünſcht hergegangen, und alle<br className="lb" /> Freunde ſo befriedigt, ja hoch zufrieden ſind, iﬅ
			ſeine<br className="lb" /> <span className="orig">mitwürkung</span><span className="corr">Mitwirkung</span>,
			die wir
			erkennen, und Ihm verdanken<br className="lb" /> wollen. <span className="orig">du</span><span
				className="corr">Du</span> meine ganz <span className="orig">geliebte</span><span
				className="corr">Geliebte</span>!
			wirﬅ gerne mit mir<br className="lb" /> ſagen: bis hiehin hat uns der Herr geholfen! und<br
				className="lb" /> darum
			wollen wir unſren Herzen zurufen, <span className="orig">Vergiß</span><span
				className="corr">vergiß</span><br className="lb" /> nicht was er uns <span
				className="orig">gutes</span><span className="corr">Gutes</span> gethan;
			mit voller kindlicher 
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
                
      <span className="orig">Hofnung</span><span className="corr">Hoffnung</span> wollen wirs Ihm zutrauen, daß er
			uns
			ferner<br className="lb" /> beiﬅehen, und in unſrem Eheﬅand unſre Hülfe, <span
				className="orig">Schuz</span><span className="corr">Schutz</span> Schirm<br className="lb" /> und Schild
			ſein wird. <span className="orig">er</span><span className="corr">Er</span> wird uns auch um unſres<br
				className="lb" /> Herrn Jeſu
			willen all unſre Sünden vergeben und von <br className="lb" /> unſren Gebrechen heilen, daß wir im̅er
			tüchtiger
			und fertiger<br className="lb" /> gemacht werden zu thun, was Ihm <span
				className="orig">wohlgefält</span><span className="corr">wohlgefällt</span>.<a id="mark.003.e">
				{/*anchor*/}</a><a id="mark.002.e">
				{/*anchor*/}</a> 
		<p>ich kam wie geſagt um 9 Uhr mit ungemeiner Munterkeit<br className="lb" /> bei unſren Brüdern an, und aß bei
			denſelben den <span className="g.rend.script.latin">Salat</span>.<br className="lb" /> Bruder <span
				className="g.rend.script.latin">Peter</span> , der noch etwas mit ſeiner <span
				className="g.rend.script.latin"><span className="orig">Catarre</span><span
					className="corr">Katarrhe</span></span>
			zu thun<br className="lb" /> hat, ſich ſonﬅ aber wohl befindet hat dich ſehr <span
				className="orig">Lieb</span><span className="corr">lieb</span> ge<br
				className="g.enc.tagsdecl.hyphenation.eq" /> wonnen, und beide Brüder
			erwarten verlangend je eher <br className="lb" /> je <span className="orig">Lieber</span><span
				className="corr">lieber</span> deinen Einzug und <span className="orig">Laßen</span><span
				className="corr">lassen</span> Ihren herzlichen <span className="orig">gegen<br
					className="g.enc.tagsdecl.hyphenation.eq" />Gruß</span><span className="corr">Gegen<br
					className="lb" />gruß</span> melden.</p>
</div>

          
              <div
                className="page"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "70px",
                  paddingBottom: "55px",
                }}
              >
                <p className="enc.tagsdecl.indent-medium"><a id="teaser.part.001.s">
				{/*anchor*/}</a><span className="orig">nun</span><span className="corr">Nun</span> meine Liebe Frau
			<span className="persName">Engels</span> wink ich dir meinen zärtlichen<br className="lb" /> Morgen Gruß und
			<span className="orig">küße</span><span className="corr">küsse</span> Dich in Gedanken, ich hoffe du wirﬅ<br
				className="lb" /> eine ebenſo <span className="orig">erquikende</span><span
				className="corr">erquickende</span>
			Nacht Ruhe gehabt haben, wie ich<br className="lb" /> es dir Gott Lob von mir ſagen <span
				className="orig">kan</span><span className="corr">kann</span>. <a id="mark.004.s">
				{/*anchor*/}</a>ich habe mit dir<br className="lb" /> um 8 Uhr gebäten, und werde <sup
				className="sup">nun</sup> mit dir in Gedanken und im<br className="lb" /> Herzen, meine Geſchäfte
			anfangen<a id="teaser.part.001.e">
				{/*anchor*/}</a>, und das Nöthige wieder<br className="lb" /> aus dem <span
				className="orig">wege</span><span className="corr">Wege</span> <span className="orig">Räumen</span><span
				className="corr">räumen</span>.</p>
		<p>Den Fuhrmann will ich gleich kom̅en <span className="orig">Laßen</span><span className="corr">lassen</span>,
			und
			überhaupt<br className="lb" /> alles <span className="orig">abgeſprochene</span><span
				className="corr">Abgesprochene</span> beſorgen.</p>
		<p>Den <span className="orig">nachmittag</span><span className="corr">Nachmittag</span> mache ich meinen
			Gemarker Gang
			und<br className="lb" /> ſage dir Liebe <span className="orig">nechﬅens</span><span
				className="corr">nächﬅens</span>
			mehr;<a id="mark.004.e">
				{/*anchor*/}</a> du wirﬅ heute <span className="pagebreak" id="index.xml-pb-d29e551"><a href>[Page
					3]</a></span>deinen <span className="persName"><span
					className="g.rend.script.latin">Caspar</span></span>
			<span className="damage"><span className="gap"> [...]</span><span
					className="supplied">[entſchuldigen]</span></span> und
			mit einem kurzen Brief<br className="lb" /> <span className="orig">Vorlieb</span><span
				className="corr">vorlieb</span>
			nehmen. <span className="orig">ich</span><span className="corr">Ich</span> befehle dich ſo wie alle unſre<br
				className="lb" /> dortigen <span className="orig">Freünde</span><span className="corr">Freunde</span>
			und Verwandte,
			die ich herzlich zu <span className="g.enc.tagsdecl.suspension.type1"> (grüß)</span><span
				className="expan">grüß<span className="ex">en</span></span> <br className="lb" /> erſuche, dem <span
				className="orig">Schuz</span><span className="corr">Schutz</span> und der Bewahrung unſres Gottes<br
				className="lb" /> und bleibe unter innigﬅ zärtlichﬅen <span className="orig">Küßen</span><span
				className="corr">Küssen</span> von<br className="lb" /> ganzem Herzen</p>
		<div className="closer"><span style={{display: 'inline-block'}} width="4words">&nbsp;</span>Dein ewig verbundner
			und <span className="orig">treüer</span><span className="corr">treuer</span> <br className="lb" /> <span
				style={{display: 'inline-block'}} width="1lines">&nbsp;</span> <span style={{display: 'inline-block'}}
				width="5words">&nbsp;</span>
			<div className="signed"><span className="persName"><span className="g.rend.script.latin">Casper
						Engels</span></span>
			</div> <br className="lb" /> <span style={{display: 'inline-block'}} width="1lines">&nbsp;</span> <span
				style={{display: 'inline-block'}} width="6words">&nbsp;</span>
			<div className="dateline"><span className="g.rend.script.latin"><span
						className="g.enc.tagsdecl.suspension.type1">
						(d.)</span><span className="expan">d<span className="ex">en</span></span></span> 9 <span
					className="g.rend.script.latin"><span className="abbr"> (7<sup>ber</sup>)</span><span
						className="expan" /></span> 1791</div>
		</div>
		<p>Dem guten <span className="g.enc.tagsdecl.suspension.type1"> (Hr.)</span><span className="expan">H<span
					className="ex">er</span>r<span className="ex">n</span></span> Paﬅor hatte ich <span
				className="g.enc.tagsdecl.suspension.type1"> (ein)</span><span className="expan">ein<span
					className="ex">en</span></span> Besuch verſprochen, bei<br className="lb" /> <span
				className="orig">gelegenheit</span><span className="corr">Gelegenheit</span> bitte mich zu <span
				className="g.enc.tagsdecl.suspension.type1"> (entſchuldig)</span><span
				className="expan">entſchuldig<span className="ex">en</span></span>,</p>
		<p>unſer Knecht <span className="g.rend.script.latin">Arnold</span>, der viel Liebe und Hochachtung für dich<br
				className="lb" /> hat, bat mich eben, dich zu grüßen.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Brief_wrapper>
  );
}
