/**
 * Created by bgllj on 2016/7/5.
 */

import Vue from "vue";
// import lodash from "lodash";



// window._ = lodash;
window.cs = new CSInterface();
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})


var gExtensionID = cs.getExtensionID();
cs.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);

function PhotoshopCallbackUnique(csEvent)
{
    console.log(csEvent);
    alert("xxxxx")
}