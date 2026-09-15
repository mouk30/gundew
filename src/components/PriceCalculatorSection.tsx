import React, { useState } from 'react';
import { Calculator, Check, Sparkles, HelpCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { PRICE_LIST, SYSTEM_FEES, OFFICIAL_PHONE, OFFICIAL_KAKAO } from '../data/mockData';

interface PriceCalculatorSectionProps {
  onOpenBookingWithEstimate?: (summary: { guests: number; hours: number; liquor: string; total: number }) => void;
}

export const PriceCalculatorSection: React.FC<PriceCalculatorSectionProps> = ({ onOpenBookingWithEstimate }) => {
  const [guestCount, setGuestCount] = useState<number>(1);
  const [hours, setHours] = useState<number>(2);
  const [selectedLiquorId, setSelectedLiquorId] = useState<string>('golden-blue-12');

  const selectedLiquor = PRICE_LIST.find((item) => item.id === selectedLiquorId) || PRICE_LIST[0];

  // Calculate:
  // Liquor price + (TC per hour * guests * hours) + Waiter Tip
  const liquorTotal = selectedLiquor.price;
  const tcTotal = SYSTEM_FEES.tcPerHour * guestCount * hours;
  const waiterTip = SYSTEM_FEES.waiterTip;
  const roomFee = SYSTEM_FEES.roomFee;
  const grandTotal = liquorTotal + tcTotal + waiterTip + roomFee;
  const perPersonCost = Math.round(grandTotal / guestCount);

  const handleBookWithQuote = () => {
    if (onOpenBookingWithEstimate) {
      onOpenBookingWithEstimate({
        guests: guestCount,
        hours: hours,
        liquor: selectedLiquor.name,
        total: grandTotal,
      });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>100% 투명 정찰제 가격표</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            바가지 없는 투명한 주대와<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              실시간 셀프 견적 계산기
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            사전에 안내드린 금액 외에 어떠한 숨겨진 비용도 추가되지 않습니다.<br className="hidden md:inline" />
            인원수와 이용 시간에 맞춰 실시간으로 투명한 견적을 직접 확인해보세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PRICE_LIST.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                item.popular
                  ? 'bg-zinc-900/90 border-amber-500/50 shadow-2xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {item.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-extrabold text-[11px] shadow-md tracking-wider">
                  ★ 고객 선호도 1위
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400/90">
                    {item.category === 'whiskey' ? '위스키 특선' : '스파클링 샴페인'}
                  </span>
                  {item.originalPrice && (
                    <span className="text-xs text-zinc-500 line-through">
                      ₩{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                <p className="text-xs text-zinc-400 mb-4">{item.description}</p>

                <div className="flex items-baseline gap-1.5 mb-6 pb-5 border-b border-zinc-800">
                  <span className="text-2xl sm:text-3xl font-black text-amber-400">
                    ₩{item.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">/ 1병 기본세트</span>
                </div>

                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-semibold text-zinc-300">세트 기본 포함 혜택:</p>
                  {item.includes.map((inc, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedLiquorId(item.id);
                  const calcElement = document.getElementById('calculator');
                  if (calcElement) {
                    calcElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-2.5 rounded-xl font-bold text-xs transition-all ${
                  item.popular
                    ? 'bg-amber-500 hover:bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                }`}
              >
                이 주류로 견적 계산하기
              </button>
            </div>
          ))}
        </div>

        {/* Real-time Calculator Box */}
        <div id="calculator" className="rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 border border-amber-500/30 p-6 sm:p-10 shadow-2xl shadow-black/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-zinc-800">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Real-Time Price Estimator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                건대W 실시간 정찰제 주대 계산기
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                인원수, 시간, 주류를 선택하시면 즉시 100% 일치하는 정확한 총액이 계산됩니다.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 self-start md:self-auto">
              <Check className="w-4 h-4" />
              <span>룸비 ₩0 무료 적용 중</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Guests */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  1. 방문 인원수 선택
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuestCount(num)}
                      className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                        guestCount === num
                          ? 'bg-amber-500 border-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {num === 1 ? '1인 (혼방)' : `${num}인`}
                    </button>
                  ))}
                </div>
                {guestCount === 1 && (
                  <p className="text-[11px] text-amber-400/90 mt-1.5 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>혼자 방문 고객님께는 조용한 힐링 룸과 1:1 맞춤 에이스가 우선 배정됩니다.</span>
                  </p>
                )}
              </div>

              {/* Step 2: Hours */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  2. 예상 이용 시간
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, 4].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHours(h)}
                      className={`py-3 rounded-xl font-bold text-xs sm:text-sm transition-all border ${
                        hours === h
                          ? 'bg-amber-500 border-amber-400 text-zinc-950 shadow-md shadow-amber-500/20'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      {h}시간
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-zinc-400 mt-1.5">
                  * 기본 1시간부터 가능하며, 현장에서 자유롭게 연장 가능합니다.
                </p>
              </div>

              {/* Step 3: Liquor */}
              <div>
                <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  3. 주류 세트 선택
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PRICE_LIST.map((lq) => (
                    <button
                      key={lq.id}
                      type="button"
                      onClick={() => setSelectedLiquorId(lq.id)}
                      className={`p-3 rounded-xl text-left transition-all border flex items-center justify-between ${
                        selectedLiquorId === lq.id
                          ? 'bg-amber-500/10 border-amber-500 text-white shadow-md'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <div>
                        <p className={`text-xs font-bold ${selectedLiquorId === lq.id ? 'text-amber-300' : 'text-zinc-200'}`}>
                          {lq.name}
                        </p>
                        <p className="text-[11px] text-zinc-400">{lq.includes[1]}</p>
                      </div>
                      <span className="text-xs font-extrabold text-amber-400">
                        ₩{lq.price.toLocaleString()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Detailed Cost Breakdown Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-zinc-950 border border-zinc-800 shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
                  <h4 className="text-sm font-bold text-white">상세 내역 영수증 견적</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold">
                    100% 정찰제 일치
                  </span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">기본 주류 세트 ({selectedLiquor.name})</span>
                    <span className="font-semibold text-white">₩{liquorTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">
                      선수 T/C ({guestCount}명 × {hours}시간 × 6만)
                    </span>
                    <span className="font-semibold text-white">₩{tcTotal.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">웨이터 팁 (룸당 1회 고정)</span>
                    <span className="font-semibold text-white">₩{waiterTip.toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">VIP 프라이빗 룸 이용료</span>
                    <span className="font-semibold text-emerald-400">₩0 (무료)</span>
                  </div>

                  <div className="flex items-center justify-between text-zinc-300">
                    <span className="text-zinc-400">특선 과일 및 음료 무제한</span>
                    <span className="font-semibold text-emerald-400">무료 제공</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-extrabold text-white">총 예상 금액</span>
                    <span className="text-2xl sm:text-3xl font-black text-amber-400">
                      ₩{grandTotal.toLocaleString()}
                    </span>
                  </div>
                  {guestCount > 1 && (
                    <div className="flex items-center justify-between text-xs text-zinc-400">
                      <span>1인당 부담 금액</span>
                      <span className="text-zinc-200 font-semibold">
                        약 ₩{perPersonCost.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Booking CTA for this Quote */}
              <div className="pt-6 mt-6 border-t border-zinc-800 space-y-2.5">
                <button
                  onClick={handleBookWithQuote}
                  id="calc-apply-reservation"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                >
                  <span>이 견적으로 실시간 예약하기</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${OFFICIAL_PHONE}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>전화 즉시확인</span>
                  </a>
                  <a
                    href={`https://open.kakao.com/me/${OFFICIAL_KAKAO}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#FEE500] hover:bg-[#fae100] text-zinc-950 text-xs font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>카톡 견적전송</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
