
'use strict';
const ITEMS = [{"category":"오프라인","name":"가격표｜기존 서식 적용","standard":1.5,"advanced":2.5,"scope":"확정된 서식·상품정보 1종","note":"문구·가격 교체 및 기본 검수만. 신규 컬러·장식·브랜딩 개발은 '디자인형 가격표' 선택; 다품목 일괄 적용 제외"},{"category":"오프라인","name":"가격표｜신규 디자인형","standard":6.0,"advanced":8.0,"scope":"신규 비주얼 1종·가이드 제공","note":"가격 강조 구조·서체·그래픽 구성 등 디자인 포함. 브랜드 톤 신규 개발·일러스트 별도"},{"category":"오프라인","name":"정보 스티커｜안내·원산지","standard":3.0,"advanced":4.0,"scope":"문구 확정·기본 레이아웃 1종","note":"식별성·위계 구성. 법정 표시 문구의 적법성·맞춤법 등 원문 승인과 다품목 적용 제외"},{"category":"오프라인","name":"제품 스티커｜브랜딩형","standard":8.0,"advanced":12.0,"scope":"제품명·컬러·일러스트 포함 1종","note":"제품 정체성·아이콘·재료 비주얼 등 신규 디자인. 칼선·규격 확인 포함; 성분·표시 법적 검증 제외"},{"category":"패키지","name":"식품 패키지 라벨｜앞·뒤","standard":16.0,"advanced":22.0,"scope":"1SKU, 규격·표시 원고 제공","note":"전후면 정보 구조·이미지·재단선 반영. 신규 패키지 구조·촬영·법규 검토·목업 실물 제작 제외"},{"category":"패키지","name":"선물세트 띠지·슬리브","standard":8.0,"advanced":12.0,"scope":"1규격·1제품군, 칼선 제공","note":"상품 스토리·전통 모티프·후가공 파일 별도 검토. 생산 금형·인쇄 제외"},{"category":"패키지","name":"선물 패키지 디자인｜박스 1종","standard":20.0,"advanced":26.0,"scope":"칼선 제공·전면 그래픽 중심","note":"외관 1종 디자인. 구조 설계·인쇄감리·시제품 승인 제외"},{"category":"오프라인","name":"와블러·윙게시·행잉 POP","standard":4.0,"advanced":6.0,"scope":"1종 신규 레이아웃","note":"원고·규격 확정, 단면. 형태 설계·후가공·다수 변형 제외"},{"category":"오프라인","name":"A4·A3 POP·포스터","standard":6.0,"advanced":8.0,"scope":"단면 1종, 내용·사진 제공","note":"신규 구성과 기본 보정·출력 파일. 다량 카피·촬영 및 기획 제외"},{"category":"오프라인","name":"테이블텐트·안내문","standard":7.0,"advanced":9.0,"scope":"단면 또는 정보량 적은 양면 1종","note":"양면에 각기 다른 콘텐츠가 길게 실리면 2건 또는 범위 조정"},{"category":"오프라인","name":"매장 코너 사인·존 안내","standard":6.0,"advanced":8.0,"scope":"사인 1종, 위치·규격 확정","note":"가독성·색상체계 정리. 시공 도면·현장 치수 실측 제외"},{"category":"오프라인","name":"현수막","standard":6,"advanced":8.0,"scope":"현수막 1종·가로/세로형","note":"행사·매장용 대형 출력물. 출력용 원본 사진 보정 시 별도 가산, 인쇄·설치 제외."},{"category":"오프라인","name":"A형 배너(입간판)","standard":6,"advanced":8.0,"scope":"A형 배너 1면 기준","note":"입간판 1면 신규 디자인. 양면 서로 다른 디자인이면 별도 유형/수량 협의, 기구·시공 제외."},{"category":"오프라인","name":"X배너(엑스배너)","standard":6,"advanced":8.0,"scope":"X배너 1종, 세로형","note":"엑스배너 1종. 누끼·합성 심화 선택, 거치대·인쇄·배송 제외."},{"category":"오프라인","name":"라이트패널·백릿","standard":6,"advanced":10,"scope":"세로 대형 1종, 촬영 이미지 제공","note":"기본 자료·이미지가 제공된 1종 디자인(일반 0.75일 / 심화 1.25일). 대형 출력 시 원본 고해상도 보정·합성이 필요할 때만 별도 추가. 인쇄·설치 제외."},{"category":"오프라인","name":"벽면·쇼윈도·대형 그래픽","standard":16.0,"advanced":22.0,"scope":"1면, 실제 규격·원고 확정","note":"대형 그래픽 합성 및 분할 파일 검토; 유리 시트 컷팅·시공 제외. 고해상도 재작업 시 별도"},{"category":"오프라인","name":"LED·외부 간판 그래픽","standard":12.0,"advanced":16.0,"scope":"주·야간 가독성 고려 시안 1종","note":"간판 본체·LED 배광·점등 설치 제외. 대형 출력용 사진 재가공 별도"},{"category":"오프라인","name":"메뉴판｜1~2P","standard":10.0,"advanced":14.0,"scope":"메뉴·가격 확정, 사진 제공","note":"정보 위계·단가 비교·기본 보정. 다국어 번역·메뉴 개발 제외"},{"category":"오프라인","name":"메뉴판｜4~8P","standard":24.0,"advanced":34,"scope":"메뉴·가격 확정, 사진 제공","note":"다중 페이지의 디자인 시스템·표기 검수 포함. 다량 이미지 신규 촬영 제외"},{"category":"편집·문서","name":"리플릿｜1P","standard":8.0,"advanced":12.0,"scope":"A4 단면 등 1면, 원고·사진 제공","note":"홍보물 1면의 신규 그래픽·카피 배치·기본 보정 포함. 콘텐츠 기획·취재·인쇄 별도."},{"category":"편집·문서","name":"리플릿｜4P","standard":20.0,"advanced":26.0,"scope":"4면 기준, 접지 형태·원고·사진 확정","note":"접지 순서·앞뒤면 연결·일관된 편집. 특수 접지 설계·촬영·취재·인쇄 제외."},{"category":"편집·문서","name":"브로슈어｜1P","standard":16.0,"advanced":22.0,"scope":"내지 1P 단위 편집, 정보·사진 제공","note":"정보 구조화, 편집 디자인·그래프·이미지 배열 등 1P 기준. 복잡한 인포그래픽·취재·신규 원고 개발은 별도."},{"category":"편집·문서","name":"브로슈어｜4P","standard":40.0,"advanced":54,"scope":"표지·내지 포함 4P, 원고·사진 제공","note":"표지부터 내지까지 편집 체계·정보 가공·페이지 검수 포함. 리플릿보다 정보량/편집 공수 큼. 신규 취재·사진 촬영·전략 기획 제외."},{"category":"편집·문서","name":"레시피카드｜A5 양면","standard":10.0,"advanced":14.0,"scope":"레시피 원고·식재료 사진 제공","note":"다양한 조리 단계 이미지 합성은 심화 적용. 레시피 실험·조리 촬영·원고 기획 제외"},{"category":"오프라인","name":"VMD 매장 시뮬레이션","standard":12.0,"advanced":16.0,"scope":"실제 매장 사진·배치안 제공 1장","note":"실매장 사진 유지하며 사인·매대·POP 합성. 실제 설계·3D 정밀 모델링 제외"},{"category":"오프라인","name":"기존 디자인 규격 변경","standard":1.5,"advanced":2.5,"scope":"승인된 원본 1종→다른 크기 1종","note":"레이아웃 전면 재구성 시 신규 작업 적용. 대형 확대 시 실효 해상도 보완 별도"},{"category":"온라인","name":"웹배너｜신규 1종","standard":4.0,"advanced":6.0,"scope":"한 규격, 카피·이미지 제공","note":"신규 비주얼·텍스트 배치. 고난도 합성·콘셉트 기획 제외"},{"category":"온라인","name":"웹배너｜기존 시안 리사이즈","standard":1.5,"advanced":2.5,"scope":"기존 승인 시안 1규격","note":"이미지 재구성·반응형 재설계가 필요한 경우 신규 1종으로 재산정"},{"category":"온라인","name":"SNS 피드 이미지｜1장","standard":4.0,"advanced":6.0,"scope":"카피·자료 확정","note":"브랜드 일관성 반영, 촬영 제외"},{"category":"온라인","name":"SNS 카드뉴스｜1장","standard":6.0,"advanced":8.0,"scope":"단독 카드 1장, 카피·내용 확정","note":"한 장 안의 정보 구조·타이포·시각화 포함. 자료 조사·원고 기획·데이터 검증 별도."},{"category":"온라인","name":"SNS 카드뉴스｜5장","standard":12.0,"advanced":16.0,"scope":"5장 구성·원고 확정","note":"표지·본문 템플릿·그래픽 통일. 주제 조사·정보 기획 별도"},{"category":"온라인","name":"블로그 썸네일｜1장","standard":3.0,"advanced":4.0,"scope":"원고·사진 제공","note":"기본 이미지 보정·타이포 구성, 원고 제작 제외"},{"category":"온라인","name":"블로그 본문 이미지｜5장","standard":12.0,"advanced":16.0,"scope":"5장 연속 구성·자료 제공","note":"별도 조리·제품 촬영, 원고 집필, 모바일 게시 검수 제외"},{"category":"온라인","name":"EDM·이메일 뉴스레터","standard":12.0,"advanced":16.0,"scope":"1회분 디자인 시안","note":"콘텐츠·이미지 제공. HTML 코딩·발송·분석 제외"},{"category":"온라인","name":"상세페이지｜6,000px 이하","standard":24,"advanced":32,"scope":"세로 6,000px 이하 · 1종","note":"일반 3일 / 심화 4일. 해당 규격의 공개 작업일과 기본 디자인 범위를 함께 참고한 사내 기준. 기획·이미지 탐색·정보 밀도는 별도 선택. 크몽 6,000px 공개 상품일은 별도 표시."},{"category":"온라인","name":"상세페이지｜12,000px 이하","standard":28,"advanced":36,"scope":"세로 6,001~12,000px · 1종","note":"세로 6,001~12,000px 기준 일반 3.5일 / 심화 4.5일. 기획·이미지 탐색·합성·정보 압축은 각각 해당 시에만 별도 선택, 중복 공정 조정 적용. 크몽·숨고 공개 작업일은 산정 참고이며 확정 납기가 아님."},{"category":"웹·UI/UX","name":"UI/UX 화면 디자인｜1화면","standard":16.0,"advanced":22.0,"scope":"모바일 또는 PC, 신규 화면 1개","note":"요구사항·콘텐츠·화면구조 제공, 화면 1개의 시각·컴포넌트 디자인. 코딩·시스템 설계·사용성 테스트 제외."},{"category":"웹·UI/UX","name":"UI/UX 화면 디자인｜5화면","standard":72.0,"advanced":98,"scope":"동일 서비스 내 5화면, 디자인 시스템 공유","note":"화면 간 UI 패턴·상태 표현, 기본 인터랙션 명세 포함. 사용자 조사·프로토타입 개발·개발 제외."},{"category":"웹·UI/UX","name":"UX 사용자 흐름·와이어프레임｜5화면","standard":32.0,"advanced":44,"scope":"5화면 기준 흐름·정보구조·와이어프레임","note":"화면 연결·정보 배치 초안. 고충실도 UI 디자인 및 사용성 조사·개발 제외, 완성 화면 디자인과 중복 산정 금지."},{"category":"웹·UI/UX","name":"웹 랜딩페이지｜PC 4,000px 이하","standard":36.0,"advanced":50,"scope":"PC 폭 1,440px 기준 세로 4,000px 이하, 모바일 시안 포함","note":"PC·모바일 2종 대응 디자인. 요청 자료·정보구조 제공. 스크롤 섹션 및 반응형 대응 포함; 개발·코딩·게시 제외."},{"category":"웹·UI/UX","name":"웹 랜딩페이지｜PC 8,000px 이하","standard":64.0,"advanced":88,"scope":"PC 폭 1,440px 기준 세로 4,001~8,000px, 모바일 포함","note":"반응형 PC·모바일 시안 제작. 섹션 수, 정보밀도, 인터랙션 설계가 많으면 추가 산정. 퍼블리싱·개발·연동 제외."},{"category":"웹·UI/UX","name":"웹사이트 디자인｜PC·모바일 5P","standard":96.0,"advanced":130,"scope":"웹사이트 5개 페이지, PC·모바일 각 1종","note":"기본 사이트맵·원고·소스가 있는 상태의 사이트 공통 스타일·헤더/푸터·5P 디자인. 개발·CMS·호스팅·기획·콘텐츠 제작 제외."},{"category":"웹·UI/UX","name":"웹사이트 디자인｜PC·모바일 10P","standard":160.0,"advanced":216,"scope":"웹사이트 10개 페이지, PC·모바일 각 1종","note":"디자인 시스템·공통 컴포넌트·다중 페이지 전개 및 기본 검수. 기능정의·UX 리서치·퍼블리싱·개발·반응형 구현 제외."},{"category":"브랜딩","name":"명함｜앞·뒤","standard":3.0,"advanced":4.0,"scope":"로고·직함·정보 확정 1종","note":"기존 BI 활용. 신규 로고·특수 후가공 디자인 제외"},{"category":"브랜딩","name":"로고·심볼｜신규 1안","standard":24.0,"advanced":34,"scope":"요청 방향이 구체적인 1안","note":"아이덴티티 콘셉트 전략·경쟁 분석·상표 등록 및 추가 후보안은 별도"},{"category":"브랜딩","name":"브랜드 가이드｜5~10P","standard":40.0,"advanced":54,"scope":"기본 로고 시스템 확보","note":"서체·컬러·응용 규칙 정리. 포괄적인 브랜드 전략·BI 재개발 제외"},{"category":"이미지","name":"제품 사진 기본 보정｜1장","standard":2.5,"advanced":3.5,"scope":"원본 1장 제공","note":"색·노출·정리 중심. 제품 형태 변경·복잡한 누끼·배경 제작 제외"},{"category":"이미지","name":"제품 사진 일괄 보정｜10장","standard":8.0,"advanced":12.0,"scope":"동일 촬영 조건·톤 보정","note":"서로 다른 광원·제품 개별 합성은 1장 단위 재산정"},{"category":"이미지","name":"키비주얼 합성·연출｜1장","standard":16.0,"advanced":22.0,"scope":"활용 가능한 원본 이미지 제공","note":"음식·제품·공간 고난도 합성. 원본 소싱/촬영·고해상도 출력 재가공 별도"},{"category":"편집·문서","name":"제안서·회사소개서｜5P","standard":24.0,"advanced":34,"scope":"자료 제공·정보 재구성·기본 도식 포함","note":"5P 내 서술·구조화·시각화 포함. 신규 전략 조사·원고 제로부터 작성 별도"},{"category":"편집·문서","name":"제안서·회사소개서｜10P","standard":32,"advanced":44,"scope":"자료 제공·정보 재구성·기본 도식 포함","note":"10P 기준, 일반 4일 / 심화 5.5일. 제공된 자료의 구조 정리·기본 도식화·레이아웃 및 검수. 별도 자료 조사·신규 카피 전략은 추가 선택."},{"category":"편집·문서","name":"제안서·회사소개서｜20P","standard":72.0,"advanced":98,"scope":"자료 제공·정보 재구성·기본 도식 포함","note":"20P 기준. 도표·이미지 다수 신규 제작, 다중 버전, 핵심 메시지 발굴 별도"},{"category":"편집·문서","name":"원페이지 소개서·인쇄 제안","standard":8.0,"advanced":12.0,"scope":"A4 1P 내 정보구성·디자인","note":"원고·데이터 제공. 사진 촬영·수치 분석·전략 작성 제외"},{"category":"편집·문서","name":"인포그래픽·도식화｜1장","standard":12.0,"advanced":16.0,"scope":"데이터·사실관계 확정","note":"데이터 정확성은 원자료 제공자 확인. 자료 조사·분석 별도"},{"category":"편집·문서","name":"업무 보고서 디자인｜4P","standard":16.0,"advanced":22.0,"scope":"내용·결론 제공, 편집 디자인","note":"편집·그래프 정리. 신규 전략·정량분석 제외"},{"category":"영상","name":"릴스 영상｜15초","standard":1,"advanced":2.5,"scope":"완성 15초·촬영본 제공·컷편집 1편","note":"일반 1시간: 15초 컷편집 중심. 심화 2.5시간: 자막·전환·기본 모션 등 추가 편집. 기획·외부 소스 탐색·직접 촬영은 선택 옵션이며 중복 계산하지 않음."},{"category":"영상","name":"홍보영상｜30초","standard":4,"advanced":6,"scope":"완성 30초·기존 영상 소스 제공·1편","note":"기존 소스가 있는 홍보영상 편집 기준. 일반 0.5일 / 심화 0.75일(기본 모션·자막). 기획·소스 탐색·직접 촬영은 별도 옵션; 전문 촬영팀·성우·외부 라이선스·고난도 3D 제외. 신규 사내 초기 추정치."},{"category":"영상","name":"홍보영상｜1분","standard":6,"advanced":10,"scope":"완성 60초·기존 영상 소스 제공·1편","note":"기존 소스가 있는 1분 홍보영상 편집 기준. 일반 0.75일 / 심화 1.25일. 기획·소스 탐색·직접 촬영은 별도 옵션; 인터뷰·복수 장소 촬영·외부 성우·고난도 모션·촬영팀 별도 협의. 신규 사내 초기 추정치."},{"category":"영상","name":"릴스 추가 버전｜자막·비율 변경","standard":2.0,"advanced":3.0,"scope":"승인된 15초 원본 1버전","note":"새로운 콘셉트/음악으로 재편집 시 별도"},{"category":"영상","name":"DID·디지털사이니지｜정지 이미지","standard":4.0,"advanced":6.0,"scope":"화면 1규격·1콘텐츠","note":"영상 재생 장비 세팅·송출 관리 제외"},{"category":"영상","name":"DID·디지털사이니지｜모션 30초","standard":10.0,"advanced":14.0,"scope":"소스 제공·30초 내외 애니메이션","note":"촬영·3D 고난도 합성·오디오 라이선스 별도"},{"category":"영상","name":"영상 썸네일｜1장","standard":3.0,"advanced":4.0,"scope":"기본 스틸 이미지 제공","note":"원본 고급 합성·인물 정밀 리터치 별도"},{"category":"영상","name":"GIF·짧은 모션 배너｜1종","standard":4.0,"advanced":6.0,"scope":"5초 이하, 기존 그래픽 제공","note":"새로운 브랜드 모션 시스템·캐릭터 애니메이션 제외"},{"category":"인쇄·발주","name":"인쇄 발주파일 정리｜편집 원본 제공","standard":2.0,"advanced":3.0,"scope":"편집 가능한 원본 1종·1규격","note":"AI·INDD·PSD 등 편집 원본에 규격, 도련, 재단선, 컬러모드, 서체·이미지 링크, PDF 저장 등 발주 사양 반영. 신규 디자인·실제 발주·인쇄소 대응 제외."},{"category":"인쇄·발주","name":"인쇄 발주파일 재구성｜평면 이미지 기준","standard":6.0,"advanced":8.0,"scope":"JPG·PNG 등 평면 이미지 1종·단면·규격 확정","note":"이미지를 참고해 텍스트 재입력, 폰트·컬러·도형·배치 유사 재현, 필요한 요소 재작업, 인쇄 규격·도련·색상 확인 및 발주용 파일 제작. 100% 원본 동일성·저해상도 사진 복원·로고 전면 재제작·다품목 전개·실물 발주 제외. 대형 출력용 고해상도 재합성은 필요한 경우 별도 가산."}];
const EVIDENCE = {"제품 스티커｜브랜딩형":{"urls":["https://kmong.com/gig/498726","https://kmong.com/gig/623143","https://kmong.com/gig/427080"],"packages":5,"mean":3.33},"선물 패키지 디자인｜박스 1종":{"urls":["https://kmong.com/gig/427080"],"packages":1,"mean":7.0},"A4·A3 POP·포스터":{"urls":["https://kmong.com/gig/719523","https://kmong.com/gig/709056","https://kmong.com/gig/601863"],"packages":5,"mean":2.0},"현수막":{"urls":["https://kmong.com/gig/76143","https://kmong.com/gig/569056","https://kmong.com/gig/499990"],"packages":7,"mean":2.25},"X배너(엑스배너)":{"urls":["https://kmong.com/gig/768252"],"packages":2,"mean":3.0},"메뉴판｜1~2P":{"urls":["https://kmong.com/gig/429072","https://kmong.com/gig/509275"],"packages":4,"mean":3.5},"리플릿｜4P":{"urls":["https://kmong.com/gig/588140"],"packages":1,"mean":5.0},"브로슈어｜4P":{"urls":["https://kmong.com/gig/588140"],"packages":1,"mean":5.0},"SNS 피드 이미지｜1장":{"urls":["https://kmong.com/gig/570663"],"packages":1,"mean":1.0},"SNS 카드뉴스｜1장":{"urls":["https://kmong.com/gig/631491","https://kmong.com/gig/381921"],"packages":4,"mean":1.0},"SNS 카드뉴스｜5장":{"urls":["https://kmong.com/gig/381921"],"packages":1,"mean":2.0},"상세페이지｜6,000px 이하":{"urls":["https://kmong.com/gig/360969","https://kmong.com/gig/596092","https://kmong.com/gig/287028"],"packages":3,"mean":3.0},"상세페이지｜12,000px 이하":{"urls":["https://kmong.com/gig/360969","https://kmong.com/gig/596092","https://kmong.com/gig/287028"],"packages":4,"mean":4.75},"UI/UX 화면 디자인｜1화면":{"urls":["https://kmong.com/gig/775005","https://kmong.com/gig/548487"],"packages":3,"mean":2.5},"명함｜앞·뒤":{"urls":["https://kmong.com/gig/522062"],"packages":1,"mean":1.0},"제안서·회사소개서｜10P":{"urls":["https://kmong.com/gig/716295","https://kmong.com/gig/776955"],"packages":3,"mean":3.5},"제안서·회사소개서｜20P":{"urls":["https://kmong.com/gig/776955"],"packages":1,"mean":5.0},"릴스 영상｜15초":{"urls":["https://kmong.com/gig/716782"],"packages":1,"mean":1.0}};
const PRODUCT_CASES = {"제품 스티커｜브랜딩형":[{"url":"https://kmong.com/gig/498726","examples":[{"days":4.0,"label":"중급 스티커·간단한 일러스트","used":true},{"days":5.0,"label":"프리미엄 스티커","used":true}]},{"url":"https://kmong.com/gig/623143","examples":[{"days":3.0,"label":"맞춤형 스티커","used":true},{"days":3.0,"label":"맞춤 일러스트 스티커","used":true}]},{"url":"https://kmong.com/gig/427080","examples":[{"days":3.0,"label":"단면 스티커/라벨","used":true}]}],"선물 패키지 디자인｜박스 1종":[{"url":"https://kmong.com/gig/427080","examples":[{"days":7.0,"label":"박스 6면 패키지","used":true}]}],"A4·A3 POP·포스터":[{"url":"https://kmong.com/gig/719523","examples":[{"days":3.0,"label":"포스터 1P STANDARD","used":true}]},{"url":"https://kmong.com/gig/709056","examples":[{"days":2.0,"label":"포스터 1장 DELUXE","used":true},{"days":3.0,"label":"포스터 1장 PREMIUM","used":true}]},{"url":"https://kmong.com/gig/601863","examples":[{"days":1.0,"label":"A4/A3 포스터·텍스트+이미지 1장","used":true},{"days":2.0,"label":"A4/A3 포스터·일러스트/고난도 편집","used":true}]}],"현수막":[{"url":"https://kmong.com/gig/76143","examples":[{"days":2.0,"label":"중급 현수막/배너 공통","used":true}]},{"url":"https://kmong.com/gig/569056","examples":[{"days":4.0,"label":"중급 현수막/배너 공통","used":true},{"days":6.0,"label":"고급 현수막/배너 공통","used":true}]},{"url":"https://kmong.com/gig/499990","examples":[{"days":1.0,"label":"중급 배너/현수막","used":true},{"days":2.0,"label":"고급 배너/현수막","used":true}]}],"X배너(엑스배너)":[{"url":"https://kmong.com/gig/768252","examples":[{"days":3.0,"label":"중급 X배너","used":true},{"days":5.0,"label":"커스텀 X배너","used":true}]}],"메뉴판｜1~2P":[{"url":"https://kmong.com/gig/429072","examples":[{"days":3.0,"label":"이미지·텍스트 맞춤 메뉴판","used":true},{"days":5.0,"label":"누끼 포함 맞춤 메뉴판","used":true}]},{"url":"https://kmong.com/gig/509275","examples":[{"days":4.0,"label":"단면 맞춤제작 메뉴판","used":true},{"days":5.0,"label":"양면 2시안 메뉴판","used":true}]}],"리플릿｜4P":[{"url":"https://kmong.com/gig/588140","examples":[{"days":5.0,"label":"2단 접지 4P 리플릿","used":true}]}],"브로슈어｜4P":[{"url":"https://kmong.com/gig/588140","examples":[{"days":5.0,"label":"브로슈어 4P","used":true}]}],"SNS 피드 이미지｜1장":[{"url":"https://kmong.com/gig/570663","examples":[{"days":1.0,"label":"피드 디자인 1장","used":true}]}],"SNS 카드뉴스｜1장":[{"url":"https://kmong.com/gig/631491","examples":[{"days":1.0,"label":"기본 카드뉴스 1장","used":true},{"days":2.0,"label":"고급 카드뉴스 1장","used":true}]},{"url":"https://kmong.com/gig/381921","examples":[{"days":1.0,"label":"심플 카드뉴스 1장","used":true},{"days":2.0,"label":"고급 카드뉴스 1장","used":true}]}],"SNS 카드뉴스｜5장":[{"url":"https://kmong.com/gig/381921","examples":[{"days":2.0,"label":"카드뉴스 5장 세트","used":true}]}],"상세페이지｜6,000px 이하":[{"url":"https://kmong.com/gig/360969","examples":[{"days":3.0,"label":"상세페이지 1000×6000px","used":true}]},{"url":"https://kmong.com/gig/596092","examples":[{"days":2.0,"label":"상세페이지 1000×6000px","used":true}]},{"url":"https://kmong.com/gig/287028","examples":[{"days":4.0,"label":"상세페이지 860×6000px","used":true}]}],"상세페이지｜12,000px 이하":[{"url":"https://kmong.com/gig/360969","examples":[{"days":5.0,"label":"상세페이지 1000×12000px","used":true}]},{"url":"https://kmong.com/gig/596092","examples":[{"days":3.0,"label":"상세페이지 1000×12000px","used":true}]},{"url":"https://kmong.com/gig/287028","examples":[{"days":6.0,"label":"상세페이지 1000×12000px","used":true}]}],"UI/UX 화면 디자인｜1화면":[{"url":"https://kmong.com/gig/775005","examples":[{"days":3.0,"label":"UI 1화면","used":true}]},{"url":"https://kmong.com/gig/548487","examples":[{"days":2.0,"label":"UI 1화면 서브페이지","used":true},{"days":4.0,"label":"UI 1화면 기획+디자인","used":true}]}],"명함｜앞·뒤":[{"url":"https://kmong.com/gig/522062","examples":[{"days":1.0,"label":"양면 명함 심플형","used":true}]}],"제안서·회사소개서｜10P":[{"url":"https://kmong.com/gig/716295","examples":[{"days":4.0,"label":"10P PPT 리디자인","used":true},{"days":5.0,"label":"10P PPT 기획디자인","used":true}]},{"url":"https://kmong.com/gig/776955","examples":[{"days":3.0,"label":"10P 회사소개서 리디자인","used":true}]}],"제안서·회사소개서｜20P":[{"url":"https://kmong.com/gig/776955","examples":[{"days":5.0,"label":"20P 맞춤 회사소개서","used":true}]}],"릴스 영상｜15초":[{"url":"https://kmong.com/gig/716782","examples":[{"days":1.0,"label":"15초 릴스 편집만","used":true}]}]};
const SOOMGO_CASES = {"상세페이지｜12,000px 이하":[{"expert":"지금디자인","min":3,"max":5,"days":4.0,"grade":"직접 유사","note":"기획 제외 기본 디자인 · 10,000px 이상","url":"https://soomgo.com/profile/users/17271667"},{"expert":"요이 아카이브","min":3,"max":5,"days":4.0,"grade":"참고","note":"기획안·이미지 확보 · 길이 미기재","url":"https://soomgo.com/profile/users/10979558"},{"expert":"포스트모먼트","min":3,"max":5,"days":4.0,"grade":"참고","note":"기본형 · 길이 미기재","url":"https://soomgo.com/profile/users/18292200"},{"expert":"뷰포인트","min":2,"max":2,"days":2.0,"grade":"참고","note":"10,000px 기획·카피 포함 → 기획 분리 불가","url":"https://soomgo.com/profile/users/16286429"}],"상세페이지｜6,000px 이하":[{"expert":"디자인유라클","min":2,"max":5,"days":3.5,"grade":"참고","note":"상세페이지 기본형 · 길이 미기재","url":"https://soomgo.com/profile/users/1334502"},{"expert":"채진희","min":1,"max":3,"days":2.0,"grade":"참고","note":"상세페이지 · 픽셀길이 미기재","url":"https://soomgo.com/profile/users/6296241"},{"expert":"기억사랑디자인","min":1,"max":2,"days":1.5,"grade":"참고","note":"기존 양식이 있는 경우 (신규 디자인과 다름)","url":"https://soomgo.com/profile/users/3044247"}],"명함｜앞·뒤":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"명함 디자인, 인쇄기간 별도","url":"https://soomgo.com/profile/users/10195409"},{"expert":"오얼리스튜디오","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"명함 디자인 후 AI 원본 전달 · 배송 별도","url":"https://soomgo.com/profile/users/704418"},{"expert":"아베크디자인","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"명함 디자인 1~2일","url":"https://soomgo.com/profile/users/530510"}],"정보 스티커｜안내·원산지":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"참고","note":"스티커 일반, 안내형 구분 없음","url":"https://soomgo.com/profile/users/10195409"}],"제품 스티커｜브랜딩형":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"참고","note":"스티커 디자인, 브랜딩 범위 미기재","url":"https://soomgo.com/profile/users/10195409"}],"식품 패키지 라벨｜앞·뒤":[{"expert":"아베크디자인","min":1,"max":2,"days":1.5,"grade":"참고","note":"라벨 디자인 전체 · 앞뒷면 여부 미상","url":"https://soomgo.com/profile/users/530510"}],"A4·A3 POP·포스터":[{"expert":"채진희","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"포스터 A2 1~2일 · 유사 포스터","url":"https://soomgo.com/profile/users/6296241"}],"메뉴판｜1~2P":[{"expert":"엠비엠","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"기본 메뉴판 1~2일, 혼잡시 증가","url":"https://soomgo.com/profile/users/2244372"}],"SNS 카드뉴스｜1장":[{"expert":"채진희","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"카드뉴스 1~2일 · 장수 미표시","url":"https://soomgo.com/profile/users/6296241"}],"SNS 피드 이미지｜1장":[{"expert":"디자인유라클","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"기본 SNS 피드 1~2일","url":"https://soomgo.com/profile/users/1334502"}],"블로그 썸네일｜1장":[{"expert":"채진희","min":1,"max":2,"days":1.5,"grade":"참고","note":"썸네일 1~2일 · 유형 미지정","url":"https://soomgo.com/profile/users/6296241"}],"웹배너｜신규 1종":[{"expert":"디자인유라클","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"기본 배너 1~2일","url":"https://soomgo.com/profile/users/1334502"}],"현수막":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"현수막 및 배너 디자인 1~2일","url":"https://soomgo.com/profile/users/10195409"},{"expert":"채진희","min":1,"max":2,"days":1.5,"grade":"직접 유사","note":"현수막 디자인 1~2일","url":"https://soomgo.com/profile/users/6296241"}],"X배너(엑스배너)":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"참고","note":"배너 통합 분류 · X배너 별도 구분 없음","url":"https://soomgo.com/profile/users/10195409"},{"expert":"기억사랑디자인","min":0.375,"max":0.375,"days":0.375,"grade":"참고","note":"스탠드 배너 제작 3시간 · 납품 기간과 차이","url":"https://soomgo.com/profile/users/3044247"}],"A형 배너(입간판)":[{"expert":"코니즈업","min":1,"max":2,"days":1.5,"grade":"참고","note":"배너 통합 분류 · A형 별도 구분 없음","url":"https://soomgo.com/profile/users/10195409"}],"리플릿｜4P":[{"expert":"채진희","min":3,"max":4,"days":3.5,"grade":"참고","note":"3단 접지 리플릿 A3 · 4P 구성과 다름","url":"https://soomgo.com/profile/users/6296241"}],"브로슈어｜4P":[{"expert":"코니즈업","min":3,"max":5,"days":4.0,"grade":"참고","note":"카탈로그 · 페이지 수 미기재","url":"https://soomgo.com/profile/users/10195409"}],"제안서·회사소개서｜10P":[{"expert":"홍대 디자이너","min":2,"max":5,"days":3.5,"grade":"참고","note":"PPT 전반 2~5일 · 10P 표기 없음","url":"https://soomgo.com/profile/users/4400466"}],"웹 랜딩페이지｜PC 4,000px 이하":[{"expert":"김현주","min":5,"max":5,"days":5.0,"grade":"참고","note":"랜딩페이지 베이직 5일, 픽셀 미기재","url":"https://soomgo.com/profile/users/17778868"}],"웹 랜딩페이지｜PC 8,000px 이하":[{"expert":"김현주","min":7,"max":7,"days":7.0,"grade":"참고","note":"랜딩페이지 스탠다드 7일, 픽셀 미기재","url":"https://soomgo.com/profile/users/17778868"}],"UI/UX 화면 디자인｜5화면":[{"expert":"이한별","min":2,"max":3,"days":2.5,"grade":"참고","note":"5페이지 이하 웹·앱 디자인, PC/모바일 포함 여부 불명","url":"https://soomgo.com/profile/users/910665"}],"가격표｜기존 서식 적용":[],"가격표｜신규 디자인형":[],"선물세트 띠지·슬리브":[],"선물 패키지 디자인｜박스 1종":[],"와블러·윙게시·행잉 POP":[],"테이블텐트·안내문":[],"매장 코너 사인·존 안내":[],"라이트패널·백릿":[],"벽면·쇼윈도·대형 그래픽":[],"LED·외부 간판 그래픽":[],"메뉴판｜4~8P":[],"리플릿｜1P":[],"브로슈어｜1P":[],"레시피카드｜A5 양면":[],"VMD 매장 시뮬레이션":[],"기존 디자인 규격 변경":[],"웹배너｜기존 시안 리사이즈":[],"SNS 카드뉴스｜5장":[],"블로그 본문 이미지｜5장":[],"EDM·이메일 뉴스레터":[],"UI/UX 화면 디자인｜1화면":[],"UX 사용자 흐름·와이어프레임｜5화면":[],"웹사이트 디자인｜PC·모바일 5P":[],"웹사이트 디자인｜PC·모바일 10P":[],"로고·심볼｜신규 1안":[],"브랜드 가이드｜5~10P":[],"제품 사진 기본 보정｜1장":[],"제품 사진 일괄 보정｜10장":[],"키비주얼 합성·연출｜1장":[],"제안서·회사소개서｜5P":[],"제안서·회사소개서｜20P":[],"원페이지 소개서·인쇄 제안":[],"인포그래픽·도식화｜1장":[],"업무 보고서 디자인｜4P":[],"릴스 추가 버전｜자막·비율 변경":[],"DID·디지털사이니지｜정지 이미지":[],"DID·디지털사이니지｜모션 30초":[],"영상 썸네일｜1장":[],"GIF·짧은 모션 배너｜1종":[],"인쇄 발주파일 정리｜편집 원본 제공":[],"인쇄 발주파일 재구성｜평면 이미지 기준":[],"릴스 영상｜15초":[{"expert":"이피디","min":1,"max":3,"days":2.0,"grade":"참고","note":"숏폼 편집 1~3일 · 15초 여부 미기재","url":"https://soomgo.com/profile/users/4949712"}]};
const CROSS_COMPARE = {"가격표｜기존 서식 적용":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"가격표｜신규 디자인형":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"정보 스티커｜안내·원산지":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"제품 스티커｜브랜딩형":{"kg":3.33,"ka":3.67,"sg":null,"sa":null,"ag":3.33,"aa":3.67,"kn":3,"sn":0,"n":3,"kmong_n":3,"soomgo_n":0},"식품 패키지 라벨｜앞·뒤":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"선물세트 띠지·슬리브":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"선물 패키지 디자인｜박스 1종":{"kg":7.0,"ka":7.0,"sg":null,"sa":null,"ag":7.0,"aa":7.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"와블러·윙게시·행잉 POP":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"A4·A3 POP·포스터":{"kg":2.0,"ka":2.67,"sg":1,"sa":2,"ag":1.75,"aa":2.5,"kn":3,"sn":1,"n":4,"kmong_n":3,"soomgo_n":1},"테이블텐트·안내문":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"매장 코너 사인·존 안내":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"현수막":{"kg":2.33,"ka":3.33,"sg":1,"sa":2,"ag":1.8,"aa":2.8,"kn":3,"sn":2,"n":5,"kmong_n":3,"soomgo_n":2},"A형 배너(입간판)":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"X배너(엑스배너)":{"kg":3.0,"ka":5.0,"sg":null,"sa":null,"ag":3.0,"aa":5.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"라이트패널·백릿":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"벽면·쇼윈도·대형 그래픽":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"LED·외부 간판 그래픽":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"메뉴판｜1~2P":{"kg":3.5,"ka":5.0,"sg":1,"sa":2,"ag":2.67,"aa":4.0,"kn":2,"sn":1,"n":3,"kmong_n":2,"soomgo_n":1},"메뉴판｜4~8P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"리플릿｜1P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"리플릿｜4P":{"kg":5.0,"ka":5.0,"sg":null,"sa":null,"ag":5.0,"aa":5.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"브로슈어｜1P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"브로슈어｜4P":{"kg":5.0,"ka":5.0,"sg":null,"sa":null,"ag":5.0,"aa":5.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"레시피카드｜A5 양면":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"VMD 매장 시뮬레이션":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"기존 디자인 규격 변경":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"웹배너｜신규 1종":{"kg":null,"ka":null,"sg":1,"sa":2,"ag":1,"aa":2,"kn":0,"sn":1,"n":1,"kmong_n":0,"soomgo_n":1},"웹배너｜기존 시안 리사이즈":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"SNS 피드 이미지｜1장":{"kg":1.0,"ka":1.0,"sg":1,"sa":2,"ag":1.0,"aa":1.5,"kn":1,"sn":1,"n":2,"kmong_n":1,"soomgo_n":1},"SNS 카드뉴스｜1장":{"kg":1.0,"ka":2.0,"sg":1,"sa":2,"ag":1.0,"aa":2.0,"kn":2,"sn":1,"n":3,"kmong_n":2,"soomgo_n":1},"SNS 카드뉴스｜5장":{"kg":2.0,"ka":2.0,"sg":null,"sa":null,"ag":2.0,"aa":2.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"블로그 썸네일｜1장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"블로그 본문 이미지｜5장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"EDM·이메일 뉴스레터":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"상세페이지｜6,000px 이하":{"kg":3.0,"ka":3.0,"sg":null,"sa":null,"ag":3.0,"aa":3.0,"kn":3,"sn":0,"n":3,"kmong_n":3,"soomgo_n":0},"상세페이지｜12,000px 이하":{"kg":4.67,"ka":4.67,"sg":3,"sa":5,"ag":4.25,"aa":4.75,"kn":3,"sn":1,"n":4,"kmong_n":3,"soomgo_n":1},"UI/UX 화면 디자인｜1화면":{"kg":2.5,"ka":2.5,"sg":null,"sa":null,"ag":2.5,"aa":2.5,"kn":2,"sn":0,"n":2,"kmong_n":2,"soomgo_n":0},"UI/UX 화면 디자인｜5화면":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"UX 사용자 흐름·와이어프레임｜5화면":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"웹 랜딩페이지｜PC 4,000px 이하":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"웹 랜딩페이지｜PC 8,000px 이하":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"웹사이트 디자인｜PC·모바일 5P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"웹사이트 디자인｜PC·모바일 10P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"명함｜앞·뒤":{"kg":1.0,"ka":1.0,"sg":1,"sa":2,"ag":1.0,"aa":1.75,"kn":1,"sn":3,"n":4,"kmong_n":1,"soomgo_n":3},"로고·심볼｜신규 1안":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"브랜드 가이드｜5~10P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"제품 사진 기본 보정｜1장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"제품 사진 일괄 보정｜10장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"키비주얼 합성·연출｜1장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"제안서·회사소개서｜5P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"제안서·회사소개서｜10P":{"kg":3.5,"ka":3.5,"sg":null,"sa":null,"ag":3.5,"aa":3.5,"kn":2,"sn":0,"n":2,"kmong_n":2,"soomgo_n":0},"제안서·회사소개서｜20P":{"kg":5.0,"ka":5.0,"sg":null,"sa":null,"ag":5.0,"aa":5.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"원페이지 소개서·인쇄 제안":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"인포그래픽·도식화｜1장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"업무 보고서 디자인｜4P":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"릴스 추가 버전｜자막·비율 변경":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"DID·디지털사이니지｜정지 이미지":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"DID·디지털사이니지｜모션 30초":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"영상 썸네일｜1장":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"GIF·짧은 모션 배너｜1종":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"인쇄 발주파일 정리｜편집 원본 제공":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"인쇄 발주파일 재구성｜평면 이미지 기준":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"릴스 영상｜15초":{"kg":1.0,"ka":1.0,"sg":null,"sa":null,"ag":1.0,"aa":1.0,"kn":1,"sn":0,"n":1,"kmong_n":1,"soomgo_n":0},"홍보영상｜30초":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0},"홍보영상｜1분":{"kg":null,"ka":null,"sg":null,"sa":null,"ag":null,"aa":null,"kn":0,"sn":0,"n":0,"kmong_n":0,"soomgo_n":0}};
const OPTIONS={
 planning:[{key:'none',label:'정해둔 내용 그대로 디자인해 주세요',detail:'문구와 구성·배치까지 정해져 있어요. 그 범위 안에서 디자인해 주세요.',hours:0},{key:'basic',label:'필요한 내용은 있어요. 배치와 디자인은 맡길게요',detail:'넣을 내용은 준비했어요. 어떻게 보여줄지는 제안해 주세요.',hours:4},{key:'content',label:'꼭 넣을 내용만 정했어요. 문구·구성도 제안해 주세요',detail:'핵심 정보만 줄게요. 카피와 순서, 레이아웃까지 함께 정리해 주세요.',hours:8},{key:'strategy',label:'목적만 정했어요. 방향부터 함께 기획해 주세요',detail:'목적에 맞는 메시지, 문구, 전체 흐름을 디자이너가 제안해 주세요.',hours:16}],
 media:[{key:'provided',label:'필요한 사진은 모두 전달할게요',detail:'디자인에 사용할 사진·이미지가 준비되어 있어요.',hours:0},{key:'partial',label:'사진은 일부만 있어요. 부족한 건 찾아주세요',detail:'제공한 사진을 쓰되 부족한 이미지는 디자이너가 찾아야 해요.',hours:4},{key:'full',label:'사용할 사진이 거의 없어요. 어울리는 걸 찾아주세요',detail:'내용과 분위기에 어울리는 이미지를 찾아 구성해야 해요.',hours:8}],
 density:[{key:'normal',label:'내용이 단순하고 보기 쉽게 정리돼 있어요',detail:'구획별 텍스트와 이미지 구성이 비교적 단순해요.',hours:0},{key:'dense',label:'같은 공간에 많은 내용을 담아야 해요',detail:'상세정보를 압축하고 위계를 정리해야 해요.',hours:8},{key:'complex',label:'표·아이콘·도식으로 정보를 다시 보여줘야 해요',detail:'가독성을 위해 정보를 재설계하고 시각화해야 해요.',hours:16}],
 printing:[{key:'none',label:'제공한 이미지로 바로 출력할 수 있어요',detail:'원본 화질이 충분하거나 대형 출력물이 아니에요.',hours:0},{key:'retouch',label:'크게 출력하면 사진이 흐려져 보정이 필요해요',detail:'출력 규격에 맞춰 원본을 재보정해야 해요.',hours:4},{key:'remake',label:'큰 출력물에 맞게 이미지를 새로 만들어야 해요',detail:'원본 재구성·정교한 합성 작업이 필요해요.',hours:8}],
 revision:[{key:'default',label:'기본적인 확인·수정만 필요해요',detail:'초기 제작 범위에서 가벼운 수정만 예상돼요.',hours:0},{key:'extra',label:'추가로 내용·배치를 조정할 것 같아요',detail:'확정 문구·구성 등의 추가 조정이 예상돼요.',hours:4},{key:'major',label:'여러 차례 검토하며 수정해야 할 것 같아요',detail:'반복적인 내용·레이아웃 검토가 예상돼요.',hours:8}]
};
const state={item:null,category:'전체',query:'',showAll:false,quality:'standard',planning:'none',media:'provided',density:'normal',printing:'none',revision:'default',composite:false,qty:1};
const $=id=>document.getElementById(id);
const featured=['A4·A3 POP·포스터','라이트패널·백릿','현수막','X배너(엑스배너)','A형 배너(입간판)','와블러·윙게시·행잉 POP','웹배너｜신규 1종','상세페이지｜6,000px 이하','상세페이지｜12,000px 이하','릴스 영상｜15초','홍보영상｜30초','홍보영상｜1분','인쇄 발주파일 재구성｜평면 이미지 기준','제안서·회사소개서｜10P','메뉴판｜1~2P','SNS 카드뉴스｜1장','명함｜앞·뒤','리플릿｜4P','브로슈어｜4P'];
const FAVORITES_KEY='sudam-design-estimator-favorites-v1';
function loadFavorites(){try{const a=JSON.parse(localStorage.getItem(FAVORITES_KEY)||'[]');return new Set(Array.isArray(a)?a.map(n=>n.startsWith('릴스 15초｜')?'릴스 영상｜15초':n).filter(n=>ITEMS.some(x=>x.name===n)):[]);}catch(e){return new Set();}}
const favorites=loadFavorites();
function saveFavorites(){try{localStorage.setItem(FAVORITES_KEY,JSON.stringify([...favorites]));return true;}catch(e){return false;}}
function toggleFavorite(n){const was=favorites.has(n);if(was)favorites.delete(n);else favorites.add(n);const saved=saveFavorites();renderCategories();renderProducts();toast((was?'즐겨찾기를 해제했어요.':'즐겨찾기에 추가했어요.')+(saved?'':' (현재 브라우저에는 저장되지 않을 수 있어요.)'));}
const categoryOrder=['전체','☆ 즐겨찾기','오프라인','온라인','편집·문서','웹·UI/UX','영상','패키지','브랜딩','이미지','인쇄·발주'];
function esc(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function ceilHours(h){return Math.ceil((h-1e-8)/2)*2;}
// 공통 표시 규칙: 4시간 미만은 시간·분, 4시간 이상은 일수(1일=8시간).
// 일수는 화면에서만 소수 둘째 자리로 반올림하며 실제 산정 원시 시간은 변경하지 않음.
function fmt(h){
 const minutes=Math.max(0,Math.round((Number(h)||0)*60));
 if(minutes<240){
  const hours=Math.floor(minutes/60), rest=minutes%60;
  return [hours?`${hours}시간`:null,rest?`${rest}분`:null].filter(Boolean).join(' ')||'0시간';
 }
 return `${Number((minutes/480).toFixed(2))}일`;
}
function optionDuration(h){return fmt(h);}

function record(){return ITEMS.find(x=>x.name===state.item)||null;}
function isDetail(){return !!record() && record().name.includes('상세페이지');}
function isPrinting(){let i=record();return !!i && (['오프라인','패키지','인쇄·발주'].includes(i.category)||/리플릿|브로슈어|인쇄 제안/.test(i.name));}
function isVideo(){let i=record();return !!i && i.category==='영상' && /릴스|홍보영상|모션|GIF/.test(i.name);}
function value(group){return choiceForDisplay(group).find(x=>x.key===state[group]);}
function renderCategories(){const avail=categoryOrder.filter(c=>c==='전체'||c==='☆ 즐겨찾기'||ITEMS.some(x=>x.category===c));$('categoryTabs').innerHTML=avail.map(c=>`<button type="button" role="tab" aria-selected="${c===state.category}" class="tab ${state.category===c?'active':''}" data-cat="${esc(c)}">${esc(c)}${c==='☆ 즐겨찾기'&&favorites.size?' ('+favorites.size+')':''}</button>`).join('');}
function renderProducts(){
 let arr=ITEMS.filter(x=>state.category==='전체'||(state.category==='☆ 즐겨찾기'?favorites.has(x.name):x.category===state.category));
 if(state.query.trim()) {const q=state.query.toLowerCase().replace(/\s+/g,'');arr=arr.filter(x=>(x.name+x.category+x.scope).toLowerCase().replace(/\s+/g,'').includes(q));}
 const ranking=n=>{const idx=featured.indexOf(n);return idx<0?999:idx;};
 // favorites first in all views; common items afterwards; stable source order for the remainder
 const position=new Map(ITEMS.map((x,i)=>[x.name,i]));
 arr.sort((a,b)=>Number(favorites.has(b.name))-Number(favorites.has(a.name))||ranking(a.name)-ranking(b.name)||position.get(a.name)-position.get(b.name));
 const cap=(state.showAll||state.query.trim())?999:12;
 const visible=arr.slice(0,cap);
 $('resultCount').textContent=state.query?`검색 결과 ${arr.length}종`:(state.category==='전체'?`전체 ${ITEMS.length}종 · 즐겨찾기 ${favorites.size}종 · 자주 찾는 항목 우선`:(state.category==='☆ 즐겨찾기'?`내 즐겨찾기 ${arr.length}종`:`${state.category} · ${arr.length}종`));
 $('productGrid').innerHTML=visible.length?visible.map(x=>`<div class="product-card ${favorites.has(x.name)?'is-favorite':''}"><button type="button" class="product ${x.name===state.item?'active':''}" data-item="${esc(x.name)}" aria-pressed="${x.name===state.item}"><span class="p-name">${esc(x.name.replace('｜',' · '))}</span><span class="p-meta">기본 ${fmt(x.standard)} · 고급 ${fmt(x.advanced)}</span></button><button class="fav-toggle" type="button" data-favorite="${esc(x.name)}" aria-pressed="${favorites.has(x.name)}" aria-label="${esc(x.name)} ${favorites.has(x.name)?'즐겨찾기 해제':'즐겨찾기 추가'}" title="${favorites.has(x.name)?'즐겨찾기 해제':'즐겨찾기 추가'}">${favorites.has(x.name)?'★':'☆'}</button></div>`).join(''):(state.category==='☆ 즐겨찾기'?'<div class="empty">아직 즐겨찾기한 품목이 없어요. 전체보기에서 ☆를 눌러 추가해 보세요.</div>':'<div class="empty">일치하는 제작물이 없어요. 다른 키워드로 검색해 주세요.</div>');
 $('showMore').classList.toggle('hidden',state.showAll||arr.length<=cap);
 if(record()){$('selectedNotice').classList.remove('hidden');$('selectedName').textContent=record().name.replace('｜',' · ');$('selectedScope').textContent=record().scope;}else{$('selectedNotice').classList.add('hidden');}
}
function choiceForDisplay(group){
 if(group==='planning' && isVideo()){
  const names={none:['영상 흐름과 문구가 모두 정해져 있어요','컷 순서와 문구까지 정해져 있어요.'],basic:['클립은 준비했어요. 컷 순서는 맡길게요','어떤 컷을 먼저 보여줄지 제안해 주세요.'],content:['핵심 내용만 있어요. 장면과 문구도 제안해 주세요','전달할 메시지에 맞춰 장면과 문구를 구성해 주세요.'],strategy:['목표만 있어요. 영상 기획부터 맡길게요','전체 영상 콘셉트·스토리·카피를 제안해 주세요.']};
  const hrs={none:0,basic:1,content:2,strategy:3};
  return OPTIONS.planning.map(x=>({...x,label:names[x.key][0],detail:names[x.key][1],hours:hrs[x.key]}));
 }
 if(group==='media'&&isVideo()){
  const copy={provided:['영상 클립·촬영본을 모두 제공할게요','사용할 원본 영상이 준비되어 있어요.'],partial:['일부 영상 소스를 찾아주세요','기존 자료 외에 필요한 영상 소스 일부를 탐색해요.'],full:['직접 소스를 촬영해주세요','기본적인 현장 영상 촬영 1회. 이동·인력·장비가 필요한 촬영은 별도 협의해요.']};
  const hrs={provided:0,partial:2,full:8};
  return OPTIONS.media.map(x=>({...x,label:copy[x.key][0],detail:copy[x.key][1],hours:hrs[x.key]}));
 }
 if(group==='printing' && ['content','strategy'].includes(state.planning)){
  return OPTIONS.printing.map(x=>x.key==='retouch'?{...x,hours:2,detail:'기획 3·4단계를 선택하여 관련 준비 작업이 겹치므로 2시간(0.25일)만 가산해요.'}:x);
 }
 return OPTIONS[group];
}
function renderChoices(group,target){const selected=state[group];$(target).innerHTML=choiceForDisplay(group).map(x=>`<button type="button" class="choice ${x.key===selected?'active':''}" data-group="${group}" data-choice="${x.key}" aria-pressed="${x.key===selected}"><span class="radio-icon"></span><span class="choice-body"><span class="choice-title">${esc(x.label)}</span><span class="choice-detail">${esc(x.detail)}</span></span><span class="choice-value ${x.hours?'':'no-extra'}">${x.hours?`+${optionDuration(x.hours)}`:'추가 없음'}</span></button>`).join('');}
function renderOptionFields(){for(const [g,el] of [['planning','planningChoices'],['media','mediaChoices'],['density','densityChoices'],['printing','printChoices'],['revision','revisionChoices']])renderChoices(g,el);let video=isVideo();$('mediaTitle').innerHTML=(video?'영상에 사용할 소스는 준비되어 있나요?':'디자인에 쓸 사진은 준비되어 있나요?')+' <small>필수 · 1개 선택</small>';$('videoMediaNote').hidden=!video;const live=$('videoLiveSummary');live.hidden=!video;if(video){const p=value('planning').hours,m=value('media').hours;live.innerHTML=`<strong>영상 추가 작업 확인</strong><span>기획 <b>+${optionDuration(p)}</b> · ${state.media==='full'?'직접 촬영':'소스 준비'} <b>+${optionDuration(m)}</b></span><span>선택된 영상 추가 공수 <b>총 ${optionDuration(p+m)}</b> (기본 편집 시간은 별도)</span>`;}$('detailBlock').classList.toggle('visible',isDetail());$('printBlock').classList.toggle('visible',isPrinting());$('composite').checked=state.composite;$('quantityValue').textContent=state.qty;$('qtyNotice').classList.toggle('hidden',state.qty<=1);document.querySelectorAll('.level').forEach(x=>{let on=x.dataset.quality===state.quality;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});}
function calculated(){const i=record();if(!i)return null;const unit=(state.quality==='advanced'?i.advanced:i.standard);const base=unit*(1+0.65*Math.max(0,state.qty-1));const plan=value('planning').hours;const media=value('media').hours;const density=isDetail()?value('density').hours:0;const print=isPrinting()?value('printing').hours:0;const revisions=value('revision').hours;const composite=state.composite?8:0;const overlapping=[plan,media,density,composite];const rawOverlap=overlapping.reduce((a,b)=>a+b,0);const overlapCap=Math.max(4,Math.min(16,base*0.4));const overlap=rawOverlap?Math.max(...overlapping)+Math.min(0.35*(rawOverlap-Math.max(...overlapping)),overlapCap):0;const video=isVideo();const effectiveOverlap=video?rawOverlap:overlap;const overlapSaved=video?0:rawOverlap-overlap;const sum=base+effectiveOverlap+print+revisions;const advisory=video?(media>=8||state.qty>5||sum>=32):(rawOverlap>Math.max(16,0.45*base)||Math.max(...overlapping)>Math.max(16,0.8*base)||state.qty>5);return {base,plan,media,density,print,revisions,composite,rawOverlap,overlap:effectiveOverlap,overlapSaved,advisory,sum,rounded:ceilHours(sum),video};}
function numberDays(v){return Number.isInteger(v)?String(v):Number(v).toFixed(2).replace(/0+$/,'').replace(/\.$/,'');}
function benchmarkSummary(i){
 const c=CROSS_COMPARE[i.name]||{};
 const show=(title,lo,hi,n)=>`<span class="benchmark-pill ${lo==null?'muted':''}"><b>${title}</b> ${lo==null?'비교 자료 부족':`일반 ${numberDays(lo)}일 <span aria-hidden="true">·</span> 심화 ${numberDays(hi)}일`}${n?' <small>('+n+'곳)</small>':''}</span>`;
 return show('크몽',c.kg,c.ka,c.kn)+show('숨고',c.sg,c.sa,c.sn)+(c.n?`<span class="benchmark-pill benchmark-all"><b>통합 참고</b> 일반 ${numberDays(c.ag)}일 · 심화 ${numberDays(c.aa)}일</span>`:'');
}
function renderEvidence(i){
 const c=CROSS_COMPARE[i.name]||{};
 const kmong=(PRODUCT_CASES[i.name]||[]),soomgo=SOOMGO_CASES[i.name]||[];
 let out=`<div class="evidence-meta"><div>현재 사내 기준</div><strong>기본 ${fmt(i.standard)} · 고급 ${fmt(i.advanced)}</strong><small>${esc(i.scope)}</small></div>`;
 out+=`<div class="evidence-meta"><div>외부 공개 작업일 평균(직접 유사 표본 ${c.n||0}곳)</div><strong>${c.n?'일반 '+numberDays(c.ag)+'일 · 심화 '+numberDays(c.aa)+'일':'비교 가능한 자료 부족'}</strong><small>최소 기간의 평균 → 일반 / 최대 기간의 평균 → 심화 · 1개 기간만 적힌 상품은 두 집계에 동일 반영</small></div>`;
 const header=(title,lo,hi,n)=>`<div class="evidence-platform"><h3>${title} <small>· 직접 유사 ${n||0}곳 · 일반 ${lo==null?'—':numberDays(lo)+'일'} / 심화 ${hi==null?'—':numberDays(hi)+'일'}</small></h3>`;
 out+=header('크몽',c.kg,c.ka,c.kn);
 if(kmong.length){kmong.forEach((v,k)=>{let used=(v.examples||[]).filter(x=>x.used&&!x.label.includes('기획'));let lo=used.length?Math.min(...used.map(x=>x.days)):null,hi=used.length?Math.max(...used.map(x=>x.days)):null;
 out+=`<a class="evidence-source" target="_blank" rel="noopener noreferrer" href="${esc(v.url)}"><span><b>크몽 상품 ${k+1} <span class="source-grade">${used.length?'평균 포함':'참고만'}</span></b><small>${used.length?'일반 '+numberDays(lo)+'일 · 심화 '+numberDays(hi)+'일':'기획 포함 등으로 집계 제외'} · ${esc((v.examples||[]).map(x=>x.label).join(', '))}</small></span><span class="link-icon">원문 ↗</span></a>`;});}
 else out+='<small>직접 비교 가능한 크몽 상품 없음</small>';
 out+='</div>';
 out+=header('숨고',c.sg,c.sa,c.sn);
 if(soomgo.length){soomgo.forEach(v=>{let used=v.grade==='직접 유사'&&!v.note.includes('기획 포함')&&!v.note.includes('기획·카피 포함');
 out+=`<a class="evidence-source" target="_blank" rel="noopener noreferrer" href="${esc(v.url)}"><span><b>${esc(v.expert)} <span class="source-grade">${used?'평균 포함':'참고만'}</span></b><small>일반 ${numberDays(v.min)}일 · 심화 ${numberDays(v.max)}일 · ${esc(v.note)}</small></span><span class="link-icon">원문 ↗</span></a>`;});}
 else out+='<small>직접 비교 가능한 숨고 전문가 없음</small>';
 out+='</div>';
 out+='<div class="evidence-platform"><h3>공식 산정 체계</h3><a class="evidence-source" href="https://www.dsninfo.or.kr/estimate/vision02.do?level=S" target="_blank" rel="noopener noreferrer"><span><b>산업디자인 개발의 대가기준</b><small>업무 단계·투입공수 산정 방식 참고. 제작물별 일수를 규정한 자료는 아님</small></span><span class="link-icon">원문 ↗</span></a></div>';
 out+='<div class="evidence-caution">※ 숨고 <b>3~5일은 일반 평균에 3일, 심화 평균에 5일</b>을 각각 넣어 계산합니다. 기획 포함 사례와 직접 비교하기 어려운 규격은 평균에서 제외합니다.<br>※ 외부 판매자의 <b>납품 안내 기간과 사내 순수 작업 투입일수는 서로 다르며</b>, 현재 사내 기준은 이 평균값으로 자동 대체하지 않았습니다. 표본 수가 적은 경우 참고용으로만 활용하세요.</div>';
 return out;
}
function openEvidenceDialog(){const i=record();if(!i)return;const e=$('evidenceOverlay');$('evidenceSubtitle').textContent=i.name.replace('｜',' · ')+' · 플랫폼별 참고 작업일과 원문';$('sourceEvidenceContent').innerHTML=renderEvidence(i);e.hidden=false;document.body.style.overflow='hidden';$('evidenceDialogFocus')?.focus();e.querySelector('.evidence-close').focus();}
function closeEvidenceDialog(){$('evidenceOverlay').hidden=true;document.body.style.overflow='';$('openEvidence').focus();}
function renderResult(){const i=record(),data=calculated();$('copyResult').disabled=!data;$('printResult').disabled=!data;if(!data){$('totalDisplay').textContent='—';$('footTotal').textContent='—';$('totalDisplay').classList.remove('long-duration');$('footTotal').classList.remove('long-duration');$('resultCaption').textContent='먼저 제작물을 선택해 주세요.';$('scopeNote').textContent='제작물 선택 후 확인할 수 있습니다.';$('benchmarkMini').textContent='제작물을 선택하면 비교 사례가 표시돼요.';$('openEvidence').disabled=true;$('resultItemName').textContent='제작물을 선택해 주세요';$('resultItemScope').textContent='제작물별 기본 공수를 확인할 수 있어요.';$('breakdown').innerHTML='<div class="line-row"><span>기본 디자인</span><strong>—</strong></div>';return;}
$('totalDisplay').textContent=fmt(data.sum,data.video);$('footTotal').textContent=fmt(data.sum,data.video);$('totalDisplay').classList.toggle('long-duration',fmt(data.sum).length>8);$('footTotal').classList.toggle('long-duration',fmt(data.sum).length>8);$('resultCaption').textContent=data.video?`기본 편집과 영상 추가 작업 합산 · 확정 납기 아님`:(data.advisory?'복합 요청 · 별도 협의 권장':'1인 기준 · 중복 조정 공수 · 납기 아님');$('scopeNote').textContent=i.note || '기본 자료가 제공된 상태의 디자인 제작을 기준으로 합니다.';$('benchmarkMini').innerHTML=benchmarkSummary(i);$('openEvidence').disabled=false;
$('resultItemName').textContent=i.name.replace('｜',' · ');$('resultItemScope').textContent=`${state.quality==='advanced'?'더 정교하고 완성도 높게':'깔끔하고 보기 좋게'} · ${state.qty}종 · ${i.scope}`;
let lines=[['기본 디자인'+(state.qty>1?` · 동일 시리즈 ${state.qty}종 (추가종 65%)`:''),data.base]];if(data.video){if(data.plan)lines.push(['영상 기획 추가',data.plan]);if(data.media)lines.push([state.media==='full'?'영상 소스 직접 촬영':'영상 소스 탐색·준비',data.media]);if(data.composite)lines.push(['별도 고난도 이미지 보정·합성',data.composite]);}else if(data.rawOverlap){lines.push(['기획·이미지·합성·정보구성 (중복 전)',data.rawOverlap]);if(data.overlapSaved)lines.push(['연관 공정 중복 조정',-data.overlapSaved]);}if(data.print)lines.push(['대형 출력용 고해상도 작업',data.print]);if(data.revisions)lines.push(['기본 범위 외 추가 수정',data.revisions]);$('breakdown').innerHTML=lines.map((p,k)=>`<div class="line-row ${k===0?'base':''}"><span>${esc(p[0])}</span><strong>${p[1]<0?'−'+optionDuration(-p[1]):optionDuration(p[1])}</strong></div>`).join('')+`<div class="separator"></div><div class="line-row"><span>${data.advisory?'복잡한 작업: 협의 후 재산정 권장':data.video?'영상 추가 작업 개별 합산 · 최종 공수':'중복 조정 완료 · 최종 원시 공수'}</span><strong>${fmt(data.sum)}</strong></div>`;}
function render(){renderCategories();renderProducts();renderOptionFields();renderResult();}
function chooseItem(n){const wasVideo=isVideo();state.item=n;const nowVideo=isVideo();if(wasVideo!==nowVideo){Object.assign(state,{planning:'none',media:'provided',density:'normal',printing:'none',composite:false});}render();}
function setCategory(c){state.category=c;state.showAll=false;renderCategories();renderProducts();}
function applyPreset(name){Object.assign(state,{category:'전체',query:'',showAll:false,quality:'standard',planning:'none',media:'provided',density:'normal',printing:'none',revision:'default',composite:false,qty:1});const presets={detail:{item:'상세페이지｜6,000px 이하',quality:'advanced',planning:'basic',media:'partial',density:'dense'},backlit:{item:'라이트패널·백릿',planning:'basic',printing:'retouch'},reels:{item:'릴스 영상｜15초',quality:'advanced'},proposal:{item:'제안서·회사소개서｜10P',planning:'content'}};Object.assign(state,presets[name]||{});$('searchInput').value='';render();$('step1').scrollIntoView({behavior:'smooth',block:'start'});}
function resetAll(){Object.assign(state,{item:null,category:'전체',query:'',showAll:false,quality:'standard',planning:'none',media:'provided',density:'normal',printing:'none',revision:'default',composite:false,qty:1});$('searchInput').value='';render();window.history.replaceState(null,'',window.location.pathname+window.location.hash);}
function summaryText(){const i=record(),d=calculated();if(!i||!d)return '';const lines=[`[디자인 예상 소요일수]`,`제작물: ${i.name}`,`원하는 디자인 퀄리티: ${state.quality==='advanced'?'더 정교하고 완성도 높게 (심화)':'깔끔하고 보기 좋게 (일반)'}`,`제작 수량: ${state.qty}종`,`기획: ${value('planning').label}`,`${isVideo()?'영상 소스':'이미지'} 준비: ${value('media').label}`];if(state.composite)lines.push('고난도 이미지 보정·합성: 필요');if(fixedRules.size)lines.push('반드시 지킬 조건: '+[...fixedRules].join(' / '));if(isDetail())lines.push('상세페이지 정보 밀도: '+value('density').label);if(isPrinting())lines.push('대형 출력 보정: '+value('printing').label);if(d.revisions)lines.push('추가 수정: '+value('revision').label);lines.push('','[소요일수 산정]','기본 디자인: '+optionDuration(d.base));if(d.video){if(d.plan)lines.push('영상 기획: +'+optionDuration(d.plan));if(d.media)lines.push((state.media==='full'?'직접 촬영: +':'소스 탐색: +')+optionDuration(d.media));if(d.composite)lines.push('추가 이미지 보정·합성: +'+optionDuration(d.composite));}else{lines.push('추가 요청(기획·탐색·합성·정보 구성): '+optionDuration(d.rawOverlap));if(d.overlapSaved)lines.push('겹치는 공정 조정: −'+optionDuration(d.overlapSaved));}if(d.print)lines.push('출력 보정: '+optionDuration(d.print)+(state.printing==='retouch'&&['content','strategy'].includes(state.planning)?' (기획 3·4단계 선택으로 0.25일 적용)':''));if(d.revisions)lines.push('추가 수정: '+optionDuration(d.revisions));lines.push(`총 예상 작업 투입일수: ${fmt(d.sum)}`,d.advisory?'복잡한 조건이므로 별도 협의 후 재산정이 필요합니다.':'','※ 1인 1일 8시간 기준 초기 추정치이며 실제 완료 일정·납기가 아닙니다. 크몽·숨고 공개 작업일은 산정 참고 사례이며 실측 공수가 아닙니다. 중요도·논의 내용·업무량·승인 일정에 따라 변동됩니다.');return lines.filter(Boolean).join('\n');}
let toastTimeout;function toast(msg){let el=$('toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),2400);}
async function copyText(t){try{await navigator.clipboard.writeText(t);toast('클립보드에 복사했어요.');}catch(e){let ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();let ok=document.execCommand('copy');ta.remove();toast(ok?'클립보드에 복사했어요.':'자동 복사가 지원되지 않아요.');}}
function shareState(){if(!record())return;let params=new URLSearchParams();for(const k of ['item','quality','planning','media','density','printing','revision','composite','qty'])params.set(k,String(state[k]));if(fixedRules.size)params.set('fixedRules',[...fixedRules].join('|'));copyText(`${location.origin}${location.pathname}?${params}`);}
function loadState(){let q=new URLSearchParams(location.search);let name=q.get('item');if(name&&name.startsWith('릴스 15초｜'))name='릴스 영상｜15초';if(!name||!ITEMS.some(x=>x.name===name))return;state.item=name;for(const grp of ['planning','media','density','printing','revision']){const v=q.get(grp);if(OPTIONS[grp].some(x=>x.key===v))state[grp]=v;}if(['standard','advanced'].includes(q.get('quality')))state.quality=q.get('quality');state.composite=q.get('composite')==='true';state.qty=Math.max(1,Math.min(20,Number.parseInt(q.get('qty'),10)||1));state.category='전체';}
$('openEvidence').addEventListener('click',openEvidenceDialog);$('evidenceOverlay').addEventListener('click',e=>{if(e.target.closest('[data-close-evidence]'))closeEvidenceDialog();});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('evidenceOverlay').hidden)closeEvidenceDialog();});
$('categoryTabs').addEventListener('click',e=>{const el=e.target.closest('[data-cat]');if(el)setCategory(el.dataset.cat);});$('productGrid').addEventListener('click',e=>{const fav=e.target.closest('[data-favorite]');if(fav){toggleFavorite(fav.dataset.favorite);return;}const el=e.target.closest('[data-item]');if(el)chooseItem(el.dataset.item);});$('showMore').addEventListener('click',()=>{state.showAll=true;renderProducts();});$('searchInput').addEventListener('input',e=>{state.query=e.target.value;state.showAll=true;renderProducts();});document.querySelectorAll('[data-quality]').forEach(el=>el.addEventListener('click',()=>{state.quality=el.dataset.quality;renderOptionFields();renderResult();}));for(const id of ['planningChoices','mediaChoices','densityChoices','printChoices','revisionChoices'])$(id).addEventListener('click',e=>{const el=e.target.closest('[data-choice]');if(!el)return;state[el.dataset.group]=el.dataset.choice;renderOptionFields();renderResult();});$('composite').addEventListener('change',e=>{state.composite=e.target.checked;renderResult();});$('decreaseQty').addEventListener('click',()=>{state.qty=Math.max(1,state.qty-1);renderOptionFields();renderResult();});$('increaseQty').addEventListener('click',()=>{state.qty=Math.min(20,state.qty+1);renderOptionFields();renderResult();});document.querySelectorAll('[data-preset]').forEach(x=>x.addEventListener('click',()=>applyPreset(x.dataset.preset)));$('resetAll').addEventListener('click',resetAll);$('copyResult').addEventListener('click',()=>copyText(summaryText()));$('printResult').addEventListener('click',()=>{if(record())window.print();});$('shareLink').addEventListener('click',shareState);$('itemCount').textContent=ITEMS.length;if(/^https?:$/.test(location.protocol))$('shareLink').classList.remove('hidden');loadState();render();

// 버전 및 릴리스 이력 (데이터 내역은 페이지의 정적 타임라인에 보관)
let releaseNotesTrigger=null;
function releaseSwitchTab(tab){
  const future=tab==='planned';
  document.getElementById('releasePanelHistory').hidden=future;
  document.getElementById('releasePanelPlanned').hidden=!future;
  document.querySelectorAll('[data-release-tab]').forEach(btn=>{
    const on=btn.dataset.releaseTab===tab;
    btn.classList.toggle('active',on);
    btn.setAttribute('aria-selected',String(on));
  });
  document.querySelector('.release-dialog-scroll').scrollTop=0;
}
function showReleaseNotes(tab='history',trigger){
  releaseNotesTrigger=trigger||document.activeElement;
  releaseSwitchTab(tab);
  const overlay=document.getElementById('releaseNotesOverlay');
  overlay.hidden=false;
  document.body.style.overflow='hidden';
  overlay.querySelector('.release-close').focus();
}
function hideReleaseNotes(){
  document.getElementById('releaseNotesOverlay').hidden=true;
  // 근거자료 팝업이 별도로 열려 있으면 해당 상태를 존중
  document.body.style.overflow=document.getElementById('evidenceOverlay').hidden?'':'hidden';
  if(releaseNotesTrigger?.focus) releaseNotesTrigger.focus();
}
document.getElementById('openReleaseNotes').addEventListener('click',e=>showReleaseNotes('history',e.currentTarget));
document.getElementById('releaseNotesOverlay').addEventListener('click',e=>{
  if(e.target.closest('[data-release-close]'))hideReleaseNotes();
  const btn=e.target.closest('[data-release-tab]');
  if(btn)releaseSwitchTab(btn.dataset.releaseTab);
});
document.addEventListener('keydown',e=>{
  const overlay=document.getElementById('releaseNotesOverlay');
  if(overlay.hidden)return;
  if(e.key==='Escape'){hideReleaseNotes();e.preventDefault();return;}
  if(e.key!=='Tab')return;
  const focusable=[...overlay.querySelectorAll('button:not([disabled])')].filter(x=>x.getClientRects().length>0);
  if(!focusable.length)return;
  const first=focusable[0],last=focusable[focusable.length-1];
  if(e.shiftKey&&document.activeElement===first){last.focus();e.preventDefault();}
  else if(!e.shiftKey&&document.activeElement===last){first.focus();e.preventDefault();}
});


/* v2.0.0: pages, searchable unified criteria, interactive help */
const standardViewState={category:'전체',query:''};
const checks=[
  ['요청 목적·용도','어떤 행사·홍보·안내용 디자인인지 정했나요?'],
  ['최종 규격·매체','인쇄 사이즈 또는 웹·영상 규격을 준비했나요?'],
  ['문구·원고','사용할 문구와 가격·표시 정보를 확인했나요?'],
  ['이미지·영상 소스','원본 파일과 사용할 수 있는 자료를 준비했나요?'],
  ['디자인 방향·참고 사례','원하는 분위기나 참고 시안을 전달할 수 있나요?'],
  ['희망 완료일·검토 담당','필요한 날짜와 최종 검토 담당자가 정해졌나요?']
];
const CHECK_KEY='sudam-design-request-check-v2';
function restoreChecklist(){try{const a=JSON.parse(localStorage.getItem(CHECK_KEY)||'[]');return new Set(Array.isArray(a)?a:[]);}catch(e){return new Set();}}
let readyChecks=restoreChecklist();
function setVisiblePage(page,scroll=true){
 const p=['calculator','standards','guide'].includes(page)?page:'calculator';
 for(const name of ['calculator','standards','guide']){
  const panel=$(name==='calculator'?'calculatorPage':name==='standards'?'standardsPage':'guidePage');
  const active=(p===name); panel.hidden=!active; panel.classList.toggle('is-active',active);
 }
 document.querySelectorAll('.workspace-tab').forEach(el=>{const on=el.dataset.page===p;el.classList.toggle('active',on);if(on)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
 if(p==='standards')renderStandardsTable();
 const newHash=p==='calculator'?'calculator':p;
 if(location.hash!==('#'+newHash)){
  try{history.replaceState(null,'',location.pathname+location.search+'#'+newHash);}catch(e){}
 }
 if(scroll)window.scrollTo({top:0,behavior:'instant'});
}
function routeFromHash(){let key=location.hash.substring(1).toLowerCase();if(['calculator','standards','guide'].includes(key))setVisiblePage(key,false);}
function sortRank(name){const ix=featured.indexOf(name);return ix<0?999:ix;}
function filteredItems(){let rows=ITEMS.filter(x=>(standardViewState.category==='전체'||standardViewState.category==='☆ 즐겨찾기'&&favorites.has(x.name)||x.category===standardViewState.category));
 const q=standardViewState.query.trim().toLowerCase().replace(/\s+/g,'');
 if(q)rows=rows.filter(x=>(x.name+x.category+x.scope).toLowerCase().replace(/\s+/g,'').includes(q));
 const order=new Map(ITEMS.map((x,i)=>[x.name,i]));
 rows.sort((a,b)=>Number(favorites.has(b.name))-Number(favorites.has(a.name))||sortRank(a.name)-sortRank(b.name)||order.get(a.name)-order.get(b.name));
 return rows;
}
function renderStandardsTable(){
 const chips=categoryOrder.filter(c=>c==='전체'||c==='☆ 즐겨찾기'||ITEMS.some(x=>x.category===c));
 $('standardsCategories').innerHTML=chips.map(c=>`<button type="button" class="table-chip ${c===standardViewState.category?'active':''}" data-tcat="${esc(c)}" aria-pressed="${c===standardViewState.category}">${esc(c)}</button>`).join('');
 const filtered=filteredItems(),buckets=new Map();
 for(const i of filtered){let cat=favorites.has(i.name)?'★ 내 즐겨찾기':i.category;if(!buckets.has(cat))buckets.set(cat,[]);buckets.get(cat).push(i);}
 const cats=['★ 내 즐겨찾기','오프라인','온라인','편집·문서','웹·UI/UX','영상','패키지','브랜딩','이미지','인쇄·발주'];
 const groupOrder=[...buckets.keys()].sort((a,b)=>cats.indexOf(a)-cats.indexOf(b));
 const html=[];
 for(const cat of groupOrder){
  const arr=buckets.get(cat);html.push(`<tr class="group-row"><th colspan="4" scope="colgroup">${esc(cat)} <span style="font-weight:500;opacity:.65">${arr.length}종</span></th></tr>`);
  for(const i of arr){const fav=favorites.has(i.name),name=esc(i.name);
    html.push(`<tr><td><div style="display:flex;align-items:center;gap:9px"><button class="star-inline ${fav?'on':''}" type="button" data-standards-favorite="${name}" aria-label="${fav?'즐겨찾기 해제':'즐겨찾기 추가'}">${fav?'★':'☆'}</button><button class="standard-name" type="button" data-standards-item="${name}" title="${name} · ${esc(i.scope)}"><span>${name}</span></button></div><small style="margin-left:38px;font-size:10px;color:#829489">${esc(i.scope)}</small></td><td class="standard-days">${fmt(i.standard)}</td><td class="standard-days">${fmt(i.advanced)}</td><td><div class="standard-actions"><button class="small-action" type="button" data-standards-evidence="${name}">근거</button><button class="small-action primary" type="button" data-standards-item="${name}">계산 →</button></div></td></tr>`);
  }
 }
 $('standardTableBody').innerHTML=html.join('')||'<tr><td colspan="4" style="text-align:center;padding:38px;color:#779080">검색 결과가 없습니다. 다른 키워드나 분류를 선택해 주세요.</td></tr>';
 $('standardsCount').textContent=`${filtered.length}종 표시 · 전체 ${ITEMS.length}종`;
}
function openEvidenceForName(name){const i=ITEMS.find(x=>x.name===name);if(!i)return;const overlay=$('evidenceOverlay');$('evidenceSubtitle').textContent=i.name.replace('｜',' · ')+' · 플랫폼별 참고 작업일과 원문';$('sourceEvidenceContent').innerHTML=renderEvidence(i);overlay.hidden=false;document.body.style.overflow='hidden';overlay.querySelector('.evidence-close').focus();}
function selectFromStandards(name){chooseItem(name);state.category='전체';state.showAll=false;render();setVisiblePage('calculator');$('step1').scrollIntoView({behavior:'smooth',block:'start'});toast('선택한 제작물을 계산기에 적용했어요.');}
function showScenario(name){
 const preset={detail:{item:'상세페이지｜12,000px 이하',quality:'advanced',planning:'basic',media:'partial',density:'normal'},
 reels:{item:'릴스 영상｜15초',quality:'advanced',planning:'basic',media:'provided'},
 backlit:{item:'라이트패널·백릿',quality:'standard',planning:'none',media:'provided',printing:'retouch'}}[name];
 if(!preset)return;
 Object.assign(state,{item:null,category:'전체',query:'',showAll:false,quality:'standard',planning:'none',media:'provided',density:'normal',printing:'none',revision:'default',composite:false,qty:1},preset);
 $('searchInput').value='';render();setVisiblePage('calculator');$('step1').scrollIntoView({behavior:'smooth',block:'start'});toast('예시 조건을 적용했어요. 필요에 맞게 조정해 보세요.');
}
function saveReadyChecks(){try{localStorage.setItem(CHECK_KEY,JSON.stringify([...readyChecks]));}catch(e){}}
function renderChecklist(){
 $('checklistItems').innerHTML=checks.map(([t,d],j)=>`<label class="check-item"><input type="checkbox" value="${j}" data-check-index="${j}" ${readyChecks.has(j)?'checked':''}><span><b>${esc(t)}</b><small>${esc(d)}</small></span></label>`).join('');
 $('checkProgress').textContent=`${readyChecks.size} / ${checks.length}개 준비됨`;
 $('checkMeterFill').style.width=(readyChecks.size/checks.length*100)+'%';
}
function downloadCriteriaCsv(){const lines=[['분류','제작물','일반','심화','기본 적용범위','적용 근거 및 제외사항'],...ITEMS.map(x=>[x.category,x.name,fmt(x.standard),fmt(x.advanced),x.scope,x.note])];const csv='\ufeff'+lines.map(row=>row.map(v=>'"'+String(v||'').replace(/"/g,'""')+'"').join(',')).join('\r\n');const blob=new Blob([csv],{type:'text/csv;charset=utf-8'});const href=URL.createObjectURL(blob);const a=document.createElement('a');a.href=href;a.download='수담_디자인_소요일수_전체기준표_v2.1.0.csv';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1000);toast('전체 기준표 CSV를 저장했어요.');}
const guideTexts=[
 ['제작물 선택','검색 또는 카테고리에서 요청할 품목을 선택합니다. 별표는 개인 즐겨찾기에 저장할 수 있어요.'],
 ['디자인 수준','일반은 기본 신규 디자인, 심화는 시각적 완성도를 높이는 작업이에요. 별도 기획은 이후 옵션으로 선택해요.'],
 ['기획·자료 준비','기획 범위와 이미지·영상 소스 준비 정도를 골라 주세요. 영상은 필요한 추가 작업이 독립적으로 계산돼요.'],
 ['결과 확인·공유','최종 예상 투입일수와 상세 산정 내역을 확인하고, 복사 또는 조건 공유 기능으로 요청 내용을 전달해요.']
];
let lastZoomTrigger=null;
function showZoom(n){const i=Number(n)-1;if(!guideTexts[i])return;lastZoomTrigger=document.activeElement;$('zoomTitle').textContent=`0${i+1}. ${guideTexts[i][0]}`;const im=$('screenshotStep'+(i+1));$('zoomImage').src=im.src;$('zoomImage').alt=im.alt;$('zoomDescription').textContent=guideTexts[i][1];$('guideZoomOverlay').hidden=false;document.body.style.overflow='hidden';$('guideZoomOverlay').querySelector('.zoom-close').focus();}
function closeZoom(){$('guideZoomOverlay').hidden=true;document.body.style.overflow='';if(lastZoomTrigger?.focus)lastZoomTrigger.focus();}
const tourSteps=[
 {target:'step1',head:'제작물 선택',desc:'검색하거나 카테고리에서 요청할 제작물을 선택하세요. ★를 눌러 즐겨찾기에 저장할 수도 있어요.'},
 {target:'step2',head:'일반·심화 선택',desc:'기본 신규 디자인은 일반, 정교한 시각 표현이 필요한 경우 심화를 선택하세요. 기획은 따로 선택합니다.'},
 {target:'step3',head:'기획과 자료 준비',desc:'직접 제공할 문구·이미지·영상 소스를 확인하고, 디자이너가 추가로 할 기획·탐색·촬영을 선택하세요.'},
 {target:'estimateResult',head:'결과 확인·요청서 복사',desc:'예상 작업 투입일수와 상세 산정 내역을 확인하세요. 결과 복사 또는 조건 링크 공유로 전달할 수 있어요.'}
];
let tourIndex=-1;
function tourPosition(){if(tourIndex<0)return;const target=$(tourSteps[tourIndex].target);const b=target.getBoundingClientRect(),bubble=$('tourCoach');const wide=window.innerWidth>760;
 let x,y;if(wide&&b.right+352<window.innerWidth){x=b.right+14;y=Math.max(13,Math.min(window.innerHeight-bubble.offsetHeight-14,b.top+24));}
 else if(wide&&b.left>350){x=b.left-350;y=Math.max(13,Math.min(window.innerHeight-bubble.offsetHeight-14,b.top+24));}
 else{x=Math.max(12,Math.min(window.innerWidth-bubble.offsetWidth-12,b.left));y=b.top>bubble.offsetHeight+20?b.top-bubble.offsetHeight-15:Math.min(window.innerHeight-bubble.offsetHeight-14,b.bottom+15);}
 bubble.style.left=Math.round(x)+'px';bubble.style.top=Math.max(10,Math.round(y))+'px';}
function tourStep(n){tourIndex=n;document.querySelectorAll('.tour-focus').forEach(x=>x.classList.remove('tour-focus'));
 if(n<0||n>=tourSteps.length){endTour();return;}
 const s=tourSteps[n],node=$(s.target);node.classList.add('tour-focus');$('tourCoach').hidden=false;$('tourCounter').textContent=`단계 ${n+1} / ${tourSteps.length}`;$('tourHeading').textContent=s.head;$('tourDesc').textContent=s.desc;$('tourBack').disabled=n===0;$('tourNext').textContent=n===tourSteps.length-1?'완료 ✓':'다음 →';node.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(tourPosition,240);
}
function startTour(){setVisiblePage('calculator');if(!record()){Object.assign(state,{item:'상세페이지｜12,000px 이하',category:'전체',quality:'standard',planning:'none',media:'provided',density:'normal',printing:'none',revision:'default',composite:false,qty:1});render();}tourStep(0);}
function endTour(){tourIndex=-1;document.querySelectorAll('.tour-focus').forEach(x=>x.classList.remove('tour-focus'));$('tourCoach').hidden=true;}

document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>{endTour();setVisiblePage(b.dataset.page);}));
document.querySelectorAll('[data-go-guide]').forEach(b=>b.addEventListener('click',()=>setVisiblePage('guide')));
$('standardsCategories').addEventListener('click',e=>{const b=e.target.closest('[data-tcat]');if(b){standardViewState.category=b.dataset.tcat;renderStandardsTable();}});
$('standardsSearch').addEventListener('input',e=>{standardViewState.query=e.target.value;renderStandardsTable();});
$('standardTableBody').addEventListener('click',e=>{const fav=e.target.closest('[data-standards-favorite]');if(fav){toggleFavorite(fav.dataset.standardsFavorite);renderStandardsTable();return;}const ev=e.target.closest('[data-standards-evidence]');if(ev){openEvidenceForName(ev.dataset.standardsEvidence);return;}const item=e.target.closest('[data-standards-item]');if(item)selectFromStandards(item.dataset.standardsItem);});
$('downloadCsv').addEventListener('click',downloadCriteriaCsv);
$('printTable').addEventListener('click',()=>{document.body.classList.add('printing-standards');window.print();setTimeout(()=>document.body.classList.remove('printing-standards'),300);});
window.addEventListener('afterprint',()=>document.body.classList.remove('printing-standards'));
document.querySelectorAll('[data-scenario]').forEach(b=>b.addEventListener('click',()=>showScenario(b.dataset.scenario)));
$('checklistItems').addEventListener('change',e=>{const input=e.target.closest('[data-check-index]');if(!input)return;const n=Number(input.dataset.checkIndex);if(input.checked)readyChecks.add(n);else readyChecks.delete(n);saveReadyChecks();renderChecklist();});
$('copyChecklist').addEventListener('click',()=>copyText('[디자인 요청 전 준비 체크리스트]\n'+checks.map(([t],i)=>`${readyChecks.has(i)?'☑':'☐'} ${t}`).join('\n')));
document.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>showZoom(b.dataset.zoom)));
$('guideZoomOverlay').addEventListener('click',e=>{if(e.target.closest('[data-zoom-close]'))closeZoom();});
$('startTour').addEventListener('click',startTour);
$('tourExit').addEventListener('click',endTour);
$('tourBack').addEventListener('click',()=>tourStep(tourIndex-1));
$('tourNext').addEventListener('click',()=>tourStep(tourIndex+1));
window.addEventListener('resize',tourPosition);
window.addEventListener('scroll',()=>{if(tourIndex>=0)tourPosition();},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!$('guideZoomOverlay').hidden){closeZoom();return;}if(tourIndex>=0)endTour();}});
window.addEventListener('hashchange',routeFromHash);
renderStandardsTable();renderChecklist();routeFromHash();


// ERP request summary: derived from current selections; does not submit to ERP.
let lastErpTrigger=null;
let erpFieldValues={};
function erpSummaryParts(){
 const i=record(),d=calculated();if(!i||!d)return null;
 const quality=state.quality==='advanced'?'더 정교하고 완성도 높게 (심화)':'깔끔하고 보기 좋게 (일반)';
 const purpose=$('erpPurpose')?.value.trim()||'';
 const extra=$('erpExtra')?.value.trim()||'';
 const subject=`[디자인 요청] ${i.name.replace('｜',' · ')} 제작`;
 const overview=[purpose?`요청 목적: ${purpose}`:null,`제작물: ${i.name.replace('｜',' · ')}`,`제작 수량: ${state.qty}종`,`디자인 수준: ${quality}`,`기본 제작 범위: ${i.scope}`].filter(Boolean).join('\n');
 const details=[`기획 요청 범위: ${value('planning').label}`,`${isVideo()?'영상 소스':'이미지·자료'} 준비 상태: ${value('media').label}`,isDetail()?`정보 밀도: ${value('density').label}`:null,isPrinting()?`대형 출력 보정: ${value('printing').label}`:null,state.composite?'별도 고난도 이미지 보정·합성 요청':null,d.revisions?`추가 수정 범위: ${value('revision').label}`:null,fixedRules.size?`반드시 유지할 조건: ${[...fixedRules].join(' / ')}`:null,extra?`추가 요청사항: ${extra}`:null].filter(Boolean).join('\n');
 const goal=`선택한 제작물 ${state.qty}종의 ${quality} 디자인을 제작하고, 협의된 규격과 요청 내용에 부합하는 최종 결과물을 전달합니다.\n최종 납품 형식·문구·원본 자료 및 수정 범위는 업무 담당자와 협의하여 확정합니다.`;
 const timeline=`예상 작업 투입일수: ${fmt(d.sum)}\n(1인 · 1일 8시간 기준 / 확정 납기 아님)${d.advisory?'\n※ 복합 작업으로 세부 일정 협의가 필요합니다.':''}`;
 return [{key:'title',title:'업무명',subtitle:'제목 입력에 활용',text:subject},{key:'overview',title:'업무 추진 개요',subtitle:'요청 개요에 활용',text:overview},{key:'details',title:'세부 요청사항',subtitle:'요청 내용 또는 비고에 활용',text:details},{key:'goal',title:'목표 및 완료 기준',subtitle:'완료 기준에 활용',text:goal},{key:'timeline',title:'예상 소요일수 (참고)',subtitle:'일정 협의 참고',text:timeline}];
}
function renderErpFields(){const fields=erpSummaryParts();if(!fields)return;
 erpFieldValues=Object.fromEntries(fields.map(x=>[x.key,x.text]));
 $('erpFields').innerHTML=fields.map(x=>`<div class="erp-field"><div class="erp-field-top"><div><b>${esc(x.title)}</b> <small>${esc(x.subtitle)}</small></div><button type="button" data-erp-copy="${x.key}">복사 ↗</button></div><p>${esc(x.text)}</p></div>`).join('');
}
function openErpDialog(){if(!record()){toast('먼저 제작물을 선택해 주세요.');return;}
 lastErpTrigger=document.activeElement;renderErpFields();$('erpOverlay').hidden=false;document.body.style.overflow='hidden';$('erpOverlay').querySelector('.erp-dialog').focus();}
function closeErpDialog(){$('erpOverlay').hidden=true;document.body.style.overflow='';lastErpTrigger?.focus?.();}
$('openErp').addEventListener('click',openErpDialog);
$('closeErp').addEventListener('click',closeErpDialog);
$('erpDone').addEventListener('click',closeErpDialog);
$('erpOverlay').addEventListener('click',e=>{if(e.target.closest('[data-close-erp]')){closeErpDialog();return;}
 const cp=e.target.closest('[data-erp-copy]');if(cp){renderErpFields();copyText(erpFieldValues[cp.dataset.erpCopy]||'');}});
$('erpPurpose').addEventListener('input',renderErpFields);
$('erpExtra').addEventListener('input',renderErpFields);
$('erpCopyAll').addEventListener('click',()=>{renderErpFields();copyText(erpSummaryParts().map(x=>`[${x.title}]\n${x.text}`).join('\n\n'));});
document.querySelectorAll('[data-open-erp-guide]').forEach(b=>b.addEventListener('click',()=>{setVisiblePage('calculator');if(!record()){Object.assign(state,{item:'상세페이지｜12,000px 이하',quality:'standard',planning:'basic',media:'provided'});render();}openErpDialog();}));
const _renderResultOriginal=renderResult;
let erpLastSelectedItem=state.item;
renderResult=function(){if(state.item!==erpLastSelectedItem){$('erpPurpose').value='';$('erpExtra').value='';erpLastSelectedItem=state.item;} _renderResultOriginal();$('openErp').disabled=!calculated();};
$('openErp').disabled=!calculated();
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('erpOverlay').hidden){e.preventDefault();closeErpDialog();}});


document.querySelectorAll('[data-guide-erp-preview]').forEach(b=>b.addEventListener('click',()=>{
 lastZoomTrigger=document.activeElement;
 $('zoomTitle').textContent='ERP 요청서에 옮기기 · 실제 화면';
 $('zoomImage').src=$('erpGuideImage').src;
 $('zoomImage').alt='ERP 디자인 요청서용 정리 창 실제 화면';
 $('zoomDescription').textContent='결과 요약을 업무 추진 개요·세부 요청사항·목표 및 완료 기준 등으로 구분해 각각 복사하거나 전체 복사할 수 있어요.';
 $('guideZoomOverlay').hidden=false;document.body.style.overflow='hidden';
 $('guideZoomOverlay').querySelector('.zoom-close').focus();
}));


/* v2.1.0 UI navigation enhancements: presentation only. */
(function(){
 const names=['제작물 선택','디자인 수준','추가 조건','결과 활용'];
 let current=1;
 function guideSlide(n){
  current=Math.max(1,Math.min(4,n));
  document.querySelectorAll('[data-guide-panel]').forEach(node=>node.classList.toggle('is-active',Number(node.dataset.guidePanel)===current));
  document.querySelectorAll('[data-guide-step]').forEach(node=>{
   const active=Number(node.dataset.guideStep)===current;
   node.classList.toggle('active',active);node.setAttribute('aria-selected',String(active));
  });
  document.getElementById('guidePrev').disabled=current===1;
  document.getElementById('guideNext').textContent=current===4?'계산하러 가기 →':'다음 단계 →';
  document.getElementById('guideStepStatus').textContent=`0${current} / 04 · ${names[current-1]}`;
 }
 document.querySelectorAll('[data-guide-step]').forEach(b=>b.addEventListener('click',()=>guideSlide(Number(b.dataset.guideStep))));
 document.getElementById('guidePrev').addEventListener('click',()=>guideSlide(current-1));
 document.getElementById('guideNext').addEventListener('click',()=>{
  if(current===4){setVisiblePage('calculator');document.getElementById('step1').scrollIntoView({behavior:'smooth',block:'start'});}
  else guideSlide(current+1);
 });
 const bar=document.getElementById('mobileEstimateBar');
 function refreshMini(){
  const page=document.getElementById('calculatorPage');
  const chosen=!!record();
  const show=chosen&&!page.hidden;
  bar.hidden=!show;
  if(show) document.getElementById('mobileEstimateValue').textContent=document.getElementById('totalDisplay').textContent.trim()||'—';
 }
 bar.addEventListener('click',()=>document.getElementById('estimateResult').scrollIntoView({behavior:'smooth',block:'start'}));
 new MutationObserver(refreshMini).observe(document.getElementById('totalDisplay'),{subtree:true,characterData:true,childList:true});
 new MutationObserver(refreshMini).observe(document.getElementById('calculatorPage'),{attributes:true,attributeFilter:['hidden']});
 document.querySelectorAll('[data-page],[data-preset],[data-scenario],[data-standards-item]').forEach(el=>el.addEventListener('click',()=>requestAnimationFrame(refreshMini)));
 window.addEventListener('hashchange',()=>requestAnimationFrame(refreshMini));
 guideSlide(1);refreshMini();
})();


/* v2.3.0 user-centered presentation; original calculation formulas left unchanged. */
const fixedRules=new Set();
const fixedConditionInputs=[...document.querySelectorAll('[data-fixed-rule]')];
function updateFixedRules(){
 const warn=document.getElementById('fixedRulesNote');
 const contradictory=fixedRules.has('구성·배치 유지')&&['content','strategy'].includes(state.planning);
 warn.textContent=contradictory?'구성·배치를 유지하면서 추가 기획도 요청하셨어요. 실제 변경 가능한 부분은 디자인 담당자와 함께 확인해 주세요.':'';
}
fixedConditionInputs.forEach(input=>input.addEventListener('change',()=>{if(input.checked)fixedRules.add(input.dataset.fixedRule);else fixedRules.delete(input.dataset.fixedRule);updateFixedRules();}));
document.getElementById('planningChoices').addEventListener('click',()=>queueMicrotask(updateFixedRules));
const helpOverlay=document.getElementById('choiceHelpOverlay');
const helpTitle=document.getElementById('choiceHelpTitle');
const helpBody=document.getElementById('choiceHelpBody');
const helpSubtitle=document.getElementById('choiceHelpSubtitle');
let helpTrigger=null;
function mockVisual(kind){
 const premium=kind==='premium';
 const src=premium?QUALITY_EXAMPLE_PREMIUM:QUALITY_EXAMPLE_STANDARD;
 return `<div class="quality-comparison-photo"><img src="${src}" alt="${premium?'동일한 갈비찜을 프리미엄 광고 톤으로 강조한 참고 시안':'동일한 갈비찜을 정보 중심으로 정돈한 참고 시안'}" loading="lazy"></div>`;
}
const QUALITY_EXAMPLE_STANDARD="./assets/images/quality-standard.jpg";
const QUALITY_EXAMPLE_PREMIUM="./assets/images/quality-premium.jpg";
const helpInfos={
 quality:{title:'퀄리티는 어떻게 다른가요?',sub:'같은 메뉴와 정보를 사용해도 작업 공수와 표현 방식이 달라질 수 있어요.',html:()=>`<div class="help-visual-pair quality-demo"><article><div class="quality-demo-heading"><span>일반</span><strong>깔끔하고 보기 좋게</strong></div>${mockVisual('standard')}<p>메뉴·가격이 한눈에 들어오도록 기본적인 사진 보정과 레이아웃을 완성합니다.</p><div class="quality-work"><strong>주요 작업 내용</strong><div class="quality-work-tags"><span>기본 레이아웃</span><span>메뉴·가격 배치</span><span>기본 이미지 보정</span><span>기본 그래픽 구성</span></div></div></article><article><div class="quality-demo-heading"><span>심화</span><strong>더 정교하고 완성도 높게</strong></div>${mockVisual('premium')}<p>추가적인 디자인 공수를 투입해 이미지·글자·그래픽 표현을 더 세밀하게 다듬습니다.</p><div class="quality-work"><strong>추가 작업 내용</strong><div class="quality-work-tags"><span>제품 이미지 연출·보정</span><span>맞춤 타이포그래피</span><span>그래픽·아이콘 제작</span><span>색감·시선 흐름 조정</span></div></div></article></div><div class="help-insight"><b>선택 시 참고</b><span>두 옵션 모두 완성된 디자인입니다. 차이는 시각적 표현에 필요한 <b>작업량과 디테일</b>이며, 홍보 방향 기획·사진 탐색·촬영은 별도 옵션에서 선택합니다.</span></div><small class="help-visual-disclaimer">동일 메뉴를 활용한 설명용 예시입니다. 실제 제작물의 스타일이나 완성도를 보장하는 샘플은 아닙니다.</small>`},
 planning:{title:'어디까지 맡겨야 할까요?',sub:'자료를 얼마나 주는지가 아니라, 문구와 구성을 누가 결정하는지를 기준으로 골라보세요.',html:()=>`<div class="help-plan-list">
 <div><b>01 정해둔 내용 그대로</b><span>직원이 전달: 문구 + 내용 순서 + 배치 시안</span><small>디자이너: 정해둔 범위 안에서 완성도 있게 제작</small></div>
 <div><b>02 내용은 준비, 배치는 맡기기</b><span>직원이 전달: 사용할 문구·사진·핵심 정보</span><small>디자이너: 읽기 편한 배치·디자인 콘셉트 제안</small></div>
 <div><b>03 필수 내용만 전달</b><span>직원이 전달: 메뉴명·가격·날짜처럼 꼭 넣을 내용</span><small>디자이너: 카피·콘텐츠 순서·레이아웃까지 제안</small></div>
 <div><b>04 목적만 전달</b><span>직원이 전달: 홍보하려는 이유와 꼭 지켜야 할 조건</span><small>디자이너: 전달 메시지·콘셉트·카피·스토리 구성부터 제안</small></div></div><div class="help-insight"><b>핵심은 이거예요</b><span>‘프리미엄 퀄리티 + 내용 그대로’도 가능하고, ‘기본 퀄리티 + 기획부터 요청’도 가능해요.</span></div>`},
 media:{title:'사진 준비 상태는 어떻게 고르나요?',sub:'정확히 어떤 사진을 직접 제공할 수 있는지, 찾아야 하는 사진이 얼마나 되는지 생각해 보세요.',html:()=>`<div class="media-help-grid"><article><div class="media-help-graphic media-ready"><span>✓</span><span>✓</span><span>✓</span></div><b>전부 전달할게요</b><p>사용할 수 있는 원본 사진이 준비된 경우</p></article><article><div class="media-help-graphic media-partial"><span>✓</span><span>+</span><span>?</span></div><b>일부만 있어요</b><p>나머지 이미지는 찾아서 골라야 하는 경우</p></article><article><div class="media-help-graphic media-empty"><span>?</span><span>?</span><span>?</span></div><b>거의 없어요</b><p>디자인에 맞는 이미지 대부분을 별도로 찾아야 하는 경우</p></article></div><div class="help-insight"><b>사진을 새로 만들어야 하나요?</b><span>여러 사진을 합쳐 새로운 장면으로 만드는 작업은 ‘별도 이미지 합성’ 옵션을 확인해 주세요. 단순 사진 탐색과는 다른 작업이에요.</span></div>`},
 density:{title:'정보량이 많다는 건 어떤 뜻인가요?',sub:'같은 상세페이지 길이라도 얼마나 많은 내용을 정리해야 하는지에 따라 달라요.',html:()=>`<div class="density-help-grid"><div><div class="density-graphic low"><i></i><i></i><i></i></div><b>내용이 단순함</b><small>제품 사진과 짧은 설명 중심</small></div><div><div class="density-graphic mid"><i></i><i></i><i></i><i></i><i></i></div><b>정보가 많은 편</b><small>설명을 짧게 묶거나 배치를 다시 정리</small></div><div><div class="density-graphic high"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><b>도식화도 필요함</b><small>복잡한 정보를 표·아이콘으로 새롭게 표현</small></div></div>`},
 printing:{title:'큰 사이즈로 출력할 때는?',sub:'출력 크기 자체보다, 출력물에 들어갈 원본 이미지 화질이 중요해요.',html:()=>`<div class="printing-help-grid"><div class="print-good"><div class="print-sample">✓</div><b>원본 화질 충분</b><small>추가 보정 없이 바로 제작 가능한 경우</small></div><div class="print-bad"><div class="print-sample">▦</div><b>크게 늘리면 흐릿함</b><small>원본 보정·재구성 작업이 필요한 경우</small></div></div><div class="help-insight"><b>추가할 필요가 없는 경우</b><span>큰 현수막이라고 무조건 추가하는 게 아니라, 실제로 고해상도 원본 작업이 필요할 때만 선택해요.</span></div>`},
 revision:{title:'추가 수정은 언제 선택하나요?',sub:'디자인 완성 뒤 기본적인 확인을 넘어서는 변경이 예상될 때만 선택하세요.',html:()=>`<div class="help-plan-list"><div><b>기본적인 확인·수정</b><span>문구 오타 수정, 작은 위치 조정 등</span></div><div><b>추가 조정 예상</b><span>검토 후 문구·이미지·배치를 추가 변경할 가능성이 큼</span></div><div><b>여러 차례 수정 예상</b><span>여러 이해관계자의 의견을 반영해 반복 검토가 필요한 경우</span></div></div>`}
};
function openChoiceHelp(kind){const x=helpInfos[kind];if(!x)return;helpTrigger=document.activeElement;helpTitle.textContent=x.title;helpSubtitle.textContent=x.sub;helpBody.innerHTML=x.html();helpOverlay.hidden=false;document.body.style.overflow='hidden';document.getElementById('closeChoiceHelp').focus();}
function closeChoiceHelp(){helpOverlay.hidden=true;document.body.style.overflow='';helpTrigger?.focus?.();}
document.querySelectorAll('[data-help]').forEach(x=>x.addEventListener('click',()=>openChoiceHelp(x.dataset.help)));
document.getElementById('closeChoiceHelp').addEventListener('click',closeChoiceHelp);
document.getElementById('choiceHelpDone').addEventListener('click',closeChoiceHelp);
helpOverlay.addEventListener('click',e=>{if(e.target.closest('[data-close-choice-help]'))closeChoiceHelp();});
const fixedClearOriginal=resetAll;
resetAll=function(){fixedRules.clear();fixedConditionInputs.forEach(x=>x.checked=false);updateFixedRules();fixedClearOriginal();};
const drawer=document.getElementById('estimateDrawer');
const bottomBar=document.getElementById('stickyEstimateBar');
const bottomText=document.getElementById('stickyEstimateTotal');
const bottomItem=document.getElementById('stickyEstimateItem');
const bottomErp=document.getElementById('stickyErp');
const stickyBreak=document.getElementById('stickyBreakdown');
function refreshStickyReferences(i){
 const bench=document.getElementById('stickyBenchmarks');
 const links=document.getElementById('stickySourceLinks');
 if(!i){bench.textContent='제작물을 선택하면 표시됩니다.';links.innerHTML='';return;}
 const compare=CROSS_COMPARE[i.name]||{};
 const formatPair=(name,lo,hi)=>lo==null?`<span class="sticky-bench-chip empty"><b>${name}</b> 직접 비교 부족</span>`:`<span class="sticky-bench-chip"><b>${name}</b> 일반 ${numberDays(lo)}일 · 심화 ${numberDays(hi)}일</span>`;
 bench.innerHTML=formatPair('크몽',compare.kg,compare.ka)+formatPair('숨고',compare.sg,compare.sa);
 const km=(PRODUCT_CASES[i.name]||[]).find(c=>/^https:\/\/kmong\.com\/gig\/\d+/.test(c.url));
 const sg=(SOOMGO_CASES[i.name]||[]).find(c=>c.grade==='직접 유사'&&/^https:\/\/soomgo\.com\//.test(c.url))||(SOOMGO_CASES[i.name]||[]).find(c=>/^https:\/\/soomgo\.com\//.test(c.url));
 links.innerHTML=(km?`<a href="${km.url}" target="_blank" rel="noopener noreferrer">${compare.kn?"크몽 원문":"크몽 참고 사례"} ↗</a>`:'')+(sg?`<a href="${sg.url}" target="_blank" rel="noopener noreferrer">${compare.sn?"숨고 원문":"숨고 참고 사례"} ↗</a>`:'')+`<button type="button" id="stickyFullEvidence">산정 근거 전체 보기 ↗</button>`;
 document.getElementById('stickyFullEvidence')?.addEventListener('click',()=>document.getElementById('openEvidence').click());
}
function refreshBottomEstimate(){
 const i=record(),calcActive=!document.getElementById('calculatorPage').hidden;
 bottomBar.hidden=!calcActive;
 if(!calcActive&& !drawer.hidden)closeEstimateDrawer();
 bottomText.textContent=i?document.getElementById('totalDisplay').textContent:'선택 전';
 bottomItem.textContent=i?i.name.replace('｜',' · ')+' · '+(state.quality==='advanced'?'완성도 높게':'깔끔하게'):'제작물을 선택해 주세요';
 bottomErp.disabled=!i;stickyBreak.disabled=!i;refreshStickyReferences(i);
}
function openEstimateDrawer(){if(!record())return;drawer.hidden=false;document.body.style.overflow='hidden';stickyBreak.setAttribute('aria-expanded','true');document.getElementById('closeEstimateDrawer').focus();}
function closeEstimateDrawer(){drawer.hidden=true;document.body.style.overflow='';stickyBreak.setAttribute('aria-expanded','false');}
stickyBreak.addEventListener('click',()=>drawer.hidden?openEstimateDrawer():closeEstimateDrawer());
bottomErp.addEventListener('click',()=>document.getElementById('openErp').click());
document.getElementById('stickyReset').addEventListener('click',()=>document.getElementById('resetAll').click());
document.getElementById('closeEstimateDrawer').addEventListener('click',closeEstimateDrawer);
drawer.addEventListener('click',e=>{if(e.target.closest('[data-close-estimate-drawer]'))closeEstimateDrawer();});
// Opening the ERP modal from detail drawer: close drawer first so underlying modal remains usable.
const erpOriginalOpen=openErpDialog;
openErpDialog=function(){if(!drawer.hidden)closeEstimateDrawer();erpOriginalOpen();};
new MutationObserver(refreshBottomEstimate).observe(document.getElementById('totalDisplay'),{childList:true,subtree:true,characterData:true});
new MutationObserver(refreshBottomEstimate).observe(document.getElementById('calculatorPage'),{attributes:true,attributeFilter:['hidden']});
document.querySelectorAll('[data-quality],[data-item],[data-preset],[data-scenario]').forEach(x=>x.addEventListener('click',()=>requestAnimationFrame(refreshBottomEstimate)));
document.getElementById('headerRelease').addEventListener('click',()=>document.getElementById('openReleaseNotes').click());
document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;if(!helpOverlay.hidden)closeChoiceHelp();else if(!drawer.hidden)closeEstimateDrawer();});
refreshBottomEstimate();


/* Keep non-priced request constraints in sync with reset, presets and shared links. */
function clearFixedRules(){fixedRules.clear();fixedConditionInputs.forEach(x=>x.checked=false);updateFixedRules();}
const preservedFixed=new URLSearchParams(location.search).get('fixedRules');
if(preservedFixed){preservedFixed.split('|').forEach(key=>{const input=fixedConditionInputs.find(x=>x.dataset.fixedRule===key);if(input){input.checked=true;fixedRules.add(key);}});updateFixedRules();}
document.getElementById('resetAll').addEventListener('click',clearFixedRules);
document.querySelectorAll('[data-preset],[data-scenario]').forEach(x=>x.addEventListener('click',clearFixedRules));

// Open ERP / evidence dialogs from inside the result drawer without stacking overlays.
document.getElementById('openErp').addEventListener('click',()=>{if(!drawer.hidden)closeEstimateDrawer();},true);
document.getElementById('openEvidence').addEventListener('click',()=>{if(!drawer.hidden)closeEstimateDrawer();},true);

