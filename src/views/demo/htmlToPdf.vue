<template>
    <div>
        <el-button  @click="getPdf()">导出PDF</el-button>
        <div class="exportPage" id="pdfDom" style="margin: 10px 0;">
            <h2>测试页面</h2>
        </div>
    </div>
    
</template>

<script>
export default {
    data () {
        return {
            htmlTitle: '测试页面'
        }
    }
}
</script>

<style lang="scss" scoped>
    .exportPage {
        border: 1px solid #444;
        min-height: 500px;
    }
</style>