export default class Carousel {
  #carousel;
  #imageContainer;
  #images;

  constructor(carousel, images, {
    imageContainer,
  } = {}) {
    this.#carousel = carousel;
    this.#images = images;
    this.#imageContainer = carousel.querySelector(`.${imageContainer || 'image-container'}`);
    this.#setImages();
    this.#setTransition();
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

  #setTransition() {
    let index = 0;
    let transitioning = false;
    this.#imageContainer.addEventListener('click', () => {
      if (transitioning) return;
      if (index === (this.#images.length - 1)) index = -1;

      this.#imageContainer.style.transform = `translateX(-${100 * (index + 1)}%)`;
      index++;
    });

    this.#imageContainer.addEventListener('transitionstart', () => {
      transitioning = true;
    });

    this.#imageContainer.addEventListener('transitionend', () => {
      transitioning = false;
    });
  }
}
