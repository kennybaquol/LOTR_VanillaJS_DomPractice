console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// Added global variables
let hobbitsList = document.createElement('ul');
let baddiesList = document.createElement('ul');
let buddiesList = document.createElement('ul');

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	let middleEarth = document.createElement('section');
	middleEarth.setAttribute('id', 'middle-earth');

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		let currentLand = document.createElement('article');
		currentLand.setAttribute('id', `${lands[i]}`);
		let landName = document.createElement('h1');
		landName.innerHTML = `${lands[i]}`;
		currentLand.appendChild(landName);
		middleEarth.appendChild(currentLand);
	}

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarth);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	for (let i = 0; i < hobbits.length; i++) {
		let currentHobbit = document.createElement('li', `${hobbits[i]}`);
		currentHobbit.setAttribute('id', `${hobbits[i]}`);
		currentHobbit.innerHTML = `${hobbits[i]}`;
		currentHobbit.setAttribute('class', 'hobbit');
		hobbitsList.appendChild(currentHobbit);
	}
	let theShire = document.getElementById('The-Shire');
	theShire.appendChild(hobbitsList);

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	let theRing = document.createElement('div');
	theRing.setAttribute('id', 'the-ring');

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class', 'magic-imbued-jewelry');

	// add the ring as a child of `Frodo`
	let frodo = document.getElementById('Frodo Baggins');
	frodo.appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	for (let i = 0; i < baddies.length; i++) {
		let currentBaddy = document.createElement('li', `${baddies[i]}`);
		currentBaddy.setAttribute('id', `${baddies[i]}`);
		currentBaddy.innerHTML = `${baddies[i]}`;
		currentBaddy.setAttribute('class', 'baddy');
		baddiesList.appendChild(currentBaddy);
	}
	let mordor = document.getElementById('Mordor');
	mordor.appendChild(baddiesList);

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	let buddiesAside = document.createElement('aside');

	// put an `unordered list` of the `'buddies'` in the aside
	for (let i = 0; i < buddies.length; i++) {
		let currentBuddy = document.createElement('li', `${buddies[i]}`);
		currentBuddy.setAttribute('id', `${buddies[i]}`);
		currentBuddy.innerHTML = `${buddies[i]}`;
		currentBuddy.setAttribute('class', 'buddy');
		buddiesList.appendChild(currentBuddy);
	}
	buddiesAside.appendChild(buddiesList);
	let rivendell = document.getElementById('Rivendell');
	rivendell.appendChild(buddiesAside);

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	let rivendell = document.getElementById('Rivendell');
	let theShire = document.getElementById('The-Shire');
	let temp = theShire.removeChild(hobbitsList);
	rivendell.appendChild(temp);
	console.log(rivendell);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	buddies[3] = 'Aragorn';
	let aragorn = document.getElementById('Strider');
	aragorn.setAttribute('id', `${buddies[3]}`);
	aragorn.innerHTML = buddies[3];
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	let theFellowship = document.createElement('div');
	theFellowship.setAttribute('id', 'theFellowship');

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	for (let i = 0; i < hobbits.length; i++) {
		let newMember = document.getElementById(`${hobbits[i]}`);
		theFellowship.appendChild(newMember);
		alert(`${hobbits[i]} has joined your party`);
	}
	for (let j = 0; j < buddies.length; j++) {
		let newMember2 = document.getElementById(`${buddies[j]}`);
		theFellowship.appendChild(newMember2);
		alert(`${buddies[j]} has joined your party`);
	}
	let rivendell = document.getElementById('Rivendell');
	rivendell.appendChild(theFellowship);

	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	
	// change the `'Gandalf'` text to `'Gandalf the White'`
	buddies[0] = 'Gandalf the White';
	let gandalf = document.getElementById('Gandalf the Grey');
	gandalf.setAttribute('id', `${buddies[0]}`);
	gandalf.innerHTML = buddies[0];

	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.background = "white";
	gandalf.style.border = "1px solid grey";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')

	// pop up an alert that the horn of gondor has been blown
	alert(`the horn of gondor has been blown!`);

	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	let boromir = document.getElementById('Boromir');
	boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')

	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let tF = document.getElementById('theFellowship');
	let mordor = document.getElementById('Mordor');
	let frodo = document.getElementById('Frodo Baggins');
	let sam = document.getElementById('Samwise "Sam" Gamgee');
	let temp = tF.removeChild(frodo);
	console.log(temp);
	let temp2 = tF.removeChild(sam);
	mordor.appendChild(temp);
	mordor.appendChild(temp2);

	// add a div with an id of `'mount-doom'` to `Mordor`
	let mountDoom = document.createElement('div');
	mountDoom.setAttribute('id', 'mount-doom');
	mordor.appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')

	// Create a div with an id of `'gollum'` and add it to Mordor
	let mordor = document.getElementById('Mordor');
	let gollum = document.createElement('div');
	gollum.setAttribute('id', 'gollum');
	mordor.appendChild(gollum);

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	let frodo = document.getElementById('Frodo Baggins');
	let theRing = document.getElementById('the-ring');
	let temp = frodo.removeChild(theRing);
	gollum.appendChild(temp);

	// Move Gollum into Mount Doom
	let mountDoom = document.getElementById('mount-doom');
	let temp2 = mordor.removeChild(gollum);
	mountDoom.appendChild(temp2);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')

	// remove `Gollum` and `the Ring` from the document
	let gollum = document.getElementById('gollum');
	let theRing = document.getElementById('the-ring');
	let mountDoom = document.getElementById('mount-doom');
	mountDoom.removeChild(gollum);

	// Move all the `hobbits` back to `the shire
	let frodo = document.getElementById('Frodo Baggins');
	let sam = document.getElementById('Samwise "Sam" Gamgee');
	let merry = document.getElementById('Meriadoc "Merry" Brandybuck');
	let pippin = document.getElementById('Peregrin "Pippin" Took');
	let mordor = document.getElementById('Mordor');
	let theFellowship = document.getElementById('theFellowship');
	let theShire = document.getElementById('The-Shire');
	let temp = mordor.removeChild(frodo);
	theShire.appendChild(temp);
	temp = mordor.removeChild(sam);
	theShire.appendChild(temp);
	temp = theFellowship.removeChild(merry);
	theShire.appendChild(temp);
	temp = theFellowship.removeChild(pippin);
	theShire.appendChild(temp);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
