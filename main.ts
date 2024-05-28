input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
    for (let index = 0; index < 10; index++) {
        music.play(music.stringPlayable("C5 C C C5 C C C5 G ", 300), music.PlaybackMode.UntilDone)
    }
})
