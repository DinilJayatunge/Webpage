let timeSecond = 60;
const timeH = document.querySelector("h1");

displayTime(timeSecond);

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
    alert("Your time is up");
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Your time is up";
}
























let score = 0;
    let currentQuestion = 0;
    let questions = [{
        title: "Which country won the 2014 T20 world cup?",
        answers: ['Sri Lanka', 'England', 'India', 'West Indies'],
        correct: 0
      },
      {
        title: "Virat kohli played his 100th test match against which opponent??",
        answers: ['England', 'South Africa', 'Sri Lanka', 'New Zealand'],
        correct: 2
      },
      {
        title: "Which player hit the most sixes in the 2021 T20 World Cup?",
        answers: ['David Warner', 'Kane Williamson', 'Babar Azam ', 'Jos Buttler'],
        correct: 3
      },
      {
        title: "Which batter scored the most fifty-plus scores in the 2021 T20 world cup?",
        answers: ['David Warner', 'Babar Azam', 'Charith Asalanka', 'Mohommad Rizwan'],
        correct: 1
      },
      {
        title: "What was the highest team total in the 2021 T20 WC?",
        answers: ['210', '200', '194', '190'],
        correct: 0
      },
      {
        title: "Which player holds the record for the fastest fifty in a T20 WC final?",
        answers: ['Kane Williamson', 'Mitchell Marsh', 'Daryll Mitchell', 'Matthew Wade'],
        correct: 1
      },
      {
        title: "Who was the player of the tournament in 2021 T20WC?",
        answers: ['Adam Zampa', 'Charith Asalanka', 'Matthew Wade', 'David Warner'],
        correct: 3
      },
      {
        title: "Which of the following players do not have a T20 World cup hat-trick?",
        answers: ['Bret Lee', 'Lasith Malinga', 'Wanindu Hasaranga', 'Kagiso Rabada'],
        correct: 1
      },
      {
        title: "Who holds the record for the highest individual score in T20 World Cup history?",
        answers: ['Brendon Mccullum', 'Chris Gayle ', 'Alex Hales', 'Tamim Iqbal'],
        correct: 0
      },
      {
        title: "Which batsmen has the highest average in T20 World Cup history?",
        answers: ['Virat Kohli', 'Chris Gayle', 'Rohit Sharma', 'Jp Duminy'],
        correct: 0
      },
    ];

    


