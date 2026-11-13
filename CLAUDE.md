# 이 저장소에서 작업할 때 지킬 것

조직 mhyoo-games의 첫 화면 `https://mhyoo-games.github.io/` — 심심풀이 웹 게임 모음. 사용자는 한국어로 대화합니다.

- 게임은 각자 저장소(같은 조직)의 GitHub Pages: `/toy_racing/`, `/youtujam/`, `/LeftAlonePuppy/`, `/dalmaru/`, `/haesol/`, `/flashgames/`. 이 저장소는 목록 화면만.
- 목록은 `games.json` (이름·소개 ko/ja/en, 그림 `images/`). 소개 글은 이력서(minhyuk94.github.io `src/data/resume.json`의 `games`)와 같은 뜻으로 맞춘다. 게임을 더하면 여기와 이력서 둘 다.
- 화면·README에 실명을 넣지 않는다. 만든 사람은 "심심풀이"로 적는다 (사용자 요청).
- 다른 회사·게임 이름을 넣지 않는다. 소스 코드·저장소 링크도 넣지 않는다.
- 화면은 `template.html` 하나 (갈무리 글꼴, OFL). `scripts/build.mjs`가 `dist/`를 만들고, CI(`pages.yml`)가 `scripts/check.test.mjs` → 빌드 → Pages 배포.
- 언어: `?lang=ko|ja|en` → 고른 언어(localStorage `mg_lang`) → 브라우저 언어.
