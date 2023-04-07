<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- META General -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:type" content="website"/>
        <meta name="author"  content="The Poly Group"/>

        <!-- FAVICON -->

        <!-- CSS General -->
        <link rel="stylesheet" href="https://polynucleus.com/styles.css">
        <link rel="stylesheet" href="app/css/styles.css">

        <!-- FONTS -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://polynucleus.com/styles.css" type="text/css">
        
        <!-- PAGE-SPECIFIC META start -->
        <meta property="og:title" content="Poly Qwerty"/>
        <meta property="og:url" content="https://polyqwerty.com"/>
        <meta name="keywords" content="" />
        <meta name="description" property="og:description" content="" />
        <meta property="og:image" content=""/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="Poly Qwerty" />
        <meta name="twitter:creator" content="@ThePolyGroupCo">
        <meta name="twitter:title" content="Your keyboard's assistant" />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="robots" content="index, follow">
        <!-- PAGE-SPECIFIC META end -->


        <script>
            function copyClipboard(target) {
                var copyText = document.getElementById(target).innerHTML;
                var input = document.createElement("input");
                input.value = copyText;
                document.body.appendChild(input);
                input.select();
                document.execCommand("copy");
                document.body.removeChild(input); 
            } 
        </script>
    </head>
    <body class="light-mode">

        <header>
            <img alt="Poly Qwerty" src="imgs/polyqwerty.svg" height="46px" width="auto" target="_black">
            <a href="https://github.com/The-Poly-Group/polyqwerty"><img alt="Github" src="imgs/github.svg">open-source</a>
        </header>
        <div class="container">
            <h1>Your keyboard’s assistant</h1>
            <small>Click on a character to copy it</small>

            <section id="diacritics">
                <h2>Diacritics</h2>
                <div class="key-section">
                    <button onclick="copyClipboard(getAttribute('id'))" id="grave-capital-a" class="key" title="Grave Capital A">&Agrave;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="grave-a" class="key" title="Grave a">&agrave;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="acute-capital-a" class="key" title="Acute Capital A">&Aacute;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="acute-a" class="key" title="Acute Capital A">&aacute;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="circumflex-capital-a" class="key" title="Circumflex Capital A">&Acirc;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="circumflex-a" class="key" title="Circumflex a">&acirc;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="diaeresis-capital-a" class="key" title="Diaeresis Capital A">&Auml;</button>
                    <button onclick="copyClipboard(getAttribute('id'))" id="diaeresis-a" class="key" title="Diaeresis A">&auml;</button>

                    
                </div>
                <p id="p1">Hello, I'm TEXT 1</p>
                <input type="text">
            </section>
        </div>
    </body>
</html>