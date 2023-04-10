'use strict';

const candidates = {};

let numberOf = parseInt(prompt('How many participants?'));

for (let i = 0; i < numberOf; i++) {
  let name = prompt('What is the name of candidate no.' + (i + 1) + '?');
  candidates[name] = {
    name: name,
    votes: 0,
  };
}

let voters = parseInt(prompt('How many voters?'));
for (let i = 0; i < voters; i++) {
  let vote = prompt('Voter ' + (i + 1) + ' votes for a candidate (enter the name of the candidate)');
  if (candidates[vote]) {
    candidates[vote].votes += 1;
  } else {
    console.log(`Invalid vote: ${vote}`);
  }
}

const sortedCandidates = Object.values(candidates).sort((a, b) => {
  return b.votes - a.votes;
});

if (sortedCandidates[0].votes === sortedCandidates[1].votes) {
  console.log(`There is a tie between ${sortedCandidates[0].name} and ${sortedCandidates[1].name}.`);
} else {
  console.log(`The winner is ${sortedCandidates[0].name} with ${sortedCandidates[0].votes} votes.`);
}

for (let i = 0; i < sortedCandidates.length; i++) {
  console.log(`${sortedCandidates[i].name}: ${sortedCandidates[i].votes} votes`);
}