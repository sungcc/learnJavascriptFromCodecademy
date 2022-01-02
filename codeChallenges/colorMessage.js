// Create function below
const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "This shirt is your favorite color!";
  } else {
    return "This is a nice color.";
  }
}

console.log((colorMessage("Red", "Red")));

console.log((colorMessage("Blue", "Red")));
