basic.forever(function () {
    serial.writeValue("P2", pins.digitalReadPin(DigitalPin.P2))
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.clearScreen()
    }
})
