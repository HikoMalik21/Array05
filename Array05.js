//Task one//

let Team = ["Hikmat","Ahmad","Tarek"];
Team.push("Fahad");
Team.shift(0);
console.log(Team);

//Task two//




//Task three//

console.log(Math.max(10,20,30,40,50,60,70,80,90,100));

//Task four//

let Numbers =[10,20,30,40,50];
let collectionNumbers ={
    originaNumbers: Numbers,
    Doublenumbers: Numbers.map(function(n)
    {return n*2;})
};

console.log(collectionNumbers);

//Task five//

let employees = [
  [ 'Jaylee Macy', 'marketing' ],
  [ 'John Smith', 'management' ],
  [ 'Blossom Hartley', 'design' ],
  [ 'Austin Carpenter', 'marketing' ],
  [ 'Joan Knowles', 'development' ],
  [ 'Sally Nunez', 'management' ],
  [ 'Laurel Ward', 'development' ],
  [ 'Lark Simon', 'marketing' ],
  [ 'Jane Stone', 'management' ],
  [ 'Courtney Olson', 'development' ],
];

//function Devel(){
  //  let Developers=["development"].filter(employees);
   // console.log(Developers);

//}

//Devel();



// Task six//

//let List =prompt("What is your name?");
//let Guestlist = List.split(",");
//let ListofGuests=List.push();
//console.log(ListofGuests);



//Task twelve//

let numbers = [1, 5, -7, 3, -9, 4, -6, 2];

function Positive(num){
  for(let i=1;num>=1;i++){
    if (num % i===0){
      return false;
    }
  }
  return num <1;
}

console.log(numbers.filter(Positive));

let numbers2 = [1, 5, -7, 3, -9, 4, -6, 2];

let newNum=Math.abs(numbers2);
console.log(newNum);


//Task thirteen//

const array1 =['An apple was on the table'];
console.log(array1.includes(a));







