import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';

// Import fontawesome from static resource
import fontAwesomeResource from '@salesforce/resourceUrl/fontawesome5';

export default class FontAwesome extends LightningElement {

fontawesomeLoaded = false;

connectedCallback() {
    console.log("FontAwesome connectedCallback called");

    Promise.all([
        loadStyle(this, fontAwesomeResource + "/css/all.min.css")
    ]).then(() => {
    console.log("FontAwesome LOADED");
    this.fontawesomeLoaded = true;
});
}
}