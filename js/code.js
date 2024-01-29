//if user add note,add it to the localstorage

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    arr = [];
  } else {
    arr = JSON.parse(notes);
  }

  arr.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(arr));
  addTxt.value = "";
  console.log(arr);
  showNotes();
});

//function to show element from localStorage
function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    arr = [];
  } else {
    arr = JSON.parse(notes);
  }

  let html = "";

  arr.forEach(function (ele, index) {
    html += `
  <div class="card my-3 mx-3 noteCard" style="width:18rem;">
  <div class="card-body">
      <h5 class="card-title">Note ${index + 1}</h5>
      <div class="mb-3">
          <p class="card-text">${ele}</p>

      </div>
      <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary" id="addBtn">Delete Note</button>
  </div>
</div>
  `;
  });   

  let noteEle = document.getElementById("notes");
  if (arr.length != 0) {
    noteEle.innerHTML = html;
  } else {
    noteEle.innerHTML = `Nothing to show! Use "Add a Note" section above to add note`;
  }
}

//function to Delete Note
function deleteNote(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      arr = [];
    } else {
      arr = JSON.parse(notes);
    }

    arr.splice(index, 1);      //splice method same like a substring ,index is start a element and 1 is how many element are delete.
    localStorage.setItem("notes", JSON.stringify(arr));  //This line use to Update a LocalStorage.
    showNotes();
}

//search to filtering notes 
let search=document.getElementById('searchTxt');
search.addEventListener("input", function(){
   let inputVal=search.value;
   let noteCards = document.getElementsByClassName('noteCard');

   Array.from(noteCards).forEach(function(element){
     let cardText=element.getElementsByTagName("p")[0].innerText;
     if(cardText.includes(inputVal)){
      element.style.display="block";
     }
     else{
      element.style.display="none";
     }
   })
   
})
