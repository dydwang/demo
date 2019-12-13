<template>
    <div id="box">
        <div v-for="(item,index) in list" :key="index">
            <el-upload
                    class="avatar-uploader"
                    :action="nodeUrl"
                    ref="upload"
                    :show-file-list="true"
                    :auto-upload="true"
                    :on-success="success"
                    :before-upload="beforeAvatarUpload"
                    list-type="picture"
                    :disabled="true"
                    :file-list="[item]">
                <i  class="el-icon-folder-opened  el-upload__tip" style="font-size: 50px;margin-left: 20px;position: relative;top:80px;z-index: 100"></i>
            </el-upload>

        </div>
    </div>
</template>

<script>
    //47.106.248.148
   // import {nodeUrl} from '@/assets/api/url'
    export default {
        props:['list','tableData','courseId'],
        data() {
            return {
                uploadId:0,
                message:'',
                uploadSuccess:false,
                nodeUrl:this.$nodeUrl+'video/createVideo'
            };
        },
        methods: {
            submit(id){  //上传
                this.$refs.upload[this.uploadId].submit();
            },
            success(res, file, fileList){  //上传成功
                this.tableData[file.index].section[file.id].videoPath=res
                this.createSection(file.index,file.id)
                if(this.list.length-1>this.uploadId){
                    this.submit(this.uploadId++)
                }else{
                    this.createChapter()
                    this.uploadSuccess=true
                }

               // this.$emit('success',res,this.index,this.id)
            },
            beforeAvatarUpload(file) {
                return true
            },
            createSection(index,id){ // 创建节
                let item=this.tableData[index].section[id]
                item.courseId=this.courseId
                item.chapterId=this.courseId+''+(100+index)
                item.sectionId=this.courseId+''+(100+index)+''+(100+id)
                console.log(this.courseId+''+(100+index)+''+(100+id))
                console.log(item)
                this.$api.createSection(item,res=>{
                })
            },
            createChapter(){  //创建章
                let that=this
                // for(let i=0;i<this.tableData.length;i++){
                //
                // }
                this.tableData.forEach((val,index)=>{
                    let chapter=val.chapter
                    chapter.courseId=that.courseId
                    chapter.chapterId=that.courseId+''+(100+index)
                    that.$api.createChapter(chapter,res=>{

                    })
                })
            }
        },
        mounted() {
            this.submit(0)
            this.message=this.$message({
                type:'warning',
                message:'请上传成功前不要关闭页面',
                duration:0
            })
        },
        watch:{
            uploadSuccess(){
                this.message.close()
            }
        },
        beforeRouteLeave(to, form, next) {
            if(this.uploadSuccess){
                this.message.close()
                next()
            }else{
                this.$notify({
                    title: '警告',
                    message: '还未上传完成',
                    type: 'warning'
                });
            }
        }
    }
</script>

<style scoped lang='scss'>
    $imgSize:28px;
    #box {
        .avatar-uploader .el-upload {
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 200px;

        }
        .avatar-uploader{


        }
        .el-icon-document {
            content: "\e785";
        }
        .el-upload-list--picture .el-upload-list__item-thumbnail{
            width: 0 !important;
        }
    }

</style>