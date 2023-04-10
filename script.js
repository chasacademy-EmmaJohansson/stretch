const url = "https://randomuser.me/api/?results=50";

async function getProfiles() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const squares = document.getElementById("squares");

  data.results.forEach((result) => {
    const div = document.createElement("div");
    div.innerHTML = `<div class = "div">
    <p class="title">${result.login.username}</p>
    <div><img class="img" src="${result.picture.large}"></div>
    <div>
    <div class="name">${result.name.first} ${result.name.last}</div>
    <p class="cell">
    ${result.cell} <br>
    ${result.email}</p>
    
    <ul class=ul>
    <li>Age: ${result.dob.age}</li>
    <li>Gender: ${result.gender}</li>
    <li>${result.location.city}, ${result.location.country}</li>
    </ul>
    </div>
    </div>`;
    squares.appendChild(div);
  });
}
getProfiles();
