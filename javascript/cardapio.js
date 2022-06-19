function chooseTab(index){
    let tabs = document.getElementsByClassName("tab-item")
    let tabActive = document.getElementsByClassName('tab-active')
    tabActive[0].classList.remove('tab-active')
    // tab[index].classList.remove('dish-active');

    tabs[index].classList.add('tab-active');;


}

function chooseDish(index){
    let dishes = document.getElementsByClassName("dish")
    let dishActive = document.getElementsByClassName('dish-active')
    dishActive[0].classList.remove('dish-active')

    dishes[index].classList.add('dish-active');;
    // dish-active
}


function showChoise(index){
    chooseTab(index)
    chooseDish(index)
}

let url = window.location.search;
let urlParams = new URLSearchParams(url); 
// choise = parseInt(choise.slice(-1))
choise = page_type = parseInt(urlParams.get('choise'))

showChoise(choise)
