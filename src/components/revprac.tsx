
import * as React from 'react'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from 'react-dom'
import Tag from './tag'


export default function RevPrac({image, imageAlt, leftTagText, leftTagColorBg, leftTagColorText, rightTagText, rightTagColorBg, rightTagColorText, title, subTitle}: {image: string, imageAlt: string, leftTagText: string, leftTagColorBg: string, leftTagColorText: string, rightTagText: string, rightTagColorBg: string, rightTagColorText: string, title: string, subTitle: string}) {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
      }
    `
  )
  console.log({ allImageSharp })
  
  const [img, setImg] = React.useState<any>()
  let node: number = 0
  React.useEffect(() => {
    for(let i of allImageSharp.nodes){
      if(i.gatsbyImageData.images.fallback.src.includes(image)){
        setImg(getImage(i))
      }
      node += 1
    }
  }, [])

    React.useEffect(() => {
      console.log(img)
    }, [img])
    return (
      <div>
        {img != "" && (
          <GatsbyImage image={img} alt="Test" className="relative w-auto"/>
        )}
        <div className="flex items-center text-xs relative bottom-3 left-3 tabletportrait:text-sm laptop:text-lg">
          <Tag text={leftTagText} colorBg={leftTagColorBg} colorText={leftTagColorText} />
          <Tag text={rightTagText} colorBg={rightTagColorBg} colorText={rightTagColorText}/>
        </div>
        <h3 className="font-semibold text-3xl pl-3 mb-3">{title}</h3>
        <p className="pl-3">{subTitle}</p>
      </div>
    )
  }



  // query HeaderQuery {
  //   allImageSharp {
  //       nodes {
  //         gatsbyImageData
  //       }
  //   }
  // }
  // `