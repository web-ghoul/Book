var btn = document.getElementById('btn')
var modal = document.getElementById('addBookModal')
var body = document.getElementById('body')
var from = document.getElementById('addBookForm')
var title = document.getElementById('title')
var author = document.getElementById('author')
var pages = document.getElementById('pages')
var read = document.getElementById('isRead').checked
btn.addEventListener('click', function () {
  modal.style.transform = 'translate(-50%, -50%) scale(1)'
})

var arr;
if (localStorage.getItem('book')) {
  arr = JSON.parse(localStorage.getItem('book'))
  console.log(1)
}
else{
  arr=[]
}
function showData() {
  
    var table = ''
    for (var i = 0; i < arr.length; i++){
      table += `<tr>
            <td>${arr[i].title}</td>
            <td>${arr[i].author}</td>
            <td>${arr[i].pages}</td>
            <td>${arr[i].readable}</td>
          </tr>`
    }
    body.innerHTML=table
  
}

function filter() {
  title.value=''
  author.value=''
  pages.value = ''
  read = false
}



from.onsubmit = function (e) {
  e.preventDefault()
  let newData = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    readable:read ? 'read' : 'not read'
  }
  arr.push(newData)
  localStorage.setItem('book', JSON.stringify(arr))
  
  modal.style.transform = 'translate(-50%, -50%) scale(0)'
  showData()
filter()
}
  showData()
filter()