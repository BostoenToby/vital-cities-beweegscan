export interface Personlization {
    to: Mail,
    cc: Mail
}

export interface Mail {
    email: string
}

export interface netlifyError {
    google: boolean,
    changed: boolean
}