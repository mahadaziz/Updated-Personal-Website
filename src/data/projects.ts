/* 
title: 'Project Title' - The title of the project.
description: 'Project description.' - The description of the project.
image: '/images/projects/project-image.webp' - The path to the project image.
status: {
    text: 'Status' - The status of the project. (e.g. View Source, Coming Soon, Private Repository)
    link: 'Link' - The link to the project status. (e.g. GitHub Repository, Website)
    icon: 'icon-class' - The icon for the status. https://icon-sets.iconify.design/tabler/?query=mail&prefixes=tabler
}
note: 'Note' - A note for the project. (e.g. In development, Coming Soon)
isFeatured: true - Show the project in the featured section.
isFullWidth: true - Make the project image full width.
*/

export const projects = [
    {
        title: 'Personal Website',
        description: 'My personal website built with Next.js, TypeScript, shadcn/ui, and Tailwind CSS.',
        image: '/images/projects/personal-website.PNG',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/Updated-Personal-Website',
            icon: 'icon-[tabler--arrow-right]',
        },
        note: 'In development',
        isFeatured: true,
        isFullWidth: true,
    },
    {
        title: 'JourneyAI',
        description:
            'A full-stack data-driven AI writing assistant for journalists and storywriters that can analyse and visualize large amounts of data',
        image: '/images/projects/JourneyAI.PNG',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/JourneyAI',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: '2048',
        description:
            'Used a Model View Controller design pattern in Java to create a text-based version of the modile game 2048.',
        image: '/images/projects/2048-game-copy.png',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/2048',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },

    {
        title: 'OpenGL Computer Graphic Projects',
        description:
            'Created various computer graphic projects using OpenGL and glad to simulate orbit of planets around the sun in our solar system and the lighting effects of a disco ball.',
        image: '/images/projects/solar-system.jfif',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/OpenGL-Projects',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: 'Operating System C Projects',
        description:
            'Created various C program related to working with operatins systems such as making an implementation of various disk scheduling algorithms. It reads disk access requests from a binary file (request.bin) and schedules them using different algorithms to determine the total head movement required to service all requests.',
        image: '/images/projects/operating-system.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/C-Projects',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: 'Cinema Database',
        description:
            'Created a cinema database in C# that is used for running a cinema. Involves buying tickets for various movies that are playing in a movie theater.',
        image: '/images/projects/cinema.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/CinemaDatabase',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: '2D Motion Simulator',
        description:
            'Created a simulation of a shape that is moving through 2D space. Displays a graph for distance, velocity, and accelaration. The created simulations are similar to the ones used for video game physics and animations.',
        image: '/images/projects/projectile-motion-copy.png',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/2D-Motion-Simulator',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: true,
    },
    {
        title: 'Insurance Database',
        description:
            'Created an insurance database in Java that is used for managing car and home insurances. Involves contracts, plans, and management for multiple people.',
        image: '/images/projects/insurance-data.png',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/Insurance-Database',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: false,
    },
    {
        title: 'Course Database',
        description:
            'Created a course database in Java that is used for course enrollment. Involves multiple courses and allows enrollment for multiple people.',
        image: '/images/projects/course-data.jpg',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/Course-Database',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: false,
    },
    {
        title: 'Python Algorithms',
        description:
            'Created multiple software sorting, searching and tree algorithms such as quicksort, BFS, DFS, Red-Black Trees and then ran numerous tests to measure their runtimes. Added optimizations to the sorting algorithms to improve their performances. Then created modified functions such as printing a path from one node to every other node, or printing the path between two nodes. For the tree algorithms, created other algorithms that check if a graph has cycles or if it is connected.',
        image: '/images/projects/algorithm.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/Python-Algorithms',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: false,
    },
    {
        title: 'Text Adventure Game',
        description:
            'Created a text-based adventure game in Java where the user gets to play through three games. The three games are a typing test, maze, and a mini game similar to battleship.',
        image: '/images/projects/text-adventure-game.png',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/Text-Adventure-Game',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: false,
    },
    {
        title: 'Social Media Clone',
        description:
            'Created a social media clone with full functional features similar to other social media like Facebook. Created and fully developed both the front end HTML, JavaScript, and CSS, as well as the backend database created using Django.',
        image: '/images/projects/social-media.webp',
        status: {
            text: 'View Source',
            link: 'https://github.com/mahadaziz/CS1XA3/tree/master/Project03',
            icon: 'icon-[tabler--arrow-right]',
        },
        isFeatured: false,
    },
]
