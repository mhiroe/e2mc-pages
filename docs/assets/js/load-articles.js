async function loadZennArticles() {
  try {
    const response = await fetch("/assets/zenn-articles.json");
    const articles = await response.json();

    const container = document.querySelector(".zenn-articles");
    container.innerHTML = articles
      .slice(0, 5) // 最新5件を表示
      .map(
        (article) => `
        <div class="article">
          <a href="${article.link}">${article.title}</a>
          <span class="date">${new Date(
            article.published_at
          ).toLocaleDateString()}</span>
        </div>
      `
      )
      .join("");
  } catch (error) {
    console.error("Failed to load Zenn articles:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadZennArticles);
