import React, { useState } from 'react';
import { Sparkles, Heart, Star, UserCheck, MessageSquare, Shield } from 'lucide-react';
import { HOST_STYLES } from '../data/mockData';
import { HostProfile } from '../types';

interface LineupSectionProps {
  onOpenBookingWithStyle?: (style: string) => void;
}

export const LineupSection: React.FC<LineupSectionProps> = ({ onOpenBookingWithStyle }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: '전체 에이스 라인업' },
    { id: 'athletic', label: '어깨깡패 · 피지컬 남신' },
    { id: 'idol', label: '아이돌 청량 비주얼' },
    { id: 'dandy', label: '단정한 댄디 슈트핏' },
    { id: 'gentle', label: '다정한 스위트 연하남' },
    { id: 'model', label: '트렌디 모델 피지컬' },
    { id: 'wit', label: '위트 분위기 메이커' },
  ];

  const filteredHosts = selectedFilter === 'all'
    ? HOST_STYLES
    : HOST_STYLES.filter((h) => h.styleCategory === selectedFilter);

  return (
    <section id="lineup" className="py-20 bg-zinc-900/40 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>상시 80~100인 에이스 대기</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            고객님의 취향에 딱 맞추는<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              건대W 대표 스타일 프리뷰
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            건대W는 엄격한 면접과 고객 응대 매너 교육을 통과한 프로페셔널 호스트만을 엄선합니다.<br className="hidden md:inline" />
            마음에 드실 때까지 눈치 볼 필요 없는 <strong>100% 무한 초이스</strong>를 보장해 드립니다.
          </p>
        </div>

        {/* Style Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                selectedFilter === cat.id
                  ? 'bg-amber-500 border-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                  : 'bg-zinc-900/80 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Host Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredHosts.map((host: HostProfile) => (
            <div
              key={host.id}
              className="rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden group flex flex-col justify-between shadow-xl shadow-black/50"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                  <img
                    src={host.image}
                    alt={`${host.nickname} - 건대호빠 건대W 에이스`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                  
                  {/* Popularity Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-900/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold text-amber-300 flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span>선호도 TOP {host.popularityRank}</span>
                  </div>

                  {/* Style Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-amber-500 text-zinc-950 text-[11px] font-extrabold shadow-md">
                    {host.styleLabel}
                  </div>

                  {/* Name & Quick Specs */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="text-2xl font-black text-white">{host.nickname}</h3>
                      <span className="text-xs text-amber-400 font-semibold">{host.age}</span>
                      <span className="text-xs text-zinc-300">| {host.height}</span>
                      <span className="text-xs text-zinc-400">| MBTI: {host.mbti}</span>
                    </div>
                    <p className="text-xs text-zinc-300 italic line-clamp-1">
                      "{host.quote}"
                    </p>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      특기 및 매력 포인트
                    </span>
                    <p className="text-xs text-zinc-300 mt-0.5">{host.specialty}</p>
                  </div>

                  {/* Charm Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {host.charmPoints.map((charm, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                      >
                        #{charm}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onOpenBookingWithStyle && onOpenBookingWithStyle(host.styleLabel)}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-amber-500 hover:text-zinc-950 text-zinc-200 text-xs font-bold border border-zinc-700 hover:border-amber-400 transition-all flex items-center justify-center gap-1.5"
                >
                  <Heart className="w-3.5 h-3.5 text-amber-400 group-hover:text-zinc-950" />
                  <span>이 스타일 우선 초이스 예약</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="p-6 rounded-2xl bg-zinc-950/80 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">원하시는 스타일이 없으신가요?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                사전 상담 시 이상형을 말씀해주시면 출근자 중 가장 일치하는 호스트로 1순위 대기 및 초이스를 세팅해 드립니다.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-amber-300">초이스 교체(체인지) 횟수 제한 없음</span>
          </div>
        </div>
      </div>
    </section>
  );
};
