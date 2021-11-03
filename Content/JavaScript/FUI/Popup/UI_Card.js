"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnHire_1 = require("./UI_BtnHire");
const fgui = require("ue");
class UI_Card {
    m_BG;
    m_shadow;
    m_Profile;
    m_Name;
    m_Quality;
    m_Speed;
    m_SpeedStarContainer;
    m_BtnHire;
    static URL = "ui://n16w4m5pqb9d3c";
    static Package = "Popup";
    static Component = "Card";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Card.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Card();
        if (component == null) {
            component = UI_Card.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_BG = component.GetChild("BG");
        this.m_shadow = component.GetChild("shadow");
        this.m_Profile = component.GetChild("Profile");
        this.m_Name = component.GetChild("Name");
        this.m_Quality = component.GetChild("Quality");
        this.m_Speed = component.GetChild("Speed");
        this.m_SpeedStarContainer = component.GetChild("SpeedStarContainer");
        this.m_BtnHire = UI_BtnHire_1.default.createInstance(component.GetChild("BtnHire"), WorldContextObject);
    }
}
exports.default = UI_Card;
//# sourceMappingURL=UI_Card.js.map