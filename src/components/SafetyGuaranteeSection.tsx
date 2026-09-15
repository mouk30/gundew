import React from 'react';
import { ShieldCheck, Lock, Sparkles, Car, Check, AlertTriangle, ShieldAlert } from 'lucide-react';
import { SAFETY_GUARANTEES } from '../data/mockData';

export const SafetyGuaranteeSection: React.FC = () => {
  return (
    <section id="safety" className="py-20 bg-zinc-900/60 border-t border-b border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>건대W 안전예약 공식 시스템</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            고객 안심을 최우선으로 하는<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              건대W 4대 안전예약 보증제
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            처음 방문하시는 고객님도, 혼자 오시는 고객님도 단 1%의 불안함 없이 편안하게 즐기실 수 있도록<br className="hidden md:inline" />
            건대호빠 업계에서 가장 엄격한 프라이버시 및 가격 투명성 가이드라인을 실천합니다.
          </p>
        </div>

        {/* 4 Core Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SAFETY_GUARANTEES.map((item, index) => {
            const Icon = item.icon === 'ShieldCheck' ? ShieldCheck :
                         item.icon === 'Lock' ? Lock :
                         item.icon === 'Sparkles' ? Sparkles : Car;

            return (
              <div
                key={item.id}
                id={`guarantee-${item.id}`}
                className="group relative p-6 sm:p-8 rounded-2xl bg-zinc-950/80 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/5"
              >
                {/* Number & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs font-semibold text-amber-400/90 mb-3 tracking-wide">
                  {item.subtitle}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Sub features check */}
                <div className="mt-5 pt-4 border-t border-zinc-900 flex items-center gap-2 text-xs text-zinc-300">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>실시간 실장 직통 상담으로 투명하게 확인 가능</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Box: 건대W vs 타업소 불투명 예약 */}
        <div className="rounded-2xl bg-zinc-950 border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>건대호빠 방문 전 필수 비교: 일반 업소 vs 건대W 안전예약</span>
            </h3>
            <span className="text-xs text-zinc-400 font-medium">소비자 보호 기준</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-800 text-sm">
            {/* Warning Column */}
            <div className="p-6 bg-red-950/10 space-y-3.5">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>주의: 일부 불투명 호빠 피해 사례</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>사전 주대와 달리 결제 시 과도한 룸비 및 웨이터 추가 봉사료 요구</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>대로변 입구 노출로 인한 방문자 사생활 노출 위험</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>선수 부족으로 강제 묶음 또는 마음에 들지 않아도 초이스 강요</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">✕</span>
                  <span>이동 시 픽업 서비스 부재로 밤늦은 시간 길거리 방치</span>
                </li>
              </ul>
            </div>

            {/* 건대W Solution Column */}
            <div className="p-6 bg-emerald-950/10 space-y-3.5">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Check className="w-4 h-4 shrink-0" />
                <span>건대W 공식센터만의 차별화 보증</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-200">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>100% 정찰제 계약:</strong> 룸비 무료, 사전 안내된 주대/TC 외 0원</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>단독 지하 VIP 프라이빗 통로:</strong> 외부 동선 완벽 분리</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>상시 80~100인 대기:</strong> 100% 만족할 때까지 편안한 무한초이스</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>고급 세단 무료 픽업:</strong> 서울 주요 지역 전담 도어투도어 케어</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
