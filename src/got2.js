//war in 3 parts
//From Jon's eyes
class Story {
    constructor(character, weapon) {
        this.character = character
        this.weapon = weapon
    }
}
let snowstory = new Story("Jon Snow", "Longclaw")
console.log(snowstory)
$(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var video = document.getElementById('video');

    video.addEventListener('play', function () {
        var $this = this; //cache
        (function loop() {
            if (!$this.paused && !$this.ended) {
                ctx.drawImage($this, 0, 0);
                setTimeout(loop, 1000 / 30); // drawing at 30fps
            }
        })();
    }, 0);
});