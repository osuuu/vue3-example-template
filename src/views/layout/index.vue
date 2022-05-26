<template>
    主框架
</template>

<script>
    import {
        ref,
        reactive,
        onMounted
    } from 'vue'
    export default {

        setup() {
            const collapsed = ref(false);
            // const logoImg = ref(require('@/assets/images/header.png'));
            // const logoImg2 = ref(require('@/assets/images/logo.png'));

            // if (document.body.clientWidth < 992) {
            //     collapsed.value = true
            // } else {
            //     collapsed.value = false
            // }


            // return {
            //     collapsed,
            //     logoImg,
            //     logoImg2
            // }
        },

    }
</script>

<style lang="less" scoped>
    // /deep/.t-menu__operations .t-button {
    //     margin: 0 8px;
    // }
</style>