var _a, _b, _c;
var inputElem = document.getElementById('inputElem');
inputElem === null || inputElem === void 0 ? void 0 : inputElem.addEventListener('change', uploadFileInput.bind(this));
(_a = document.getElementById('btn_play')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', playSound.bind(this));
(_b = document.getElementById('btn_pause')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', pauseSound.bind(this));
(_c = document.getElementById('btn_stop')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', stopSound.bind(this));
var fileTestName = "Testname";
function uploadFileInput(event) {
    if (event.target.files) {
        var fileList = event.target.files;
        if (fileList && fileList.length > 0) {
            var file = fileList[0];
            var reader_1 = new FileReader();
            reader_1.addEventListener('load', function () {
                var fileResult = reader_1.result;
                //@ts-ignore
                PIXI.sound.add(fileTestName, {
                    url: fileResult,
                    preload: true,
                    loaded: function () {
                        console.log("Loaded");
                    }
                });
            });
            if (file) {
                reader_1.readAsDataURL(file);
            }
        }
    }
}
;
function playSound() {
    //@ts-ignore
    if (PIXI.sound.find(fileTestName).paused) {
        console.log("Resuming");
        //@ts-ignore
        PIXI.sound.resume(fileTestName);
    }
    else {
        console.log("Playing");
        //@ts-ignore
        PIXI.sound.play(fileTestName);
    }
}
function pauseSound() {
    console.log("Pausing");
    //@ts-ignore
    PIXI.sound.pause(fileTestName);
}
function stopSound() {
    console.log("Stoping");
    //@ts-ignore
    PIXI.sound.stopAll();
}
