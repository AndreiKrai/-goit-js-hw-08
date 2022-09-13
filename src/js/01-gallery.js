// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

function makeGallary(array = []) {
  return array
    .map(galleryItems => {
      return `<a class="gallery__item" href="${galleryItems.original}">
  <img class="gallery__image" src="${galleryItems.preview}" alt="${galleryItems.description}" />
</a>`;
    })
    .join('');
}

galleryEl.innerHTML = makeGallary(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  // в .gallery шукає <a>
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: true,
});
