import Dog from './Dog.js';
import {dogs} from './data.js';

let isWaiting = false;

const crossButton = document.getElementById('swip-icon');
const likeButton = document.getElementById('like-icon');

function getNewDog() {
    const nextDogData = dogs.shift();
    return nextDogData ? new Dog(nextDogData) : {};
}

// Render the like button when the user hit twic on the dog avatar
document.body.addEventListener('dblclick', function(e) {
    const target = e.target;
    if(target.classList.contains('main-avatar')) {
        renderLike();
    }
})

likeButton.addEventListener('click', renderLike);

function renderLike() {
    const isEmpty = Object.keys(dogs).length === 0;
    if(isEmpty) {
        // Remove the icone LIKE and NOPE
        clearUp();
    }
    dog.setLike();

    if(!isWaiting && !isEmpty) {
        isWaiting = true;
        setTimeout(() => {
            dog = getNewDog();
            render();

            isWaiting = false;
        }, 1000);
    }
    
    render()
};


crossButton.addEventListener('click', () => {
    const isEmpty = Object.keys(dogs).length === 0;
    if(isEmpty) {
        // Remove the icone LIKE and NOPE
        clearUp();
    }
    dog.setSwip();

    if(!isWaiting && Object.keys(dogs).length !== 0) {
        isWaiting = true;
        setTimeout(() => {
            dog = getNewDog();
            render();

            isWaiting = false;
        }, 1000);
    }

    render();
});


function clearUp() {
    // document.querySelector('.action-icons').style.display = 'none';
    setTimeout(() => {
        window.location.reload();
    }, 1000);
}


function render() {
    document.querySelector('.main-container').innerHTML = dog.getDogHtml();
}

let dog = getNewDog();
render();