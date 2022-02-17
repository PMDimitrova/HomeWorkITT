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
                    loadAlertRegister('noMatch');
                }
            } else {
                //there's an user with this username
                loadAlertRegister('exists');
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
                loadAlertLogin();
                return false;
            } else {
                //nonexisting user
                loadNonExistingUser();
            }
        }

        likeCountry(countryName){
            let loggedUsername = localStorage.getItem('loggedUser');
            let keyName = `${loggedUsername}Likes`;

            let likedCountries = JSON.parse(localStorage.getItem(keyName));

            if (!likedCountries){
                likedCountries = [countryName];

            }else {
                if (likedCountries.indexOf(countryName) === -1){ //if the country is not liked yet
                    likedCountries.push(countryName);
                }
            }
            localStorage.setItem(keyName, JSON.stringify(likedCountries));
            return true;

        }

        getLikedCountries(){
            let loggedUsername = localStorage.getItem('loggedUser');
            let keyName = `${loggedUsername}Likes`;

            let likedCountries = JSON.parse(localStorage.getItem(keyName));

            return likedCountries;
        }

    }


    return new UserStorage();
})()