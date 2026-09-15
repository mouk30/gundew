import { PriceItem, HostProfile, ReviewItem, FaqItem } from '../types';
import minwooImg from '../assets/images/korean_idol_minwoo_1789458618741.jpg';
import junseoImg from '../assets/images/korean_dandy_junseo_1789458640631.jpg';
import dohyunImg from '../assets/images/korean_sweet_dohyun_1789458660810.jpg';
import taehoonImg from '../assets/images/korean_model_taehoon_1789458682700.jpg';
import siwooImg from '../assets/images/korean_wit_siwoo_1789458706020.jpg';
import jinhyukImg from '../assets/images/korean_broad_shoulders_1789459076256.jpg';

export const OFFICIAL_PHONE = "010-7700-9100";
export const OFFICIAL_KAKAO = "snjsbdKi";
export const OFFICIAL_KAKAO_URL = "https://open.kakao.com/o/snjsbdKi";

export const PRICE_LIST: PriceItem[] = [
  {
    id: 'golden-blue-12',
    category: 'whiskey',
    name: '골든블루 사피루스 12Y 세트',
    nameEn: 'Golden Blue Sapphirous Set',
    price: 140000,
    originalPrice: 180000,
    description: '가장 많은 고객님들이 선호하시는 부드러운 목넘김의 프리미엄 위스키 세트',
    includes: ['골든블루 12년산 1병', '계절 생과일 특선 안주', '각종 음료 & 실론티 무제한', '얼음 & 전용 글라스 세팅'],
    popular: true,
  },
  {
    id: 'windsor-12',
    category: 'whiskey',
    name: '윈저 12년산 클래식 세트',
    nameEn: 'Windsor 12Y Classic Set',
    price: 140000,
    originalPrice: 180000,
    description: '정통 스카치 위스키 본연의 깊고 풍부한 향미를 즐길 수 있는 기본 대표 세트',
    includes: ['윈저 12년산 1병', '특선 계절 과일 플레이트', '음료 및 토닉워터 무제한', '기본 마른안주 서비스'],
    popular: false,
  },
  {
    id: 'golden-blue-diamond',
    category: 'whiskey',
    name: '골든블루 다이아몬드 17Y',
    nameEn: 'Golden Blue Diamond 17Y Set',
    price: 180000,
    originalPrice: 220000,
    description: '특별한 날, 더욱 깊고 고급스러운 풍미를 원하시는 분들을 위한 스페셜 위스키',
    includes: ['골든블루 17년산 1병', '수제 카나페 & 프리미엄 과일', '음료 무제한', '전용 칵테일 제조 서비스'],
    popular: false,
  },
  {
    id: 'dom-perignon',
    category: 'champagne',
    name: '돔 페리뇽 빈티지 샴페인',
    nameEn: 'Dom Pérignon Vintage',
    price: 450000,
    description: '생일파티, 기념일 등 화려한 분위기를 연출하는 최고급 프렌치 샴페인',
    includes: ['돔 페리뇽 빈티지 1병', 'VIP 특선 과일 & 치즈 플래터', '전용 샴페인 쿨러 & 잔', '생일/축하 불꽃 퍼포먼스'],
    popular: false,
  },
  {
    id: 'moet-chandon',
    category: 'champagne',
    name: '모엣 & 샹동 임페리얼',
    nameEn: 'Moët & Chandon Brut Impérial',
    price: 220000,
    originalPrice: 260000,
    description: '상쾌한 기포와 과일향으로 기분 좋은 파티의 시작을 알리는 베스트 샴페인',
    includes: ['모엣 샹동 1병', '신선한 계절 과일 안주', '스파클링 칵테일 세팅'],
    popular: true,
  },
];

export const SYSTEM_FEES = {
  tcPerHour: 60000, // 선수 시간당 TC
  waiterTip: 50000, // 방당 1회 웨이터 팁
  roomFee: 0, // 룸비 무료
};

export const SAFETY_GUARANTEES = [
  {
    id: 'price-guarantee',
    title: '100% 정찰제 보장제',
    subtitle: '사전 고지 없는 바가지 요금 0%',
    desc: '입장 전 전화/카톡으로 안내받으신 주대, T/C 외에 룸비, 숨겨진 봉사료 등의 추가 결제가 절대 발생하지 않습니다. 투명한 영수증을 즉시 발행해 드립니다.',
    icon: 'ShieldCheck',
    badge: '정찰제 100%'
  },
  {
    id: 'privacy-guarantee',
    title: '완벽한 프라이버시 비밀보장',
    subtitle: '단독 프라이빗 지하 VIP 출입구',
    desc: '외부 시선이 완벽히 차단된 전용 출입구와 특수 방음 VIP 룸을 제공합니다. 고객님의 상담 내역 및 개인정보는 방문 완료 즉시 철저히 영구 파기됩니다.',
    icon: 'Lock',
    badge: '비밀보장 100%'
  },
  {
    id: 'lineup-guarantee',
    title: '에이스 80+명 무한 초이스',
    subtitle: '마음에 들 때까지 정성 초이스',
    desc: '매일 평균 80~100여 명의 20~30대 에이스 호스트가 출근합니다. 마음에 드는 스타일을 만날 때까지 눈치 보지 않고 편안하게 무한 초이스를 보장합니다.',
    icon: 'Sparkles',
    badge: '상시 80명 대기'
  },
  {
    id: 'pickup-guarantee',
    title: '고급 세단 무료 안심 픽업',
    subtitle: '건대/성수/잠실/강남 전 지역',
    desc: '예약 고객님께 전담 기사가 배정되어 약속 장소에서 매장 앞까지 안전하고 편안하게 무료로 모십니다. 늦은 시간 귀가 동선까지 안심 케어해 드립니다.',
    icon: 'Car',
    badge: '무료 픽업'
  }
];

export const HOST_STYLES: HostProfile[] = [
  {
    id: 'host-jinhyuk',
    nickname: '진혁',
    styleCategory: 'athletic',
    styleLabel: '어깨깡패 · 피지컬 남신',
    height: '187cm',
    age: '29세',
    mbti: 'ENTJ',
    specialty: '웨이트로 다져진 태평양 어깨 & 듬직한 피지컬 매너',
    charmPoints: ['태평양 어깨 & 넓은 등판', '신뢰감 넘치는 훈남 마스크', '중저음의 든든한 보이스'],
    image: jinhyukImg,
    popularityRank: 1,
    quote: '넓은 어깨에 편히 기대세요. 오늘 밤은 오직 당신만을 든든하게 에스코트합니다.'
  },
  {
    id: 'host-1',
    nickname: '민우',
    styleCategory: 'idol',
    styleLabel: '아이돌 청량 비주얼',
    height: '183cm',
    age: '24세',
    mbti: 'ENFP',
    specialty: '다정하고 밝은 에너지, 분위기 리드',
    charmPoints: ['스윗한 미소', '경청 & 폭풍 공감', '센스 있는 대화'],
    image: minwooImg,
    popularityRank: 2,
    quote: '오늘 하루 지친 마음, 온전히 웃으실 수 있도록 채워드릴게요.'
  },
  {
    id: 'host-2',
    nickname: '준서',
    styleCategory: 'dandy',
    styleLabel: '깔끔한 댄디 슈트핏',
    height: '186cm',
    age: '27세',
    mbti: 'INTJ',
    specialty: '조용하고 진중한 카운슬링, 깔끔한 매너',
    charmPoints: ['단정한 분위기', '깊은 중저음 보이스', '세심한 배려'],
    image: junseoImg,
    popularityRank: 2,
    quote: '편안하게 속마음 털어놓을 수 있는 든든한 쉼터가 되어드리겠습니다.'
  },
  {
    id: 'host-3',
    nickname: '도현',
    styleCategory: 'gentle',
    styleLabel: '다정한 스위트 연하남',
    height: '181cm',
    age: '23세',
    mbti: 'ESFJ',
    specialty: '애교 넘치는 리액션, 편안한 힐링 대화',
    charmPoints: ['강아지상 눈매', '칭찬 요정', '지루할 틈 없는 시간'],
    image: dohyunImg,
    popularityRank: 3,
    quote: '누나의 하루 끝에 가장 특별한 선물이 되고 싶어요.'
  },
  {
    id: 'host-4',
    nickname: '태훈',
    styleCategory: 'model',
    styleLabel: '트렌디 모델 피지컬',
    height: '188cm',
    age: '26세',
    mbti: 'ENTP',
    specialty: '남다른 패션 감각, 고급스러운 라운지 무드',
    charmPoints: ['독보적 비율', '시크하지만 반전 다정함', '감각적인 매력'],
    image: taehoonImg,
    popularityRank: 4,
    quote: '기억에 오래 남을 특별하고 감성적인 밤을 선물해 드립니다.'
  },
  {
    id: 'host-5',
    nickname: '시우',
    styleCategory: 'wit',
    styleLabel: '위트 넘치는 분위기 메이커',
    height: '182cm',
    age: '28세',
    mbti: 'ENTJ',
    specialty: '파티 텐션 업, 술자리 게임, 센스만점 입담',
    charmPoints: ['스트레스 날려주는 유머', '센스 넘치는 서포트', '찰떡 호흡'],
    image: siwooImg,
    popularityRank: 5,
    quote: '오늘 스트레스는 전부 룸에 버려두고 가세요. 배꼽 빠지게 해드릴게요!'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: '지* 님 (건대 성수 직장인)',
    date: '2026.09.10',
    rating: 5,
    category: 'solo',
    categoryLabel: '혼방 (1인 방문)',
    content: '호빠 처음이라 문 앞까지 갔다가 돌아올 뻔했는데, 실장님이 전화로 진짜 친절하게 마중 나와주셔서 긴장이 싹 풀렸어요. 강요하는 분위기 1도 없고 혼자 조용히 칵테일 마시면서 민우씨랑 대화 나눴는데 힐링 그 자체였습니다. 정찰제라 가격도 딱 말씀하신 대로 나왔어요!',
    recommendedStyle: '아이돌/스윗 스타일',
    verified: true
  },
  {
    id: 'rev-2',
    author: '서* 님 (생일 파티 모임)',
    date: '2026.09.04',
    rating: 5,
    category: 'birthday',
    categoryLabel: '생일 파티',
    content: '친구들 3명이서 제 생일파티 하려고 건대W 예약했어요. 룸에 생일 축하 가랜드랑 샴페인 서비스까지 챙겨주셔서 감동이었습니다! 선수분들이 분위기를 너무 잘 띄워줘서 3시간 동안 목 쉴 정도로 웃다가 왔네요. 다음 친구 생일 때도 무조건 여기로 재방문합니다.',
    recommendedStyle: '위트/분위기 메이커',
    verified: true
  },
  {
    id: 'rev-3',
    author: '유* 님 (강남 거주 고객)',
    date: '2026.08.28',
    rating: 5,
    category: 'first',
    categoryLabel: '첫 방문',
    content: '강남 호빠만 다니다가 건대가 가성비랑 선수 수질이 좋다는 소문 듣고 와봤는데 진짜 대만족입니다. 강남에선 룸비랑 팁에 바가지 씌이는 느낌이 있었는데 여긴 주대 14만원에 완전 정찰제라 너무 깔끔해요. 라인업도 80명 넘게 계속 들어와서 깜짝 놀랐습니다.',
    recommendedStyle: '댄디/모델 스타일',
    verified: true
  },
  {
    id: 'rev-4',
    author: '혜* 님 (친구 2인 방문)',
    date: '2026.08.19',
    rating: 5,
    category: 'friends',
    categoryLabel: '친구와 함께',
    content: '퇴근하고 친구랑 급 벙개로 실시간 예약하고 갔는데 무료 픽업 차량 와주셔서 비 한 방울 안 맞고 편하게 도착했어요. 안주도 과일 신선하고 얼음이랑 음료도 계속 넉넉하게 채워주셨습니다. 부담 없이 가볍게 한잔하며 스트레스 풀기 최적입니다.',
    recommendedStyle: '스위트/다정 스타일',
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'price',
    question: '건대호빠 기본 주대와 전체 비용은 얼마인가요?',
    answer: '건대W는 100% 투명한 정찰제로 운영됩니다. 기본 주대(골든블루 또는 윈저 12년산 + 특선 과일안주 + 음료/실론티 무제한)는 14만원~15만원 선이며, 호스트 시간당 T/C는 6만원, 웨이터 서포트 팁은 5만원(룸당 1회)입니다. 룸비는 전액 무료이며, 사전에 합의되지 않은 숨겨진 추가 비용은 1원도 없습니다.'
  },
  {
    id: 'faq-2',
    category: 'solo',
    question: '혼자 방문(혼방)하는 고객도 많나요? 어색하지 않을까요?',
    answer: '전체 방문 고객의 약 40% 이상이 혼자 오시는 여성 고객님입니다! 실장 1:1 맞춤 케어를 통해 조용하고 아늑한 프라이빗 룸으로 안내해 드리며, 차분하게 고민을 들어주거나 편안하게 힐링할 수 있는 다정하고 매너 좋은 에이스를 우선 추천해 드려 전혀 어색함 없이 힐링하실 수 있습니다.'
  },
  {
    id: 'faq-3',
    category: 'system',
    question: '초이스는 어떻게 진행되며 마음에 안 들면 변경(체인지) 가능한가요?',
    answer: '원하시는 스타일(아이돌, 댄디, 모델, 위트 등)을 말씀해주시면 담당 실장이 해당 카테고리의 호스트들을 차례대로 보여드립니다. 마음에 드실 때까지 횟수 제한 없이 무한 초이스가 가능하며, 도중에 성향이 맞지 않는 경우에도 부담 없이 실장에게 말씀하시면 매끄럽게 교체해 드립니다.'
  },
  {
    id: 'faq-4',
    category: 'system',
    question: '예약 없이 당일 방문도 가능한가요?',
    answer: '당일 즉시 방문도 가능하지만, 피크 타임(밤 10시~새벽 2시)에는 대기 시간이 발생하거나 룸이 만석일 수 있습니다. 방문 30분~1시간 전에 전화 또는 카카오톡으로 사전 연락 주시면 대기 없는 즉시 입장과 VIP 룸 우선 배정 혜택을 받으실 수 있습니다.'
  },
  {
    id: 'faq-5',
    category: 'pickup',
    question: '무료 픽업 서비스는 어디까지 이용 가능한가요?',
    answer: '건대입구역, 구의, 성수, 자양동, 군자뿐만 아니라 잠실, 강남, 동대문, 왕십리 등 인근 주요 지역에서 출발하시는 고객님께 고급 세단 안심 픽업 서비스를 무료로 지원해 드립니다. 예약 시 출발 위치를 알려주시면 전담 기사가 배차됩니다.'
  },
  {
    id: 'faq-6',
    category: 'privacy',
    question: '사생활 보호 및 신분 노출 걱정은 없나요?',
    answer: '건대W는 철저한 프라이버시 원칙을 고수합니다. 건물 외부에 상호가 크게 노출되지 않는 프라이빗 단독 통로를 이용하며, 룸 내부 방음 시공이 완벽하여 외부 간섭이 없습니다. 또한 모든 상담 전화 및 카톡 내역은 정기적으로 즉시 파기되므로 안심하셔도 됩니다.'
  }
];

export const SEO_ARTICLES = [
  {
    slug: 'gundae-w-anjeon-yeak-guide',
    title: '건대호빠 건대W 안전예약 가이드: 바가지 없는 정찰제와 안심 이용법',
    summary: '건대호빠 방문 전 반드시 확인해야 할 4가지 필수 체크리스트와 100% 정찰제 시스템, 프라이버시 안심 예약 방법 완벽 가이드.',
    content: `
건대 상권은 화양동 먹자골목과 건대입구역 2번 출구를 중심으로 젊음과 활력이 넘치는 대표적인 유흥·문화 허브입니다. 최근 건대호빠(호스트바)를 찾는 고객님들의 수요가 급증하면서, 처음 방문하시는 분들께서 가장 우려하시는 부분은 단연 '바가지 요금'과 '프라이버시 노출'입니다.

건대W는 이러한 고객님들의 불안을 완벽히 해소하고자 4대 안심 보증 시스템을 업계 최초로 전면 도입하였습니다.
1. 사전 정찰제 견적: 방문 전 전화/카카오톡을 통해 음료, 주류, 시간당 T/C, 봉사료까지 투명하게 합산된 총액을 사전 고지합니다.
2. 독립된 VIP 룸 배정: 일반 주점과 달리 외부와 완벽히 격리된 방음 시설과 전용 통로를 통해 지인 마주침이나 불필요한 노출을 100% 방지합니다.
3. 매일 80인 이상의 엄선된 에이스 라인업: 외모와 체격뿐 아니라 언행과 고객 배려 매너 교육을 수료한 전문 호스트만이 룸에 입실합니다.
4. 무료 픽업 서비스: 늦은 시간 방문 시 안전하고 편리하게 이동하실 수 있도록 서울 주요 거점에서 매장까지 고급 세단 픽업을 무상 제공합니다.
    `
  },
  {
    slug: 'gundae-vs-gangnam-hobba-comparison',
    title: '건대호빠 vs 강남호빠 심층 비교 분석: 가성비, 수질, 분위기 차이점',
    summary: '강남 호빠와 건대 호빠의 주대 가격 차이, 호스트 연령대 및 수질, 고객 만족도 및 실속 있는 선택 팁.',
    content: `
많은 고객님들이 호스트바를 고민할 때 '강남호빠'와 '건대호빠' 중 어디를 선택해야 할지 고민하십니다.
실제 비용과 혜택을 분석해보면 명확한 차이가 존재합니다.

1. 주대 및 비용 부담의 차이:
강남 호빠의 경우 기본 양주 세트가 25만~35만원 선에서 시작하며, 별도의 고액 룸비와 봉사료가 가산되는 경우가 많습니다. 반면 건대W는 골든블루/윈저 12년산 기본 주대 14만~15만원으로 강남 대비 약 40% 이상 실속 있는 정찰제를 유지하고 있습니다.

2. 호스트 연령대 및 매력:
강남 상권이 형식적이고 무거운 접대 분위기가 남아있는 반면, 대학가와 트렌드가 결합된 건대 상권은 20대 초중반~30대 초반의 세련되고 밝은 아이돌·댄디형 호스트들이 주를 이룹니다. 자연스럽고 유쾌한 대화와 힐링을 원하시는 고객님들께 건대호빠가 압도적인 만족도를 기록하고 있는 이유입니다.
    `
  },
  {
    slug: 'solo-visitor-hobba-tip',
    title: '혼자 방문(혼방)하는 여성을 위한 1인 호빠 100% 힐링 노하우',
    summary: '혼방이 처음이라도 부담 없는 1:1 맞춤 코스, 추천 시간대, 그리고 실장 케어 시스템 총정리.',
    content: `
'혼자 가도 눈치 보이지 않을까?' 호빠를 처음 방문하시는 분들의 가장 흔한 고민입니다. 하지만 실제 건대W의 주중 방문객 중 40% 이상이 직장 스트레스 해소나 조용한 힐링을 원하는 1인 고객님입니다.

혼방 방문 시 알아두면 좋은 꿀팁:
- 피크 시간(22:00~01:00)보다 이른 저녁 8시~9시 또는 새벽 2시 이후 방문하시면 더욱 여유롭고 조용한 분위기에서 마음에 드는 호스트와 깊이 있는 대화를 나눌 수 있습니다.
- 예약 시 '조용히 대화 나누고 싶다', '칭찬과 응원이 필요하다', '신나는 유머가 필요하다' 등 본인의 오늘 기분을 솔직히 말씀해주시면 맞춤 매칭 확률이 200% 올라갑니다.
- 1인 고객님께는 룸비 무료 및 전담 실장 배려를 통해 단 하나의 불편함도 생기지 않도록 세심하게 보호해 드립니다.
    `
  }
];
