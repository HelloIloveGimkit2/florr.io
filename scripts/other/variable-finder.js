(async function () {
    let windowProperties = [];

    for (var b in window) {
        if (window.hasOwnProperty(b)) {
            windowProperties.push(b);
        }
    }
    const delay = 3000
    let propertiesString = windowProperties.join("\n");
    const delay1 = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay1(delay); // modify this to a time comfortable for you
    // you must focus on the window one second after you execute this script
    // if you are in a modern browser such as chrome
    try {
        await navigator.clipboard.writeText(propertiesString);
        console.log('Window properties copied to clipboard after ' + delay + ' seconds.');
    } catch (err) {
        console.error('Failed to copy to clipboard:' , err);
    }
})();
