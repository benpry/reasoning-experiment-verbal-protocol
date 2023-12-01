const world = [
  "If it is Wednesday, then Alice does not go to work",
  "If Alice does not go to work, then Alice does not attend a meeting in the morning",
  "If Alice does not attend a meeting in the morning, then Alice does not talk to Bob",
  "If Alice does not talk to Bob, then Bob takes a coffee break",
  "If Bob takes a coffee break, then Bob has lunch late",
];

const all_stimuli = [
  {
    observed: "Bob takes a coffee break",
    query: "Does Bob have lunch late?",
    correct_answer: "true",
    distance: 1,
  },
  {
    observed: "It is Wednesday",
    query: "Does Alice go to work?",
    correct_answer: "false",
    distance: 1,
  },
  {
    observed: "It is not Wednesday",
    query: "Does Alice go to work?",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "Alice attends a meeting in the morning",
    query: "Does Alice talk to Bob?",
    correct_answer: "unknown",
    distance: 1,
  },
  {
    observed: "Alice does not attend a meeting in the morning",
    query: "Does Bob take a coffee break?",
    correct_answer: "true",
    distance: 2,
  },
  {
    observed: "It is Wednesday",
    query: "Does Alice attend a meeting in the morning?",
    correct_answer: "false",
    distance: 2,
  },
  {
    observed: "Alice talks to Bob",
    query: "Does Bob have lunch late?",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is not Wednesday",
    query: "Does Alice attend a meeting in the morning?",
    correct_answer: "unknown",
    distance: 2,
  },
  {
    observed: "It is Wednesday",
    query: "Does Alice talk to Bob?",
    correct_answer: "false",
    distance: 3,
  },
  {
    observed: "Alice does not go to work",
    query: "Does Bob take a coffee break?",
    correct_answer: "true",
    distance: 3,
  },
  {
    observed: "Alice goes to work",
    query: "Does Bob take a coffee break?",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "Alice attends a meeting in the morning",
    query: "Does Bob have lunch late?",
    correct_answer: "unknown",
    distance: 3,
  },
  {
    observed: "Alice does not go to work",
    query: "Does Bob have lunch late?",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "It is Wednesday",
    query: "Does Bob take a coffee break?",
    correct_answer: "true",
    distance: 4,
  },
  {
    observed: "Alice goes to work",
    query: "Does Bob have lunch late?",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is not Wednesday",
    query: "Does Bob take a coffee break?",
    correct_answer: "unknown",
    distance: 4,
  },
  {
    observed: "It is Wednesday",
    query: "Does Bob have lunch late?",
    correct_answer: "true",
    distance: 5,
  },
  {
    observed: "It is not Wednesday",
    query: "Does Bob have lunch late?",
    correct_answer: "unknown",
    distance: 5,
  },
];

const practiceStimulus = {
  world: ["If A then B.", "If B then C."],
  observed: "A is true",
  query: "Is C true?",
  correct_answer: "true",
};
