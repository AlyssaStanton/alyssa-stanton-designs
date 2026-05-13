<script>
  const pageFiles = [
    "alyssa stanton final website/Alyssa Stanton - Official Portfolio Front Page Removed.jpg"
  ];

  for (let i = 2; i <= 38; i++) {
    pageFiles.push(
      `alyssa stanton final website/Alyssa Stanton - Official Portfolio Front Page Removed${i}.jpg`
    );
  }

  let currentIndex = 0;

  const img = document.getElementById("carousel-img");
  const prev = document.getElementById("prev-btn");
  const next = document.getElementById("next-btn");
  const counter = document.getElementById("carousel-counter");

  function update() {
    img.src = pageFiles[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${pageFiles.length}`;
  }

  prev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + pageFiles.length) % pageFiles.length;
    update();
  });

  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % pageFiles.length;
    update();
  });

  update();
</script>