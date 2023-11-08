// Calculando proporções de positivos, negativos e zeros em um array

const numbers = [5, 1, 0, 0, -9, -10, -1, 3];

function calculateProportion(arr) {
  const positive = [];
  const negative = [];
  const zeros = [];

  arr.forEach((item) => {
    if (item > 0) {
      positive.push(item);
    } else if (item < 0) {
      negative.push(item);
    } else {
      zeros.push(item);
    };
  })

  const positiveProportion = (positive.length / arr.length).toFixed(6);
  const negativeProportion = (negative.length / arr.length).toFixed(6);
  const zerosProportion = (zeros.length / arr.length).toFixed(6);
  console.log(
    `
    Números positivos: ${positiveProportion},
    Números nagativos: ${negativeProportion},
    Zeros: ${zerosProportion}
    `
  )
}

calculateProportion(numbers);
