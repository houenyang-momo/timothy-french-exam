import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const dataMatch = html.match(/<script type="application\/json" id="exam-data">([\s\S]*?)<\/script>/);
assert.ok(dataMatch, "exam-data JSON script is present");

const appScript = [...html.matchAll(/<script(?![^>]*application\/json)[^>]*>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .join("\n");

assert.match(appScript, /acceptedPatterns/, "fill answer evaluator reads acceptedPatterns");

const examData = JSON.parse(dataMatch[1]);
const allQuestions = examData.flatMap((section) => section.questions);

function findQuestion(id) {
  const question = allQuestions.find((item) => item.id === id);
  assert.ok(question, `question ${id} exists`);
  return question;
}

function normalizeAnswer(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘'`]/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function fillAnswerMatches(question, value) {
  const normalized = normalizeAnswer(value);
  const accepted = Array.isArray(question.accepted) ? question.accepted : [];
  const acceptedPatterns = Array.isArray(question.acceptedPatterns) ? question.acceptedPatterns : [];

  return accepted.some((answer) => normalizeAnswer(answer) === normalized)
    || acceptedPatterns.some((pattern) => new RegExp(pattern, "u").test(normalized));
}

for (const question of allQuestions.filter((item) => item.type === "fill")) {
  for (const accepted of question.accepted) {
    assert.equal(fillAnswerMatches(question, accepted), true, `${question.id} accepts canonical answer ${accepted}`);
  }
}

assert.equal(fillAnswerMatches(findQuestion("cc-extra-ajout-lieu"), "dans mon cartable"), true);
assert.equal(fillAnswerMatches(findQuestion("cc-extra-ajout-lieu"), "à Paris"), true);
assert.equal(fillAnswerMatches(findQuestion("cc-extra-ajout-lieu"), "à cause de la pluie"), false);

assert.equal(fillAnswerMatches(findQuestion("cdn-extra-sans"), "de montagne"), true);
assert.equal(fillAnswerMatches(findQuestion("cdn-extra-sans"), "avec une paille"), true);
assert.equal(fillAnswerMatches(findQuestion("cdn-extra-sans"), "rouge"), false);

assert.equal(fillAnswerMatches(findQuestion("cod-extra-coi-question"), "De quoi il parle ?"), true);

console.log("exam logic checks passed");
