import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://studentcalchub.com'),
  title: 'StudentCalcHub | Free Student Calculators and School Tools',
  description: 'Free student calculators for GPA, final grades, study time, college costs, attendance, essays, and homework planning.',
  alternates: { canonical: 'https://studentcalchub.com' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <nav className="nav">
            <a className="brand" href="/">Student<span>CalcHub</span></a>
            <div className="navlinks">
              <a href="/tools">All Tools</a>
              <a href="/gpa-calculator">GPA</a>
              <a href="/final-grade-calculator">Final Grade</a>
              <a href="/study-time-calculator">Study Time</a>
            </div>
          </nav>
        </div>
        {children}
        <footer className="footer">
          <div className="wrap footerGrid">
            <div>© {new Date().getFullYear()} StudentCalcHub. Free student calculators and planning tools.</div>
            <div><a href="/tools">All tools</a> · <a href="/sitemap.xml">Sitemap</a></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
