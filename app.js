let allUsers = []

function signUp(
    email,
    password,
    name,
    discord,
    subcription,
    lessonCompleted
) {
    let user = {
        email: email,
        password: password,
        name: name,
        discord: discord,
        subcription: subcription,
        lessonCompleted: lessonCompleted
    }

    allUsers.push(user)
}

signUp(
    "minh@gmail",
    "abc",
    "minh",
    "DHV",
    "VIP+",
    "1,3,5,7"
)

console.log(allUsers)
