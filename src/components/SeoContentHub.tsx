import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, FileText, CheckCircle2, Award, Compass, Search } from 'lucide-react';
import { SEO_ARTICLES } from '../data/mockData';

export const SeoContentHub: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleArticle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const keywordTags = [
    '건대호빠', '건대 호빠', '건대호스트바', '건대W', '건대 더블유',
    '건대W 안전예약', '건대호빠 가격', '건대호빠 주대', '건대호빠 TC',
    '건대호빠 룸비', '건대호빠 예약', '건대호빠 후기', '건대호빠 초보',
    '건대호빠 혼방', '건대입구역 호빠', '광진구 호빠', '성수동 호빠',
    '군자 호빠', '서울 호빠 추천', '호빠 정찰제', '건대W 우식실장',
    '건대W 훈이실장', '건대 24시간 호빠', '건대호빠 픽업서비스'
  ];

  return (
    <section id="seo-hub" className="py-20 bg-zinc-900/40 border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>건대호빠 공식 정보 컬럼 & SEO 가이드</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            알고 가면 200% 만족하는<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              건대호빠 건대W 완벽 이용 지침서
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            구글 검색 1위 건대W가 알려드리는 안전예약 필수 상식, 강남 호빠와의 실속 비교,<br className="hidden md:inline" />
            그리고 여성 1인 방문 힐링 팁을 확인해보세요.
          </p>
        </div>

        {/* SEO Articles Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto mb-14">
          {SEO_ARTICLES.map((art, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <article
                key={art.slug}
                className="rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/30 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleArticle(idx)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer group"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-amber-400">
                        GUIDE 0{idx + 1}
                      </span>
                      <span className="text-xs text-zinc-400">| 정찰제·안전예약 칼럼</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-1">
                      {art.summary}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400 group-hover:text-amber-400 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-900 text-sm text-zinc-300 leading-relaxed space-y-3">
                    {art.content.split('\n\n').map((paragraph, pIdx) => {
                      if (!paragraph.trim()) return null;
                      return (
                        <p key={pIdx} className="text-xs sm:text-sm text-zinc-300 whitespace-pre-line">
                          {paragraph.trim()}
                        </p>
                      );
                    })}

                    <div className="pt-4 flex items-center gap-2 text-xs text-amber-400 font-semibold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>건대W 공식 예약센터 감수 완료 · 24시간 실시간 상담 가능</span>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Detailed Google Search Authority Content Box */}
        <div className="rounded-2xl bg-zinc-950 p-6 sm:p-8 border border-zinc-800 text-xs text-zinc-400 leading-relaxed max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-zinc-200 font-bold text-sm">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>건대호빠 건대W 공식 검색 엔진 최적화(SEO) 및 이용 안내</span>
          </div>

          <p>
            <strong>건대호빠(건대 호스트바)</strong>를 검색하시는 수많은 고객님들께서 가장 중요하게 생각하시는 기준은 
            <strong>투명한 정찰제 주대</strong>, <strong>철저한 사생활 보호(프라이버시)</strong>, 그리고 
            <strong>외모와 인성을 겸비한 우수한 에이스 라인업</strong>입니다. 
            서울 광진구 건대입구역 맛의거리 상권의 중심에 자리 잡은 <strong>건대W</strong>는 
            사전 안내된 주대 외에 어떠한 숨겨진 비용도 청구하지 않으며, 
            초보 방문 고객님과 1인 혼방 고객님을 위한 전담 케어 시스템을 24시간 연중무휴로 운영하고 있습니다.
          </p>

          <p>
            건대W는 <strong>골든블루 12년산, 윈저 12년산 기본 14만~15만원</strong>의 합리적인 정찰제를 제공하며, 
            시간당 T/C 6만원, 웨이터 서포트비 5만원(룸당 1회)으로 운영되고 <strong>룸비는 100% 무료</strong>입니다. 
            강남 호빠 대비 40% 이상 실속 있는 주대와 평균 80~100여 명에 달하는 20~30대 젊고 세련된 에이스 호스트들이 상시 대기하여 
            고객님의 만족을 약속합니다.
          </p>

          {/* Semantic Keyword Cloud for High Google Crawlability */}
          <div className="pt-4 border-t border-zinc-900">
            <p className="text-[11px] font-bold text-zinc-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>건대호빠 인기 검색 키워드 모음:</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {keywordTags.map((kw, i) => (
                <span
                  key={i}
                  className="text-[11px] px-2 py-1 rounded bg-zinc-900 text-zinc-400 hover:text-amber-300 hover:bg-zinc-800 transition-colors border border-zinc-800/80 cursor-default"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
