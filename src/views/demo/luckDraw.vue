<template>
    <div class="game-box">
        <template v-for="(item, index) in prizeList" >
            <div  @click="index === 4 ? start() : ''"  :key="index" :class="index === 4 ? 'startBtn': currentIndex === index ? 'activebox otherbox' : 'otherbox'"> 
                {{index === 4 ? '开始抽奖' : item}}
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                prizeList: [
                    '一等', '二等', '三等', '四等', '', '五等', '六等', '七等', '八等'
                ],
                currentIndex: 0,
                tempIndex: 0,
                indexList: [0,1,2,5,8,7,6,3],
                speed: 100,
                // maxSpeed: 2000,
                // minSpeed: 200,
                timeOut: null
            }
        },
        methods: {
            addIndex () {
                if (this.tempIndex === 7) {
                    this.tempIndex = 0
                } else {
                    this.tempIndex ++;
                }
                this.currentIndex = this.indexList[this.tempIndex];
            },
            // // 加速
            // speedUp() {
            //     this.speed -= 60;
            // },
            // // 减速
            // speedDown() {
            //     this.speed += 200;
            // },
            // 速度切换
            speedControl() {
                // this.speedDown();
                // if (this.speed > this.maxSpeed) {
                //     this.speedUp();
                // } else {
                //     this.speedDown();
                // }
                // console.log(this.speed);
                if (this.speed > 240 ){
                    // this.speed = 50 + this.speed;
                    let s = Math.random()*(1.1-1)+1.02;
                    this.speed = this.speed * s;
                } else {
                    let ss = Math.random()*(10-5)+5;
                    // console.log(ss);
                    this.speed = ss + this.speed;
                }
                clearInterval(this.setOut);
                if (this.speed < 900) {
                    this.setOut  = setInterval(this.speedControl, this.speed);
                    this.addIndex();
                }
            },
            start () {
                clearInterval(this.setOut);
                this.speed = 100;
                this.setOut = setInterval(this.speedControl, this.speed);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .game-box {
        width: 400px;
        height: 400px;
        border: 1px solid #000;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        padding-right: 0;
        text-align: center;
        .startBtn, .otherbox {
            width: 30%;
            height: 30%;
            border: 2px solid red;
            margin: 3px;
            line-height: 120px;
        }
        .startBtn {
            background: yellowgreen;
        }
        .activebox {
            border: 2px solid black;
        }
    }
</style>