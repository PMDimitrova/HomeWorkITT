let userStorage = (function () {

    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }

    class UserStorage {
        constructor() {
            let existingUsers = localStorage.getItem('users');

            if (!existingUsers) {
                let defaultUsers = [new User('minka', '123')];
                localStorage.setItem('users', JSON.stringify(defaultUsers));
                this.users = defaultUsers;
            } else {
                this.users = JSON.parse(existingUsers);
            }
        }

        registerUser(username, password, repassword) {
            //if no user with this username exists:
            if (!this.users.some(user => user.username === username)) {
                if (password === repassword) {
                    this.users.push(new User(username, password));
                    localStorage.setItem('users', JSON.stringify(this.users));
                    localStorage.setItem('loggedUser', username);
                    console.log(`User ${username} registered successfully!`);
                    return true;
                } else {
                    //passwords are not he same
                    //todo display warning
                }
            } else {
                //there's an user with this username
                //todo display warning
                return false;
            }
        }

        loginUser(username, password) {
            if (this.users.some(us => us.username === username && us.password === password)) {
                localStorage.setItem('loggedUser', username);
                console.log(`User ${username} logged in successfully!`);
                return true;
            } else if (this.users.some(us => us.username === username && us.password !== password)) {
                //password incorrect
                //todo display warning
                return false;
            } else {
                //no such user
                //todo display warning
            }
        }

        logoutUser(){
            let currenUser = localStorage.getItem('loggedUser');
            this.users = this.users.filter(us => us.username !== currenUser);
            localStorage.removeItem('loggedUser');
            if (!(currenUser === 'minka')){
                localStorage.setItem('users', JSON.stringify(this.users));
            }
        }

    }


    return new UserStorage();
})()