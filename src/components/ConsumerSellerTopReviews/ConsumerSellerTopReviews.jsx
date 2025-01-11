import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../../utils/amazon_data.json'
import './ConsumerSellerTopReviews.scss'

function ConsumerSellerTopReviews() {
  const [positiveReviews, setPositiveReviews] = useState(null);
  const [negativeReviews, setNegativeReviews] = useState(null);

  const filterOptions = () => {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("items-search");
    const p = div.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
      let txtValue = p[i].textContent || p[i].innerText;
      const list = document.getElementById('options-list')
      if (filter) {
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          list.style.display = "block";
          p[i].style.display = "block";
        } else {
          list.style.display = "block";
          p[i].style.display = "none";
        }
      } else if (!filter) {
        p[i].style.display = "none";
        list.style.display = "none";
      }

    }
  }

  const optionSelect = (e) => {
    const inputChoice = document.getElementById('myInput');
    inputChoice.value = e.target.textContent;
    document.getElementById('options-list').style.display = 'none';
  }

  const formHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className='top-reviews'>
      <h1 className='top-reviews__title'>Consumer Seller Top Reviews</h1>

      <form className='top-reviews__form' id='reviewsForm' onSubmit={formHandler}>
        <label htmlFor='review-item' className='top-reviews__form__label'>Select an item to display top reviews:</label>
        <div id='items-search'>
          <input type="text" placeholder="Search.." id="myInput"  className='top-reviews__form__search' onKeyUp={filterOptions}/>
          <div className='top-reviews__form__search__options-list' id='options-list'>
            {
              data.map((item) => (
                <p key={uuidv4()} id='options' className='top-reviews__form__search__options-list__options' onClick={optionSelect}>{item.itemName}</p>
                )
              )
            }
          </div>
        </div>
        <button type='button' class='top-reviews__form__button'>Submit</button>
      </form>

      <div className='top-reviews__notes'>
        <h2 className='top-reviews__notes__title'>Notes</h2>
        <p className='top-reviews__notes__desc'>
          A sample of positve and negative words filtered out for sample Amazon items.
          The complete data can be viewed within the tableau dashboard section.
        </p>
      </div>
    </section>
  )
}

export default ConsumerSellerTopReviews;