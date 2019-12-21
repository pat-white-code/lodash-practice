const assert = require('assert');
const range = require('lodash/range');
const sampleSize = require('lodash/sampleSize');
const chunk = require('lodash/chunk');
const reverse = require('lodash/reverse');
const without = require('lodash/without');
const shuffle = require('lodash/shuffle');

const data = [
	{
		"First Name": "Jameson",
		"Last Name": "Hughes",
		"City": "Springfield",
		"Id": "306",
		"DOB": "05/06/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Dieter",
		"Last Name": "Mccarthy",
		"City": "Leeds",
		"Id": "722",
		"DOB": "01/31/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Forrest",
		"Last Name": "Mckinney",
		"City": "Blois",
		"Id": "813",
		"DOB": "09/09/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Erasmus",
		"Last Name": "Snider",
		"City": "Saint-Nicolas",
		"Id": "683",
		"DOB": "12/13/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Bevis",
		"Last Name": "Steele",
		"City": "Calco",
		"Id": "191",
		"DOB": "07/16/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Griffith",
		"Last Name": "Odom",
		"City": "Tver",
		"Id": "129",
		"DOB": "08/19/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Guy",
		"Last Name": "Horn",
		"City": "Tomohon",
		"Id": "214",
		"DOB": "06/28/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Garrett",
		"Last Name": "Turner",
		"City": "TrognŽe",
		"Id": "688",
		"DOB": "07/25/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Caldwell",
		"Last Name": "Gilliam",
		"City": "Workington",
		"Id": "693",
		"DOB": "05/28/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Vincent",
		"Last Name": "Haynes",
		"City": "Reutov",
		"Id": "772",
		"DOB": "01/31/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Byron",
		"Last Name": "Acevedo",
		"City": "Hindeloopen",
		"Id": "907",
		"DOB": "02/26/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Beck",
		"Last Name": "Sheppard",
		"City": "Frankston",
		"Id": "805",
		"DOB": "04/04/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Cadman",
		"Last Name": "Allen",
		"City": "Nordhorn",
		"Id": "648",
		"DOB": "01/27/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Mark",
		"Last Name": "Sellers",
		"City": "Strijtem",
		"Id": "807",
		"DOB": "05/20/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Macon",
		"Last Name": "Cohen",
		"City": "Wokingham",
		"Id": "333",
		"DOB": "03/20/19",
		"isEmployed": "True"
	},
	{
		"First Name": "August",
		"Last Name": "Mccarty",
		"City": "Gap",
		"Id": "984",
		"DOB": "01/03/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Arsenio",
		"Last Name": "Calderon",
		"City": "Barra do Corda",
		"Id": "818",
		"DOB": "03/12/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Travis",
		"Last Name": "Guzman",
		"City": "Bhilwara",
		"Id": "874",
		"DOB": "10/02/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Adam",
		"Last Name": "Serrano",
		"City": "Pugwash",
		"Id": "189",
		"DOB": "11/20/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Oscar",
		"Last Name": "Finley",
		"City": "Wetteren",
		"Id": "140",
		"DOB": "10/05/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Preston",
		"Last Name": "Bright",
		"City": "Antártica",
		"Id": "312",
		"DOB": "01/15/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Vincent",
		"Last Name": "Pratt",
		"City": "Nizip",
		"Id": "302",
		"DOB": "01/25/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Byron",
		"Last Name": "Williams",
		"City": "Millet",
		"Id": "978",
		"DOB": "12/03/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Hedley",
		"Last Name": "Briggs",
		"City": "Massemen",
		"Id": "738",
		"DOB": "01/06/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Bruce",
		"Last Name": "Lara",
		"City": "Teodoro Schmidt",
		"Id": "258",
		"DOB": "09/17/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Kenneth",
		"Last Name": "Kim",
		"City": "100 Mile House",
		"Id": "153",
		"DOB": "10/16/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Noble",
		"Last Name": "Dale",
		"City": "Neusiedl am See",
		"Id": "485",
		"DOB": "09/27/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Charles",
		"Last Name": "Carey",
		"City": "Tongyeong",
		"Id": "580",
		"DOB": "08/15/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Fitzgerald",
		"Last Name": "Cash",
		"City": "Pallavaram",
		"Id": "544",
		"DOB": "04/10/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Edan",
		"Last Name": "Whitley",
		"City": "Barmouth",
		"Id": "273",
		"DOB": "09/30/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Gregory",
		"Last Name": "Best",
		"City": "Villers-la-Bonne-Eau",
		"Id": "756",
		"DOB": "05/15/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Warren",
		"Last Name": "Cruz",
		"City": "Wallasey",
		"Id": "740",
		"DOB": "11/30/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Forrest",
		"Last Name": "Mercer",
		"City": "Rosenheim",
		"Id": "884",
		"DOB": "07/04/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Linus",
		"Last Name": "Cameron",
		"City": "Meetkerke",
		"Id": "570",
		"DOB": "04/22/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Wesley",
		"Last Name": "Higgins",
		"City": "Girona",
		"Id": "424",
		"DOB": "12/31/18",
		"isEmployed": "False"
	},
	{
		"First Name": "Roth",
		"Last Name": "Phelps",
		"City": "Mandi Burewala",
		"Id": "965",
		"DOB": "12/13/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Hashim",
		"Last Name": "Mcknight",
		"City": "San Vicente de Cañete",
		"Id": "588",
		"DOB": "01/09/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Raja",
		"Last Name": "Parks",
		"City": "Develi",
		"Id": "527",
		"DOB": "07/11/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Blake",
		"Last Name": "Brady",
		"City": "Greymouth",
		"Id": "654",
		"DOB": "07/12/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Xavier",
		"Last Name": "Harper",
		"City": "Mellet",
		"Id": "281",
		"DOB": "12/19/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Chaney",
		"Last Name": "Booth",
		"City": "Meldert",
		"Id": "300",
		"DOB": "01/25/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Donovan",
		"Last Name": "Pennington",
		"City": "Gambolò",
		"Id": "561",
		"DOB": "10/19/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Jackson",
		"Last Name": "Olson",
		"City": "Dolceacqua",
		"Id": "975",
		"DOB": "07/25/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Gareth",
		"Last Name": "Hahn",
		"City": "Lautaro",
		"Id": "838",
		"DOB": "01/24/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Arthur",
		"Last Name": "Horn",
		"City": "Oppido Mamertina",
		"Id": "369",
		"DOB": "03/26/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Mason",
		"Last Name": "Cooper",
		"City": "Monfumo",
		"Id": "309",
		"DOB": "03/20/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Castor",
		"Last Name": "Dodson",
		"City": "Oostkamp",
		"Id": "822",
		"DOB": "07/28/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Gregory",
		"Last Name": "Bray",
		"City": "Betim",
		"Id": "188",
		"DOB": "11/11/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Rafael",
		"Last Name": "Lewis",
		"City": "San Pablo",
		"Id": "184",
		"DOB": "01/29/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Yoshio",
		"Last Name": "Bush",
		"City": "Rocca di Cambio",
		"Id": "901",
		"DOB": "07/23/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Lester",
		"Last Name": "Hickman",
		"City": "Fogo",
		"Id": "218",
		"DOB": "06/17/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Hammett",
		"Last Name": "Dale",
		"City": "Ravensburg",
		"Id": "385",
		"DOB": "09/25/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Geoffrey",
		"Last Name": "Reed",
		"City": "Le Havre",
		"Id": "203",
		"DOB": "04/21/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Jerry",
		"Last Name": "Cruz",
		"City": "Luckenwalde",
		"Id": "196",
		"DOB": "08/15/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Stephen",
		"Last Name": "Glenn",
		"City": "Habra",
		"Id": "123",
		"DOB": "09/24/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Uriel",
		"Last Name": "Cummings",
		"City": "Ketchikan",
		"Id": "350",
		"DOB": "03/10/20",
		"isEmployed": "True"
	},
	{
		"First Name": "George",
		"Last Name": "Bailey",
		"City": "Viddalba",
		"Id": "239",
		"DOB": "01/22/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Jin",
		"Last Name": "Chase",
		"City": "Mansfield-et-Pontefract",
		"Id": "498",
		"DOB": "12/26/18",
		"isEmployed": "False"
	},
	{
		"First Name": "Hunter",
		"Last Name": "Juarez",
		"City": "Freirina",
		"Id": "820",
		"DOB": "01/19/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Jamal",
		"Last Name": "Hanson",
		"City": "Borås",
		"Id": "673",
		"DOB": "05/22/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Armando",
		"Last Name": "York",
		"City": "Madiun",
		"Id": "660",
		"DOB": "05/23/20",
		"isEmployed": "True"
	},
	{
		"First Name": "David",
		"Last Name": "Blankenship",
		"City": "Perth",
		"Id": "576",
		"DOB": "07/19/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Beck",
		"Last Name": "Weeks",
		"City": "Affligem",
		"Id": "413",
		"DOB": "06/04/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Guy",
		"Last Name": "Carrillo",
		"City": "Dipignano",
		"Id": "545",
		"DOB": "08/17/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Hamilton",
		"Last Name": "Cash",
		"City": "Uitbergen",
		"Id": "146",
		"DOB": "01/27/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Xander",
		"Last Name": "Pruitt",
		"City": "Chepén",
		"Id": "727",
		"DOB": "11/26/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Grady",
		"Last Name": "Herring",
		"City": "Fürth",
		"Id": "511",
		"DOB": "10/06/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Oleg",
		"Last Name": "Ellison",
		"City": "Tapachula",
		"Id": "623",
		"DOB": "09/15/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Dylan",
		"Last Name": "Sanford",
		"City": "Rum",
		"Id": "255",
		"DOB": "08/30/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Alan",
		"Last Name": "Casey",
		"City": "Ciudad Apodaca",
		"Id": "165",
		"DOB": "03/30/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Lamar",
		"Last Name": "Wolf",
		"City": "Castiglione di Garfagnana",
		"Id": "794",
		"DOB": "06/16/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Tyrone",
		"Last Name": "Savage",
		"City": "Holman",
		"Id": "444",
		"DOB": "01/24/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Mannix",
		"Last Name": "Clemons",
		"City": "Gifhorn",
		"Id": "616",
		"DOB": "03/11/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Carl",
		"Last Name": "Pruitt",
		"City": "Shawville",
		"Id": "770",
		"DOB": "11/29/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Hiram",
		"Last Name": "Colon",
		"City": "Ficarolo",
		"Id": "282",
		"DOB": "08/16/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Brian",
		"Last Name": "Spence",
		"City": "Uyo",
		"Id": "874",
		"DOB": "11/02/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Herman",
		"Last Name": "Richard",
		"City": "Wekweti",
		"Id": "968",
		"DOB": "10/19/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Caesar",
		"Last Name": "Munoz",
		"City": "Oudenburg",
		"Id": "994",
		"DOB": "01/12/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Zeus",
		"Last Name": "Baxter",
		"City": "Pugwash",
		"Id": "952",
		"DOB": "01/26/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Owen",
		"Last Name": "Bush",
		"City": "Freire",
		"Id": "152",
		"DOB": "11/30/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Magee",
		"Last Name": "Herrera",
		"City": "Darwin",
		"Id": "895",
		"DOB": "08/14/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Amir",
		"Last Name": "Powers",
		"City": "Pinto",
		"Id": "170",
		"DOB": "12/16/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Forrest",
		"Last Name": "William",
		"City": "Armstrong",
		"Id": "427",
		"DOB": "05/30/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Kirk",
		"Last Name": "David",
		"City": "Ozherelye",
		"Id": "988",
		"DOB": "01/30/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Samson",
		"Last Name": "Mosley",
		"City": "Mont-Sainte-Genevive",
		"Id": "256",
		"DOB": "06/29/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Jarrod",
		"Last Name": "Greer",
		"City": "Limburg a.d. Lahn",
		"Id": "440",
		"DOB": "06/12/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Garrett",
		"Last Name": "Nixon",
		"City": "Stourbridge",
		"Id": "339",
		"DOB": "10/22/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Orlando",
		"Last Name": "Dawson",
		"City": "Sujawal",
		"Id": "385",
		"DOB": "11/21/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Francis",
		"Last Name": "Bryan",
		"City": "Avise",
		"Id": "827",
		"DOB": "06/18/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Clark",
		"Last Name": "Jordan",
		"City": "Bitung",
		"Id": "159",
		"DOB": "11/28/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Dean",
		"Last Name": "Rosa",
		"City": "Yegoryevsk",
		"Id": "947",
		"DOB": "02/08/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Vladimir",
		"Last Name": "Woodward",
		"City": "Londrina",
		"Id": "488",
		"DOB": "04/05/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Troy",
		"Last Name": "Bullock",
		"City": "Monte Vidon Corrado",
		"Id": "624",
		"DOB": "06/02/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Jameson",
		"Last Name": "Soto",
		"City": "Sanluri",
		"Id": "361",
		"DOB": "06/08/19",
		"isEmployed": "True"
	},
	{
		"First Name": "Emerson",
		"Last Name": "Compton",
		"City": "Quimper",
		"Id": "923",
		"DOB": "11/05/20",
		"isEmployed": "False"
	},
	{
		"First Name": "Rooney",
		"Last Name": "Mcdowell",
		"City": "Mérignac",
		"Id": "660",
		"DOB": "11/02/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Brenden",
		"Last Name": "Estrada",
		"City": "Vlezenbeek",
		"Id": "977",
		"DOB": "08/15/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Abdul",
		"Last Name": "Lawrence",
		"City": "Dutse",
		"Id": "434",
		"DOB": "05/07/19",
		"isEmployed": "False"
	},
	{
		"First Name": "Plato",
		"Last Name": "Burton",
		"City": "Gujrat",
		"Id": "283",
		"DOB": "05/26/20",
		"isEmployed": "True"
	},
	{
		"First Name": "Caldwell",
		"Last Name": "Holden",
		"City": "Pekanbaru",
		"Id": "232",
		"DOB": "04/15/20",
		"isEmployed": "True"
	}
]

const order = [1, 2, 3, 4, 5];

let arr = [1, 2, 3, 4, 5];
let nums = range(1, 100);
console.log(shuffle(arr))
console.log(nums);
let sample = sampleSize(nums, 5);
console.log('sample : ', sample)
const chunkedGroups = chunk(data, 5);
console.log(chunkedGroups);

let complete = [1, 2, 2, 3, 4, 4, 5];
let withoutTwoFour = without(complete, 2, 4);
console.log(withoutTwoFour);

let notShuffled = [1, 2, 3, 4, 5, 6, 7, 8];
let shuffledArr = shuffle(notShuffled);
console.log(shuffledArr);

let fiveRandomPeople = sampleSize(data, 5)
console.log(fiveRandomPeople);

if (typeof describe === 'function') {
  describe('#chunk', () => {
    it('return an array of arrays the size of the chunk number', () => {
      const array = chunk(data, 5);
      assert.equal(
        array[0].length, 5
      );
    });
  });
  describe('#reverse', () => {
    it('should reverse the order of an array', () => {
      const order = [1, 2, 3, 4, 5];
      const reverseOrder = reverse(order);
      assert.equal(
        reverseOrder[0], 5
      );
      assert.equal(reverseOrder[4], 1);
    });
  });
  describe('#without', () => {
    it('return a new array without excluded values', () => {
      const notTwoOrFour = (currentValue) => {
        return (currentValue !== 2 && currentValue !== 4)
      }
      let complete = [1, 2, 2, 3, 4, 4, 5];
      let withoutTwoFour = without(complete, 2, 4);
      assert.equal(
        withoutTwoFour.length, 3
      );
      assert(withoutTwoFour.every(notTwoOrFour));
    });
  });
  describe('#shuffle', ()=> {
    it('shuffles an array to a random order', ()=> {
      let notShuffled = [1, 2, 3, 4, 5, 6, 7, 8];
      let shuffledArr = shuffle(notShuffled);
      assert.notDeepStrictEqual(notShuffled, shuffledArr);
    })
  })
  describe('#sampleSize', ()=> {
    it('should return five random people from the data array', ()=> {
      let fiveRandomPeople = sampleSize(data, 5);
      let fiveOtherPeople = sampleSize(data, 5);
      assert.notDeepStrictEqual(fiveRandomPeople, fiveOtherPeople);
    })
  })
}