webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		"./src/app/admin/admin.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/activities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.activities {\n  list-style:none;\n  width: 90%;\n  margin:1em 5%;\n  background-color: #f2f2f2;\n  padding: 0;\n}\n\nul.activities li {\n  list-style:none;\n  padding: 0.3em 0.5em;\n  font-size: 2em;\n  border-bottom: 1px solid #ccc;\n  font-family: 'Slabo 27px', serif;\n}\n\nul.activities li:nth-child(2n) {\n  background-color:#f2f2f2;\n}\n\nul.activities li:hover {\n  background-color: #ccc;\n}\n\nul.activities li .points {\n  float:right;\n}\n\nul.activities li:last-child {\n  border-bottom: none;\n}\n\nfooter {\n  width: 100%;\n  background-color: #F29F4A;\n  color: #333;\n  font-family: Arial;\n  font-weight: bold;\n  overflow: hidden;\n  padding: 0.2em;\n  position:fixed;\n  bottom:0px;\n  left: 0px;\n}\n\nfooter span {\n  display:inline-block;\n  font-size:1.5em;\n}\n\nfooter .team-name {\n  float:left;\n  width:70%;\n  text-align:left;\n  padding-left: 0.5em;\n}\n\nfooter .team-points {\n  float:right;\n  width:30%;\n  text-align:right;\n  padding-right:0.5em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/activities.component.html":
/***/ (function(module, exports) {

module.exports = "<header><h1>Välj aktivitet</h1></header>\n<ul class=\"activities\">\n  <li *ngFor=\"let activity of activities | async\"\n      (click)=\"onClick(activity)\">\n    {{activity.name}}\n    <span class=\"points\">{{activity.points}}</span>\n  </li>\n</ul>\n<footer>\n  <span class=\"team-name\">{{teamName}}</span>\n  <span class=\"team-points\">{{teamPoints}}</span>\n</footer>\n"

/***/ }),

/***/ "./src/app/activities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_service__ = __webpack_require__("./src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_service__ = __webpack_require__("./src/app/team.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActivitiesComponent = (function () {
    function ActivitiesComponent(activityService, router, shared, teamService) {
        this.activityService = activityService;
        this.router = router;
        this.shared = shared;
        this.teamService = teamService;
        this.activities = activityService.getActivities();
    }
    ActivitiesComponent.prototype.onClick = function (activity) {
        this.router.navigate(['./activity', activity.$key]);
    };
    ActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.shared.teamName === null) {
            console.log('Redirect to team');
            this.router.navigate(['./team']);
        }
        this.teamName = this.shared.teamName;
        this.teamService.getTeam(this.teamName).subscribe(function (team) {
            console.log(team);
            if (team) {
                _this.teamPoints = team.points;
            }
        });
    };
    return ActivitiesComponent;
}());
ActivitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'my-activities',
        template: __webpack_require__("./src/app/activities.component.html"),
        styles: [__webpack_require__("./src/app/activities.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]) === "function" && _d || Object])
], ActivitiesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=activities.component.js.map

/***/ }),

/***/ "./src/app/activity-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header.detail {\n  position:relative;\n}\n\n.back-icon {\n  position:absolute;\n  top:0.1em;\n  left:0px;\n  padding: 0.5em;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.description {\n  width: 90%;\n  margin: 1em 5%;\n  padding: 5%;\n  background-color: #f2f2f2;\n  font-family: 'Slabo 27px', serif;\n  font-size: 1.5em;\n}\n\n.points {\n  color: #F29F4A;\n  font-size: 8em;\n  text-align:center;\n  margin: 0.5em auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/activity-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"activity\">\n  <header class=\"detail\"><span class=\"back-icon fa fa-chevron-circle-left\" (click)=\"goBack()\"></span><h1>{{activity.name}}</h1></header>\n  <div class=\"description\" [innerHTML]=\"activity.description\"></div>\n  <div class=\"points\">{{activity.points}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/activity-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity__ = __webpack_require__("./src/app/activity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_service__ = __webpack_require__("./src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActivityDetailComponent = (function () {
    function ActivityDetailComponent(activityService, route, location) {
        this.activityService = activityService;
        this.route = route;
        this.location = location;
    }
    ActivityDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.activityService.getActivity(params['key']); })
            .subscribe(function (activity) { return _this.activity = activity; });
    };
    ActivityDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ActivityDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity__["a" /* Activity */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activity__["a" /* Activity */]) === "function" && _a || Object)
], ActivityDetailComponent.prototype, "activity", void 0);
ActivityDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'activity-detail',
        template: __webpack_require__("./src/app/activity-detail.component.html"),
        styles: [__webpack_require__("./src/app/activity-detail.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__activity_service__["a" /* ActivityService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__activity_service__["a" /* ActivityService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* Location */]) === "function" && _d || Object])
], ActivityDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=activity-detail.component.js.map

/***/ }),

/***/ "./src/app/activity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity__ = __webpack_require__("./src/app/activity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ActivityService = (function () {
    function ActivityService(db) {
        this.db = db;
        this.activities = db.list('/activities');
    }
    ActivityService.prototype.getActivities = function () {
        return this.activities.map(__WEBPACK_IMPORTED_MODULE_1__activity__["a" /* Activity */].fromJsonList);
    };
    ActivityService.prototype.getActivity = function (key) {
        return this.getActivities().map(function (activities) { return activities.find(function (activity) { return activity.$key === key; }); });
    };
    return ActivityService;
}());
ActivityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ActivityService);

var _a;
//# sourceMappingURL=activity.service.js.map

/***/ }),

/***/ "./src/app/activity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Activity; });
var Activity = (function () {
    function Activity(id, name, description, points, $ref, $key) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.points = points;
        this.$ref = $ref;
        this.$key = $key;
    }
    Activity.fromJsonList = function (array) {
        return array.map(Activity.fromJson);
    };
    Activity.fromJson = function (_a) {
        var id = _a.id, name = _a.name, description = _a.description, points = _a.points, $ref = _a.$ref, $key = _a.$key;
        return new Activity(id, name, description, points, $ref, $key);
    };
    return Activity;
}());

//# sourceMappingURL=activity.js.map

/***/ }),

/***/ "./src/app/admin/admin-dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AdminDashboardComponent = (function () {
    function AdminDashboardComponent() {
    }
    return AdminDashboardComponent;
}());
AdminDashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: "\n    <p>Dashboard</p>\n  "
    })
], AdminDashboardComponent);

//# sourceMappingURL=admin-dashboard.component.js.map

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__select_activity_select_activity_component__ = __webpack_require__("./src/app/admin/select-activity/select-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_team_select_team_component__ = __webpack_require__("./src/app/admin/select-team/select-team.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var adminRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__select_activity_select_activity_component__["a" /* SelectActivityComponent */] },
                    { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_4__select_activity_select_activity_component__["a" /* SelectActivityComponent */] },
                    { path: 'team/:activity', component: __WEBPACK_IMPORTED_MODULE_5__select_team_select_team_component__["a" /* SelectTeamComponent */] }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("./src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("./src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__ = __webpack_require__("./src/app/admin/admin-dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__select_activity_select_activity_component__ = __webpack_require__("./src/app/admin/select-activity/select-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__select_team_select_team_component__ = __webpack_require__("./src/app/admin/select-team/select-team.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */], __WEBPACK_IMPORTED_MODULE_4__admin_dashboard_component__["a" /* AdminDashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__select_activity_select_activity_component__["a" /* SelectActivityComponent */], __WEBPACK_IMPORTED_MODULE_6__select_team_select_team_component__["a" /* SelectTeamComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "./src/app/admin/select-activity/select-activity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.activities {\n  list-style:none;\n  width: 90%;\n  margin:1em 5%;\n  background-color: #f2f2f2;\n  padding: 0;\n}\n\nul.activities li {\n  list-style:none;\n  padding: 0.3em 0.5em;\n  font-size: 2em;\n  border-bottom: 1px solid #ccc;\n  font-family: 'Slabo 27px', serif;\n}\n\nul.activities li:nth-child(2n) {\n  background-color:#f2f2f2;\n}\n\nul.activities li:hover {\n  background-color: #ccc;\n}\n\nul.activities li .points {\n  float:right;\n}\n\nul.activities li:last-child {\n  border-bottom: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/admin/select-activity/select-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<header><h1>Välj aktivitet</h1></header>\n<ul class=\"activities\">\n  <li *ngFor=\"let activity of activities | async\"\n      (click)=\"onClick(activity)\">\n    {{activity.name}}\n    <span class=\"points\">{{activity.points}}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/select-activity/select-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_service__ = __webpack_require__("./src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_service__ = __webpack_require__("./src/app/team.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SelectActivityComponent = (function () {
    function SelectActivityComponent(activityService, router, shared, teamService) {
        this.activityService = activityService;
        this.router = router;
        this.shared = shared;
        this.teamService = teamService;
        this.activities = activityService.getActivities();
    }
    SelectActivityComponent.prototype.onClick = function (activity) {
        this.router.navigate(['./admin/team', activity.$key]);
    };
    SelectActivityComponent.prototype.ngOnInit = function () { };
    return SelectActivityComponent;
}());
SelectActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-select-activity',
        template: __webpack_require__("./src/app/admin/select-activity/select-activity.component.html"),
        styles: [__webpack_require__("./src/app/admin/select-activity/select-activity.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]) === "function" && _d || Object])
], SelectActivityComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=select-activity.component.js.map

/***/ }),

/***/ "./src/app/admin/select-team/select-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul.activities {\n  list-style:none;\n  width: 90%;\n  margin:1em 5%;\n  background-color: #f2f2f2;\n  padding: 0;\n}\n\nul.activities li {\n  list-style:none;\n  padding: 0.3em 0.5em;\n  font-size: 2em;\n  border-bottom: 1px solid #ccc;\n  font-family: 'Slabo 27px', serif;\n}\n\nul.activities li:nth-child(2n) {\n  background-color:#f2f2f2;\n}\n\nul.activities li.pointsGiven, ul.activities li.pointsGiven:hover {\n  background-color: #27ae60;\n}\n\nul.activities li:hover {\n  background-color: #ccc;\n}\n\nul.activities li .points {\n  float:right;\n}\n\nul.activities li:last-child {\n  border-bottom: none;\n}\n\n.back-icon {\n  position:absolute;\n  top:0.1em;\n  left:0px;\n  padding: 0.5em;\n  font-size: 2em;\n  cursor: pointer;\n}\n\n.description {\n  width: 90%;\n  margin: 1em 5%;\n  padding: 5%;\n  background-color: #f2f2f2;\n  font-family: 'Slabo 27px', serif;\n  font-size: 2em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/admin/select-team/select-team.component.html":
/***/ (function(module, exports) {

module.exports = "<header><span class=\"back-icon fa fa-chevron-circle-left\" (click)=\"goBack()\"></span><h1>Välj lag</h1></header>\n<div class=\"description\" [innerHTML]=\"activity.description\"></div>\n<ul class=\"activities\">\n  <li *ngFor=\"let team of teams | async\"\n      (click)=\"onClick(team)\"\n      [class.pointsGiven]=\"pointsGiven(team)\">\n    {{team.name}}\n    <span class=\"points\">{{team.points}}</span>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/select-team/select-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activity_service__ = __webpack_require__("./src/app/activity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__team_service__ = __webpack_require__("./src/app/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SelectTeamComponent = (function () {
    function SelectTeamComponent(activityService, router, shared, teamService, location, route) {
        this.activityService = activityService;
        this.router = router;
        this.shared = shared;
        this.teamService = teamService;
        this.location = location;
        this.route = route;
        this.teams = teamService.getTeams();
    }
    SelectTeamComponent.prototype.onClick = function (team) {
        this.teamService.markActivityForTeam(this.activity, team);
    };
    SelectTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.activityService.getActivity(params['activity']); })
            .subscribe(function (activity) {
            _this.activity = activity;
        });
    };
    SelectTeamComponent.prototype.goBack = function () {
        this.location.back();
    };
    SelectTeamComponent.prototype.pointsGiven = function (team) {
        if (team.activities) {
            for (var _i = 0, _a = team.activities; _i < _a.length; _i++) {
                var a = _a[_i];
                if (a) {
                    if (a.id === this.activity.id) {
                        return true;
                    }
                }
            }
            return false;
        }
    };
    return SelectTeamComponent;
}());
SelectTeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-select-activity',
        template: __webpack_require__("./src/app/admin/select-team/select-team.component.html"),
        styles: [__webpack_require__("./src/app/admin/select-team/select-team.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */], __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__activity_service__["a" /* ActivityService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__team_service__["a" /* TeamService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _f || Object])
], SelectTeamComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=select-team.component.js.map

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_component__ = __webpack_require__("./src/app/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activity_detail_component__ = __webpack_require__("./src/app/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_team_create_team_component__ = __webpack_require__("./src/app/create-team/create-team.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/activities', pathMatch: 'full' },
    { path: 'activity/:key', component: __WEBPACK_IMPORTED_MODULE_3__activity_detail_component__["a" /* ActivityDetailComponent */] },
    { path: 'activities', component: __WEBPACK_IMPORTED_MODULE_2__activities_component__["a" /* ActivitiesComponent */] },
    { path: 'team', component: __WEBPACK_IMPORTED_MODULE_4__create_team_create_team_component__["a" /* CreateTeamComponent */] },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(shared) {
        this.shared = shared;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_detail_component__ = __webpack_require__("./src/app/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__activities_component__ = __webpack_require__("./src/app/activities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_team_create_team_component__ = __webpack_require__("./src/app/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__ = __webpack_require__("./src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_routing_module__ = __webpack_require__("./src/app/login-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_11__admin_admin_module__["AdminModule"],
            __WEBPACK_IMPORTED_MODULE_12__login_routing_module__["a" /* LoginRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__activity_detail_component__["a" /* ActivityDetailComponent */], __WEBPACK_IMPORTED_MODULE_8__activities_component__["a" /* ActivitiesComponent */], __WEBPACK_IMPORTED_MODULE_10__create_team_create_team_component__["a" /* CreateTeamComponent */], __WEBPACK_IMPORTED_MODULE_13__login_component__["a" /* LoginComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authService.isLoggedIn) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(db) {
        this.isLoggedIn = false;
        this.db = db;
    }
    AuthService.prototype.login = function (input) {
        var _this = this;
        return this.db.object('/password').map(function (password) {
            if (password.$value === input) {
                _this.isLoggedIn = true;
                return true;
            }
            else {
                _this.isLoggedIn = false;
                return false;
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/create-team/create-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-wrapper {\n  width:90%;\n  margin: 10% 5%;\n  padding: 5%;\n  text-align:center;\n}\n\nh1 {\n  color: #057190;\n  font-family: \"Slabo 27px\";\n  font-size: 10vh;\n  margin-bottom:1em;\n}\n\ninput.team-field {\n  font-size: 2em;\n  font-family: 'Slabo 27px';\n  padding: 0.3em 0.4em;\n  height: auto;\n}\n\nbutton {\n  font-size: 2em;\n  font-family: 'Slabo 27px';\n  width: 100%;\n  background-color: #057190;\n}\n\n.to-admin {\n  position:fixed;\n  bottom: 0;\n  right: 0;\n  font-size: 2em;\n}\n.to-admin span {\n  padding:0.3em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/create-team/create-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper team-wrapper\">\n  <h1>Skriv ert lagnamn:</h1>\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control team-field\" [(ngModel)]=\"teamName\" name=\"teamName\" />\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"createTeam()\">Gå vidare</button>\n    </div>\n    <div class=\"message\">\n      {{message}}\n    </div>\n  </form>\n</div>\n<div class=\"to-admin\">\n  <a [routerLink]=\"['/admin']\"><span class=\"fa fa-sign-in\"></span></a>\n</div>\n"

/***/ }),

/***/ "./src/app/create-team/create-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__team_service__ = __webpack_require__("./src/app/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("./src/app/shared.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTeamComponent = (function () {
    function CreateTeamComponent(teamService, router, shared) {
        this.teamService = teamService;
        this.router = router;
        this.shared = shared;
    }
    CreateTeamComponent.prototype.ngOnInit = function () {
        if (this.shared.teamName !== null) {
            this.router.navigate(['./activity']);
        }
    };
    CreateTeamComponent.prototype.createTeam = function () {
        var _this = this;
        this.teamService.createTeam(this.teamName).subscribe(function (success) {
            if (!success) {
                _this.message = 'Lagnamnet finns redan, välj ett annat.';
                console.log('Gick inte');
            }
            else {
                _this.shared.teamName = _this.teamName;
                _this.router.navigate(['./activities']);
                console.log('Redirect to activities');
            }
        });
    };
    return CreateTeamComponent;
}());
CreateTeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-create-team',
        template: __webpack_require__("./src/app/create-team/create-team.component.html"),
        styles: [__webpack_require__("./src/app/create-team/create-team.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__team_service__["a" /* TeamService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */]) === "function" && _c || Object])
], CreateTeamComponent);

var _a, _b, _c;
//# sourceMappingURL=create-team.component.js.map

/***/ }),

/***/ "./src/app/login-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("./src/app/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var loginRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */] }
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    return LoginRoutingModule;
}());
LoginRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(loginRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]
        ]
    })
], LoginRoutingModule);

//# sourceMappingURL=login-routing.module.js.map

/***/ }),

/***/ "./src/app/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper {\n  width:90%;\n  margin: 10% 5%;\n  padding: 5%;\n  text-align:center;\n}\n\ninput.password-field {\n  font-size: 2em;\n  font-family: 'Slabo 27px';\n  padding: 0.3em 0.4em;\n  height: auto;\n}\n\nbutton {\n  font-size: 2em;\n  font-family: 'Slabo 27px';\n  width: 100%;\n  background-color: #057190;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login.component.html":
/***/ (function(module, exports) {

module.exports = "<header><h1>Logga in</h1></header>\n<div class=\"wrapper login-wrapper\">\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n      <input type=\"password\" class=\"form-control password-field\" [(ngModel)]=\"password\" name=\"password\" />\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"login()\">Logga in</button>\n    </div>\n    <div class=\"message\">\n      {{message}}\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.setMessage();
    }
    LoginComponent.prototype.setMessage = function () {
        this.message = (this.authService.isLoggedIn ? 'Du är inloggad' : 'Du är inte inloggad');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = 'Försöker logga in...';
        this.authService.login(this.password).subscribe(function () {
            _this.setMessage();
            if (_this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/admin/';
                // Redirect the user
                _this.router.navigate([redirect]);
            }
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.setMessage();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        template: __webpack_require__("./src/app/login.component.html"),
        styles: [__webpack_require__("./src/app/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
        this.teamName = null;
    }
    return SharedService;
}());
SharedService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "./src/app/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamService = (function () {
    function TeamService(db) {
        this.db = db;
        this.teams = db.list('/teams');
    }
    TeamService.prototype.createTeam = function (name) {
        var _this = this;
        return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: name } }).map(function (response) {
            if (response.length === 0) {
                // Team does not exist, create it
                _this.db.list('teams').push({ name: name, points: 0 });
                return true;
            }
            else {
                return false;
            }
        });
    };
    TeamService.prototype.getTeam = function (teamName) {
        return this.db.list('/teams', { query: { orderByChild: 'name', equalTo: teamName } }).map(function (team) {
            return team[0];
        });
    };
    TeamService.prototype.getTeams = function () {
        return this.teams;
    };
    TeamService.prototype.markActivityForTeam = function (activity, team) {
        var _this = this;
        console.log('Shall mark activity');
        this.getTeam(team.name).subscribe(function (t) {
            console.log('Fetched team: ');
            console.log(t);
            if (t.activities) {
                for (var _i = 0, _a = t.activities; _i < _a.length; _i++) {
                    var a = _a[_i];
                    if (a) {
                        if (a.id === activity.id) {
                            console.log('Activity found');
                            return false;
                        }
                    }
                }
            }
            if (activity) {
                console.log('Adding points');
                _this.db.object('/teams/' + team.$key + '/points').$ref.transaction(function (points) {
                    return team.points ? points + activity.points : activity.points;
                });
                var activities = t.activities;
                delete activity.$ref;
                delete activity.$key;
                if (activities) {
                    activities.push(activity);
                }
                else {
                    activities = [activity];
                }
                console.log(activities);
                _this.db.object('/teams/' + team.$key).update({ activities: activities });
            }
        });
    };
    return TeamService;
}());
TeamService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], TeamService);

var _a;
//# sourceMappingURL=team.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDiUOeWJkpo63Zisz6OcXh-Paof7li8d34',
        authDomain: 'hw-point-adventure.firebaseapp.com',
        databaseURL: 'https://hw-point-adventure.firebaseio.com',
        projectId: 'hw-point-adventure',
        storageBucket: 'hw-point-adventure.appspot.com',
        messagingSenderId: '685750042844'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map