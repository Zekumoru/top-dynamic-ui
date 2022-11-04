export default class Carousel {
  #carousel;
  #imageContainer;
  #images;
  #index;
  #transitioning;

  constructor(carousel, images, {
    imageContainer, leftArrow, rightArrow,
  } = {}) {
    this.#carousel = carousel;
    this.#images = images;
    this.#imageContainer = carousel.querySelector(`.${imageContainer || 'image-container'}`);
    this.#index = 0;
    this.#transitioning = false;
    this.#setImages();
    this.#setArrowClickEvents(carousel.querySelector(`.${leftArrow || 'left-arrow'}`));
    this.#setArrowClickEvents(carousel.querySelector(`.${rightArrow || 'right-arrow'}`), true);
    this.#setTransitioningEvents();
  }

  #setImages() {
    this.#images.forEach((image) => {
      this.#addImage(image);
    });
  }

  #addImage(source) {
    const image = document.createElement('img');
    image.src = source;
    this.#imageContainer.appendChild(image);
  }

  #setArrowClickEvents(arrow, forward = false) {
    arrow.addEventListener('click', () => {
      if (this.#transitioning) return;

      this.#index--;
      if (forward) this.#index += 2;
      if (this.#index < 0) this.#index = this.#images.length - 1;
      if (this.#index === this.#images.length) this.#index = 0;
      this.#transition();
    });
  }

  #setTransitioningEvents() {
    this.#imageContainer.addEventListener('transitionstart', () => {
      this.#transitioning = true;
    });

    this.#imageContainer.addEventListener('transitionend', () => {
      this.#transitioning = false;
    });
  }

  #transition() {
    if (this.#transitioning) return;

    let translateTo = 0;
    if (this.#index) translateTo = 100 * this.#index;
    this.#imageContainer.style.transform = `translateX(-${translateTo}%)`;
  }
}
