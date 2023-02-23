// Put this file in your public folder with your HTML files.

async function getImage(workout, image_id){
    console.log("Sending Request")
    console.log(image_id)
    const response = await fetch(`http://localhost:5115/${workout}`)
    console.log(response)
    document.getElementById(image_id).src = response.url;
}

// Example HTML Call: 
//   <p>Triceps dip: 3 sets of 12 reps<button onclick="getImage('Tricep', 'Arms-Image')">View Workout</button></p>
//   <image id="Arms-Image"></image>
//   <script src="microservice.js"></script>