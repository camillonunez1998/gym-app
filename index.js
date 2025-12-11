// Fetching elements from the html
const contentElement = document.querySelector('.content');
const headerTitle = document.querySelector('.header-title');

// able to render the card workouts
const renderWorkoutCard = (name, image, reps, description) => {
  console.log(name, image, reps, description);

  // Creating card element
  let cardElement = document.createElement('div');
  cardElement.className = 'card';

  // Create image element
  let imageElement = document.createElement('img');
  imageElement.src = image;

  // Create title element
  let workoutTitle = document.createElement('h2');
  workoutTitle.className = 'title';
  workoutTitle.textContent = name;

  // Create a description element {style it into a h4} (Make it show info when you hover over the card)
  let descriptionElement = document.createElement('h4'); // Create the h4
  descriptionElement.className = 'description';         // Asign a CSS class
  descriptionElement.textContent = description;           // Asign the description text


  // Create a reps section in the bottom {style into a p}
  let repsElement = document.createElement('p');
  repsElement.className = 'reps';
  // Assign the text for reps, using a prefix for clarity
  repsElement.textContent = `Reps: ${reps}`;

  // Add the elements into the card
  cardElement.append(imageElement);
  cardElement.append(workoutTitle);
  cardElement.append(descriptionElement);
  cardElement.append(repsElement);

  // Add the card elements into the content section
  contentElement.append(cardElement);
};

// Fetching the workouts data
fetch('../workouts.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    data.workoutData.forEach((item) => {
      // Getting Object Title
      let currentDay = headerTitle.textContent;

      // Finding the data we need that matches our current day
      if (item.name === currentDay) {
        // Render each workout into a card element
        item.data.forEach((workout) =>
          renderWorkoutCard(workout.name, workout.image, workout.reps, workout.description)
        );
      }
    });
  });
