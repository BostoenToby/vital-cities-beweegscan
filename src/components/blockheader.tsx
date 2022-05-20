import * as React from "react"

export default({title, subTitle}: {title: string, subTitle: string}) => {
    return(
        <>
            <h2 className="text-3xl font-bold mb-4 pt-4">{title}</h2>
            <p className="w-3/5 mb-6 ">{subTitle}</p>
        </>
    )
}

export const BlockHeaderDeco = ({titleDeco, title , subTitle, decoColor}: {titleDeco: string, title: string, subTitle: string, decoColor: string}) => {
    return(
        <>
            <h2 className="text-3xl font-bold mb-4"><span className={`underline decoration-${decoColor}`}>{titleDeco}</span> {title}</h2>
            <p className="w-3/5 mb-6">{subTitle}</p>
        </>
    )
}