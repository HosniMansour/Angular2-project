"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
;
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var ProblemService_1 = require('../Services/ProblemService');
var ProblemDetailsComponent = (function () {
    function ProblemDetailsComponent(route, problemService) {
        this.route = route;
        this.problemService = problemService;
    }
    ProblemDetailsComponent.prototype.ngOnInit = function () {
        /*this.route.params
          .switchMap((params: Params) => this.problemService.getProblem(+params['id']))
          .subscribe(problem => this.problem = hero);*/
    };
    ProblemDetailsComponent.prototype.ValidateProblem = function () {
        //on vérife sir la réponse entré est valide ou non 
    };
    ProblemDetailsComponent = __decorate([
        core_1.Component({
            selector: "problem-details",
            templateUrl: "app/Problem_Details/Problem-details.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ProblemService_1.ProblemService])
    ], ProblemDetailsComponent);
    return ProblemDetailsComponent;
}());
exports.ProblemDetailsComponent = ProblemDetailsComponent;
//# sourceMappingURL=Problem-details.component.js.map