import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import TestPractice from '../interfaces/data'
import { graphql, Link, useStaticQuery } from 'gatsby'
import ThemeContext from '../context/themecontext'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default ({ practice }: { practice: TestPractice }) => {
  const [img, setImg] = useState<any>()

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

  useEffect(() => {
    for (let i of allImageSharp.nodes) {
      if (i.gatsbyImageData.images.fallback.src.includes(practice.image)) {
        setImg(getImage(i))
      }
    }
  }, [])

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="flex flex-col justify-between gridbreak:max-w-lg">
          <div>
            <section className="mb-12 h-80 gridbreak:mb-8">
              {img ? (
                <GatsbyImage
                  image={img}
                  alt={practice ? practice.titel : 'no description found'}
                  class="h-full w-full"
                />
              ) : (
                <div className="h-full w-full bg-gray opacity-50" />
              )}
              <div className=" flex flex-col font-poppins text-base font-semibold text-white gridbreak:relative gridbreak:bottom-5 gridbreak:left-4 gridbreak:flex-row">
                <div
                  className={`py-1 px-2 gridbreak:-skew-x-12  ${
                    context.dark ? 'bg-pinkDesat' : 'bg-pink'
                  }`}
                >
                  {practice.themas[0]}
                </div>
              </div>
            </section>
            <section className="mb-4 font-poppins">
              <h2
                className={`mb-4 font-raleway text-2xl font-semibold line-clamp-2 ${
                  context.dark ? 'text-white' : 'text-dark'
                }`}
              >
                {practice.titel}
              </h2>
              <p
                className={`text-base font-medium  line-clamp-6 ${
                  context.dark
                    ? 'text-white opacity-75'
                    : 'text-dark opacity-90'
                }`}
                dangerouslySetInnerHTML={{
                  __html: `<div>${practice.paragrafen[0].body}</div>`,
                }}
              ></p>
            </section>
          </div>
          <button
            className={`w-[93px] font-poppins text-lg font-semibold  ${
              context.dark
                ? 'text-lightPurpleDesat'
                : 'text-purple text-opacity-90'
            }`}
          >
            <Link
              className={`hover:text-lightPurpleDesat  ${
                context.dark
                  ? 'text-lightPurpleDesat text-opacity-80 hover:text-lightPurpleDesat'
                  : 'text-purple hover:text-lightPurpleDesat'
              }`}
              to="/detailspractice/"
              state={{ practice: practice }}
            >
              Lees meer
            </Link>
            <div
              className={`h-[3px] w-full  ${
                context.dark
                  ? 'bg-lightPurpleDesat opacity-40'
                  : 'bg-purple opacity-30'
              }`}
            ></div>
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
