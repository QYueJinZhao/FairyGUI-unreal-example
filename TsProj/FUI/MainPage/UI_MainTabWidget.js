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
var UI_Switch_1 = require("./UI_Switch");
var UI_LongDisplayButton_1 = require("./UI_LongDisplayButton");
var UI_BtnSwitchHRManagement_1 = require("./UI_BtnSwitchHRManagement");
var UI_BtnSwitchCompanyMangement_1 = require("./UI_BtnSwitchCompanyMangement");
var UI_BtnSwitchTownMangement_1 = require("./UI_BtnSwitchTownMangement");
var UI_DelvieryWindowframe_1 = require("./UI_DelvieryWindowframe");
var UI_CompanyRoomManage_1 = require("./UI_CompanyRoomManage");
var UI_TownBuildManage_1 = require("./UI_TownBuildManage");
var fgui = require("ue");
var UI_MainTabWidget = /** @class */ (function (_super) {
    __extends(UI_MainTabWidget, _super);
    function UI_MainTabWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UI_MainTabWidget.CreateComponent = function (WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_MainTabWidget.URL, WorldContextObject, fgui.GComponent.StaticClass());
    };
    UI_MainTabWidget.createInstance = function (component, WorldContextObject) {
        var obj = new UI_MainTabWidget();
        if (component == null) {
            component = UI_MainTabWidget.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    };
    UI_MainTabWidget.prototype.Bind = function (component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Switch = UI_Switch_1["default"].createInstance(component.GetChild("Switch"), WorldContextObject);
        this.m_LongDisplay = UI_LongDisplayButton_1["default"].createInstance(component.GetChild("LongDisplay"), WorldContextObject);
        this.m_EventList = component.GetChild("EventList");
        this.m_BtnEntrance = component.GetChild("BtnEntrance");
        this.m_group = component.GetChild("group");
        this.m_MainLine = component.GetChild("MainLine");
        this.m_TransparentMask = component.GetChild("TransparentMask");
        this.m_BtnSwitchHRManagement = UI_BtnSwitchHRManagement_1["default"].createInstance(component.GetChild("BtnSwitchHRManagement"), WorldContextObject);
        this.m_BtnSwitchCompanyMangement = UI_BtnSwitchCompanyMangement_1["default"].createInstance(component.GetChild("BtnSwitchCompanyMangement"), WorldContextObject);
        this.m_BtnSwitchTownMangement = UI_BtnSwitchTownMangement_1["default"].createInstance(component.GetChild("BtnSwitchTownMangement"), WorldContextObject);
        this.m_DeliveryMenPersonal = UI_DelvieryWindowframe_1["default"].createInstance(component.GetChild("DeliveryMenPersonal"), WorldContextObject);
        this.m_CompanyRoomManage = UI_CompanyRoomManage_1["default"].createInstance(component.GetChild("CompanyRoomManage"), WorldContextObject);
        this.m_TownBuildManage = UI_TownBuildManage_1["default"].createInstance(component.GetChild("TownBuildManage"), WorldContextObject);
        this.m_SyntheticInterface = component.GetChild("SyntheticInterface");
        this.m_TopNav = component.GetChild("TopNav");
        this.m_DynamicOverlay = component.GetChild("DynamicOverlay");
        this.m_DynamicOn = component.GetChild("DynamicOn");
        this.m_hr_open = component.GetTransition("hr_open");
        this.m_hr_close = component.GetTransition("hr_close");
        this.m_company_open = component.GetTransition("company_open");
        this.m_town_open = component.GetTransition("town_open");
        this.m_company_close = component.GetTransition("company_close");
        this.m_town_close = component.GetTransition("town_close");
        this.m_t6 = component.GetTransition("t6");
        this.m_dynamic_hide = component.GetTransition("dynamic_hide");
        this.m_dynamic_display = component.GetTransition("dynamic_display");
    };
    UI_MainTabWidget.URL = "ui://sn18zihk8w3v0";
    UI_MainTabWidget.Package = "MainPage";
    UI_MainTabWidget.Component = "MainTabWidget";
    return UI_MainTabWidget;
}(fgui.FairyGuiView));
exports["default"] = UI_MainTabWidget;
