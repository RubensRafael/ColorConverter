
var HEXASTRINGS = '0123456789abcdef#'
function isHex(value){
    if ((value[0] == '#' && value.length == 7) || (value.length == 6 && !(value[0] == '#'))){
            
        let str = value.toLowerCase()
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

const app = Vue.createApp({
  
  data(){
    return {color : '000000',alpha:100}

  },
  computed:{
    rgbResult(){

      if(isHex(this.color)){
        let hexcolor = this.color[0] === '#' ? this.color.slice(1) : this.color
        let rgb = []
      
              let r = (HEXASTRINGS.indexOf(hexcolor[0]) * 16) + HEXASTRINGS.indexOf(hexcolor[1])
              let g = (HEXASTRINGS.indexOf(hexcolor[2]) * 16) + HEXASTRINGS.indexOf(hexcolor[3])
              let b = (HEXASTRINGS.indexOf(hexcolor[4]) * 16) + HEXASTRINGS.indexOf(hexcolor[5])
      
              rgb.push(r,g,b)
              
      
              //hexBox.style.border = 'none'
              //hexBox.style.backgroundColor = `rgba( ${rgb[0]},${rgb[1]},${rgb[2]}, ${alpha})`
              return '\n' +  `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` + '|' + `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${this.alpha/100})`
              //hexDisplay.innerHTML =  response
            }else{
              return ''
            }
    },
    setBackground(){
      return this.rgbResult.split('|')[1]
    },
    hexTextStyle(){
        if(isHex(this.color)){
          return{
                    backgroundColor : 'white',
                    color : 'black'
                  }
          
        }else{
          return { 
                    backgroundColor : 'red',
                    color : 'white'
                  }
        }
    }
  }

}).mount('#hex-to-rgb')



const app2 = Vue.createApp({
  data(){
    return {
      red : 0,
      green: 0,
      blue: 0
    }
  },
   computed : {
     hexResult(){
       
        let rgbBox =[]
        
        
        rgbBox.push(
        Math.floor((parseInt(this.red,10) / 16)),
        (parseInt(this.red,10) % 16),
        Math.floor((parseInt(this.green,10) / 16)), 
        (parseInt(this.green,10) % 16),
        Math.floor((parseInt(this.blue,10) / 16)),
        (parseInt(this.blue,10) % 16))
        console.log("#" + rgbBox.map((item)=>HEXASTRINGS[item]).join(''))
        return "\n#" + rgbBox.map((item)=>HEXASTRINGS[item]).join('')
     },
    setBackground(){
      return this.hexResult
    },
     redLabelStyle(){
        return{
          display: "inline",
          color: "white",
          backgroundColor: `rgb(${this.red},0,0)`,
          padding:"1px"
        }
     },
     greenLabelStyle(){
        return{
          display: "inline",
          color: "white",
          backgroundColor: `rgb(0,${this.green},0)`,
          padding:"1px"
        }
     },
     blueLabelStyle(){
        return{
          display: "inline",
          color: "white",
          backgroundColor: `rgb(0,0,${this.blue})`,
          padding:"1px"
        }
     }
   }
  
  
}).mount('#rgb-to-hex')





