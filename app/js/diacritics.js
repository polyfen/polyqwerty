const diacritics = [
    {
        id: "grave-capital-a",
        title: "Grave A",
        text: "&#192;"
    },
    {
        id: "grave-a",
        title: "Grave a",
        text: "&#224;"
    },
    {
        id: "acute-capital-a",
        title: "Acute A",
        text: "&#193;"
    },
    {
        id: "acute-a",
        title: "Acute a",
        text: "&#225;"
    },
    {
        id: "circumflex-capital-a",
        title: "Circumflex A",
        text: "&#194;"
    },
    {
        id: "circumflex-a",
        title: "Circumflex a",
        text: "&#226;"
    },
    {
        id: "diaeresis-capital-a",
        title: "Diaeresis A",
        text: "&#196;"
    },
    {
        id: "diaeresis-a",
        title: "Diaeresis a",
        text: "&#228;"
    },
    {
        id: "acute-capital-ae",
        title: "Acute AE",
        text: "&#x01FC;"
    },
    {
        id: "acute-ae",
        title: "Acute ae",
        text: "&#x01FD;"
    },
    {
        id: "tilde-capital-a",
        title: "Tilde A",
        text: "&#195;"
    },
    {
        id: "tilde-a",
        title: "Tilde a",
        text: "&#227;"
    },
    {
        id: "ring-capital-a",
        title: "Ring A",
        text: "&#197;"
    },
    {
        id: "ring-a",
        title: "Ring a",
        text: "&#229;"
    },
    {
        id: "macron-capital-a",
        title: "Macron A",
        text: "&#256;"
    },
    {
        id: "macron-a",
        title: "Macron a",
        text: "&#257;"
    },
    {
        id: "grave-capital-e",
        title: "Grave E",
        text: "&#200;"
    },
    {
        id: "grave-e",
        title: "Grave e",
        text: "&#232;"
    },
    {
        id: "acute-capital-e",
        title: "Acute E",
        text: "&#201;"
    },
    {
        id: "acute-e",
        title: "Acute e",
        text: "&#233;"
    },
    {
        id: "circumflex-capital-e",
        title: "Circumflex E",
        text: "&#202;"
    },
    {
        id: "circumflex-e",
        title: "Circumflex e",
        text: "&#234;"
    },
    {
        id: "diaeresis-capital-e",
        title: "Diaeresis E",
        text: "&#203;"
    },
    {
        id: "diaeresis-e",
        title: "Diaeresis e",
        text: "&#235;"
    },
    {
        id: "macron-capital-e",
        title: "Macron E",
        text: "&#274;"
    },
    {
        id: "macron-e",
        title: "Macron e",
        text: "&#275;"
    },
    {
        id: "dot-above-capital-e",
        title: "Dot Above E",
        text: "&#278;"
    },
    {
        id: "dot-above-e",
        title: "Dot Above e",
        text: "&#279;"
    },
    {
        id: "ogonek-capital-e",
        title: "Ogonek E",
        text: "&#280;"
    },
    {
        id: "ogonek-e",
        title: "Ogonek e",
        text: "&#281;"
    },
    {
        id: "circumflex-capital-i",
        title: "Circumflex I",
        text: "&#206;"
    },
    {
        id: "circumflex-i",
        title: "Circumflex i",
        text: "&#238;"
    },
    {
        id: "diaeresis-capital-i",
        title: "Diaeresis I",
        text: "&#207;"
    },
    {
        id: "diaeresis-i",
        title: "Diaeresis i",
        text: "&#239;"
    },
    {
        id: "acute-capital-i",
        title: "Acute I",
        text: "&#205;"
    },
    {
        id: "acute-i",
        title: "Acute i",
        text: "&#237;"
    },
    {
        id: "macron-capital-i",
        title: "Macron I",
        text: "&#298;"
    },
    {
        id: "macron-i",
        title: "Macron i",
        text: "&#299;"
    },
    {
        id: "ogon-capital-i",
        title: "Ogon I",
        text: "&#302;"
    },
    {
        id: "ogon-i",
        title: "Ogon i",
        text: "&#303;"
    },
    {
        id: "grave-capital-i",
        title: "Grave I",
        text: "&#204;"
    },
    {
        id: "grave-i",
        title: "Grave i",
        text: "&#236;"
    },
    {
        id: "circumflex-capital-o",
        title: "Circumflex O",
        text: "&#212;"
    },
    {
        id: "circumflex-o",
        title: "Circumflex o",
        text: "&#244;"
    },
    {
        id: "diaeresis-capital-o",
        title: "Diaeresis O",
        text: "&#214;"
    },
    {
        id: "diaeresis-o",
        title: "Diaeresis o",
        text: "&#246;"
    },
    {
        id: "grave-capital-o",
        title: "Grave O",
        text: "&#210;"
    },
    {
        id: "grave-o",
        title: "Grave o",
        text: "&#242;"
    },
    {
        id: "acute-capital-o",
        title: "Acute O",
        text: "&#211;"
    },
    {
        id: "acute-o",
        title: "Acute o",
        text: "&#243;"
    },
    {
        id: "slash-capital-o",
        title: "slash O",
        text: "&#216;"
    },
    {
        id: "slash-o",
        title: "slash o",
        text: "&#248;"
    },
    {
        id: "macron-capital-o",
        title: "Macron O",
        text: "&#332;"
    },
    {
        id: "macron-o",
        title: "Macron o",
        text: "&#333;"
    },
    {
        id: "tilde-capital-o",
        title: "Tilde O",
        text: "&#213;"
    },
    {
        id: "tilde-o",
        title: "Tilde o",
        text: "&#245;"
    },
    {
        id: "circumflex-capital-u",
        title: "Circumflex Capital U",
        text: "&#219;"
    },
    {
        id: "circumflex-u",
        title: "Circumflex u",
        text: "&#251;"
    }, {
        id: "diaeresis-capital-u",
        title: "Diaeresis U",
        text: "&#220;"
    },
    {
        id: "diaeresis-u",
        title: "Diaeresis u",
        text: "&#252;"
    }, {
        id: "grave-capital-u",
        title: "Grave U",
        text: "&#217;"
    },
    {
        id: "grave-u",
        title: "Grave u",
        text: "&#249;"
    }, {
        id: "acute-capital-u",
        title: "Acute U",
        text: "&#218;"
    },
    {
        id: "acute-u",
        title: "Acute u",
        text: "&#250;"
    }, {
        id: "macron-capital-u",
        title: "Macron U",
        text: "&#362;"
    },
    {
        id: "macron-u",
        title: "Macron u",
        text: "&#363;"
    }, {
        id: "dot-over-capital-b",
        title: "Dot Over B",
        text: "&#7682;"
    },
    {
        id: "dot-over-b",
        title: "Dot over b",
        text: "&#7683;"
    }, {
        id: "dot-below-capital-b",
        title: "Dot Below B",
        text: "&#7684;"
    },
    {
        id: "dot-below-b",
        title: "Dot below b",
        text: "&#7685;"
    }, {
        id: "line-below-capital-b",
        title: "Line Below B",
        text: "&#7686;"
    },
    {
        id: "line-below-b",
        title: "Line below b",
        text: "&#7687;"
    }, {
        id: "acute-capital-c",
        title: "Acute C",
        text: "&#262;"
    },
    {
        id: "acute-c",
        title: "Acute c",
        text: "&#263;"
    }, {
        id: "caron-capital-c",
        title: "Caron C",
        text: "&#268;"
    },
    {
        id: "caron-c",
        title: "Caron c",
        text: "&#269;"
    }, {
        id: "cedilla-capital-c",
        title: "Cedilla C",
        text: "&#199;"
    },
    {
        id: "cedilla-c",
        title: "Cedilla c",
        text: "&#231;"
    }, {
        id: "cedilla-acute-capital-c",
        title: "Cedilla Acute C",
        text: "&#7688;"
    },
    {
        id: "cedilla-acute-c",
        title: "Cedilla Acute c",
        text: "&#7689;"
    }, {
        id: "circumflex-capital-c",
        title: "Circumflex C",
        text: "&#264;"
    },
    {
        id: "circumflex-c",
        title: "Circumflex c",
        text: "&#265;"
    }, {
        id: "dot-above-capital-c",
        title: "Dot above C",
        text: "&#266;"
    },
    {
        id: "dot-above-c",
        title: "Dot above c",
        text: "&#267;"
    }, {
        id: "caron-capital-d",
        title: "Caron D",
        text: "&#270;"
    },
    {
        id: "caron-d",
        title: "Caron d",
        text: "&#271;"
    }, {
        id: "cedilla-capital-d",
        title: "Cedilla below D",
        text: "&#7696;"
    },
    {
        id: "cedilla-d",
        title: "Cedilla d",
        text: "&#7697;"
    }, {
        id: "circumflex-below-capital-d",
        title: "circumflex below D",
        text: "&#7698;"
    },
    {
        id: "circumflex-below-d",
        title: "circumflex below d",
        text: "&#7699;"
    }, {
        id: "dot-above-capital-d",
        title: "Dot above D",
        text: "&#7690;"
    },
    {
        id: "dot-above-d",
        title: "Dot above d",
        text: "&#7691;"
    }, {
        id: "dot-below-capital-d",
        title: "Dot Below D",
        text: "&#7692;"
    },
    {
        id: "dot-below-d",
        title: "Dot Below d",
        text: "&#7693;"
    }, {
        id: "line-below-capital-d",
        title: "Line below D",
        text: "&#7694;"
    },
    {
        id: "line-below-d",
        title: "Line below d",
        text: "&#7695;"
    }, {
        id: "acute-capital-g",
        title: "Acute G",
        text: "&#500;"
    },
    {
        id: "acute-g",
        title: "Acute g",
        text: "&#501;"
    }, {
        id: "breve-capital-g",
        title: "Breve G",
        text: "&#286;"
    },
    {
        id: "breve-g",
        title: "Breve g",
        text: "&#287;"
    }, {
        id: "caron-capital-g",
        title: "Caron G",
        text: "&#486;"
    },
    {
        id: "caron-g",
        title: "Caron g",
        text: "&#487;"
    }, {
        id: "cedilla-capital-g",
        title: "Cedilla G",
        text: "&#290;"
    },
    {
        id: "cedilla-g",
        title: "Cedilla g",
        text: "&#291;"
    }, {
        id: "circumflex-capital-g",
        title: "Circumflex G",
        text: "&#284;"
    },
    {
        id: "circumflex-g",
        title: "Circumflex g",
        text: "&#285;"
    }, {
        id: "dot-above-capital-g",
        title: "Dot G",
        text: "&#288;"
    },
    {
        id: "dot-above-g",
        title: "Dot g",
        text: "&#289;"
    }, {
        id: "macron-capital-g",
        title: "Macron G",
        text: "&#7712;"
    },
    {
        id: "macron-g",
        title: "Macron g",
        text: "&#7713;"
    }, {
        id: "breve-below-capital-h",
        title: "Breve H",
        text: "&#x1E2A;"
    },
    {
        id: "breve-below-h",
        title: "Breve h",
        text: "&#x1E2B;"
    }, {
        id: "caron-capital-h",
        title: "Caron H",
        text: "&#x021E;"
    },
    {
        id: "caron-h",
        title: "Caron h",
        text: "&#x021F;"
    }, {
        id: "cedilla-capital-h",
        title: "Cedilla H",
        text: "&#x1E28;"
    },
    {
        id: "cedilla-h",
        title: "Cedilla h",
        text: "&#x1E29;"
    }, {
        id: "circumflex-capital-h",
        title: "Circumflex H",
        text: "&#x0124;"
    },
    {
        id: "circumflex-h",
        title: "Circumflex h",
        text: "&#x0125;"
    },
    {
        id: "diaeresis-capital-h",
        title: "Diaeresis H",
        text: "&#x1E26;"
    },
    {
        id: "diaeresis-h",
        title: "Diaeresis h",
        text: "&#x1E27;"
    },
    {
        id: "dot-below-capital-h",
        title: "Dot Below H",
        text: "&#x1E24;"
    },
    {
        id: "dot-below-h",
        title: "Dot Below h",
        text: "&#x1E25;"
    },
    {
        id: "dot-above-capital-h",
        title: "Dot Above H",
        text: "&#x1E22;"
    },
    {
        id: "dot-above-h",
        title: "Dot Above h",
        text: "&#x1E23;"
    },



    {
        id: "line-below-h",
        title: "Line below h",
        text: "&#x1E96"
    },
    {
        id: "caron-j",
        title: "Caron j",
        text: "&#x01F0"
    },
    {
        id: "circumflex-capital-j",
        title: "Circumflex J",
        text: "&#x0134"
    },
    {
        id: "circumflex-j",
        title: "Circumflex j",
        text: "&#x0135"
    },
    {
        text: "&#x1E30;",
        title: "Acute Capital K",
        id: "acute-capital-k"
    },
    {
        text: "&#x01E8;",
        title: "Caron Capital K",
        id: "caron-capital-k"
    },
    {
        text: "&#x01E9;",
        title: "Caron k",
        id: "caron-k"
    },
    {
        text: "&#x0136;",
        title: "Cedilla Capital K",
        id: "cedilla-capital-k"
    },
    {
        text: "&#x0137;",
        title: "Cedilla k",
        id: "cedilla-k"
    },
    {
        text: "&#x1E32;",
        title: "Dot Below Capital K",
        id: "dot-below-capital-k"
    },
    {
        text: "&#x1E33;",
        title: "Dot Below k",
        id: "dot-below-k"
    },
    {
        text: "&#x1E34;",
        title: "Line Below Capital K",
        id: "line-below-capital-k"
    },
    {
        text: "&#x1E35;",
        title: "Line Below k",
        id: "line-below-k"
    },
    {
        text: "&#x0139;",
        title: "Acute Capital L",
        id: "acute-capital-l"
    },
    {
        text: "&#x013A;",
        title: "Acute l",
        id: "acute-l"
    },
    {
        text: "&#x013D;",
        title: "Caron Capital L",
        id: "caron-capital-l"
    },
    {
        text: "&#x013E;",
        title: "Caron l",
        id: "caron-l"
    },
    {
        text: "&#x013B;",
        title: "Cedilla Capital L",
        id: "cedilla-capital-l"
    },
    {
        text: "&#x013C;",
        title: "Cedilla l",
        id: "cedilla-l"
    },
    {
        text: "&#x1E3C;",
        title: "Circumflex below Capital L",
        id: "circumflex-below-capital-l"
    },
    {
        text: "&#x1E3D;",
        title: "Circumflex below l",
        id: "circumflex-below-l"
    },
    {
        text: "&#x1E36;",
        title: "Dot below Capital L",
        id: "dot-below-capital-l"
    },
    {
        text: "&#x1E37;",
        title: "Dot below l",
        id: "dot-below-l"
    },
    {
        text: "&#x1E38;",
        title: "Dow below Macron Capital L",
        id: "dot-below-macron-capital-l"
    },
    {
        text: "&#x1E39;",
        title: "Dot below Macron l",
        id: "dot-below-macron-l"
    },
    {
        text: "&#x1E3A;",
        title: "line below Capital L",
        id: "line-below-capital-l"
    },
    {
        text: "&#x1E3B;",
        title: "line below l",
        id: "line-below-l"
    },
    {
        text: "&#x1E3E;",
        title: "Acute Capital M",
        id: "acute-capital-m"
    },
    {
        text: "&#x1E3F;",
        title: "Acute m",
        id: "acute-m"
    },
    {
        text: "&#x1E40;",
        title: "Dot above Capital M",
        id: "dot-above-capital-m"
    },
    {
        text: "&#x1E41;",
        title: "Dot above m",
        id: "dot-above-m"
    },
    {
        text: "&#x1E42;",
        title: "Dot below Capital M",
        id: "dot-below-capital-m"
    },
    {
        text: "&#x1E43;",
        title: "Dot below m",
        id: "dot-below-m"
    },
    {
        text: "&#x0143;",
        title: "Acute Capital N",
        id: "acute-capital-n"
    },
    {
        text: "&#x0144;",
        title: "Acute n",
        id: "acute-n"
    },
    {
        text: "&#x0147;",
        title: "Caron Capital N",
        id: "caron-capital-n"
    },
    {
        text: "&#x0148;",
        title: "Caron n",
        id: "caron-n"
    },
    {
        text: "&#x0145;",
        title: "Cedilla Capital N",
        id: "cedilla-capital-n"
    },
    {
        text: "&#x0146;",
        title: "Cedilla n",
        id: "cedilla-n"
    },
    {
        text: "&#x1E4A;",
        title: "Circumflex below Capital N",
        id: "circumflex-below-capital-n"
    },
    {
        text: "&#x1E4B;",
        title: "Circumflex below n",
        id: "circumflex-below-n"
    },
    {
        text: "&#x1E44;",
        title: "Dot above Capital N",
        id: "dot-above-capital-n"
    },
    {
        text: "&#x1E45;",
        title: "Dot above n",
        id: "dot-above-n"
    },
    {
        text: "&#x1E46;",
        title: "Dot below Capital N",
        id: "dot-below-capital-n"
    },
    {
        text: "&#x1E47;",
        title: "Dot below n",
        id: "dot-below-n"
    },
    {
        text: "&#x01F8;",
        title: "Grave Capital N",
        id: "grave-capital-n"
    },
    {
        text: "&#x01F9;",
        title: "Grave n",
        id: "grave-n"
    },
    {
        text: "&#x1E48;",
        title: "Line below Capital N",
        id: "line-below-capital-n"
    },
    {
        text: "&#x1E49;",
        title: "Line below n",
        id: "line-below-n"
    },
    {
        text: "&#x00D1;",
        title: "Tilde Capital N",
        id: "tilde-capital-n"
    },
    {
        text: "&#x00F1;",
        title: "Tilde n",
        id: "tilde-n"
    },
    {
        text: "&#x1E54;",
        title: "Acute Capital P",
        id: "acute-capital-p"
    },
    {
        text: "&#x1E55;",
        title: "Acute p",
        id: "acute-p"
    },
    {
        text: "&#x1E56;",
        title: "Dot above Capital P",
        id: "dot-above-capital-p"
    },
    {
        text: "&#x1E57;",
        title: "Dot above p",
        id: "dot-above-p"
    },
    {
        text: "&#x0154;",
        title: "Acute Capital R",
        id: "acute-capital-r"
    },
    {
        text: "&#x0155;",
        title: "Acute r",
        id: "acute-r"
    },
    {
        text: "&#x0158;",
        title: "Caron Capital R",
        id: "caron-capital-r"
    },
    {
        text: "&#x0159;",
        title: "Caron r",
        id: "caron-r"
    },
    {
        text: "&#x0156;",
        title: "Cedilla Capital R",
        id: "cedilla-capital-r"
    },
    {
        text: "&#x0157;",
        title: "Cedilla r",
        id: "cedilla-r"
    },
    {
        text: "&#x1E58;",
        title: "Dot above Capital R",
        id: "dot-above-capital-r"
    },
    {
        text: "&#x1E59;",
        title: "Dot above r",
        id: "dot-above-r"
    },
    {
        text: "&#x1E5A;",
        title: "Dot below Capital R",
        id: "dot-below-capital-r"
    },
    {
        text: "&#x1E5B;",
        title: "Dot below r",
        id: "dot-below-r"
    },
    {
        text: "&#x1E5C;",
        title: "Dot below Macron Capital R",
        id: "dot-below-macron-capital-r"
    },
    {
        text: "&#x1E5D;",
        title: "Dot below Macron r",
        id: "dot-below-macron-r"
    },
    {
        text: "&#x0210;",
        title: "double grave Capital R",
        id: "double-grave-capital-r"
    },
    {
        text: "&#x0211;",
        title: "double grave r",
        id: "double-grave-r"
    },
    {
        text: "&#x0212;",
        title: "Inverted Breve Capital R",
        id: "inverted-breve-capital-r"
    },
    {
        text: "&#x0213;",
        title: "Inverted Breve r",
        id: "inverted-breve-r"
    },
    {
        text: "&#x1E5E;",
        title: "Line below Capital R",
        id: "line-below-capital-r"
    },
    {
        text: "&#x1E5F;",
        title: "Line below r",
        id: "line-below-r"
    },
    {
        text: "&#x015A;",
        title: "Acute Capital S",
        id: "acute-capital-s"
    },
    {
        text: "&#x015B;",
        title: "Acute s",
        id: "acute-s"
    },
    {
        text: "&#x015A;",
        title: "Acute Capital S",
        id: "acute-capital-s"
    },
    {
        text: "&#x015B;",
        title: "Acute s",
        id: "acute-s"
    },
    {
        text: "&#x1E64;",
        title: "Dot above Acute Capital S",
        id: "dot-above-acute-capital-s"
    },
    {
        text: "&#x1E65;",
        title: "Dot above Acute s",
        id: "dot-above-acute-s"
    },
    {
        id: "caron-capital-s",
        title: "Caron Capital S",
        text: "&#x0160;"
    },
    {
        id: "caron-s",
        title: "Caron s",
        text: "&#x0161;"
    },
    {
        id: "dot-above-caron-capital-s",
        title: "Dot above Caron Capital S",
        text: "&#x1E66;"
    },
    {
        id: "dot-above-caron-s",
        title: "Dot above Caron s",
        text: "&#x1E67;"
    },
    {
        id: "cedilla-capital-s",
        title: "Cedilla Capital S",
        text: "&#x015E;"
    },
    {
        id: "cedilla-s",
        title: "Cedilla s",
        text: "&#x015F;"
    },
    {
        id: "circumflex-capital-s",
        title: "Circumflex Capital S",
        text: "&#x015C;"
    },
    {
        id: "circumflex-s",
        title: "Circumflex s",
        text: "&#x015D;"
    },
    {
        id: "comma-below-capital-s",
        title: "Comma Below Capital S",
        text: "&#x0218;"
    },
    {
        id: "comma-below-s",
        title: "Comma Below s",
        text: "&#x0219;"
    },
    {
        id: "dot-above-capital-s",
        title: "Dot above Capital S",
        text: "&#x1E60;"
    },
    {
        id: "dot-above-s",
        title: "Dot above s",
        text: "&#x1E61;"
    },
    {
        id: "dot-above-long-s",
        title: "Dot above Long s",
        text: "&#x1E9B;"
    },
    {
        id: "dot-below-capital-s",
        title: "Dot below Capital S",
        text: "&#x1E62;"
    },
    {
        id: "dot-below-s",
        title: "Dot below s",
        text: "&#x1E63;"
    },
    {
        id: "dot-below-above-capital-s",
        title: "Dot below above Capital S",
        text: "&#x1E68;"
    },
    {
        id: "dot-below-above-s",
        title: "Dot below above s",
        text: "&#x1E69;"
    },
    {
        id: "caron-capital-t",
        title: "Caron Capital T",
        text: "&#x0164;"
    },
    {
        id: "caron-t",
        title: "Caron t",
        text: "&#x0165;"
    },
    {
        id: "cedilla-capital-t",
        title: "Cedilla Capital T",
        text: "&#x0162;"
    },
    {
        id: "cedilla-t",
        title: "Cedilla t",
        text: "&#x0163;"
    },
    {
        id: "circumflex-capital-t",
        title: "Circumflex Capital T",
        text: "&#x1E70;"
    },
    {
        id: "circumflex-t",
        title: "Circumflex t",
        text: "&#x1E71;"
    },
    {
        id: "comma-below-capital-t",
        title: "Comma Below Capital T",
        text: "&#x021A;"
    },
    {
        id: "comma-below-t",
        title: "Comma Below t",
        text: "&#x021B;"
    },
    {
        id: "diaeresis-t",
        title: "Diaeresis t",
        text: "&#x1E97;"
    },
    {
        id: "dot-above-capital-t",
        title: "Dot Above Capital T",
        text: "&#x1E6A;"
    },
    {
        id: "dot-above-t",
        title: "Dot Above t",
        text: "&#x1E6B;"
    },
    {
        id: "dot-below-capital-t",
        title: "Dot Below Capital T",
        text: "&#x1E6C;"
    },
    {
        id: "dot-below-t",
        title: "Dot below t",
        text: "&#x1E6D;"
    },
    {
        id: "line-below-capital-t",
        title: "Line below Capital T",
        text: "&#x1E6E;"
    },
    {
        id: "line-below-t",
        title: "Line below t",
        text: "&#x1E6F;"
    },
    {
        id: "dot-below-capital-v",
        title: "Dot Below V",
        text: "&#x1E7E;"
    },
    {
        id: "dot-below-v",
        title: "Dot Below v",
        text: "&#x1E7F;"
    },
    {
        id: "tilde-capital-v",
        title: "Tilde V",
        text: "&#x1E7C;"
    },
    {
        id: "tilde-v",
        title: "Tilde v",
        text: "&#x1E7D;"
    },
    {
        id: "acute-capital-w",
        title: "Acute W",
        text: "&#x1E82;"
    },
    {
        id: "acute-w",
        title: "Acute w",
        text: "&#x1E83;"
    },
    {
        id: "circumflex-capital-w",
        title: "Circumflex W",
        text: "&#x0174;"
    },
    {
        id: "circumflex-w",
        title: "Circumflex w",
        text: "&#x0175;"
    },
    {
        id: "diaeresis-capital-w",
        title: "Diaeresis W",
        text: "&#x1E84;"
    },
    {
        id: "diaeresis-w",
        title: "Diaeresis w",
        text: "&#x1E85;"
    },
    {
        id: "dot-above-capital-w",
        title: "Dot Above W",
        text: "&#x1E86;"
    },
    {
        id: "dot-above-w",
        title: "Dot Above w",
        text: "&#x1E87;"
    },
    {
        id: "dot-below-capital-w",
        title: "Dot Below W",
        text: "&#x1E88;"
    },
    {
        id: "dot-below-w",
        title: "Dot Below w",
        text: "&#x1E89;"
    },
    {
        id: "grave-capital-w",
        title: "Grave W",
        text: "&#x1E80;"
    },
    {
        id: "grave-w",
        title: "Grave w",
        text: "&#x1E81;"
    },
    {
        id: "ring-w",
        title: "Ring w",
        text: "&#x1E98;"
    },
    {
        id: "diaeresis-capital-x",
        title: "Diaeresis X",
        text: "&#x1E8C;"
    },
    {
        id: "diaeresis-x",
        title: "Diaeresis x",
        text: "&#x1E8D;"
    },
    {
        id: "dot-above-capital-x",
        title: "Dot Above X",
        text: "&#x1E8A;"
    },
    {
        id: "dot-above-x",
        title: "Dot Above x",
        text: "&#x1E8B;"
    },
    {
        id: "acute-capital-y",
        title: "Acute Y",
        text: "&#x00DD;"
    },
    {
        id: "acute-y",
        title: "Acute y",
        text: "&#x00FD;"
    },
    {
        id: "circumflex-capital-y",
        title: "Circumflex Y",
        text: "&#x0176;"
    },
    {
        id: "circumflex-y",
        title: "Circumflex y",
        text: "&#x0177;"
    },
    {
        id: "diaeresis-capital-y",
        title: "Diaeresis Y",
        text: "&#x0178;"
    },
    {
        id: "diaeresis-y",
        title: "Diaeresis y",
        text: "&#x00FF;"
    },
    {
        id: "dot-above-capital-y",
        title: "Dot Above Y",
        text: "&#x1E8E;"
    },
    {
        id: "dot-above-y",
        title: "Dot Above y",
        text: "&#x1E8F;"
    },
    {
        id: "dot-below-capital-y",
        title: "Dot Below Y",
        text: "&#x1EF4;"
    },
    {
        id: "dot-below-y",
        title: "Dot Below y",
        text: "&#x1EF5;"
    },
    {
        id: "grave-capital-y",
        title: "Grave Y",
        text: "&#x1EF2;"
    },
    {
        id: "grave-y",
        title: "Grave y",
        text: "&#x1EF3;"
    },
    {
        id: "hook-above-capital-y",
        title: "Hook Above Y",
        text: "&#x1EF6;"
    },
    {
        id: "hook-above-y",
        title: "Hook Above y",
        text: "&#x1EF7;"
    },
    {
        id: "macron-capital-y",
        title: "Macron Y",
        text: "&#x0232;"
    },
    {
        id: "macron-y",
        title: "Macron y",
        text: "&#x0233;"
    },
    {
        id: "ring-y",
        title: "Ring y",
        text: "&#x1EF8;"
    },
    {
        id: "tilde-capital-y",
        title: "Tilde Y",
        text: "&#x1EF8;"
    },
    {
        id: "tilde-y",
        title: "Tilde y",
        text: "&#x1EF9;"
    },
    {
        id: "acute-capital-z",
        title: "Acute Z",
        text: "&#x0179;"
    },
    {
        id: "acute-z",
        title: "Acute z",
        text: "&#x017A;"
    },
    {
        id: "caron-capital-z",
        title: "Caron Z",
        text: "&#x017D;"
    },
    {
        id: "caron-z",
        title: "Caron z",
        text: "&#x017E;"
    },
    {
        id: "circumflex-capital-z",
        title: "Circumflex Z",
        text: "&#x1E90;"
    },
    {
        id: "circumflex-z",
        title: "Circumflex z",
        text: "&#x1E91;"
    },
    {
        id: "dot-above-capital-z",
        title: "Dot Above Z",
        text: "&#x017B;"
    },
    {
        id: "dot-above-z",
        title: "Dot Above z",
        text: "&#x017C;"
    },
    {
        id: "dot-below-capital-z",
        title: "Dot Below Z",
        text: "&#x1E92;"
    },
    {
        id: "dot-below-z",
        title: "Dot Below z",
        text: "&#x1E93;"
    },
    {
        id: "line-below-capital-z",
        title: "Line Below Z",
        text: "&#x1E94;"
    },
    {
        id: "line-below-z",
        title: "Line Below z",
        text: "&#x1E95;"
    },
]

export default diacritics;