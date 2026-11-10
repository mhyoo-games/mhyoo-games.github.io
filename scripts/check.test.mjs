// 게임 목록이 맞는지: 이름·소개가 세 언어로 다 있고, 그림이 있고, 다른 게임 이름이 없다
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const games = JSON.parse(readFileSync('games.json', 'utf8'));
test('게임마다 세 언어 이름·소개, 그림, 주소', () => {
  assert.ok(games.length >= 5);
  const paths = new Set();
  for (const g of games) {
    for (const l of ['ko', 'ja', 'en']) { assert.ok(g.name[l], `${g.path} 이름 ${l}`); assert.ok(g.summary[l], `${g.path} 소개 ${l}`); }
    assert.ok(existsSync(g.image), g.image);
    assert.match(g.path, /^[A-Za-z0-9_-]+$/);
    assert.ok(!paths.has(g.path)); paths.add(g.path);
  }
});
