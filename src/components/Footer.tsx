import React from 'react';
import { Shield, Phone, MessageCircle, MapPin, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_KAKAO, OFFICIAL_KAKAO_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pb-24 lg:pb-12 pt-16 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500 p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-zinc-950 rounded-md flex items-center justify-center">
                  <span className="font-serif font-black text-amber-400 text-base">W</span>
                </div>
              </div>
              <span className="text-base font-bold text-white">건대호빠 건대W 공식센터</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              건대 지역 만족도 1위 호스트바 건대W. 100% 정찰제, 100% 비밀보장, 상시 80인 에이스 라인업 및 서울 전 지역 무료 안심 픽업 서비스를 제공합니다.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-amber-400 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>연중무휴 365일 24시간 안심 예약 상담</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">바로가기 메뉴</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-amber-300 transition-colors">정찰제 주대 및 메뉴</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">실시간 주대 계산기</a></li>
              <li><a href="#safety" className="hover:text-amber-300 transition-colors">4대 안전예약 보증제</a></li>
              <li><a href="#lineup" className="hover:text-amber-300 transition-colors">에이스 호스트 라인업</a></li>
              <li><a href="#guide" className="hover:text-amber-300 transition-colors">초보자 및 1인 혼방 가이드</a></li>
              <li><a href="#reviews" className="hover:text-amber-300 transition-colors">생생한 리얼 방문 후기</a></li>
              <li><a href="#location" className="hover:text-amber-300 transition-colors">오시는 길 & 무료 픽업</a></li>
            </ul>
          </div>

          {/* Col 3: Safe & Compliance Notice */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">안전 및 컴플라이언스</h4>
            <div className="space-y-2.5 text-xs text-zinc-400">
              <div className="flex items-center gap-2 text-red-400 font-bold">
                <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-[10px]">
                  19
                </span>
                <span>미성년자 출입 및 고용 절대 불가</span>
              </div>
              <p className="leading-relaxed">
                청소년보호법 규정에 따라 19세 미만 미성년자의 출입을 엄격히 금지하며, 입장 시 철저한 신분증 확인 절차를 거칩니다.
              </p>
              <p className="leading-relaxed text-zinc-500">
                고객님의 모든 전화·문자·카카오톡 상담 내역은 사생활 보호 원칙에 따라 상담 및 방문 완료 후 지체 없이 영구 파기됩니다.
              </p>
            </div>
          </div>

          {/* Col 4: Contact & Operations */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">예약 및 고객센터</h4>
            <div className="space-y-2.5 text-xs">
              <p className="text-zinc-300">
                <strong className="text-white">직통 상담 전화:</strong><br />
                <a href={`tel:${OFFICIAL_PHONE}`} className="text-amber-400 font-bold text-sm hover:underline">
                  {OFFICIAL_PHONE}
                </a>
              </p>
              <p className="text-zinc-300">
                <strong className="text-white">카카오톡 상담:</strong><br />
                <a
                  href={OFFICIAL_KAKAO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-amber-300 hover:underline mt-0.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current text-[#FEE500]" />
                  <span>1:1 오픈채팅 바로가기</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </a>
              </p>
              <p className="text-zinc-400">
                <strong>주소:</strong> 서울특별시 광진구 화양동 (건대입구역 2번 출구 도보 3분)
              </p>
              <p className="text-zinc-400">
                <strong>영업시간:</strong> 매일 20:00 ~ 익일 14:00 (연중무휴)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-500">
          <p>
            © 2026 건대호빠 건대W 공식 예약센터. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>이용약관</span>
            <span>|</span>
            <span>개인정보처리방침</span>
            <span>|</span>
            <span>소비자안심보증</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
