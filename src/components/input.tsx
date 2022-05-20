import * as React from "react"

export default ({label, callback}: {label: string, callback: any}) => {
    return(
        <>
            <label htmlFor={label}>{label}</label>
            <input type="text" id={label} className="w-48 px-2 py-1 border border-lightGray active:border-gray outline-none focus-within:border-gray" placeholder={label} onInput={callback}/>
            {/* {error.firstNameError && (<p className="text-red font-semibold text-sm">{error.firstNameError}</p>)} */}
        </>
    )
}