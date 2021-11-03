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
var UI_BtnHR = /** @class */ (function (_super) {
    __extends(UI_BtnHR, _super);
    function UI_BtnHR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_BtnHR.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHR.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_BtnHR.createInstance = function (component, WorldContextObject) {
        var obj = new UI_BtnHR();
        if (component == null) {
            component = UI_BtnHR.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_BtnHR.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_BG = component.GetChild("BG");
        this.m_Coin = component.GetChild("Coin");
        this.m_text = component.GetChild("text");
    };
    UI_BtnHR.URL = "ui://sn18zihkmos411";
    UI_BtnHR.Package = "MainPage";
    UI_BtnHR.Component = "BtnHR";
    return UI_BtnHR;
}(fgui.FairyGuiView));
exports["default"] = UI_BtnHR;
