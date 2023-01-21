
import { delayP, getNode, jihoon, renderCard } from './lib/index.js'



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






