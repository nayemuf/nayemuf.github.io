<script setup lang="ts">
import FooterComponent from './components/footer/FooterComponent.vue';
import HeaderComponent from './components/header/HeaderComponent.vue';

</script>

<template>
    <div class="bg-primary">
        <HeaderComponent />
        <router-view />

        <FooterComponent />
    </div>
</template>
