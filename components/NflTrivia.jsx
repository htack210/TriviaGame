const nflTriviaData = [
  {
    id: 1,
    category: "Teams",
    question:
      "Who was picked first overall by the St. Louis Rams in the 2010 NFL Draft?",
    A: "Sam Bradford",
    B: "Mat Stafford",
    C: "Jimmy Garoppolo",
    ans: "A.  Sam Bradford",
  },
  {
    id: 2,
    category: "Teams",
    question: "Which was the first team to win the NFL Super Bowl?",
    A: "Chiefs",
    B: "Green Bay",
    C: "Giants",
    ans: "B.  Green Bay",
  },
  {
    id: 3,
    category: "Teams",
    question: "The NFL team based in Kansas City has which nickname?",
    A: "Commanders",
    B: "Chiefs",
    C: "Jaguars",
    ans: "B.  Chiefs",
  },
  {
    id: 4,
    category: "Teams",
    question: "In which city are the 'Bengals' based?",
    A: "Indianapolis",
    B: "Phoenix",
    C: "Cincinatti",
    ans: "C.  Cincinatti",
  },
  {
    id: 5,
    category: "Teams",
    question: "The Chargers are the NFL team based in which city?",
    A: "San Diego",
    B: "Los Angeles",
    C: "Denver",
    ans: "B.  Los Angeles",
  },
  {
    id: 6,
    category: "Teams",
    question: "In which city are the NFL Ravens based?",
    A: "Foxboro",
    B: "New York",
    C: "Baltimore",
    ans: "C.  Baltimore",
  },
  {
    id: 7,
    category: "Teams",
    question: "The NFL Team known as the Bears are located in which US City?",
    A: "Chicago",
    B: "Pittsburgh",
    C: "Boston",
    ans: "A.  Chicago",
  },
  {
    id: 8,
    category: "Teams",
    question: "Which  of these teams has the most Super Bowls?",
    A: "Green Bay Packers",
    B: "Patriots",
    C: "Philadelphia Eagles",
    ans: "B.  Patriots",
  },
  {
    id: 9,
    category: "Teams",
    question: "The Browns are the NFL team in which city?",
    A: "Cleveland",
    B: "Cincinati",
    C: "Denver",
    ans: "A.  Cleveland",
  },
  {
    id: 10,
    category: "Teams",
    question:
      "Which team allowed the most passing yards in the 2013 NFL season?",
    A: "Pittsburgh Steelers",
    B: "Patriots",
    C: "Philadelphia Eagles",
    ans: "C.  Philadelphia Eagles",
  },
  {
    id: 11,
    category: "Teams",
    question: "In which city are the 'Texans' based?",
    A: "Dallas",
    B: "Houston",
    C: "Ft. Worth",
    ans: "B.  Houston",
  },
  {
    id: 12,
    category: "Teams",
    question: "What city are the Cowboys from?",
    A: "Dallas",
    B: "Houston",
    C: "Ft. Worth",
    ans: "A.  Dallas",
  },
  {
    id: 13,
    category: "Teams",
    question: "In which state are the 'Cardinals' based?",
    A: "Arizona",
    B: "Scottsdale",
    C: "Phoenix",
    ans: "A.  Arizona",
  },
  {
    id: 14,
    category: "Teams",
    question: "In which city are the 'Broncos' based?",
    A: "Denver",
    B: "Boulder",
    C: "Aspen",
    ans: "A.  Denver",
  },
  {
    id: 15,
    category: "Teams",
    question: "Which team scored the most points in the 2013 NFL season?",
    A: "Chargers",
    B: "Broncos",
    C: "Eagles",
    ans: "B.  Broncos",
  },
  {
    id: 16,
    category: "Teams",
    question: "In which city do the Bills play?",
    A: "Buffalo",
    B: "New York",
    C: "Boston",
    ans: "A.  Buffalo",
  },
  {
    id: 17,
    category: "Teams",
    question: "The Dolphins can be found as the NFL team of which city?",
    A: "Tampa Bay",
    B: "Jacksonville",
    C: "Miami",
    ans: "C.  Miami",
  },
  {
    id: 18,
    category: "Teams",
    question: "In which city are the 'Panthers' based?",
    A: "Carolina",
    B: "Charlotte",
    C: "Raleigh",
    ans: "B.  Charlotte",
  },
  {
    id: 19,
    category: "Teams",
    question: "In which city do the Patriots play?",
    A: "Boston",
    B: "Providence",
    C: "Foxboro",
    ans: "C.  Foxboro",
  },
  {
    id: 20,
    category: "Teams",
    question:
      "Which is the only NFL team that plays their home games in New York state?",
    A: "Buffalo Bills",
    B: "Giants",
    C: "Jets",
    ans: "A.  Buffalo Bills",
  },
  {
    id: 21,
    category: "Teams",
    question: "In which city do the Giants allege they are based?",
    A: "New York",
    B: "Newark",
    C: "Delaware",
    ans: "A.  New York",
  },
  {
    id: 22,
    category: "Teams",
    question: "In which city are the Raiders based?",
    A: "Los Angels",
    B: "Oakland",
    C: "Las Vegas",
    ans: "C.  Las Vegas",
  },
  {
    id: 23,
    category: "Teams",
    question: "In which city are the the Seahawks based?",
    A: "Seattle",
    B: "Spokane",
    C: "Olympia",
    ans: "A.  Seattle",
  },
  {
    id: 24,
    category: "Teams",
    question: "The Packers compete in the NFL representing which city?",
    A: "Madison",
    B: "Green Bay",
    C: "Indianapolis",
    ans: "B.  Green Bay",
  },
  {
    id: 25,
    category: "Teams",
    question: "Which city do the '49ers' represent?",
    A: "San Francisco",
    B: "Los Angels",
    C: "Santa Clara",
    ans: "A.  San Francisco",
  },
  {
    id: 26,
    category: "Teams",
    question: "In which city are the 'Buccaneers' based?",
    A: "Miami",
    B: "Nashville",
    C: "Tampa Bay",
    ans: "C.  Tampa Bay",
  },
  {
    id: 27,
    category: "Teams",
    question: "In which city are the 'Commanders' based?",
    A: "Washington",
    B: "Boston",
    C: "Minneapolis",
    ans: "A.  Washington",
  },
  {
    id: 28,
    category: "Players & Coaches",
    question:
      "Which NFL referee is known for wearing tight shirts and flexing for the cameras while making on-field calls?",
    A: "Ed Hochuli",
    B: "Brett Favre",
    C: "Antonio Brown",
    ans: "A.  Ed Hochuli",
  },
  {
    id: 29,
    category: "Players & Coaches",
    question:
      "Who won his third National Football League Coach of the Year Award in 2010?",
    A: "Anquan Boldin",
    B: "Bill Belichick",
    C: "Carson Wentz",
    ans: "B.  Bill Belichick",
  },
  {
    id: 30,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Kansas City Chiefs from the San Francisco 49ers in February 2013?",
    A: "Jim Thorpe",
    B: "Drew Bledsoe",
    C: "Alex Smith",
    ans: "C.  Alex Smith",
  },
  {
    id: 31,
    category: "Players & Coaches",
    question:
      "Which NFL quarterback is known by the nickname 'The Gunslinger'?",
    A: "Brett Favre",
    B: "Russell Wilson",
    C: "Le'Veon Bell",
    ans: "A.  Brett Favre",
  },
  {
    id: 32,
    category: "Players & Coaches",
    question: "Who won PFWA NFL Executive of the Year for the 2013 NFL season?",
    A: "John Dorsey",
    B: "Aaron Rodgers",
    C: "Todd Gurley",
    ans: "A.  John Dorsey",
  },
  {
    id: 33,
    category: "Players & Coaches",
    question: "Who won the 2012 NFL MVP Award?",
    A: "Greg Jennings",
    B: "Rob Gronkowski",
    C: "Adrian Peterson",
    ans: "C.  Adrian Peterson",
  },
  {
    id: 34,
    category: "Players & Coaches",
    question:
      "In NFL which wide receiver made 101 catches in his Arizona Cardinals rookie season?",
    A: "Eric Fisher",
    B: "Anquan Boldin",
    C: "Von Miller",
    ans: "B.  Anquan Boldin",
  },
  {
    id: 35,
    category: "Players & Coaches",
    question: "Which famous NFL player is Native American?",
    A: "Russell Wilson",
    B: "Jim Thorpe",
    C: "Luke Kuechly",
    ans: "B.  Jim Thorpe",
  },
  {
    id: 36,
    category: "Players & Coaches",
    question: "Who was selected first in the 2012 NFL Draft?",
    A: "David Carr",
    B: "Joe Buck",
    C: "Andrew Luck",
    ans: "C.  Andrew Luck",
  },
  {
    id: 37,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Minnesota Vikings from the Green Bay Packers in 2013?",
    A: "Lenny Moore",
    B: "Greg Jennings",
    C: "Rob Riggle",
    ans: "A.  Lenny Moore",
  },
  {
    id: 38,
    category: "Players & Coaches",
    question:
      "Which Houston Oilers player was nicknamed 'The Human Bowling Ball'?",
    A: "Percy Harvin",
    B: "Charlie Tolar",
    C: "Jalen Ramsey",
    ans: "A.  Percy Harvin",
  },
  {
    id: 39,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the San Francisco 49ers from the Baltimore Ravens in March 2013?",
    A: "Michael Vick",
    B: "Anquan Boldin",
    C: "Ben Roethlisberger",
    ans: "C.  Ben Roethlisberger",
  },
  {
    id: 40,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Denver Broncos from the New England Patriots in 2013?",
    A: "Percy Harvin",
    B: "Wes Welker",
    C: "Bobby Wagner",
    ans: "B.  Wes Welker",
  },
  {
    id: 41,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Tampa Bay Buccaneers from the San Francisco 49ers in 2013?",
    A: "Dashon Goldson",
    B: "Travis Kelce",
    C: "Cameron Jordan",
    ans: "A.  Dashon Goldson",
  },
  {
    id: 42,
    category: "Players & Coaches",
    question: "Who was selected first in the 2013 NFL Draft?",
    A: "Philip Rivers",
    B: "Eric Fisher",
    C: "Cam Newton",
    ans: "B.  Eric Fisher",
  },
  {
    id: 43,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Miami Dolphins from the Pittsburgh Steelers in 2013?",
    A: "Mike Wallace",
    B: "Aaron Donald",
    C: "Larry Fitzgerald",
    ans: "A.  Mike Wallace",
  },
  {
    id: 44,
    category: "Players & Coaches",
    question: "Who won the 2012 AP NFL Coach of the Year Award?",
    A: "Peyton Manning",
    B: "Bruce Arians",
    C: "Chandlre Jones",
    ans: "B.  Bruce Arians",
  },
  {
    id: 45,
    category: "Players & Coaches",
    question:
      "In the 2013 season which player led the NFL in terms of total licensed product sales?",
    A: "Marcus Welby",
    B: "Christian MCCaffrey",
    C: "Russell Wilson",
    ans: "C.  Russell Wilson",
  },
  {
    id: 46,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Detroit Lions from the Miami Dolphins in 2013?",
    A: "Reggie Bush",
    B: "George Kittle",
    C: "Matt Ryan",
    ans: "A.  Reggie Bush",
  },
  {
    id: 47,
    category: "Players & Coaches",
    question: "Who was selected first in the 2002 NFL Draft?",
    A: "Kurt Warner",
    B: "David Carr",
    C: "LeSean McCoy",
    ans: "B.  David Carr",
  },
  {
    id: 48,
    category: "Players & Coaches",
    question:
      "In the 1960s who scored a record touchdown in 18 consecutive NFL games?",
    A: "Tom Brady",
    B: "Lenny Moore",
    C: "Matt Stafford",
    ans: "B.  Lenny Moore",
  },
  {
    id: 49,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Seattle Seahawks from the Minnesota Vikings in March 2013?",
    A: "Patrick Mahomes",
    B: "Percy Harvin",
    C: "Matt Ryan",
    ans: "C.  Matt Ryan",
  },
  {
    id: 50,
    category: "Players & Coaches",
    question: "Who was selected first in the 2001 NFL Draft?",
    A: "Tom Landry",
    B: "Michael Vick",
    C: "Jadeveon Clowney",
    ans: "C.  Jadeveon Clowney",
  },
  {
    id: 51,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Indianapolis Colts from the Cleveland Browns in September 2013?",
    A: "Josh Allen",
    B: "Trent Richardson",
    C: "Kareem Hunt",
    ans: "C.  Kareem Hunt",
  },
  {
    id: 52,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Miami Dolphins from the New England Patriots in 2013?",
    A: "Wes Welker",
    B: "DeAndre Hopkins",
    C: "Jared Goff",
    ans: "A.  Wes Welker",
  },
  {
    id: 53,
    category: "Players & Coaches",
    question: "Which team had the first pick in the 2013 NFL Draft?",
    A: "Miami Dolphins",
    B: "Kansas City Chiefs",
    C: "Denver Broncos",
    ans: "B.  Kansas City Chiefs",
  },
  {
    id: 54,
    category: "Players & Coaches",
    question:
      "Which NFL player joined the Tampa Bay Buccaneers from the New York Jets in April 2013?",
    A: "Darrelle Revis",
    B: "Stephon Gilmore",
    C: "Tyron Smith",
    ans: "A.  Darrelle Revis",
  },
  {
    id: 55,
    category: "Players & Coaches",
    question: "Who won AP Comeback Player of the Year for the 2013 NFL season?",
    A: "Tyreek Hill",
    B: "Julio Jones",
    C: "Philip Rivers",
    ans: "C.  Philip Rivers",
  },
  {
    id: 56,
    category: "Players & Coaches",
    question: "Who was selected first in the 2007 NFL Draft?",
    A: "Joe Burrow",
    B: "Bobby Wagner",
    C: "JaMarcus Russell",
    ans: "C.  JaMarcus Russell",
  },
  {
    id: 57,
    category: "Players & Coaches",
    question: "Who was selected first in the 2004 NFL Draft?",
    A: "Nick Bosa",
    B: "Drew Brees",
    C: "Eli Manning",
    ans: "C.  Eli Manning",
  },
  {
    id: 58,
    category: "Players & Coaches",
    question: "Who was selected first in the 1997 NFL Draft?",
    A: "Jalen Hurts",
    B: "Orlando Pace",
    C: "Earl Thomas",
    ans: "B.  Orlando Price",
  },
  {
    id: 59,
    category: "Players & Coaches",
    question: "Who was named MVP for the 2013 NFL season?",
    A: "Justin Jefferson",
    B: "Peyton Manning",
    C: "Davante Adams",
    ans: "B.  Peyton Manning",
  },
];
export default nflTriviaData;
