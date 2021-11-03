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
var UI_BtnHeaderBuildSelect_1 = require("./UI_BtnHeaderBuildSelect");
var UI_BtnHeaderBuildDefault_1 = require("./UI_BtnHeaderBuildDefault");
var UI_BtnHeaderUpgradeSelect_1 = require("./UI_BtnHeaderUpgradeSelect");
var UI_BtnHeaderUpgradeDefault_1 = require("./UI_BtnHeaderUpgradeDefault");
var fgui = require("ue");
var UI_TownWindowframe = /** @class */ (function (_super) {
    __extends(UI_TownWindowframe, _super);
    function UI_TownWindowframe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_TownWindowframe.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TownWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_TownWindowframe.createInstance = function (component, WorldContextObject) {
        var obj = new UI_TownWindowframe();
        if (component == null) {
            component = UI_TownWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_TownWindowframe.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Background = component.GetChild("Background");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1["default"].createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnHeaderBuildSelect = UI_BtnHeaderBuildSelect_1["default"].createInstance(component.GetChild("BtnHeaderBuildSelect"), WorldContextObject);
        this.m_BtnHeaderBuildDefault = UI_BtnHeaderBuildDefault_1["default"].createInstance(component.GetChild("BtnHeaderBuildDefault"), WorldContextObject);
        this.m_BtnInside = component.GetChild("BtnInside");
        this.m_BtnHeaderUpgradeSelect = UI_BtnHeaderUpgradeSelect_1["default"].createInstance(component.GetChild("BtnHeaderUpgradeSelect"), WorldContextObject);
        this.m_BtnHeaderUpgradeDefault = UI_BtnHeaderUpgradeDefault_1["default"].createInstance(component.GetChild("BtnHeaderUpgradeDefault"), WorldContextObject);
        this.m_BtnOutside = component.GetChild("BtnOutside");
        this.m_BuildSignList = component.GetChild("BuildSignList");
        this.m_UpgradeList = component.GetChild("UpgradeList");
    };
    UI_TownWindowframe.URL = "ui://sn18zihkhb0y2g";
    UI_TownWindowframe.Package = "MainPage";
    UI_TownWindowframe.Component = "TownWindowframe";
    return UI_TownWindowframe;
}(fgui.FairyGuiView));
exports["default"] = UI_TownWindowframe;
