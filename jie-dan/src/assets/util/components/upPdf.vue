<template>
    <div id="box">
        <el-upload
                class="avatar-uploader"
                :action="$nodeUrl+'upFile'"
                ref="upload"
                :show-file-list="true"
                :auto-upload="autoUpload"
                :on-success="success"
                list-type="text"
                :file-list="list"
                :limit="1"
        >
            <!-- :before-upload="beforeAvatarUpload"-->
            <el-button style="" class="el-icon-folder ">选择文件</el-button>

            <!--<i style="font-size: 20px" class="el-icon-folder avatar-uploader-icon"></i>-->
            <!--<span style="font-size: 12px;color: #000;">{{videoName}}</span>-->
        </el-upload>
    </div>
</template>

<script>

    export default {
        props:{
            index:{
                default:0
            },
            autoUpload:{
                default:false
            },
            src:{
                default:''
            }
        },
        data() {
            return {
                list:[],

            };
        },
        methods: {
            submit() {  //上传
                this.$refs.upload.submit();
            },
            success(res, file, fileList) {  //上传成功
                this.$emit('success',file, res)
            },
        }
    }
</script>

<style scoped lang='scss'>
    $imgSize:28px;
    #box {
        margin: 0 !important;
        .avatar-uploader .el-upload {
            cursor: pointer;
            position: relative;
            overflow: hidden;
            height: 200px;

        }
        .avatar-uploader{
            //  height: $imgSize !important;

        }
        .avatar-uploader .el-upload:hover {
            height: $imgSize;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: $imgSize;
            height: $imgSize;
            line-height: $imgSize;
            text-align: center;
        }
        .avatar {
            width: $imgSize;
            height: $imgSize;
            display: block;
        }
        .el-icon-document:before{
            content:'' !important
        }
        .el-upload-list__item-name [class^=el-icon]{
            height: 0;
        }


    }

</style>