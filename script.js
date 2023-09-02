// --UseCase
//1. Write code to get array of names from given array of users
//2. Get back only active users
//3. Sort users by age descending

const users = [
  {
    id: 1,
    name: "saim",
    isActive: true,
    age: 21,
  },
  {
    id: 2,
    name: "rizwan",
    isActive: false,
    age: 20,
  },
  {
    id: 3,
    name: "fausan",
    isActive: false,
    age: 20,
  },
  {
    id: 4,
    name: "ashraf",
    isActive: true,
    age: 22,
  },
];

// solution 1 - level 1

const names= [];
for (i=0; i<users.length; i++){
  if(users[i].isActive){
    names.push(users[i].name)
  }
}
console.log(names)

// solution 2 - level 2


users.forEach((user) => {
  if (users.isActive) {
    
    names.push(user.name)
  }
});
console.log(names)



// solution 3  - level 3

const name2 = users.filter((user)=> user.isActive).forEach((user) => {
  if (users.isActive) {
    
    names.push(user.name)
  }
});
console.log(names)

// solution 4 - level 4

const name1 = users.filter((user)=> user.isActive).map((user) => user.name);
console.log('name1',name1);

const age = users.filter((user) => user.name).map((age) => age.age)
console.log('age',age);

// Sort solution 5 - level 5

const agess = users.sort((user1, user2) => user1.age < user2.age ? -1 : 1) //ascending order
const agess2 = users.sort((user1, user2) => user1.age < user2.age ? -1 : 1) //descending
console.log(agess);