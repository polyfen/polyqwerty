const punctuation = [
  {
    id: "inverted-exclamation-mark",
    dataTitle: "Inverted Exclamation Mark",
    text: "&#161;"
  },
  {
    id: "exclamation-point",
    dataTitle: "Exclamation Point",
    text: "&#33;"
  },
  {
    id: "double-exclamation-mark",
    dataTitle: "Double Exclamation Mark",
    text: "&#8252;"
  },
  {
    id: "single-quote",
    dataTitle: "Single Quote",
    text: "&#39;"
  },
  {
    id: "double-quote",
    dataTitle: "Double Quote",
    text: "&#34;"
  },
  {
    id: "number-sign",
    dataTitle: "Number Sign",
    text: "&#35;"
  },
  {
    id: "ampersand",
    dataTitle: "Ampersand",
    text: "&#38;"
  },
  {
    id: "left-parenthesis",
    dataTitle: "Left Parenthesis",
    text: "&#40;"
  },
  {
    id: "right-parenthesis",
    dataTitle: "Right Parenthesis",
    text: "&#41;"
  },
  {
    id: "asterisk",
    dataTitle: "Asterisk",
    text: "&#42;"
  },

  {
    id: "flower-punctuation mark",
    dataTitle: "Flower Punctuation Mark",
    text: "&#x2055"
  },

  {
    id: "reference-mark",
    dataTitle: "Reference Mark",
    text: "&#8251;"
  },
  {
    id: "wave-dash",
    dataTitle: "Wave Dash",
    text: "&#x301C;"
  },
  {
    id: "wavy-dash",
    dataTitle: "Wavy Dash",
    text: "&#x3030;"
  },
  {
    id: "comma",
    dataTitle: "Comma",
    text: "&#44;"
  },
  {
    id: "period",
    dataTitle: "Period",
    text: "&#46;"
  },
  {
    id: "horizontal-ellipsis",
    dataTitle: "Horizontal Ellipsis",
    text: "&#133;"
  },
  {
    id: "slash",
    dataTitle: "Slash",
    text: "&#47;"
  },
  {
    id: "vertical-bar",
    dataTitle: "Vertical Bar",
    text: "&#124;"
  },
  {
    id: "backslash",
    dataTitle: "Backslash",
    text: "&#92;"
  },
  {
    id: "colon",
    dataTitle: "Colon",
    text: "&#58;"
  },
  {
    id: "semicolon",
    dataTitle: "Semicolon",
    text: "&#59;"
  },
  {
    id: "inverted-question-mark",
    dataTitle: "Inverted Question Mark",
    text: "&#191;"
  },
  {
    id: "question-mark",
    dataTitle: "Question Mark",
    text: "&#63;"
  },
  {
    id: "at-symbol",
    dataTitle: "At Symbol",
    text: "&#64;"
  },
  {
    id: "caret",
    dataTitle: "Caret",
    text: "&#94;"
  },
  {
    id: "left-square-bracket",
    dataTitle: "Left Square Bracket",
    text: "&#91;"
  },
  {
    id: "right-square-bracket",
    dataTitle: "Right Square Bracket",
    text: "&#93;"
  },
  {
    id: "left-curly-brace",
    dataTitle: "Left Curly Brace",
    text: "&#123;"
  },
  {
    id: "right-curly-brace",
    dataTitle: "Right Curly Brace",
    text: "&#125;"
  },
  {
    id: "tilde",
    dataTitle: "Tilde",
    text: "&#126;"
  },
  {
    id: "dagger",
    dataTitle: "Dagger",
    text: "&#134;"
  },
  {
    id: "double-dagger",
    dataTitle: "Double Dagger",
    text: "&#135;"
  },
  {
    id: "single-left-pointing-angle-quotation-mark",
    dataTitle: "Single Left-Pointing Angle Quotation Mark",
    text: "&#139;"
  },
  {
    id: "single-right-pointing-angle-quotation-mark",
    dataTitle: "Single Right-Pointing Angle Quotation Mark",
    text: "&#155;"
  },
  {
    id: "left-pointing-double-angle-quotation-mark",
    dataTitle: "Left-Pointing Double Angle Quotation Mark",
    text: "&#171;"
  },
  {
    id: "right-pointing-double-angle-quotation-mark",
    dataTitle: "Right-Pointing Double Angle Quotation Mark",
    text: "&#187;"
  },
  {
    id: "single-low-9-quotation-mark",
    dataTitle: "Single Low-9 Quotation Mark",
    text: "&#130;"
  },
  {
    id: "double-low-9-quotation-mark",
    dataTitle: "Double Low-9 Quotation Mark",
    text: "&#132;"
  },
  {
    id: "left-single-quotation-mark",
    dataTitle: "Left Single Quotation Mark",
    text: "&#145;"
  },
  {
    id: "right-single-quotation-mark",
    dataTitle: "Right Single Quotation Mark",
    text: "&#146;"
  },
  {
    id: "left-double-quotation-mark",
    dataTitle: "Left Double Quotation Mark",
    text: "&#147;"
  },
  {
    id: "right-double-quotation-mark",
    dataTitle: "Right Double Quotation Mark",
    text: "&#148;"
  },
  {
    id: "bullet",
    dataTitle: "Bullet",
    text: "&#149;"
  },
  {
    id: "underscore",
    dataTitle: "Underscore",
    text: "&#95;"
  },
  {
    id: "overline",
    dataTitle: "Overline",
    text: "&#8254;"
  },
  {
    id: "hyphen",
    dataTitle: "Hyphen",
    text: "&#45;"
  },
  {
    id: "en-dash",
    dataTitle: "En Dash",
    text: "&#150;"
  },
  {
    id: "em-dash",
    dataTitle: "Em Dash",
    text: "&#151;"
  },
  {
    id: "horizontal-bar",
    dataTitle: "Horizontal Bar",
    text: "&#8213;"
  },
  {
    id: "trademark-symbol",
    dataTitle: "Trademark Symbol",
    text: "&#153;"
  },
  {
    id: "broken-bar",
    dataTitle: "Broken Bar",
    text: "&#166;"
  },
  {
    id: "copyright-symbol",
    dataTitle: "Copyright Symbol",
    text: "&#169;"
  },
  {
    id: "feminine-ordinal-indicator",
    dataTitle: "Feminine Ordinal Indicator",
    text: "&#170;"
  },
  {
    id: "not-sign",
    dataTitle: "Not Sign",
    text: "&#172;"
  },
  {
    id: "halfwidth-right-corner-bracket",
    dataTitle: "Halfwidth Right Corner Bracket",
    text: "&#xFF63;"
  },
  {
    id: "registered-sign",
    dataTitle: "Registered Sign",
    text: "&#174;"
  },
  {
    id: "degree-symbol",
    dataTitle: "Degree Symbol",
    text: "&#176;"
  },
  {
    id: "superscript-one",
    dataTitle: "Superscript One",
    text: "&#185;"
  },
  {
    id: "superscript-two",
    dataTitle: "Superscript Two",
    text: "&#178;"
  },
  {
    id: "superscript-three",
    dataTitle: "Superscript Three",
    text: "&#179;"
  },
  {
    id: "micro-sign",
    dataTitle: "Micro Sign",
    text: "&#181;"
  },
  {
    id: "pilcrow-sign",
    dataTitle: "Pilcrow Sign",
    text: "&#182;"
  },
  {
    id: "middle-dot",
    dataTitle: "Middle Dot",
    text: "&#183;"
  },
  {
    id: "masculine-ordinal-indicator",
    dataTitle: "Masculine Ordinal Indicator",
    text: "&#186;"
  },
  {
    id: "care-of",
    dataTitle: "Care Of",
    text: "&#8453;"
  },
  {
    id: "superscript-n",
    dataTitle: "Superscript N",
    text: "&#8319;"
  },
  {
    id: "section-sign",
    dataTitle: "Section Sign",
    text: "&#167;"
  },
  {
    id: "diaeresis",
    dataTitle: "Diaeresis",
    text: "&#168;"
  },
  {
    id: "triangular-bullet",
    dataTitle: "Triangular Bullet",
    text: "&#8227;"
  },
  {
    id: "numero-sign",
    dataTitle: "Numero Sign",
    text: "&#8470;"
  },
  {
    id: "inverted-undertie",
    dataTitle: "Inverted Undertie",
    text: "&#x2054;"
  }












]

export default punctuation;

/*
  > data:
!	&#33;
"	&#34;
# &#35;
&	&#38;
  &#39;
(	&#40;
)	&#41;
*	&#42;
,	&#44;
-	&#45;
.	&#46;
/	&#47;
:	&#58;
;	&#59;
?	&#63;
@	&#64;
[	&#91;
  \	&#92;
] &#93;
^	&#94;
_ &#95;
{	&#123;
|	&#124;
}	&#125;
~	&#126;
‚	&#130;
„	&#132;
…	&#133;
†	&#134;
‡	&#135;
‹	&#139;
‘	&#145;
’	&#146;
“	&#147;
”	&#148;
•	&#149;
–	&#150;
—	&#151;
™	&#153;
›	&#155;
  &#160;
¡	&#161;
¦	&#166;
©	&#169;
ª &#170;
«	&#171;
¬	&#172;
­	&#173;
®	&#174;
°	&#176;
²	&#178;
³	&#179;
µ &#181;
¶	&#182;
·	&#183;
¹	&#185;
º &#186;
»	&#187;
¿	&#191;
℅	&#8453;
ⁿ &#8319;
§	&#167;
¨	&#191;
―	&#8213;
‣	&#8227;
‾	&#8254;
‼	&#8252;
№	&#8470;
*/