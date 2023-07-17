async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'rgba(48, 248, 26, 0.732)';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'rgba(10, 140, 221, 0.732)';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'rgba(10, 140, 221, 0.732)';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'rgba(48, 248, 26, 0.732)';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'rgba(48, 248, 26, 0.732)';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    const audio = document.querySelector("#audio");
    audio.play();
    await insertion();
    audio.pause();
    audio.currentTime=0;
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


