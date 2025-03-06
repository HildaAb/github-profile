const apiUrl = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(user) {
  const resp = await fetch(apiUrl + user);
  const respData = await resp.json();

  createUserCard(respData);
}

function createUserCard(user) {
  const cardHTML = `
  <div class="card">
    <div>
    <img src="${user.avatar_url}"alt=""/>
    </div>
    <div>
    <h2>${user.name}</h2>
    <p>${user.bio}</p>

    <ul>
    <li>${user.followers}</li>
    <li>${user.following_url}</li>
    <li>${user.repos_url}</li>
    </ul>
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
