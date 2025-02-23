const btn = document.querySelector(".btn");
const img = document.querySelector(".img");
const apiKey = "live_SFwDtZQUbd3qFwwa9tWxpJ6uJWsGR8SN9rs0Ki0wFn4UrsxrXEmwBQVNFrEX7tm7";

async function fetchCat() {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search", {
            headers: {
                "x-api-key": apiKey
            }
        });

        const data = await response.json();
        img.src = data[0].url; // Устанавливаем новый src картинки
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

btn.addEventListener("click", fetchCat);
