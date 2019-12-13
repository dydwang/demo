<template>
    <div id="box">
        <el-upload
                class="avatar-uploader"
                :action="$nodeUrl+'video/createVideo'"
                ref="upload"
                :show-file-list="false"
                :auto-upload="false"
                :on-change="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                :on-success="success">
            <img v-if="imageUrl||image" :src="imageUrl!==''?imageUrl:$nodeUrl+'video/getImg?imagePath='+image" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </div>
</template>

<script>

    export default {
        props:['image'],
        data() {
            return {
                imageUrl: '',
                imagePath:'',
            };
        },
        methods: {
            submit(){  //上传
                this.$refs.upload.submit();
            },
            success(res, file, fileList){  //上传成功
                    this.$emit('success',res)
            },
            handleAvatarSuccess(file, fileList) {  //选择文件 并检查格式大小
                console.log(file)
                const  isJPG= file.raw.type === 'image/jpeg'||file.raw.type === 'image/gif'||file.raw.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 5;
                if(!isJPG||!isLt2M) {
                    if (!isJPG) {
                        this.$message.error('上传头像图片只能是 JPG/GIF/PNG 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 5MB!');
                    }
                    //this.imageUrl = URL.createObjectURL(file.raw);
                    return isJPG && isLt2M;
                }else {
                    this.imageUrl = URL.createObjectURL(file.raw);
                    this.$emit('changeImg',file)
                }
            },
            beforeAvatarUpload(file) {  //检查文件
                console.log(file)
                const  isJPG= file.type === 'image/jpeg'||file.type === 'image/gif'||file.type === 'image/png';
                const isLt2M = file.size / 1024 / 1024 < 5;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG/GIF/PNG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 5MB!');
                }
                //this.imageUrl = URL.createObjectURL(file.raw);
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped lang='scss'>
    $imgSize:100px;
    #box {
        .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;

        }
        .avatar-uploader{
            height: $imgSize !important;
        }
        .avatar-uploader .el-upload:hover {
            height: $imgSize;
            border-color: #409EFF;
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: $imgSize;
            height: $imgSize;
            line-height: $imgSize;
            text-align: center;
            border: 1px solid #e4e4e4;
        }
        .avatar {
            width: $imgSize;
            height: $imgSize;
            display: block;
        }

    }
</style>