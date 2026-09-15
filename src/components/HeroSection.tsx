import React from 'react';
import { Phone, MessageCircle, ShieldCheck, Sparkles, Car, CheckCircle2, ChevronRight, Award, Users } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_KAKAO_URL } from '../data/mockData';

interface HeroSectionProps {
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking, onOpenCalculator }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none z-0" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-xs font-medium text-amber-300 mb-6 shadow-lg shadow-black/50 backdrop-blur-sm animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400 ring-4 ring-emerald-500/20" />
          <span className="font-semibold tracking-wide">실시간 현황:</span>
          <span className="text-zinc-300">오늘 출근 선수 <strong className="text-white">86명</strong> 대기 중</span>
          <span className="text-amber-500/60">|</span>
          <span className="text-amber-200">24H 당일 즉시 예약 가능</span>
        </div>

        {/* Primary SEO Heading (H1) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.2]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 mb-2 font-serif">
            건대호빠 1등 건대W
          </span>
          <span className="text-2xl sm:text-4xl lg:text-5xl font-bold text-zinc-100">
            공식 안심 예약센터
          </span>
        </h1>

        {/* Value Proposition Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8">
          정찰제 주대 <span className="text-amber-300 font-semibold">140,000원~</span> · 
          바가지요금 0% 보증 · 
          <span className="text-amber-300 font-semibold"> 100% 프라이버시 비밀보장</span>.<br className="hidden sm:inline" />
          건대입구역 2번 출구 도보 3분 & 서울 전역 
          <span className="text-amber-300 font-semibold"> 무료 안심 픽업 서비스</span> 상시 운행 중.
        </p>

        {/* Core Guarantee Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-left">
          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">100% 정찰제</p>
              <p className="text-[11px] text-zinc-400">추가 바가지 0원</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">무한 초이스</p>
              <p className="text-[11px] text-zinc-400">매일 80인+ 출근</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-sm flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">초보·혼방 환영</p>
              <p className="text-[11px] text-zinc-400">1:1 맞춤 배려 케어</p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900/80 border border-amber-500/30 backdrop-blur-sm flex items-center gap-2.5 shadow-lg shadow-amber-500/5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
              <Car className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-1">
                <span>포르쉐 안심 픽업</span>
                <span className="text-[10px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">VIP</span>
              </p>
              <p className="text-[11px] text-zinc-400">포르쉐·고급세단 상시대기</p>
            </div>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
          <a
            href={`tel:${OFFICIAL_PHONE}`}
            id="hero-call-cta"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-zinc-950 font-bold text-base shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            <span>24H 전화 직통상담</span>
          </a>

          <a
            href={OFFICIAL_KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="hero-kakao-cta"
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEE500] hover:bg-[#fae100] text-zinc-950 font-bold text-base shadow-lg shadow-black/30 active:scale-[0.99] transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>카톡 1:1 비밀상담</span>
          </a>

          <button
            onClick={onOpenCalculator}
            id="hero-calc-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold text-sm border border-zinc-700 hover:border-amber-500/50 transition-all cursor-pointer"
          >
            <span>주대 계산기</span>
            <ChevronRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* Trust Signals */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>건대 고객만족도 1위</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>누적 리뷰 487건 (평점 4.98)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>철저한 신분보호 및 통화내역 파기</span>
          </div>
        </div>
      </div>
    </section>
  );
};
