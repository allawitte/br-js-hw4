const contacts = JSON.parse(loadContacts());
const listPreview = document.querySelectorAll('ul.contacts-list')[0];
var listDetails = document.querySelectorAll('.details-view ul')[0];

function createPrevList(contacts) {

    return contacts.reduce((sum, item) => {
       return sum = sum + '<li data-email="'+ item.email + '" data-phone="' + item.phone + '"><strong>' + item.name + '</strong></li>';
    },'');
}

listPreview.innerHTML = createPrevList(contacts);

/**
 * Created by Alla on 7/12/2017.
 */
