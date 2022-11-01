export default class Dropdown {
  #tab;
  #dropdown;
  #onSelect;
  #open;
  #current;
  #animationDuration;
  #currentItem;

  constructor(tab, dropdown, {
    open, current, onSelect, animationDuration,
  } = {}) {
    this.#tab = tab;
    this.#dropdown = dropdown;
    this.#onSelect = onSelect;
    this.#open = open;
    this.#current = current;
    this.#animationDuration = animationDuration;
    this.#setTabOnClick();
    this.#setDropdownItemsEvents();
  }

  #setTabOnClick() {
    this.#tab.addEventListener('click', () => {
      this.#dropdown.style.transitionDuration = this.#animationDuration || '';
      if (this.#open) this.#dropdown.classList.toggle(this.#open);
    });
  }

  #setDropdownItemsEvents() {
    [...this.#dropdown.children].forEach((item) => {
      if (item.classList.contains(this.#current)) this.#currentItem = item;

      item.addEventListener('click', () => {
        if (this.#current) {
          if (this.#currentItem && this.#currentItem !== item) this.#currentItem.classList.remove(this.#current);
          item.classList.add(this.#current);
        }

        this.#currentItem = item;
        if (typeof this.#onSelect === 'function') this.#onSelect(item);
      });
    });
  }
}
