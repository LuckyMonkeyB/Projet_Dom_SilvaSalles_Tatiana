//°°°°°NAVBAR°°°°°

let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.nav_menu');
let navLink = document.querySelectorAll('.nav_link');
let dropdown_Toggler = document.querySelector('.dropdown_toggler');
let dropdown_menu = document.querySelector('.dropdown_menu');


let mobileNav = () =>{
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

let closeNav = () =>{
    burger.classList.remove('active');
    navMenu.classList.remove('active');
}

burger.addEventListener('click', mobileNav);

navLink.forEach((e) => e.addEventListener('click', closeNav));
navLink.forEach((e) => e.addEventListener('click', ()=>{
    if(e != dropdown_Toggler){
        dropdown_menu.style.display = 'none'
    }

}));

dropdown_Toggler.addEventListener('click', ()=>{
    dropdown_menu.style.display = (dropdown_menu.style.display === 'block')?'none':'block';
})

//?___active link___

navLink.forEach(link =>{
    link.addEventListener('click', (e)=>{
        navLink.forEach(link => link.classList.remove('activate'));
        e.target.classList.add('activate');
    })
})

//°°°°°TOP°°°°°



//°°°°°SERVICES°°°°°

let servicesItem = document.querySelectorAll('.servicesItem')

servicesItem.forEach(e =>{
    e.addEventListener('mouseover', ()=>{
        switch(e){
            case servicesItem[0]:
                servicesItem[0].style.backgroundColor= 'rgb(80, 173, 248)';
                break;
            case servicesItem[1]:
                servicesItem[1].style.backgroundColor= 'rgb(254, 155, 99)';
                break;
            case servicesItem[2]:
                servicesItem[2].style.backgroundColor= 'rgb(208, 0, 91)';
                break;
            case servicesItem[3]:
                servicesItem[3].style.backgroundColor= 'rgb(255, 178, 39)';
                break;
            case servicesItem[4]:
                servicesItem[4].style.backgroundColor= 'rgb(239, 79, 58)';
                break;
            case servicesItem[5]:
                servicesItem[5].style.backgroundColor= 'rgb(39, 217, 207)';
                break;
        }
        e.querySelector('h4').style.color = 'white'
        e.querySelector('p').style.color = 'white'
        e.querySelector('i').style.color = 'white'
    })
})

// servicesItem.forEach((item, index)=>{
//     item.addEventListener('mouseover', ()=>{
//         let colors = [
//             'rgb(80, 173, 248)',
//             'rgb(254, 155, 99)',
//             'rgb(208, 0, 91)',
//             'rgb(255, 178, 39)',
//             'rgb(239, 79, 58)',
//             'rgb(39, 217, 207)'
//         ];
//         item.style.backgroundColor = colors[index];
//         // item.style.color = 'white';
//         item.querySelectorAll('h4').style.color = 'white';
//         item.querySelectorAll('p').style.color = 'white';

//     })

// })

servicesItem.forEach(e =>{
    e.addEventListener('mouseleave', ()=>{
        switch(e){
            case servicesItem[0]:
                servicesItem[0].firstElementChild.style.color= 'rgb(80, 173, 248)';
                break;
            case servicesItem[1]:
                servicesItem[1].firstElementChild.style.color= 'rgb(254, 155, 99)';
                break;
            case servicesItem[2]:
                servicesItem[2].firstElementChild.style.color= 'rgb(208, 0, 91)';
                break;
            case servicesItem[3]:
                servicesItem[3].firstElementChild.style.color= 'rgb(255, 178, 39)';
                break;
            case servicesItem[4]:
                servicesItem[4].firstElementChild.style.color= 'rgb(239, 79, 58)';
                break;
            case servicesItem[5]:
                servicesItem[5].firstElementChild.style.color= 'rgb(39, 217, 207)';
                break;
        }
        Array.from(servicesItem).forEach(item =>{
            item.style.backgroundColor = 'white'
        })
        e.querySelector('h4').style.color = 'rgb(45, 73, 100)'
        e.querySelector('p').style.color = 'black'
    })
    
})

//°°°°°TESTIMONIALS°°°°°

let carouselContent = document.querySelector('.carouselContent')
let items = document.querySelectorAll('.carouselItem')
let pagination = document.querySelector('.pagination').querySelectorAll("span")
let slideWidth = items[0].clientWidth;

pagination.forEach(elements => {
    elements.addEventListener("click",(e)=>{
        pagination.forEach(element => {
            if(element.className.includes("active") && element != e.target){
                let indexActive = Array.from(pagination).indexOf(element);
                let indexClicked = Array.from(pagination).indexOf(e.target); 
                carouselContent.scrollLeft += (indexClicked - indexActive)*slideWidth;
                element.classList.remove("active");
                e.target.classList.add("active");
            }
        })
    })
})


//°°°°°TECH°°°°°

let tabsMenu = document.querySelector('.tabsMenu').children

Array.from(tabsMenu).forEach(tab =>{
    tab.addEventListener('click', ()=>{
        document.querySelectorAll('.tabsCase').forEach(box =>{
            box.classList.add('none')
        })
        document.querySelector(`.tab_${tab.className}`).classList.remove('none')
    })
})

//°°°°°PRICING°°°°°

let slider = document.querySelector('.slider')
let cost = document.querySelectorAll('.cost')
let month = document.querySelector('.month')
let year = document.querySelector('.year')



slider.addEventListener('click',()=>{
    slider.classList.toggle('switching')
    month.classList.toggle('switched')
    year.classList.toggle('switched')

    if(year.classList.contains('switched')){
        cost.forEach(price =>{
            price.innerHTML = price.innerHTML*10
            price.nextElementSibling.innerHTML = '/year'
        })
    }else{
        cost.forEach(price =>{
            price.innerHTML = price.innerHTML/10
            price.nextElementSibling.innerHTML = '/month'
        })
    }
})




//°°°°°FAQ°°°°°

let accordionHeader = document.querySelectorAll('.accordion_header');
let accordionContent = document.querySelectorAll('.accordion_content');
let iconChrevon = document.querySelectorAll('.chevron');

for(let i=0; i<accordionHeader.length; i++){
    accordionHeader[i].addEventListener('click', ()=>{
        if(parseInt(accordionContent[i].style.height) != accordionContent[i].scrollHeight){
            accordionContent[i].style.height = accordionContent[i].scrollHeight + 'px';
            accordionHeader[i].style.color= 'rgb(88,70,249)';
            iconChrevon[i].classList.remove('fa-chevron-down');
            iconChrevon[i].classList.add('fa-chevron-up');
        }else{
            accordionContent[i].style.height = '0px';
            accordionHeader[i].style.color= 'black';
            iconChrevon[i].classList.remove('fa-chevron-up');
            iconChrevon[i].classList.add('fa-chevron-down');

        }
        for(let j=0; j<accordionContent.length; j++){
            if(j != i){
                accordionContent[j].style.height ='0px';
                accordionHeader[j].style.color= 'black';
                iconChrevon[j].classList.remove('fa-chevron-up');
                iconChrevon[j].classList.add('fa-chevron-down');
    
            }
        }
    });
}





