
/* FUNKTION TIL NYHEDSBREV VERIFY */
function validateCheckbox() {
    var checkbox = document.getElementById("accepter");
    
    if (!checkbox.checked) {
      alert("Du skal acceptere vilkår og betingelser for at tilmelde dig nyhedsbrevet.");
    } else {
      alert("Tilmelding fuldført!");
    }
  }



  /* familiekasse dropdown */



const dropdownsOriginal = document.querySelectorAll('.dropdown');

dropdownsOriginal.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => {
                opt.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});

/* dropdownbyt */ 
const dropdownsByt = document.querySelectorAll('.dropdownbyt');

dropdownsByt.forEach(dropdown => {
    const selectByt = dropdown.querySelector('.selectbyt');
    const caretByt = dropdown.querySelector('.caretbyt');
    const menuByt = dropdown.querySelector('.menubyt');
    const optionsByt = dropdown.querySelectorAll('.menubyt li');
    const selectedByt = dropdown.querySelector('.selectedbyt');

    selectByt.addEventListener('click', () => {
        selectByt.classList.toggle('selectbyt-clicked');
        caretByt.classList.toggle('caretbyt-rotate');
        menuByt.classList.toggle('menubyt-open');
    });

    optionsByt.forEach(option => {
        option.addEventListener('click', () => {
            selectedByt.innerText = option.innerText;

            selectByt.classList.remove('selectbyt-clicked');
            caretByt.classList.remove('caretbyt-rotate');
            menuByt.classList.remove('menubyt-open');

            optionsByt.forEach(opt => {
                opt.classList.remove('activebyt');
            });

            option.classList.add('activebyt');
        });
    });
});


/* Tilpasning af pris på måltidskasse */
document.addEventListener('DOMContentLoaded', function () {
    initializeSelectedButtons();
});

function initializeSelectedButtons() {
    /* få klik event til at ske på de valgte knapper */
    document.querySelectorAll('.knapper .valgt').forEach(button => {
        button.click();
    });
}

function updatePrice(category, selectedValue) {
    /* få de valgte egenskaber fra begge kategorier */
    const selectedPeople = document.querySelector('.knapper.people button.valgt');
    const selectedItems = document.querySelector('.knapper.items button.valgt');

    /* Regn total prisen baseret på de valgte values */
    const totalPeople = selectedPeople ? parseInt(selectedPeople.getAttribute('data-value')) : 1;
    const totalItems = selectedItems ? parseInt(selectedItems.getAttribute('data-value')) : 1;

    const pricePerPerson = 87; 
    const totalPrice = totalPeople * (totalItems * pricePerPerson);

    /* få fat i variebelpris elementet */
    const variabelprisElement = document.querySelector('.variabelpris');

    /* opdatér textcontent af variabelpris med den udregnede pris */
    variabelprisElement.textContent = totalPrice + ' kr.';

    /* fravælg alle knapper */
    document.querySelectorAll(`.knapper.${category} button`).forEach(btn => btn.classList.remove('valgt'));

    /* vælg den valgte knap */
    document.querySelector(`.knapper.${category} button[data-value="${selectedValue}"]`).classList.add('valgt');
}















/*
When a button in either the "Number of People" or "Number of Items" category is clicked, the updatePrice function is called.

The function retrieves the selected values from both categories.

It uses the selected values to look up the corresponding prices in the respective price maps (peoplePriceMap and itemsPriceMap).

It calculates the total price by summing up the prices from both categories.

Finally, it updates the content of the .variabelpris element with the calculated total price.*/