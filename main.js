window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

console.log("Stuff begins happening 7");


const rollTriggeredCallback = function (number) {
    console.log("Received roll: " + number)

    if (number <= 1) {
        playAudio()
    }
}

const playAudio = function () {
    const audio = new Audio('https://cdn.discordapp.com/attachments/703600990275764344/713065937892409344/RIP_EARS_ORGASM.mp3');
    audio.play();
}

const chat = document.querySelector("#textchat > div:nth-child(2)")


// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type !== 'childList') {
            continue;
        }
        for (let node of mutation.addedNodes) {
            // const rollResult = node.querySelector(".rolled").innerHTML
            //
            // const rollResultAsNumber = parseInt(rollResult)
            //
            // if (!isNaN(rollResultAsNumber)) {
            //     rollTriggeredCallback(rollResultAsNumber)
            // }

            const rollResult = node.querySelector(".fullfail")

            if (rollResult != null) {
                playAudio()
            }
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(chat, config);


// // Later, you can stop observing
// observer.disconnect();
