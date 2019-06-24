import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const _import = require('./_import')
export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: _import("Home/Index")
        },
        {
            path: "/table",
            name: "table",
            component: _import("Date/Index")
        }
    ]
});