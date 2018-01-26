<template>
    <div>
        <h1>I am a parent component</h1>
        <div class="children">
            <demo-one-children></demo-one-children>
        </div>
    </div>
</template>
<script>
    import demoOneChildren from '@/components/demoCom/demoOneChildren'
    export default {
        components: {
            demoOneChildren
        }
    }
</script>

<style scoped>
    h1{
        color: purple;
        font-size: 18px;
    }
    .children{
        margin-top: 20px;
    }
</style>
