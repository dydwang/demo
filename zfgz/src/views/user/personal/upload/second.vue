<template>
    <div id="second">
        <div v-for="(item,index) in tableData" :key="index">

            <el-form :model="item.chapter" :rules="rules"  :inline="true" ref="ruleFormSecond" label-width="100px" class="demo-ruleForm">
                <el-form-item :label="'第'+(index+1)+'章名称'" prop="chapterName">
                    <el-input v-model="item.chapter.chapterName"></el-input>
                </el-form-item>
                <el-button class="el-icon-plus" type="primary" size="mini" circle @click="tableData.splice(index+1,0,JSON.parse(JSON.stringify(fixed)))"></el-button>
                <el-button class="el-icon-minus" type="danger" size="mini" :disabled="tableData.length===1" circle @click="tableData.splice(index,1)"></el-button>

                <el-form v-for="(it,id) in item.section" :key="id" :model="it" :rules="rules"  :inline="true" ref="ruleFormChild" label-width="100px" class="demo-ruleForm">
                <el-table
                        :show-header="id===0"
                        :data="[item.section[id]]"
                        style="width: auto;margin-left:40px">
                    <el-table-column
                            width="80"
                            type="index">
                        {{index+1}}-{{id+1}}
                    </el-table-column>
                    <el-table-column
                            prop="sectionName"
                            label="小节名称">
                        <template slot-scope="scope">
                            <el-form-item prop="sectionName">
                                <el-input v-model="it.sectionName"></el-input>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            label="选择视频">
                        <template slot-scope="scope">
                            <el-form-item prop="videoSize">
                                <upVideo ref="upVideo" :videoName="it.videoName" :index="index" :id="id"  @success="getVideoPath" @changeVideo="changeVideo"></upVideo>
                            </el-form-item>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="date"
                            width="90"
                            label="操作">
                        <template slot-scope="scope">
                            <el-button class="el-icon-plus" style="color: blue" type="text" size="mini" circle @click="item.section.splice(id+1,0,JSON.parse(JSON.stringify(fixed.section[0])))"></el-button>
                            <el-button class="el-icon-minus" style="color: red" type="text" size="mini" :disabled="item.section.length===1" circle @click="item.section.splice(id,1)"></el-button>
                        </template>
                    </el-table-column>
                </el-table>
                </el-form>
            </el-form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "second",
        props: [''],
        data() {
            return {
                tableData:[{
                    chapter:{chapterName:'123', chapterLabel:'', chapterId:'', courseId:'',},
                    section:[{sectionId:'123', sectionName:'123', videoPath:'', videoSize:'', videoName:'', sectionLabel:'', courseId:'', chapterId:''}],
                }],
                fixed:{
                    chapter:{chapterName:'123', chapterLabel:'', chapterId:'', courseId:'',},
                    section:[{sectionId:'', sectionName:'123', videoPath:'', videoSize:'', videoName:'', sectionLabel:'', courseId:'', chapterId:''}],
                },
                rules: {
                    chapterName: [
                        { required: true, message: '请输入章名称', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 ', trigger: 'blur' }
                    ],
                    sectionName: [
                        { required: true, message: '请输入小节称', trigger: 'blur' },
                        { min: 3, max: 20, message: '长度在 3 到 20 ', trigger: 'blur' }
                    ],
                    videoSize: [
                        { required: true, message: '请选择视频', trigger: 'blur' },
                    ],
                },
                videoList:{}
            }
        },
        methods: {
            getVideoPath(filePath,index,id){ //上传成功
                this.tableData[index].section[id].videoPath=filePath
            },
            changeVideo(file,list,index,id){ //选择视频
                this.tableData[index].section[id].videoSize=file.size
                this.tableData[index].section[id].sectionLabel=index+'-'+id
                this.tableData[index].section[id].videoName=file.name
                this.tableData[index].chapter.chapterLabel=index

                file.index=index
                file.id=id
                let i=(10+index)+"-"+(10+id)
                this.videoList[i]=file
            },
            submitForm() {
                let blear=true
                this.$refs.ruleFormSecond.forEach((val)=>{
                    val.validate((valid) => {
                        if (!valid) {
                            blear= false;
                        }
                    });
                })
                this.$refs.ruleFormChild.forEach((val)=>{
                    val.validate((valid) => {
                        if (!valid) {
                            blear= false;
                        }
                    });
                })
                if(!blear){
                    this.$message.error('请填写完整')
                }else{
                    this.$emit('videoList',this.videoList,this.tableData)
                }
                return blear
            },
            submitVideo(){
                this.$refs.upVideo.forEach((val=>{
                    val.submit()
                }))
            }
        },
        mounted() {
        },
        create() {
        },
    }
</script>

<style scoped lang='scss'>
    #second {
        margin-top: 20px;
    }
</style>