
import * as React from 'react'
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from 'react-dom'
import Tag from './Tag'

export default function RevPrac({image, imageAlt, leftTagText, leftTagColorBg, leftTagColorText, rightTagText, rightTagColorBg, rightTagColorText, title, subTitle}: {image: string, imageAlt: string, leftTagText: string, leftTagColorBg: string, leftTagColorText: string, rightTagText: string, rightTagColorBg: string, rightTagColorText: string, title: string, subTitle: string}) {
  const [img, setImg] = React.useState<any>()
  let node: number = 0
    const data = useStaticQuery(graphql`
      query HeaderQuery {
        allImageSharp {
            nodes {
              gatsbyImageData
            }
        }
      }
    `)
    React.useEffect(() => {
      for(let i of data.allImageSharp.nodes){
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
          <GatsbyImage image={img} alt="Test" />
        )}
        <div className="flex items-center relative bottom-3 left-3">
          <Tag text={leftTagText} colorBg={leftTagColorBg} colorText={leftTagColorText} />
          <Tag text={rightTagText} colorBg={rightTagColorBg} colorText={rightTagColorText}/>
        </div>
        <h3 className="font-semibold text-3xl pl-3">{title}</h3>
        <p className="pl-3">{subTitle}</p>
      </div>
    )
  }