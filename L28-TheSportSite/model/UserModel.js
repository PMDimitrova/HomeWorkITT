let userStorage = (function(){
    class User {
        constructor(username, pass) {
            this.username = username;
            this.pass = pass;
        }
    }

    class UserStorage{
        constructor() {
            let existingUsers = localStorage.getItem('users');
            if (!existingUsers){
               let defaultUsers = [new User('minka', '123')];
               localStorage.setItem('users', JSON.stringify(defaultUsers));
               this.users = defaultUsers;
            }else {
                this.users = JSON.parse(existingUsers);
            }
        }
        registerUser(username, pass, repass){
            if (!this.users.some(user => user.username === username)){
                console.log(username + 'already exists')
                if (pass === repass){
                    this.users.push(new User(username, pass));
                    localStorage.setItem('users', JSON.stringify(this.users));
                    localStorage.setItem('loggedUser', username);
                    console.log(`User ${username} registered successfully!`);
                    return true;
                }else {
                    loadAlertRegister('noMatch');
                    return false;
                }
            }else{
                loadAlertRegister('exists');
                return false;
            }

        }

        loginUser(username, password){
            if (this.users.some(user => user.username === username && user.pass === password)){
                localStorage.setItem('loggedUser', username);
                console.log(`User ${username} logged in successfully!`);
                return true;
            }else if (this.users.some(user => user.username === username && user.pass !== password)){
                loadAlertLogin();
                return false;
            }
        }
    }
    let storage = new UserStorage();
    return storage;
})()