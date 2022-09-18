<template>
    <div>{{dog}}</div>
    <div> 
     <slot /> 
    </div>
</template>

<script>
export default {
    props: {
        dog: String
    }

}
</script>