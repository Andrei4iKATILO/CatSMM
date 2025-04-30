// let string = ["Acesta", "este", "0", "propozitie", "inscrisa", "in", "multime!"];
// // alert(string);
//  alert(string[string.l
// let salaries = {
//     Ann: 100,
//     liza: 200,
//     Marian: 300,
// }
// function multiply(salary){

// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let password0 = (`123456789`);
// let username0 = (`crivcianschiandrei@gmail.com`);
// let usename = prompt(`Inroduceti username`);
// let password = prompt(`Introduceti parola`);
// if((usename === username0) && (password === password0)) {
//     alert(`Hello!`);
// }

// else if((usename === username0) && (password != password0)) {
//     alert(`Parola este incorecta`);
// }

// else if((usename != username0) && (password === password0)) {
//     alert(`Nu exista asa Usernamul`);
// }
// else {
//     alert(`Nu este corect nici Usernamul nici Parola`);
// }

// let a = Number(prompt(`Introduceti un nr.`));
// let k = [];
// for(let i = 1; i < a; i++){
//     if(a % i == 0){
//         k.push(i);
        
//     }
    
// }
// k.push(a);
// alert(k);





// let k = [`Jas`, `Bloose`];
// alert(k);
// k.push(`Rocknrolle`);
// alert(k);
// let a = Math.trunc(k.length / 2);
// k[a] = `Klasic`;
// alert(k);
// alert(k[0]);
// k.shift();
// k.unshift(`Rep`);
// k.unshift(`Regi`);
// alert(k);
// let x = 0;
// let k = [];
// let i = 0;
// do{
//     x = Number(prompt(`Introduceti un numar natural`, ));
//     k[i] = x;
//     i++;
//     }while((x !== 0));
// let s = 0;
// for(let j = 0; j < i; j++){
//     s = s + k[j];

// }
// let a = [];
// function sumInputNumbers(i, s, k){
//     for(let j = 0; j <= i; j++){
//         s = s + k[j];
//     } return s;
// }
// let e = [1, 2, 3];
// let s1 = 0;
// let ii = e.length - 1;
// s1 = sumInputNumbers(ii, s1, e);
// alert(s1);


// let b = [45, 85, 15];
// let s2 = 0;
// let r = 0;
// s2 = sumInputNumbers(r, s2, b);
// alert(s2);



const btnMake = document.getElementById("makeFriend");

let i = 0;
btnMake.addEventListener("click", () => {
    i++;
    const friendsNumber = document.getElementById("friendsNumber");
    let currentFriends = parseInt(friendsNumber.textContent);
    if(i % 2 == 1){
    btnMake.style.backgroundColor = "gray";
    btnMake.style.color = "white";
    btnMake.textContent = "Друг" ;
    friendsNumber.textContent = currentFriends + 1;   
}
    else{
        btnMake.style.backgroundColor = "#7549EA"
        btnMake.textContent = "Подружится";
        friendsNumber.textContent = currentFriends - 1;
    }

});16813371

