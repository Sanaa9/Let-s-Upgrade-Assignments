//Question 1

array1 = ["Aditya" , "Rahul" , "Suresh" , "Dhruv" , "Siddhant"];
    
function reverse(array) {
    _array_2 = [];
    for (var i=array.length ;i>=0 ;i--) {
        _array_2.push(array[i]);
    }
    console.log(_array_2);
}

reverse(array1);


//Question 2

let countries = [

    {

        "name":"Korea",
        "capital":"Seoul",
        "population":2500

    },

    {

        "name":"New Orleans",
        "capital":"Lousiana",
        "population":500

    },

    {

        "name":"Italy",
        "capital":"Rome",
        "population":1000

    },

    {

        "name":"Spain",
        "capital":"Madrid",
        "population":1500


    },

    {

        "name":"France",
        "capital":"Paris",
        "population":2500

    }

]

const population_limit = 2000;
const low_populated = countries.filter(_country => _country.population < 2000);
console.log(low_populated)
