<template>
    <div id="search">
        <el-autocomplete
                popper-class="my-autocomplete"
                suffix-icon="el-icon-search"
                size="small"
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="搜索课程"
                @select="handleSelect">
            <template slot-scope="{ item }">
                <div class="name">{{ item.courseName }}</div>

            </template>
            <template >
            </template>
        </el-autocomplete>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                restaurants: [],
                state: '',
                timeout:  null
            };
        },
        methods: {
            loadAll() {
                return [
                    { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                    { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                    { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                    { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                    { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                    { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                    { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                    { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                    { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                    { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },]
            },
            querySearchAsync(queryString, cb) {
                var results = this.restaurants;

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    cb(results);
                }, 1);
            },
            createStateFilter(queryString) {
                return (state) => {
                    return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                this.state=item.courseName
                let router=this.$router.resolve({
                    path: '/courseDetails',
                    query: item
                })
                window.open(router .href, '_blank');
            },
            selectCourse_courseName(){
                this.$api.selectCourse_courseName({courseName:this.state},res=>{
                    this.restaurants=res
                })
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        },
        watch:{
            state(){
                this.selectCourse_courseName()
            }
        }
    };
</script>

<style scoped lang="scss">
    #search{
        float: right;
        margin-top: 20px;
        margin-right: 25px;
        width: 150px;

    }

</style>