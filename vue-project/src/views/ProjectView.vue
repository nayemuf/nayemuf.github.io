<script setup>
import { ExternalLink, GithubIcon } from 'lucide-vue-next';


const completedProjects = [
    {
        title: 'PSW Sales AI – Conversational Sales Bot',
        description:
            'An intelligent AI chatbot assistant trained on PSW product catalogs, datasheets, and documentation. Built with OpenAI LLMs, Pinecone vector search, and Flask API to provide accurate, context-aware responses for customers and sales support.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=PSW+Sales+AI',
        tech: ['Python', 'Flask', 'OpenAI', 'Pinecone', 'LangChain'],
        live: '#',
        github: '#',
        delay: 100,
    },
    {
        title: 'Ticketi - Ticket Management System',
        description:
            'A ticket management system designed to streamline customer support and issue tracking. Built with Angular for a dynamic frontend and Laravel for the API backend, optimized for scalability.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Ticketi+System',
        tech: ['Angular', 'Laravel (API)', 'MySQL', 'GitHub'],
        live: '#',
        github: 'https://github.com/nayemuf/Ticketi',
        delay: 100,
    },
    {
        title: 'ezy-dash - Dynamic Dashboard',
        description:
            'A dynamic dashboard application for visualizing and managing data in real time. Built with Laravel for backend operations and Vue.js for an interactive frontend.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=ezy-dash+Dashboard',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
        live: '#',
        github: 'https://github.com/nayemuf/ezy-dash',
        delay: 200,
    },
    {
        title: 'BLOGGY - Blogging Platform',
        description:
            'A fully PHP- and MySQL-powered blogging platform for content creators, enabling users to create, edit, and publish blog posts with a user-friendly interface.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=BLOGGY+Platform',
        tech: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
        live: '#',
        github: 'https://github.com/nayemuf/BLOGGY',
        delay: 300,
    },
    {
        title: 'DocShare - Document Sharing Platform',
        description:
            'A web-based document-sharing platform where users can upload, share, and manage files securely.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=DocShare',
        tech: ['PHP', 'Laravel', 'Blade', 'MySQL'],
        live: '#',
        github: 'https://github.com/nayemuf/DocShare',
        delay: 400,
    },
    {
        title: 'Product Management System (Java)',
        description:
            'Created a RESTful CRUD API for product management using Spring Boot, implementing standard operations and using Spring Data JPA with MySQL.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Product+Management+API',
        tech: ['Java', 'Spring Boot', 'RESTful API', 'MySQL'],
        live: '#',
        github: '#',
        delay: 500,
    },
    {
        title: 'Human Resource Management',
        description:
            'An engineering and management system for payroll, attendance, and leave management modules, developed as part of Gigabits\' in-house application suite.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=HRM+System',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MSSQL'],
        live: '#',
        github: '#',
        delay: 600,
    },
    {
        title: 'e-Health Care System',
        description:
            'An engineering and management system for appointment & schedule management, prescription automation, and payment management modules.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=e-Health+Care',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MSSQL'],
        live: '#',
        github: '#',
        delay: 700,
    },
    {
        title: 'Schedule Automation Script',
        description:
            'An engineering and management system for appointment management, schedule automation, and payment management modules.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Schedule+Automation',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MSSQL'],
        live: '#',
        github: '#',
        delay: 800,
    },
    {
        title: 'e-Doc System',
        description:
            'A collaboration system for sharing documents securely.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=e-Doc+System',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MSSQL', 'Amazon S3'],
        live: '#',
        github: '#',
        delay: 900,
    },
    {
        title: 'Support System',
        description:
            'A prominent part of a collaboration system for sharing documents and providing support.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Support+System',
        tech: ['PHP', 'Laravel', 'Vue.js', 'MSSQL', 'Amazon S3'],
        live: '#',
        github: '#',
        delay: 1000,
    },
    {
        title: 'e-Learning Platform',
        description:
            'A learning management system built based on group learning principles.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=e-Learning+Platform',
        tech: ['PHP', 'Laravel', 'JavaScript', 'Ajax', 'MSSQL'],
        live: '#',
        github: '#',
        delay: 1100,
    },
    {
        title: 'Shopping Cart System (Java)',
        description:
            'A dynamic web-based shopping cart application using Java Servlets and JSP, with MVC architecture and session management.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Shopping+Cart',
        tech: ['Java', 'JSP', 'Servlets', 'MySQL'],
        live: '#',
        github: '#',
        delay: 1200,
    },
    {
        title: 'Finance Management System (JavaFX)',
        description:
            'A JavaFX desktop application for managing university credit add/drop and student fees, with interactive UI and OOP principles.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=Finance+Manager',
        tech: ['JavaFX', 'Java', 'OOP'],
        live: '#',
        github: '#',
        delay: 1300,
    },
    {
        title: 'IELTS Preparation App',
        description:
            'An IELTS preparation application built with Laravel, Vue, and integrated with OpenAI for enhanced functionality.',
        image: 'https://placehold.co/600x400/374151/ffffff?text=IELTS+App',
        tech: ['Laravel', 'Vue.js', 'OpenAI'],
        live: '#',
        github: '#',
        delay: 1400,
    },
]
</script>

<template>
    <section id="projects" class="-mt-[120px] pt-[150px] py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div class="absolute inset-0 z-0">
            <div
                class="absolute w-48 h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-1/4 left-1/4">
            </div>
            <div
                class="absolute w-48 h-48 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-1/2 right-1/4">
            </div>
            <div
                class="absolute w-48 h-48 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/2">
            </div>
        </div>
        <div class="container mx-auto max-w-6xl">
            <h2 class="text-4xl font-bold text-center text-white mb-12 relative pb-4" data-aos="fade-up"
                data-aos-duration="1000">
                My Projects
                <span
                    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
            </h2>


            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="(project, index) in completedProjects" :key="index"
                    class="bg-gray-800 relative rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-gray-700 group"
                    data-aos="fade-up" data-aos-duration="1000" :data-aos-delay="project.delay">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />

                    <div
                        class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    </div>

                    <div class="p-6 relative z-20">
                        <h3 class="text-2xl font-semibold text-white mb-3">{{ project.title }}</h3>
                        <p class="text-gray-400 mb-4">{{ project.description }}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="(tech, tIndex) in project.tech" :key="tIndex"
                                class="bg-green-800 text-green-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                {{ tech }}
                            </span>
                        </div>
                        <div class="flex space-x-4">
                            <a v-if="project.live" :href="project.live" target="_blank"
                                class="text-green-400 hover:text-green-300 font-medium flex items-center space-x-1">
                                <span>Live Demo</span>
                                <ExternalLink class="text-heading size-4" />
                            </a>
                            <a v-if="project.github" :href="project.github" target="_blank"
                                class="text-gray-400 hover:text-gray-300 font-medium flex items-center space-x-1">
                                <span>GitHub</span>
                                <GithubIcon class="text-heading size-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>




            <div class="text-center mt-12">
                <p class="text-gray-400 text-lg">
                    This is just a selection of my projects. For a comprehensive list, please visit my <a
                        href="https://github.com/nayemuf" target="_blank" class="text-green-400 hover:underline">GitHub
                        profile</a>.
                </p>
            </div>
        </div>
    </section>
</template>
