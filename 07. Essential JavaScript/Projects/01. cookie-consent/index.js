const modal = document.getElementById('modal')
const closeButton = document.getElementById('modal-close-btn')
 
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

closeButton.addEventListener('click', function() {
    modal.style.display = 'none'
})