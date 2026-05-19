import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Global Navigation */}
      <nav className="fixed top-0 w-full h-11 bg-black z-50 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="text-white opacity-70 hover:opacity-100 transition-opacity">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.49 10.84C13.47 8.11 15.72 6.78 15.82 6.72C14.55 4.86 12.57 4.59 11.87 4.56C10.2 4.39 8.59 5.55 7.74 5.55C6.89 5.55 5.59 4.58 4.2 4.61C2.38 4.64 0.67 5.67 0 8.82C0 10.96 0.84 15.22 2.62 17.79C3.5 19.05 4.52 20.47 5.88 20.42C7.19 20.37 7.69 19.58 9.27 19.58C10.85 19.58 11.3 20.42 12.68 20.39C14.1 20.37 14.98 19.1 15.85 17.83C16.86 16.36 17.27 14.94 17.29 14.87C17.26 14.86 14.51 13.81 14.48 10.64L13.49 10.84ZM10.79 3.02C11.54 2.11 12.04 0.85 11.9 0C10.83 0.04 9.53 0.71 8.76 1.61C8.07 2.41 7.47 3.7 7.63 4.53C8.82 4.62 10.04 3.93 10.79 3.02Z"/>
            </svg>
          </div>
          <div className="hidden md:flex gap-8 text-white text-xs font-normal">
            <a href="#experience" className="opacity-70 hover:opacity-100 transition-opacity">Experience</a>
            <a href="#education" className="opacity-70 hover:opacity-100 transition-opacity">Education</a>
            <a href="#skills" className="opacity-70 hover:opacity-100 transition-opacity">Skills</a>
          </div>
        </div>
      </nav>

      {/* Sub Navigation */}
      <nav className="sticky top-11 w-full h-13 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 z-40 flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Abdulmalik Aljabhan</h2>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8 text-gray-900 text-xs font-normal">
              <a href="#experience" className="opacity-70 hover:opacity-100 transition-opacity">Experience</a>
              <a href="#education" className="opacity-70 hover:opacity-100 transition-opacity">Education</a>
              <a href="#skills" className="opacity-70 hover:opacity-100 transition-opacity">Skills</a>
            </div>
            <Button 
              asChild
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-normal"
            >
              <a href="mailto:aa.aljabhan@gmail.com">Connect</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-semibold text-gray-900 leading-tight mb-4" style={{ letterSpacing: "-0.015em" }}>
            Abdulmalik Aljabhan
          </h1>
          <p className="text-2xl font-semibold text-gray-900 mb-6">Marketing Professional</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Well-versed Marketing Professional with a proven track record of over six years of experience in the financial and tourism sectors. Excellent acumen in marketing, corporate communications, and project management. Focused on achieving and delivering measurable business results.
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              asChild
              className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            >
              <a href="#experience">View Experience</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
            >
              <a href="mailto:aa.aljabhan@gmail.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold mb-16" style={{ letterSpacing: "-0.01em" }}>Experience</h2>
          
          <div className="space-y-12">
            {/* Role 1 */}
            <article className="pb-12 border-b border-white/10">
              <h3 className="text-2xl font-semibold mb-2">Manager, Marketing & Communication Department</h3>
              <p className="text-blue-400 text-lg mb-1">Wosol Concierge</p>
              <p className="text-gray-400 text-sm mb-6">Oct 2025 - Jun 2026</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Orchestrating multi-channel digital strategies across paid media and owned channels.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Implementing and optimizing intent-driven search strategies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Rebranding and revamping core brand assets while supporting mobile app UX/UI alignment.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Building an in-house team of designers/copywriters.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Ensuring online/offline touchpoints reflect sophistication, discretion, and exclusivity.</span>
                </li>
              </ul>
            </article>

            {/* Role 2 */}
            <article className="pb-12 border-b border-white/10">
              <h3 className="text-2xl font-semibold mb-2">Lead Officer, Sales & Marketing Division</h3>
              <p className="text-blue-400 text-lg mb-1">Saudi Tadawul Group</p>
              <p className="text-gray-400 text-sm mb-6">Oct 2023 - Aug 2024</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Led integrated marketing strategies for STG subsidiaries.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Implemented high-impact corporate communications for the Post-Trade Transformation Program.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Handled logistics for high-profile events like listing ceremonies.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Led educational initiatives/webinars for derivatives and market offerings.</span>
                </li>
              </ul>
            </article>

            {/* Role 3 */}
            <article className="pb-12 border-b border-white/10">
              <h3 className="text-2xl font-semibold mb-2">Officer, Corporate Communications & Marketing Group</h3>
              <p className="text-blue-400 text-lg mb-1">The Saudi National Bank</p>
              <p className="text-gray-400 text-sm mb-6">Apr 2021 - Jul 2023</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Executed comprehensive marketing and communication strategies for Corporate and Commercial Banking divisions supporting post-merger integration.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Managed marketing campaigns for Wholesale Group customer engagement.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Orchestrated sponsorships and strategic seminars.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Created impactful marketing collateral.</span>
                </li>
              </ul>
            </article>

            {/* Role 4 */}
            <article>
              <h3 className="text-2xl font-semibold mb-2">Assistant Brand Manager, Marketing Department</h3>
              <p className="text-blue-400 text-lg mb-1">Samba Financial Group</p>
              <p className="text-gray-400 text-sm mb-6">Jan 2019 - Jul 2021</p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Developed/executed tactical and thematic marketing campaigns for financial products.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Managed branding for Sovereign/Corporate Sukuk Funds and GCC Banks Fund.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Designed comprehensive onboarding kits.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0">•</span>
                  <span>Led communication for Alpha Project and Aramco IPO.</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold text-gray-900 mb-16" style={{ letterSpacing: "-0.01em" }}>Education & Certifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Bachelor of Arts in Business Marketing</h3>
              <p className="text-gray-600 text-sm mb-2">Concordia University, St. Paul, MN</p>
              <p className="text-gray-500 text-sm">CGPA: 3.38/4.0 | Graduated: May 2018</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Certified Digital Marketing Professional (CDMP)</h3>
              <p className="text-gray-600 text-sm mb-2">Digital Marketing Institute (DMI)</p>
              <p className="text-gray-500 text-sm">Expected May 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-semibold text-gray-900 mb-16" style={{ letterSpacing: "-0.01em" }}>Skills & Software</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Meta Ads Manager</h3>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">GA4</h3>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-3xl p-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900">Project Management</h3>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-3xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Languages</h3>
              <p className="text-gray-600 text-sm">Fluent in English and Arabic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:aa.aljabhan@gmail.com" className="text-gray-700 text-base leading-relaxed hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  aa.aljabhan@gmail.com
                </a>
                <a href="tel:+966557895552" className="text-gray-700 text-base leading-relaxed hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +966 55 789 5552
                </a>
                <p className="text-gray-700 text-base leading-relaxed flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Riyadh, Saudi Arabia
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Social</h4>
              <a href="#" className="text-gray-700 text-base leading-relaxed hover:text-blue-600 transition-colors flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-xs">Copyright © 2026 Abdulmalik Aljabhan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
