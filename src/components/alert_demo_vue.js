import Vue from 'vue';
import loadingVue from './loading.vue';



const Loading = Vue.extend(loadingVue);

let loadingSingleInstance = null;

const show = () => {
    if (loadingSingleInstance) {
        return;
    }
    loadingSingleInstance = new Loading({
        el: document.createElement('div'),
        mixins: [{
            destroyed() {
                loadingSingleInstance.$el.remove();
                loadingSingleInstance = null;
            }
        }]
    });

    document.body.appendChild(loadingSingleInstance.$el);
};

const hide = () => {
    if (loadingSingleInstance === null) {
        return;
    }
    loadingSingleInstance.show = false;
};

const isShow = () => {
    return loadingSingleInstance && loadingSingleInstance.show;
};


export default {
    show,
    hide,
    isShow
};