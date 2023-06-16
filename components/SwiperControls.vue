<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex gap-4 items-center justify-end">
		<button @click="swiper.slideNext()" class="mdi mdi-arrow-left-bold text-gray-300 dark:text-gray-300 mdi-24px bg-gray-500/30 hover:bg-gray-500/50 rounded-full w-10 h-10 transition-all"></button>
		<button @click="swiper.slidePrev()" class="mdi mdi-arrow-right-bold text-gray-300 dark:text-gray-300 mdi-24px bg-gray-500/30 hover:bg-gray-500/50 rounded-full w-10 h-10 transition-all"></button>		
	</div>

</template>
