# CS-361-Assignment-1
Eli Kurlbaum

# Communication Contract: Microservice Implemented for Partner
Request:
- Send a GET request to `http://localhost:5115/${workout}`.
- 'workout' should correspond to the routes in the microservice for whichever image.

Receive:
- Response is a JSON object with the image file located in response.url. 

- Example Function Call:

async function getImage(workout, image_id){
    console.log("Sending Request")
    const response = await fetch(`http://localhost:5115/{workout`)
    console.log(response)
    document.getElementById(image_id).src = response.url;
}

  ![alt text](https://github.com/elikurlbaum/CS-361-Assignment-1/blob/main/kiran/Microservice%20UML.png)