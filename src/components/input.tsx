import * as React from 'react'
import ThemeContext from '../context/themecontext'

export default ({ label, callback }: { label: string; callback: any }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="flex max-w-min flex-col">
          <label htmlFor={label}>{label}</label>
          <input
            type="text"
            id={label}
            className={`peer w-48 border-2   px-2 py-1 outline-none  ${
              context.dark
                ? 'border-lightGray bg-dark text-white focus-within:border-lightPurpleDesat hover:border-lightPurpleDesat active:border-lightPurpleDesat'
                : ' border-lightPink text-dark focus-within:border-pink hover:border-pink active:border-pink'
            }`}
            placeholder={label}
            onInput={callback}
          />
          {/* {error.firstNameError && (<p className="text-red font-semibold text-sm">{error.firstNameError}</p>)} */}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
