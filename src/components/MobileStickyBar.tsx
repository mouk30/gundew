import React from 'react';
import { Phone, MessageCircle, CalendarCheck, Calculator } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_KAKAO_URL } from '../data/mockData';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
  onScrollToCalculator: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  onOpenBooking,
  onScrollToCalculator,
}) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2.5 shadow-2xl shadow-black safe-area-pb"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* 1. Phone Call */}
        <a
          href={`tel:${OFFICIAL_PHONE}`}
          id="mobile-sticky-call"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 active:scale-95 text-zinc-950 font-black text-xs shadow-md shadow-amber-500/20"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-bounce" />
          <span>전화상담</span>
        </a>

        {/* 2. KakaoTalk 1:1 */}
        <a
          href={OFFICIAL_KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-sticky-kakao"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FEE500] active:scale-95 text-zinc-950 font-black text-xs shadow-md"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-current" />
          <span>카톡 비밀상담</span>
        </a>

        {/* 3. Quick Booking */}
        <button
          type="button"
          onClick={onOpenBooking}
          id="mobile-sticky-booking"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-700 active:scale-95 text-zinc-100 font-bold text-xs hover:border-amber-500/50"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5 text-amber-400" />
          <span>실시간 예약</span>
        </button>
      </div>
    </div>
  );
};
