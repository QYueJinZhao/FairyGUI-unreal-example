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
var fgui = require("ue");
var UI_BtnCompany = /** @class */ (function (_super) {
    __extends(UI_BtnCompany, _super);
    function UI_BtnCompany() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_BtnCompany.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnCompany.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_BtnCompany.createInstance = function (component, WorldContextObject) {
        var obj = new UI_BtnCompany();
        if (component == null) {
            component = UI_BtnCompany.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_BtnCompany.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_n0 = component.GetChild("n0");
    };
    UI_BtnCompany.URL = "ui://sn18zihkq13146";
    UI_BtnCompany.Package = "MainPage";
    UI_BtnCompany.Component = "BtnCompany";
    return UI_BtnCompany;
}(fgui.FairyGuiView));
exports["default"] = UI_BtnCompany;
