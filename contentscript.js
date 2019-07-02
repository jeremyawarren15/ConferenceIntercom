kd.run(function () {
    kd.tick();
});

kd.SPACE.up(function() {
    mute();
})

kd.SPACE.down(function() {
    unmuteToSpeak();
})

function unmuteToSpeak() {
    var button = document.querySelectorAll('[aria-label="Turn off microphone"], [aria-label="Turn on microphone"]');
    button = button[0];
    var muted = button.getAttribute("data-is-muted") == "true";

    if (muted) {
        button.click();
    }
}

function mute() {
    var button = document.querySelectorAll('[aria-label="Turn off microphone"], [aria-label="Turn on microphone"]');
    button = button[0];

    button.click();
}

function getMuteButton() {
    muteButton = document.querySelectorAll('[aria-label="Turn off microphone"], [aria-label="Turn on microphone"]');
    muteButton = muteButton[0];

    if (muteButton == null || muteButton == undefined) {
        window.setTimeout(getMuteButton, 100);
    } else {
        var muted = muteButton.getAttribute("data-is-muted") == "true";

        if (!muted) { // Sets mute to true by default
            muteButton.click();
        }

        return muteButton;
    }
}

getMuteButton();