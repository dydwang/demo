let table=[
    ['videoId','varchar(20) primary key'],
    ['`indexs`','bigint not null'],
    ['videoName','varchar(20) not null'],
    ['videoPath','varchar(80) not null'],
    ['courseId','bigint not null']
]
module.exports=table
