
const menuItems = document.querySelectorAll('.menu-item');
const notifyMessage = document.getElementById('notification-message')
const messages = document.querySelector('.messages');
const post_messages = document.querySelectorAll('.message');
const searchbox = document.querySelector('#message-search');
const customiseTheme = document.querySelector('.customize-theme')
const theme = document.querySelector('#theme')
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span')
const Bg1 =document.querySelector('.bg-1')
const Bg2 =document.querySelector('.bg-2')
const Bg3 =document.querySelector('.bg-3')
let root = document.querySelector(':root');


const removeActive = ()=>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        removeActive();
        item.classList.toggle('active')
      
    //  removeActive();
    //  item.classList.add('active');

     if(item.id === 'notifications'){
        document.querySelector('.notification-popup').style.display = 'block'; 
        document.querySelector('.notification-count').style.display = 'none';

     }else{
        document.querySelector('.notification-popup').style.display = 'none';
     }
    })
})
notifyMessage.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    notifyMessage.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
let message_post = () => {
    post_messages.forEach(chat =>{
        const val = searchbox.value.toLowerCase();
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display='flex';  
        }else{
            chat.style.display='none'; 
        }
    })
}
searchbox.addEventListener('keyup', message_post);

//  OPEN MODAL  
addThemeModal = () =>{
    customiseTheme.style.display='grid'
}
theme.addEventListener('click', addThemeModal);

// CLOSE MODAL
const closeThemeModal = (event) => {
    if(event.target.classList.contains('customize-theme')){
        customiseTheme.style.display='none'
    }
}
customiseTheme.addEventListener('click', closeThemeModal)

// ========== FONTS ==================

const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click', ()=>{
        removeSizeSelector();
        let fontsSize;
        size.classList.toggle('active')
    if(size.classList.contains('font-size-1')){
        fontsSize = '10px'
        root.style.setProperty('--sticky-top-left', '5.4rem')
        root.style.setProperty('--sticky-top-right', '5.4rem')
    }
    else if(size.classList.contains('font-size-2')){
        fontsSize = '13px'
        root.style.setProperty('--sticky-top-left', '5.4rem')
        root.style.setProperty('--sticky-top-right', '-7rem')
    }
    else if(size.classList.contains('font-size-3')){
        fontsSize = '16px'
        root.style.setProperty('--sticky-top-left', '-2rem')
        root.style.setProperty('--sticky-top-right', '-17rem')
    }
    else if(size.classList.contains('font-size-4')){
        fontsSize = '19px'
        root.style.setProperty('--sticky-top-left', '-5rem')
        root.style.setProperty('--sticky-top-right', '-25rem')
    }
    else if(size.classList.contains('font-size-5')){
        fontsSize = '22px'
        root.style.setProperty('--sticky-top-left', '-12rem')
        root.style.setProperty('--sticky-top-right', '-35rem')
    }

    document.querySelector('html').style.fontSize = 'fontSize';
    })

})
// Remove active class from colors
const changeActiveColor = () =>{
colorPalette.forEach(colorPicker =>{
    colorPicker.classList.remove('active')
})
}
//  Change primary Colors
colorPalette.forEach(color => {
    color.addEventListener('click', ()=>{
        let primaryHu;
        if(color.classList.contains('color-1')){
            primaryHue =252;
        }else if(color.classList.contains('color-2')){
            primaryHue =52;
        }else if(color.classList.contains('color-3')){
            primaryHue =352;
        }else if(color.classList.contains('color-4')){
            primaryHue =152;
        }else if(color.classList.contains('color-5')){
            primaryHue =202;
        }
        changeActiveColor();
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//  Theme Background values
let lightColorLightness;
let whitetColorLightness;
let darkColorLightness;

// Change background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness)
    root.style.setProperty('--white-color-lightness', whitetColorLightness)
    root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', ()=>{
    // add active class
    Bg1.classList.add('active');
    // Remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whitetColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    Bg2.classList.add('active');
    // Remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
})

Bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whitetColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    Bg3.classList.add('active');
    // Remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
})