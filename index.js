// Fetching elements from the html
const contentElement = document.querySelector('.content');
const headerTitle = document.querySelector('.header-title');

// able to render the card workouts
const renderWorkoutCard = (name, image, reps) => {
  console.log(name, image, reps);
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
          renderWorkoutCard(workout.name, workout.image, workout.reps)
        );
      }
    });
  });
