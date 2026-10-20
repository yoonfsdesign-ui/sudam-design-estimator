# SUDAM DESIGN — GitHub Pages용 웹사이트

기존 산정값과 계산 기능은 그대로 유지하며, **파비콘 및 링크 공유 미리보기**가 추가되었습니다.

## 구성

- `index.html` — 사이트 화면 및 OG(링크 미리보기) 메타태그
- `_config.yml` — GitHub Pages 자동 주소 적용 설정
- `assets/css/styles.css` — 화면 디자인
- `assets/js/app.js` — 계산 및 사용 기능
- `assets/images/favicon.svg`, `favicon.ico`, `favicon-32.png`, `favicon-192.png`, `favicon-512.png`, `apple-touch-icon.png` — 파비콘 및 홈 화면 아이콘
- `assets/images/share-preview.png` — **1200×630px 링크 공유 미리보기 이미지**
- `assets/images/quality-*.jpg` 등 — 사이트 기존 이미지

## GitHub Pages 업로드하기

1. GitHub의 기존 저장소 또는 새 공개 저장소를 엽니다.
2. 이 ZIP **압축을 해제**한 뒤, 안의 `index.html`, `_config.yml`, `assets/`, `README.md`를 **저장소 최상위(root)** 에 업로드합니다.
3. **중요: 이전 버전에 있던 `.nojekyll` 파일이 저장소에 남아 있다면 삭제하세요.** 이번에는 Jekyll이 저장소 실제 주소를 OG 메타태그에 자동 반영해야 합니다.
4. `Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root)`로 설정합니다.
5. 배포 완료 후 GitHub Pages 주소로 접속해 브라우저 탭 아이콘을 확인합니다.
6. 배포한 주소를 카카오톡이나 다른 메신저에 공유하여 미리보기 이미지가 뜨는지 확인합니다.

**공유 미리보기의 이미지 주소는 GitHub Pages가 자동으로 넣습니다.** `_config.yml`의 `jekyll-github-metadata`와 `index.html`의 Liquid 템플릿을 사용하므로 GitHub 사용자명을 직접 입력할 필요가 없습니다.

## 미리보기가 안 보일 때

- **GitHub 저장소에 `.nojekyll`이 있으면 삭제**하세요. `.nojekyll`이 있으면 필요한 메타태그가 변환되지 않습니다.
- `https://사용자명.github.io/저장소명/assets/images/share-preview.png` 주소로 이미지가 열리는지 확인하세요.
- KakaoTalk은 공유 URL 미리보기를 캐시할 수 있으므로, 이전 링크 카드가 남으면 미리보기 캐시 갱신 후 다시 공유합니다.
- 새 저장소나 새로운 주소를 사용하는 경우 미리보기 카드 생성에 잠시 시간이 걸릴 수 있습니다.
- 브라우저 파일(`index.html`)을 로컬에서 바로 열면 Liquid OG 메타태그는 아직 변환되지 않습니다. **공유 미리보기는 GitHub Pages 배포 후 확인**해야 합니다.

## 추후 변경

- 파비콘 변경: `assets/images/favicon.svg`, `favicon.ico` 및 PNG 아이콘을 함께 수정
- 공유 이미지 변경: `assets/images/share-preview.png` 파일을 같은 이름으로 교체
- 사이트 디자인과 계산 로직은 기존 파일에서 변경 없음
