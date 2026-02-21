let rankingData;
let podiumOrdem = [3, 1, 0, 2, 4];

function preload() {
  loadJSON("/src/score.json", function (res) {
    rankingData = res;
    rankingData.sort((a, b) => b.score - a.score);
    rankingData = podiumOrdem.map((i) => rankingData[i]);
  });
}

function setup() {
  const heightFactor = windowWidth < 600 ? 0.5 : 0.6;
  const canvas = createCanvas(windowWidth * 0.9, windowHeight * heightFactor);
  canvas.parent("canvas-container");
  document.querySelector("#loading").remove();
}

function draw() {
  if (rankingData === undefined) {
    return;
  }

  // Valores responsivos baseados no tamanho da tela
  const COLUMN_BORDER_SIZE = width < 600 ? 4 : width < 1000 ? 6 : 10;
  const MIN_SCORE_SIZE = width < 600 ? 80 : width < 1000 ? 120 : 150;
  const MARGIN_UP = width < 600 ? 25 : 40;

  const maxScore = Math.max(...rankingData.map((item) => item.score));
  const minScore = Math.min(...rankingData.map((item) => item.score));

  const barWidth = (0.7 * width) / rankingData.length;
  const spacing = width / rankingData.length - barWidth;
  const labelBaseY = height - (width < 600 ? 4 : 2);
  const labelGap = width > 1000 ? 26 : width > 600 ? 24 : width > 400 ? 20 : 18;

  background(0);
  noStroke();
  for (let i = 0; i < rankingData.length; i++) {
    const item = rankingData[i];
    const barHeight =
      maxScore == minScore
        ? MIN_SCORE_SIZE
        : ((item.score - minScore) / (maxScore - minScore)) *
            (height - 80 - MIN_SCORE_SIZE - MARGIN_UP) +
          MIN_SCORE_SIZE;
    const x = i * (width / rankingData.length) + spacing / 2;
    const y = height - barHeight - 80 + COLUMN_BORDER_SIZE;

    fill(item.color);
    rect(
      x + COLUMN_BORDER_SIZE,
      y,
      barWidth - 2 * COLUMN_BORDER_SIZE,
      barHeight,
    );
    if (barWidth - 4 * COLUMN_BORDER_SIZE > 0)
      rect(
        x + 2 * COLUMN_BORDER_SIZE,
        y - COLUMN_BORDER_SIZE,
        barWidth - 4 * COLUMN_BORDER_SIZE,
        barHeight,
      );
    rect(x, y + COLUMN_BORDER_SIZE, barWidth, barHeight);

    fill(255);
    if (barWidth - 8 * COLUMN_BORDER_SIZE > 0)
      rect(
        x + 3 * COLUMN_BORDER_SIZE,
        y,
        barWidth - 8 * COLUMN_BORDER_SIZE,
        COLUMN_BORDER_SIZE,
      );

    if (barWidth - 6 * COLUMN_BORDER_SIZE > 0)
      rect(
        x + barWidth - 4 * COLUMN_BORDER_SIZE,
        y,
        COLUMN_BORDER_SIZE,
        COLUMN_BORDER_SIZE,
      );
    rect(
      x + 2 * COLUMN_BORDER_SIZE,
      y + COLUMN_BORDER_SIZE,
      COLUMN_BORDER_SIZE,
      COLUMN_BORDER_SIZE,
    );
    rect(
      x + COLUMN_BORDER_SIZE,
      y + 2 * COLUMN_BORDER_SIZE,
      COLUMN_BORDER_SIZE,
      barHeight - 6 * COLUMN_BORDER_SIZE,
    );
    rect(
      x + COLUMN_BORDER_SIZE,
      y + barHeight - 3 * COLUMN_BORDER_SIZE,
      COLUMN_BORDER_SIZE,
      COLUMN_BORDER_SIZE,
    );

    fill(255);
    textAlign(CENTER, CENTER);
    textFont("Minecraftia");

    if (width > 1000) {
      textSize(24);
      text("Time " + item.team, x + barWidth / 2, labelBaseY - labelGap);
      textSize(20);
      text(item.score + "pts", x + barWidth / 2, labelBaseY);

      textSize(30);
      text(podiumOrdem[i] + 1 + "º", x + barWidth / 2, y - MARGIN_UP + 10);
    } else if (width > 600) {
      textSize(22);
      text(item.team, x + barWidth / 2, labelBaseY - labelGap);
      textSize(18);
      text(item.score + "pts", x + barWidth / 2, labelBaseY);

      textSize(30);
      text(podiumOrdem[i] + 1 + "º", x + barWidth / 2, y - MARGIN_UP + 10);
    } else if (width > 400) {
      textSize(14);
      push();
      translate(x + barWidth / 2, labelBaseY - labelGap);
      rotate(-PI / 4);
      text(item.team, 0, 0);
      pop();

      textSize(12);
      text(item.score, x + barWidth / 2, labelBaseY);

      textSize(18);
      text(podiumOrdem[i] + 1 + "º", x + barWidth / 2, y - MARGIN_UP + 5);
    } else {
      // Telas muito pequenas
      textSize(12);
      push();
      translate(x + barWidth / 2, labelBaseY - labelGap);
      rotate(-PI / 4);
      text(item.team, 0, 0);
      pop();

      textSize(10);
      text(item.score, x + barWidth / 2, labelBaseY);

      textSize(16);
      text(podiumOrdem[i] + 1 + "º", x + barWidth / 2, y - MARGIN_UP + 5);
    }
    describe(`O time ${item.team} está com ${item.score} pontos`);
  }
}

function windowResized() {
  const heightFactor = windowWidth < 600 ? 0.5 : 0.6;
  resizeCanvas(windowWidth * 0.9, windowHeight * heightFactor);
}
