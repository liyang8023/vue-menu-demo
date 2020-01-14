<template>
    <div class="continer1">
        <!-- 垂直居中与之类似 -->
        <!-- div水平居中 -->
            <!-- 1. flex -->
            <div class="box1"></div>
            <!-- 2. 定宽定位 -->
            <div class="box2"></div>
            <!-- 3. 定位不定宽  ?   
            <div class="box4"></div> -->
            <!-- 4. left/right 0 -->
            <div class="box3"></div>
    </div>
</template>
<style lang="scss">
    // .continer1 {
    //     display: flex;
    //     justify-content: center;
    // }
    .box1 {
        height: 300px;
        width: 300px;
        border: 1px solid #000;
    }
    .box2 {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 50%;
        // border: 1px solid #111;
        background-color: aqua;
        margin-left: -100px;
        top: 10%;
    }
    .box3 {
        width: 200px;
        height: 200px;
        position: absolute;
        left: 0%;
        right: 0;
        margin: 0 auto;
        // border: 1px solid #222;
        background-color: aquamarine;
        top: 50%;
    }
    // 未实现
    // .box4 {
    //     // height: 200px;
    //     position: absolute;
    //     background-color: rgb(10, 196, 221);
    //     top: 70%;
    //     left: 50%;
    //     transform:translate(-50%,0);
    // }
</style>