import * as React from "react"

export default ({text, bgColor, textColor, boldParts, bold}: {text: string, bgColor: string, textColor: string, boldParts?: string[], bold: boolean}) => {
    const [textR, setTextR] = React.useState<any>(text)
    
    React.useEffect(() => {
        console.log(textR)
        if(boldParts){
            for(let i of boldParts){
                let re = new RegExp(i, "gi")
                let newText = text.replace(re, "<strong>" + i + "</strong>")
                console.log(newText)
                setTextR(newText)
                // setTextR(text.replace(i, "<b className='text-2xl text-purple'>" + re + "</b>"))
            } 
        }
    })
    return(
        <div className={`bg-${bgColor} skew-x-12 max-w-sm`}>
            <p className={`px-6 py-2 line-clamp-2 text-${textColor} -skew-x-12 ${bold? 'font-semibold': ''}`}>{textR}</p>
        </div>
    )
}