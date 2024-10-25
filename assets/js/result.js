const summaryData = [
  {
    name: "reactionScore",
    label: "Reaction",
    icon: "reaction-icon.svg",
    score: 90,
  },
  {
    name: "memoryScore",
    label: "Memory",
    icon: "memory-icon.svg",
    score: 80,
  },
  {
    name: "verbalScore",
    label: "Verbal",
    icon: "Verbal-icon.svg",
    score: 61,
  },
  {
    name: "visualScore",
    label: "Visual",
    icon: "Visual-icon.svg",
    score: 81,
  },
];

let scoreAverage = 0;

for (const item of summaryData) {
  scoreAverage = scoreAverage + item.score;
}
console.log(scoreAverage / summaryData.length);

average.innerText = Math.floor(scoreAverage / summaryData.length);

reaction.innerHTML = `
   <div class="reaction-left">
      <img src="assets/images/${summaryData[0].icon}" alt="" />
      <h3>${summaryData[0].label}</h3>
   </div>
   <div class="reaction-right">
     <h4>${summaryData[0].score} <span>/100</span></h4>
   </div>
`;
memory.innerHTML = `
 <div class="memory-left">
    <img src="assets/images/${summaryData[1].icon}" alt="" />
    <h3>${summaryData[1].label}</h3>
  </div>
  <div class="memory-right">
    <h4>${summaryData[1].score} <span>/100</span></h4>
  </div>
`;

verbal.innerHTML = `
  <div class="verbal-left">
    <img src="assets/images/${summaryData[2].icon}" alt="" />
    <h3>${summaryData[2].label}</h3>
  </div>
  <div class="verbal-right">
    <h4>${summaryData[2].score} <span>/100</span></h4>
</div>
`;

visual.innerHTML = `
<div class="visual-left">
    <img src="assets/images/${summaryData[3].icon}" alt="" />
    <h3>${summaryData[3].label}</h3>
  </div>
  <div class="visual-right">
    <h4>${summaryData[3].score} <span>/100</span></h4>
  </div>
`;


 















// const summaryList = document.querySelector('#summary-list');
// for (const data of summaryData) {
//  summaryList.innerHTML += `
//  <li class="listElement list-${data.name}">
//  <div class="listGroup">
//  <img src='assets/images/${data.icon}' />
//  <h4> ${data.label}</h4>
//  </div>
//  <div>
//  ${data.score} /100
//  </div>
//  </li>
//  `

// }

