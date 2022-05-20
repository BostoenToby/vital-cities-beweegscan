import * as React from 'react'

export default ({text, colorBg, colorText}: {text: string, colorBg: string, colorText: string}) => {
    return(
        <div className={`bg-${colorBg} -skew-x-12 max-w-max mb-4`}>
            <p className={`text-${colorText} px-2 skew-x-12 font-bold`}>{text}</p>
        </div>
    )
}