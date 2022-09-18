<template>
 <PrewieVideo class="text-4xl" dog="cat">

 </PrewieVideo>
 <PrewieVideo dog="111"></PrewieVideo>

 <SliderTruby  v-for="n in 5" :key="n" imgTruba="https://klike.net/uploads/posts/2019-05/1558510464_25.jpg" textTruba="3 слайд"> </SliderTruby>
</template>
<script>
import PrewieVideo from "./components/PrewieVideo.vue"
import SliderTruby from './components/SliderTruby.vue'
export default {
  components: {
    PrewieVideo,
    SliderTruby
  }
}
</script>

