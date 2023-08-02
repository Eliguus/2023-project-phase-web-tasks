const _ = require("lodash")

// inputs for functions
attendance = [
    {
       'Student' : 'Kidus',
        'PresentDays' : 67
    },
    {
        'Student' : 'Henon',
         'PresentDays' : 90
    },
    {
        'Student' : 'Henok',
         'PresentDays' : 85.5
     },
]

nums = [1,2,3,4,5,6,6,8]


const users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   

//Sort
const sortedUsers = _.sortBy(users, [(user) => user.user]);

console.log(sortedUsers)

//Filter
const activeStudentsData = _.filter(attendance, (data) => data.PresentDays > 85 )

console.log("Data of students with attendence greater than 85% are ", activeStudentsData)


//Max Value

const maxVal = _.max(nums)

console.log("The max value is ", maxVal)


// Chunking
const groupOfTwo = _.chunk(nums,3)

console.log(groupOfTwo)


//debounce
const square = () => console.log("square")

const debounced = _.debounce(square,500)
debounced()
debounced()
debounced()


//fill
const filledArray = _.fill(nums, "*",1,4)
console.log(filledArray)

//remove
const removeEvens = _.remove(nums,(num)=>num%2==0)
console.log(removeEvens)

//Map
const activeSudents = _.map(activeStudentsData, (data)=> data.Student)

console.log("Students that are active ", activeSudents)
