import * as React from "react"

export default ({label, callback}: {label: string, callback: any}) => {
    return(
        <div className="flex flex-col max-w-min">
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} className="w-48 px-2 py-1 border-2 text-black border-lightPink active:border-pink outline-none focus-within:border-pink hover:border-pink" placeholder={label} onInput={callback}/>
            {/* {error.firstNameError && (<p className="text-red font-semibold text-sm">{error.firstNameError}</p>)} */}
        </div>
    )
}