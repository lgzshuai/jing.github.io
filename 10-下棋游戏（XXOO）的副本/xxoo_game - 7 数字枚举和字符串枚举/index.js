var Gender;
(function (Gender) {
    Gender["Female"] = "\u5973";
    Gender["Male"] = "\u7537";
    Gender["A"] = "\u4E0D\u8BE6";
})(Gender || (Gender = {}));
// 查看枚举成员的值：
// let userGender: Gender = Gender.Female
// console.log(userGender)
console.log(Gender.Female);
console.log(Gender.Male);
console.log(Gender.A);
// 给数字枚举设置初始值
// enum Gender {
//   Female = 1,
//   Male = 100,
//   A = 200
// }
// // 查看枚举成员的值：
// // let userGender: Gender = Gender.Female
// // console.log(userGender)
// console.log(Gender.Female)
// console.log(Gender.Male)
// console.log(Gender.A)
// 数字枚举的默认情况：
// enum Gender {
//   Female,
//   Male,
//   A
// }
// // 查看枚举成员的值：
// let userGender: Gender = Gender.Female
// console.log(userGender)
// console.log(Gender.Female)
// console.log(Gender.Male)
// console.log(Gender.A)
