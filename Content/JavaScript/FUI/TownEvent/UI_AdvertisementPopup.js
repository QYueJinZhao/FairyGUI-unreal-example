"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Advertisement_1 = require("./UI_Advertisement");
const fgui = require("ue");
class UI_AdvertisementPopup {
    m_c1;
    m_InteractablePanel;
    m_Advertisement;
    m_t0;
    m_t1;
    static URL = "ui://7zka63zlqqq9q";
    static Package = "TownEvent";
    static Component = "AdvertisementPopup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_AdvertisementPopup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_AdvertisementPopup();
        if (component == null) {
            component = UI_AdvertisementPopup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_InteractablePanel = component.GetChild("InteractablePanel");
        this.m_Advertisement = UI_Advertisement_1.default.createInstance(component.GetChild("Advertisement"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
    }
}
exports.default = UI_AdvertisementPopup;
//# sourceMappingURL=UI_AdvertisementPopup.js.map