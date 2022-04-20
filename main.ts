radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 80)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 80)
    }
    if (receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (receivedNumber == 4) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    }
    if (receivedNumber == 6) {
        maqueen.motorStop(maqueen.Motors.M2)
    }
    if (receivedNumber == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    }
    if (receivedNumber == 8) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
    }
    if (receivedNumber == 9) {
        maqueen.motorStop(maqueen.Motors.M1)
    }
})
radio.setGroup(5555)
