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
var UI_BtnHeaderBuildSelect = /** @class */ (function (_super) {
    __extends(UI_BtnHeaderBuildSelect, _super);
    function UI_BtnHeaderBuildSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_BtnHeaderBuildSelect.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnHeaderBuildSelect.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_BtnHeaderBuildSelect.createInstance = function (component, WorldContextObject) {
        var obj = new UI_BtnHeaderBuildSelect();
        if (component == null) {
            component = UI_BtnHeaderBuildSelect.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_BtnHeaderBuildSelect.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_btn = component.GetChild("btn");
    };
    UI_BtnHeaderBuildSelect.URL = "ui://sn18zihkhb0y1v";
    UI_BtnHeaderBuildSelect.Package = "MainPage";
    UI_BtnHeaderBuildSelect.Component = "BtnHeaderBuildSelect";
    return UI_BtnHeaderBuildSelect;
}(fgui.FairyGuiView));
exports["default"] = UI_BtnHeaderBuildSelect;
