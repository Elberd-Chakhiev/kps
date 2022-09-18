<template>
<div>

    <img :src="imgTruba" alt="">
    <span> {{textTruba}}</span>
</div>




</template>

<script>
export default {
    props: {
        imgTruba: String,
        textTruba: String
    }

}
</script>