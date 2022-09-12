"use strict";

window.onload = () => {

  let questionTotal = 9;


  let questionCounter = 0;

  let solicitation = `Please enter`;
  let questionArray = [
    `${solicitation} your birth year`,
    `${solicitation} your name`,
    `${solicitation} verb`,
    `${solicitation} noun`,
    `${solicitation} a word describing you`,
    `${solicitation} a type of bug`,
    `${solicitation} you favorite pet`,
    `${solicitation} your favorite place for holiday (beach, etc)`,
    `${solicitation} your type of book`,
    `${solicitation} a verb (past-tense)`,
  ];

  

  let userInputs = [];


  for (let i = questionTotal; i >= 0; i--) {
    

    

    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      ,)
    ); 
    
    while(userInputs == false){
      console.log("the user didn't write anything");
      userInputs.push(prompt(
          questionArray[questionCounter] + `... (${questionTotal} questions left)`
        ,)
      ); 
    } 
    console.log(userInputs);
    questionCounter++;
    questionTotal--;
    
   

  }
  

  
  let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. Word got out that the team had "debugged" the ${userInputs[2]}'. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>
    <h2>Word got out that the team had "${userInputs[4]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[5]} culture. ${userInputs[1]} readily admitted that ${userInputs[7]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[6]}'s favorite ${userInputs[3]}s. ${userInputs[1]} ${userInputs[4]} of natural causes on January 1, ${userInputs[5]}, at the age of ${userInputs[6]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[7]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[8]} in ${userInputs[9]}.</h2>
    <h2>And while this is the "${userInputs[0]}" use case of finding a ${userInputs[2]} ${userInputs[5]}, the original use of the word dates further back in ${userInputs[0]} to ${userInputs[1]}, who in an ${userInputs[3]} ${userInputs[6]} used the term "${userInputs[5]}" to refer to a technological ${userInputs[5]}. While he worked on the quadruplex ${userInputs[6]}, he said it needed a "${userInputs[5]} ${userInputs[2]} to ${userInputs[8]} properly."</h2>`;
  
    console.log(originalStory);
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  
  console.log(originalStory);
  document.write(originalStory);
};

