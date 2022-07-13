//Nama          : Rahmadani
//Alamat Email  : ramaramadhan044@gmail.com
//Waktu Mulai   : 13 July 2022
//Waktu Selesai : 13 July 2022

// output 1
console.log("output 1 :")
const x = 6;

for(let i = 0; i < x; i++)
{
    let a = "";
    for (let j = 0; j <= i; j ++)
    {
        a += "*";
    }
    console.log(a)
}

// output 2 
console.log("output 2 :")

const p = 5;
const q = 5; 
let read = "";

for(let i = 0; i <= p; i++)
{  
    for (let j = 0; j <= q; j ++)
    {
      if(i + j > p) {
        read += "*";
      } else {
        read += " ";
      }  
    }
        read = read.concat("\n")
}
console.log(read)