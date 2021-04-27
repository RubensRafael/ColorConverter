# Color Converter

This project is one system that converts hexadecimal color code to rgb or rgba color code, and makes the invert too.

When you...
- [x] Click on color input
- [x] Change value of text input
- [x] Change alpha value 
- [x] Or change any RGB value, on second square...

The 'focus' event get the value of input modfied and calls an function, the really conveter.
The event handler, call the converter function every second after the event 'focus' occurs, she calls and send the parameters to converter function, but in the first case (hex to rgb) on alpha and text input it happens an verification, if the actual value of text input is not really hexadecimal code the converter not will be called, and the style of the text input is changed.
He have three paramaters :

1. The color code.
2. The alpha value.
3. One boolean value.

The third value is the key. If the call have origin on any input on the first square (Hex to RGB), this parameter will be set like True, when the call have origin on the second square(RGB to Hex), the value is False.
 
