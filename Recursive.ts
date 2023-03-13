// function sayHello(name : string){
//     console.info("Hello " + name)
// }
// sayHello("F")


// function areaTriangle(base: number,height: number): number{ //พารามิเตอร์:ชนิดข้อมูล : returnคำตอบออกเป็นชนิดข้อมูล
//     let area: number //จะรู้จักแค่ภายในฟังก์ชัน
//     area = 0.5*base*height
//     return area
// }
// let area: number //สร้างตัวแปร เพื่อส่งค่าออก รู้จักแค่นอกฟังก์ชัน
// area = areaTriangle(5,7) //แบบนี้เอาตัวแปรไปใช้ต่อได้
// console.info("Area Of Triangle = " + area) //แบบไหนก็ได้เอาตัวแปรมารองรับแล้วค่อยdisplayออกมาก้ได้
// console.info ("Area Of Triangle = " + areaTriangle(3,5))


// function functionX(n: number): number{
//     if (n==0)
//         return 1
//     else 
//         return functionX(n-1) * 2
// }
// console.info(functionX(5))


// function fac(n: number): number {
//      if (n==0)
//          return 1
//      else
//          return fac(n-1) * n
//  }
//  console.info ("Fac = "+fac(5))
 
 //HW2.1
 function sum(n: number): number {
     if(n==0)
         return 0
     else
         return sum(n-1) + n
 }
 console.info ("SUM = "+sum(10))
 
 //HW2.2
 function Fibonacci(n: number): number{
     if (n==1)
         return 0
     else if (n==2)
         return 1
     else
         return Fibonacci(n-2) + Fibonacci(n-1)
 }
 console.info ("FIBO = "+Fibonacci(8))