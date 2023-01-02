console.log('Hello world from javascript')

/* Các dạng hệ số
    Hệ thập phân : hệ cơ số 10 từ 0 đến 9
    hệ nhị phân : số 0 và 1
    hệ bát phân : hệ cơ số 8 từ 0 đến 7
    hệ lục thập lục phân hệ sơ số 16 từ 0 dến 9 và 10 bắt đầu từ A,B.C.D.E.F , F là 15


*/

// ĐỌC TÀI LIỆU TẠI ĐÂY https://www.w3schools.com/js/js_datatypes.asp
/* 
    Cách khai báo biến trong javascript

    Thông thường các ngôn ngữ khác ta khai báo

    int a = 5;
    float b=6;

    nhưng qua javascript ta bỏ hết các kiểu dữ liệu data type và phải quy về  "let"

    Khai báo
    let tên biến
    
    let c = 5; lúc này thằng let nó sẽ tự hiểu nó là số nguyên

    vd: 
    let x;       // Now x is undefined (x chưa đc xác định)
    x = 5;       // Now x is a Number (x bây giờ là kiểu số)
    x = "John";  // Now x is a String (x là kiểu chuỗi)

*/

    let c=5; /* Let sẽ tự hiểu là number*/
    let d=5.9; /* Let sẽ tự hiểu là number chứ không hiểu là số thực*/


    console.log (c)

    /* Cách nối chuỗi */

    let x1=16 +"huy";

    console.log(x1);



    /* Kểu string là kiểu dũ liệu quan trong
        Có 3 kiểu khai báo
    */
        let carName1 = "Volvo XC60";//using double quotes(dấu) ngoạc kép
        let carName2 = 'volvo XC60';//using single quotes: nháy đơn
        let carName3= `Volvo XC60`;

        console.log(carName3);

    /* Kiều booleans true false trong js */

        let x =5;
        let y =5;
        let z=6;

        console.log(x == y);// Trả về true nếu đúng
        console.log(x == z);// Trả về fasle nếu sai


    /* Kiểu toán tử để so sánh The typeof Operator (toán tử loại)
    
            Có thể dùng tyeof Operator này dể tìm xem nó là kiểu dữ liệu nào 

            Typeof operator sẽ trả về một biến hoặc một biểu thức
    
    */

    console.log(typeof "huy")// Trả về string
    console.log(typeof 0);// Trả về number
    console.log(typeof 3.14);// Trả về number
    console.log(typeof (3+4));// Trẩ về number

    /* Kiểu dữ liệu không xác định

        Trong JavaScript, một biến không có giá trị, có giá trị không xác định. Loại cũng không được xác định.
    
    */

    let car;
    console.log( car)// sẽ trả về kiểu không xác định underfined


    /*
        Khai báo 1 hằng số
    
    */

        const h = 5;

        //h=6;   sẽ bị lỗi ngay không thể gán biến của hằng số bằng một giá trị khác 

        console.log(h)// Kết quả trên wed sẽ ra 5
        //cm nhanh bằng phím tắt ctrl + /


       // khai báo nhiều biến
       
       let a=5,b=6,e=7;
       console.log("Test string ",'a =',a,'b =',b,'c =',e);


        

        


