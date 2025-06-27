// Task 4: Display visit log on popup load

chrome.storage.local.get("visitLog", data => {
  const output = document.getElementById("output");
  output.innerHTML = "";

  const log = data.visitLog || {};
  const entries = Object.entries(log).sort((a, b) => b[1] - a[1]);

  if (entries.length === 0) {
    output.textContent = "No data recorded.";
    return;
  }

  for (const [site, seconds] of entries) {
    const div = document.createElement("div");
    div.textContent = `${site}: ${Math.floor(seconds / 60)} min`;
    output.appendChild(div);
  }
});
