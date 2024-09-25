import items from "./Items-list.js";
import filter_buttons from "./Button.js";
const renderItems = () => {
  const container = document.getElementById("cont");
  container.innerHTML = "";
  for (var i = 0; i < items.length; i += 1) {
    container.innerHTML += items[i].htmlToken();
    console.log(items[i]);
  }

  //render the filter buttons
  const filterBtns = document.getElementById("filterBtns");
  filterBtns.innerHTML = "";
  for (var i = 0; i < filter_buttons.length; i += 1) {
    filterBtns.innerHTML += filter_buttons[i].htmlToken();
    console.log(filter_buttons[i]);
  }
};
renderItems();
