<script setup lang="ts">
import { GithubIcon, LinkedinIcon, TwitterIcon, XCircleIcon } from 'lucide-vue-next';

import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const status = ref(''); // To show status messages
const showPopup = ref(false)

const sendMail = async () => {
    status.value = 'sending';

    const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        _replyto: 'nayem110899@gmail.com',
        _subject: "New Portfolio Inquiry from your portfolio"
    };

    try {
        const response = await fetch('https://formspree.io/f/mqabvlvn', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showPopup.value  = true;
            status.value = 'Message sent successfully!';
            // Clear the form fields
            name.value = '';
            email.value = '';
            message.value = '';
        } else {
            status.value = 'Failed to send message.';
        }
    } catch (error) {
        status.value = 'An error occurred. Please try again.';
    }
    finally{
        setTimeout(() => {
            showPopup.value = false
        }, 2500);
    }
};
</script>



<template>
    <section id="contact" class="relative -mt-[120px] pt-[150px] py-20 px-4 sm:px-6 lg:px-8" data-aos="fade-up"
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
        <div class="sticky container mx-auto max-w-xl z-50">
            <h2 class="text-3xl font-semibold text-white text-center mb-10 relative pb-3 tracking-wide">
                Get in Touch
                <span
                    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-600 rounded-full"></span>
            </h2>

            <div class="bg-transparent shadow-green-600 shadow-xs rounded-lg border border-green-700 p-8"
                data-aos="fade-up" data-aos-delay="200">
                <form id="contact-form" action="#" method="POST" class="space-y-6" @submit.prevent="sendMail">
                    <input type="text" id="name" name="name" required placeholder="Your Name" v-model="name"
                        autocomplete="off"
                        class="w-full px-4 py-2 rounded-md  border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />

                    <input type="email" id="email" name="email" required placeholder="your.email@example.com"
                        autocomplete="off" v-model="email"
                        class="w-full px-4 py-2 rounded-md  border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent" />

                    <textarea id="message" name="message" rows="5" required
                        placeholder="Tell me about your project or inquiry..." v-model="message"
                        class="w-full px-4 py-2 rounded-md  border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent resize-none" />

                    <button type="submit"
                        class="bg-gradient-to-r from-green-500 to-emerald-600 w-full  cursor-pointer  text-white font-semibold py-3 rounded-md transition duration-300">
                        Send Message
                    </button>
                </form>

                <div class="mt-8 text-center text-gray-400 text-sm">
                    <p>Or find me on social media:</p>
                    <div class="flex justify-center space-x-6 mt-3">
                        <a href="https://www.linkedin.com/in/nayemuf" target="_blank" aria-label="LinkedIn"
                            class="hover:text-green-500 cursor-pointer transition">
                            <!-- LinkedIn SVG -->
                            <LinkedinIcon />
                        </a>
                        <a href="https://github.com/nayemuf" target="_blank" aria-label="GitHub"
                            class="hover:text-green-500 cursor-pointer transition">
                            <!-- GitHub SVG -->
                            <GithubIcon />
                        </a>
                        <a href="https://x.com/nayemuf" target="_blank" aria-label="Twitter"
                            class="cursor-pointer hover:text-green-500 transition">
                            <!-- Twitter SVG -->
                            <TwitterIcon />
                        </a>
                    </div>
                    <!-- <p class="mt-5">
                        You can also reach me at: <a href="tel:+8801743372044"
                            class="text-green-600 hover:underline font-medium">+880 1743 372044</a>
                    </p> -->
                </div>
            </div>
        </div>
    </section>
    <div class="fixed inset-0 z-50" v-if="showPopup">
        <!-- Background overlay: transparent black -->
        <div
            class="absolute bg-transparent border border-[#00bd7e] bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-md shadow-lg max-w-md w-full p-2.5 text-white  right-1 top-25">
            <p class="">
                Thanks for your query. I'll reply soon
            </p>
        </div>
    </div>

</template>
