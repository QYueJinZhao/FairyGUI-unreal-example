"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_TakeoutCard_1 = require("./UI_TakeoutCard");
const UI_BtnRefresh_1 = require("./UI_BtnRefresh");
const fgui = require("ue");
class UI_DelvieryManBiographyPanel {
    m_InteractablePanel;
    m_TakeoutCard;
    m_BtnRefresh;
    m_Text;
    m_t0;
    static URL = "ui://n16w4m5pae104n";
    static Package = "Popup";
    static Component = "DelvieryManBiographyPanel";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryManBiographyPanel.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_DelvieryManBiographyPanel();
        if (component == null) {
            component = UI_DelvieryManBiographyPanel.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_TakeoutCard = UI_TakeoutCard_1.default.createInstance(component.GetChild("TakeoutCard"), WorldContextObject);
        this.m_BtnRefresh = UI_BtnRefresh_1.default.createInstance(component.GetChild("BtnRefresh"), WorldContextObject);
        this.m_Text = component.GetChild("Text");
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_DelvieryManBiographyPanel;
//# sourceMappingURL=UI_DelvieryManBiographyPanel.js.map