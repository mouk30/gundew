import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ShieldCheck, Sparkles, Menu, X, CalendarCheck } from 'lucide-react';
import { OFFICIAL_PHONE, OFFICIAL_KAKAO_URL } from '../data/mockData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '정찰제 주대', href: '#pricing' },
    { name: '실시간 견적', href: '#calculator' },
    { name: '안심예약 보증', href: '#safety' },
    { name: '에이스 라인업', href: '#lineup' },
    { name: '초보·혼방 가이드', href: '#guide' },
    { name: '리얼후기', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: '오시는길', href: '#location' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-amber-500/20 shadow-xl shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-zinc-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 via-amber-600 to-amber-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-zinc-950 rounded-[7px] flex items-center justify-center">
              <span className="font-serif font-black text-amber-400 text-lg tracking-wider">W</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                건대W
              </span>
              <span className="text-xs px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                1등 호빠
              </span>
            </div>
            <p className="text-[10px] text-zinc-400 font-medium tracking-wider -mt-0.5">
              공식 안심 예약센터
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${OFFICIAL_PHONE}`}
            id="nav-call-btn"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-200 hover:border-amber-500/50 hover:text-amber-300 transition-all"
            title="24시간 즉시 전화상담"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>{OFFICIAL_PHONE}</span>
          </a>

          <a
            href={OFFICIAL_KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-kakao-btn"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[#FEE500] text-zinc-950 hover:bg-[#ebd300] transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>카톡 비밀상담</span>
          </a>

          <button
            onClick={onOpenBooking}
            id="nav-reservation-btn"
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 font-bold shadow-md shadow-amber-500/20 transition-all"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>실시간 안심예약</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenBooking}
            className="text-xs font-bold px-2.5 py-1.5 rounded-md bg-amber-500 text-zinc-950"
          >
            예약신청
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle"
            aria-label="메뉴 열기"
            className="p-2 text-zinc-400 hover:text-white rounded-lg bg-zinc-900 border border-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/98 border-b border-zinc-800 px-5 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800/80">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-amber-400 p-2 rounded-md hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={`tel:${OFFICIAL_PHONE}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-amber-500/30 text-amber-300 font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>전화문의: {OFFICIAL_PHONE}</span>
            </a>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={OFFICIAL_KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-[#FEE500] text-zinc-950 font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>카카오톡 상담</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-amber-500 text-zinc-950 font-bold text-xs"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>실시간 예약</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
