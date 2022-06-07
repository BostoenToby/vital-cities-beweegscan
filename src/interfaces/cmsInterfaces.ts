export interface intBron {
    title: string
    link: string
    text: string
}

export interface HoeWaarom {
    ambition: string
    text: string
}

export interface goodPractice {
    title: string
    date: Date
    themes: string[]
    text: string
    extra: string[]
    image: string,
    resources: string
}

export interface header {
    title: string
    subtitle: string
    image: string
    tag: string
}

export interface problem {
    text: string
    bold: string
}

export interface ambitionTitle {
    title: string
    subtitle: string
    section: string
    ambitions: string[]
}