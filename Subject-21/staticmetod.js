// Static Metodlar

class math {
    sqrt(x){
        console.log(x*x)         // Static metodo kullanıldığında yeni bir objeye gerek kalmıyor.direk oluşturduğumuz metodu çagırabiliyoruz.
    }
    static cube(x){
         console.log(x*x*x);
     }
  }
  
  const math1 = new math(); // static metod after
  math1.sqrt(5)
  
   
  math.cube(3)  // static metod before
  
  