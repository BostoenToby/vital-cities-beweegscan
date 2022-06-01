import { ExternalLink } from 'lucide-react'
import * as React from 'react'
import ThemeContext from '../context/themecontext'

export default ({
  title,
  text,
  link,
}: {
  title: string
  text: string
  link: string
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className={`h-auto bg-white p-6 ${
            context.dark ? 'bg-opacity-[0.06]' : ''
          }`}
        >
          <div className={`flex space-x-2 ${context.dark ? 'opacity-90' : ''}`}>
            <a href={link} className="mb-1 text-[17px] font-semibold underline">
              {title}
            </a>
            <ExternalLink />
          </div>
          <p
            className={`line-clamp-4 ${
              context.dark ? 'text-white opacity-75' : 'text-gray'
            }`}
          >
            {text}
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
