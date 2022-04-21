/**
 * x=0 y=0 plot 0,0
 * 
 * x=0 y=1 plot 0,1
 * 
 * x=0 y=2 plot 0,2
 * 
 * x=0 y=3 plot 0,3
 * 
 * x=0 y=4 plot 0,4
 * 
 * x=1 y=0 plot 1,0
 * 
 * x=1 y=0 plot 1,1
 * 
 * x=1 y=1 plot 1,1
 * 
 * x=1 y=2 plot 1,2
 * 
 * x=1 y=3 plot 1,3
 * 
 * x=1 y=4 plot 1,4
 * 
 * and the same thing 2 times
 */
input.onButtonPressed(Button.A, function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(x, y)
            basic.pause(200)
        }
    }
})
basic.forever(function () {
	
})
