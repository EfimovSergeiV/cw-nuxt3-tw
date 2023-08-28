<script setup lang="ts">
	const swiper = useSwiper()
</script>

<template>
	<div class="flex gap-4 items-center justify-end">
		<button @click="swiper.slideNext()" class="mdi mdi-arrow-left-bold text-gray-100 mdi-24px bg-blue-500/70 hover:bg-blue-500 rounded-full w-10 h-10 duration-500 transition-all"></button>
		<button @click="swiper.slidePrev()" class="mdi mdi-arrow-right-bold text-gray-100 mdi-24px bg-blue-500/70 hover:bg-blue-500 rounded-full w-10 h-10 duration-500 transition-all"></button>		
	</div>

</template>
