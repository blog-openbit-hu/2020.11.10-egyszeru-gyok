let r = 0;
let a = 0;
let b = 0;
let num = 12;
let numS = "";
basic.forever(function () {
    serial.writeLine("What is the number?");
    numS = serial.readUntil(serial.delimiters(Delimiters.NewLine));
    num = parseFloat(numS);
    b = num;
    while(Math.abs(b - a) > 0.001){
        let tof = calculate_root(r);
        if(tof == true){
            break;
        }
    }
    serial.writeLine("")
    serial.writeNumber(r)
})
function operation(x: number): number{
    return x * x;
}
function calculate_root(r: number): boolean {
    r = ((a + b) / 2);
    if(operation(r) == num) {
        return true
    }
    if(operation(r) < num){
        a = r;
    }
    if(operation(r) > num) {
        b = r
    }
    return false
}