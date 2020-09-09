//war in 3 parts
//From Jon's eyes
class Story {
    constructor(character, weapon) {
        this.character = character
        this.weapon = weapon
        this.scenes = [scene1, scene2, scene3]
        this.scene = null
        this.url = ""
        this.index = 0
    }
    pickscene() {
        this.scene = this.scenes[this.index]
        this.url = this.scene.intro
        document.querySelector("#scenename").innerHTML = `<h2> ${this.scene.name}</h2>`
        this.playvideo()
        this.index++
    }
    playvideo() {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        var video = document.getElementById('video');
        video.src = this.url
        video.play()
        video.addEventListener('play', function () {
            var $this = this; //cache
            (function loop() {
                if (!$this.paused && !$this.ended) {
                    ctx.drawImage($this, 0, 0, $this.width, $this.height);
                    setTimeout(loop, 1000 / 30); // drawing at 30fps
                }
            })();
        }, 0);
    }
}

class Scene {
    constructor(name, intro, decision1, decision2, video1, video2) {
        this.name = name
        this.intro = intro
        this.decision1 = decision1
        this.decision2 = decision2
        this.video1 = video1
        this.video2 = video2
    }

}
let scene1 = new Scene("Armies Assemble", "../video/scene 2_ dragon fight (1).mp4", "drogonattack", "flamingarrows", "../video/scene 2_ dragon fight (1).mp4", "../video/scene 2_ dragon fight (1).mp4")
let scene2 = new Scene("Viserion Attacks", "../video/scene 2_ viserion attack.mp4", "drogonattack", "flamingarrows", "../video/scene 2_ dragon fight (1).mp4", "../video/scene 2_ dragon fight (1).mp4")
let scene3 = new Scene("Army is exhausted", "../video/army exhausted.mp4", "refuel", "charge", "../video/drink.mp4", "../video/charge.mp4")
let scene4 = new Scene("Mormont Dies", "../video/mormont-dies.mp4", "grieve", "rage", "../video/grief.mp4", "../video/dragonrage.mp4")
let snowstory = new Story("Jon Snow", "Longclaw")
console.log(snowstory)







//$(function () {

//});

// document.querySelector("#fight").onclick( )
//$this.width, $this.height)