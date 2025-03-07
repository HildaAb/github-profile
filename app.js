const apiUrl = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("HildaAb");

async function getUser(user) {
  const resp = await fetch(apiUrl + user);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div class="image-container">
    <img class="avatar"src="${user.avatar_url}"alt="${user.name}"/>
    </div>
    <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>

    <ul class="info">
    <li>${user.followers}<strong>Folleowers</strong></li>
    <li>${user.following}<strong>Folleowing</strong></li>
    <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>

    <ul class="repos"id="repos"></ul>
    
    </div>
    </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
