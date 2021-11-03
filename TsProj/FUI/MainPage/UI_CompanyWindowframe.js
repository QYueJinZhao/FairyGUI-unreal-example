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
var UI_x_1 = require("./UI_x");
var UI_BtnInternalOperationSelect_1 = require("./UI_BtnInternalOperationSelect");
var UI_BtnInternalOperationDefault_1 = require("./UI_BtnInternalOperationDefault");
var UI_BtnSocialInfluenceSelect_1 = require("./UI_BtnSocialInfluenceSelect");
var UI_BtnSocialInfluenceDefault_1 = require("./UI_BtnSocialInfluenceDefault");
var fgui = require("ue");
var UI_CompanyWindowframe = /** @class */ (function (_super) {
    __extends(UI_CompanyWindowframe, _super);
    function UI_CompanyWindowframe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_CompanyWindowframe.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CompanyWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_CompanyWindowframe.createInstance = function (component, WorldContextObject) {
        var obj = new UI_CompanyWindowframe();
        if (component == null) {
            component = UI_CompanyWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_CompanyWindowframe.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BG = component.GetChild("BG");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1["default"].createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnInternalOperationSelect = UI_BtnInternalOperationSelect_1["default"].createInstance(component.GetChild("BtnInternalOperationSelect"), WorldContextObject);
        this.m_BtnInternalOperationDefault = UI_BtnInternalOperationDefault_1["default"].createInstance(component.GetChild("BtnInternalOperationDefault"), WorldContextObject);
        this.m_BtnInside = component.GetChild("BtnInside");
        this.m_BtnSocialInfluenceSelect = UI_BtnSocialInfluenceSelect_1["default"].createInstance(component.GetChild("BtnSocialInfluenceSelect"), WorldContextObject);
        this.m_BtnSocialInfluenceDefault = UI_BtnSocialInfluenceDefault_1["default"].createInstance(component.GetChild("BtnSocialInfluenceDefault"), WorldContextObject);
        this.m_BtnOutside = component.GetChild("BtnOutside");
        this.m_Content = component.GetChild("Content");
        this.m_RestContent = component.GetChild("RestContent");
    };
    UI_CompanyWindowframe.URL = "ui://sn18zihkhb0y1o";
    UI_CompanyWindowframe.Package = "MainPage";
    UI_CompanyWindowframe.Component = "CompanyWindowframe";
    return UI_CompanyWindowframe;
}(fgui.FairyGuiView));
exports["default"] = UI_CompanyWindowframe;
