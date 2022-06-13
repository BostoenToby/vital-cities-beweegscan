import * as React from 'react'

export default ({classes, text}: {classes: string, text: string}) => {
    return(
        <div className={`-skew-x-12 max-w-max mb-4 ${classes}`}>
            <p className="px-2 skew-x-12 font-bold">{text}</p>
        </div>
    )
}