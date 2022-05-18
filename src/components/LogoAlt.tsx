import * as React from 'react'
import { SVGProps } from 'react'

export default (props: SVGProps<SVGSVGElement>) => (
  <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 116" {...props}>
    <defs>
      <pattern
        id="k2"
        x={0}
        y={0}
        width={24}
        height={24}
        patternTransform="translate(-30.5 -8.5)"
        patternUnits="userSpaceOnUse"
      >
        <path className="r" d="M0 0h24v24H0z" />
        <path
          className="r"
          d="M7.41 0 0 7.41v3.18L10.59 0H7.41zM13.41 0 0 13.41v3.18L16.59 0h-3.18zM19.41 0 0 19.41v3.18L22.59 0h-3.18zM1.41 0 0 1.41v3.18L4.59 0H1.41zM10.59 24 24 10.59V7.41L7.41 24h3.18zM24 4.59V1.41L1.41 24h3.18L24 4.59zM22.59 24 24 22.59v-3.18L19.41 24h3.18zM16.59 24 24 16.59v-3.18L13.41 24h3.18z"
        />
        <path
          className="q"
          d="M24 24v-1.41L22.59 24H24zM19.41 24 24 19.41v-2.82L16.59 24h2.82zM13.41 24 24 13.41v-2.82L10.59 24h2.82zM7.41 24 24 7.41V4.59L4.59 24h2.82zM24 0h-1.41L0 22.59V24h1.41L24 1.41V0zM16.59 0 0 16.59v2.82L19.41 0h-2.82zM10.59 0 0 10.59v2.82L13.41 0h-2.82zM4.59 0 0 4.59v2.82L7.41 0H4.59zM0 0v1.41L1.41 0H0z"
        />
      </pattern>
      <style>
        {'.p{fill:#f2c123}.q{fill:#492784}.r{fill:none}.t2{fill:url(#k2)}'}
      </style>
    </defs>
    <path
      id="b"
      style={{
        fill: '#fff',
      }}
      d="M164.5 67.5H18.9l-7.51-59h145.59l7.52 59z"
    />
    <path
      id="c"
      style={{
        fill: '#e7358b',
      }}
      d="M187.93 67.5H19.13l-16.24 40h168.8l16.24-40z"
    />
    <g id="d">
      <path className="p" d="m136.5 87.44-14-8.94.06 18 13.94-9.06z" />
      <path className="p" d="m149 87.44-14-8.94.06 18L149 87.44z" />
      <path className="p" d="M148.5 78.5h7v18h-7z" />
    </g>
    <text
      transform="matrix(1.01 0 0 1 35.5 96.16)"
      style={{
        fontFamily: 'Poppins-SemiBold,Poppins',
        fontSize: '28.4px',
        fill: '#fff',
      }}
    >
      <tspan x={0} y={0}>
        {'cities'}
      </tspan>
    </text>
    <g id="e">
      <path id="f" className="q" d="m29.5 22.66 28-.16-15.01 32L29.5 22.66z" />
      <path id="g" className="q" d="M62 22.5h8v32h-8z" />
      <path id="h" className="q" d="M74 23h24v8H74z" />
      <path
        id="i"
        className="q"
        d="m123.41 54.19-28 .16 15.01-32 12.99 31.84z"
      />
      <path id="j" className="q" d="M125.5 22.02h8v32h-8z" />
      <path id="l" className="t2" d="M81.5 30.5h9v24h-9z" />
      <path id="m" className="t2" d="M133 54v-9.5h17.5V54H133z" />
    </g>
  </svg>
)
