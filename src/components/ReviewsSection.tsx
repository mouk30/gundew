import React, { useState } from 'react';
import { Star, CheckCircle, MessageSquareQuote, ThumbsUp, Sparkles, Filter } from 'lucide-react';
import { REVIEWS } from '../data/mockData';
import { ReviewItem } from '../types';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 리얼 후기' },
    { id: 'solo', label: '혼방(1인 방문)' },
    { id: 'birthday', label: '생일 파티' },
    { id: 'first', label: '첫 방문' },
    { id: 'friends', label: '친구 모임' },
  ];

  const filteredReviews = activeCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <section id="reviews" className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>고객 만족도 99.8% 달성</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            직접 방문하신 고객님들의<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              생생한 100% 리얼 후기
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            정찰제 준수, 매너 있는 대화, 철저한 비밀보장까지 약속을 지키는 건대W의 진심 어린 후기를 확인하세요.
          </p>

          {/* Rating Summary Box */}
          <div className="mt-8 inline-flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-amber-400">4.98</span>
              <span className="text-xs text-zinc-400">/ 5.0</span>
            </div>
            <div className="text-left border-l border-zinc-800 pl-4">
              <div className="flex items-center gap-0.5 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-[11px] text-zinc-400">
                네이버·구글·공식사이트 누적 검증 후기 <strong>487건</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                activeCategory === cat.id
                  ? 'bg-amber-500 border-amber-400 text-zinc-950 font-bold shadow-md'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredReviews.map((rev: ReviewItem) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-all flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{rev.author}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      <span>방문 인증</span>
                    </span>
                  </div>
                  <span className="text-xs text-zinc-400">{rev.date}</span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-[11px] text-zinc-400 ml-2">
                    [{rev.categoryLabel}]
                  </span>
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span>추천 스타일: <strong className="text-amber-300">{rev.recommendedStyle}</strong></span>
                <span className="flex items-center gap-1 text-zinc-400">
                  <ThumbsUp className="w-3 h-3 text-amber-400" />
                  <span>도움이 돼요</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
