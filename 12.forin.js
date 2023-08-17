const profile = {
  id: 4,
  name: "Emily Brown",
  city: "Houston",
  state: "Texas",
  isActive: true,
};

//forin
for (let key in profile) {
  console.log(key, profile[key]);
}
