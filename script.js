
function num(id){return parseFloat(document.getElementById(id)?.value)||0}
function show(text){document.getElementById('result').textContent=text}
function calcPercent(){let a=num('earned'),b=num('possible');show(b?`Result: ${(a/b*100).toFixed(2)}%`:'Enter possible points greater than 0.')}
function calcFinal(){let current=num('current'),desired=num('desired'),weight=num('weight')/100; if(weight<=0||weight>=1){show('Enter final weight as a percent between 1 and 99.');return} let needed=(desired-current*(1-weight))/weight; show(`You need about ${needed.toFixed(2)}% on the final.`)}
function calcWeighted(){let total=0,weight=0; for(let i=1;i<=4;i++){total+=num('g'+i)*num('w'+i); weight+=num('w'+i)} show(weight?`Weighted grade: ${(total/weight).toFixed(2)}%`:'Enter at least one category weight.')}
function calcAverage(){let vals=(document.getElementById('values').value||'').split(',').map(x=>parseFloat(x.trim())).filter(x=>!isNaN(x)); show(vals.length?`Average: ${(vals.reduce((a,b)=>a+b,0)/vals.length).toFixed(2)}`:'Enter numbers separated by commas.')}
function calcGpa(){let pts={A:4,B:3,C:2,D:1,F:0}; let total=0,credits=0; for(let i=1;i<=6;i++){let c=num('c'+i),g=document.getElementById('l'+i).value; total+=c*pts[g]; credits+=c} show(credits?`Estimated GPA: ${(total/credits).toFixed(2)}`:'Enter at least one class with credits.')}
function calcTime(){let amount=num('amount'),days=num('days')||1; show(`Plan about ${(amount/days).toFixed(1)} per day.`)}
