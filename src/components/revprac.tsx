import * as React from 'react'
import { graphql, Link, StaticQuery, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { render } from 'react-dom'
import Tag from './tag'
import ThemeContext from '../context/themecontext'
import Practice from '../interfaces/data'

export default function RevPrac({
  leftTagText,
  leftTagColorBg,
  leftTagColorText,
  practice,
}: {
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
      if (i.gatsbyImageData.images.fallback.src.includes(practice.image)) {
        setImg(getImage(i))
      }
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Link
          className="opacity-100 hover:opacity-90"
          to="/detailspractice/"
          state={{
            practice: practice,
          }}
        >
          {img != '' && (
            <GatsbyImage
              className="relative h-96 w-full"
              image={img}
              alt={practice.titel}
            />
          )}
          <div className="relative bottom-3 left-3 flex items-center text-sm tabletportrait:text-base laptop:text-lg">
            <Tag
              text={leftTagText}
              classes={
                context.dark ? 'bg-pinkDesat text-white' : 'bg-pink text-white'
              }
            />
          </div>
          <h3
            className={`mb-3 pl-3 text-xl font-semibold tabletportrait:text-2xl laptop:text-3xl hover:underline hover:underline-offset-1 ${
              context.dark ? 'opacity-90' : ''
            }`}
          >
            {practice.titel}
          </h3>
          <p
            className={`pl-3 text-base line-clamp-3 tabletportrait:text-lg ${
              context.dark ? 'opacity-75' : ''
            }`} dangerouslySetInnerHTML={{__html: `<div>${practice.paragrafen[0].body}</div>`}}
          >
          </p>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}