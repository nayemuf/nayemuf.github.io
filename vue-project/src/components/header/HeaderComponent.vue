<template>
 <!-- Header Section - Navigation Bar -->
    <header class="backdrop-blur-sm  sticky w-full z-50 py-4 top-0 shadow-green-600 rounded w-primary">
        <nav class="mx-auto px-4 flex justify-between items-center">
            <!-- Logo/Name -->
            <router-link to="/" class="text-4xl font-bold text-purple-500 hover:text-purple-400 transition-colors duration-300 rounded-lg p-2">
                nayemuf
            </router-link>

            <!-- Desktop Navigation Links -->
            <div class="hidden md:flex space-x-8">
                <router-link to="/" class="nav-link  transition-colors duration-300 font-medium !py-2 !px-3 rounded-lg hover:bg-gray-800">Home</router-link>
                <router-link to="/about" class="nav-link  transition-colors duration-300 font-medium !py-2 !px-3 rounded-lg hover:bg-gray-800">About</router-link>
                <router-link to="/projects" class="nav-link  transition-colors duration-300 font-medium !py-2 !px-3 rounded-lg hover:bg-gray-800">Projects</router-link>
                <router-link to="/services" class="nav-link  transition-colors duration-300 font-medium !py-2 !px-3 rounded-lg hover:bg-gray-800">Services</router-link>
                <router-link to="/contact" class="nav-link  transition-colors duration-300 font-medium !py-2 !px-3 rounded-lg hover:bg-gray-800">Contact</router-link>
            </div>

            <!-- Mobile Menu Button (Hamburger) -->
            <div class="md:hidden">
                <button class="" @click="toggleMobileMenu">
                    <MenuIcon class="w-6 h-10 text-heading" />
                </button>
            </div>
        </nav>

        <!-- Mobile Menu (Hidden by default) -->
        <div v-if="showMobileMenu" class="bg-transparent bg-opacity-90 py-2 sm:hidden">
            <router-link to="/" class="nav-link block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 rounded-md mx-2">Home</router-link>
            <router-link to="/about" class="nav-link block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 rounded-md mx-2">About</router-link>
            <router-link to="/projects" class="nav-link block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 rounded-md mx-2">Projects</router-link>
            <router-link to="/services" class="nav-link block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 rounded-md mx-2">Services</router-link>
            <router-link to="/contact" class="nav-link block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-purple-400 transition-colors duration-200 rounded-md mx-2">Contact</router-link>
        </div>
    </header>

</template>

<script setup>
import { AlignJustifyIcon, MenuIcon } from 'lucide-vue-next';
import { ref } from 'vue'

const isOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const showMobileMenu = ref(false);


const toggleMobileMenu = () => {
    showMobileMenu.value = !showMobileMenu.value
}
</script>

<style scoped>
/* Optional: sticky header shadow effect on scroll (already applied with Tailwind) */
</style>
