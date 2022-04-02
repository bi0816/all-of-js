const quotesArray = [
  {
    quote: "건강해지려고 운동을 하니까 힘든거야. 나처럼 킬러가 되려고 수련을 해봐",
  },
  {
    quote: "암만 생각해도 다정하고 귀여운 게 최고야. 다 이겨. 다정함이랑 귀여움은 과유불급도 없어.",
  },
  {
    quote: "T로 시작하는 날에만 술먹겠음. Tuesday, Thursday ... Today.. Tomorrow.. ",
  },
  {
    quote: "너무 졸려서 황금졸려상 받을 것 같다.",
  },
  {
    quote: "희망 2행시. (1) 희 : 희희, (2) 망 : 망했다",
  },
  {
    quote: "여유는 잔고에서 오고 상냥함은 탄수화물과 당분에서 온다.",
  },
  {
    quote: "특기 : 돈빼고 살모으기",
  },
  {
    quote: "스트레스 덜 받는 마법의 말투. (1) 오히려 좋아, (2) 그럴수도 있지, (3) 가보자고",
  },
  {
    quote: "느려도 괜찮아 멈추지만 않는다면",
  },
  {
    quote: "준비된 체력이 소진되어 더 이상 일이 안됩니다. 죄송합니다.",
  },
]

const quoteBox = document.getElementById('quotes');
const quote = quoteBox.querySelector('.quote');

const todaysQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

quote.innerText = todaysQuote.quote;
