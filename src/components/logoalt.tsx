import * as React from 'react'
import { SVGProps } from 'react'

export default (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="a"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 251 133"
    {...props}
  >
    <defs>
      <pattern
        id="k2"
        x={0}
        y={0}
        width={24}
        height={24}
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
      d="M195 76H49.4l-7.51-59h145.59L195 76z"
    />
    <path
      id="c"
      style={{
        fill: '#e7358b',
      }}
      d="M218.43 76H49.63l-16.24 40h168.8l16.24-40z"
    />
    <g id="d">
      <path className="p" d="M167 95.94 153 87l.06 18L167 95.94z" />
      <path className="p" d="m179.5 95.94-14-8.94.06 18 13.94-9.06z" />
      <path className="p" d="M179 87h7v18h-7z" />
    </g>
    <text
      transform="matrix(1.01 0 0 1 66 104.66)"
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
      <path id="f" className="q" d="M60 31.16 88 31 72.99 63 60 31.16z" />
      <path id="g" className="q" d="M92.5 31h8v32h-8z" />
      <path id="h" className="q" d="M104.5 31.5h24v8h-24z" />
      <path
        id="i"
        className="q"
        d="m153.91 62.69-28 .16 15.01-32 12.99 31.84z"
      />
      <path id="j" className="q" d="M156 30.52h8v32h-8z" />
      <path id="l" className="t2" d="M112 39h9v24h-9z" />
      <path id="m" className="t2" d="M163.5 62.5V53H181v9.5h-17.5z" />
    </g>
  </svg>
)
