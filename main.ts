function _2comp (num: number) {
    if (Math.floor(num / 128) == 1) {
        return num - 256
    } else {
        return num
    }
}
basic.showNumber(_2comp(128))
