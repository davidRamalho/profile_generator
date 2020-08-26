const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable \:\)\?', (answer) => {
  console.log(`Nice name: ${answer}`);
  rl.question('What\'s an activity you like doing\?', (answer2) => {
    console.log('Don\'t we all!');
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)\?', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal\?', (answer5) => {
          rl.question('Which sport is your absolute favourite?\?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\?', (answer7) => {
              console.log(`TY for answering all questions! Here is your profile: \n ${answer} loves to ${answer2} 
              while listening to ${answer3}. ${answer} favourite's meal is ${answer4} and during ${answer4} ${answer}'s 
              favourite's thing to eat is ${answer5}. ${answer} loves to play ${answer6} and ${answer}'s superpower is ${answer7}. 
              WOW ${answer} is very intereting!!!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});






rl.question()

// Devani loves listening to Ludovico Einaudi while coding, 
// devouring Yak Momos for brunch, prefers Tennis over any other sport, 
// and is amazing at dropping mad puns at inopportune times.