import React, { useState } from 'react';
import { MapPin, Navigation, Car, Copy, Check, ExternalLink, Clock, Phone } from 'lucide-react';
import { OFFICIAL_PHONE } from '../data/mockData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = "서울특별시 광진구 능동로 120 (건대입구역 2번 출구 도보 3분)";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 bg-zinc-950 relative border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>오시는 길 & 무료 픽업 안내</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            건대입구역 2번 출구 도보 3분<br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              서울 전 지역 무료 안심 픽업 서비스
            </span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            대중교통으로도 찾아오시기 매우 편리하며, 자가용 방문 시 무료 발렛 파킹을 제공합니다.<br className="hidden md:inline" />
            원하시는 출발 장소를 말씀해주시면 전용 기사가 안전하게 모시러 갑니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Address Info & Transport */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  LOCATION & ADDRESS
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  건대호빠 건대W 공식 예약센터
                </h3>
                <div className="mt-3 flex items-start gap-2 text-sm text-zinc-300">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{fullAddress}</p>
                    <p className="text-xs text-zinc-400 mt-1">
                      지하철 2호선 / 7호선 건대입구역 2번 출구에서 건대 맛의거리 방향 도보 3분
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '주소 복사완료!' : '주소 텍스트 복사'}</span>
                  </button>

                  <a
                    href="https://map.kakao.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-400" />
                    <span>카카오맵 길찾기</span>
                  </a>

                  <a
                    href="https://map.naver.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 border border-zinc-700 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                    <span>네이버지도 길찾기</span>
                  </a>
                </div>
              </div>

              {/* Transport Specs */}
              <div className="pt-5 border-t border-zinc-800/80 space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-zinc-200 min-w-[70px]">지하철:</span>
                  <span className="text-zinc-400">
                    2호선·7호선 건대입구역 2번 출구 직진 200m (도착 전 전화 주시면 실장이 마중 나갑니다)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-zinc-200 min-w-[70px]">자가용/주차:</span>
                  <span className="text-zinc-400">
                    매장 전용 주차장 완비 및 무료 발렛 파킹 서비스 제공
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-zinc-200 min-w-[70px]">영업시간:</span>
                  <span className="text-zinc-400">
                    매일 저녁 20:00 ~ 익일 오후 14:00 (연중무휴 365일 영업 / 24H 예약 상담)
                  </span>
                </div>
              </div>
            </div>

            {/* Free Pickup Guide Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-amber-950/20 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <Car className="w-5 h-5" />
                <span>무료 고급 세단 안심 픽업 서비스 안내</span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                출발 30분 전 전화나 카톡으로 계신 위치를 알려주시면 전담 기사가 배정되어 약속 장소로 모시러 갑니다.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1 text-[11px] text-zinc-300">
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">건대 / 구의 / 자양</span>
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">성수 / 서울숲 / 뚝섬</span>
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">군자 / 천호 / 잠실</span>
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">강남 / 신사 / 논현</span>
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">왕십리 / 한양대</span>
                <span className="p-2 rounded bg-zinc-900/90 border border-zinc-800 text-center">동대문 / 장한평</span>
              </div>
            </div>
          </div>

          {/* Right: Map Visual Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl relative aspect-[4/3] sm:aspect-[16/10] flex items-center justify-center">
              {/* Map stylized background */}
              <div className="absolute inset-0 bg-zinc-950 opacity-90">
                <div className="w-full h-full bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:16px_16px]" />
              </div>

              {/* Map Road Graphics */}
              <svg className="absolute inset-0 w-full h-full stroke-zinc-800" strokeWidth="6" fill="none">
                <path d="M-50,150 Q150,180 350,120 T700,220" />
                <path d="M200,-50 L250,500" />
                <path d="M450,-50 L400,500" strokeDasharray="4 4" />
              </svg>

              {/* Subway & Venue Pins */}
              <div className="relative z-10 text-center space-y-4">
                {/* Station Pin */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs font-bold shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>건대입구역 2번 출구 (도보 3분)</span>
                </div>

                {/* Main Destination Marker */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-2xl shadow-amber-500/40 animate-bounce">
                    <div className="w-full h-full bg-zinc-950 rounded-[14px] flex items-center justify-center">
                      <span className="font-serif font-black text-amber-400 text-2xl">W</span>
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-lg bg-zinc-950/95 border border-amber-500/50 text-white font-black text-sm shadow-xl">
                    건대W 프라이빗 전용관
                  </div>
                  <span className="text-[11px] text-amber-300 font-semibold mt-0.5">
                    지하 단독 VIP 프라이빗 통로
                  </span>
                </div>

                <div className="pt-2">
                  <a
                    href={`tel:${OFFICIAL_PHONE}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs shadow-lg"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>실시간 도착 마중 서비스 요청</span>
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
