const diacritics = [
    {
        id: "grave-capital-a",
        dataTitle: "Grave A",
        text: "&#192;"
    },
    {
        id: "grave-a",
        dataTitle: "Grave a",
        text: "&#224;"
    },
    {
        id: "acute-capital-a",
        dataTitle: "Acute A",
        text: "&#193;"
    },
    {
        id: "acute-a",
        dataTitle: "Acute a",
        text: "&#225;"
    },
    {
        id: "circumflex-capital-a",
        dataTitle: "Circumflex A",
        text: "&#194;"
    },
    {
        id: "circumflex-a",
        dataTitle: "Circumflex a",
        text: "&#226;"
    },
    {
        id: "diaeresis-capital-a",
        dataTitle: "Diaeresis A",
        text: "&#196;"
    },
    {
        id: "diaeresis-a",
        dataTitle: "Diaeresis a",
        text: "&#228;"
    },
    {
        id: "acute-capital-ae",
        dataTitle: "Acute AE",
        text: "&#x01FC;"
    },
    {
        id: "acute-ae",
        dataTitle: "Acute ae",
        text: "&#x01FD;"
    },
    {
        id: "tilde-capital-a",
        dataTitle: "Tilde A",
        text: "&#195;"
    },
    {
        id: "tilde-a",
        dataTitle: "Tilde a",
        text: "&#227;"
    },
    {
        id: "ring-capital-a",
        dataTitle: "Ring A",
        text: "&#197;"
    },
    {
        id: "ring-a",
        dataTitle: "Ring a",
        text: "&#229;"
    },
    {
        id: "macron-capital-a",
        dataTitle: "Macron A",
        text: "&#256;"
    },
    {
        id: "macron-a",
        dataTitle: "Macron a",
        text: "&#257;"
    },
    {
        id: "grave-capital-e",
        dataTitle: "Grave E",
        text: "&#200;"
    },
    {
        id: "grave-e",
        dataTitle: "Grave e",
        text: "&#232;"
    },
    {
        id: "acute-capital-e",
        dataTitle: "Acute E",
        text: "&#201;"
    },
    {
        id: "acute-e",
        dataTitle: "Acute e",
        text: "&#233;"
    },
    {
        id: "circumflex-capital-e",
        dataTitle: "Circumflex E",
        text: "&#202;"
    },
    {
        id: "circumflex-e",
        dataTitle: "Circumflex e",
        text: "&#234;"
    },
    {
        id: "diaeresis-capital-e",
        dataTitle: "Diaeresis E",
        text: "&#203;"
    },
    {
        id: "diaeresis-e",
        dataTitle: "Diaeresis e",
        text: "&#235;"
    },
    {
        id: "macron-capital-e",
        dataTitle: "Macron E",
        text: "&#274;"
    },
    {
        id: "macron-e",
        dataTitle: "Macron e",
        text: "&#275;"
    },
    {
        id: "dot-above-capital-e",
        dataTitle: "Dot above E",
        text: "&#278;"
    },
    {
        id: "dot-above-e",
        dataTitle: "Dot above e",
        text: "&#279;"
    },
    {
        id: "ogonek-capital-e",
        dataTitle: "Ogonek E",
        text: "&#280;"
    },
    {
        id: "ogonek-e",
        dataTitle: "Ogonek e",
        text: "&#281;"
    },
    {
        id: "circumflex-capital-i",
        dataTitle: "Circumflex I",
        text: "&#206;"
    },
    {
        id: "circumflex-i",
        dataTitle: "Circumflex i",
        text: "&#238;"
    },
    {
        id: "diaeresis-capital-i",
        dataTitle: "Diaeresis I",
        text: "&#207;"
    },
    {
        id: "diaeresis-i",
        dataTitle: "Diaeresis i",
        text: "&#239;"
    },
    {
        id: "acute-capital-i",
        dataTitle: "Acute I",
        text: "&#205;"
    },
    {
        id: "acute-i",
        dataTitle: "Acute i",
        text: "&#237;"
    },
    {
        id: "macron-capital-i",
        dataTitle: "Macron I",
        text: "&#298;"
    },
    {
        id: "macron-i",
        dataTitle: "Macron i",
        text: "&#299;"
    },
    {
        id: "ogon-capital-i",
        dataTitle: "Ogon I",
        text: "&#302;"
    },
    {
        id: "ogon-i",
        dataTitle: "Ogon i",
        text: "&#303;"
    },
    {
        id: "grave-capital-i",
        dataTitle: "Grave I",
        text: "&#204;"
    },
    {
        id: "grave-i",
        dataTitle: "Grave i",
        text: "&#236;"
    },
    {
        id: "circumflex-capital-o",
        dataTitle: "Circumflex O",
        text: "&#212;"
    },
    {
        id: "circumflex-o",
        dataTitle: "Circumflex o",
        text: "&#244;"
    },
    {
        id: "diaeresis-capital-o",
        dataTitle: "Diaeresis O",
        text: "&#214;"
    },
    {
        id: "diaeresis-o",
        dataTitle: "Diaeresis o",
        text: "&#246;"
    },
    {
        id: "grave-capital-o",
        dataTitle: "Grave O",
        text: "&#210;"
    },
    {
        id: "grave-o",
        dataTitle: "Grave o",
        text: "&#242;"
    },
    {
        id: "acute-capital-o",
        dataTitle: "Acute O",
        text: "&#211;"
    },
    {
        id: "acute-o",
        dataTitle: "Acute o",
        text: "&#243;"
    },
    {
        id: "slash-capital-o",
        dataTitle: "slash O",
        text: "&#216;"
    },
    {
        id: "slash-o",
        dataTitle: "slash o",
        text: "&#248;"
    },
    {
        id: "macron-capital-o",
        dataTitle: "Macron O",
        text: "&#332;"
    },
    {
        id: "macron-o",
        dataTitle: "Macron o",
        text: "&#333;"
    },
    {
        id: "tilde-capital-o",
        dataTitle: "Tilde O",
        text: "&#213;"
    },
    {
        id: "tilde-o",
        dataTitle: "Tilde o",
        text: "&#245;"
    },
    {
        id: "circumflex-capital-u",
        dataTitle: "Circumflex Capital U",
        text: "&#219;"
    },
    {
        id: "circumflex-u",
        dataTitle: "Circumflex u",
        text: "&#251;"
    }, {
        id: "diaeresis-capital-u",
        dataTitle: "Diaeresis U",
        text: "&#220;"
    },
    {
        id: "diaeresis-u",
        dataTitle: "Diaeresis u",
        text: "&#252;"
    }, {
        id: "grave-capital-u",
        dataTitle: "Grave U",
        text: "&#217;"
    },
    {
        id: "grave-u",
        dataTitle: "Grave u",
        text: "&#249;"
    }, {
        id: "acute-capital-u",
        dataTitle: "Acute U",
        text: "&#218;"
    },
    {
        id: "acute-u",
        dataTitle: "Acute u",
        text: "&#250;"
    }, {
        id: "macron-capital-u",
        dataTitle: "Macron U",
        text: "&#362;"
    },
    {
        id: "macron-u",
        dataTitle: "Macron u",
        text: "&#363;"
    }, {
        id: "dot-above-capital-b",
        dataTitle: "Dot above B",
        text: "&#7682;"
    },
    {
        id: "dot-above-b",
        dataTitle: "Dot above b",
        text: "&#7683;"
    }, {
        id: "dot-below-capital-b",
        dataTitle: "Dot below B",
        text: "&#7684;"
    },
    {
        id: "dot-below-b",
        dataTitle: "Dot below b",
        text: "&#7685;"
    }, {
        id: "line-below-capital-b",
        dataTitle: "Line below B",
        text: "&#7686;"
    },
    {
        id: "line-below-b",
        dataTitle: "Line below b",
        text: "&#7687;"
    }, {
        id: "acute-capital-c",
        dataTitle: "Acute C",
        text: "&#262;"
    },
    {
        id: "acute-c",
        dataTitle: "Acute c",
        text: "&#263;"
    }, {
        id: "caron-capital-c",
        dataTitle: "Caron C",
        text: "&#268;"
    },
    {
        id: "caron-c",
        dataTitle: "Caron c",
        text: "&#269;"
    }, {
        id: "cedilla-capital-c",
        dataTitle: "Cedilla C",
        text: "&#199;"
    },
    {
        id: "cedilla-c",
        dataTitle: "Cedilla c",
        text: "&#231;"
    }, {
        id: "cedilla-acute-capital-c",
        dataTitle: "Cedilla Acute C",
        text: "&#7688;"
    },
    {
        id: "cedilla-acute-c",
        dataTitle: "Cedilla Acute c",
        text: "&#7689;"
    }, {
        id: "circumflex-capital-c",
        dataTitle: "Circumflex C",
        text: "&#264;"
    }, {
        id: "circumflex-c",
        dataTitle: "Circumflex c",
        text: "&#265;"
    }, {
        id: "dot-above-capital-c",
        dataTitle: "Dot above C",
        text: "&#266;"
    }, {
        id: "dot-above-c",
        dataTitle: "Dot above c",
        text: "&#267;"
    }, {
        id: "caron-capital-d",
        dataTitle: "Caron D",
        text: "&#270;"
    }, {
        id: "caron-d",
        dataTitle: "Caron d",
        text: "&#271;"
    }, {
        id: "cedilla-capital-d",
        dataTitle: "Cedilla below D",
        text: "&#7696;"
    }, {
        id: "cedilla-d",
        dataTitle: "Cedilla d",
        text: "&#7697;"
    }, {
        id: "circumflex-below-capital-d",
        dataTitle: "circumflex below D",
        text: "&#7698;"
    }, {
        id: "circumflex-below-d",
        dataTitle: "circumflex below d",
        text: "&#7699;"
    }, {
        id: "dot-above-capital-d",
        dataTitle: "Dot above D",
        text: "&#7690;"
    }, {
        id: "dot-above-d",
        dataTitle: "Dot above d",
        text: "&#7691;"
    }, {
        id: "dot-below-capital-d",
        dataTitle: "Dot below D",
        text: "&#7692;"
    },
    {
        id: "dot-below-d",
        dataTitle: "Dot below d",
        text: "&#7693;"
    }, {
        id: "line-below-capital-d",
        dataTitle: "Line below D",
        text: "&#7694;"
    }, {
        id: "line-below-d",
        dataTitle: "Line below d",
        text: "&#7695;"
    }, {
        id: "stroke-capital-d",
        dataTitle: "Stroke D",
        text: "&#272;"
    }, {
        id: "stroke-d",
        dataTitle: "Stroke d",
        text: "&#273;"
    },{
        id: "caron-capital-d",
        dataTitle: "Caron D",
        text: "&#270;"
    },{
        id: "caron-d",
        dataTitle: "Caron d",
        text: "&#271;"
    }, {
        id: "acute-capital-g",
        dataTitle: "Acute G",
        text: "&#500;"
    }, {
        id: "acute-g",
        dataTitle: "Acute g",
        text: "&#501;"
    }, {
        id: "breve-capital-g",
        dataTitle: "Breve G",
        text: "&#286;"
    },
    {
        id: "breve-g",
        dataTitle: "Breve g",
        text: "&#287;"
    }, {
        id: "caron-capital-g",
        dataTitle: "Caron G",
        text: "&#486;"
    },
    {
        id: "caron-g",
        dataTitle: "Caron g",
        text: "&#487;"
    }, {
        id: "cedilla-capital-g",
        dataTitle: "Cedilla G",
        text: "&#290;"
    },
    {
        id: "cedilla-g",
        dataTitle: "Cedilla g",
        text: "&#291;"
    }, {
        id: "circumflex-capital-g",
        dataTitle: "Circumflex G",
        text: "&#284;"
    },
    {
        id: "circumflex-g",
        dataTitle: "Circumflex g",
        text: "&#285;"
    }, {
        id: "dot-above-capital-g",
        dataTitle: "Dot G",
        text: "&#288;"
    },
    {
        id: "dot-above-g",
        dataTitle: "Dot g",
        text: "&#289;"
    }, {
        id: "macron-capital-g",
        dataTitle: "Macron G",
        text: "&#7712;"
    },
    {
        id: "macron-g",
        dataTitle: "Macron g",
        text: "&#7713;"
    }, {
        id: "breve-below-capital-h",
        dataTitle: "Breve H",
        text: "&#x1E2A;"
    }, {
        id: "breve-below-h",
        dataTitle: "Breve h",
        text: "&#x1E2B;"
    }, {
        id: "caron-capital-h",
        dataTitle: "Caron H",
        text: "&#x021E;"
    },
    {
        id: "caron-h",
        dataTitle: "Caron h",
        text: "&#x021F;"
    }, {
        id: "cedilla-capital-h",
        dataTitle: "Cedilla H",
        text: "&#x1E28;"
    },
    {
        id: "cedilla-h",
        dataTitle: "Cedilla h",
        text: "&#x1E29;"
    }, {
        id: "circumflex-capital-h",
        dataTitle: "Circumflex H",
        text: "&#x0124;"
    },
    {
        id: "circumflex-h",
        dataTitle: "Circumflex h",
        text: "&#x0125;"
    },
    {
        id: "diaeresis-capital-h",
        dataTitle: "Diaeresis H",
        text: "&#x1E26;"
    },
    {
        id: "diaeresis-h",
        dataTitle: "Diaeresis h",
        text: "&#x1E27;"
    },
    {
        id: "dot-below-capital-h",
        dataTitle: "Dot below H",
        text: "&#x1E24;"
    },
    {
        id: "dot-below-h",
        dataTitle: "Dot below h",
        text: "&#x1E25;"
    },
    {
        id: "dot-above-capital-h",
        dataTitle: "Dot above H",
        text: "&#x1E22;"
    },
    {
        id: "dot-above-h",
        dataTitle: "Dot above h",
        text: "&#x1E23;"
    },



    {
        id: "line-below-h",
        dataTitle: "Line below h",
        text: "&#x1E96"
    },
    {
        id: "caron-j",
        dataTitle: "Caron j",
        text: "&#x01F0"
    },
    {
        id: "circumflex-capital-j",
        dataTitle: "Circumflex J",
        text: "&#x0134"
    },
    {
        id: "circumflex-j",
        dataTitle: "Circumflex j",
        text: "&#x0135"
    },
    {
        text: "&#x1E30;",
        dataTitle: "Acute Capital K",
        id: "acute-capital-k"
    },
    {
        text: "&#x01E8;",
        dataTitle: "Caron Capital K",
        id: "caron-capital-k"
    },
    {
        text: "&#x01E9;",
        dataTitle: "Caron k",
        id: "caron-k"
    },
    {
        text: "&#x0136;",
        dataTitle: "Cedilla Capital K",
        id: "cedilla-capital-k"
    },
    {
        text: "&#x0137;",
        dataTitle: "Cedilla k",
        id: "cedilla-k"
    },
    {
        text: "&#x1E32;",
        dataTitle: "Dot below Capital K",
        id: "dot-below-capital-k"
    },
    {
        text: "&#x1E33;",
        dataTitle: "Dot below k",
        id: "dot-below-k"
    },
    {
        text: "&#x1E34;",
        dataTitle: "Line below Capital K",
        id: "line-below-capital-k"
    },
    {
        text: "&#x1E35;",
        dataTitle: "Line below k",
        id: "line-below-k"
    },
    {
        text: "&#x0139;",
        dataTitle: "Acute Capital L",
        id: "acute-capital-l"
    },
    {
        text: "&#x013A;",
        dataTitle: "Acute l",
        id: "acute-l"
    },
    {
        text: "&#x013D;",
        dataTitle: "Caron Capital L",
        id: "caron-capital-l"
    },
    {
        text: "&#x013E;",
        dataTitle: "Caron l",
        id: "caron-l"
    },
    {
        text: "&#x013B;",
        dataTitle: "Cedilla Capital L",
        id: "cedilla-capital-l"
    },
    {
        text: "&#x013C;",
        dataTitle: "Cedilla l",
        id: "cedilla-l"
    },
    {
        text: "&#x1E3C;",
        dataTitle: "Circumflex below Capital L",
        id: "circumflex-below-capital-l"
    },
    {
        text: "&#x1E3D;",
        dataTitle: "Circumflex below l",
        id: "circumflex-below-l"
    },
    {
        text: "&#x1E36;",
        dataTitle: "Dot below Capital L",
        id: "dot-below-capital-l"
    },
    {
        text: "&#x1E37;",
        dataTitle: "Dot below l",
        id: "dot-below-l"
    },
    {
        text: "&#x1E38;",
        dataTitle: "Dow below Macron Capital L",
        id: "dot-below-macron-capital-l"
    },
    {
        text: "&#x1E39;",
        dataTitle: "Dot below Macron l",
        id: "dot-below-macron-l"
    },
    {
        text: "&#x1E3A;",
        dataTitle: "line below Capital L",
        id: "line-below-capital-l"
    },
    {
        text: "&#x1E3B;",
        dataTitle: "line below l",
        id: "line-below-l"
    },
    {
        text: "&#x1E3E;",
        dataTitle: "Acute Capital M",
        id: "acute-capital-m"
    },
    {
        text: "&#x1E3F;",
        dataTitle: "Acute m",
        id: "acute-m"
    },
    {
        text: "&#x1E40;",
        dataTitle: "Dot above Capital M",
        id: "dot-above-capital-m"
    },
    {
        text: "&#x1E41;",
        dataTitle: "Dot above m",
        id: "dot-above-m"
    },
    {
        text: "&#x1E42;",
        dataTitle: "Dot below Capital M",
        id: "dot-below-capital-m"
    },
    {
        text: "&#x1E43;",
        dataTitle: "Dot below m",
        id: "dot-below-m"
    },
    {
        text: "&#x0143;",
        dataTitle: "Acute Capital N",
        id: "acute-capital-n"
    },
    {
        text: "&#x0144;",
        dataTitle: "Acute n",
        id: "acute-n"
    },
    {
        text: "&#x0147;",
        dataTitle: "Caron Capital N",
        id: "caron-capital-n"
    },
    {
        text: "&#x0148;",
        dataTitle: "Caron n",
        id: "caron-n"
    },
    {
        text: "&#x0145;",
        dataTitle: "Cedilla Capital N",
        id: "cedilla-capital-n"
    },
    {
        text: "&#x0146;",
        dataTitle: "Cedilla n",
        id: "cedilla-n"
    },
    {
        text: "&#x1E4A;",
        dataTitle: "Circumflex below Capital N",
        id: "circumflex-below-capital-n"
    },
    {
        text: "&#x1E4B;",
        dataTitle: "Circumflex below n",
        id: "circumflex-below-n"
    },
    {
        text: "&#x1E44;",
        dataTitle: "Dot above Capital N",
        id: "dot-above-capital-n"
    },
    {
        text: "&#x1E45;",
        dataTitle: "Dot above n",
        id: "dot-above-n"
    },
    {
        text: "&#x1E46;",
        dataTitle: "Dot below Capital N",
        id: "dot-below-capital-n"
    },
    {
        text: "&#x1E47;",
        dataTitle: "Dot below n",
        id: "dot-below-n"
    },
    {
        text: "&#x01F8;",
        dataTitle: "Grave Capital N",
        id: "grave-capital-n"
    },
    {
        text: "&#x01F9;",
        dataTitle: "Grave n",
        id: "grave-n"
    },
    {
        text: "&#x1E48;",
        dataTitle: "Line below Capital N",
        id: "line-below-capital-n"
    },
    {
        text: "&#x1E49;",
        dataTitle: "Line below n",
        id: "line-below-n"
    },
    {
        text: "&#x00D1;",
        dataTitle: "Tilde Capital N",
        id: "tilde-capital-n"
    },
    {
        text: "&#x00F1;",
        dataTitle: "Tilde n",
        id: "tilde-n"
    },
    {
        text: "&#x1E54;",
        dataTitle: "Acute Capital P",
        id: "acute-capital-p"
    },
    {
        text: "&#x1E55;",
        dataTitle: "Acute p",
        id: "acute-p"
    },
    {
        text: "&#x1E56;",
        dataTitle: "Dot above Capital P",
        id: "dot-above-capital-p"
    },
    {
        text: "&#x1E57;",
        dataTitle: "Dot above p",
        id: "dot-above-p"
    },
    {
        text: "&#x0154;",
        dataTitle: "Acute Capital R",
        id: "acute-capital-r"
    },
    {
        text: "&#x0155;",
        dataTitle: "Acute r",
        id: "acute-r"
    },
    {
        text: "&#x0158;",
        dataTitle: "Caron Capital R",
        id: "caron-capital-r"
    },
    {
        text: "&#x0159;",
        dataTitle: "Caron r",
        id: "caron-r"
    },
    {
        text: "&#x0156;",
        dataTitle: "Cedilla Capital R",
        id: "cedilla-capital-r"
    },
    {
        text: "&#x0157;",
        dataTitle: "Cedilla r",
        id: "cedilla-r"
    },
    {
        text: "&#x1E58;",
        dataTitle: "Dot above Capital R",
        id: "dot-above-capital-r"
    },
    {
        text: "&#x1E59;",
        dataTitle: "Dot above r",
        id: "dot-above-r"
    },
    {
        text: "&#x1E5A;",
        dataTitle: "Dot below Capital R",
        id: "dot-below-capital-r"
    },
    {
        text: "&#x1E5B;",
        dataTitle: "Dot below r",
        id: "dot-below-r"
    },
    {
        text: "&#x1E5C;",
        dataTitle: "Dot below Macron Capital R",
        id: "dot-below-macron-capital-r"
    },
    {
        text: "&#x1E5D;",
        dataTitle: "Dot below Macron r",
        id: "dot-below-macron-r"
    },
    {
        text: "&#x0210;",
        dataTitle: "double grave Capital R",
        id: "double-grave-capital-r"
    },
    {
        text: "&#x0211;",
        dataTitle: "double grave r",
        id: "double-grave-r"
    },
    {
        text: "&#x0212;",
        dataTitle: "Inverted Breve Capital R",
        id: "inverted-breve-capital-r"
    },
    {
        text: "&#x0213;",
        dataTitle: "Inverted Breve r",
        id: "inverted-breve-r"
    },
    {
        text: "&#x1E5E;",
        dataTitle: "Line below Capital R",
        id: "line-below-capital-r"
    },
    {
        text: "&#x1E5F;",
        dataTitle: "Line below r",
        id: "line-below-r"
    },
    {
        text: "&#x015A;",
        dataTitle: "Acute Capital S",
        id: "acute-capital-s"
    },
    {
        text: "&#x015B;",
        dataTitle: "Acute s",
        id: "acute-s"
    },
    {
        text: "&#x015A;",
        dataTitle: "Acute Capital S",
        id: "acute-capital-s"
    },
    {
        text: "&#x015B;",
        dataTitle: "Acute s",
        id: "acute-s"
    },
    {
        text: "&#x1E64;",
        dataTitle: "Dot above Acute Capital S",
        id: "dot-above-acute-capital-s"
    },
    {
        text: "&#x1E65;",
        dataTitle: "Dot above Acute s",
        id: "dot-above-acute-s"
    },
    {
        id: "caron-capital-s",
        dataTitle: "Caron Capital S",
        text: "&#x0160;"
    },
    {
        id: "caron-s",
        dataTitle: "Caron s",
        text: "&#x0161;"
    },
    {
        id: "dot-above-caron-capital-s",
        dataTitle: "Dot above Caron Capital S",
        text: "&#x1E66;"
    },
    {
        id: "dot-above-caron-s",
        dataTitle: "Dot above Caron s",
        text: "&#x1E67;"
    },
    {
        id: "cedilla-capital-s",
        dataTitle: "Cedilla Capital S",
        text: "&#x015E;"
    },
    {
        id: "cedilla-s",
        dataTitle: "Cedilla s",
        text: "&#x015F;"
    },
    {
        id: "circumflex-capital-s",
        dataTitle: "Circumflex Capital S",
        text: "&#x015C;"
    },
    {
        id: "circumflex-s",
        dataTitle: "Circumflex s",
        text: "&#x015D;"
    },
    {
        id: "comma-below-capital-s",
        dataTitle: "Comma below Capital S",
        text: "&#x0218;"
    },
    {
        id: "comma-below-s",
        dataTitle: "Comma below s",
        text: "&#x0219;"
    },
    {
        id: "dot-above-capital-s",
        dataTitle: "Dot above Capital S",
        text: "&#x1E60;"
    },
    {
        id: "dot-above-s",
        dataTitle: "Dot above s",
        text: "&#x1E61;"
    },
    {
        id: "dot-above-long-s",
        dataTitle: "Dot above Long s",
        text: "&#x1E9B;"
    },
    {
        id: "dot-below-capital-s",
        dataTitle: "Dot below Capital S",
        text: "&#x1E62;"
    },
    {
        id: "dot-below-s",
        dataTitle: "Dot below s",
        text: "&#x1E63;"
    },
    {
        id: "dot-below-above-capital-s",
        dataTitle: "Dot below above Capital S",
        text: "&#x1E68;"
    },
    {
        id: "dot-below-above-s",
        dataTitle: "Dot below above s",
        text: "&#x1E69;"
    },
    {
        id: "caron-capital-t",
        dataTitle: "Caron Capital T",
        text: "&#x0164;"
    },
    {
        id: "caron-t",
        dataTitle: "Caron t",
        text: "&#x0165;"
    },
    {
        id: "cedilla-capital-t",
        dataTitle: "Cedilla Capital T",
        text: "&#x0162;"
    },
    {
        id: "cedilla-t",
        dataTitle: "Cedilla t",
        text: "&#x0163;"
    },
    {
        id: "circumflex-capital-t",
        dataTitle: "Circumflex Capital T",
        text: "&#x1E70;"
    },
    {
        id: "circumflex-t",
        dataTitle: "Circumflex t",
        text: "&#x1E71;"
    },
    {
        id: "comma-below-capital-t",
        dataTitle: "Comma below Capital T",
        text: "&#x021A;"
    },
    {
        id: "comma-below-t",
        dataTitle: "Comma below t",
        text: "&#x021B;"
    },
    {
        id: "diaeresis-t",
        dataTitle: "Diaeresis t",
        text: "&#x1E97;"
    },
    {
        id: "dot-above-capital-t",
        dataTitle: "Dot above Capital T",
        text: "&#x1E6A;"
    },
    {
        id: "dot-above-t",
        dataTitle: "Dot above t",
        text: "&#x1E6B;"
    },
    {
        id: "dot-below-capital-t",
        dataTitle: "Dot below Capital T",
        text: "&#x1E6C;"
    },
    {
        id: "dot-below-t",
        dataTitle: "Dot below t",
        text: "&#x1E6D;"
    },
    {
        id: "line-below-capital-t",
        dataTitle: "Line below Capital T",
        text: "&#x1E6E;"
    },
    {
        id: "line-below-t",
        dataTitle: "Line below t",
        text: "&#x1E6F;"
    },
    {
        id: "dot-below-capital-v",
        dataTitle: "Dot below V",
        text: "&#x1E7E;"
    },
    {
        id: "dot-below-v",
        dataTitle: "Dot below v",
        text: "&#x1E7F;"
    },
    {
        id: "tilde-capital-v",
        dataTitle: "Tilde V",
        text: "&#x1E7C;"
    },
    {
        id: "tilde-v",
        dataTitle: "Tilde v",
        text: "&#x1E7D;"
    },
    {
        id: "acute-capital-w",
        dataTitle: "Acute W",
        text: "&#x1E82;"
    },
    {
        id: "acute-w",
        dataTitle: "Acute w",
        text: "&#x1E83;"
    },
    {
        id: "circumflex-capital-w",
        dataTitle: "Circumflex W",
        text: "&#x0174;"
    },
    {
        id: "circumflex-w",
        dataTitle: "Circumflex w",
        text: "&#x0175;"
    },
    {
        id: "diaeresis-capital-w",
        dataTitle: "Diaeresis W",
        text: "&#x1E84;"
    },
    {
        id: "diaeresis-w",
        dataTitle: "Diaeresis w",
        text: "&#x1E85;"
    },
    {
        id: "dot-above-capital-w",
        dataTitle: "Dot above W",
        text: "&#x1E86;"
    },
    {
        id: "dot-above-w",
        dataTitle: "Dot above w",
        text: "&#x1E87;"
    },
    {
        id: "dot-below-capital-w",
        dataTitle: "Dot below W",
        text: "&#x1E88;"
    },
    {
        id: "dot-below-w",
        dataTitle: "Dot below w",
        text: "&#x1E89;"
    },
    {
        id: "grave-capital-w",
        dataTitle: "Grave W",
        text: "&#x1E80;"
    },
    {
        id: "grave-w",
        dataTitle: "Grave w",
        text: "&#x1E81;"
    },
    {
        id: "ring-w",
        dataTitle: "Ring w",
        text: "&#x1E98;"
    },
    {
        id: "diaeresis-capital-x",
        dataTitle: "Diaeresis X",
        text: "&#x1E8C;"
    },
    {
        id: "diaeresis-x",
        dataTitle: "Diaeresis x",
        text: "&#x1E8D;"
    },
    {
        id: "dot-above-capital-x",
        dataTitle: "Dot above X",
        text: "&#x1E8A;"
    },
    {
        id: "dot-above-x",
        dataTitle: "Dot above x",
        text: "&#x1E8B;"
    },
    {
        id: "acute-capital-y",
        dataTitle: "Acute Y",
        text: "&#x00DD;"
    },
    {
        id: "acute-y",
        dataTitle: "Acute y",
        text: "&#x00FD;"
    },
    {
        id: "circumflex-capital-y",
        dataTitle: "Circumflex Y",
        text: "&#x0176;"
    },
    {
        id: "circumflex-y",
        dataTitle: "Circumflex y",
        text: "&#x0177;"
    },
    {
        id: "diaeresis-capital-y",
        dataTitle: "Diaeresis Y",
        text: "&#x0178;"
    },
    {
        id: "diaeresis-y",
        dataTitle: "Diaeresis y",
        text: "&#x00FF;"
    },
    {
        id: "dot-above-capital-y",
        dataTitle: "Dot above Y",
        text: "&#x1E8E;"
    },
    {
        id: "dot-above-y",
        dataTitle: "Dot above y",
        text: "&#x1E8F;"
    },
    {
        id: "dot-below-capital-y",
        dataTitle: "Dot below Y",
        text: "&#x1EF4;"
    },
    {
        id: "dot-below-y",
        dataTitle: "Dot below y",
        text: "&#x1EF5;"
    },
    {
        id: "grave-capital-y",
        dataTitle: "Grave Y",
        text: "&#x1EF2;"
    },
    {
        id: "grave-y",
        dataTitle: "Grave y",
        text: "&#x1EF3;"
    },
    {
        id: "hook-above-capital-y",
        dataTitle: "Hook above Y",
        text: "&#x1EF6;"
    },
    {
        id: "hook-above-y",
        dataTitle: "Hook above y",
        text: "&#x1EF7;"
    },
    {
        id: "macron-capital-y",
        dataTitle: "Macron Y",
        text: "&#x0232;"
    },
    {
        id: "macron-y",
        dataTitle: "Macron y",
        text: "&#x0233;"
    },
    {
        id: "ring-y",
        dataTitle: "Ring y",
        text: "&#x1EF8;"
    },
    {
        id: "tilde-capital-y",
        dataTitle: "Tilde Y",
        text: "&#x1EF8;"
    },
    {
        id: "tilde-y",
        dataTitle: "Tilde y",
        text: "&#x1EF9;"
    },
    {
        id: "acute-capital-z",
        dataTitle: "Acute Z",
        text: "&#x0179;"
    },
    {
        id: "acute-z",
        dataTitle: "Acute z",
        text: "&#x017A;"
    },
    {
        id: "caron-capital-z",
        dataTitle: "Caron Z",
        text: "&#x017D;"
    },
    {
        id: "caron-z",
        dataTitle: "Caron z",
        text: "&#x017E;"
    },
    {
        id: "circumflex-capital-z",
        dataTitle: "Circumflex Z",
        text: "&#x1E90;"
    },
    {
        id: "circumflex-z",
        dataTitle: "Circumflex z",
        text: "&#x1E91;"
    },
    {
        id: "dot-above-capital-z",
        dataTitle: "Dot above Z",
        text: "&#x017B;"
    },
    {
        id: "dot-above-z",
        dataTitle: "Dot above z",
        text: "&#x017C;"
    },
    {
        id: "dot-below-capital-z",
        dataTitle: "Dot below Z",
        text: "&#x1E92;"
    },
    {
        id: "dot-below-z",
        dataTitle: "Dot below z",
        text: "&#x1E93;"
    },
    {
        id: "line-below-capital-z",
        dataTitle: "Line below Z",
        text: "&#x1E94;"
    },
    {
        id: "line-below-z",
        dataTitle: "Line below z",
        text: "&#x1E95;"
    }
]

export default diacritics;