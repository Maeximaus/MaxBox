let items = [
  { name: "Common Item", chance: 60 },
  { name: "Rare Item", chance: 25 },
  { name: "Epic Item", chance: 12 },
  { name: "Legendary Item", chance: 3 }
];

let inventory = [];

function openBox() {
  let roll = Math.random() * 100;
  let sum = 0;
  let reward = "Nichts";

  for (let item of items) {
    sum += item.chance;
    if (roll <= sum) {
      reward = item.name;
      break;
    }
  }

  document.getElementById("result").innerText = "Du hast gezogen: " + reward;

  inventory.push(reward);
  updateInventory();
}

function updateInventory() {
  let list = document.getElementById("inventory");
  list.innerHTML = "";

  inventory.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = (index + 1) + ". " + item;
    list.appendChild(li);
  });
}
