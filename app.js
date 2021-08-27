console.log('connect');
const object={
    name:'amir ali',
    passion:'student',
    roll: 1,
    address:'kamdebpur'
}
const stringify= JSON.stringify(object);
console.log(object);
console.log(stringify);

const phone= {
    id:10,
    name:'Symphony',
    brand:'apple',
    battary:'li-poly',
    charger:'50w-high-power'
}
const stringify2= JSON.stringify(phone);
console.log(stringify);
const shop={
    name:'rohim',
    number:01754564546,
    address:'kamdebpur'

}
const stringify3= JSON.stringify(shop);
console.log(stringify3);
const parse = JSON.parse(stringify3);
console.log('stringify3', parse);

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(  )


    function loadData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then ( res=>res.json())
        .then( data => console.log(data));
        
    }

function user(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(json => displayUsers(json))
}

function displayUsers(json)
{
    const users= document.getElementById('user-list');
    for ( const user of json){
        console.log(user.name)
        const li= document.createElement('li');
        li.innerText=`Name: ${user.name} + Email: ${user.email}`;
        users.appendChild(li);
    }
}

// function displayUsers(json){
//     for( const user of json){
   
//         console.log(user.id, user.name);
        
//     }
//     console.log(json);
// }


function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>userPost(data));
}

function userPost(data){
    const userPost= document.getElementById('user-post');

    for( const post of data){
        const li=document.createElement('li')
        li.innerText=post.title;
        userPost.appendChild(li);
        
    }
}

