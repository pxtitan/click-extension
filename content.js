document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "Enter") {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      const url = new URL("https://www.google.com/search");
      url.searchParams.set("q", selectedText);
      window.open(url.toString(), "_blank");
    }
  }
});
