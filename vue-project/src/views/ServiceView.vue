<script setup lang="ts">
import {
  BoxesIcon,
  CloudIcon,
  Code2Icon,
  CornerRightUpIcon,
  DatabaseIcon,
  ShieldCheckIcon,
  WebhookIcon,
} from "lucide-vue-next";
</script>

<template>
  <section
    class="py-20 px-6 sm:px-12 lg:px-20 bg-primary -mt-[120px] pt-[150px]"
    aria-label="Services offered"
  >
    <div class="container mx-auto max-w-7xl">
      <h2
        class="text-4xl font-extrabold text-center text-white mb-16 relative pb-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        What I Offer
        <span
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-green-500 rounded-full shadow-lg"
        ></span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <!-- Service Card Template -->
        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <!-- Replace SVG icon per service -->
            <WebhookIcon class="text-heading size-6" />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            API Development
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Designing and building robust, scalable, and secure RESTful and
            GraphQL APIs for various applications.
          </p>
        </article>
        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <!-- Replace SVG icon per service -->
            <Code2Icon class="text-heading size-6" />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            CI/CD Pipeline
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Implementing automated CI/CD pipelines to ensure seamless, reliable, and rapid software delivery with minimal downtime
          </p>
        </article>

        <!-- Repeat for other services with updated icons, delays, and content -->

        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <DatabaseIcon class="size-6" />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            Database Management
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Expertise in SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis)
            database design, optimization, and management.
          </p>
        </article>

        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <CloudIcon class="size-8" />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            Cloud Solutions
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Deployment and management of backend services on cloud platforms
            like AWS, Azure, and Google Cloud.
          </p>
        </article>

        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <BoxesIcon />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            Full Stack Development
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Building end-to-end web applications with seamless front-end and
            robust back-end integrations for scalable user experiences.
          </p>
        </article>

        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <CornerRightUpIcon />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            Performance Optimization
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Identifying bottlenecks and optimizing backend systems for maximum
            speed and efficiency.
          </p>
        </article>

        <article
          role="article"
          tabindex="0"
          class="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700 rounded-3xl shadow-lg p-10 text-center cursor-pointer transform transition-transform duration-300 will-change-transform hover:scale-[1.06] hover:shadow-green-600 focus:outline-none focus:ring-4 focus:ring-green-500"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          <div
            class="text-green-500 mb-8 mx-auto inline-flex justify-center items-center rounded-full bg-green-900/20 p-6 shadow-lg"
          >
            <ShieldCheckIcon />
          </div>

          <h3
            class="text-3xl font-semibold text-white mb-5 transition-colors group-hover:text-green-400"
          >
            Security & Authentication
          </h3>
          <p class="text-gray-300 leading-relaxed">
            Implementing robust security measures and authentication protocols
            (OAuth, JWT) to protect data.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
