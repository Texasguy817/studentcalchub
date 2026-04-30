'use client';
import { useMemo, useState } from 'react';

export default function CalculatorBox({ name, slug, inputs = [] }: { name: string; slug: string; inputs?: string[] }){
  const [values, setValues] = useState<Record<string,string>>({});
  const nums = inputs.map((label) => Number(values[label] || 0));
  const result = useMemo(() => {
    const positive = nums.filter(n => !Number.isNaN(n));
    if(slug.includes('percentage') || slug.includes('grade-percentage') || slug.includes('test-score') || slug.includes('assignment-grade') || slug.includes('attendance') || slug.includes('fraction-to-percent')){
      if(positive.length >= 2 && positive[1] !== 0) return `${((positive[0] / positive[1]) * 100).toFixed(2)}%`;
    }
    if(slug.includes('average') || slug.includes('class-average')){
      const valid = Object.values(values).join(',').split(',').map(v => Number(v.trim())).filter(n => !Number.isNaN(n));
      if(valid.length) return (valid.reduce((a,b)=>a+b,0)/valid.length).toFixed(2);
    }
    if(slug.includes('tuition')){ if(positive.length >= 2) return `$${(positive[0]*positive[1]).toFixed(2)}`; }
    if(slug.includes('scholarship')){ if(positive.length >= 2) return `$${Math.max(0,positive[0]-positive[1]).toFixed(2)} remaining`; }
    if(slug.includes('textbook')){ if(positive.length >= 2) return `$${(positive[0]*positive[1]).toFixed(2)}`; }
    if(slug.includes('graduation-year')){ if(positive.length >= 2) return `${positive[0]+positive[1]}`; }
    if(slug.includes('age-at-graduation')){ if(positive.length >= 2) return `${positive[1]-positive[0]} years old`; }
    if(slug.includes('reading-time')){ if(positive.length >= 2 && positive[1] !== 0) return `${(positive[0]/positive[1]).toFixed(1)} minutes`; }
    if(slug.includes('study-time')){ if(positive.length >= 2 && positive[1] !== 0) return `${(positive[0]/positive[1]).toFixed(1)} hours per day`; }
    if(slug.includes('homework-time') || slug.includes('flashcard')){ if(positive.length >= 2) return `${(positive[0]*positive[1]).toFixed(1)} minutes`; }
    if(slug.includes('essay') && positive.length >= 2 && positive[1] !== 0) return `${(positive[0]/positive[1]).toFixed(1)} pages`;
    if(slug.includes('final-grade') && positive.length >= 3 && positive[2] !== 0){ return `${((positive[1] - positive[0]*(1-positive[2]/100))/(positive[2]/100)).toFixed(2)}% needed`; }
    if(slug.includes('loan') && positive.length >= 3){
      const principal=positive[0], rate=positive[1]/100/12, months=positive[2]*12;
      if(rate>0 && months>0) return `$${((principal*rate)/(1-Math.pow(1+rate,-months))).toFixed(2)} per month`;
    }
    if(positive.length >= 2) return positive.reduce((a,b)=>a+b,0).toFixed(2);
    return 'Enter your numbers above to see the result.';
  }, [values, slug]);
  return <div className="panel">
    <h2 style={{marginTop:0}}>{name}</h2>
    <div className="inputGrid">
      {(inputs.length ? inputs : ['Value 1','Value 2']).map(label => <div className="field" key={label}>
        <label>{label}</label>
        <input placeholder={label === 'Values' || label === 'Scores' || label === 'Course credits' ? 'Example: 90, 85, 92' : 'Enter number'} value={values[label] || ''} onChange={e => setValues({...values,[label]:e.target.value})}/>
      </div>)}
    </div>
    <div className="result">Result: {result}</div>
  </div>
}
