// Fetching elements from the html
const contentElement = document.querySelector('.content');
const headerTitle = document.querySelector('.header-title');

// able to render the workouts
const renderWorkoutCard = (name, image, reps) => {
  console.log(name, image, reps);
};

fetch('../workouts.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    //use the data here
    data.workoutData.forEach((item) => {
      // Getting Object Title
      let keys = Object.keys(item);
      let currentDay = headerTitle.textContent.replace('Day', '');

      console.log(item);

      //   let currentWorkout = item.find((res) => res === currentDay);

      //   console.log(currentWorkout);

      //   if (keys[0] === currentDay) {
      //     console.log(item);
      //   }
    });

    //Figure out which page we are on with HeaderTitle
    //Use the data in json to render the workouts with the card element
    // renderWorkoutCard();
  });
