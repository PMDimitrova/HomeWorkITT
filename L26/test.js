function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise
    .then(function (data) {         //1
        console.log(data);              //---success

        return job(true);
    })

    .then(function (data) {         //2
        if (data !== 'victory') {       //tuk ne wlizame zashtoto e success i ne pechatame nishto
            throw 'Defeat';
        }

        return job(true);
    })

    .then(function (data) {         //3
        console.log(data);              //---success
    })

    .catch(function (error) {         //4
        console.log(error);             //ne wlizame

        return job(false);
    })

    .then(function (data) {         //5
        console.log(data);              //success

        return job(true);
    })

    .catch(function (error) {         //6
        console.log(error);

        return 'Error caught';
    })

    .then(function (data) {         //7
        console.log(data);              //----success

        return new Error('test');
    })

    .then(function (data) {         //8
        console.log('Success:', data.message);//ne wlizame
    })

    .catch(function (data) {         //9
        console.log('Error:', data.message);    //--- Error: test
    });