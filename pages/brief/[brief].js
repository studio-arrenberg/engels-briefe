import Layout from '../../components/layout'
import Head from 'next/head'
import briefStyles from '../../styles/brief_view.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import data from '../../public/data.json'
import {motion} from 'framer-motion'
import constants from '../../components/constants'
import { Timeline2 } from '../briefe'
// import Brief_view from '../../components/brief_view'


export default function Page() {

  const router = useRouter()
  const { brief } = router.query

  const item = data.briefe.filter(data => {
    return data.id === brief;
  })

  // console.log(item)

  return ( 
    <Layout>
      <Head>
        <title>Brief</title>
      </Head>

      <motion.div className={briefStyles.brief_view} initial="initial" animate="enter" exit="exit" variants={constants.animation.section_exit} > 

          <Brief data={item}></Brief>
          

      </motion.div>
  

    </Layout>
  )
}


export function Brief({data}) {
  return (
    data.map((data, id) => {
      return (
          <motion.div key={`${data.id}`} variants={constants.animation.post} layoutId={`${data.id}`}>
     

                  {/* META */}
                  <div className={briefStyles.meta}>

                    <div className={briefStyles.sender}>
                      <h2><span className="sender_name">{data.sender.name}</span> </h2>
                      <h3>{data.sender.ort}</h3>
                    </div>
                    <img className={briefStyles.portrait} src={`../pictures/personen/thumbnails/Ida_Louise_Friederike_Noot.jpg`}/>
                    
                    <img className={briefStyles.arrow_send} src={`../icons/back.svg`}/>
                    
                    <img className={briefStyles.portrait} src={`../pictures/personen/Friedrich_Engels_sen.jpg`}/>
                    <div className={briefStyles.empfänger}>
                      <h2><span className="empfänger_name">{data.empfänger.name}</span></h2>
                      <h3>{data.empfänger.ort}</h3>
                    </div>
                  </div>

                  {/* brief inhalt */}

                  <div className="vergleichs-ansicht active">

                    <div className={briefStyles.digitalisate}>
                      <img className="kuvert_img" src={`../../pictures/digitalisate/${data.digitalisate.cover}`}/>
                      <br/>
                      <img src={`../../pictures/digitalisate/${data.digitalisate.page[1]}`}/>
                      <br/>
                      <img src={`../../pictures/digitalisate/${data.digitalisate.page[2]}`}/>
                
                    </div>

                    <div className={briefStyles.brieftext}>
                      <div className="diplomatisch" dangerouslySetInnerHTML={{__html: text}}>
                      </div>
                    </div>
                  </div>

                  

                  <div className="detail-ansicht">
                    <div className="normalisiert"  dangerouslySetInnerHTML={{__html: text}}></div>
                    <div className="themen">
                      <a>
                        <img src="../pictures/themen/liebe.jpg"/>
                        <label >Liebe/ Ehe</label>
                      </a>
                      <a>
                        <img src="../pictures/themen/liebe.jpg"/>
                        <label >Liebe/ Ehe</label>
                      </a>
                      <a>
                        <img src="../pictures/themen/liebe.jpg"/>
                        <label >Liebe/ Ehe</label>
                      </a>
                    </div>
                  </div>


                  <div className={briefStyles.navigation}>
                    <a>
                      <h3>Vergleichsansicht</h3>
                      <p> Hallo hallo hallo mein  kleiner </p>
                    </a>

                    <a>
                      <h3>Detailansicht</h3>
                    <p>Hallo hallo  hallo mein  kleiner </p>
                    </a>
                  </div>  
                
           

                  <div className={briefStyles.vorlesen}>
                      <h3>Brief vorlesen</h3>
                  </div>
  
          </motion.div>
      )
    })
  )
}


// Notes ::

  // const __html = require('../../public/html/briefe/fe004_dip.js');
  // var template = { __html: __html };

  // const fullPath = path.join(postsDirectory, fileName)
  // const fileContents = fs.readFileSync('../public/html/briefe/fe004_dip.html', 'utf8')


// Brief Inhalt :: 

const text = '<!--TEI body--><div class="kuvert" style="padding:200px 0px 180px 10px" id="index.xml-body.1_div.1"><p class="g.enc.tagsdecl.wd.vertical-left"><span class="address"> An Herrn <span class="g.rend.script.latin">Caspar Engels</span><br /> <span style="display:inline-block" width="45mm"> </span> <small>Zu eigenen Händen.</small><br /></span></p></div></div><div class="writing-session" id="index.xml-body.1_div.2"><h2><span class="headingNumber">2. </span></h2><div class="pagebreak" id="index.xml-pb-d29e147"><div class="page"><a href="">[Page 1]</a><span style="display:inline-block" width="35mm"> </span><div class="opener"><a id="teaser.part.001.s"><!--anchor--></a><div class="salute">Mein werther Freund!</div><a id="teaser.part.001.e"><!--anchor--></a></div><p>Nach meinem Wunſch, und nach meiner Hoffnung<br class="lb" /> ſind Sie, wenn Sie dieſen Brief erhalten, von Ihrer Sÿnodal-Reiſe<br class="lb" /> geſund und <span class="orig">glüklich</span><span class="corr">glücklich</span> zurückgekom̅en; <a id="mark.002.s"><!--anchor--></a><a id="teaser.part.002.s"><!--anchor--></a>Ihrer Bitte, daß ich Ihnen eine<br class="lb" /> etwaige Beſchreibung des <span class="g.rend.script.latin">Characters</span>, der Geſinnungen, und der Familie<br class="lb" /> der <span class="abbr"> (Demoiſ.)</span><span class="expan">Demoiſ<span class="ex">elle</span></span> <span class="g.rend.script.latin">Noot</span> machen mögte, will ich denn nun, ſo gut ich <span class="orig">kan</span><span class="corr">kann</span>,<br class="lb" /> entſprechen:<a id="teaser.part.002.e"><!--anchor--></a> Ihr natürlicher <span class="g.rend.script.latin">Character</span> iﬅ aufrichtig, gefällig, zuvorkom̅end,<br class="lb" /> und gar nichts fordernd, meine Frau, und ich, wir haben in der<br class="lb" /> <span class="orig">gantzen</span><span class="corr">ganzen</span> Zeit unſers Umgangs mit ihr, gar nichts <span class="orig">falsches</span><span class="corr">Falsches</span> und <span class="orig">ungerades</span><span class="corr">Ungerades</span><br class="lb" /> an ihr bemerkt; etwas zu ſagen, das ihr nicht von <span class="orig">Hertzen gienge</span><span class="corr">Herzen ginge</span>,<br class="lb" /> würde ihr, wie ich vermuthe, überaus ſchwer werden — aber gar nicht<br class="lb" /> ſchwer wird es ihr, ſich nach andern, ſoweit es die Aufrichtigkeit zuläßt,<br class="lb" /> zu <span class="g.rend.script.latin">accommodi</span>ren; auf ihren Sinn eigenwillig zu beﬅehen, ſcheint ihr<br class="lb" /> gar nicht eigen, ſondern Nachgiebigkeit, und leichte Lenkſamkeit ein<br class="lb" /> Hauptzug ihrer <span class="g.rend.script.latin">Characters</span> zu ſeÿn, dabeÿ iﬅ ſie aber von aller Schmeicheleÿ<br class="lb" /> und Heucheleÿ, ſo wie von allem <span class="orig">Stoltz</span><span class="corr">Stolz</span> weit entfernt; ſie hat eine<br class="lb" /> ſchlechte <span class="orig">Meÿnung</span><span class="corr">Meinung</span> von ſich ſelbﬅ, und irrt ſich <span class="orig">darinn</span><span class="corr">darin</span> oft zu ihrem<br class="lb" /> Nachtheil, indem ſie ſich viel weniger Gutes zuschreibt, und zutraut, als<br class="lb" /> ſie würklich hat; dieſer niedrige Sinn macht dann auch, daß ſie wenig<br class="lb" /> von andern fordert, und weit mehr daran denkt, wie ſie ſich andern<br class="lb" /> gefällig machen, und ihnen zur Freude ſeÿn möge; — <a id="mark.001.s"><!--anchor--></a>Was ihre Geſinnungen<br class="lb" /> <span class="orig">betrift</span><span class="corr">betrifft</span>, ſo glaube ich, es ſagen zu dürfen, daß ihr Chriﬅenthum aufrichtig,<br class="lb" /> und nicht nur oberflächig, ſondern feﬅ und tief gegründet iﬅ; Es iﬅ ihr<br class="lb" /> ernﬅlich um ihre Selbﬅbeſſerung zu thun, und ſie hat würklich <span class="orig">darinn</span><span class="corr">darin</span> ſchon <span style="display:inline-block" width="10cm"> </span>Fort=<br class="lb" /><span style="display:inline-block" width="10cm"> </span>_ <br class="lb" /> <span class="pagebreak" id="index.xml-pb-d29e314"></div><div class="page"></span> Fortſchritte gemacht; daß ihr das Wohlgefallen Gottes, und ihre innre<br class="lb" /> Ruhe mehr werth iﬅ, als alle Luﬅ dieſer Welt, und alle <span class="g.enc.tagsdecl.suspension.type1"> (Luﬅbarkeit)</span><span class="expan">Luﬅbarkeit<span class="ex">en</span></span>,<br class="lb" /> davon hat ſie verſchiedene ſehr entſcheidende Proben abgelegt; <span class="orig">Schon</span><span class="corr">schon</span><br class="lb" /> ſeit einigen Jahren nahm ſie an denen Vergnügungen, die in <span class="g.rend.script.latin">Ruhrorth</span>,<br class="lb" /> und in <span class="g.rend.script.latin">Hagen</span> üblich ſind, nicht mehr Theil, weil ſie dieſelbe einem<br class="lb" /> Chriﬅen unanﬅändig hielt — ;<a id="mark.001.e"><!--anchor--></a> Was zuletzt ihre <span class="g.rend.script.latin">Familie</span> betrift, ſo<br class="lb" /> iﬅ in derſelben keine <span class="orig">Perſohn</span><span class="corr">Person</span>, deren ſie Urſache hätte, ſich zu ſchämen.<br class="lb" /> ſie hat, ſoviel ich weiß, 3 Brüder und 2 Schweﬅern; der ältere Bruder <br class="lb" /> iﬅ OberSaltz <span class="orig">=</span><span class="corr">-</span> <span class="g.rend.script.latin">Inspector</span>, und ZollEinnehmer in <span class="g.rend.script.latin">Ruhrorth</span>; Zweÿ ſehr ein<br class="g.enc.tagsdecl.hyphenation.eq" /> trägliche und ehrenvolle Bedienungen; ſeine Frau iﬅ eine <span class="g.rend.script.latin">Mauritz</span> von <span class="placeName">Weſel</span>,<br class="lb" /> Der <span class="orig">Zwe<span class="orig"></span><span class="corr">y</span>te</span><span class="corr">zwe<span class="orig"></span><span class="corr">y</span>te</span> Bruder iﬅ <span class="orig">Creiß=Einnehmer</span><span class="corr">Kreis-Einnehmer</span> gleichfalls in <span class="g.rend.script.latin">Ruhrorth</span>, und mit<br class="lb" /> einer Karthaus von <span class="g.rend.script.latin">Hagen</span> verheirathet; der dritte noch unverheirathete<br class="lb" /> beſorgt die Geſchäfte der älteren Schweﬅer, die <span class="orig"></span><span class="corr">eine</span> <span class="g.rend.script.latin">Spedition</span> hat, und gleichfalls<br class="lb" /> in <span class="g.rend.script.latin">Ruhrorth</span> wohnt — ; dieſe iﬅ durch die <span class="abbr"> (Demo.)</span><span class="expan">Demo<span class="ex">iſelle</span></span> <span class="g.rend.script.latin">Noot</span> aufmerkſahm auf ſich<br class="lb" /> ſelbﬅ, und auf Gottes Wort geworden, und hegt den ernﬅlichen Wunſch ſich<br class="lb" /> zu beſſern; die jüngere Schweﬅer iﬅ an Herrn <span class="g.rend.script.latin">Doctor <span class="persName">Maercker</span></span> in <span class="g.rend.script.latin">Hagen</span> <br class="lb" /> verheirathet — ;</p><p class="enc.tagsdecl.indent-medium">Dieß mein Wertheﬅer! wäre <span class="orig">ohngefehr</span><span class="corr">ungefähr</span> das, was ich Ihnen in Anſehung <br class="lb" /> der <span class="abbr"> (Dem.)</span><span class="expan">Dem<span class="ex">oiſelle</span></span> <span class="persName"><span class="g.rend.script.latin">Noot</span></span> ſagen könnte — ; Sie werden daraus ſelbﬅ den Schluß machen,<br class="lb" /> daß ſie nicht zu den alltäglichen Frauenzimmern gehört, ſondern zu denen,<br class="lb" /> die man ſelten antrifft — beſonders in den <span class="orig">itzigen</span><span class="corr">jetzigen</span> Zeiten, wo Eitelkeit und<br class="lb" /> <span class="orig">LeichtSinn</span><span class="corr">Leichtsinn</span> ſo ſehr überhand nimmt; <span class="orig">Nach</span><span class="corr">nach</span> meinem Urtheil <span class="orig">kan</span><span class="corr">kann</span> ich nicht<br class="lb" /> anders, als den Mann glücklich ſchätzen, der ſie zur Gattin bekömmt.<a id="mark.002.e"><!--anchor--></a></p><div class="closer"><span class="orig">meine</span><span class="corr">Meine</span> Frau und ich, wir grüßen Sie auf das Herzlichﬅe, ich bin mit<br class="lb" /> denen Ihren bekannten Geſinnungen. <br class="lb" /> <span style="display:inline-block" width="11cm"> </span> Ihr aufrichtiger Freund <br class="lb" /> <div class="dateline"><span class="placeName"><span class="abbr"> (D.)</span><span class="expan">D<span class="ex">üſſeldorf</span></span></span> am <span class="date">12 Maÿ 1791</span>.</div> <span style="display:inline-block" width="8cm"> </span> <div class="signed"><span class="persName"><span class="abbr"> (Fr.)</span><span class="expan">Fr<span class="ex">iedrich</span></span> Hoffmann</span></div></div></div><div class="pagebreak" id="index.xml-pb-d29e600"></div>'