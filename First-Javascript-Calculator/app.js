  function run7()
        {document.calculator.result.value+="7";}
    function run8()
        {document.calculator.result.value+="8";}
    function run9() 
        {document.calculator.result.value+="9";}
    function rundel()
        {document.calculator.result.value="";}
    function run4()
        {document.calculator.result.value+="4";}
    function run5()
        {document.calculator.result.value+="5";}
    function run6()
        {document.calculator.result.value+="6";}
    function rundivide()
        {document.calculator.result.value+="/";}
    function run1()
        {document.calculator.result.value+="1";}
    function run2()
        {document.calculator.result.value+="2";}
    function run3()
        {document.calculator.result.value+="3";}
    function runmultiply()
        {document.calculator.result.value+="*";}
    function runpoint()
        {document.calculator.result.value+=".";}
    function run0()
        {document.calculator.result.value+="0";}
    function runevalu()
        {document.calculator.result.value+="=";}
    function runminus()
        {document.calculator.result.value+="-";}
    function runplus()
        {document.calculator.result.value+="+";}
    function runpercent()
        {document.calculator.result.value+="%";}

    function evalu()
    {
        var evalo = eval(document.calculator.result.value)

        document.calculator.result.value=evalo;
    }
