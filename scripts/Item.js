export default class Item {
  constructor(name, category, price) {
    this.name = name;
    this.category = category;
    this.price = price;
  }
  htmlToken() {
    let html_string = `<li>
            <div class="item">
              <div>
                <h2 id="name">${this.name}</h2>
                <h4>${this.category}</h4>
              </div>
              <div><h3 id="price">${this.price}$</h3></div>
            </div>
          </li>`;
    return html_string;
  }
}
