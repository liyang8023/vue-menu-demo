<template>
    <div class="container" @click='selectContent = false'>
        <div class="serachInput" @click="settingEvent($event)">
            <el-input @focus='handleFocus'  v-model='inputValue' @input='handleInput'></el-input>
            <div class="content" v-show='selectContent'>
                <ul v-show="selectList.length">
                    <li v-for='item of selectList' :key='item.id' @dblclick='handleItemClick(item)'>
                        <!-- <el-checkbox v-model="item.isCheck">{{item.label}}</el-checkbox> -->
                        {{item.label}}
                    </li>
                </ul>
                <div v-show="!selectList.length" class="mesClass">{{searchMes}}</div>
            </div>
        </div>
        <div class="resultList">
            <span v-for='item of resultList' :key='item.name' class="resultItem"> {{item.label}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectContent: false,
            inputValue: '',
            allSelect: [
                {id: '1', label: '111', isCheck: false},
                {id: '2', label: '122', isCheck: false},
                {id: '3', label: '133hh', isCheck: false},
                {id: '4', label: '3hh', isCheck: false}
            ],
            selectList: [],
            resultList: [],
            timer: null,
            searchMes: ''
        }
    },
    methods: {
        handleFocus() {
            this.selectContent = true;
        },
        handleBlur() {
            this.selectContent = false;
        },
        handleInput(e) {
            this.selectList = [];
            if (e) {
                if (this.timer) {
                    this.timer = null;
                }
                this.timer = setTimeout(() => {
                    this.allSelect.forEach(item => {
                        if (item.label.indexOf(this.inputValue) !== -1) {
                            this.selectList.push(item);
                        }
                    })
                    this.searchMes = this.selectList.length ? '' : '没有符合您输入内容的数据'
                }, 500);
            } else {
                this.searchMes = '';
            }
        },
        handleItemClick(item) {
            // if (this.resultList.indexOf(name) === -1) {
            //   this.resultList.push(name);
            // } else {
            //   this.$message.error('当前选择的项已存在！');
            // }
            let sum = 0;
            this.resultList.forEach((select) => {
            if (select.label !== item.label) {
                sum++;
            }
            })
            console.log(sum, this.resultList.length);
            if (sum === this.resultList.length ) {
            this.resultList.push(item);
            } else {
            this.$message.error('当前选择的项已存在！');
            }
            this.selectContent = false;
        },
        settingEvent(event){
            event.stopPropagation(); //此区域不受上面方法的影响
        }
    }
}
</script>
<style lang="scss" scoped>
    .container {
        .serachInput {
            width: 180px;
            position: relative;
            .content {
                height: 200px;
                border: 1px solid #e4e7ed;
                position: absolute;
                top: 50px;
                left: 0;
                right: 0;
                overflow-y: scroll;
                background-color: #eee;
                z-index: 100;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                ul {
                    padding: 0px;
                    margin: 0;
                    li {
                        list-style: none;
                        padding: 5px 10px;
                        border-radius: 2px;
                    }
                    li:hover {
                        background: #ddd;
                        cursor: pointer;
                    }
                }
                .mesClass {
                    padding: 10px;
                    color: #666;
                    font-size: 16px;
                    margin-top: 20px;
                }
            }
        }
        .resultList {
            height: 200px;
            margin: 20px 0;
            padding: 10px 0;
            text-align: left;
            border: 1px solid #ddd;
            .resultItem {
                padding: 0 10px;
            }
        }
    }
</style>