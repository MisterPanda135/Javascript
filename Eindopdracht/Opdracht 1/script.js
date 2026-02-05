const getallen = [1, 2, 3, 4, 5];

const getSum = (totaal, nummer) => totaal + nummer;

console.log(getallen.reduce(getSum));