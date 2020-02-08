<template>
    <div id="box">
        <div v-for="(item,index) in tableData" :key="index">
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
                    :file-list="[item.file]">
                <i  class="el-icon-folder-opened  el-upload__tip" style="font-size: 50px;margin-left: 20px;position: relative;top:80px;z-index: 100"></i>
            </el-upload>

        </div>
    </div>
</template>

<script>
    import nodeUrl from '@/assets/util/url'
    export default {
        props:['tableData','courseId'],
        data() {
            return {
                uploadId:0,
                message:'',
                uploadSuccess:false,
                nodeUrl:nodeUrl+'course/upVideo',
            };
        },
        methods: {
            submit(id){  //上传
                this.$refs.upload[this.uploadId].submit();
            },
            success(res, file, fileList){  //上传成功
                this.tableData[this.uploadId].videoPath=res
                this.tableData[this.uploadId].index=this.uploadId
                if(this.tableData.length-1>this.uploadId){
                    this.submit(this.uploadId++)
                }else{
                    this.$emit('success')
                    this.createSection()
                    this.uploadSuccess=true
                }
                console.log(this.tableData)
            },
            beforeAvatarUpload(file) {
                return true
            },
            createSection(){ // 创建节
                let that=this
                this.tableData.forEach((val,index)=>{
                    let cnt=JSON.parse(JSON.stringify(val))
                    cnt.videoId=this.courseId+''+index
                    cnt.index=index
                    cnt.courseId=this.courseId
                    that.$api.updateVideo(cnt,res=>{

                    })
                })
            },

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