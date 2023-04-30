const url = `https://jsonplaceholder.typicode.com/users`;

const container = document.querySelector(".container");
const search = document.querySelector("#search");

const roboCard =  (data) => {
    container.innerHTML="";
    data.forEach((robot) => {
    
        //creating a single card
    
        const card = document.createElement("span");
        card.setAttribute("class", "single");
    
        const image = document.createElement("img");
    
        image.setAttribute("src", `https://robohash.org/${robot.id}`);
        image.setAttribute("class", "roboImage");
    
        //inserting the mage to the card
        card.appendChild(image);
    
        //creating robo name of the card
        const roboName = document.createElement("p");
        card.appendChild(roboName);
        roboName.innerHTML = `<b>${robot.name}</b>`;
    
        //creating email of the card
        const roboEmail = document.createElement("p");
        card.appendChild(roboEmail);
        roboEmail.innerHTML = `${robot.email}`;
        roboEmail.style = "font-size: 0.8rem";
    
        //appending robo card to the container!

        container.appendChild(card);
      });
};

const robots = async () => {
  const response = await fetch(`${url}`);
  const data = await response.json();

  roboCard(data);
  
  search.addEventListener("input", () => {
      let input = search.value;

      //filtering robot according to the search input value
      const filteredRobo = data.filter((robo) => {
        // returning a filtered robo which has the input value
          return robo.name.toLowerCase().includes(input.toLowerCase());
        });

        //calling the func which will make our filtered robo!
        roboCard(filteredRobo);
    });
};

robots();

