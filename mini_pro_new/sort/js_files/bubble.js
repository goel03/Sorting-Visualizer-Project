async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'rgba(10, 140, 221, 0.732)';
            ele[j+1].style.background = 'red';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'rgba(48, 248, 26, 0.732)';   //green
       
       
        
    }
    ele[0].style.background = 'rgba(48, 248, 26, 0.732)';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const audio = document.querySelector("#audio");
    audio.play();
    await bubble();
    audio.pause();
    audio.currentTime=0;
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
