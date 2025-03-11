const headerHTML = `
<header>
    <nav>
        <a href="index.html">Future Market</a> &nbsp;|&nbsp; 
        <a href="calculator.html">Calculator</a>
        <a href="land-area-calc.html">Land Area Calc</a>
    </nav>
</header>`

header = document.querySelector('header')
header.outerHTML = headerHTML
