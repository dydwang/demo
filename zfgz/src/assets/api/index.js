import user from './user.js'
import course from './course.js'
import chapter from './chapter.js'
import section from './section.js'
import news from './news.js'
import teacher from './teacher.js'

// const teacher  =()=> from('./teacher')
// const user  =()=> from('./user')
// const course  = ()=> from('./course')
// const chapter  = ()=> from('./chapter')
// const section  = ()=> from('./section')
//  const news  =()=> from('./news')

let api= Object.assign(
    user,
    teacher,
    course,
    chapter,
    section,
    news
)

export default api