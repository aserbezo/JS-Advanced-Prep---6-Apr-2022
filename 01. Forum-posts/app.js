window.addEventListener("load", solve)
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images
function solve() {
  const input = {
    title: document.getElementById('post-title'),
    category: document.getElementById('post-category'),
    content: document.getElementById('post-content')
  };
  // for reading  input.title.value
  const lists = {
    review: document.getElementById('review-list') ,
    published: document.getElementById('published-list')
  };
  document.getElementById('publish-btn').addEventListener('click', publish)
  document.getElementById('clear-btn').addEventListener('click', clear)

 

  function publish(event){
    event.preventDefault()

    // read input fileds 
    const title = input.title.value
    const category = input.category.value
    const content = input.content.value
    // validate input
    if (title == "" || category == "" || content == "" ){
      return;
    }
    // create list item
    const li = document.createElement('li');
    li.className = 'rpost';
    li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class ="action-btn edit">Edit</button>
    <button class ="action-btn approve">Approve</button>`;


    // append to first list
    lists.review.appendChild(li)
    // clear input filds 
    input.title.value = ""
    input.category.value = ""
    input.content.value = ""
    // add functionality to buttons 
    const editBtn = li.querySelector('.edit')
    const approveBtn = li.querySelector('.approve')
    editBtn.addEventListener('click', edit)
    approveBtn.addEventListener('click', approve)
    function edit(){
      // populate input fileds with values
      input.title.value = title
      input.category.value = category
      input.content.value = content
      

      // remove list item from list 
      li.remove()
    }
    function approve() {
      // move list item from first list to second list
      lists.published.appendChild(li)
      // remove actions buttons 
      editBtn.remove()
      approveBtn.remove()
    }
  }

 

  

  function clear() {
    // set second list HTML to empty string  
    lists.published.innerHTML = ""
  }
}
