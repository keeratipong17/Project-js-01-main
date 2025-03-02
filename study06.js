// operator ตัวดำเนินการ Ep.2
// คือ เครื่องหมายที่ใช้ในการดำเนินการกับข้อมูล
//------------------------------
// Assignment Operators = += -= *= /= %=
let x = 10
x = x + 5         // x + = 5
let y = 20
y = y * 7 * x / 5       // y += 7 * x / 5

// Nullish Coalescing Operator __??__ 
// กรณีที่หน้า ?? เป็น null จะใช้หลัง ??
//กรณีที่หน้า ?? ไม่ใช่ null จะได้ค่านั้นๆเลย
let aa = null
let bb = 111
console.log(aa ?? 888)
console.log(bb ?? 888)

// Ternary Conditional Operator __?__:__
let cc = 10 < 555 ? 'Hello' : 'Goodbye'
let cccc = 10 < 5 ? 'Hello' : 'Goodbye'
console.log(cc)
console.log(cccc)

let dd = 'Sombat' > 'Somjai' ? 555 : 999
let dddd = 'Sombat' >= 'Sombat' ? 555 : 999
console.log(dd)
console.log(dddd)


// Spread Operator __...__ ใช้กับ array และ object
let ee = [1, 2, 3]
let ff = [10, 20, 30]   
let gg = [...ee, ...ff]
console.log(gg)

