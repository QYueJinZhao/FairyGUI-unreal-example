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
var UI_BtnSwitchHRManagement = /** @class */ (function (_super) {
    __extends(UI_BtnSwitchHRManagement, _super);
    function UI_BtnSwitchHRManagement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_BtnSwitchHRManagement.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSwitchHRManagement.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_BtnSwitchHRManagement.createInstance = function (component, WorldContextObject) {
        var obj = new UI_BtnSwitchHRManagement();
        if (component == null) {
            component = UI_BtnSwitchHRManagement.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_BtnSwitchHRManagement.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_ButtonPersonnel = component.GetChild("ButtonPersonnel");
        this.m_Notify = component.GetChild("Notify");
    };
    UI_BtnSwitchHRManagement.URL = "ui://sn18zihkmos46";
    UI_BtnSwitchHRManagement.Package = "MainPage";
    UI_BtnSwitchHRManagement.Component = "BtnSwitchHRManagement";
    return UI_BtnSwitchHRManagement;
}(fgui.FairyGuiView));
exports["default"] = UI_BtnSwitchHRManagement;
