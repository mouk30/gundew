import React from 'react';
import { HelpCircle, User, MessageCircleHeart, GlassWater, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';

interface FirstTimeGuideSectionProps {
  onOpenBooking: () => void;
}

export const FirstTimeGuideSection: React.FC<FirstTimeGuideSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: '부담 없는 1:1 사전 상담',
      desc: '전화(010-8482-9753)나 카톡으로 방문 인원, 시간, 선호 스타일을 편하게 말씀해주세요. 인원수에 맞춘 정확한 총액을 사전에 미리 안내해 드립니다.',
      highlight: '견적 100% 사전 확인'
    },
    {
      num: '02',
      title: '안심 픽업 & 프라이빗 룸 안내',
      desc: '원하시는 장소로 무료 고급 세단 픽업이 지원되며, 도착 시 전담 실장이 외부 시선 없는 지하 단독 전용 통로로 직접 정중히 에스코트합니다.',
      highlight: '100% 사생활 보호'
    },
    {
      num: '03',
      title: '여유로운 맞춤 무한 초이스',
      desc: '시원한 웰컴 음료를 드시며 원하시는 스타일의 에이스들을 천천히 만나보세요. 마음에 쏙 드실 때까지 횟수 제한 없이 편안하게 선택하실 수 있습니다.',
      highlight: '눈치 없는 무한 초이스'
    },
    {
      num: '04',
      title: '즐거운 힐링 & 정찰제 정산',
      desc: '지친 하루의 스트레스를 날려버리는 행복한 시간을 보내신 후, 처음에 안내받으신 정찰제 금액 그대로 투명하게 계산하고 안전 귀가를 도와드립니다.',
      highlight: '추가 바가지 절대 없음'
    },
  ];

  return (
    <section id="guide" className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>초보자 & 혼방(1인) 고객 특별 가이드</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            처음이라도 전혀 걱정 없는<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              건대호빠 4단계 이용 매뉴얼
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            '처음인데 뻘쭘하지 않을까?', '혼자 가면 이상하게 보지 않을까?'<br className="hidden md:inline" />
            건대W에서는 고객님의 작은 불안까지 세심하게 배려하여 편안하고 따뜻한 힐링을 약속드립니다.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-all duration-300 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-serif text-amber-400/80 group-hover:text-amber-400 transition-colors">
                    {step.num}
                  </span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {step.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold">
                <span>안심 시스템 작동</span>
                <CheckCircle className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Solo Visitor (혼방) Special Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-950/40 via-zinc-900 to-purple-950/30 border border-amber-500/30 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                <HeartHandshake className="w-4 h-4" />
                <span>여성 1인 혼자 방문(혼방) 고객 1:1 특화 코스</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "혼자 조용히 술 한잔하며 깊은 대화를 나누고 싶을 때"
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                건대W를 찾아주시는 고객님의 약 <strong>40%가 1인 혼방 고객님</strong>입니다.<br />
                직장 스트레스, 힘든 일상 속 나만의 특별한 대화 상대가 필요할 때 편안하게 방문해보세요.
                과도한 텐션이나 부담스러운 술 권유 없이, 편안한 공감과 배려 가득한 프리미엄 케어를 제공합니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>혼방 전용 프라이빗 룸 무료</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>공감 & 경청형 에이스 우선 배정</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>술 권유 없는 무알콜/음료 자유</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>1인 혼방 안심 예약하기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-zinc-400">
                실장 1:1 직통 상담으로 조용하게 예약 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
