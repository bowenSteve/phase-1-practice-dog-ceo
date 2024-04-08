document.addEventListener('DOMContentLoaded',()=>{
    fetchImages();
    dogBreed();

})

function fetchImages(){
        const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
        fetch(imgUrl)
        .then(response=>response.json())
        .then(images=>{
        images.message.forEach((img) => {
            displayImage(img);
    });
})
function displayImage(img){
    const dogImage= document.createElement('img')
    document.getElementById('dog-image-container').appendChild(dogImage)
    dogImage.src=img; 
}
    }
function dogBreed(){
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json())
        .then(breed => {
            let breeds = Object.keys(breed.message);
            breeds.forEach(myBreeds => {
                displayDogBreed(myBreeds);
                myDropDown(breeds);
            });
        });
    
        function displayDogBreed(breed){
            let li = document.createElement('li');
            document.getElementById('dog-breeds').appendChild(li);
            li.innerText = breed;
            li.style.cursor = 'pointer';
            li.addEventListener('click', function(){
                li.style.color = 'brown';
            });
        }
    
        function myDropDown(breeds) {
            let newList = document.getElementById('dog-breeds');
            document.getElementById('breed-dropdown').addEventListener('change', function(event){
                let selectedLetter = event.target.value;
                while (newList.hasChildNodes()) {
                    newList.removeChild(newList.firstChild);
                }
                breeds.forEach(breed => {
                    if (breed.charAt(0).toLowerCase() === selectedLetter.toLowerCase()) {
                        displayDogBreed(breed);
                    }
                });
            });
        }
    }
    


    