export default class Dropdown {
  #dropdown;
  #dropdownMenu;
  #onSelect;
  #open;
  #current;
  #animationDuration;
  #currentItem;

  constructor(dropdown, dropdownMenu, {
    open, current, onSelect, animationDuration,
  } = {}) {
    this.#dropdown = dropdown;
    this.#dropdownMenu = dropdownMenu;
    this.#onSelect = onSelect;
    this.#open = open;
    this.#current = current;
    this.#animationDuration = animationDuration;
    this.#setTabOnClick();
    this.#setDropdownItemsEvents();
  }

  #setTabOnClick() {
    this.#dropdown.addEventListener('click', () => {
      this.#dropdownMenu.style.transitionDuration = this.#animationDuration || '';
      if (this.#open) this.#dropdownMenu.classList.toggle(this.#open);
    });
  }

  #setDropdownItemsEvents() {
    [...this.#dropdownMenu.children].forEach((item) => {
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
