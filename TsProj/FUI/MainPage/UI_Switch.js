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
var UI_BtnCompany_1 = require("./UI_BtnCompany");
var UI_BtnTown_1 = require("./UI_BtnTown");
var fgui = require("ue");
var UI_Switch = /** @class */ (function (_super) {
    __extends(UI_Switch, _super);
    function UI_Switch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_Switch.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Switch.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_Switch.createInstance = function (component, WorldContextObject) {
        var obj = new UI_Switch();
        if (component == null) {
            component = UI_Switch.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_Switch.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BtnCompany = UI_BtnCompany_1["default"].createInstance(component.GetChild("BtnCompany"), WorldContextObject);
        this.m_BtnTown = UI_BtnTown_1["default"].createInstance(component.GetChild("BtnTown"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    };
    UI_Switch.URL = "ui://sn18zihkq13148";
    UI_Switch.Package = "MainPage";
    UI_Switch.Component = "Switch";
    return UI_Switch;
}(fgui.FairyGuiView));
exports["default"] = UI_Switch;
