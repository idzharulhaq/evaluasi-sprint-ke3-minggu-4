// soal 1
function ganjilgenap(arr) {
    let ganjil = []
    let genap = []
    for (let index in arr) {
        if (arr[index] % 2 == 0) {
            ganjil.push(arr[index])
        } else {
            genap.push(arr[index])
        }
    }
    return [ganjil, genap]
}

// soal 2
function HighNutrition() {

}

// soal 3
let token = ''

let myheaders = new Headers()
myheaders.append('Content-Type', 'application/json')

function login() {
    let datatosend = {
        email: prompt('enter your email'),
        password: prompt('entet your passwoed')
    }

    const init = {
        method: 'post',
        Headers: myheaders,
        body: JSON.stringify(datatosend)
    }

    const response = fetch(`https://api-nodejs-todolist.herokuapp.com/user/login`, init)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            token = res.token
        })
        .catch(err => console.error(err))

    return response
}


function register() {
    let datatosend = {
        name: prompt('enter your fullname'),
        email: prompt('enter your email'),
        password: prompt('enter your password'),
        age: ('enter your age')
    }

    const init = {
        method: 'post',
        Headers: myheaders,
        body: JSON.stringify(datatosend)
    }

    const response = fetch(`https://api-nodejs-todolist.herokuapp.com/user/register`, init)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            token = res.token
        })
        .catch(err => console.error(err))
}

function addTask() {
    const myheaders = new Headers()
    myheaders.append('Authorization', `Bearer ${state.token}`)
    myheaders.append('Content-Type', 'application/json')

    const init = {
        method: 'post',
        headers: myheaders,
        body: JSON.stringify(datatosend)
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task`, init)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))

    return 'wait....'
}

function GetAllTask() {
    const myheaders = new Headers()
    myheaders.append('Authorization', `Bearer ${state.token}`)
    myheaders.append('Content-Type', 'application/json')

    const init = {
        method: 'get',
        headers: myheaders,
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task`, init)
        .fetch(res => res.json())
        .fetch(res => console.log(res))
        .catch(err => console.error(err))

    return 'wait.....'
}

function GetTaskById(id) {
    const myheaders = Headers()
    myheaders.append('Authorization', `Bearer ${state.token}`)
    myheaders.append('Content-Type', 'application/json')

    const init = {
        method: 'post',
        headers: myheaders
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
        .fetch(res => res.json())
        .fetch(res => console.log(res))
        .catch(err => console.error(err))

    return 'wait..'
}

function UpdateTaskById(id) {
    const myheaders = new Headers()
    myheaders.append('Authorization', `Bearer ${state.token}`)
    myheaders.append('Content-Type', 'appliction/json')

    const init = {
        method: 'put',
        headers: myheaders,
        body: JSON.stringify(datatosend)
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init)
        .fetch(res => res.json())
        .fetch(res => console.log(res))
        .catch(err => console.error(err))

    return 'wait...'
}

function DeleteTaskById(id) {
    const myheaders = new Headers()
    myheaders.append('Authorization', `Bearer ${state.token}`)
    myheaders.append('Content-Type', 'application/json')

    const init = {
        method: 'del',
        headers: myheaders
    }

    fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, init  )
        .fetch(res => res, json())
        .fetch(res => console.log(res))
        .catch(err => console.error(err))

    return 'wait....'
}