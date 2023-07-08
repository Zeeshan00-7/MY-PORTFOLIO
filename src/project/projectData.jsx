import project1_1 from '../assets/project1_1.png'
import project2_1 from '../assets/project2_1.png'
import project3_1 from '../assets/project3_1.png'
import project4_1 from '../assets/project4_1.jpg'

const projectData = [
    {
        id: 1,
        title: 'kanban board',
        description: 'A Kanban Board created with React with drag and drop functionality.Along with add, delete card and list.Features: Home page with add card and add list feature, Draggable and Droppable, Card details with activity log.',
        image: project2_1,
        github: "https://github.com/sarfrazali78/Kanban.git",
        live: "https://kanban-project-xg8i.vercel.app//",
        tags: ['React', 'Javascript', 'HTML', 'CSS', 'React-beautiful-dnd', 'Material-UI', 'uuid', 'Redux-toolkit']
    },
    {
        id: 2,
        title: 'Twitter Clone',
        description:'A twitter clone is built in react with login and registration features, protected routing, and appropriate form validation.Features : Sign-up,Sign-in,Add, delete tweets, Feed posts like And unlike feature.Areas Of Responsibility :-Home Page, Feed section,Add tweet ,Sign-in and Sign-up page.',
        image: project1_1,
        github: "https://github.com/sarfrazali78/Twitter.git",
        live: "http://twitter-inky-three.vercel.app/",

        tags: ['React', 'Javascript', 'CSS', 'Material-UI', 'Local-storage', ]
    },
     
    {
        id: 3,
        title: 'Google Docx',
        description: 'A Google Docx created with React.js with multiple pages with login register functionality alongwith proper validation.Features:- Bold, Inline, Right, Left, Up, Down',
        image: project3_1,
        github: "https://github.com/sarfrazali78/Google-Docx.git",
        live: "http://google-docx.vercel.app///",

        tags: ['React', 'Javascript', 'CSS', 'Material-UI', 'Local-storage', ]
    },

    

    {
        id: 4,
        title: 'Gym Website',
        description: 'A Gym website created with React.js with multiple pages .',
        image: project4_1,
        github: "https://github.com/sarfrazali78/Gym-website.git",
        live: "http://gym-website-zeta.vercel.app///",

        tags: ['React', 'Javascript', 'CSS', 'Material-UI', 'Local-storage', ]
    },
]

export default projectData
