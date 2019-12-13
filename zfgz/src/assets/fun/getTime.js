

let getTime=function(time) {
    let date=new Date(parseInt(time))
    let Y=date.getFullYear()
    let M=date.getMonth()+1
    let D=date.getDate()
    return Y+'-'+M+'-'+D
}

export default getTime