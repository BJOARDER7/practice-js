function areOfTriangle(a,b,c){
  const s = (a + b + c) / 2;
  const areaValue = s * (s - a) * (s - b) * (s - c);
  const area = Math.sqrt(areaValue);
  return area;
}

const sides = areOfTriangle(12,11,20);
const areaFloat = parseFloat(sides);
const area = areaFloat.toFixed(2);
console.log('Area of triangle: ', area);