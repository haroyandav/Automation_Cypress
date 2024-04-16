import Login from "./pages/Obj"

it('Login to system' , function () {

    let login = new Login()

    login.navigateTo()

    login.username('test')

    login.password('test')
    
    login.loginButton()
})