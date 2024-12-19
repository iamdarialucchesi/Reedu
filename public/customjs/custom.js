export function handleScroll() {
    const gifOne = document.querySelector('.gif-one');
    const gifTwo = document.querySelector('.gif-two');
    const gifThree = document.querySelector('.gif-three');
    const gifFour = document.querySelector('.gif-four');
    const gifFive = document.querySelector('.gif-five');

    // Calculate the current scroll position and the page height
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // Trigger the animation when the user reaches the bottom of the page
    if (scrollPosition >= pageHeight - 450) {  // Adjust this value for some offset
        setTimeout(() => {
            gifFive.classList.add('myAnimation');
        }, 0);

        setTimeout(() => {
            gifOne.classList.add('myAnimation');
        }, 1000);

        setTimeout(() => {
            gifTwo.classList.add('myAnimation');
            gifThree.classList.add('myAnimation');
            gifFour.classList.add('myAnimation');
        }, 2000);
    }
}
