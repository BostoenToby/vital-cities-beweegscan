import { Link } from "gatsby"
import * as React from "react"

export default ({text}: {text: string}) => {
    // switch statement die kijkt naar de text voor een icon?
    return(
        <Link to="ambitionpage" className="bg-yellow p-4">
            <div className="bg-pink rounded-full w-16 h-16 m-auto mt-4"></div>
            <p className="mt-2 justify-center text-center font-semibold">{text}</p>
        </Link>
    )
}