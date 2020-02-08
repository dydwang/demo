let table=[
    ['schoolId','bigint primary key'],
    ['schoolName','varchar(20) not null'],
    ['schoolMain','varchar(20) not null'],
    ['schoolPhone','varchar(20) not null'],
    ['schoolGrade','varchar(40) not null'],
    ['schoolAddress','varchar(40) not null'],
    ['schoolCourse','varchar(40) not null'],
    ['schoolPrice','bigint not null'],
]
module.exports=table
