const Education = require("../Models/Education");
const Health = require("../Models/Health");

async function main(hData,eData) {
  try {
    await Education.createMany(eData);
    console.log("Education collection seeded success!");
    await Health.createMany(hData);
    console.log("Health collection seeded success!");
  } catch (error) {
    console.error(error);
  }
}

const educationData = [
  {
    firstName: "Emily",
    lastName: "Clark",
    email: "emily.clark@yahoo.com",
    favoriteColor: "teal",
    birthday: "03/15/92",
    career:"High School Teacher"
  },
];
const healthData = [
  {
    firstName: "James",
    lastName: "Rodriguez",
    email: "james.rodriguez@outlook.com",
    favoriteColor: "navy",
    birthday: "11/22/85",
    career:"Doctor"
  },
];

main(healthData, educationData);