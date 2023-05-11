export default class LoadMoreBtn {
  static classes = {
    hidden: "hidden",
  };

  constructor({ selector, isHidden = false }) {
    this.button = this.getButton(selector);
    // if (isHidden) this.hide();
    isHidden && this.hide();
    // isHidden = true && this.hide(); -> true && true -> this.hide();
    // isHidden = false && this.hide(); -> false && true -> false
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

  hide() {
    this.button.classList.add(LoadMoreBtn.classes.hidden);
  }

  show() {
    this.button.classList.remove(LoadMoreBtn.classes.hidden);
  }

  disable() {
    this.button.disabled = true;
    this.button.textContent = "Loading...";
  }

  enable() {
    this.button.disabled = false;
    this.button.textContent = "Load more";
  }

  end() {
    this.button.disabled = true;
    this.button.textContent = "The end!";
  }
}
