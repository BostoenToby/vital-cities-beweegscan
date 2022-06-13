import { ArrowDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../assets/tailwind.css'
import Ambitionblock from '../components/ambitionblock'
import Contactsection from '../components/contactsection'
import Footer from '../components/footer'
import Topnavigation from '../components/topnavigation'
import { graphql, useStaticQuery } from 'gatsby'
import ThemeContext from '../context/themecontext'
import FadeInSection from '../components/scrollytelling'
import { Helmet } from 'react-helmet'
import {
  ambition,
  header,
  sectionLandingspage,
} from '../interfaces/cmsInterfaces'

const IndexPage = () => {
  const [hasMounted, setHasMounted] = useState(false)
  const [texts, setTexts] = useState<sectionLandingspage[]>()
  const [header, setHeader] = useState<header>()
  const [ambitions, setAmbitions] = useState<ambition[]>()

  useEffect(() => {
    setHasMounted(true)
    let textList: sectionLandingspage[] = []
    let ambitionList: ambition[] = []
    for (let item of cms.nodes) {
      if (
        item.parent.internal.description.includes('header') &&
        item.frontmatter.ambition == 'Landingspagina'
      ) {
        setHeader({
          title: item.frontmatter.title,
          subtitle: item.frontmatter.subtitle,
          image: item.frontmatter.image,
        })
      } else if (item.parent.internal.description.includes('landingspage')) {
        textList.push({
          title: item.frontmatter.title,
          text: item.frontmatter.text,
        })
      } else if (item.parent.internal.description.includes('ambitienamen')) {
        ambitionList.push({
          ambition: item.frontmatter.ambition,
          name: item.frontmatter.name,
        })
      }
    }
    setTexts(textList)
    setAmbitions(ambitionList)
  }, [])

  const { cms } = useStaticQuery(
    graphql`
      query {
        cms: allMarkdownRemark {
          nodes {
            frontmatter {
              ambition
              ambitions
              date
              extra
              title
              link
              text
              subtitle
              image
              tag
              name
              boldpart
              thema
              resources
            }
            parent {
              internal {
                description
              }
            }
          }
        }
      }
    `,
  )

  if (!hasMounted) {
    return null
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className={`font-poppins font-light selection:text-white ${
            context.dark
              ? 'bg-dark selection:bg-pinkDesat '
              : 'selection:bg-pink'
          }`}
        >
          <Helmet htmlAttributes={{
              lang: 'en',
            }}>
            X-Content-Type-Options: nosniff
            X-XSS-Protection: 1; mode=block
            <meta charSet="utf-8" />
            <title>Vital Cities beweegscan</title>
            <meta
              name="description"
              content="Meet de beweegvriendelijkheid van jouw stad of gemeente en vind de inspiratie om die nog te verbeteren."
            />
            <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAMAEBAAAAEAIABoBAAANgAAACAgAAABACAAKBEAAJ4EAAAwMAAAAQAgAGgmAADGFQAAKAAAABAAAAAgAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIw06JmLM+fRjDPo0Iwz5tCLNObPjDTnzo00582LM+bNjDPnzIs058uLNOfLjDTnyow058mMM+jIizLkQgAAAACLM+eNjDTn/4w05/+QO+j/jTbn/4445/+NNuf/kDvo/5A76P+MNOf/izTn/4s05/+GO+f/jDTn/4w054kAAAAAjDLmW4w05/+NN+f/3sb4/8GS8v/DlfL/yJ7z/9Sz9v/QrPX/mUvp/1t06/9aduz/Tobt/4w05/+MNOfGAAAAAIky5imMNOf/jzrn/86p9f/Aj/L/x5zz/9Cs9P/p2Pr/1bb2/5NA6P88nO//Kbfx/z2c7v+MNOf/jDTm+Y454wlVAKoDjDPn9Iw05/+sbe7/qWjt/8if8/+paO3/q2vt/6ln7f+NNuf/b1np/29a6v9Zd+z/jDTn/4w05/+ONec/AAAAAI006MSMNOf/jDTn/6BY6/+NNuf/oFjr/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jTToewAAAAC8iPCYvozx/76M8f++jPH/vozx/76M8f++jPH/vozx/76M8f++jPH/vozx/76M8f+1fe/hjDPmkI0y52AAAAAA////oP//////////////////////////////////////////////////////////////qwAAAAAAAAAAAAAAAP///7X//////fv7///////o197/+vf4//fx8//cw8z/3MPM/+TQ2P/x5ur/9/Dz/////5YAAAAAAAAAAAAAAAD////K/////9Gvu///////rXCH/+/j5//p2N7/kT5c/4UoSv+xd4z/xpur/+fU2/////+CAAAAAAAAAAAAAAAA////3v////+YS2f//v39/61wh//u4uf/6dnf/65xh/+ZTWn/uYWY//Dl6f/8+vv/////bQAAAAAAAAAAAAAAAP////Pu4uf/hCdJ/+nZ3/+tcIf/7+Po/+jW3f/LpLL/t4CT/7mFmP/z6u3//////////1gAAAAAAAAAAP///wn/////0a+8/4QnSf/MprT/rXCH/7V8kf+vc4n/48/W/9Szv/+5hZj/8+rt//////////9DAAAAAAAAAAD///8e/////9Kxvf+wdIr/z6u4/8uksv+1fpL/sHSK//n19v/07O//zai2//bw8v//////////LgAAAAAAAAAA////Mv///////////////////////////////////////////////////////////////////xkAAAAAAAAAAP///z/////j////4////+P////j////4////+P////j////4////+P////j////4////+P///8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAACAAAABAAAAAAQAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAI016VyMM+ikizToo4s06KOMNOeiizTnoYsz56GLM+egjDPnn4wz55+LNOeejDTnnY006JyMM+ibjDPmm4sz6JqMNOiZjDTmmYs06JiMNOeXjDPnl4sz55aMM+eVizPnlY0055ONNOeTjDPoko0z6JGNNOVOAAAAAAAAAAAAAAAAjDTmZow05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4sz5rkAAAAAAAAAAAAAAACOMeY0jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTo8apV/wMAAAAAAAAAAIAg3wiMNOf6jDTn/4w05/+MNOf/jDTn/5A66P+ZS+r/jTXn/5A76P+MNef/lUPp/5E96P+MNOf/mUvq/5A76P+ON+f/m07q/4w05/+MNOf/ijXn/4w05/+KNuf/jDTn/4Y75/98SOj/jDTn/4w05/+MNOf/jzPlMgAAAAAAAAAAAAAAAIw06M+MNOf/jDTn/4w05/+MNOf/3cL4//v4/v+qae3/07L2/7iC8P/bwPf/4sz4/51S6v/7+P7/2r33/8ie8//48/7/nVLq/4w05/9fbuv/gETo/1t17P+EPuj/bF7q/zCt8P+MNOf/jDTn/4w05/+NM+huAAAAAAAAAAAAAAAAjDTnnYw05/+MNOf/jDTn/5I/6P/o2Pr/uobw/7R67//Tsvb/yqHz/7Bz7v/izPj/v4/x/72K8f++jfH/rnHu/9Kv9f+vcu7/jDTn/1Z67P84o+//Sovu/0CZ7/9rYOr/MK3w/4w05/+MNOf/jDTn/4w056sAAAAAAAAAAAAAAACNNOdrjDTn/4w05/+MNOf/mErp/9e59/+RPej/nE/q/9Oy9v/KofP/pWDs/+LM+P/GnPP/9e39//n1/v/In/P/8OX8/5VE6f+MNOf/Vnrs/yLB8v8kvfL/IsHy/zug7/8wrfD/jDTn/4w05/+MNOf/jDTn5wAAAAAAAAAAAAAAAIg15TqMNOf/jDTn/4w05/+OOOf/8eb8/+HK+f+9ivH/07L2/+jX+v/FmfP/4sz4/7Z+7//QrPX/5dL5/9a39v/HnfP/nlTq/4w05/9Weuz/JL3y/zik7/8nufH/W3Xr/zCt8P+MNOf/jDTn/4w05/+MNOf/jjLqJAAAAAAAAAAAiy7oC4w05/yMNOf/jDTn/4w05/+8iPH/3cP4/5pN6v+8ivH/8OX8/8qi9P/Gm/P/kT3o/97E+P+4gfD/q2zt/+DI+P+RPOj/jDTn/1Z67P9gbev/TYft/2ph6v9sXur/MK3w/4w05/+MNOf/jDTn/4w05/+LNedhAAAAAAAAAAAAAAAAjDPn1Yw05/+MNOf/jDTn/4w05/+MNOf/lELo/7uH8f/ClPL/pWDs/8GS8v+NN+f/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/ekvo/4w05/96TOn/jDTn/3dP6f9Qgu3/jDTn/4w05/+MNOf/jDTn/4w0550AAAAAAAAAAAAAAACLNOajjDTn/4w05/+MNOf/jDTn/4w05/+aTOr/0Kz1/4866P+NN+f/2r73/5A66P+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn2QAAAAAAAAAAAAAAAIw05nGMNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+NNOf+kDfpFwAAAAAAAAAAijXnP4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+KNOZTAAAAAAAAAADw6f8j8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/8OT7//Dk+//w5Pv/4875h4su4CGLLuAhiy7gIYgz7g8AAAAAAAAAAP///zf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////TP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9h////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////OAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///3b////////////////9+/z/+PP0////////////w5Wm/+HL0///////7eDl/+XS2f/59Pb/uoea/7qHmv+6h5r/uoea/9m9x/+6h5r/38fQ/+bU2//exM7///////////////8kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////iv///////////////+XS2f/bv8n///////////+SQF7/yaGw///////fyNH/0a+7//////+QO1r/hCdJ/4QnSf+EJ0n/0rC8/4QnSf/Fman/yJ+v/82ntf///////////////w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+f////////////////yJ+u/76Nnv///////////5JAXv/JobD//////97Gz//UtMD//////6xuhf+EJ0n/hCdJ/4ctTv/r3eL/hCdJ/8WZqf/Fmqr/0Ky5///////////4////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///7T///////////////+rbIP/oVp0////////////kkBe/8mhsP//////3sXO/9W1wf//////yaGv/4QnSf+EJ0n/oFlz/+/j5/+EJ0n/4szU//n19//17fD//////////+QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////yP////////////7//486Wf+HLU7/+/j5//////+SQF7/yaGw///////exs//0rC8///////m1Nv/hCdJ/4QnSf+9jJ7/7+Pn/4QnSf/n1dv/////////////////////zwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////d///////////s3uT/hCdJ/4QnSf/izNT//////5JAXv/JobD//////+DI0f/Qrbr///////38/P+KMlL/hCdJ/9u/yf/v4+f/hCdJ/+fV2/////////////////////+6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////L//////////9Csuf+EJ0n/hCdJ/8WZqf//////kkBe/8mhsP//////38jQ/9Guu////////////6Viev+FKEr/9/Dy/+/j5/+EJ0n/59Xb/////////////////////6YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8I////////////////snmO/4QnSf+EJ0n/qGZ+//////+SQF7/yaGw/+jW3P/SsL3/0q+8/+TP1//8+vr/wpWl/5pNaf//////7+Pn/4QnSf/n1dv/////////////////////kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///x3///////////////+WRmP/hCdJ/4QnSf+MNVX//v39/5JAXv/JobD/lUVi/4QnSf+EJ0n/hCdJ//Hn6v/fyND/t4CU///////v4+f/hCdJ/+fV2/////////////////////97AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Mf//////////8+ru/4QnSf+EJ0n/hCdJ/4QnSf/p2N7/kkBe/8mhsP+VRWL/hCdJ/4QnSf+EJ0n/8efq//r29//Wt8P//////+/j5/+EJ0n/59Xb/////////////////////2YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9G///////////28PL/3MLL/9zCy//cwsv/3MLL//Pr7v/gydL/8OXp/+HK0//cwsv/3MLL/9zCy//7+Pn///////z6+///////+PP1/8uls//17fD/////////////////////UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///1r///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////89AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////b////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+F////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///3b////I////yP///8j////I////yP///8j////I////yP///8j////I////yP///8j////I////yP///8j////I////yP///8j////I////yP///8j////I////yP///8b///8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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5/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MM+egiy7oCwAAAAAAAAAAAAAAAIo13xiMNefGjDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOf/jDTn/4w05/+MNOfJhTPgGQAAAAAAAAAAAAAAAKRt7Q61e/Cotn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2f+//tn/v/7Z/7/+2fu/+lUbpsIwz56CMM+egjDPnoIwz56CLM+aRiy7oFgAAAAAAAAAAAAAAAP///w369v2m+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/69v7/+vb+//r2/v/59v3z5M/6MIsu6AuLLugLiy7oC4su6AuLLugLgAD/AgAAAAAAAAAAAAAAAP///xL///+0///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////l////IgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///xb////B///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////X////HgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///xr////O///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////K////GQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///yD////e//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7////FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///yT////r//////////////////////////////////////////////////////r19//49Pb//v3+///////+/v7//v39//z6+//+/f3//fz9//jz9f/48/X/+PP1//jz9f/48/X/+PP1//n19//69/n/+PP1//z6+//8+/v//Pr7//v5+v/+/f3///////////////+u////EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///yn////5//////////////////////79/f/w5en/+/j5/////////////////6trg/+dVG7/8OTo///////59fb/2LvG/8uls//17fD/8OXp/5ZHZP+WR2T/lkdk/5ZHZP+WR2T/lkdk/7F3jP+9jJ7/lkdk/9Ozvv/Np7X/3cTN/8+ruP/jztb///////////////+g////CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///zf///////////////////////////jz9f/LpLL/9e3v/////////////////5xRbf+MNVX/7eDk///////8+/v/zKe0/9Oyvv/t4OX//v7+/5A7Wv+EJ0n/hCdJ/4QnSf+EJ0n/hCdJ/8GSo/+xd4z/hCdJ/72Mnv/Joa//wZKj/9Csuf/t3+T///////////////+S////BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///0////////////////////////////Ln6/+kYHn/7uDl/////////////////5xRbf+MNVX/7eDk///////59fb/0K67/8mgr//v4+j//////69zif+EJ0n/hCdJ/4QnSf+EJ0n/hCdJ/+HK0v+xd4z/hCdJ/8SZqf/Inq7/zKa1/8mhsP/k0Nf///////////////+E////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///2X//////////////////////////+nY3v+IL1D/3MHK/////////////////5xRbf+MNVX/7eDk///////59ff/07O//9Kxvf/m1Nv//////8+ruP+EJ0n/hCdJ/4QnSf+EJ0n/jThX//fy9P+xd4z/hCdJ/7yJnP/Qrrv/wpSl/8acq//u4eX///////////v///91AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///3v//////////////////////////86pt/+EJ0n/vIqc/////////////////5xRbf+MNVX/7eDk///////69/j/zam3/8Waqv/z6+7//////+ra3/+IL0//hCdJ/4QnSf+EJ0n/q22E//r29/+xd4z/hCdJ/9S0v//y6e3/9e7x/+7h5v/38PP///////////f///9oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///5T//////////////////////////65wh/+EJ0n/nFFs/////////////////5xRbf+MNVX/7eDk///////59Pb/07K+/82otv/q2uD///////Lo7P+aTmr/hCdJ/4QnSf+EJ0n/zKWz//r29/+xd4z/hCdJ/9e5xP////////////////////////////////L///9aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///6n//////////////////////v7+/485Wf+EJ0n/hipM//Xt8P///////////5xRbf+MNVX/7eDk///////9+/z/yaCv/8uks//17fD///////jz9f+ucIf/hCdJ/4QnSf+HLE7/59bc//r29/+xd4z/hCdJ/9e5xP///////////////////////////////+7///9NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///8L/////////////////////6Nfe/4QnSf+EJ0n/hCdJ/9a4xP///////////5xRbf+MNVX/7eDk///////48vT/2LvF/8+quP/m0tn///////79/f/BkqP/hShK/4QnSf+YS2f/8efr//r29/+xd4z/hCdJ/9e5xP///////////////////////////////+n///8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///9j/////////////////////yJ+u/4QnSf+EJ0n/hCdJ/7Z/k////////////5xRbf+MNVX/7eDk///////7+fr/zai1/82otv/w5en////////////VtMD/ijJS/4QnSf+sbIP/+PL0//r29/+xd4z/hCdJ/9e5xP///////////////////////////////+T///8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///+//////////////////////qGZ+/4QnSf+EJ0n/hCdJ/5tQa//7+fr//////5xRbf+MNVX/7eDk///////28PL/17nE/8ierf/q2uD////////////o1tz/kT5c/4QoSv+/jqD//v39//r29/+xd4z/hCdJ/9e5xP///////////////////////////////+D///8jAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////CP////7////////////////17fD/lUVi/4QnSf+EJ0n/hCdJ/5I/Xf/q2+D//////5xRbf+MNVX/7eDk//jz9f/27/H/xp2s/86ot//w5Oj/9u/y//38/P/69vf/mUxo/4oxUf/SsL3///////r29/+xd4z/hCdJ/9e5xP///////////////////////////////9v///8UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Hv/////////////////////hy9P/jzpZ/4QnSf+EJ0n/hCdJ/4s0VP/XuMP//////5xRbf+MNVX/7eDk/7uImv+mY3z/pWF6/6Vie/+mY3v/pmN8/+/i5v//////snmN/5A8W//m0tn///////r29/+xd4z/hCdJ/9e5xP///////////////////////////////9b///8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////N//////////////////////Oqrf/iC9P/4QnSf+EJ0n/hCdJ/4UpS//Dl6f//v7+/5xRbf+MNVX/7eDk/6BZc/+EJ0n/hCdJ/4QnSf+EJ0n/hCdJ/+nX3f//////07G9/5dIZf/58/X///////r29/+xd4z/hCdJ/9e5xP///////////////////////////////8gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////TP////////////////37/P+7h5r/hCdJ/4QnSf+EJ0n/hCdJ/4QnSf+wdYr/+fX2/5xRbf+MNVX/7eDk/6BZc/+EJ0n/hCdJ/4QnSf+EJ0n/hCdJ/+nX3f//////8efr/7B1i/////////////r29/+xd4z/hCdJ/9e5xP///////////////////////////////7IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////Y/////////////////n09v+9i53/nlZw/55WcP+eVnD/nlZw/55WcP+0fJH/9vDy/7J3jf+lYXr/8ebq/7V9kf+eVnD/nlZw/55WcP+eVnD/nlZw/+7g5P///////////+HK0v////////////r3+P+4g5b/jjlY/9q/yf///////////////////////////////5kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////e/////////////////79/v/28PL/8+vu//Pr7v/z6+7/8+vu//Pr7v/17vH//v39//bv8f/07O///fz8//bv8v/z6+7/8+vu//Pr7v/z6+7/8+vu//37/P////////////78/f////////////7+/v/07O//7uHl//n19////////////////////////////////4IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////kv///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////qP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////vv///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8D////1P///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8P////2f///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////v///w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8S////jv///6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////o////6P///+j////oP///wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==" />
          </Helmet>

          <Topnavigation section="#Contact" />
          <div
            className={`absolute top-0 left-0 h-24 w-full tabletportrait:w-1/2 ${
              context.dark ? 'bg-white bg-opacity-[0.08]' : 'bg-purple'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2 ${
              context.dark ? 'bg-dark' : 'bg-white'
            }`}
          ></div>
          <div
            className={`absolute top-0 right-0 hidden h-24 w-full tabletportrait:block tabletportrait:w-1/2  ${
              context.dark
                ? 'bg-white bg-opacity-[0.08] columnbreak:bg-dark'
                : 'bg-purple columnbreak:bg-white'
            }`}
          ></div>
          <header
            className={`flex w-full flex-col columnbreak:flex-row columnbreak:items-center  ${
              context.dark
                ? 'indexbreak:bg-white indexbreak:bg-opacity-[0.08]'
                : 'indexbreak:bg-purple'
            }`}
          >
            <section
              className={`h-full w-full p-7 pb-5 columnbreak:w-1/2 columnbreak:p-14 columnbreak:pb-10 ${
                context.dark
                  ? 'bg-white bg-opacity-[0.08] indexbreak:bg-opacity-0'
                  : 'bg-purple'
              }`}
            >
              <h1 className="mb-8 max-w-2xl font-raleway text-3xl font-xxbold leading-tight text-white tabletportrait:text-4xl laptop:text-6xl laptopL:text-7xl">
                {header?.title}
              </h1>
              <p className="mb-12 max-w-2xl text-xl font-xlight leading-6 text-white opacity-75 laptop:text-2xl">
                {header?.subtitle}
              </p>
              <p
                className={`mb-2 font-semibold ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              >
                scroll
              </p>
              <ArrowDown
                className={`animate-bounce ${
                  context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
                }`}
              />
            </section>
            <section className="h-full w-full columnbreak:w-1/2">
              <StaticImage
                src="../images/beweegscan.jpg"
                alt="header picture"
                className="h-full w-full"
              />
            </section>
          </header>
          <main className="mx-auto max-w-[104rem]">
            <div
              className={`mx-4 my-8 mobile:mx-8 columnbreak:my-16 columnbreak:mx-16 ${
                context.dark ? 'text-white' : 'text-dark'
              }`}
            >
              {texts &&
                texts.map((item: sectionLandingspage, val: number) => {
                  if (item.title == 'Over de beweegscan') {
                    return (
                      <div key={val}>
                        <h2
                          className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                            context.dark ? 'opacity-90' : ''
                          }`}
                        >
                          {item.title}
                        </h2>
                        <p
                          className={`mb-8 whitespace-pre-line ${
                            context.dark ? 'opacity-75' : ''
                          }`}
                        >
                          {item.text}
                        </p>
                      </div>
                    )
                  } else {
                    return null
                  }
                })}
              <FadeInSection>
                <div className="mb-8 grid grid-cols-1 flex-col gap-8 tabletportrait:grid-cols-2 laptop:grid-cols-3 4K:grid-cols-4">
                  {ambitions &&
                    ambitions.map((item: ambition, val: number) => {
                      let short: string = ''
                      if (item.ambition.includes('bewegen')) {
                        short = 'actief bewegen'
                      } else if (item.ambition.includes('stadskern')) {
                        short = 'verbonden stadskern'
                      } else if (item.ambition.includes('wandel')) {
                        short = 'fiets- en wandelroutes'
                      } else if (item.ambition.includes('sport')) {
                        short = 'sporten'
                      } else if (item.ambition.includes('speel')) {
                        short = 'spelen'
                      } else if (item.ambition.includes('ontmoet')) {
                        short = 'ontmoeten'
                      } else if (item.ambition.includes('groen')) {
                        short = 'groen'
                      }
                      return (
                        <Ambitionblock
                          header={`Ambitie ${val + 1}`}
                          text={item.name}
                          shorttext={short}
                          key={val}
                        />
                      )
                    })}
                </div>
              </FadeInSection>
              <FadeInSection>
                {texts &&
                  texts.map((item: sectionLandingspage, val: number) => {
                    if (item.title == 'In een oogopslag') {
                      return (
                        <div key={val}>
                          <h2
                            className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                              context.dark ? 'opacity-90' : ''
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={`mb-8 whitespace-pre-line ${
                              context.dark ? 'opacity-75' : ''
                            }`}
                          >
                            {item.text}
                          </p>
                        </div>
                      )
                    } else {
                      return null
                    }
                  })}

                {texts &&
                  texts.map((item: sectionLandingspage, val: number) => {
                    if (item.title == 'Inspirerend') {
                      return (
                        <div key={val}>
                          <h2
                            className={`mb-4 font-raleway text-xl font-bold tabletportrait:text-3xl laptop:text-4xl ${
                              context.dark ? 'opacity-90' : ''
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={`mb-8 whitespace-pre-line ${
                              context.dark ? 'opacity-75' : ''
                            }`}
                          >
                            {item.text}
                          </p>
                        </div>
                      )
                    } else {
                      return null
                    }
                  })}
              </FadeInSection>
            </div>
          </main>
          <div id="Contact">
            <Contactsection />
            <Footer />
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

export default IndexPage
