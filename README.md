# Color Converter

This project is one system that converts hexadecimal color code to rgb or rgba color code, and makes the invert too.

When you...
- [x] Click on color input
- [x] Change value of text input
- [x] Change alpha value 
- [x] Or change any RGB value, on second box...

The 'focus' event get the value of input modfied and calls an function, the real converter.
The event handler, call the converter function every second after the event 'focus' occurs, she calls and send the parameters to converter function, but this step is different in each case.
In the first case (hex to rgb), on range and text inputs it happens an verification, if the current value of text input isn't really hexadecimal code, the converter not will be called and the style of the text input is changed.
When the color input is modified, he changes the text input value to the current color input value.

In the second case (rgb to hex), all inputs behavior self same mode: they sends the concatenation of the three inputs, always in same order, at every second.
This time, the third parameter of the converter function is setted like 'false'.We'll talk more of the converter function now.


The converter function have three paramaters :

1. The color code.
2. The alpha value.
3. One boolean value.

The third value is the key. If the call have origin on any input on the first box (Hex to RGB), this parameter will be set like True, when the call have origin on the second box (RGB to Hex), the value is False. Anyway, the second parameter have one default value, prapared to receive (or not) the alpha value.

When he is called to convert hexadeciaml to rgb, he split the string on pairs, each one they are submitted to a count:

(first item of pair * 16) + sencond item of pair

But, how the letters are trasformed in numbers?
All item, in any pair is compared with a constant string *(var HEXASTRING = "0123456789abcdef")*, and the your value is finded by "indexOf" method.
After, the values go to the response, that includes the alpha value and what is missing *("rgb()"/"rgba()")*.


If the boolean value is false, the alpha value is ignored, and each value (red, green and blue) pass by two counts:

value / 16
value % 16 (get the rest of the division)
(here, this process is simplified, for learning effects)

They will be the first and the second item of each hexadecimal pair previously viewed.

Lastly, on all 'focus' event have one 'setInterval', he makes the calls in every second and ensure that the color boxes can change your background colors in real time.

Thanks for read and use this converter.
**"Special cases aren't special enough to break the rules."** Zen of python, line 8.

	
 

---

#Conversor de Cor

Esse projeto ?? um sistema que converte cor hexadecimal para rgb e rgba, e faz o inverso tamb??m

Quando voc??...
- [x] Clica no input de cor
- [x] Muda o valor do input de texto
- [x] Muda o valor Alpha
- [x] Ou muda qualquer valor RGB na segunda caixa...

O evento 'focus' obt??m o valor da entrada modificada e chama uma fun????o, o conversor real.
O tratador de eventos, chama a fun????o do conversor a cada segundo ap??s o evento 'focus' ocorrer, ela chama e envia os par??metros para a fun????o do conversor, mas essa etapa ?? diferente em cada caso.
No primeiro caso (hex para rgb), nas entradas de alpha e texto ocorre uma verifica????o, se o valor atual da entrada de texto n??o for realmente um c??digo hexadecimal, o conversor n??o ser?? chamado e o estilo da entrada de texto ser?? alterado .
Quando a entrada de cor ?? modificada, ele altera o valor de entrada de texto para o valor de entrada de cor atual.

No segundo caso (rgb para hex), todas as entradas se comportam do mesmo modo: enviam a concatena????o das tr??s entradas, sempre na mesma ordem, a cada segundo.
Desta vez, o terceiro par??metro da fun????o do conversor ?? definido como 'falso'. Falaremos mais sobre a fun????o do conversor agora.

A fun????o do conversor tem tr??s par??metros:
1. O c??digo de cores.
2. O valor alfa.
3. Um valor booleano


O terceiro valor ?? a chave. Se a chamada tiver origem em alguma entrada da primeira caixa (Hex para RGB), este par??metro ser?? definido como Verdadeiro, quando a chamada tiver origem na segunda caixa (RGB para Hex), o valor ser?? Falso. De qualquer forma, o segundo par??metro tem um valor padr??o, preparado para receber (ou n??o) o valor alfa.

Quando ?? chamado para converter hexadeciaml em rgb, ele divide a string em pares, cada um deles ?? submetido a uma contagem:

(primeiro item do par * 16) + segundo item do par

Mas, como as letras s??o transformadas em n??meros?
Todos os itens, em qualquer par, s??o comparados com uma string constante *(var HEXASTRING = "0123456789abcdef")* e o seu valor ?? encontrado pelo m??todo "indexOf".
Depois, os valores v??o para a resposta, que inclui o valor alfa e o que est?? faltando *("rgb()"/"rgba()")*.

Se o valor booleano for falso, o valor alfa ?? ignorado e cada valor (vermelho, verde e azul) passa por duas contagens:

valor / 16
valor% 16 (obt??m o resto da divis??o)
(aqui, este processo ?? simplificado, para efeitos de aprendizagem)

Eles ser??o o primeiro e o segundo item de cada par hexadecimal visualizado anteriormente.

Por fim, em todos os eventos 'focus' temos um 'setInterval', ele faz as chamadas a cada segundo e garante que as caixas de cores possam mudar as cores do seu fundo em tempo real.

Obrigado por ler e usar este conversor.
**"Casos especiais n??o s??o especiais o suficiente para quebrar as regras."** Zen of python, linha 8.

















  
