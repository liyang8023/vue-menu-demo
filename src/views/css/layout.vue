<template>
    <div class="container">
        <div class="middle"></div>
        <div class="left"></div>
        <div class="right">●●●●●●●●</div>
    </div>
</template>
<style lang="scss">
    .container {
        padding: 0 220px 0 200px;
        overflow: hidden;
    }
    .left, .middle, .right {
        position: relative;
        float: left;
        height: 800px;
    }
    .left, .right {
        background-color: #ccc;
        width: 200px;
    }
    .middle {
        background: #666
    }
    .left {
        margin-left: -100%;
        left: -200px;
        width: 200px;
        background: #989796;
    }
    .right {
        margin-left: -220px;
        right: -220px;
        width: 220px;
        background: green;
    }
    .middle {
        width: 100%;
        background: #545362;
        word-break: break-all;
    }
</style>