import projectImg from '../assets/sc/portfolioSC.png'
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
    }
}

export default projects;