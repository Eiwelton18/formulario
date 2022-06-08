import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Panel from 'primevue/panel';
import Calendar from 'primevue/calendar';
import InputMask from 'primevue/inputmask';
import AutoComplete from 'primevue/autocomplete';
import InputText from 'primevue/inputtext';
import TreeSelect from 'primevue/treeselect';



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'



const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);

app.component('TreeSelect', TreeSelect);
app.component('Inputtext', InputText);
app.component('AutoComplete', AutoComplete);
app.component('Calendar', Calendar);
app.component('InputMask', InputMask);
app.component('Panel', Panel);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Toast', Toast);
app.mount('#app')

