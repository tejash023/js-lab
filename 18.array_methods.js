const colors = ["red", "blue"];

const data = [
  {
    id: 1,
    color: "red",
    name: "John",
    city: "New York",
  },
  {
    id: 2,
    color: "blue",
    name: "Emily",
    city: "Los Angeles",
  },
  {
    id: 3,
    color: "green",
    name: "Michael",
    city: "Chicago",
  },
  {
    id: 4,
    color: "olive",
    name: "Sophia",
    city: "Houston",
  },
];

const result = data.filter((item) => colors.includes(item.color));

console.log(result);
