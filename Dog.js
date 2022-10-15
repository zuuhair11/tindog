class Dog {
    constructor(data) {
        Object.assign(this, data);
        this.getBadge = '';
    }

    setSwip() {
        this.hasBeenSwiped = true;
        this.renderTheBage();
    }

    setLike() {
        this.hasBeenLiked = true;
        this.hasBeenSwiped = true;
        this.renderTheBage();
    }

    renderTheBage() {
        const state = (this.hasBeenLiked && this.hasBeenSwiped) ? 'like' : 'nope';
        this.getBadge =  `<img class="badge-like" src="images/badge-${state}.png" >`;
        this.getDogHtml();
    }

    getDogHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked, getBadge} = this;
        return `
            <img class="main-avatar" src="${avatar}" alt="">
            <div class="dog-info">
                <span class="dog-name">${name}, </span>
                <span class="dog-age">${age}</span>
                <p class="dog-bio">${bio}</p>
            </div>
            <div class="badge">
                ${getBadge}
            </div>
        `;
    }
}

export default Dog;