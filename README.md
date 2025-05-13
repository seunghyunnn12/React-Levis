# 🧥 React Levi’s Clone

Levi's 공식 홈페이지를 참고하여 제작한 반응형 웹 클론 프로젝트입니다.  
React와 Swiper.js를 활용해 슬라이더와 데이터 중심 구조를 구현하였으며, 상품 데이터를 별도의 파일로 관리하고 재사용 가능한 컴포넌트로 구성하였습니다.

👉 **[배포 링크 바로가기](https://seunghyunnn12.github.io/React-Levis/)**

---

## ⚙️ 주요 기능

- ✅ React 기반의 SPA 구조
- ✅ Top 배너 접기 기능 (`useState`)
- ✅ 스크롤 감지 헤더 스타일 변경 (`useEffect`)
- ✅ 모바일 내비게이션 모달 (`modalOpen`)
- ✅ Swiper.js 기반 슬라이더 (`Section2`)
  - 반응형 슬라이드 (`breakpoints`)
  - Hover 시 이미지 전환
- ✅ 상품 데이터 외부 파일로 관리 (`data.js`)
- ✅ "맨 위로 가기" 퀵 버튼 (`RightQuick`)

---

## 📁 프로젝트 구조
React-Levis/
├── public/
│   └── levis-img/               # 제품 이미지 및 기타 정적 이미지
│       ├── man0.png
│       ├── man0-1.png
│       ├── ...
│
├── src/
│   ├── components/              # 주요 UI 컴포넌트
│   │   ├── Topbanner.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Section1.jsx
│   │   ├── Section2.jsx
│   │   ├── Section3.jsx
│   │   ├── Section4.jsx        # 주석 처리된 섹션
│   │   ├── Section5.jsx
│   │   ├── Footer.jsx
│   │   ├── RightQuick.jsx
│   │   └── NavModal.jsx
│
│   ├── data/                    # 외부 데이터 모듈
│   │   └── sc2Data.js           # Section2에서 사용하는 상품 데이터
│
│   ├── styles/                  # SCSS 스타일 파일
│   │   ├── Section2.scss
│   │   └── ...                  # 필요 시 다른 섹션 스타일
│
│   ├── App.jsx                  # 메인 앱 컴포넌트
│   ├── App.scss                 # 전역 스타일
│   └── index.js                 # 리액트 엔트리 포인트
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js or 기타 설정 파일 (사용한 툴에 따라 다름)

