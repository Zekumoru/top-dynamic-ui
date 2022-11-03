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
    this.#setClickEvents();
    this.#setItemsClickEvents();
    this.#setOutsideClickEvents();
  }

  #setClickEvents() {
    this.#dropdown.addEventListener('click', () => {
      this.#dropdownMenu.style.transitionDuration = this.#animationDuration || '';
      if (this.#open) this.#dropdownMenu.classList.toggle(this.#open);
    });
  }

  #setItemsClickEvents() {
    new MutationObserver(() => {
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
    }).observe(this.#dropdownMenu, { childList: true });
  }

  #setOutsideClickEvents() {
    document.addEventListener('click', (e) => {
      let parent = e.target;
      while (parent) {
        if (parent === this.#dropdown) return;
        parent = parent.parentElement;
      }
      this.#dropdownMenu.classList.remove(this.#open);
    });
  }
}
