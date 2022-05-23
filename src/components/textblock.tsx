import * as React from "react"

export default ({text, bgColor, textColor, bold}: {text: string, bgColor: string, textColor: string, bold: boolean}) => {
    return(
        <div className={`flex bg-${bgColor} skew-x-12 max-w-[275px] items-center justify-center`}>
            <p className={`desktop:line-clamp-2 px-6 py-3 text-${textColor} -skew-x-12 ${bold? 'font-medium': ''}`}>{text}</p>
        </div>
    )
}