import * as React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from 'react-dom'
import Tag from './tag'
import ThemeContext from '../context/themecontext'

export default function RevPrac({
  image,
  imageAlt,
  leftTagText,
  leftTagColorBg,
  leftTagColorText,
  rightTagText,
  rightTagColorBg,
  rightTagColorText,
  title,
  subTitle,
}: {
  image: string
  imageAlt: string
  leftTagText: string
  leftTagColorBg: string
  leftTagColorText: string
  rightTagText: string
  rightTagColorBg: string
  rightTagColorText: string
  title: string
  subTitle: string
}) {
  const { allImageSharp } = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          nodes {
            gatsbyImageData
          }
        }
      }
    `,
  )

  const [img, setImg] = React.useState<any>()
  let node: number = 0
  React.useEffect(() => {
    for (let i of allImageSharp.nodes) {
      if (i.gatsbyImageData.images.fallback.src.includes(image)) {
        setImg(getImage(i))
      }
      node += 1
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div>
          {img != '' && (
            <GatsbyImage image={img} alt="Test" className="relative w-auto" />
          )}
          <div className="relative bottom-3 left-3 flex items-center text-xs tabletportrait:text-sm laptop:text-lg">
            <Tag
              text={leftTagText}
              classes={
                context.dark ? 'bg-pinkDesat text-white' : 'bg-pink text-white'
              }
            />
            <Tag
              text={rightTagText}
              classes={
                context.dark
                  ? 'bg-purpleDesat text-white'
                  : 'bg-purple text-white'
              }
            />
          </div>
          <h3
            className={`mb-3 pl-3 text-3xl font-semibold ${
              context.dark ? 'opacity-90' : ''
            }`}
          >
            {title}
          </h3>
          <p className={`pl-3 ${context.dark ? 'opacity-75' : ''}`}>
            {subTitle}
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
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
