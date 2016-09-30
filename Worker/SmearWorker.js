onmessage = e => postMessage(smear(e.data));

function smear(pixels) {
  const {
    data,
    width,
    height
  } = pixels;
  let n = 10;
  let m = n - 1;
  for (let row = 0; row < height; row++) {
    let i = row * width * 4 + 4;
    for (let col = 1; col < width; col++, i += 4) {
      data[i] = (data[i] + data[i - 4] * m) / n;
      data[i + 1] = (data[i + 1] + data[i - 3] * m) / n;
      data[i + 2] = (data[i + 2] + data[i - 2] * m) / n;
      data[i + 3] = (data[i + 3] + data[i - 1] * m) / n;
    }
  }
  return pixels;
}