export default class Section {
  constructor ({items, renderer}, container) {
    this._items = items;
    this._renderer = renderer;
    
    this._container = document.querySelector(container);
  }

  rendererItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(item, isPrepend) {
      if (isPrepend) {
        this._container.prepend(item);
      } else {
        this._container.append(item);
      }
  }
}

