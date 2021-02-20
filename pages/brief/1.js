import data from "../../public/data.json";
import React, { Children, Component, useState } from "react";
import Brief_wrapper from "../../components/brief_wrapper";
import Layout from "../../components/layout";
import Head from "next/head";

export default function page() {
  const item = data.briefe.filter((data, index) => {
    return data.id === "1";
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
          <div className="toc toc_body ">
            <div className="toc toc_back">
              {/*TEI body*/}

              <section className="writing-session" id="index.xml-body.1_div.2">
                <div
                  className="page"
                  style={{
                    paddingTop: "35px",
                    paddingLeft: "75px",
                    paddingBottom: "260px",
                  }}
                >
                  <div className="opener">
                    <div className="dateline">
                      <span
                        className="placeName"
                        style={{
                          marginLeft: "125px",
                        }}
                      >
                        Hagen
                      </span>{" "}
                      <span className="date">
                        5<span className="corr">.</span>{" "}
                        <span className="g.enc.tagsdecl.suspension.type3">
                          {" "}
                          (Jan.)
                        </span>
                        <span className="expan">
                          Jan<span className="ex">uar</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="opener">
                    <a id="teaser.part.001.s">{/*anchor*/}</a>
                    <div
                      className="salute"
                      style={{
                        marginLeft: "75px",
                      }}
                    >
                      Lieb
                      <span className="orig">
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e be
                      <span className="orig">
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e{" "}
                      <span className="abbr">
                         {" "}
                        (F
                        <span className="g.enc.tagsdecl.cc.abbr-colon-sup">
                          <sup>in</sup>
                          <span className="orig">⹀</span>
                          <span className="corr">.</span>
                        </span>
                        )
                      </span>
                      <span className="expan">
                        F<span className="ex">reund</span><sup class="double-underline">in</sup><span className="corr">,</span>

                      </span>
                    </div>
                    <a id="teaser.part.001.e">{/*anchor*/}</a>
                  </div>
                  <p>
                    Ich <span className="orig">Danke</span>
                    <span className="corr">danke</span>{" "}
                    <span className="orig">dir</span>
                    <span className="corr">Dir</span> herzlich dafür,{" "}
                    <span className="orig">Daß</span>
                    <span className="corr">daß</span> Du mir{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o bald Nachricht von{" "}
                    <span className="orig">dir</span>
                    <span className="corr">Dir</span>
                    <br className="lb" /> und <span className="orig">Den</span>
                    <span className="corr">den</span> Lieben{" "}
                    <span className="orig">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (deinig)
                      </span>
                      <span className="expan">
                        deinig<span className="ex">en</span>
                      </span>
                    </span>
                    <span className="corr">
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (Deinig)
                      </span>
                      <span className="expan">
                        Deinig<span className="ex">en</span>
                      </span>
                    </span>{" "}
                    gab
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>, so kurz dein Brief auch
                    war, so machte er
                    <br className="lb" /> mir doch viele{" "}
                    <span className="orig">Freüde</span>
                    <span className="corr">Freude</span>.
                  </p>

                  <p>
                    <span className="religion">
                      <a id="mark.003.s">{/*anchor*/}</a>Zu dem{" "}
                      <span className="orig">angetrettenen</span>
                      <span className="corr">angetretenen</span>{" "}
                      <span className="abbr"> N.</span>
                      <span className="expan">
                        N<span className="ex">euen</span>
                      </span>{" "}
                      Jahr wün<span className="orig">ſ</span>
                      <span className="corr">s</span>che ich dir meine Liebe!{" "}
                      <a id="mark.001.s">{/*anchor*/}</a>viel
                      <br className="lb" /> <span className="orig">Glük</span>
                      <span className="corr">Glück</span> und{" "}
                      <span className="orig">Den</span>
                      <span className="corr">den</span> be
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>en{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (Seg.)
                      </span>
                      <span className="expan">
                        Seg<span className="ex">en</span>
                      </span>{" "}
                      Gottes nach dem{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (äuß)
                      </span>
                      <span className="expan">
                        äuß<span className="ex">ern</span>
                      </span>{" "}
                      und <span className="orig">inern</span>
                      <span className="corr">innern</span> Men
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chen,
                      <br className="lb" /> vorzüglich wün
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>che ich: Daß{" "}
                      <span className="orig">dis</span>
                      <span className="corr">dies</span> Jahr reich für dich{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ein mag an
                      <br className="lb" /> <span className="abbr"> H.</span>
                      <span className="expan">
                        H<span className="ex">eils</span>
                      </span>{" "}
                      Gütern, du eine Gabe nach der{" "}
                      <span className="abbr"> and.</span>
                      <span className="expan">
                        and<span className="ex">eren</span>
                      </span>{" "}
                      aus der Gnadenfülle <span className="abbr"> J.</span>
                      <span className="expan">
                        J
                        <span className="ex">
                          e<span className="orig">ſ</span>
                          <span className="corr">s</span>u
                        </span>
                      </span>
                      <br className="lb" /> Chri
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>i{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (empfang)
                      </span>
                      <span className="expan">
                        empfang<span className="ex">en</span>
                      </span>{" "}
                      möge
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>, und gute{" "}
                      <span className="strike-through" style={{ textDecoration: "line-through" }}>
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>arke
                      </span>{" "}
                      Fort<span className="orig">ſ</span>
                      <span className="corr">s</span>chritte in der{" "}
                      <a id="annot.004.s">{/*anchor*/}</a>
                      <span className="makierung">Heiligung</span>
                      <a id="annot.004.e">{/*anchor*/}</a>
                      <br className="lb" /> <span className="orig">Thun</span>
                      <span className="corr">thun</span> werde
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>.
                      <a id="mark.001.e">{/*anchor*/}</a>
                      <a id="mark.003.e">{/*anchor*/}</a>{" "}
                      <span className="orig">um</span>
                      <span className="corr">Um</span> deine fernere Liebe <span class="insertion"><sup>1</sup></span> | <span class="insertion"><sup>2</sup></span> bitte
                      ich dich{" "}
                      <span id="txt.perm002.a">
                        in <span class="insertion"><sup>1</sup></span> dem <span className="abbr"> N.</span>
                        <span className="expan">
                          N<span className="ex">euen</span>
                        </span>{" "}
                        Jahr
                      </span>
                      <br className="lb" /> <span className="orig">ſ</span>
                      <span className="corr">s</span>ehr, und gebe dir{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (dageg)
                      </span>
                      <span className="expan">
                        dageg<span className="ex">en</span>
                      </span>{" "}
                      Ver<span className="orig">ſ</span>
                      <span className="corr">s</span>ichrung von meiner{" "}
                      <span className="g.enc.tagsdecl.suspension.type1">
                        {" "}
                        (unaufhörlich)
                      </span>
                      <span className="expan">
                        unaufhörlich<span className="ex">en</span>
                      </span>{" "}
                      Liebe
                      <br className="lb" /> und{" "}
                      <span className="orig">
                        Freünd<span className="orig">ſ</span>
                        <span className="corr">s</span>chaft
                      </span>
                      <span className="corr">
                        Freund<span className="orig">ſ</span>
                        <span className="corr">s</span>chaft
                      </span>
                      ;{" "}
                    </span>{" "}
                    <a id="mark.004.s">{/*anchor*/}</a>für mich{" "}
                    <span className="abbr"> L.</span>
                    <span className="expan">
                      L<span className="ex">iebe</span>
                    </span>{" "}
                    <span className="orig">Freündin</span>
                    <span className="corr">Freundin</span>, war das verflo
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ne
                    <br className="lb" /> Jahr ein recht{" "}
                    <span className="orig">Merkwürdiges</span>
                    <span className="corr">merkwürdiges</span> Jahr, welches mir
                    gewiß Zeitlebens
                    <br className="lb" /> unvergeßlich bleiben wird.{" "}
                    <span className="orig">viele</span>
                    <span className="corr">Viele</span> Bitterkeit führte es{" "}
                    <sup className="sup" id="txt.add001">
                      für mich
                    </sup>{" "}
                    mit <span className="orig">ſ</span>
                    <span className="corr">s</span>ich
                    <br className="lb" /> aber auch wieder{" "}
                    <span className="orig">Viele</span>
                    <span className="corr">viele</span>{" "}
                    <span className="orig">Freüden</span>
                    <span className="corr">Freuden</span>, und auch mehr{" "}
                    <span className="orig">
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>tof
                    </span>
                    <span className="corr">Stoff</span> gab es mir
                    <br className="lb" /> <a id="mark.002.s">{/*anchor*/}</a>
                    <span className="orig">Zum</span>
                    <span className="corr">zum</span> Dank und Lobe Gottes, der
                    mir mit <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="orig">
                      au<span className="orig">ſ</span>
                      <span className="corr">s</span>erordentlich
                    </span>
                    <span className="corr">außerordentlich</span>{" "}
                    <span className="orig">Viel</span>
                    <span className="corr">viel</span>
                    <br className="lb" /> <span className="orig">Weißheit</span>
                    <span className="corr">Weisheit</span> und Liebe aus der{" "}
                    <span className="orig">
                      gro<span className="orig">ſ</span>
                      <span className="corr">s</span>en
                    </span>
                    <span className="corr">großen</span>, mir{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chon{" "}
                    <span className="orig">würklich</span>
                    <span className="corr">wirklich</span>{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (um<span className="orig">ſ</span>
                      <span className="corr">s</span>chwebend)
                    </span>
                    <span className="expan">
                      um<span className="orig">ſ</span>
                      <span className="corr">s</span>chwebend
                      <span className="ex">en</span>
                    </span>
                    <br className="lb" /> Gefahr errettete, in{" "}
                    <span className="orig">Jrthum</span>
                    <span className="corr">Jrrthum</span> zu gerathen, über die{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (
                      <span className="orig">
                        Wichtig
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">
                        wichtig
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span></span>
                    <span className="expan">
                      <span className="orig">
                        Wichtig
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">
                        wichtig
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>
                      </span>
                      <span className="ex">en</span>
                    </span>
                    <br className="lb" />{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Wahrheit)
                    </span>
                    <span className="expan">
                      Wahrheit<span className="ex">en</span>
                    </span>{" "}
                    des Chri
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>enthums, wodurch der Schaden
                    für mich <span className="orig">ſ</span>
                    <span className="corr">s</span>o groß
                    <br className="lb" /> und unausbleiblich gewe
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>en wäre;{" "}
                    <a id="teaser.part.002.s">{/*anchor*/}</a>
                    <span className="orig">Die</span>
                    <span className="corr">die</span> Erfahrung{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o ich{" "}
                    <span className="orig">Von</span>
                    <span className="corr">von</span> der
                    <br className="lb" />{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (mächtig)
                    </span>
                    <span className="expan">
                      mächtig<span className="ex">en</span>
                    </span>{" "}
                    <a id="txt.hi.underline001.int.s">{/*anchor*/}</a>
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">hülf</span>
                      <span className="corr">Hülf</span> Gotte
                    </span>
                    s<a id="txt.hi.underline001.int.e">{/*anchor*/}</a> und von
                    der{" "}
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">GebätsErhorung</span>
                      <span className="corr">Gebetserhörung</span>
                    </span>{" "}
                    gemacht habe,
                    <br className="lb" /> hat mir unbe
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>chreiblich wohl gethan, und
                    meine <span className="orig">Hofnung</span>
                    <span className="corr">Hoffnung</span> &amp;{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Vertrau)
                    </span>
                    <span className="expan">
                      Vertrau<span className="ex">en</span>
                    </span>
                    <br className="lb" /> für die Zukunft{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr ge
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>ärkt,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <span className="orig">Daß</span>
                    <span className="corr">daß</span> ich{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> mit{" "}
                    <span style={{ textDecoration: "underline" }}>
                      getro
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>em
                    </span>
                    <br className="lb" />{" "}
                    <span style={{ textDecoration: "underline" }}>Muth</span>{" "}
                    mein ganzes{" "}
                    <span className="orig">
                      Schik<span className="orig">ſ</span>
                      <span className="corr">s</span>al
                    </span>
                    <span className="corr">
                      Schick<span className="orig">ſ</span>
                      <span className="corr">s</span>al
                    </span>{" "}
                    in den{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Händ)
                    </span>
                    <span className="expan">
                      Händ<span className="ex">en</span>
                    </span>{" "}
                    meines Liebevollen <span className="abbr"> H.</span>
                    <span className="expan">
                      H<span className="ex">immlischen</span>
                    </span>
                    <br className="lb" /> Vaters übergeben{" "}
                    <span className="orig">kan</span>
                    <span className="corr">kann</span>,
                    <a id="teaser.part.002.e">{/*anchor*/}</a> in der fe
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>en Zuver
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>icht, daß er{" "}
                    <span style={{ textDecoration: "underline" }}>mich</span>{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o
                    <br className="lb" />{" "}
                    <span style={{ textDecoration: "underline" }}>
                      führen wird
                    </span>{" "}
                    wie es für meine Ewige Seligkeit und{" "}
                    <span className="orig">Herlichkeit</span>
                    <span className="corr">Herrlichkeit</span>
                    <br className="lb" /> <span className="orig">Das</span>
                    <span className="corr">das</span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      be
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    , <span className="orig">Das</span>
                    <span className="corr">das</span>{" "}
                    <span className="orig">
                      <span style={{ textDecoration: "underline" }}>
                        vortheilhafte
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>e
                      </span>
                    </span>
                    <span className="corr">
                      <span style={{ textDecoration: "underline" }}>
                        Vortheilhafte
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>e
                      </span>
                    </span>{" "}
                    i
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>, welches auch{" "}
                    <span className="orig">jezt</span>
                    <span className="corr">jetzt</span> be
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>ändig
                    <br className="lb" /> der{" "}
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">HauptInhalt</span>
                      <span className="corr">Hauptinhalt</span>
                    </span>{" "}
                    meines{" "}
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">Gebäts</span>
                      <span className="corr">Gebets</span>
                    </span>{" "}
                    <span className="overwritten">
                      i
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>
                    </span>
                    <span className="add">⟨a⟩</span>usmacht; muß hiezu der{" "}
                    <span className="orig">weg</span>
                    <span className="corr">Weg</span>
                    <br className="lb" /> des{" "}
                    <span style={{ textDecoration: "underline" }}>
                      Leidens gewählt
                    </span>{" "}
                    werden,{" "}
                    <span style={{ textDecoration: "underline" }}>nun</span>,{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>o{" "}
                    <a id="txt.hi.underline002.int.s">{/*anchor*/}</a>ge
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>chehe{" "}
                      <span className="orig">ſ</span>
                      <span className="corr">s</span>ein Heiliger Wille!
                    </span>
                    <a id="txt.hi.underline002.int.e">{/*anchor*/}</a>
                    <br className="lb" /> Er der Liebreiche Geber aller guten
                    Gabe wird mir auch{" "}
                    <span className="orig">
                      Den
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>
                    <span className="corr">
                      den
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>
                    <br className="lb" /> auf mein{" "}
                    <span className="orig">Gebät</span>
                    <span className="corr">Gebet</span>{" "}
                    <span className="orig">Die</span>
                    <span className="corr">die</span> erforderliche{" "}
                    <span style={{ textDecoration: "underline" }}>
                      Kräfte und Stärke
                    </span>{" "}
                    geben,
                    <br className="lb" /> alles{" "}
                    <span className="orig">Das</span>
                    <span className="corr">das</span> zu{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (trag)
                    </span>
                    <span className="expan">
                      trag<span className="ex">en</span>
                    </span>{" "}
                    was ich zu{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (mein)
                    </span>
                    <span className="expan">
                      mein<span className="ex">em</span>
                    </span>{" "}
                    <span style={{ textDecoration: "underline" }}>
                      <span className="orig">
                        be
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>en
                      </span>
                      <span className="corr">
                        Be
                        <span className="orig">
                          <span className="orig">ﬅ</span>
                          <span className="corr">st</span>
                        </span>
                        <span className="corr">st</span>en
                      </span>
                    </span>{" "}
                    <span className="g.enc.tagsdecl.suspension.type1" style={{ textDecoration: "underline" }}>
                      {" "}
                      (trag)
                    </span>
                    <span className="expan" style={{ textDecoration: "underline" }}>
                      trag<span className="ex">en</span>
                    </span>{" "}
                    muß.
                  </p>
                </div>

                <div
                  className="page"
                  style={{
                    paddingTop: "50px",
                    paddingLeft: "70px",
                    paddingBottom: "440px",
                  }}
                >
                  <p>
                    Silvester wurde hier in{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Hag)
                    </span>
                    <span className="expan">
                      Hag<span className="ex">en</span>
                    </span>{" "}
                    durch{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (ein)
                    </span>
                    <span className="expan">
                      ein<span className="ex">en</span>
                    </span>{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (groß)
                    </span>
                    <span className="expan">
                      goß<span className="ex">en</span>
                    </span>{" "}
                    Ball gefeÿert
                    <span className="orig" />
                    <span className="corr">.</span>
                    <br className="lb" /> Lieb
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>e{" "}
                    <span className="orig">Freündin</span>
                    <span className="corr">Freundin</span>! und vom{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (alt)
                    </span>
                    <span className="expan">
                      alt<span className="ex">en</span>
                    </span>{" "}
                    Jahr ins <span className="orig">Neüe</span>
                    <span className="corr">Neue</span> getanzt,{" "}
                    <span className="orig">dismal</span>
                    <span className="corr">diesmal</span>
                    <br className="lb" />{" "}
                    <span className="orig">
                      mu
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    <span className="corr">mußte</span> ich{" "}
                    <span className="orig">Ihm</span>
                    <span className="corr">ihm</span>, so ungern ichs auch that
                    mitbeiwohnen,{" "}
                    <span className="orig">
                      Den
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>
                    <span className="corr">
                      den
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>{" "}
                    meine
                    <br className="lb" /> Schwe
                    <span className="orig">
                      <span className="orig">ﬅ</span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">st</span>er war beim{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (vorig)
                    </span>
                    <span className="expan">
                      vorig<span className="ex">en</span>
                    </span>{" "}
                    mir zu gefallen, schon zu Hause ge
                    <br className="g.enc.tagsdecl.hyphenation.divis" /> blieben.{" "}
                    <span className="orig">ich</span>
                    <span className="corr">Ich</span> muß{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (sag)
                    </span>
                    <span className="expan">
                      sag<span className="ex">en</span>
                    </span>
                    , <span className="orig">Daß</span>
                    <span className="corr">daß</span> ich mich für der
                    Versuchung fürchtete,
                    <br className="lb" /> weil ich n
                    <span className="overwritten">i</span>
                    <span className="add">⟨o⟩</span>ch nicht einmal, seitdem ich{" "}
                    <span className="orig">Das</span>
                    <span className="corr">das</span> Tanzen dran gab, auf
                    <br className="lb" /> einem Ball war, ich nahm daher oft
                    meine Zuflucht zum <span className="orig">gebät</span>
                    <span className="corr">Gebet</span>
                    <br className="lb" /> wodurch ich{" "}
                    <span className="orig">
                      Dan
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>
                    <span className="corr">
                      dan
                      <span className="orig" />
                      <span className="corr">n</span>
                    </span>{" "}
                    auch so viel{" "}
                    <span className="orig">
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>ärke
                    </span>
                    <span className="corr">Stärke</span> erhielt, daß ich den{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (<span className="orig">Lokung</span>
                      <span className="corr">Lockung</span>)
                    </span>
                    <span className="expan">
                      <span className="orig">Lokung</span>
                      <span className="corr">Lockung</span>
                      <span className="ex">en</span>
                    </span>
                    <br className="lb" /> und{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Reitzung)
                    </span>
                    <span className="expan">
                      Reitzung<span className="ex">en</span>
                    </span>{" "}
                    <span className="orig">glüklich</span>
                    <span className="corr">glücklich</span>{" "}
                    <span className="orig">
                      wieder
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>and
                    </span>
                    <span className="corr">
                      wider
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>and
                    </span>{" "}
                    und das Tanzen mit <span className="orig">Gelasenheit</span>
                    <span className="corr">Gelassenheit</span>
                    <br className="lb" /> und{" "}
                    <span className="orig">gleichgültigkeit</span>
                    <span className="corr">Gleichgültigkeit</span>{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (zuseh)
                    </span>
                    <span className="expan">
                      zuseh<span className="ex">en</span>
                    </span>{" "}
                    <span className="orig">konte</span>
                    <span className="corr">konnte</span>;{" "}
                    <span className="orig">Daß</span>
                    <span className="corr">daß</span> es aber kein{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (angenehm)
                    </span>
                    <span className="expan">
                      angenehm<span className="ex">er</span>
                    </span>
                    <br className="lb" /> Abend für mich war,{" "}
                    <span className="orig">Das</span>
                    <span className="corr">das</span>{" "}
                    <span className="orig">
                      kan
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>
                    </span>
                    <span className="corr">
                      kann
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>
                    </span>{" "}
                    <span className="orig">du</span>
                    <span className="corr">Du</span> Dir meine{" "}
                    <span className="orig">
                      be
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    <span className="corr">
                      Be
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    ! wohl
                    <br className="lb" />{" "}
                    <span className="orig">
                      Vor
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>ellen
                    </span>
                    <span className="corr">
                      vor
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>ellen
                    </span>
                    , <span className="orig">Die</span>
                    <span className="corr">die</span> Verwunderung darüber daß
                    ich als ein <span className="orig">Junges</span>
                    <span className="corr">junges</span>
                    <br className="lb" /> Madchen nicht tanzte war von allen<span className="unclear">^</span>
                    <span className="g.enc.tagsdecl.suspension.type1">
                      (<span className="orig">seit</span>
                      <span className="corr">Seit</span>)
                    </span>
                    <span className="expan">
                      <span className="orig">seit</span>
                      <span className="corr">Seit</span>
                      <span className="ex">en</span>
                    </span>{" "}
                    sehr groß und es
                    <br className="lb" /> ging nicht ohne{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (Leid)
                    </span>
                    <span className="expan">
                      Leid<span className="ex">en</span>
                    </span>{" "}
                    <span className="orig">Dabei</span>
                    <span className="corr">dabei</span> wie auch vorher und
                    nachher für
                    <br className="lb" /> mich ab,{" "}
                    <span className="orig">Daß</span>
                    <span className="corr">daß</span> ich dadurch{" "}
                    <span className="orig">zurükgesezt</span>
                    <span className="corr">zurückgesetzt</span> wurde, und
                    verschiedene
                    <br className="lb" /> über mich spotteten, merkte ich wohl,
                    diese <span className="orig">bemerkung</span>
                    <span className="corr">Bemerkung</span> war
                    <br className="lb" /> nun freilig für{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (mein)
                    </span>
                    <span className="expan">
                      mein<span className="ex">en</span>
                    </span>{" "}
                    Stolz nicht die{" "}
                    <span className="orig">
                      angenem
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    <span className="corr">
                      angenehm
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                    </span>
                    , doch aber
                    <br className="lb" /> für{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (selbig)
                    </span>
                    <span className="expan">
                      selbig<span className="ex">en</span>
                    </span>{" "}
                    sehr gut und heilsam;
                  </p>
                  <p>
                    Nach der <span className="orig">Uberwindung</span>
                    <span className="corr">Überwindung</span> und erhaltnem
                    Siege wards mir
                    <br className="lb" /> außerordentlich wohl{" "}
                    <span className="abbr"> L.</span>
                    <span className="expan">
                      L<span className="ex">iebe</span>
                    </span>{" "}
                    <span className="abbr">
                      {" "}F
                      <span className="g.enc.tagsdecl.cc.abbr-period-sup "><sup className="double-underline">din</sup>
                      </span></span>
                    <span className="expan">
                      F<span className="ex">reund</span>in
                    </span>
                    ! und ich <span className="orig">freüte</span>
                    <span className="corr">freute</span> mich{" "}
                    <span className="orig">ſ</span>
                    <span className="corr">s</span>ehr
                    <br className="lb" /> <span className="orig">Daß</span>
                    <span className="corr">daß</span> ich gewürdigt{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (word)
                    </span>
                    <span className="expan">
                      word<span className="ex">en</span>
                    </span>{" "}
                    war, um meiner <span className="orig">Überzeügung</span>
                    <span className="corr">Überzeugung</span>
                    <br className="lb" /> willen etwas zu{" "}
                    <span className="g.enc.tagsdecl.suspension.type1">
                      {" "}
                      (<span className="orig">Leid</span>
                      <span className="corr">leid</span>)
                    </span>
                    <span className="expan">
                      <span className="orig">Leid</span>
                      <span className="corr">leid</span>
                      <span className="ex">en</span>
                    </span>
                    .<a id="mark.002.e">{/*anchor*/}</a>
                    <a id="mark.004.e">{/*anchor*/}</a>
                  </p>
                  <blockquote className="closer">
                    <p>
                      <span className="abbr"> D.</span>
                      <span className="expan">
                        D<span className="ex">einem</span>
                      </span>{" "}
                      <span className="abbr"> L.</span>
                      <span className="expan">
                        L<span className="ex">ieben</span>
                      </span>{" "}
                      <span className="orig">Man</span>
                      <span className="corr">Mann</span> und{" "}
                      <span className="abbr"> S.</span>
                      <span className="expan">
                        S<span className="ex">chwester</span>
                      </span>{" "}
                      Jacobi empfiehl ich mich aufs Herzlich
                      <span className="orig">
                        <span className="orig">ﬅ</span>
                        <span className="corr">st</span>
                      </span>
                      <span className="corr">st</span>e
                      <span className="orig" />
                      <span className="corr">.</span>
                    </p>
                  </blockquote>
                  <blockquote className="closer">
                    <span className="makierung">
                      <p>
                        <a id="annot.001.s">{/*anchor*/}</a>Meine{" "}
                        <span className="persName">
                          <span className="abbr"> S.</span>
                          <span className="expan">
                            S<span className="ex">chwester</span>
                          </span>
                        </span>
                        <a id="annot.001.e">{/*anchor*/}</a> und Nichte{" "}
                        <span className="g.rend.script.latin">Märken</span>{" "}
                        <span className="g.enc.tagsdecl.suspension.type1">
                          {" "}
                          (grüß)
                        </span>
                        <span className="expan">
                          grüß<span className="ex">en</span>
                        </span>{" "}
                        dich <span className="orig">ebenfals</span>
                        <span className="corr">ebenfalls</span>
                        <span className="orig" />
                        <span className="corr">.</span>
                      </p>
                    </span>
                  </blockquote>
                  <div className="closer">
                    Lebe recht wohl ewig geliebte{" "}
                    <span className="orig">Freündin</span>
                    <span className="corr">Freundin</span>, und behalte{" "}
                    <span className="orig">Lieb</span>
                    <span className="corr">lieb</span>
                    <div className="signed">
                      <span style={{ display: "inline-block" }} width="12cm">
                        &nbsp;
                      </span>
                      Deine <span className="orig">treüe</span>
                      <span className="corr">treue</span> aufrichtige
                      <br className="lb" />{" "}
                      <span style={{ display: "inline-block" }} width="12cm">
                        &nbsp;
                      </span>
                      <span className="g.rend.script.latin">L. N.</span>
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
              top: "210px",
            }}
          >
            <hr />
            <label>Heiligung</label>
            <p>
              Die Heiligung bezeichnet in der protestantischen Kirche die
              Sinnesänderung und Lebensgestaltung eines Christen nach den Regeln
              Christi, innerlich durch das Wirken des Heiligen Geistes und
              äußerlich durch fromme Taten. Sie gilt als ein allmählich zur
              Vollendung fortschreitendes Werk.
            </p>
          </div>

          <div
            className="stellenerläuterung"
            style={{
              top: "1360px",
            }}
          >
            <hr />
            <label>Maria Elisabeth Märker</label>
            <p>geb. Noot (1753–1831)</p>
          </div>
        </div>
      </Brief_wrapper>
    </Layout>
  );
}
