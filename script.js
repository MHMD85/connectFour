let fields = document.querySelectorAll('td');
let firstRow = document.querySelectorAll('.fir');
let secondRow = document.querySelectorAll('.sec');
let thirdRow = document.querySelectorAll('.thi');
let fourthRow = document.querySelectorAll('.fou');
let fiftRow = document.querySelectorAll('.fif');
let sixtRow = document.querySelectorAll('.six');
let seventhRow = document.querySelectorAll('.sev');
let count = 0;

fields.forEach((field) => {
    field.classList.add('active')
    field.addEventListener('click', function (e) {
        count++;
        if (e.target.classList.contains('active')) {
            if (count % 2 === 0) {
                e.target.style.backgroundColor = 'pink';
                
            }
            else {
                e.target.style.backgroundColor = 'lightblue';
            }
            e.target.classList.remove('active')
        }
        


    })
})