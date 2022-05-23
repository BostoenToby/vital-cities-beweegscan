import { ExternalLink } from "lucide-react"
import * as React from "react"

export default ({title, text, link}: {title: string, text: string, link: string}) => {
    return(
        <div className="h-auto bg-white p-6">
            <div className="flex space-x-2">
                <a href={link} className="underline font-semibold text-[17px] mb-1">{title}</a>
                <ExternalLink />
            </div>
            <p className="text-gray">{text}</p>
        </div>
    )
}