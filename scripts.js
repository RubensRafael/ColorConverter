
var HEXASTRINGS = '0123456789abcdef#'
var hexColor = document.getElementById("hexcolor-input")
var hexText  = document.getElementById("hextext-input")
var hexAlpha = document.getElementById("hexalpha-input")
var hexBox = document.getElementById("a-colorbox")
var hexDisplay = document.getElementById("a-display")

var rgbRed = document.getElementById("rgb-red-input")
var rgbGreen = document.getElementById("rgb-green-input")
var rgbBlue = document.getElementById("rgb-blue-input")
var rgbBox = document.getElementById("b-colorbox")
var rgbDisplay = document.getElementById("b-display")






function isHex(){
    if ((hexText.value[0] == '#' && hexText.value.length == 7) || (hexText.value.length == 6 && !(hexText.value[0] == '#'))){
            
        let str = hexText.value.toLowerCase()
        for (var i = 0; i < str.length; i++) {

            if (HEXASTRINGS.indexOf(str[i]) == -1){
                return false
            } 
        } return true
    }
    else{  
        return false
    } 
}
function Convert(color,alpha = 1,hexToRGB){
    if (hexToRGB == true){
        let rgb = []

        let r = (HEXASTRINGS.indexOf(color[0]) * 16) + HEXASTRINGS.indexOf(color[1])
        let g = (HEXASTRINGS.indexOf(color[2]) * 16) + HEXASTRINGS.indexOf(color[3])
        let b = (HEXASTRINGS.indexOf(color[4]) * 16) + HEXASTRINGS.indexOf(color[5])

        rgb.push(r,g,b)
        

        hexBox.style.border = 'none'
        hexBox.style.backgroundColor = `rgba( ${rgb[0]},${rgb[1]},${rgb[2]}, ${alpha})`
        let response = '\n' +  `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` + '|' + `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`
        hexDisplay.innerHTML =  response
        

            
    }
    else{
        let box =[]
        let hex = ''
        let rgb = color.split('-') 
        box.push(
        Math.floor((parseInt(rgb[0],10) / 16)),
        (parseInt(rgb[0],10) % 16),
        Math.floor((parseInt(rgb[1],10) / 16)), 
        (parseInt(rgb[1],10) % 16),
        Math.floor((parseInt(rgb[2],10) / 16)),
        (parseInt(rgb[2],10) % 16))

        
        hex = hex + HEXASTRINGS[box[0]]
        hex = hex + HEXASTRINGS[box[1]]
        hex = hex + HEXASTRINGS[box[2]]
        hex = hex + HEXASTRINGS[box[3]]
        hex = hex + HEXASTRINGS[box[4]]
        hex = hex + HEXASTRINGS[box[5]]
        
        
        console.log(hex)
        rgbBox.style.border = 'none'
        rgbBox.style.backgroundColor = '#' + hex
        rgbDisplay.innerHTML = '\n' + '#' + hex
        
    }
}

hexColor.addEventListener('focus', function () {

    function hexColorChange (){
        
        hexText.value = hexColor.value
        Convert(hexColor.value.slice(1), hexAlpha.value / 100, true)
    } 
    
    let interval = setInterval(hexColorChange,1000)
    
    hexColor.addEventListener('blur', function () {
    clearInterval(interval)})
})


hexText.addEventListener('focus', function () {
    let interval = setInterval(hexTextChange,1000)
    function hexTextChange (){

       if (isHex()){
        hexText.style.background = 'white'
        hexText.style.color = 'black'
        hexColor.value = '#' + hexText.value
        
        hexText.value[0] == '#' ? Convert(hexText.value.slice(1), hexAlpha.value / 100, true) : Convert(hexText.value, hexAlpha.value / 100, true)
        
        
       
        
       }
       else{
        
        hexText.style.background = 'red'
        hexText.style.color = 'white'
        hexDisplay.innerHTML = '\n' + "..."
        
       }
         
    } 
    
    
    
   hexText.addEventListener('blur', function () {
    clearInterval(interval)})
})

hexAlpha.addEventListener('focus', function(){
    let interval = setInterval(hexAlphaChange,1000)
    
    function hexAlphaChange(){
         if(isHex()){
            document.getElementById('alpha-label').innerHTML= 'ALPHA: ' + '<p style=" display: inline; color: white; background-color: black;padding:1px;">' + hexAlpha.value/100 + '</p>'
            hexText.value[0] == '#' ? Convert(hexText.value.slice(1), hexAlpha.value / 100, true) : Convert(hexText.value, hexAlpha.value / 100, true)
            
        }
    }

    hexAlpha.addEventListener('blur', function () {
        clearInterval(interval)})
})


rgbRed.addEventListener('focus', function(){
    let interval = setInterval(rgbRedChange,1000)
    
    function rgbRedChange(){
        document.getElementsByClassName('rgblabel')[0].innerHTML = 'RED: ' + '<p style=" display: inline; color: white; background-color: red;padding:1px;">' + rgbRed.value + '</p>'
        Convert(`${rgbRed.value}-${rgbGreen.value}-${rgbBlue.value}`,null,false)
    }

    rgbRed.addEventListener('blur', function () {
        clearInterval(interval)})
})

rgbGreen.addEventListener('focus', function(){
    let interval = setInterval(rgbGreenChange,1000)
    
    function rgbGreenChange(){
        document.getElementsByClassName('rgblabel')[1].innerHTML = 'GREEN: ' + '<p style=" display: inline; color: white; background-color: green;padding:1px;">' + rgbGreen.value + '</p>'
        Convert(`${rgbRed.value}-${rgbGreen.value}-${rgbBlue.value}`,null,false)
    }

    rgbGreen.addEventListener('blur', function () {
        clearInterval(interval)})
})

rgbBlue.addEventListener('focus', function(){
    let interval = setInterval(rgbBlueChange,1000)
    
    function rgbBlueChange(){
        document.getElementsByClassName('rgblabel')[2].innerHTML = 'BLUE: ' + '<p style=" display: inline; color: white; background-color: blue; padding:1px;">' + rgbBlue.value + '</p>'
        Convert(`${rgbRed.value}-${rgbGreen.value}-${rgbBlue.value}`,null,false)
    }

    rgbBlue.addEventListener('blur', function () {
        clearInterval(interval)})
})







