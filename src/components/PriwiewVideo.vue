<template>
    <button @click="Video=!Video">show Video</button>
    <iframe v-if="Video" width="560" height="315" src="https://www.youtube.com/embed/ceqgwo7U28Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</template>
<script>
export default { 
    data(){
        return {
            Video: false, 
        }
    }
}
</script>
