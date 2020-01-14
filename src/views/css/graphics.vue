<template>
    <div>
        <!-- 圆 -->
        <div class="circle"></div>
        <!-- 半圆 -->
        <div class="semicircle"></div>
        <!-- 三角形 -->
        <div class="triangle"></div>
        <!-- 扇形 -->
        <div class="fan-shape"></div>
        <!-- 梯形 -->
        <div class="ladder"></div>
    </div>
</template>
<style lang="scss">
    .circle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border: 1px solid #000;
    }
    .semicircle {
        margin: 30px 0;
        width: 80px;
        height: 40px;
        border-radius: 40px 40px 0 0;
        border: 1px solid #000;
    }
    .triangle {
        border: 40px solid #000;
        border-color:  transparent transparent #000 transparent ;
        width: 0px;
        height: 0px;
    }
    .fan-shape {
        margin: 30px 0;
        width: 80px;
        height: 80px;
        border-radius: 80px 0px 0;
        border: 1px solid #000;
    }
    .ladder {
        border: 40px solid #000;
        border-color:  transparent transparent #000 transparent ;
        border-radius: 40px 40px 0 0;
        // height: 80px;
        width: 40px;
    }
</style>
