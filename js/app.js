const users = [
    {name:'oleh', gender:'male',salary:2500},
    {name:'stas', gender:'male',salary:800},
    {name:'anna', gender:'female',salary:500},
    {name:'ihor', gender:'male',salary:2000},
    {name:'olha', gender:'female',salary:1000},
    {name:'serj', gender:'male',salary:1100},
    {name:'and', gender:'male',salary:430},
    {name:'pite', gender:'male',salary:2150},
];

// const avg = (arr, gender) => {
//     return (function(arrFiltered){
//         return arrFiltered.reduce((acc, el) => acc + el.salary, 0) / arrFiltered.length;
//     })(arr.filter(el => el.gender === gender));
// };

const avg = (arr, gender) => (arrFiltered => (arrFiltered.reduce((acc, el) => acc + el.salary, 0) / arrFiltered.length))(arr.filter(el => el.gender === gender));
