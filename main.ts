input.onButtonPressed(Button.A, function () {
    angle = 110
    pins.servoWritePin(AnalogPin.P0, angle)
    led.stopAnimation()
    basic.pause(800)
    angle = 85
    pins.servoWritePin(AnalogPin.P0, angle)
})
input.onButtonPressed(Button.B, function () {
    angle = 70
    pins.servoWritePin(AnalogPin.P0, angle)
    led.stopAnimation()
    basic.pause(800)
    angle = 85
    pins.servoWritePin(AnalogPin.P0, angle)
})
let angle = 0
angle = 85
pins.servoWritePin(AnalogPin.P0, angle)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
