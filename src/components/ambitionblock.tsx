import { Link } from "gatsby"
import * as React from "react"

export default ({header, text}: {header: string, text: string}) => {
    // switch statement die kijkt naar de text voor een icon?
    return(
        <Link to="ambitionpage" state={{ ambition: text }} className="bg-yellow p-4 hover:bg-purple hover:text-white focus:bg-purple focus:text-white">
            <div className="bg-pink rounded-full w-16 h-16 m-auto mt-4"></div>
            <div className="mt-2 justify-center text-center font-semibold">
                <h3 className="mb-1">{header}</h3>
                <p>{text}</p>
            </div>
        </Link>
    )
}