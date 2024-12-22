// Made by @kit2d2
// Simply paste this in your console and have and afk (it can run in the background)

let isCwClicked = false;

function clickElementsByClassNames() {
    const classNames = isCwClicked ? ['c W'] : ['c e'];
    isCwClicked = !isCwClicked; 

    classNames.forEach(className => {
        let element = document.getElementsByClassName(className)[0];
        if (element) {
            element.click();
            console.log(`Clicked element with class: ${className}`);
        } else {
            console.log(`Element with class: ${className} not found`);
        }
    });
}

setInterval(clickElementsByClassNames, 1000);
