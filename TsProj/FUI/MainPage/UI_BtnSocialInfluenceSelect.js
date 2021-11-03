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
var UI_BtnSocialInfluenceSelect = /** @class */ (function (_super) {
    __extends(UI_BtnSocialInfluenceSelect, _super);
    function UI_BtnSocialInfluenceSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_BtnSocialInfluenceSelect.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnSocialInfluenceSelect.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_BtnSocialInfluenceSelect.createInstance = function (component, WorldContextObject) {
        var obj = new UI_BtnSocialInfluenceSelect();
        if (component == null) {
            component = UI_BtnSocialInfluenceSelect.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_BtnSocialInfluenceSelect.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_btn = component.GetChild("btn");
    };
    UI_BtnSocialInfluenceSelect.URL = "ui://sn18zihkhb0y2b";
    UI_BtnSocialInfluenceSelect.Package = "MainPage";
    UI_BtnSocialInfluenceSelect.Component = "BtnSocialInfluenceSelect";
    return UI_BtnSocialInfluenceSelect;
}(fgui.FairyGuiView));
exports["default"] = UI_BtnSocialInfluenceSelect;
