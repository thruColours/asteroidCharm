
const api_url = 'https://api.nasa.gov/neo/rest/v1/feed/today?detail=true&api_key=vqy6sWn5jqFqDWApqmYnHieWCXebnkxtKG7gpOoX';

const alert = "error";

async function getAst() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { element_count } = data;

document.getElementById('counter').textContent = element_count;

};

getAst().catch(alert);

setInterval(getAst, 120000);
