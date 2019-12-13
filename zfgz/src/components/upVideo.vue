<template>
    <div id="box">
        <el-upload
                class="avatar-uploader"
                :action="$nodeUrl+'video/createVideo'"
                ref="upload"
                :show-file-list="true"
                :auto-upload="false"
                :on-change="handleAvatarSuccess"
                :on-success="success"
                :before-upload="beforeAvatarUpload"
                list-type="text"
                :file-list="list"
                :limit="1"
               >
            <!-- :before-upload="beforeAvatarUpload"-->
            <i style="font-size: 20px" class="el-icon-folder avatar-uploader-icon"></i>
            <!--<span style="font-size: 12px;color: #000;">{{videoName}}</span>-->
        </el-upload>
    </div>
</template>

<script>

    export default {
        props:['index','id','videoName'],
        data() {
            return {
                list:[],

            };
        },
        methods: {
            submit() {  //上传
                console.log()
                this.$refs.upload.submit();
            },
            success(res, file, fileList) {  //上传成功
                this.$emit('success', res, this.index, this.id)
            },
            handleAvatarSuccess(file, fileList) {  //选择文件 并检查文件
                const isJPG = file.raw.type === 'video/mp4';
                const isLt2M = file.size / 1024 / 1024 < 200;
                if (!isJPG || !isLt2M) {
                    if (!isJPG) {
                        this.$message.error('上传视频只能是 mp4 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 200MB!');
                    }
                    return isJPG && isLt2M;
                } else {
                    this.$emit('changeVideo', file, this.list, this.index, this.id)
                }

            },

            beforeAvatarUpload(file) {  //检查文件
                const isJPG = file.raw.type === 'video/mp4';
                const isLt2M = file.size / 1024 / 1024 < 200;
                if (isJPG || isLt2M) {
                    if (!isJPG) {
                        this.$message.error('上传视频只能是 mp4 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 200MB!');
                    }
                    return isJPG && isLt2M;
                }
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