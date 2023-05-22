const mathematicals = [
  {
    title: "mathematicals",
    codes: [
      { id: "minus-sign", title: "Minus Sign", text: "&#8722;" },
      { id: "plus-sign", title: "Plus Sign", text: "&#43;" },
      { id: "plus-or-minus-sign", title: "Plus or Minus Sign", text: "&#177;" },
      {
        id: "multiplication-sign",
        title: "Multiplication Sign",
        text: "&#215;",
      },
      { id: "division-sign", title: "Division Sign", text: "&#247;" },
      { id: "percent-sign", title: "Percent Sign", text: "&#37;" },
      {
        id: "per-mille-sign",
        title: "Per Mille Sign (per thousand)",
        text: "&#137;",
      },
      { id: "equal-sign", title: "Equal Sign", text: "&#61;" },
      { id: "not-equal-to-sign", title: "Not Equal To Sign", text: "&#8800;" },
      {
        id: "approximately-equal-sign",
        title: "Approximately Equal Sign",
        text: "&#8776;",
      },
      { id: "identical-to-sign", title: "Identical To Sign", text: "&#8801;" },
      { id: "less-than-sign", title: "Less Than Sign", text: "&#60;" },
      { id: "greater-than-sign", title: "Greater Than Sign", text: "&#62;" },
      {
        id: "less-than-or-equal-to-sign",
        title: "Less Than or Equal To Sign",
        text: "&#8804;",
      },
      {
        id: "greater-than-or-equal-to-sign",
        title: "Greater Than or Equal To Sign",
        text: "&#8805;",
      },
      { id: "infinity-sign", title: "Infinity Sign", text: "&#8734;" },
      {
        id: "one-eighth-fraction",
        title: "One Eighth Fraction",
        text: "&#8539;",
      },
      {
        id: "one-quarter-fraction",
        title: "One Quarter Fraction",
        text: "&#188;",
      },
      {
        id: "three-eighths-fraction",
        title: "Three Eighths Fraction",
        text: "&#8540;",
      },
      { id: "one-half-fraction", title: "One Half Fraction", text: "&#189;" },
      {
        id: "five-eighths-fraction",
        title: "Five Eighths Fraction",
        text: "&#8541;",
      },
      {
        id: "three-quarters-fraction",
        title: "Three Quarters Fraction",
        text: "&#190;",
      },
      {
        id: "seven-eighths-fraction",
        title: "Seven Eighths Fraction",
        text: "&#8542;",
      },
      { id: "integral-sign", title: "Integral Sign", text: "&#8747;" },
      {
        id: "partial-differential-sign",
        title: "Partial Differential Sign",
        text: "&#8706;",
      },
      { id: "increment-sign", title: "Increment Sign", text: "&#8710;" },
      {
        id: "n-ary-product-sign",
        title: "N-ary Product Sign",
        text: "&#8719;",
      },
      { id: "n-ary-sum-sign", title: "N-ary Sum Sign", text: "&#8721;" },
      { id: "square-root-sign", title: "Square Root Sign", text: "&#8730;" },
      { id: "right-angle-sign", title: "Right Angle Sign", text: "&#8735;" },
      { id: "intersection-sign", title: "Intersection Sign", text: "&#8745;" },
      { id: "bullet-operator", title: "Bullet Operator", text: "&#8729;" },
      { id: "function-sign", title: "Function Sign", text: "&#131;" },
      { id: "fraction-slash", title: "Fraction Slash", text: "&#8260;" },
      { id: "roman-numeral-one", title: "Roman Numeral One", text: "&#x2160;" },
      { id: "roman-numeral-two", title: "Roman Numeral Two", text: "&#x2161;" },
      {
        id: "roman-numeral-three",
        title: "Roman Numeral Three",
        text: "&#x2162;",
      },
      {
        id: "roman-numeral-four",
        title: "Roman Numeral Four",
        text: "&#x2163;",
      },
      {
        id: "roman-numeral-five",
        title: "Roman Numeral Five",
        text: "&#x2164;",
      },
      { id: "roman-numeral-six", title: "Roman Numeral Six", text: "&#x2165;" },
      {
        id: "roman-numeral-seven",
        title: "Roman Numeral Seven",
        text: "&#x2166;",
      },
      {
        id: "roman-numeral-eight",
        title: "Roman Numeral Eight",
        text: "&#x2167;",
      },
      {
        id: "roman-numeral-nine",
        title: "Roman Numeral Nine",
        text: "&#x2168;",
      },
      { id: "roman-numeral-ten", title: "Roman Numeral Ten", text: "&#x2169;" },
      {
        id: "roman-numeral-eleven",
        title: "Roman Numeral Eleven",
        text: "&#x216A;",
      },
      {
        id: "roman-numeral-twelve",
        title: "Roman Numeral Twelve",
        text: "&#x216B;",
      },
      {
        id: "roman-numeral-fifty",
        title: "Roman Numeral Fifty",
        text: "&#x216C;",
      },
      {
        id: "roman-numeral-one-hundred",
        title: "Roman Numeral One Hundred",
        text: "&#x216D;",
      },
      {
        id: "roman-numeral-five-hundred",
        title: "Roman Numeral Five Hundred",
        text: "&#x216E;",
      },
      {
        id: "roman-numeral-one-thousand",
        title: "Roman Numeral One Thousand",
        text: "&#x216F;",
      },
      {
        id: "small-roman-numeral-one",
        title: "Small Roman Numeral One",
        text: "&#x2170;",
      },
      {
        id: "small-roman-numeral-two",
        title: "Small Roman Numeral Two",
        text: "&#x2171;",
      },
      {
        id: "small-roman-numeral-three",
        title: "Small Roman Numeral Three",
        text: "&#x2172;",
      },
      {
        id: "small-roman-numeral-four",
        title: "Small Roman Numeral Four",
        text: "&#x2173;",
      },
      {
        id: "small-roman-numeral-five",
        title: "Small Roman Numeral Five",
        text: "&#x2174;",
      },
      {
        id: "small-roman-numeral-six",
        title: "Small Roman Numeral Six",
        text: "&#x2175;",
      },
      {
        id: "small-roman-numeral-seven",
        title: "Small Roman Numeral Seven",
        text: "&#x2176;",
      },
      {
        id: "small-roman-numeral-eight",
        title: "Small Roman Numeral Eight",
        text: "&#x2177;",
      },
      {
        id: "small-roman-numeral-nine",
        title: "Small Roman Numeral Nine",
        text: "&#x2178;",
      },
      {
        id: "small-roman-numeral-ten",
        title: "Small Roman Numeral Ten",
        text: "&#x2179;",
      },
      {
        id: "small-roman-numeral-eleven",
        title: "Small Roman Numeral Eleven",
        text: "&#x217A;",
      },
      {
        id: "small-roman-numeral-twelve",
        title: "Small Roman Numeral Twelve",
        text: "&#x217B;",
      },
      {
        id: "small-roman-numeral-fifty",
        title: "Small Roman Numeral Fifty",
        text: "&#x217C;",
      },
      {
        id: "small-roman-numeral-one-hundred",
        title: "Small Roman Numeral One Hundred",
        text: "&#x217D;",
      },
      {
        id: "small-roman-numeral-five-hundred",
        title: "Small Roman Numeral Five Hundred",
        text: "&#x217E;",
      },
      {
        id: "small-roman-numeral-one-thousand",
        title: "Small Roman Numeral One Thousand",
        text: "&#x217F;",
      },
    ],
  },
];

export default mathematicals;
