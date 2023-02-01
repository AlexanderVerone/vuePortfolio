export interface ProjectCardText {
    title: string,
    description: string,
    stack: string
}

export interface ProjectCardLinks {
    previewLink: string,
    sourceLink: string
}

export interface ProjectCardInformation {
    image: string,
    text: ProjectCardText
    links: ProjectCardLinks
}

export interface ProfileData {
    name: string
    email: string
    avatar: string
    logo: string
    socialLinks: {
        github: string
        telegram: string
    }
}

export interface SocialLink {
    title: string
    logo: string
    path: string
}

export interface TechStackLogo {
    [key: string]: string
}

export interface Experience {
    position: string
    companyName: string
    companyLocation: string
    employmentType: string
    employmentPeriod: string
}