<template>
    <section id="home"
        class="-mt-[80px] relative h-screen flex items-center justify-center text-center overflow-hidden pt-16">
        <!-- Background gradient overlay for visual depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20 z-0"></div>
        <!-- Animated background shapes (simple CSS for visual interest) -->
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

        <div class="relative z-10 p-6 max-w-4xl mx-auto bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50"
            data-aos="fade-up" data-aos-duration="1000">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-4 drop-shadow-lg">
                Hi, I'm <span class="text-heading">Nayem Uddin</span>
            </h1>
            <p class=" text-gray-300 mb-8 max-w-2xl mx-auto">
                A passionate Software Developer & Tech Enthusiast crafting robust, scalable, and efficient server-side
                solutions.
                Let's build something amazing together.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6" data-aos="fade-up"
                data-aos-delay="300" data-aos-duration="1000">
                <!-- Primary Button -->
                <router-link to="/projects" href="#projects"
                    class="inline-flex justify-center bg-gradient-to-r from-green-500 to-emerald-600 !text-white font-semibold !py-2.5 !px-6 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out items-center gap-1.5">
                    <Rocket class="w-5 h-5"/> View My Projects
                </router-link>


                <!-- Secondary Button -->
                <router-link to="/contact" href="#contact"
                    class="inline-flex justify-center border-2 border-green-500 text-heading hover:bg-green-500 hover:to-emerald-600 font-semibold hover:!text-white !py-2.5 !px-6 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out items-center gap-1.5">
                    <MailboxIcon/> Get in Touch
                </router-link>
            </div>

        </div>
    </section>
</template>


<script setup>
import { MailboxIcon, Rocket } from 'lucide-vue-next';

</script>