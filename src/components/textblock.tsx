import * as React from "react"

export default ({classes, text}: {classes: string, text: string}) => {
    return(
        <div className={`flex skew-x-12 max-w-[240px] items-center leading-7 justify-self-center tabletportrait:max-w-[450px] ${classes}`}>
            <p className="px-7 py-5 -skew-x-12 desktop:line-clamp-2">{text}</p>
        </div>
    )
}