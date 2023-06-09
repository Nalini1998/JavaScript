// For full API documentation, including code examples, visit https://wix.to/94BuAAs

// Returns a number between 0 and 255
function generateRandomNumber() {
	return Math.floor(Math.random() * 256);
}

// declare createRandomColor() function doesn’t have any parameters
function createRandomColor() {
	// creating an empty array named newColor
	let newColor = [];
	// newColor needs to be populated with 3 values
	for (let i = 0; i < 3; i++) {
			// use the loop to populate newColor with 3 random numbers
			newColor.push(generateRandomNumber());
	}
	// newColor separates each number with a comma
	return newColor.join(',');

}

$w.onReady(function () {
	// Selectors for all the Container boxes
	const bigBox = $w('#box0');
	const firstCircle = $w('#box1');
	const secondCircle = $w('#box2');
	const thirdCircle = $w('#box3');
	const fourthCircle = $w('#box4');
	const fifthCircle = $w('#box5');

	// Selector for the first button
	const changeBoxBtn = $w('#changeBox');

	// Changing the Box's Color below:
	// adding an .onClick() event listener to changeBoxBtn
	changeBoxBtn.onClick(event => {
			// create newRGBvalue variable 
			let newRGBvalue = createRandomColor();
			// make background color change
			bigBox.style.backgroundColor = `rgb(${newRGBvalue})`;
			// make border color change 
			bigBox.style.borderColor = `rgb(${newRGBvalue})`;
	});

	const allBoxes = [bigBox, firstCircle, secondCircle, thirdCircle, fourthCircle, fifthCircle]
	// create changeAllBtn variable called button
	const changeAllBtn = $w('#changeAll');
	// add an .onClick() event listener
	changeAllBtn.onClick(event => {
			// iterate over the allBoxes
			allBoxes.forEach(box => {
					// create boxRGBvalue variable  with the value of createRandomColor()
					let boxRGBvalue = createRandomColor();
					// reassign the Box’s background color and border color using boxRGBvalue
					box.style.backgroundColor = `rgb(${boxRGBvalue})`;
					box.style.borderColor = `rgb(${boxRGBvalue})`;
			});

	});

});