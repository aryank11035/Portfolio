import projectImg from '../assets/portfolio.png'
import wordleImg from '../assets/wordleSC.png'
import chefkateImg from '../assets/chefKateSC.png'
import todolistImg from '../assets/todolistSC.png'
const projects = {
    portfolio : {
        number: '01',
        title : 'My Portfolio',
        img : projectImg,
        desc : 'This project is a modern reconstruction of one of my earliest attempts at converting a web design into a fully functional website. The goal is to improve the original structure, apply cleaner code practices, and implement a more responsive and maintainable layout using current web development standards.',
        stacks : {
            html : <i class="fa-brands fa-html5 md:text-2xl text-lg"></i>,
            css : <i class="fa-brands fa-js md:text-2xl"></i>,
            tailwind : <i class="ri-tailwind-css-fill md:text-2xl text-lg"></i>,
            js :  <i class="fa-brands fa-css3-alt md:text-2xl text-lg"></i>,
        },
        links : {
            site : '',
            code : ''
        } 
    },

    wordle: {
        number: '02',
        title: 'Wordle',
        img: wordleImg,
        desc: 'This project is a custom-built version of the popular Wordle game, designed to replicate the engaging word-guessing mechanics while adding my own styling and features. The goal was to enhance my JavaScript logic skills, practice DOM manipulation, and create an interactive, responsive game that works seamlessly across devices.',
        stacks: {
            html: <i class="fa-brands fa-html5 md:text-2xl text-lg"></i>,
            css: <i class="fa-brands fa-css3-alt md:text-2xl text-lg"></i>,
            tailwind : <i class="ri-tailwind-css-fill md:text-2xl text-lg"></i>,
            js: <i class="fa-brands fa-js md:text-2xl text-lg"></i>,
            
        },
        links: {
            site: '',
            code: ''
        }
    },
    
    chefKate: {
        number : '03',
        title : 'Chef Katé',
        img : chefkateImg,
        desc : 'An AI-powered tool that instantly suggests personalized recipes based on the ingredients you have. Designed to save time, reduce food waste, and inspire you with creative, step-by-step dishes for any craving.',
        stacks : {
            html: <i class="fa-brands fa-html5 md:text-2xl text-lg"></i>,
            tailwind : <i class="ri-tailwind-css-fill md:text-2xl text-lg"></i>,
            js: <i class="fa-brands fa-js md:text-2xl text-lg"></i>,
            react : <i className="fa-brands fa-react md:text-2xl text-lg"></i>,
            api: <p class='md:text-2xl text-lg font-space-grotesk font-semibold'>API</p>
        },
        links: {
            site: '',
            code: ''
        }
    },
    todolist: {
        number: '04',
        title: 'To-Do List',
        img: todolistImg, 
        desc: 'A sleek and responsive To-Do List application featuring light and dark mode themes. Designed to help users organize tasks with a minimal interface, smooth animations, and theme persistence using local storage. Built to improve my skills in JavaScript, DOM manipulation, and UI design.',
        stacks: {
            html: <i class="fa-brands fa-html5 md:text-2xl text-lg"></i>,
            css: <i class="fa-brands fa-css3-alt md:text-2xl text-lg"></i>,
            js: <i class="fa-brands fa-js md:text-2xl text-lg"></i>,
            
        },
        links: {
            site: '',
            code: ''
        }
    }


    
}

export default projects;