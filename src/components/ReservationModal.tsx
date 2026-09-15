import React, { useState } from 'react';
import { X, CalendarCheck, ShieldCheck, Phone, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_KAKAO_URL } from '../data/mockData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuote?: {
    guests: number;
    hours: number;
    liquor: string;
    total: number;
  } | null;
  initialStyle?: string | null;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  initialQuote,
  initialStyle,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('오늘 (당일)');
  const [time, setTime] = useState('21:00');
  const [guests, setGuests] = useState(initialQuote ? initialQuote.guests : 1);
  const [style, setStyle] = useState(initialStyle || '상관없음 (다양하게 추천)');
  const [pickupNeeded, setPickupNeeded] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [memo, setMemo] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      alert('상담 및 예약 확정 안내를 위해 연락처를 입력해주세요.');
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950 border border-amber-500/40 shadow-2xl shadow-black p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4" />
              <span>건대W 24시간 실시간 안심 예약</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              VIP 룸 & 최우선 초이스 예약
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              가명이나 닉네임으로도 편하게 예약하실 수 있으며, 개인정보는 예약 즉시 안전하게 파기됩니다.
            </p>

            {/* If initial quote exists */}
            {initialQuote && (
              <div className="mb-6 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-zinc-300 flex items-center justify-between">
                <div>
                  <span className="font-bold text-amber-300">선택 견적: </span>
                  <span>{initialQuote.liquor} ({initialQuote.guests}인, {initialQuote.hours}시간)</span>
                </div>
                <span className="font-black text-amber-400">
                  ₩{initialQuote.total.toLocaleString()}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    고객명 (가명/닉네임 가능)
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="예: 지은 / 체리"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    연락처 (필수) <span className="text-amber-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-XXXX-XXXX"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">방문 날짜</label>
                  <select
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="오늘 (당일)">오늘 (당일)</option>
                    <option value="내일">내일</option>
                    <option value="주말 (금/토)">주말 (금/토)</option>
                    <option value="기타 일정 문의">기타 일정 문의</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">방문 희망시간</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="20:00 (오픈 직후)">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                    <option value="23:00">23:00</option>
                    <option value="24:00 (자정)">24:00</option>
                    <option value="01:00 이후 심야">01:00 이후 심야</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">인원수</label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value={1}>1인 (혼방)</option>
                    <option value={2}>2인</option>
                    <option value={3}>3인</option>
                    <option value={4}>4인</option>
                    <option value={5}>5인 이상</option>
                  </select>
                </div>
              </div>

              {/* Preferred Host Style */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  선호하시는 호스트 스타일
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs focus:outline-none focus:border-amber-500"
                >
                  <option value="상관없음 (다양하게 추천)">상관없음 (다양하게 추천)</option>
                  <option value="어깨깡패 · 피지컬 남신 스타일">어깨깡패 · 피지컬 남신 스타일</option>
                  <option value="아이돌 청량 비주얼 스타일">아이돌 청량 비주얼 스타일</option>
                  <option value="깔끔한 댄디 슈트핏 스타일">깔끔한 댄디 슈트핏 스타일</option>
                  <option value="다정한 스위트 연하남 스타일">다정한 스위트 연하남 스타일</option>
                  <option value="트렌디 모델 피지컬 스타일">트렌디 모델 피지컬 스타일</option>
                  <option value="위트 넘치는 분위기 메이커">위트 넘치는 분위기 메이커</option>
                </select>
              </div>

              {/* Free Pickup Option */}
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-white">
                  <input
                    type="checkbox"
                    checked={pickupNeeded}
                    onChange={(e) => setPickupNeeded(e.target.checked)}
                    className="rounded border-zinc-700 text-amber-500 focus:ring-amber-500 w-4 h-4 bg-zinc-900"
                  />
                  <span>무료 고급 세단 안심 픽업 요청 (건대/성수/강남/잠실 등)</span>
                </label>
                {pickupNeeded && (
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="출발 희망 위치를 입력하세요 (예: 성수역 3번출구, 건대 롯백 앞)"
                    className="w-full px-3 py-2 rounded-lg bg-zinc-950 border border-zinc-700 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                )}
              </div>

              {/* Special Memo */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  요청 사항 (생일파티, 조용한 방, 얼음 등)
                </label>
                <textarea
                  rows={2}
                  value={memo}
                  onChange={(e) => setMemo(e.target.value)}
                  placeholder="예: 생일파티 데코 요청, 조용하게 힐링하고 싶어요 등"
                  className="w-full px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-xs placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-black text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>안심 예약 신청 완료하기</span>
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-zinc-900 flex items-center justify-center gap-4 text-xs text-zinc-400">
              <a href={`tel:${OFFICIAL_PHONE}`} className="flex items-center gap-1 hover:text-amber-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>전화 직통: {OFFICIAL_PHONE}</span>
              </a>
              <span>|</span>
              <a
                href={OFFICIAL_KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-amber-300 hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>카톡 1:1 상담</span>
              </a>
            </div>
          </div>
        ) : (
          /* Submission Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-white">안심 예약 접수가 완료되었습니다!</h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm mx-auto">
              입력해주신 연락처(<strong className="text-amber-300">{phone}</strong>)로<br />
              건대W 담당 실장이 3분 이내로 VIP 룸 배정 및 안내 문자를 전송해 드립니다.
            </p>

            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-xs space-y-2 text-zinc-400 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span>예약 일시:</span>
                <span className="text-white font-semibold">{date} {time}</span>
              </div>
              <div className="flex justify-between">
                <span>방문 인원:</span>
                <span className="text-white font-semibold">{guests === 1 ? '1인 (혼방)' : `${guests}인`}</span>
              </div>
              <div className="flex justify-between">
                <span>선호 스타일:</span>
                <span className="text-white font-semibold">{style}</span>
              </div>
              {pickupNeeded && (
                <div className="flex justify-between">
                  <span>픽업 요청:</span>
                  <span className="text-amber-400 font-semibold">{pickupLocation || '접수 완료 (상담 시 조율)'}</span>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <a
                href={`tel:${OFFICIAL_PHONE}`}
                className="flex-1 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>즉시 전화 확인</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-3 rounded-xl bg-zinc-900 text-zinc-300 text-xs font-semibold hover:bg-zinc-800"
              >
                닫기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
