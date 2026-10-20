# SUDAM DESIGN — 디자인 예상 소요일수 계산기

GitHub Pages 배포용 정적 웹사이트 (기준 버전: v2.3.3).

## 폴더 구성

```text
index.html
.nojekyll
assets/
  css/styles.css
  js/app.js
  images/quality-standard.jpg
  images/quality-premium.jpg
  images/guide-step-1.jpg ...
  images/erp-guide.jpg
README.md
```

## GitHub Pages로 공개하기

1. GitHub 기존 계정에 로그인하고 새 **Public** 저장소 `sudam-design-estimator`를 만듭니다.
2. 저장소 `Add file → Upload files`에 이 폴더 **안의 파일과 assets 폴더**를 업로드합니다. (압축 ZIP 자체가 아니라 압축 해제한 내용 업로드)
3. 업로드 파일 목록 맨 위에 `index.html`이 보여야 합니다. `index.html`을 하위 폴더에 넣지 마세요.
4. `Commit changes`로 저장합니다.
5. 저장소 `Settings → Pages → Build and deployment`에서 `Source: Deploy from a branch`, `Branch: main`, `Folder: /(root)` 선택 후 저장합니다.
6. `https://사용자명.github.io/sudam-design-estimator/`에서 확인합니다. 게시까지 몇 분 걸릴 수 있습니다.

## 수정과 업데이트

- 디자인: `assets/css/styles.css`
- 기능 및 데이터: `assets/js/app.js`
- 내용과 페이지 구조: `index.html`
- 예시 이미지: `assets/images/` (동일 파일명으로 교체)

GitHub의 같은 저장소에 수정 파일을 업로드하고 커밋하면 사이트가 재배포됩니다.

## 주의 사항

- GitHub Pages는 서버 코드를 실행하지 않는 정적 사이트로, 이 계산기의 검색/계산/팝업/즐겨찾기에는 서버가 필요하지 않습니다.
- 무료 GitHub 계정은 GitHub Pages 배포 시 Public 저장소가 필요합니다. **사내 한정 공개가 아니라 누구나 접근 가능한 사이트**입니다.
- 기존 Netlify와 GitHub Pages는 서로 다른 사이트 주소이므로, 브라우저에 저장된 개인 즐겨찾기(localStorage)는 자동으로 이동하지 않습니다.
- 본 계산기는 초기 업무 산정용이며 확정 납기가 아닙니다.
- 별도의 GitHub 계정이나 저장소를 자동 생성하지 않습니다.
