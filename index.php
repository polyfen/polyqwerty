<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- META General -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:type" content="website"/>
        <meta name="author"  content="The Poly Group"/>

        <!-- FAVICON -->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fe30b8">
        <meta name="msapplication-TileColor" content="#fe30b8">
        <meta name="theme-color" content="#fe30b8">

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
            document.addEventListener('DOMContentLoaded', function () {
            const buttons = document.getElementsByClassName('key-section')[0].querySelectorAll('button');


            buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                navigator.clipboard.writeText(button.innerText);
            });
            });
        }, false);
        </script>
    </head>
    <body class="light-mode">

        <header>
            <img alt="Poly Qwerty" src="imgs/polyqwerty.svg" height="35px" width="auto" target="_black">
            <a id="github" href="https://github.com/The-Poly-Group/polyqwerty"><img alt="Github" src="imgs/github.svg">open-source</a>
        </header>
        <div class="container">
            <h1 class="heading-1 align-center">Your keyboard’s assistant</h1>
            <h2 class="caption align-center"><span id="click">Click</span> on a character to copy it</h2>

            <section id="diacritics">
                <h2 class="heading-1">Diacritics</h2>
                <hr class="new align-center">

                <div class="key-section">

                <button id="grave-capital-a" class="key" title="Grave A">&#192;</button>
                <button id="grave-a" class="key" title="Grave a">&#224;</button>
                <button id="acute-capital-a" class="key" title="Acute A">&#193;</button>
                <button id="acute-a" class="key" title="Acute a">&#225;</button>
                <button id="circumflex-capital-a" class="key" title="Circumflex A">&#194;</button>
                <button id="circumflex-a" class="key" title="Circumflex a">&#226;</button>
                <button id="diaeresis-capital-a" class="key" title="Diaeresis A">&#196;</button>
                <button id="diaeresis-a" class="key" title="Diaeresis a">&#228;</button>
                <button id="acute-capital-ae" class="key" title="Acute AE">&#x01FC;</button>
                <button id="acute-ae" class="key" title="Acute ae">&#x01FD;</button>
                <button id="tilde-capital-a" class="key" title="Tilde A">&#195;</button>
                <button id="tilde-a" class="key" title="Tilde a">&#227;</button>
                <button id="ring-capital-a" class="key" title="Ring A">&#197;</button>
                <button id="ring-a" class="key" title="Ring a">&#229;</button>
                <button id="macron-capital-a" class="key" title="Macron A">&#256;</button>
                <button id="macron-a" class="key" title="Macron a">&#257;</button>

                <button id="grave-capital-e" class="key" title="Grave E">&#200;</button>
                <button id="grave-e" class="key" title="Grave e">&#232;</button>
                <button id="acute-capital-e" class="key" title="Acute E">&#201;</button>
                <button id="acute-e" class="key" title="Acute e">&#233;</button>
                <button id="circumflex-capital-e" class="key" title="Circumflex E">&#202;</button>
                <button id="circumflex-e" class="key" title="Circumflex e">&#234;</button>
                <button id="diaeresis-capital-e" class="key" title="Diaeresis E">&#203;</button>
                <button id="diaeresis-e" class="key" title="Diaeresis e">&#235;</button>
                <button id="macron-capital-e" class="key" title="Macron E">&#274;</button>
                <button id="macron-e" class="key" title="Macron e">&#275;</button>
                <button id="dot-above-capital-e" class="key" title="Dot Above E">&#278;</button>
                <button id="dot-above-e" class="key" title="Dot Above e">&#279;</button>
                <button id="ogonek-capital-e" class="key" title="Ogonek E">&#280;</button>
                <button id="ogonek-e" class="key" title="Ogonek e">&#281;</button>

                <button id="circumflex-capital-i" class="key" title="Circumflex I">&#206;</button>
                <button id="circumflex-i" class="key" title="Circumflex i">&#238;</button>
                <button id="diaeresis-capital-i" class="key" title="Diaeresis I">&#207;</button>
                <button id="diaeresis-i" class="key" title="Diaeresis i">&#239;</button>
                <button id="acute-capital-i" class="key" title="Acute I">&#205;</button>
                <button id="acute-i" class="key" title="Acute i">&#237;</button>
                <button id="macron-capital-i" class="key" title="Macron I">&#298;</button>
                <button id="macron-i" class="key" title="Macron i">&#299;</button>
                <button id="ogon-capital-i" class="key" title="Ogon I">&#302;</button>
                <button id="ogon-i" class="key" title="Ogon i">&#303;</button>
                <button id="grave-capital-i" class="key" title="Grave I">&#204;</button>
                <button id="grave-i" class="key" title="Grave i">&#236;</button>

                <button id="circumflex-capital-o" class="key" title="Circumflex O">&#212;</button>
                <button id="circumflex-o" class="key" title="Circumflex o">&#244;</button>
                <button id="diaeresis-capital-o" class="key" title="Diaeresis O">&#214;</button>
                <button id="diaeresis-o" class="key" title="Diaeresis o">&#246;</button>
                <button id="grave-capital-o" class="key" title="Grave O">&#210;</button>
                <button id="grave-o" class="key" title="Grave o">&#242;</button>
                <button id="acute-capital-o" class="key" title="Acute O">&#211;</button>
                <button id="acute-o" class="key" title="Acute o">&#243;</button>
                <button id="slash-capital-o" class="key" title="slash O">&#216;</button>
                <button id="slash-o" class="key" title="slash o">&#248;</button>
                <button id="macron-capital-o" class="key" title="Macron O">&#332;</button>
                <button id="macron-o" class="key" title="Macron o">&#333;</button>
                <button id="tilde-capital-o" class="key" title="Tilde O">&#213;</button>
                <button id="tilde-o" class="key" title="Tilde o">&#245;</button>

                <button id="circumflex-capital-u" class="key" title="Circumflex U">&#219;</button>
                <button id="circumflex-u" class="key" title="Circumflex u">&#251;</button>
                <button id="diaeresis-capital-u" class="key" title="Diaeresis U">&#220;</button>
                <button id="diaeresis-u" class="key" title="Diaeresis u">&#252;</button>
                <button id="grave-capital-u" class="key" title="Grave U">&#217;</button>
                <button id="grave-u" class="key" title="Grave u">&#249;</button>
                <button id="acute-capital-u" class="key" title="Acute U">&#218;</button>
                <button id="acute-u" class="key" title="Acute u">&#250;</button>
                <button id="macron-capital-u" class="key" title="Macron U">&#362;</button>
                <button id="macron-u" class="key" title="Macron u">&#363;</button>

                <button id="dot-over-capital-b" class="key" title="Dot Over B">&#7682;</button>
                <button id="dot-over-b" class="key" title="Dot over b">&#7683;</button>
                <button id="dot-below-capital-b" class="key" title="Dot Below B">&#7684;</button>
                <button id="dot-below-b" class="key" title="Dot below b">&#7685;</button>
                <button id="line-below-capital-b" class="key" title="Line Below B">&#7686;</button>
                <button id="line-below-b" class="key" title="Line below b">&#7687;</button>

                <button id="acute-capital-c" class="key" title="Acute C">&#262;</button>
                <button id="acute-c" class="key" title="Acute c">&#263;</button>
                <button id="caron-capital-c" class="key" title="Caron C">&#268;</button>
                <button id="caron-c" class="key" title="Caron c">&#269;</button>
                <button id="cedilla-capital-c" class="key" title="Cedilla C">&#199;</button>
                <button id="cedilla-c" class="key" title="Cedilla c">&#231;</button>
                <button id="cedilla-acute-capital-c" class="key" title="Cedilla Acute C">&#7688;</button>
                <button id="cedilla-acute-c" class="key" title="Cedilla Acute c">&#7689;</button>
                <button id="circumflex-capital-c" class="key" title="Circumflex C">&#264;</button>
                <button id="circumflex-c" class="key" title="Circumflex c">&#265;</button>
                <button id="dot-above-capital-c" class="key" title="Dot above C">&#266;</button>
                <button id="dot-above-c" class="key" title="Dot above c">&#267;</button>


                <button id="caron-capital-d" class="key" title="Caron D">&#270;</button>
                <button id="caron-d" class="key" title="Caron d">&#271;</button>
                <button id="cedilla-capital-d" class="key" title="Cedilla below D">&#7696;</button>
                <button id="cedilla-d" class="key" title="Cedilla d">&#7697;</button>
                <button id="circumflex-below-capital-d" class="key" title="circumflex below D">&#7698;</button>
                <button id="circumflex-below-d" class="key" title="circumflex below d">&#7699;</button>
                <button id="dot-above-capital-d" class="key" title="Dot above D">&#7690;</button>
                <button id="dot-above-d" class="key" title="Dot above d">&#7691;</button>
                <button id="dot-below-capital-d" class="key" title="Dot Below D">&#7692;</button>
                <button id="dot-below-d" class="key" title="Dot Below d">&#7693;</button>
                <button id="line-below-capital-d" class="key" title="Line below D">&#7694;</button>
                <button id="line-below-d" class="key" title="Line below d">&#7695;</button>

                <button id="acute-capital-g" class="key" title="Acute G">&#500;</button>
                <button id="acute-g" class="key" title="Acute g">&#501;</button>
                <button id="breve-capital-g" class="key" title="Breve G">&#286;</button>
                <button id="breve-g" class="key" title="Breve g">&#287;</button>
                <button id="caron-capital-g" class="key" title="Caron G">&#486;</button>
                <button id="caron-g" class="key" title="Caron g">&#487;</button>
                <button id="cedilla-capital-g" class="key" title="Cedilla G">&#290;</button>
                <button id="cedilla-g" class="key" title="Cedilla g">&#291;</button>
                <button id="circumflex-capital-g" class="key" title="Circumflex G">&#284;</button>
                <button id="circumflex-g" class="key" title="Circumflex g">&#285;</button>
                <button id="dot-above-capital-g" class="key" title="Dot G">&#288;</button>
                <button id="dot-above-g" class="key" title="Dot g">&#289;</button>
                <button id="macron-capital-g" class="key" title="Macron G">&#7712;</button>
                <button id="macron-g" class="key" title="Macron g">&#7713;</button>

                <button id=breve-below-capital-h class="key" title="Breve H">&#x1E2A;</button>
                <button id="breve-below-h" class="key" title="Breve h">&#x1E2B;</button>
                <button id="caron-capital-h" class="key" title="Caron H">&#x021E;</button>
                <button id="caron-h" class="key" title="Caron h">&#x021F;</button>
                <button id="cedilla-capital-h" class="key" title="Cedilla H">&#x1E28;</button>
                <button id="cedilla-h" class="key" title="Cedilla h">&#x1E29;</button>
                <button id="circumflex-capital-h" class="key" title="Circumflex H">&#x0124;</button>
                <button id="circumflex-h" class="key" title="Circumflex h">&#x0125;</button>
                <button id="diaeresis-capital-h" class="key" title="Diaeresis H">&#x1E26;</button>
                <button id="diaeresis-h" class="key" title="Diaeresis h">&#x1E27;</button>
                <button id="dot-above-capital-h" class="key" title="Dot Above H">&#x1E24;</button>
                <button id="dot-above-h" class="key" title="Dot Above h">&#x1E25;</button>
                <button id="dot-below-capital-h" class="key" title="Dot Below H">&#x1E22;</button>
                <button id="dot-below-h" class="key" title="Dot Below h">&#x1E23;</button>
                <button id="line-below-h" class="key" title="Line Below h">&#x1E96;</button>

                <button id="caron-capital-j" class="key" title="Caron J">&#x01F0;</button>
                <button id="circumflex-capital-j" class="key" title="Circumflex J">&#x0134;</button>
                <button id="circumflex-j" class="key" title="Circumflex j">&#x0135;</button>

                <button id="acute-capital-k" class="key" title="Acute K">&#x1E30;</button>
                <button id="caron-capital-k" class="key" title="Caron K">&#x01E8;</button>
                <button id="caron-k" class="key" title="Caron k">&#x01E9;</button>
                <button id="cedilla-capital-k" class="key" title="Cedilla K">&#x0136;</button> 
                <button id="cedilla-k" class="key" title="Cedilla k">&#x0137;</button>
                <button id="dot-below-capital-k" class="key" title="Dot Below K">&#x1E32;</button>
                <button id="dot-below-k" class="key" title="Dot Below k">&#x1E33;</button>
                <button id="line-below-capital-k" class="key" title="Line Below K">&#x1E34;</button>
                <button id="line-below-k" class="key" title="Line Below k">&#x1E35;</button>

                <button id="acute-capital-l" class="key" title="Acute L">&#x0139;</button>
                <button id="acute-l" class="key" title="Acute l">&#x013A;</button>	
                <button id="caron-capital-l" class="key" title="Caron L">&#x013D;</button>
                <button id="caron-l" class="key" title="Caron l">&#x013E;</button>
                <button id="cedilla-capital-l" class="key" title="Cedilla L">&#x013B;</button>
                <button id="cedilla-l" class="key" title="Cedilla l">&#x013C;</button>
                <button id="circumflex-below-capital-l" class="key" title="Circumflex Below L">&#x1E3C;</button>
                <button id="circumflex-below-l" class="key" title="Circumflex Below l">&#x1E3D;</button>
                <button id="dot-below-capital-l" class="key" title="Dot Below L">&#x1E36;</button>
                <button id="dot-below-l" class="key" title="Dot Below l">&#x1E37;</button>
                <button id="dot-below-macron-capital-l" class="key" title="Dot Below Macron L">&#x1E38;</button>
                <button id="dot-below-macron-l" class="key" title="Dot Below Macron l">&#x1E39;</button>
                <button id="line-below-capital-l" class="key" title="Line Below L">&#x1E3A;</button>
                <button id="line-below-l" class="key" title="Line Below l">&#x1E3B;</button>
                

               <button id="acute-capital-m" class="key" title="Acute M">&#x1E3E;</button>
               <button id="acute-m" class="key" title="Acute m">&#x1E3F;</button>
               <button id="dot-above-capital-m" class="key" title="Dot Above M">&#x1E40;</button>
               <button id="dot-above-m" class="key" title="Dot Above m">&#x1E41;</button>
               <button id="dot-below-capital-m" class="key" title="Dot Below M">&#x1E42;</button>
               <button id="dot-below-m" class="key" title="Dot Below m">&#x1E43;</button>

                <button id="acute-capital-n" class="key" title="Acute N">&#x0143;</button>
                <button id="acute-n" class="key" title="Acute n">&#x0144;</button>
                <button id="caron-capital-n" class="key" title="Caron N">&#x0147;</button>
                <button id="caron-n" class="key" title="Caron n">&#x0148;</button>
                <button id="cedilla-capital-n" class="key" title="Cedilla N">&#x0145;</button>
                <button id="cedilla-n" class="key" title="Cedilla n">&#x0146;</button>
                <button id="circumflex-below-capital-n" class="key" title="Circumflex Below N">&#x1E4A;</button>
                <button id="circumflex-below-n" class="key" title="Circumflex Below n">&#x1E4B;</button>
                <button id="dot-above-capital-n" class="key" title="Dot Above N">&#x1E44;</button>
                <button id="dot-above-n" class="key" title="Dot Above n">&#x1E45;</button>
                <button id="dot-below-capital-n" class="key" title="Dot Below N">&#x1E46;</button>
                <button id="dot-below-n" class="key" title="Dot Below n">&#x1E47;</button>
                <button id="n-capital-grave" class="key" title="Grave N">&#x01F8;</button>
                <button id="n-grave" class="key" title="Grave n">&#x01F9;</button>
                <button id="line-above-capital-n" class="key" title="Line Above N">&#x1E48;</button>
                <button id="line-above-n" class="key" title="Line Above n">&#x1E49;</button>
                <button id="tilde-capital-n" class="key" title="Tilde N">&#x00D1;</button>
                <button id="tilde-n" class="key" title="Tilde n">&#x00F1;</button>

                <button id="acute-capital-p" class="key" title="Acute P">&#x1E54;</button>
                <button id="acute-p" class="key" title="Acute p">&#x1E55;</button>
                <button id="dot-above-capital-p" class="key" title="Dot Above P">&#x1E56;</button>
                <button id="dot-above-p" class="key" title="Dot Above p">&#x1E57;</button>

                <button id="acute-capital-r" class="key" title="Acute R">&#x0154;</button>
                <button id="acute-r" class="key" title="Acute r">&#x0155;</button>
                <button id="caron-capital-r" class="key" title="Caron R">&#x0158;</button>
                <button id="caron-r" class="key" title="Caron r">&#x0159;</button>
                <button id="cedilla-capital-r" class="key" title="Cedilla R">&#x0156;</button>
                <button id="cedilla-r" class="key" title="Cedilla r">&#x0157;</button>
                <button id="dot-above-capital-r" class="key" title="Dot Above R">&#x1E58;</button>
                <button id="dot-above-r" class="key" title="Dot Above r">&#x1E59;</button>
                <button id="dot-below-capital-r" class="key" title="Dot Below R">&#x1E5A;</button>
                <button id="dot-below-r" class="key" title="Dot Below r">&#x1E5B;</button>
                <button id="dot-below-macron-capital-r" class="key" title="Dot Below Macron R">&#x1E5C;</button>
                <button id="dot-below-macron-r" class="key" title="Dot Below Macron r">&#x1E5D;</button>
                <button id="double-grave-capital-r" class="key" title="Double Grave R">&#x0210;</button>
                <button id="double-grave-r" class="key" title="Double Grave r">&#x0211;</button>
                <button id="inverted-breve-capital-r" class="key" title="Inverted Breve R">&#x0212;</button>
                <button id="inverted-breve-r" class="key" title="Inverted Breve r">&#x0213;</button>
                <button id="line-below-capital-r" class="key" title="Line Below R">&#x1E5E;</button>
                <button id="line-below-r" class="key" title="Line Below r">&#x1E5F;</button>

                <button id="acute-capital-s" class="key" title="Acute S">&#x015A;</button>
                <button id="acute-s" class="key" title="Acute s">&#x015B;</button>
                <button id="dot-above-acute-capital-s" class="key" title="Dot Above Acute S">&#x1E64;</button>
                <button id="dot-above-acute-s" class="key" title="Dot Above Acute s">&#x1E65;</button>
                <button id="caron-capital-s" class="key" title="Caron S">&#x0160;</button>
                <button id="caron-s" class="key" title="Caron s">&#x0161;</button>
                <button id="dot-above-caron-capital-s" class="key" title="Dot Above Caron S">&#x1E66;</button>
                <button id="dot-above-caron-s" class="key" title="Dot Above Caron s">&#x1E67;</button>
                <button id="cedilla-capital-s" class="key" title="Cedilla S">&#x015E;</button>
                <button id="cedilla-s" class="key" title="Cedilla s">&#x015F;</button>
                <button id="circumflex-capital-s" class="key" title="Circumflex S">&#x015C;</button>
                <button id="circumflex-s" class="key" title="Circumflex s">&#x015D;</button>
                <button id="comma-below-capital-s" class="key" title="Comma Below S">&#x0218;</button>
                <button id="comma-below-s" class="key" title="Comma Below s">&#x0219;</button>
                <button id="dot-above-capital-s" class="key" title="Dot Above S">&#x1E60;</button>
                <button id="dot-above-s" class="key" title="Dot Above s">&#x1E61;</button>
                <button id="dot-above-long-s" class="key" title="Dot Above Long S">&#x1E9B;</button>
                <button id="dot-below-capital-s" class="key" title="Dot Below S">&#x1E62;</button>
                <button id="dot-below-s" class="key" title="Dot Below s">&#x1E63;</button>
                <button id="dot-below-above-capital-s" class="key" title="Dot Below Above S">&#x1E68;</button>
                <button id="dot-below-above-s" class="key" title="Dot Below Above s">&#x1E69;</button>

                <button id="caron-capital-t" class="key" title="Caron T">&#x0164;</button>
                <button id="caron-t" class="key" title="Caron t">&#x0165;</button>
                <button id="cedilla-capital-t" class="key" title="Cedilla T">&#x0162;</button>
                <button id="cedilla-t" class="key" title="Cedilla t">&#x0163;</button>
                <button id="circumflex-capital-t" class="key" title="Circumflex T">&#x1E70;</button>
                <button id="circumflex-t" class="key" title="Circumflex t">&#x1E71;</button>
                <button id="comma-below-capital-t" class="key" title="Comma Below T">&#x021A;</button>
                <button id="comma-below-t" class="key" title="Comma Below t">&#x021B;</button>
                <button id="diaeresis-capital-t" class="key" title="Diaeresis T">&#x1E97;</button>
                <button id="dot-above-capital-t" class="key" title="Dot Above T">&#x1E6A;</button>
                <button id="dot-above-t" class="key" title="Dot Above t">&#x1E6B;</button>
                <button id="dot-below-capital-t" class="key" title="Dot Below T">&#x1E6C;</button>
                <button id="dot-below-t" class="key" title="Dot Below t">&#x1E6D;</button>
                <button id="line-below-capital-t" class="key" title="Line Below T">&#x1E6E;</button>
                <button id="line-below-t" class="key" title="Line Below t">&#x1E6F;</button>

                <button id="dot-below-capital-v" class="key" title="Dot Below V">&#x1E7E;</button>
                <button id="dot-below-v" class="key" title="Dot Below v">&#x1E7F;</button>
                <button id="tilde-capital-v" class="key" title="Tilde V">&#x1E7C;</button>
                <button id="tilde-v" class="key" title="Tilde v">&#x1E7D;</button>

                <button id="acute-capital-w" class="key" title="Acute W">&#x1E82;</button>
                <button id="acute-w" class="key" title="Acute w">&#x1E83;</button>
                <button id="circumflex-capital-w" class="key" title="Circumflex W">&#x0174;</button>
                <button id="circumflex-w" class="key" title="Circumflex w">&#x0175;</button>
                <button id="diaeresis-capital-w" class="key" title="Diaeresis W">&#x1E84;</button>
                <button id="diaeresis-w" class="key" title="Diaeresis w">&#x1E85;</button>
                <button id="dot-above-capital-w" class="key" title="Dot Above W">&#x1E86;</button>
                <button id="dot-above-w" class="key" title="Dot Above w">&#x1E87;</button>
                <button id="dot-below-capital-w" class="key" title="Dot Below W">&#x1E88;</button>
                <button id="dot-below-w" class="key" title="Dot Below w">&#x1E89;</button>
                <button id="grave-capital-w" class="key" title="Grave W">&#x1E80;</button>
                <button id="grave-w" class="key" title="Grave w">&#x1E81;</button>
                <button id="ring-w" class="key" title="Ring w">&#x1E98;</button>

                <button id="diaeresis-capital-x" class="key" title="Diaeresis X">&#x1E8C;</button>
                <button id="diaeresis-x" class="key" title="Diaeresis x">&#x1E8D;</button>
                <button id="dot-above-capital-x" class="key" title="Dot Above X">&#x1E8A;</button>
                <button id="dot-above-x" class="key" title="Dot Above x">&#x1E8B;</button>
                
                <button id="acute-capital-y" class="key" title="Acute Y">&#x00DD;</button>
                <button id="acute-y" class="key" title="Acute y">&#x00FD;</button>
                <button id="circumflex-capital-y" class="key" title="Circumflex Y">&#x0176;</button>
                <button id="circumflex-y" class="key" title="Circumflex y">&#x0177;</button>
                <button id="diaeresis-capital-y" class="key" title="Diaeresis Y">&#x0178;</button>
                <button id="diaeresis-y" class="key" title="Diaeresis y">&#x00FF;</button>
                <button id="dot-above-capital-y" class="key" title="Dot Above Y">&#x1E8E;</button>
                <button id="dot-above-y" class="key" title="Dot Above y">&#x1E8F;</button>
                <button id="dot-below-capital-y" class="key" title="Dot Below Y">&#x1EF4;</button>
                <button id="dot-below-y" class="key" title="Dot Below y">&#x1EF5;</button>
                <button id="grave-capital-y" class="key" title="Grave Y">&#x1EF2;</button>
                <button id="grave-y" class="key" title="Grave y">&#x1EF3;</button>
                <button id="hook-above-capital-y" class="key" title="Hook Above Y">&#x1EF6;</button>
                <button id="hook-above-y" class="key" title="Hook Above y">&#x1EF7;</button>
                <button id="macron-capital-y" class="key" title="Macron Y">&#x0232;</button>
                <button id="macron-y" class="key" title="Macron y">&#x0233;</button>
                <button id="ring-y" class="key" title="Ring y">&#x1E99;</button>
                <button id="tilde-capital-y" class="key" title="Tilde Y">&#x1EF8;</button>
                <button id="tilde-y" class="key" title="Tilde y">&#x1EF9;</button>

                <button id="acute-capital-z" class="key" title="Acute Z">&#x0179;</button>
                <button id="acute-z" class="key" title="Acute z">&#x017A;</button>
                <button id="caron-capital-z" class="key" title="Caron Z">&#x017D;</button>
                <button id="caron-z" class="key" title="Caron z">&#x017E;</button>
                <button id="circumflex-capital-z" class="key" title="Circumflex Z">&#x1E90;</button>
                <button id="circumflex-z" class="key" title="Circumflex z">&#x1E91;</button>
                <button id="dot-above-capital-z" class="key" title="Dot Above Z">&#x017B;</button>
                <button id="dot-above-z" class="key" title="Dot Above z">&#x017C;</button>
                <button id="dot-below-capital-z" class="key" title="Dot Below Z">&#x1E92;</button>
                <button id="dot-below-z" class="key" title="Dot Below z">&#x1E93;</button>
                <button id="line-below-capital-z" class="key" title="Line Below Z">&#x1E94;</button>
                <button id="line-below-z" class="key" title="Line Below z">&#x1E95;</button>

                
            </section>

           
        </div>
    </body>
</html>