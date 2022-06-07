import { Link } from 'gatsby'
import * as React from 'react'
import ThemeContext from '../context/themecontext'

export default ({
  header,
  text,
  shorttext,
}: {
  header: string
  text: string
  shorttext: string
}) => {
  // switch statement die kijkt naar de text voor een icon?
  const getIcon = (number: string) => {
    if (number == '1') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="48px"
            viewBox="0 0 20 20"
            width="48px"
            fill="#492784"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path d="M9,13c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S10.1,13,9,13z M9,16c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1S9.55,16,9,16z" />
                <path d="M9.24,12L7.82,5.78C7.72,5.32,7.31,5,6.84,5H4.01v1h2.84l1.17,5.14c-1.57,0.4-2.75,1.72-2.96,3.36H1v1h5.01v-0.51 C6.01,13.34,7.35,12,9,12L9.24,12z" />
                <path d="M15.5,8h-0.68l-1.58-4.34C13.1,3.26,12.72,3,12.3,3H10v1h2.3l1.46,4h-4.4l0.23,1h3.45c-0.53,0.52-0.88,1.22-0.98,2h-2.01 l0.23,1h1.79c0.25,1.81,1.83,3.14,3.75,2.99c1.64-0.13,3.01-1.46,3.18-3.1C19.2,9.75,17.59,8,15.5,8z M15.5,14 c-1.4,0-2.5-1.1-2.5-2.5c0-0.94,0.5-1.73,1.24-2.16l1.03,2.83l0.94-0.34l-1.02-2.8C15.3,9.02,15.4,9,15.5,9c1.4,0,2.5,1.1,2.5,2.5 S16.9,14,15.5,14z" />
              </g>
            </g>
          </svg>
        </div>
      )
    } else if (number == '2') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#492784"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z" />
          </svg>
        </div>
      )
    } else if (number == '3') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 0 24 24"
            width="48px"
            fill="#492784"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1-.6-1.6-.6s-1.1.2-1.4.6L7.8 8.4c-.4.4-.6.9-.6 1.4 0 .6.2 1.1.6 1.4L11 14v5h2v-6.2l-2.2-2.3zM19 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5z" />
          </svg>
        </div>
      )
    } else if (number == '4') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="48px"
            viewBox="0 0 20 20"
            width="48px"
            fill="#492784"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <g>
                  <path d="M13.05,9.5h3.92c-0.1-1.43-0.63-2.74-1.47-3.81C14.16,6.48,13.22,7.87,13.05,9.5z" />
                </g>
                <g>
                  <path d="M6.95,10.5H3.03c0.1,1.43,0.63,2.74,1.47,3.81C5.84,13.52,6.78,12.13,6.95,10.5z" />
                </g>
                <g>
                  <path d="M6.95,9.5c-0.17-1.63-1.1-3.02-2.46-3.81C3.66,6.76,3.13,8.07,3.03,9.5H6.95z" />
                </g>
                <g>
                  <path d="M13.05,10.5c0.17,1.63,1.1,3.02,2.46,3.81c0.83-1.07,1.36-2.38,1.47-3.81H13.05z" />
                </g>
                <g>
                  <path d="M12.03,10.5H10.5v6.47c1.67-0.12,3.17-0.82,4.31-1.9C13.26,14.1,12.18,12.43,12.03,10.5z" />
                </g>
                <g>
                  <path d="M12.03,9.5c0.16-1.93,1.23-3.6,2.79-4.58c-1.14-1.08-2.64-1.78-4.31-1.9V9.5H12.03z" />
                </g>
                <g>
                  <path d="M7.97,10.5c-0.16,1.93-1.23,3.6-2.79,4.58c1.14,1.08,2.64,1.78,4.31,1.9V10.5H7.97z" />
                </g>
                <g>
                  <path d="M7.97,9.5H9.5V3.03c-1.67,0.12-3.17,0.82-4.31,1.9C6.74,5.9,7.82,7.57,7.97,9.5z" />
                </g>
              </g>
            </g>
          </svg>
        </div>
      )
    } else if (number == '5') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48px"
            fill="#492784"
            viewBox="0 0 54.9 54.9"
          >
            <g id="Head_left">
              <path d="M10,22.9c3.9,0,3.9-6,0-6C6.2,16.8,6.1,22.9,10,22.9z" />
            </g>
            <g id="Head_right">
              <path d="M44.4,16.9c3.9-0.3,3.4-6.3-0.4-6C40.1,11.1,40.5,17.1,44.4,16.9z" />
            </g>
            <g id="main">
              <path
                d="M48,29.9c-0.3,0-0.7,0.1-1,0.2c0.6-0.4,1-1,1.1-1.9c0.4-2.5,0.5-5.1,0.1-7.7c-0.2-1.6-1.5-2.9-3.2-2.8
            c-1.3,0.1-2.6,1.2-2.8,2.6c-1.8,1.2-3.6,2.3-5.4,3.4c-0.9,0.6-0.9,1.6-0.3,2.2c-0.2,0.1-0.4,0.4-0.4,0.7c-0.2,1.7-0.5,3.4-0.7,5.2
            c-5.2,0.8-8.1,1.3-13.3,2.1c-0.7-1.7-1.3-3.3-2-5c-0.4-0.9-1.6-0.4-1.6,0.5c-0.1-0.1-0.1-0.1-0.2-0.1c-1.9-1-3.8-2-5.6-3
            c-0.3-1.3-1.6-2.4-2.9-2.4c-1.7,0-2.9,1.4-3,3c-0.2,2.6,0,5.1,0.6,7.6C7.3,35,7.6,35.5,8,35.9c-0.6,0.1-1.2,0.2-1.8,0.3
            c-2,0.3-1.3,3.4,0.7,3.1c3.2-0.5,6.3-0.9,9.5-1.4c0.4,1.2,0.8,2.5,1.2,3.8c0.6,2,3.6,1.1,3.1-0.8c-0.3-1.1-0.7-2.3-1.1-3.4
            c5.2-0.8,10.3-1.5,15.5-2.3c0,0.1-0.1,0.3-0.1,0.4c-0.4,2,2.7,2.6,3.1,0.6c0.1-0.5,0.2-1,0.4-1.6c3.4-0.5,6.9-1,10.3-1.5
            C50.8,32.7,50,29.6,48,29.9z M18.1,34.3c-0.3-0.3-0.6-0.5-1.1-0.5c-1.4-0.2-2.7-0.3-4.1-0.4c0-0.2,0-0.4-0.1-0.7
            c-0.2-1-0.4-2-0.4-3c1.3,0.7,2.7,1.4,4,2.1c1.1,0.6,2.1-0.2,2.4-1.1c0.4,1.1,0.9,2.2,1.3,3.3C19.5,34.1,18.8,34.2,18.1,34.3z
            M42.2,27c0,0.2,0,0.5,0,0.7c-1.4,0.2-2.7,0.4-4.1,0.6c-0.2,0-0.4,0.1-0.6,0.3c0.1-0.6,0.2-1.3,0.3-1.9c0,0,0-0.1,0-0.1
            c0.3,0,0.5-0.1,0.8-0.2c1.3-0.8,2.6-1.6,3.9-2.4C42.4,24.9,42.3,25.9,42.2,27z"
              />
            </g>
            <g id="Triangle">
              <path
                d="M33.4,44.8h-9.3c-0.2,0-0.4-0.2-0.4-0.4c0-0.1,0-0.1,0-0.2l4.6-8.6c0.1-0.2,0.3-0.2,0.5-0.1c0.1,0,0.1,0.1,0.1,0.1l4.6,8.6
            c0.1,0.2,0,0.4-0.1,0.5C33.5,44.8,33.4,44.8,33.4,44.8z"
              />
            </g>
          </svg>
        </div>
      )
    } else if (number == '6') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="48px"
            viewBox="0 0 20 20"
            width="48px"
            fill="#492784"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <path d="M8.22,10h3.56c0.63,0,1.1-0.58,0.98-1.2l-0.37-1.84C12.16,5.82,11.16,5,10,5S7.84,5.82,7.61,6.96L7.24,8.8 C7.12,9.42,7.59,10,8.22,10z" />
                <path d="M1.63,9.49C1.52,9.7,1.49,9.95,1.54,10.2c0.13,0.55,0.61,0.83,1.22,0.8c0,0,1.19,0,1.56,0C5,11,5.54,10.54,5.54,9.97 c0-0.11-0.02-0.22-0.06-0.32c-0.01-0.02-0.01-0.04,0-0.06c0.07-0.13,0.11-0.27,0.11-0.42c0-0.25-0.11-0.48-0.29-0.66 C5.28,8.49,5.28,8.46,5.29,8.43c0.05-0.16,0.06-0.34,0.01-0.52C5.18,7.56,4.86,7.32,4.51,7.3c-0.02,0-0.04-0.01-0.05-0.03 C4.32,7.11,4.08,7,3.8,7c-0.24,0-0.46,0.08-0.6,0.21C3.18,7.23,3.15,7.23,3.12,7.22C3.01,7.18,2.89,7.15,2.76,7.15 c-0.52,0-0.94,0.39-0.99,0.9c0,0.02-0.01,0.03-0.02,0.05C1.51,8.31,1.38,8.62,1.42,8.94c0.02,0.18,0.09,0.34,0.2,0.48 C1.64,9.44,1.64,9.47,1.63,9.49z" />
                <path d="M16.5,11c0.83,0,1.5-0.67,1.5-1.5c0-0.04-0.01-0.07-0.01-0.11H18V9.01c0-0.83-0.68-1.51-1.51-1.51h-1.61 c-0.32,0-0.49,0.37-0.29,0.61l0.65,0.58C15.09,8.93,15,9.2,15,9.5C15,10.33,15.67,11,16.5,11z" />
                <path d="M13.9,11.93C12.87,11.41,11.54,11,10,11c-1.54,0-2.87,0.41-3.9,0.93C5.42,12.26,5,12.96,5,13.72L5,15h10l0-1.28 C15,12.96,14.58,12.26,13.9,11.93z" />
                <path d="M18.74,12.01c-0.64-0.25-1.4-0.41-2.24-0.41c-0.44,0-0.86,0.05-1.25,0.12c0.48,0.54,0.75,1.24,0.75,1.99L16,15h4l0-1.13 C20,13.05,19.5,12.31,18.74,12.01z" />
                <path d="M3.5,11.6c-0.85,0-1.6,0.16-2.24,0.41C0.5,12.31,0,13.05,0,13.87L0,15h4l0-1.28c0-0.76,0.28-1.45,0.75-1.99 C4.36,11.65,3.94,11.6,3.5,11.6z" />
              </g>
            </g>
          </svg>
        </div>
      )
    } else if (number == '7') {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="48px"
            viewBox="0 0 20 20"
            width="48px"
            fill="#492784"
          >
            <g>
              <rect fill="none" height="20" width="20" />
            </g>
            <g>
              <g>
                <polygon points="13,10 8,2 3,10 4.18,10 1,15 6.5,15 6.5,18 9.5,18 9.5,15 15,15 11.82,10" />
                <polygon points="15.82,10 17,10 12,2 10.59,4.26 14.8,11 13.64,11 16.19,15 19,15" />
                <rect height="2" width="3" x="10.5" y="16" />
              </g>
            </g>
          </svg>
        </div>
      )
    } else {
      return (
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-lightxPurple opacity-50"></div>
      )
    }
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Link
          to="/ambitionpage/"
          state={{ ambition: text, short: shorttext }}
          className={` flex min-h-[288px] flex-col justify-center   px-6 py-12 drop-shadow-sm ${
            context.dark
              ? ' bg-white bg-opacity-[0.06] hover:bg-opacity-10 focus:bg-opacity-10'
              : 'border-0 bg-white shadow-md hover:bg-darkGray  hover:bg-opacity-5 focus:bg-darkGray focus:bg-opacity-5'
          }`}
        >
          {getIcon(header.charAt(header.length - 1))}
          <div className="mt-2 justify-center text-center">
            <p
              className={`mb-1 text-base font-bold ${
                context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
              }`}
            >
              {header}
            </p>
            <h3
              className={`font-raleway text-2xl font-semibold ${
                context.dark ? 'text-white opacity-90' : 'text-dark'
              }`}
            >
              {text}
            </h3>
          </div>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}
