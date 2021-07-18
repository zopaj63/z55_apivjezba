const endpoint = 'https://api.github.com/users/zopaj63';


fetch(endpoint)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const h1 = document.createElement("h1");
        document.body.appendChild(h1);
        h1.innerText = data.login;
        h1.style.marginBottom = "20px";

        const img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.setAttribute("alt", `${data.login} profile image`);
        document.body.appendChild(img);
        img.width = "200";
        img.style.marginBottom = "20px";

        const a = document.createElement("a");
        a.setAttribute("href", data.html_url);
        a.innerText = "Visit my GitHub page";
        document.body.appendChild(a);
    })
    .catch((error) => {
        console.error(error);
    });
