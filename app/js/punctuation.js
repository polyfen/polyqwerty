const punctuation = [
  {
    id: "inverted-exclamation-mark",
    title: "Inverted Exclamation Mark",
    text: "&#161;"
  },
  {
    id: "exclamation-point",
    title: "Exclamation Point",
    text: "&#33;"
  },
  {
    id: "double-exclamation-mark",
    title: "Double Exclamation Mark",
    text: "&#8252;"
  },
  {
    id: "single-quote",
    title: "Single Quote",
    text: "&#39;"
  },
  {
    id: "double-quote",
    title: "Double Quote",
    text: "&#34;"
  },
  {
    id: "number-sign",
    title: "Number Sign",
    text: "&#35;"
  },
  {
    id: "ampersand",
    title: "Ampersand",
    text: "&#38;"
  },
  {
    id: "left-parenthesis",
    title: "Left Parenthesis",
    text: "&#40;"
  },
  {
    id: "right-parenthesis",
    title: "Right Parenthesis",
    text: "&#41;"
  },
  {
    id: "asterisk",
    title: "Asterisk",
    text: "&#42;"
  },

  {
    id: "flower-punctuation mark",
    title: "Flower Punctuation Mark",
    text: "&#x2055"
  },

  {
    id: "reference-mark",
    title: "Reference Mark",
    text: "&#8251;"
  },
  {
    id: "wave-dash",
    title: "Wave Dash",
    text: "&#x301C;"
  },
  {
    id: "wavy-dash",
    title: "Wavy Dash",
    text: "&#x3030;"
  },
  {
    id: "comma",
    title: "Comma",
    text: "&#44;"
  },
  {
    id: "period",
    title: "Period",
    text: "&#46;"
  },
  {
    id: "horizontal-ellipsis",
    title: "Horizontal Ellipsis",
    text: "&#133;"
  },
  {
    id: "slash",
    title: "Slash",
    text: "&#47;"
  },
  {
    id: "vertical-bar",
    title: "Vertical Bar",
    text: "&#124;"
  },
  {
    id: "backslash",
    title: "Backslash",
    text: "&#92;"
  },
  {
    id: "colon",
    title: "Colon",
    text: "&#58;"
  },
  {
    id: "semicolon",
    title: "Semicolon",
    text: "&#59;"
  },
  {
    id: "inverted-question-mark",
    title: "Inverted Question Mark",
    text: "&#191;"
  },
  {
    id: "question-mark",
    title: "Question Mark",
    text: "&#63;"
  },
  {
    id: "at-symbol",
    title: "At Symbol",
    text: "&#64;"
  },
  {
    id: "caret",
    title: "Caret",
    text: "&#94;"
  },
  {
    id: "left-square-bracket",
    title: "Left Square Bracket",
    text: "&#91;"
  },
  {
    id: "right-square-bracket",
    title: "Right Square Bracket",
    text: "&#93;"
  },
  {
    id: "left-curly-brace",
    title: "Left Curly Brace",
    text: "&#123;"
  },
  {
    id: "right-curly-brace",
    title: "Right Curly Brace",
    text: "&#125;"
  },
  {
    id: "tilde",
    title: "Tilde",
    text: "&#126;"
  },
  {
    id: "dagger",
    title: "Dagger",
    text: "&#134;"
  },
  {
    id: "double-dagger",
    title: "Double Dagger",
    text: "&#135;"
  },
  {
    id: "single-left-pointing-angle-quotation-mark",
    title: "Single Left-Pointing Angle Quotation Mark",
    text: "&#139;"
  },
  {
    id: "single-right-pointing-angle-quotation-mark",
    title: "Single Right-Pointing Angle Quotation Mark",
    text: "&#155;"
  },
  {
    id: "left-pointing-double-angle-quotation-mark",
    title: "Left-Pointing Double Angle Quotation Mark",
    text: "&#171;"
  },
  {
    id: "right-pointing-double-angle-quotation-mark",
    title: "Right-Pointing Double Angle Quotation Mark",
    text: "&#187;"
  },
  {
    id: "single-low-9-quotation-mark",
    title: "Single Low-9 Quotation Mark",
    text: "&#130;"
  },
  {
    id: "double-low-9-quotation-mark",
    title: "Double Low-9 Quotation Mark",
    text: "&#132;"
  },
  {
    id: "left-single-quotation-mark",
    title: "Left Single Quotation Mark",
    text: "&#145;"
  },
  {
    id: "right-single-quotation-mark",
    title: "Right Single Quotation Mark",
    text: "&#146;"
  },
  {
    id: "left-double-quotation-mark",
    title: "Left Double Quotation Mark",
    text: "&#147;"
  },
  {
    id: "right-double-quotation-mark",
    title: "Right Double Quotation Mark",
    text: "&#148;"
  },
  {
    id: "bullet",
    title: "Bullet",
    text: "&#149;"
  },
  {
    id: "underscore",
    title: "Underscore",
    text: "&#95;"
  },
  {
    id: "overline",
    title: "Overline",
    text: "&#8254;"
  },
  {
    id: "hyphen",
    title: "Hyphen",
    text: "&#45;"
  },
  {
    id: "en-dash",
    title: "En Dash",
    text: "&#150;"
  },
  {
    id: "em-dash",
    title: "Em Dash",
    text: "&#151;"
  },
  {
    id: "horizontal-bar",
    title: "Horizontal Bar",
    text: "&#8213;"
  },
  {
    id: "trademark-symbol",
    title: "Trademark Symbol",
    text: "&#153;"
  },
  {
    id: "broken-bar",
    title: "Broken Bar",
    text: "&#166;"
  },
  {
    id: "copyright-symbol",
    title: "Copyright Symbol",
    text: "&#169;"
  },
  {
    id: "feminine-ordinal-indicator",
    title: "Feminine Ordinal Indicator",
    text: "&#170;"
  },
  {
    id: "not-sign",
    title: "Not Sign",
    text: "&#172;"
  },
  {
    id: "halfwidth-right-corner-bracket",
    title: "Halfwidth Right Corner Bracket",
    text: "&#xFF63;"
  },
  {
    id: "registered-sign",
    title: "Registered Sign",
    text: "&#174;"
  },
  {
    id: "degree-symbol",
    title: "Degree Symbol",
    text: "&#176;"
  },
  {
    id: "superscript-one",
    title: "Superscript One",
    text: "&#185;"
  },
  {
    id: "superscript-two",
    title: "Superscript Two",
    text: "&#178;"
  },
  {
    id: "superscript-three",
    title: "Superscript Three",
    text: "&#179;"
  },
  {
    id: "micro-sign",
    title: "Micro Sign",
    text: "&#181;"
  },
  {
    id: "pilcrow-sign",
    title: "Pilcrow Sign",
    text: "&#182;"
  },
  {
    id: "middle-dot",
    title: "Middle Dot",
    text: "&#183;"
  },
  {
    id: "masculine-ordinal-indicator",
    title: "Masculine Ordinal Indicator",
    text: "&#186;"
  },
  {
    id: "care-of",
    title: "Care Of",
    text: "&#8453;"
  },
  {
    id: "superscript-n",
    title: "Superscript N",
    text: "&#8319;"
  },
  {
    id: "section-sign",
    title: "Section Sign",
    text: "&#167;"
  },
  {
    id: "diaeresis",
    title: "Diaeresis",
    text: "&#168;"
  },
  {
    id: "triangular-bullet",
    title: "Triangular Bullet",
    text: "&#8227;"
  },
  {
    id: "numero-sign",
    title: "Numero Sign",
    text: "&#8470;"
  },
  {
    id: "inverted-undertie",
    title: "Inverted Undertie",
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