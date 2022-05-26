import * as React from "react"

export default ({classes, text}: {classes: string, text: string}) => {
    return(
        <div className={`flex skew-x-12 max-w-[275px] items-center justify-center ${classes}`}>
            <p className="desktop:line-clamp-2 px-6 py-3 -skew-x-12">{text}</p>
        </div>
    )
}