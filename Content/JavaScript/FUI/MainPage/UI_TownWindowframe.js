"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnHeaderBuildSelect_1 = require("./UI_BtnHeaderBuildSelect");
const UI_BtnHeaderBuildDefault_1 = require("./UI_BtnHeaderBuildDefault");
const UI_BtnHeaderUpgradeSelect_1 = require("./UI_BtnHeaderUpgradeSelect");
const UI_BtnHeaderUpgradeDefault_1 = require("./UI_BtnHeaderUpgradeDefault");
const fgui = require("ue");
class UI_TownWindowframe {
    m_c1;
    m_Background;
    m_TitmeImage;
    m_Text;
    m_closeButton;
    m_BtnHeaderBuildSelect;
    m_BtnHeaderBuildDefault;
    m_BtnInside;
    m_BtnHeaderUpgradeSelect;
    m_BtnHeaderUpgradeDefault;
    m_BtnOutside;
    m_BuildSignList;
    m_UpgradeList;
    static URL = "ui://sn18zihkhb0y2g";
    static Package = "MainPage";
    static Component = "TownWindowframe";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TownWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TownWindowframe();
        if (component == null) {
            component = UI_TownWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Background = component.GetChild("Background");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnHeaderBuildSelect = UI_BtnHeaderBuildSelect_1.default.createInstance(component.GetChild("BtnHeaderBuildSelect"), WorldContextObject);
        this.m_BtnHeaderBuildDefault = UI_BtnHeaderBuildDefault_1.default.createInstance(component.GetChild("BtnHeaderBuildDefault"), WorldContextObject);
        this.m_BtnInside = component.GetChild("BtnInside");
        this.m_BtnHeaderUpgradeSelect = UI_BtnHeaderUpgradeSelect_1.default.createInstance(component.GetChild("BtnHeaderUpgradeSelect"), WorldContextObject);
        this.m_BtnHeaderUpgradeDefault = UI_BtnHeaderUpgradeDefault_1.default.createInstance(component.GetChild("BtnHeaderUpgradeDefault"), WorldContextObject);
        this.m_BtnOutside = component.GetChild("BtnOutside");
        this.m_BuildSignList = component.GetChild("BuildSignList");
        this.m_UpgradeList = component.GetChild("UpgradeList");
    }
}
exports.default = UI_TownWindowframe;
//# sourceMappingURL=UI_TownWindowframe.js.map