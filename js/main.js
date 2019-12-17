const form = $('#price-form');

let formData = form.serializeJSON();
//console.log(formData.type);
showHideBlocks();

// Змінили дані в формі
form.on('keyup change', 'input, select, textarea', function () {
    //console.log('Fired!');
    // Заново отримали обновлені дані з форми
    formData = form.serializeJSON();
    //console.log(formData);

    //сховали/Показали блоки на основі дій користувача
    showHideBlocks();
    formData = form.serializeJSON();
    //console.log(formData);
    // обновлюємо ціну на сторінці

    updatePrice(calculanePrice());
    updatePriceR(calculanePriceR());


});


function showHideBlocks() {
    if (formData.type == 'site') {
        $('[data-name="pages"]').show();
        $('[data-name="landing"]').hide();
        $('[name="sections"]').val('0');
    } else {
        $('[data-name="pages"]').hide();
        $('[data-name="landing"]').show();
        $('[data-name="pages"] input').val('0');
    }

    if (formData.mobile == 'on') {
        $('[data-name="mobile"]').show();
    } else {
        $('[data-name="mobile"]').hide();
        $('[name="mobile-number"]')[0].checked = true;
        $('[name="mobile-number"]')[1].checked = false;
        $('[name="mobile-number"]')[2].checked = false;
    }
}

function calculanePrice() {
    //Розраховуємо ціну
    let totalPriceu = 0;
    let totalPricer = 0;
    totalPriceu =
        formData['pages-unique'] * 1500 +
        formData['pages-general'] * 950 +
        formData['sections'] * 750 +
        formData['carousel'] * 450 +
        formData['modals'] * 350 +
        formData['forms'] * 550;
    totalPricer =
        formData['pages-unique'] * 4000 +
        formData['pages-general'] * 2500 +
        formData['sections'] * 2000 +
        formData['carousel'] * 1200 +
        formData['modals'] * 900 +
        formData['forms'] * 1500;

    // console.log(totalPriceu);
    // console.log(totalPricer);

    //Мобільний мультиплікатор
    let multiplicatorMobile = 1;
    if (formData['mobile-number'] == 2) {
        multiplicatorMobile = 1.3;
    } else if (formData['mobile-number'] == 3) {
        multiplicatorMobile = 1.5;
    }

    // PixelPerfect мультиплікатор
    let mPixelPerfect = 1;
    if (formData['pixelPerfect'] == 'on') {
        mPixelPerfect = 1.2;
    }

    // Retina ready мультиплікатор
    let mRetinaReady = 1;
    if (formData['retineReady'] == 'on') {
        mRetinaReady = 1.2;
    }

    // googlePageSpeed мультиплікатор
    let mGooglePageSpeed = 1;
    if (formData['googlePageSpeed'] == 'on') {
        mGooglePageSpeed = 1.2;
    }

    // Urgent Order мультиплікатор
    let mUrgentOrder = 1;
    if (formData['urgentOrder'] == 'on') {
        mUrgentOrder = 1.2;
    }

    totalPriceu =
        totalPriceu * multiplicatorMobile *
        mPixelPerfect * mRetinaReady * mGooglePageSpeed * mUrgentOrder;


    return totalPriceu.toFixed(2);
}

function calculanePriceR() {

    let totalPricer = 0;
    totalPricer =
        formData['pages-unique'] * 4000 +
        formData['pages-general'] * 2500 +
        formData['sections'] * 2000 +
        formData['carousel'] * 1200 +
        formData['modals'] * 900 +
        formData['forms'] * 1500;


    //Мобільний мультиплікатор
    let multiplicatorMobile = 1;
    if (formData['mobile-number'] == 2) {
        multiplicatorMobile = 1.3;
    } else if (formData['mobile-number'] == 3) {
        multiplicatorMobile = 1.5;
    }

    // PixelPerfect мультиплікатор
    let mPixelPerfect = 1;
    if (formData['pixelPerfect'] == 'on') {
        mPixelPerfect = 1.2;
    }

    // Retina ready мультиплікатор
    let mRetinaReady = 1;
    if (formData['retineReady'] == 'on') {
        mRetinaReady = 1.2;
    }

    // googlePageSpeed мультиплікатор
    let mGooglePageSpeed = 1;
    if (formData['googlePageSpeed'] == 'on') {
        mGooglePageSpeed = 1.2;
    }

    // Urgent Order мультиплікатор
    let mUrgentOrder = 1;
    if (formData['urgentOrder'] == 'on') {
        mUrgentOrder = 1.2;
    }

    totalPricer =
        totalPricer * multiplicatorMobile *
        mPixelPerfect * mRetinaReady * mGooglePageSpeed * mUrgentOrder;



    return totalPricer.toFixed(2);
}

function updatePrice(priceu) {
    $('#total-price').text(parseFloat(priceu).toLocaleString());
}

function updatePriceR(pricer) {
    $('#total-pricer').text(parseFloat(pricer).toLocaleString());
}


// form.click(function () {
//     console.log('Click!');
// });


// if () {

// }