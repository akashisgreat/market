const headerHTML = ` <header> <nav>
<a href="index.html">Future Market</a> &nbsp;|&nbsp; <a href="nav-price.html">NAV Price</a> &nbsp;|&nbsp; <a
    href="calculator.html">Calculator</a>
</nav></header>`

header = document.querySelector('header')

header.outerHTML = headerHTML