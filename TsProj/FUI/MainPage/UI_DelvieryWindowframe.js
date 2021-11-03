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
var UI_BtnHR_1 = require("./UI_BtnHR");
var fgui = require("ue");
var UI_DelvieryWindowframe = /** @class */ (function (_super) {
    __extends(UI_DelvieryWindowframe, _super);
    function UI_DelvieryWindowframe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_DelvieryWindowframe.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_DelvieryWindowframe.createInstance = function (component, WorldContextObject) {
        var obj = new UI_DelvieryWindowframe();
        if (component == null) {
            component = UI_DelvieryWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_DelvieryWindowframe.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_Background = component.GetChild("Background");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1["default"].createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_DeliveryManNunSum = component.GetChild("DeliveryManNunSum");
        this.m_BtnHR = UI_BtnHR_1["default"].createInstance(component.GetChild("BtnHR"), WorldContextObject);
        this.m_Content = component.GetChild("Content");
    };
    UI_DelvieryWindowframe.URL = "ui://sn18zihkmos49";
    UI_DelvieryWindowframe.Package = "MainPage";
    UI_DelvieryWindowframe.Component = "DelvieryWindowframe";
    return UI_DelvieryWindowframe;
}(fgui.FairyGuiView));
exports["default"] = UI_DelvieryWindowframe;
