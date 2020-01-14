<template>
    <div>
        <el-button @click="debounce(fn, 5000)">防抖函数</el-button>
        <el-button @click="throttle(fn, 5000)">节流函数</el-button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            flag: true,
            timeout: null,
            menuList: [{
                key: '01',
                label: '菜单一',
                children: [
                    {
                        key: '011',
                        label: '菜单01-1'
                    },
                    {
                        key: '012',
                        label: '菜单01-2',
                        children: [
                            {
                                key: '0121',
                                label: '菜单01-2-1'
                            }
                        ]
                    }
                ]
            }, {
                key: '02',
                label: '菜单二',
                children: [
                    {
                        key: '021',
                        label: '菜单02-1',
                        children: [
                            {
                                key: '0211',
                                label: '菜单02-1-1'
                            }
                        ]
                    },
                    {
                        key: '022',
                        label: '菜单02-2'
                    }
                ]
            }],
            lastResult: []
        }
    },
    methods: {
        // 防抖函数
        debounce (fn, wait) {
            console.log(this.timeout)
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(() => {
                fn()
            }, wait)
        },
        fn () {
            console.log('点击事件发生了！')
        },
        // 节流函数
        throttle (fn, wait) {
            console.log(this.flag)
            if (!this.flag) {
                return false;
            }
            this.flag = false;
            setTimeout(() => {
                fn();
                this.flag = true;
            }, wait)
        },
        // 循环多层对象，遍历属性
        loopObj (obj) {
            obj.forEach((item) => {
                if (item.children && item.children.length > 0) {
                    this.loopObj(item.children);
                }
                let tempObj = {
                    key: item.key,
                    label: item.label
                }
                this.lastResult.push(tempObj);
            })
            return this.lastResult;
        },
        // 1 1 2 3 5 8 13 21 34 求第999项
        recursion (index) {
            if (index === 0 || index === 1) {
                return 1;
            } else {
                return this.recursion(index - 1) + this.recursion(index - 2);
            }
        },
        forRecur (index) {
            let arr = [1, 1];
            for (let i = 2; i < index; i++ ) {
                arr[i] = arr[i-1] + arr[i-2]
            }
            return arr;
        }
    },
    created () {
        console.log(this.loopObj(this.menuList));
        console.log(this.forRecur(14));
        console.log(this.recursion(2),
                    this.recursion(3),
                    this.recursion(4),
                    this.recursion(5),
                    this.recursion(6),
                    this.recursion(7),
                    this.recursion(8),
                    this.recursion(9),
                    this.recursion(10),
                    this.recursion(11),
                    this.recursion(12),
                    this.recursion(13));

    }
}
</script>
