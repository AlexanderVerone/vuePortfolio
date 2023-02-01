import type {
    SocialLink,
    ProfileData,
    ProjectCardInformation,
    TechStackLogo,
    Experience
} from '@/types'

// Tech stack images
import logo_docker from './assets/TechStackIcons/docker.svg'
import logo_css from './assets/TechStackIcons/css.svg'
import logo_html from './assets/TechStackIcons/html.svg'
import logo_nuxt from './assets/TechStackIcons/nuxt.svg'
import logo_tailwind from './assets/TechStackIcons/tailwind.svg'
import logo_typescript from './assets/TechStackIcons/typescript.svg'
import logo_vue from './assets/TechStackIcons/vue.svg'
import logo_gitlab from '../src/assets/TechStackIcons/gitlab.svg'
import logo_javascript from '../src/assets/TechStackIcons/javascript.svg'
import logo_phpstorm from '../src/assets/TechStackIcons/phpstorm.svg'
import logo_vuetify from '../src/assets/TechStackIcons/vuetifyjs.svg'
import logo_postman from './assets/TechStackIcons/postman.svg'

// Social images
import logo_github from '@/assets/SocialIcons/github.svg'
import logo_telegram from '@/assets/SocialIcons/telegram.svg'

//Projects images
import findACoach from '@/assets/ProjectsImages/findACoach.png'
import monsterSlayerGame from '@/assets/ProjectsImages/monsterSlayerGame.png'
import spaceX from '@/assets/ProjectsImages/spaceX.png'
import socialNetwork from '@/assets/ProjectsImages/socialNetwork.png'
import pikadu from '@/assets/ProjectsImages/pikadu.png'
import needForJS from '@/assets/ProjectsImages/needForJs.png'
import moneyExchanger from '@/assets/ProjectsImages/moneyExchanger.png'
import filmPage from '@/assets/ProjectsImages/filmPage.png'
import deliveryFood from '@/assets/ProjectsImages/deliveryFood.png'
import choreDoor from '@/assets/ProjectsImages/choreDoor.png'
import bigTheater from '@/assets/ProjectsImages/bigTheater.png'

// Profile images
import profile_avatar from './assets/PersonalImages/userAvatar.jpg'
import profile_logo from './assets/PersonalImages/logo_verone.svg'

export const profileData: ProfileData = {
    name: 'Alexander Zavialov',
    email: 'alexanderverone@gmail.com',
    avatar: profile_avatar,
    logo: profile_logo,
    socialLinks: {
        github: 'https://github.com/AlexanderVerone?tab=repositories',
        telegram: 'https://telegram.me/AlexanderVerone'
    }
}

export const socialLinks: SocialLink[] = [
    {
        title: 'github',
        logo: logo_github,
        path: profileData.socialLinks.github,
    },
    {
        title: 'telegram',
        logo: logo_telegram,
        path: profileData.socialLinks.telegram
    }
]

export const techStackLogos: TechStackLogo = {
    html: logo_html,
    css: logo_css,
    js: logo_javascript,
    vue: logo_vue,
    nuxt: logo_nuxt,
    typescript: logo_typescript,
    tailwind: logo_tailwind,
    vuetify: logo_vuetify,
    phpstorm: logo_phpstorm,
    postman: logo_postman,
    gitlab: logo_gitlab,
    docker: logo_docker,
};

export const projects: ProjectCardInformation[] = [
    {
        image: findACoach,
        text: {
            title: 'Find a coach',
            description: 'This SPA project is a site for coaches and students in frontend, backend or career advisory',
            stack: 'Vue, HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://findacoach-ac38d.web.app',
            sourceLink: 'https://github.com/AlexanderVerone/Find-A-Coach-Practice-Project'
        }
    },
    {
        image: monsterSlayerGame,
        text: {
            title: 'Monster slayer game',
            description: 'It\'s a simple web game, based on Vue.js',
            stack: 'Vue, HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/monster-slayer-game',
            sourceLink: 'https://github.com/AlexanderVerone/monster-slayer-game'
        }
    },
    {
        image: spaceX,
        text: {
            title: 'SpaceX Falcon Heavy',
            description: 'Copy of SpaceX Falcon Heavy page. This is a simple learning project based on HTML/CSS',
            stack: 'HTML, CSS, AOS, Vidbg.js, Rellax.js'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/spacex',
            sourceLink: 'https://github.com/AlexanderVerone/spacex'
        }
    },
    {
        image: socialNetwork,
        text: {
            title: 'Distance Network',
            description: 'Minimalistic copy of facebook user main page layout, developed like learning project',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/distance-network',
            sourceLink: 'https://github.com/AlexanderVerone/distance-network'
        }
    },
    {
        image: pikadu,
        text: {
            title: 'Pikadu',
            description: 'This is a layout copy of famous russian social network Pikabu',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/Pikadu',
            sourceLink: 'https://github.com/AlexanderVerone/Pikadu'
        }
    },
    {
        image: needForJS,
        text: {
            title: 'Need For JS',
            description: 'Simple racing game, where you are trying to get as much score as you can before colliding with another car in traffic',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/needForJs',
            sourceLink: 'https://github.com/AlexanderVerone/needForJs'
        }
    },
    {
        image: moneyExchanger,
        text: {
            title: 'Money Exchanger',
            description:'Layout for money exchange site',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/moneyExchanger',
            sourceLink: 'https://github.com/AlexanderVerone/moneyExchanger'
        }
    },
    {
        image: filmPage,
        text: {
            title: 'Ghostbusters page',
            description: 'Layout represents simple movie page like pages on imdb or kinopoisk',
            stack: 'HTML, CSS, JS, jQuery, FancyBox, Swiper.js'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/ghostbusters',
            sourceLink: 'https://github.com/AlexanderVerone/ghostbusters'
        }
    },
    {
        image: deliveryFood,
        text: {
            title: 'Delivery Food',
            description: 'Project of minimalistic variation of food delivery service',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/deliveryFood',
            sourceLink: 'https://github.com/AlexanderVerone/deliveryFood'
        }
    },
    {
        image: choreDoor,
        text: {
            title: 'Chore Door',
            description: 'Game, where you need to click closed doors and try not to meet robot behind it till the last door was opened',
            stack: 'HTML, CSS, JS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/chore-door',
            sourceLink: 'https://github.com/AlexanderVerone/chore-door'
        }
    },
    {
        image: bigTheater,
        text: {
            title: 'Big Theater',
            description: 'Copy of Big Theater main page layout',
            stack: 'HTML, CSS'
        },
        links: {
            previewLink: 'https://alexanderverone.github.io/big_theater',
            sourceLink: 'https://github.com/AlexanderVerone/big_theater'
        }
    }
]

export const workExperience: Experience[] = [
    {
        position: 'Vue.js Front-end developer',
        companyName: 'TenderTech LLC',
        companyLocation: 'Moscow',
        employmentType: 'Full Time',
        employmentPeriod: 'Sep 2021 - Now'
    },
]

export const educationExperience: Experience[] = [
    {
        position: 'Front-end developer',
        companyName: 'CodeCademy',
        companyLocation: 'NYC',
        employmentType: 'Full Time',
        employmentPeriod: 'Jul 2019 - Aug 2021'
    }
]

export const aboutMeText: string = 'The desire to become a front-end developer appeared in 2019. My commercial experience started in September 2021. At the moment, I continue to raise my skills by the work tasks and learning new things in my spare time. Interested in building web applications, especially with the latest technologies.'