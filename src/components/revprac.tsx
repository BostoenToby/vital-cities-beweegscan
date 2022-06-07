import * as React from 'react'
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from 'react-dom'
import Tag from './tag'
import ThemeContext from '../context/themecontext'
import Practice from '../interfaces/data'

export default function RevPrac({
  image,
  imageAlt,
  leftTagText,
  leftTagColorBg,
  leftTagColorText,
  practice,
}: {
  image: string
  imageAlt: string
  leftTagText: string
  leftTagColorBg: string
  leftTagColorText: string
  practice: Practice
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
  React.useEffect(() => {
    for (let i of allImageSharp.nodes) {
      if (i.gatsbyImageData.images.fallback.src.includes(image)) {
        setImg(getImage(i))
      }
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Link
          to="/detailspractice/"
          state={{
            practice: practice,
          }}
        >
          {img != '' && (
            <GatsbyImage
              image={img}
              alt="Test"
              className="relative h-96 w-full"
            />
          )}
          <div className="relative bottom-3 left-3 flex items-center text-xs tabletportrait:text-sm laptop:text-lg">
            <Tag
              text={leftTagText}
              classes={
                context.dark ? 'bg-pinkDesat text-white' : 'bg-pink text-white'
              }
            />
          </div>
          <h3
            className={`mb-3 pl-3 text-3xl font-semibold ${
              context.dark ? 'opacity-90' : ''
            }`}
          >
            {practice.titel}
          </h3>
          <p
            className={`pl-3 line-clamp-3 ${context.dark ? 'opacity-75' : ''}`}
          >
            {practice.paragrafen[0].body}
          </p>
        </Link>
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
