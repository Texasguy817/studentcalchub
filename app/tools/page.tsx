import type { Metadata } from 'next';
import { categories, tools } from '@/lib/tools';

export const metadata: Metadata = {
  title: 'All Student Calculators | StudentCalcHub',
  description: 'Browse all free student calculators for GPA, grades, essays, study planning, college costs, attendance, and math help.'
};

export default function ToolsPage(){
  return <main className="section">
    <div className="wrap">
      <span className="eyebrow">All tools</span>
      <h1 className="toolTitle">Student calculators and school planning tools</h1>
      <p className="lead">Choose a free calculator below. Every tool is designed for quick school planning, homework, grades, studying, or college costs.</p>
      {categories.map(category => <section className="section" id={category.toLowerCase().replaceAll(' ','-')} key={category}>
        <h2 className="sectionTitle">{category}</h2>
        <div className="grid">
          {tools.filter(t => t.category === category).map(tool => <a className="card" href={`/${tool.slug}`} key={tool.slug}>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <b>Open calculator →</b>
          </a>)}
        </div>
      </section>)}
    </div>
  </main>
}
