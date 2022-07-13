//Nama          : Rahmadani
//Alamat Email  : ramaramadhan044@gmail.com
//Waktu Mulai   : 13 July 2022
//Waktu Selesai : 13 July 2022

var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ]
var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ]
var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ]

var combineData = data1.concat(data2, data3);
var a = 1;
var b = 0;
var data;
for (var i = 0; i < combineData.length; i++) {
    for (var j=i; j<combineData.length; j++) 
    {
            if (combineData[i] == combineData[j])
             b++;
            if (a<b)
            {
              a=b; 
              data = combineData[i];
            }
    }
    b=0;
}
console.log("total data paling banyak keluar adalah " +  (data)  + " dengan jumlah " + (a) )