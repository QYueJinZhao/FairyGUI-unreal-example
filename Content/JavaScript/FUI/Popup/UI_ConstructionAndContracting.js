"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnConstructionAndContracting_1 = require("./UI_BtnConstructionAndContracting");
const fgui = require("ue");
class UI_ConstructionAndContracting {
    m_BackGround;
    m_closeButton;
    m_TextTitle;
    m_TextFire;
    m_BtnConstructionAndContracting;
    m_img;
    m_Title;
    m_Level;
    m_arrow;
    static URL = "ui://n16w4m5p9ti14e";
    static Package = "Popup";
    static Component = "ConstructionAndContracting";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_ConstructionAndContracting.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_ConstructionAndContracting();
        if (component == null) {
            component = UI_ConstructionAndContracting.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BackGround = component.GetChild("BackGround");
        this.m_closeButton = component.GetChild("closeButton");
        this.m_TextTitle = component.GetChild("TextTitle");
        this.m_TextFire = component.GetChild("TextFire");
        this.m_BtnConstructionAndContracting = UI_BtnConstructionAndContracting_1.default.createInstance(component.GetChild("BtnConstructionAndContracting"), WorldContextObject);
        this.m_img = component.GetChild("img");
        this.m_Title = component.GetChild("Title");
        this.m_Level = component.GetChild("Level");
        this.m_arrow = component.GetChild("arrow");
    }
}
exports.default = UI_ConstructionAndContracting;
//# sourceMappingURL=UI_ConstructionAndContracting.js.map