export default class Section {
  constructor ({renderer}, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  rendererItems(items) {
    items.forEach(item => {
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

