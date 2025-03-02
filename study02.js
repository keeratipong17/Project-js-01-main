// variable ตัวแปร
// เป็นชื่อที่ตั้งเอง ใช้เก็บข้อมูล
// การใช้งานตัวแปร คือ เอาค่าไปเก็บในตัวแปร หรือ เอาค่าในตัวแปรมาใช้
//------------------------------
// var
var vaa = 10

// let
let bb = 20

// const
const cc = 30

aa = 111
bb = 222
//cc =333
{
    var wow = 10
    {
        console.log(wow)
        let wee = 20
        const woo = 30
        console.log(wee)
        console.log(woo)
    }
    {
        console.log(wow)
        //console.log(wee)
        //console.log(woo)
    }
}