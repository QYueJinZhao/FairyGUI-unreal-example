"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var UI_TownWindowframe_1 = require("./UI_TownWindowframe");
var fgui = require("ue");
var UI_TownBuildManage = /** @class */ (function (_super) {
    __extends(UI_TownBuildManage, _super);
    function UI_TownBuildManage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_TownBuildManage.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TownBuildManage.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_TownBuildManage.createInstance = function (component, WorldContextObject) {
        var obj = new UI_TownBuildManage();
        if (component == null) {
            component = UI_TownBuildManage.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_TownBuildManage.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_windowframe = UI_TownWindowframe_1["default"].createInstance(component.GetChild("windowframe"), WorldContextObject);
    };
    UI_TownBuildManage.URL = "ui://sn18zihkhb0y2h";
    UI_TownBuildManage.Package = "MainPage";
    UI_TownBuildManage.Component = "TownBuildManage";
    return UI_TownBuildManage;
}(fgui.FairyGuiView));
exports["default"] = UI_TownBuildManage;
