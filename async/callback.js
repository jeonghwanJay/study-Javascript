'use strict';

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration.
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log(3);

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchrounous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout)
}
printWithDelay(() => console.log('async Callback'), 2000);

class UserStorage {
    loginUser(id, password, onSucess, onError) {
        setTimeout(() => {
            if (
                (id === 'jay' && password === 'hwan') ||
                (id === 'jeonghwan' && password === 'jay')
            ) {
                onSucess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSucess, onError) {
        setTimeout(() => {
            if (user === 'jay') {
                onSucess({ name: 'jay', role: 'admin' });
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles( 
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
)