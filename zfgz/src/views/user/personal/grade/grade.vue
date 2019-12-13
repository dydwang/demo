<template>
    <div>
        <user :update="update"  ref="users" v-show="teacherInfo===''||update"></user>
        <teacher @updateTeacher="updateTeacher" :teacherInfo="teacherInfo" v-show="teacherInfo!==''&&!update"></teacher>
    </div>
</template>

<script>
    import user from './user'
    import teacher from './teacher'
    export default {
        name: "grade",
        data(){
            return{
                openId:this.$userInfo.openId,
                teacherInfo: '',
                update:false
            }
        },
        methods: {
            updateTeacher(){
                this.update=true
                this.$refs.users.updateForm(this.teacherInfo)
            }
        },
        mounted() {
            let c={
                openId:this.openId
            }
            this.$api.getTeacher(c,res=>{
                if(res[0]){
                    this.teacherInfo=res[0]
                }

            })
        },
        created(){

        },
        components:{user,teacher}
    }
</script>

<style scoped>

</style>