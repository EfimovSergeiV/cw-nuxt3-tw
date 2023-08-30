
<template>
  <NuxtLayout>
    <!-- <NuxtLoadingIndicator :color="'repeating-linear-gradient(to right,#dcc600 0%,#0095ff 50%,#0000ff 100%)'" :height="1" /> -->
    <NuxtLoadingIndicator :color="'repeating-linear-gradient(to right,#38bdf8 0% ,#0369a1 100%)'" :height="1" />
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="postcss">

  .page-enter-active,
  .page-leave-active {
    transition: all 0.1s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(0.3rem);
  }
</style>
