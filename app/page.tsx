import { categories, tools } from '@/lib/tools';

export default function Home(){
  const featured = ['gpa-calculator','final-grade-calculator','weighted-grade-calculator','study-time-calculator','college-cost-calculator','attendance-percentage-calculator'];
  const featuredTools = featured.map(slug => tools.find(t => t.slug === slug)!).filter(Boolean);
  return <main>
    <section className="hero">
      <div className="wrap heroGrid">
        <div>
          <span className="eyebrow">Free calculators for students</span>
          <h1 className="h1">Simple school tools for grades, studying, essays, and college costs.</h1>
          <p className="lead">StudentCalcHub helps students quickly calculate GPA, final exam scores, weighted grades, homework time, essay length, attendance, tuition, and more. No account required.</p>
        </div>
        <div className="heroCard">
          <div className="stat"><span>Student tools</span><b>{tools.length}+</b></div>
          <div className="stat"><span>Categories</span><b>{categories.length}</b></div>
          <div className="stat"><span>Cost</span><b>Free</b></div>
          <p className="sectionLead" style={{marginTop:16}}>Start with the calculator you need now, then use the related tools to plan the rest of your schoolwork.</p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="wrap">
        <h2 className="sectionTitle">Most useful student calculators</h2>
        <p className="sectionLead">These are the core tools students search for most often when planning grades and study time.</p>
        <div className="grid">
          {featuredTools.map(tool => <a className="card" href={`/${tool.slug}`} key={tool.slug}>
            <span className="pill">{tool.category}</span>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <b>Open calculator →</b>
          </a>)}
        </div>
      </div>
    </section>
    <section className="section">
      <div className="wrap">
        <h2 className="sectionTitle">Browse by category</h2>
        <div className="grid">
          {categories.map(category => <a className="card" href={`/tools#${category.toLowerCase().replaceAll(' ','-')}`} key={category}>
            <h3>{category}</h3>
            <p>{tools.filter(t => t.category === category).length} free tools for {category.toLowerCase()}.</p>
            <b>View tools →</b>
          </a>)}
        </div>
      </div>
    </section>
  </main>
}
