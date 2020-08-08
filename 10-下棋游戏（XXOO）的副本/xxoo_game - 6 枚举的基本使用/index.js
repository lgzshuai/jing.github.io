// 创建枚举
var Gender;
(function (Gender) {
    Gender[Gender["Female"] = 0] = "Female";
    Gender[Gender["Male"] = 1] = "Male";
})(Gender || (Gender = {}));
// 创建变量，使用枚举作为类型
var userGender;
userGender = Gender.Female;
userGender = Gender.Male;
// 错误演示：
// Gender.Female = '男'
