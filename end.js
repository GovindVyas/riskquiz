const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const subText = document.getElementById('subtext');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const score =  parseInt(mostRecentScore);
if (score < 20)  {finalScore.innerHTML = `<h1>${"Safe Zone"}</h1>`;subText.innerHTML = `Yay! You’re on the way to making your dream home the right way! <br>
Just make sure to always take a second opinion because you’re spending your lifesavings`;}
if (score >= 20 && score < 30)  {finalScore.innerHTML = `<h1>${"Scope for improvement"}</h1>`; subText.innerHTML = `You seem to be careful about preserving your lifetime investment but you can do better! While you have a floor plan and basic drawings, you still need to pay attention to what your architect tells you (and delivers). It’s always good to get a second opinion from experienced architects and don’t forget to ask them about structural, plumbing, and electrical drawings.`;}
if (score >= 30 && score < 40)  {finalScore.innerHTML = `<h1>${"Needs attention. Improvements needed"}</h1>`;subText.innerHTML = `You seem to know what you’re doing — but beware, there are things you miss out on. Don’t try to save peanuts and in turn make a loss of your entire life savings. Always take a second opinion before you make a big decision because you’re spending your lifesavings for a home, you’ll spend the rest of your life in.`;}
if (score >= 40 && score < 50)  {finalScore.innerHTML = `<h1>${"Be very careful!"}</h1>`;subText.innerHTML = `Be very careful! You seem to have trodded on the wrong path — you think you know what you’re doing, but there’s a lot more to building a home than what meets the eye. It’s advisable that you get in touch with an experienced architect and don’t worry about the money! You’re building your home — and it would stay with your family for at least 50 years, if not more. Saving a few thousands won’t make a difference in 50 years`;}
if (score >= 50)  {finalScore.innerHTML = `<h1>${"Hazard/Highest Risk"}</h1>`;subText.innerHTML = 'Beware! You’re about to make the biggest mistake of your life. Based on your answers, you need complete handholding before you start construction. Else, you’ll waste a lot of your hard earned money into a house you’ll never be able to live peacefully in (and it would be unsafe for your family too).';}

// const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HIGH_SCORES = 5;

// finalScore.innerText = mostRecentScore;

// username.addEventListener('keyup', () => {
//     saveScoreBtn.disabled = !username.value;
// });

// saveHighScore = (e) => {
//     e.preventDefault();

//     const score = {
//         score: mostRecentScore,
//         name: username.value,
//     };
//     highScores.push(score);
//     highScores.sort((a, b) => b.score - a.score);
//     highScores.splice(5);

//     localStorage.setItem('highScores', JSON.stringify(highScores));
//     window.location.assign('/');
// };
