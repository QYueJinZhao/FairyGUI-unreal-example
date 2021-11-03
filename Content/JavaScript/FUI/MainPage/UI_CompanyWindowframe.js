"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_x_1 = require("./UI_x");
const UI_BtnInternalOperationSelect_1 = require("./UI_BtnInternalOperationSelect");
const UI_BtnInternalOperationDefault_1 = require("./UI_BtnInternalOperationDefault");
const UI_BtnSocialInfluenceSelect_1 = require("./UI_BtnSocialInfluenceSelect");
const UI_BtnSocialInfluenceDefault_1 = require("./UI_BtnSocialInfluenceDefault");
const fgui = require("ue");
class UI_CompanyWindowframe {
    m_c1;
    m_BG;
    m_TitmeImage;
    m_Text;
    m_closeButton;
    m_BtnInternalOperationSelect;
    m_BtnInternalOperationDefault;
    m_BtnInside;
    m_BtnSocialInfluenceSelect;
    m_BtnSocialInfluenceDefault;
    m_BtnOutside;
    m_Content;
    m_RestContent;
    static URL = "ui://sn18zihkhb0y1o";
    static Package = "MainPage";
    static Component = "CompanyWindowframe";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_CompanyWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_CompanyWindowframe();
        if (component == null) {
            component = UI_CompanyWindowframe.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BG = component.GetChild("BG");
        this.m_TitmeImage = component.GetChild("TitmeImage");
        this.m_Text = component.GetChild("Text");
        this.m_closeButton = UI_x_1.default.createInstance(component.GetChild("closeButton"), WorldContextObject);
        this.m_BtnInternalOperationSelect = UI_BtnInternalOperationSelect_1.default.createInstance(component.GetChild("BtnInternalOperationSelect"), WorldContextObject);
        this.m_BtnInternalOperationDefault = UI_BtnInternalOperationDefault_1.default.createInstance(component.GetChild("BtnInternalOperationDefault"), WorldContextObject);
        this.m_BtnInside = component.GetChild("BtnInside");
        this.m_BtnSocialInfluenceSelect = UI_BtnSocialInfluenceSelect_1.default.createInstance(component.GetChild("BtnSocialInfluenceSelect"), WorldContextObject);
        this.m_BtnSocialInfluenceDefault = UI_BtnSocialInfluenceDefault_1.default.createInstance(component.GetChild("BtnSocialInfluenceDefault"), WorldContextObject);
        this.m_BtnOutside = component.GetChild("BtnOutside");
        this.m_Content = component.GetChild("Content");
        this.m_RestContent = component.GetChild("RestContent");
    }
}
exports.default = UI_CompanyWindowframe;
//# sourceMappingURL=UI_CompanyWindowframe.js.map