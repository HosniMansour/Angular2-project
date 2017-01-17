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
require('rxjs/add/operator/map');
var ScoreComponent = (function () {
    function ScoreComponent() {
        //ici récupere la liste des équipes participants
    }
    ScoreComponent.prototype.ngOnInit = function () {
        //this.parties = Parties.find({}).zone();
        //this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
    };
    ScoreComponent.prototype.ngOnDestroy = function () {
    };
    ScoreComponent = __decorate([
        core_1.Component({
            selector: "score",
            templateUrl: "app/Score/Score.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ScoreComponent);
    return ScoreComponent;
}());
exports.ScoreComponent = ScoreComponent;
//# sourceMappingURL=Score.component.js.map