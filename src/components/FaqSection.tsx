import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone } from 'lucide-react';
import { FAQS, OFFICIAL_PHONE, OFFICIAL_KAKAO_URL } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-zinc-900/50 border-t border-zinc-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>자주 묻는 질문 FAQ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            방문 전 궁금한 모든 것을<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              솔직하고 투명하게 답변드립니다
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            궁금하신 점이 아래에 없다면 24시간 언제든 전화 또는 카카오톡으로 편하게 문의해주세요.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5 mb-12">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
                      Q
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-zinc-900/80 text-xs sm:text-sm text-zinc-300 leading-relaxed pl-14">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <div className="p-6 rounded-2xl bg-zinc-950 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">더 궁금한 점이 있으신가요?</h4>
            <p className="text-xs text-zinc-400 mt-1">
              익명 1:1 카카오톡 상담이나 비밀 전화 상담을 통해 1분 만에 답변받으실 수 있습니다.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${OFFICIAL_PHONE}`}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-200"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>전화문의</span>
            </a>
            <a
              href={OFFICIAL_KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FEE500] hover:bg-[#fae100] text-zinc-950 text-xs font-bold"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>카톡 상담</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
