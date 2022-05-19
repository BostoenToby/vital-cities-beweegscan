import { ExternalLink } from "lucide-react"
import * as React from "react"

export default ({title, text}: {title: string, text: string}) => {
    return(
        <div className="h-auto w-1/5 bg-white p-4">
            <div className="flex space-x-2">
                <h3 className="underline font-semibold text-[17px] mb-1">{title}</h3>
                <ExternalLink />
            </div>
            <p className="text-gray">{text}</p>
        </div>
    )
}