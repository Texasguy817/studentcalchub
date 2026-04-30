import type { Metadata } from 'next';
import { getTool, relatedTools, tools } from '@/lib/tools';
import CalculatorBox from '@/components/CalculatorBox';
import { notFound } from 'next/navigation';

export function generateStaticParams(){ return tools.map(tool => ({ slug: tool.slug })); }

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getTool(params.slug);
  if(!tool) return {};
  return {
    title: tool.title,
    description: tool.meta,
    alternates: { canonical: `https://studentcalchub.com/${tool.slug}` }
  };
}

export default function ToolPage({ params }: { params: { slug: string } }){
  const tool = getTool(params.slug);
  if(!tool) notFound();
  const related = relatedTools(tool.slug, 6);
  return <main className="toolPage">
    <div className="wrap">
      <div className="toolHeader">
        <div>
          <span className="eyebrow">{tool.category}</span>
          <h1 className="toolTitle">{tool.name}</h1>
          <p className="lead">{tool.description} Use this free calculator to make school planning quicker, clearer, and easier.</p>
        </div>
        <div className="panel">
          <h2 style={{marginTop:0}}>Popular student tools</h2>
          <div className="related">
            {related.slice(0,4).map(r => <a href={`/${r.slug}`} key={r.slug}>{r.name}</a>)}
          </div>
        </div>
      </div>
      <section className="section">
        <CalculatorBox name={tool.name} slug={tool.slug} inputs={tool.inputs}/>
      </section>
      <section className="section content">
        <div className="panel">
          <h2>How to use the {tool.name}</h2>
          <p>Enter the numbers from your class, assignment, deadline, or school plan into the calculator above. The result updates automatically so you can test different scenarios without starting over.</p>
          <h2>Formula or method</h2>
          <p>{tool.formula}</p>
          <h2>When this calculator is helpful</h2>
          <p>This tool is useful when you need a quick answer for school planning, grade tracking, study scheduling, or college cost estimates. It is meant to give a practical estimate, so always compare the result with your teacher's syllabus, school grading policy, or official college billing information when accuracy matters.</p>
          <h2>Related student calculators</h2>
          <div className="related">
            {related.map(r => <a href={`/${r.slug}`} key={r.slug}>{r.name}</a>)}
          </div>
        </div>
      </section>
    </div>
  </main>
}
