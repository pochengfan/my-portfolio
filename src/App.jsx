import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#7e22ce]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">范博丞</span>
            <span className="text-sm text-white/80">NTU IB</span>
          </div>
          <ul className="flex gap-8">
            {['首頁', '關於我', '經歷', '專業能力', '聯絡方式'].map((item, index) => {
              const ids = ['home', 'about', 'experience', 'skills', 'contact'];
              return (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(ids[index])}
                    className={`text-white hover:opacity-70 transition-opacity ${
                      activeSection === ids[index] ? 'font-bold' : ''
                    }`}
                  >
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center text-white text-center px-6">
        <div className="animate-fadeInUp">
          <h1 className="text-6xl font-bold mb-4">你好，我是 范博丞</h1>
          <p className="text-2xl mb-2 opacity-95">國際貿易學生 | 未來的全球商務專業人士</p>
          <p className="text-xl mb-8 opacity-85">國立台灣大學 國際企業學系</p>
          <button
            onClick={() => scrollToSection('about')}
            className="px-10 py-4 bg-white text-[#1e3c72] rounded-full font-bold hover:transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
          >
            了解更多
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] bg-clip-text text-transparent">
            關於我
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                我是一位就讀於台灣大學國際企業學系的學生，對國際貿易、跨國商務與全球供應鏈管理充滿熱情。曾擔任台大國際商業營團隊顧問，並參與管理學院個案競賽，在實戰中累積商業分析與團隊協作經驗。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                在學期間，我致力於培養分析能力、語言能力（TOEIC 910分）與跨文化溝通技巧，期望能在未來成為連結不同市場的專業人才。
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-[#1e3c72]">
                  <strong className="text-[#1e3c72]">學校：</strong>國立台灣大學
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-[#1e3c72]">
                  <strong className="text-[#1e3c72]">科系：</strong>國際企業學系
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-[#1e3c72]">
                  <strong className="text-[#1e3c72]">專長領域：</strong>國際貿易、商務分析、市場研究
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <svg width="400" height="400" viewBox="0 0 400 400" className="animate-pulse">
                <circle cx="200" cy="200" r="150" fill="url(#grad1)" opacity="0.2"/>
                <circle cx="200" cy="200" r="120" fill="url(#grad2)" opacity="0.4"/>
                <circle cx="200" cy="200" r="90" fill="url(#grad3)"/>
                <path d="M 200 110 L 220 160 L 270 170 L 230 210 L 240 260 L 200 235 L 160 260 L 170 210 L 130 170 L 180 160 Z" 
                      fill="white" opacity="0.3"/>
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3c72" stopOpacity="1" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7e22ce" stopOpacity="1" />
                    <stop offset="100%" stopColor="#1e3c72" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e3c72" stopOpacity="1" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] bg-clip-text text-transparent">
            學習與經歷
          </h2>
          <div className="space-y-6">
            {[
              {
                title: '安永聯合會計師事務所 (EY)',
                role: '實習生',
                items: [
                  '協助處理客戶財務報表審計與查核工作',
                  '學習國際會計準則與企業財務分析',
                  '參與跨國企業的專業服務項目，累積實務經驗'
                ]
              },
              {
                title: '學術專案',
                role: '國際市場分析報告',
                items: [
                  '深入研究東南亞市場的貿易機會與挑戰',
                  '分析全球供應鏈在後疫情時代的轉變',
                  '探討區域經濟整合對台灣企業的影響'
                ]
              },
              {
                title: '台大國際商業營',
                role: '團隊顧問',
                items: [
                  '指導營隊學員進行國際商業案例分析',
                  '提供團隊策略規劃與簡報技巧建議',
                  '協助學員了解國際商務實務與跨文化溝通'
                ]
              },
              {
                title: '台大管理學院個案競賽',
                role: '競賽參與者',
                items: [
                  '分析真實商業案例，提出創新解決方案',
                  '與團隊成員協作進行市場研究與策略規劃',
                  '訓練商業簡報與提案能力'
                ]
              }
            ].map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-[#7e22ce] hover:transform hover:translate-x-2 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#1e3c72] mb-2">{exp.title}</h3>
                <p className="text-lg text-[#7e22ce] font-semibold mb-4">{exp.role}</p>
                <ul className="space-y-2 text-gray-600">
                  {exp.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] bg-clip-text text-transparent">
            專業能力
          </h2>
          <div className="space-y-12">
            {[
              {
                icon: '📚',
                title: '專業知識',
                skills: ['國際貿易實務', '商業英文', '市場分析', '財務管理', '供應鏈管理', '經濟學']
              },
              {
                icon: '🌐',
                title: '語言能力',
                skills: ['中文（母語）', '英文（TOEIC 910）']
              },
              {
                icon: '💻',
                title: '技術工具',
                skills: ['Microsoft Office', 'Excel 數據分析', 'PowerPoint 簡報', '數據視覺化']
              }
            ].map((category, index) => (
              <div key={index}>
                <h3 className="text-2xl font-bold text-[#1e3c72] mb-6">
                  {category.icon} {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="px-6 py-4 bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] text-white rounded-xl text-center font-medium hover:scale-105 transition-transform duration-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] bg-clip-text text-transparent">
            聯絡我
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            歡迎與我交流國際貿易、商業機會或任何合作可能
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold text-[#1e3c72] mb-2">📧 電子郵件</h4>
              <a href="mailto:fanpocheng2006@gmail.com" className="text-[#7e22ce] font-medium hover:underline">
                fanpocheng2006@gmail.com
              </a>
            </div>
            <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h4 className="text-xl font-bold text-[#1e3c72] mb-2">📱 聯絡電話</h4>
              <p className="text-gray-600 font-medium">+886 905-416-496</p>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:fanpocheng2006@gmail.com"
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] text-white rounded-full text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300"
              title="Email"
            >
              📧
            </a>
            <a
              href="tel:+886905416496"
              className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-[#1e3c72] to-[#7e22ce] text-white rounded-full text-2xl hover:scale-110 hover:rotate-6 transition-all duration-300"
              title="電話"
            >
              📱
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease;
        }
      `}</style>
    </div>
  );
}