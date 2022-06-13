export interface intBron {
    title: string
    link: string
    text: string
}

export interface hoeWaarom {
    ambition: string
    text: string
    animation: string
}

export interface goodPractice {
    title: string
    date: Date
    themes: string[]
    text: string
    extra: string[]
    image: string
    resources: string
}

export interface header {
    title: string
    subtitle: string
    image: string
    tag?: string
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

export interface sectionLandingspage {
    title: string
    text: string
}

export interface ambition {
    ambition: string
    name: string
}

export interface cmsInt {
    header: header
    sectionTitles: ambitionTitle[]
    problem: problem
    hows: hoeWaarom[]
    whys: hoeWaarom[]
    intBron: intBron[]
    goodPracs: goodPractice[]

}