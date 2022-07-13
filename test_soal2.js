//Nama          : Rahmadani
//Alamat Email  : ramaramadhan044@gmail.com
//Waktu Mulai   : 13 July 2022
//Waktu Selesai : 13 July 2022

function ContainsNumber(_string) {
    let status =  /\d/.test(_string);
    let result = null 
    if (status) {
        result = ("Sistem kami menolak untuk inputan berisi angka " + (_string.match(/\d+/g)))
      }else {
        result = ("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + _string)
      }
      return result
  }


  var input1 = "hallo jesika24 selamat datang!"
  var input2 = "hallo anggun selamat datang!"
  var input3 = "hallo ** selamat datang!"
  var input4 = "hallo Mariage889120! selamat datang!"

  console.log((ContainsNumber(input1)))
  console.log((ContainsNumber(input2)))
  console.log((ContainsNumber(input3)))
  console.log((ContainsNumber(input4)))
