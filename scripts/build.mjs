// dist/ 만들기: template.html 에 games.json 을 넣고, 그림·글꼴 복사
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
const games = JSON.parse(readFileSync('games.json', 'utf8'));
rmSync('dist', { recursive: true, force: true }); mkdirSync('dist');
writeFileSync('dist/index.html', readFileSync('template.html', 'utf8').replace('/*GAMES*/[]', JSON.stringify(games)));
cpSync('images', 'dist/images', { recursive: true }); cpSync('fonts', 'dist/fonts', { recursive: true });
writeFileSync('dist/.nojekyll', '');
console.log(`dist 준비됨 (게임 ${games.length}개)`);
