// 创建枚举
enum Gender {
  Female,
  Male
}

// 创建变量，使用枚举作为类型
let userGender: Gender

userGender = Gender.Female
userGender = Gender.Male

// 错误演示：
// Gender.Female = '男'