// Write your code below
const bobsFollowers = ['Jack', 'Matt', 'David', 'Janet'];
const tinasFollowers = ['Leah', 'Matt', 'David'];
const mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++)
     if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
  }
};
