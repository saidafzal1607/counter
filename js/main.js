let count = 0 ;

let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');


btns.forEach(function (item) {
    item.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count --;

        }
        else if(styles.contains('increase')){
            count ++;
        }
        else{
            count = 0;
        }
        value.textContent = count;
        
        if(count > 0){
            value.style.color = 'green';
        }
        else if(count < 0){
            value.style.color = 'red';
        }
        else{
            value.style.color = 'blue';
        }
    })
})
