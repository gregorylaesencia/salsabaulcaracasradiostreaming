const customSlides = [
  {
    id: 0,
    dateDescription: 'Lunes a Viernes ',
    actionDescription: '24 HORAS',
    hourDate: 'DE SALSA'
  },
  {
    id: 1,
    dateDescription: '+58 0426/248/7621',
    actionDescription: 'SOLICITA',
    hourDate: 'TU TEMA'
  },
  {
    id: 2,
    dateDescription: 'ENVIA TU SALUDOS',
    actionDescription: 'ESTAMOS',
    hourDate: 'DOMINANDO LA ZONA'
  },
  {
    id: 3,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 4,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 5,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 6,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 7,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 8,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 9,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 10,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 11,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 12,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 13,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
  {
    id: 14,
    dateDescription: '',
    actionDescription: '',
    hourDate: ''
  },
 ];

function getInnerCarouselItem(slide, i) {
  return `
    <div class="carousel-item ${i === 0 ? 'active' : ''}" data-img="./assets/img/${slide.id}.jpg" data-id="${slide.id}">
      <div class="featured-bg-img" style="background-image: url(./assets/img/${slide.id}.jpg)"></div>
      <img class="d-block w-100" src="./assets/img/${slide.id}.jpg" alt="${slide.id} alt image"/>
    </div>`;
}

function setInitialImages() {
  const initialSlideParentDiv = document.querySelector('.carousel-upper-wrapper');
  const bootstrapCarousel = `
    <div id="primaryCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">${customSlides.map((slide, i) => this.getInnerCarouselItem(slide, i)).reduce((a,b) => a+b)}</div>
    </div>`;
  
  initialSlideParentDiv.insertAdjacentHTML('beforeend', bootstrapCarousel);
}

setInitialImages();
