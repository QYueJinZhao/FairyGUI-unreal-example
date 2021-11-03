"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Switch_1 = require("./UI_Switch");
const UI_LongDisplayButton_1 = require("./UI_LongDisplayButton");
const UI_BtnSwitchHRManagement_1 = require("./UI_BtnSwitchHRManagement");
const UI_BtnSwitchCompanyMangement_1 = require("./UI_BtnSwitchCompanyMangement");
const UI_BtnSwitchTownMangement_1 = require("./UI_BtnSwitchTownMangement");
const UI_DelvieryWindowframe_1 = require("./UI_DelvieryWindowframe");
const UI_CompanyRoomManage_1 = require("./UI_CompanyRoomManage");
const UI_TownBuildManage_1 = require("./UI_TownBuildManage");
const fgui = require("ue");
class UI_MainTabWidget {
    m_c1;
    m_Switch;
    m_LongDisplay;
    m_EventList;
    m_BtnEntrance;
    m_group;
    m_MainLine;
    m_TransparentMask;
    m_BtnSwitchHRManagement;
    m_BtnSwitchCompanyMangement;
    m_BtnSwitchTownMangement;
    m_DeliveryMenPersonal;
    m_CompanyRoomManage;
    m_TownBuildManage;
    m_SyntheticInterface;
    m_TopNav;
    m_DynamicOverlay;
    m_DynamicOn;
    m_hr_open;
    m_hr_close;
    m_company_open;
    m_town_open;
    m_company_close;
    m_town_close;
    m_t6;
    m_dynamic_hide;
    m_dynamic_display;
    static URL = "ui://sn18zihk8w3v0";
    static Package = "MainPage";
    static Component = "MainTabWidget";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_MainTabWidget.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_MainTabWidget();
        if (component == null) {
            component = UI_MainTabWidget.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Switch = UI_Switch_1.default.createInstance(component.GetChild("Switch"), WorldContextObject);
        this.m_LongDisplay = UI_LongDisplayButton_1.default.createInstance(component.GetChild("LongDisplay"), WorldContextObject);
        this.m_EventList = component.GetChild("EventList");
        this.m_BtnEntrance = component.GetChild("BtnEntrance");
        this.m_group = component.GetChild("group");
        this.m_MainLine = component.GetChild("MainLine");
        this.m_TransparentMask = component.GetChild("TransparentMask");
        this.m_BtnSwitchHRManagement = UI_BtnSwitchHRManagement_1.default.createInstance(component.GetChild("BtnSwitchHRManagement"), WorldContextObject);
        this.m_BtnSwitchCompanyMangement = UI_BtnSwitchCompanyMangement_1.default.createInstance(component.GetChild("BtnSwitchCompanyMangement"), WorldContextObject);
        this.m_BtnSwitchTownMangement = UI_BtnSwitchTownMangement_1.default.createInstance(component.GetChild("BtnSwitchTownMangement"), WorldContextObject);
        this.m_DeliveryMenPersonal = UI_DelvieryWindowframe_1.default.createInstance(component.GetChild("DeliveryMenPersonal"), WorldContextObject);
        this.m_CompanyRoomManage = UI_CompanyRoomManage_1.default.createInstance(component.GetChild("CompanyRoomManage"), WorldContextObject);
        this.m_TownBuildManage = UI_TownBuildManage_1.default.createInstance(component.GetChild("TownBuildManage"), WorldContextObject);
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
    }
}
exports.default = UI_MainTabWidget;
//# sourceMappingURL=UI_MainTabWidget.js.map