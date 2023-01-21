import { insertLast } from './insert.js';
import { getNode } from './getNode.js';


const createCard = ({
  id, 
  src = null,
  alt = null,
  title = 'Title',
  desc = 'desc'
} = {}) => { 
  return /* html */`
  <div class="card">
  <figure>
    <img src="${src}" alt="${alt}" />
    <figcaption>
      <strong>${id}. ${title}</strong>
      <span>${desc}</span>
    </figcaption>
  </figure>
  <a href="#" class="close-button"><i class="fa-solid fa-circle-xmark"></i></a>
  </div>
`
}

export function renderCard(target,data){
  insertLast(target,createCard(data))
}
console.log(createCard())