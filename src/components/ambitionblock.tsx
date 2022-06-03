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
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 20 20"
            height="48px"
            viewBox="0 0 20 20"
            width="48px"
            fill="#492784"
          >
            <g display="none">
              <rect display="inline" fill="none" height="20" width="20" y="0" />
            </g>
            <g>
              <g>
                <path d="M14.55,8.53l-0.83-2.49c-0.31-0.92-1.17-1.54-2.13-1.54H8.41c-0.97,0-1.83,0.62-2.13,1.54L5.73,7.67l-1-1l0.15-0.15 c0.29-0.29,0.29-0.77,0-1.06s-0.77-0.29-1.06,0L2.47,6.82c-0.29,0.29-0.29,0.77,0,1.06c0.29,0.29,0.77,0.29,1.06,0l0.14-0.14 l0.99,0.99C3.69,9.15,3,10.12,3,11.25c0,0.98,0.51,1.83,1.28,2.32c0.16,1.09,1.09,1.93,2.22,1.93c0.98,0,1.8-0.63,2.11-1.5h2.78 c0.31,0.87,1.14,1.5,2.11,1.5c1.13,0,2.06-0.84,2.22-1.93c0.77-0.49,1.28-1.34,1.28-2.32C17,9.84,15.92,8.68,14.55,8.53z M6.5,14 c-0.41,0-0.75-0.34-0.75-0.75S6.09,12.5,6.5,12.5s0.75,0.34,0.75,0.75S6.91,14,6.5,14z M9.25,8.5H7.04L7.7,6.51 C7.81,6.21,8.09,6,8.41,6h0.84V8.5z M10.75,8.5V6h0.84c0.32,0,0.61,0.21,0.71,0.51l0.66,1.99H10.75z M13.5,14 c-0.41,0-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75s0.75,0.34,0.75,0.75S13.91,14,13.5,14z" />
              </g>
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
              : 'border-0 shadow-md bg-white hover:bg-darkGray  hover:bg-opacity-5 focus:bg-darkGray focus:bg-opacity-5'
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
