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
var UI_CompanyWindowframe_1 = require("./UI_CompanyWindowframe");
var fgui = require("ue");
var UI_CompanyRoomManage = /** @class */ (function (_super) {
    __extends(UI_CompanyRoomManage, _super);
    function UI_CompanyRoomManage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_CompanyRoomManage.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CompanyRoomManage.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_CompanyRoomManage.createInstance = function (component, WorldContextObject) {
        var obj = new UI_CompanyRoomManage();
        if (component == null) {
            component = UI_CompanyRoomManage.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_CompanyRoomManage.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_frame = UI_CompanyWindowframe_1["default"].createInstance(component.GetChild("frame"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    };
    UI_CompanyRoomManage.URL = "ui://sn18zihkhb0y1m";
    UI_CompanyRoomManage.Package = "MainPage";
    UI_CompanyRoomManage.Component = "CompanyRoomManage";
    return UI_CompanyRoomManage;
}(fgui.FairyGuiView));
exports["default"] = UI_CompanyRoomManage;
