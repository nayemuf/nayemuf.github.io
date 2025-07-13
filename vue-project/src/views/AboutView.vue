<template>
    <section class=" -mt-[120px] pt-[150px] py-20 px-4 sm:px-6 lg:px-8 bg-primary" data-aos="fade-up"
        data-aos-duration="1000">
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
            <h2 class="text-4xl font-bold text-center text-white mb-12 relative pb-4">
                About Me
                <span
                    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
            </h2>

            <div class="flex flex-col lg:flex-row items-start lg:space-x-12">
                <!-- Profile Image / Placeholder -->
                <div class="flex-shrink-0 mb-8 lg:mb-0 lg:w-1/3" data-aos="fade-right" data-aos-duration="1000">
                    <img :src="Logo" alt="Nayem Uddin Profile Photo"
                        class="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full object-cover shadow-2xl border-4 border-green-500 transition-transform duration-300 hover:scale-105">
                </div>

                <!-- About Text -->
                <div class="lg:w-2/3 text-gray-300 leading-relaxed" data-aos="fade-left" data-aos-duration="1000"
                    data-aos-delay="200">
                    <p class="mb-6">
                        Hello! I'm <span class="text-green-400 font-semibold">Nayem Uddin</span>, a dedicated Software
                        Developer and Tech Enthusiast based in Dhaka, Bangladesh.
                        I have professional experience as a Software Developer at Gigabit Ltd (January 2024-Ongoing)
                        where I collaborate with backend and frontend teams,
                        meet clients, and participate in the full development lifecycle from planning to deployment. I
                        also worked as a Laravel Developer at Wetopia Global (October 2023 - December 2023), focusing on
                        full-stack web development with Laravel and Vue.js and Three-Tier Architecture.
                    </p>
                    <p class="mb-6">
                        My journey in software development began with a fascination for how systems work behind the
                        scenes, leading me to
                        specialize in creating efficient and scalable solutions. I thrive on solving complex problems
                        and am passionate about writing clean, maintainable code.
                        My expertise lies in building high-performance APIs, managing databases, and integrating various
                        services to create seamless digital experiences. I am always eager to learn new technologies
                        and improve my craft.
                    </p>
                    <p>
                        I hold a B.Sc. in Computer Science & Engineering from City University, Dhaka (March
                        2019-December 2023).
                        I actively participate in competitive programming, having solved over 500 problems on various
                        online judges like HackerRank and LeetCode, and participated in over 90 individual programming
                        contests.
                    </p>
                </div>
            </div>

            <div
                class="my-10 px-4 py-8 md:py-12 bg-gradient-to-b text-white rounded-2xl shadow-2xl">
                <h3 class="text-3xl font-extrabold text-center mb-10 text-green-400 tracking-tight animate-pulse">🚀 My
                    Core Skills</h3>

                <!-- Skills Grid -->
                <!-- <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <span v-for="(skill, index) in skills" :key="index" class="animated-skill" :data-aos="'zoom-in'"
                        :data-aos-delay="index * 50">
                        {{ skill }}
                    </span>
                </div> -->

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <div v-for="(skill, index) in skills" :key="index" class="relative" :data-aos="'zoom-in'"
                        :data-aos-delay="index * 50">
                        <!-- Overlay for non-active items -->
                        <div v-if="index !== activeIndex"
                            class="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 rounded-full transition-opacity duration-300">
                        </div>
    
                        <!-- Skill Badge -->
                        <span :class="['skill-badge', index === activeIndex ? 'active' : '']">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import Logo from '../assets/nayemuf.png'

const skills = [
    // AI / Programming
    'Custom AI Agent Development',
    'Python',
    'Java',
    'PHP',
    'JavaScript',
    'SQL',

    // Frameworks
    'Laravel',
    'Flask',
    'Vue.js',
    'Inertia.js',

    // Databases
    'MySQL',
    'MSSQL',
    'SQLite',

    // DevOps / Tools
    'GitHub Actions (CI/CD)',
    'Object-Oriented Programming',
    'Database Management Systems',
    'REST APIs',
    'Git',
    'GitHub',
    'GitLab',

    // Editors / IDEs
    'Visual Studio Code',
    'Sublime Text',
    'IntelliJ IDEA',
    'Termius',

    // Misc
    'Debugging',
    'Windows',
    'macOS',
    'Linux (Bash, Nginx, Apache2)'
]

const activeIndex = ref(0)
let interval = null

onMounted(() => {
    interval = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % skills.length
    }, 1300) // 1.3 seconds per rotation
})

onBeforeUnmount(() => {
    clearInterval(interval)
})



</script>

<style scoped></style>