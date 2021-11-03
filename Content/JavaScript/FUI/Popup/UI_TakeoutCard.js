"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Card_1 = require("./UI_Card");
const fgui = require("ue");
class UI_TakeoutCard {
    m_c1;
    m_Card1;
    m_Card2;
    m_Card3;
    m_t0;
    m_t1;
    m_t2;
    static URL = "ui://n16w4m5pae104m";
    static Package = "Popup";
    static Component = "TakeoutCard";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_TakeoutCard.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_TakeoutCard();
        if (component == null) {
            component = UI_TakeoutCard.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Card1 = UI_Card_1.default.createInstance(component.GetChild("Card1"), WorldContextObject);
        this.m_Card2 = UI_Card_1.default.createInstance(component.GetChild("Card2"), WorldContextObject);
        this.m_Card3 = UI_Card_1.default.createInstance(component.GetChild("Card3"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
        this.m_t1 = component.GetTransition("t1");
        this.m_t2 = component.GetTransition("t2");
    }
}
exports.default = UI_TakeoutCard;
//# sourceMappingURL=UI_TakeoutCard.js.map