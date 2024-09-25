import items from "./Items-list.js";

const filterHandler = (event) => {
  const filteredId = event.target.id;
  console.log(filteredId);

  //render the items having the specified id
  const container = document.getElementById("cont");
  container.innerHTML = "";
  for (var i = 0; i < items.length; i += 1) {
    if (filteredId === "all") {
      container.innerHTML += items[i].htmlToken();
      console.log(items[i]);
    } else if (items[i].category === filteredId) {
      container.innerHTML += items[i].htmlToken();
      console.log(items[i]);
    }
  }
};

const colorHandler = (event) => {
  console.log(event.target.id);
  const cat = event.target.id;

  const itms = document.querySelectorAll(".item");

  for (var i = 0; i < itms.length; i += 1) {
    var itemCategory = itms[i].children[0].children[1].textContent;
    console.log(itemCategory);

    if (itemCategory === cat) {
      itms[i].classList.add("colored");
    } else {
      if (itms[i].classList.contains("colored")) {
        itms[i].classList.remove("colored");
      }
    }
  }
};

const removeColors = (event) => {
  const cat = event.target.id;

  const itms = document.querySelectorAll(".item");

  for (var i = 0; i < itms.length; i += 1) {
    var itemCategory = itms[i].children[0].children[1].textContent;
    console.log(itemCategory);
    if (itms[i].classList.contains("colored")) {
      itms[i].classList.remove("colored");
    }
  }
};

window.filterHandler = filterHandler;
window.colorHandler = colorHandler;
window.removeColors = removeColors;
