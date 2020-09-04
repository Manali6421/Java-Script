(
    function(){
        
        function changeColor(containerColor, textColor, boxColor){
            document.documentElement.style.setProperty('--containerBackground', containerColor);
            document.documentElement.style.setProperty('--textColor', textColor);
            document.documentElement.style.setProperty('--boxColor', boxColor);
        }


        const basic = document.querySelector('.box > .box-1 > .themes > .default');
        const pink = document.querySelector('.box > .box-1 > .themes > .pink');
        const green = document.querySelector('.box > .box-1 > .themes > .green');
        const maroon = document.querySelector('.box > .box-1 > .themes > .maroon');

        basic.addEventListener('click', () => {
            changeColor('white', 'black', 'white');
        });

        pink.addEventListener('click', () => {
            changeColor('#FFB6C1', 'white', '#FF69B4');
        });

        green.addEventListener('click', () => {
            changeColor('#6B8E23', 'white', '#006400');
        });

        maroon.addEventListener('click', () => {
            changeColor('#A52A2A', 'white', '#800000');
        });
    }
)()