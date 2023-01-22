
import { addClass, attr, clearContents, delayP, getNode, getNodes, jihoon, removeClass, renderCard } from './lib/index.js'



const categoryListContainer = getNode('.card-container');




async function rendingCardList(){

  try{

    // await delayP(2000);
    let response = await jihoon.get('http://localhost:3000/cards');

    let cardData = response.data;
    console.log(cardData)
    cardData.forEach((data)=>{
      renderCard(categoryListContainer, data)
    })

  } catch(err){
    console.err('카드 렌더링에 실패했습니다.');
  }

}
rendingCardList();







function handler(e){
  const listItem = e.target.closest('.card');
  const deleteButton = e.target.closest('a')
  e.preventDefault()
  if(!deleteButton || !listItem) return

  let id = attr(listItem,'data-index').slice(5);
  

  jihoon.delete(`http://localhost:3000/cards/${id}`).then(()=>{
    categoryListContainer.innerHTML = '';
    rendingCardList();
  })


}

categoryListContainer.addEventListener('click',handler);







const likeWrap = getNode('.like-wrap');

let currentStatus = false;
const likeCountNode = getNode('.like-count');
let likeCount = Number(likeCountNode.textContent);
let likeNumber = 0;
function likeHandler(e){
  
  e.preventDefault();

  let likeButton = e.target.closest('a');
  if(!likeButton) return;
  if(!currentStatus){
    addClass(likeButton,'is-active');
    clearContents(likeCountNode);
    likeCountNode.textContent = ++likeCount;
  } else{
    removeClass(likeButton,'is-active')
    clearContents(likeCountNode);
    likeCountNode.textContent = --likeCount;
  }
  currentStatus = !currentStatus


}

likeWrap.addEventListener('click',likeHandler);






