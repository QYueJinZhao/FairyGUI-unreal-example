"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const fgui = require("ue");
class UI_Reward7_first {
    m_c1;
    m_Bg;
    m_animation;
    m_character;
    m_name;
    m_date;
    m_date2;
    m_Received;
    static URL = "ui://h9dczuj8daci4n";
    static Package = "SignIn";
    static Component = "Reward7_first";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Reward7_first.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Reward7_first();
        if (component == null) {
            component = UI_Reward7_first.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_Bg = component.GetChild("Bg");
        this.m_animation = component.GetChild("animation");
        this.m_character = component.GetChild("character");
        this.m_name = component.GetChild("name");
        this.m_date = component.GetChild("date");
        this.m_date2 = component.GetChild("date2");
        this.m_Received = component.GetChild("Received");
    }
}
exports.default = UI_Reward7_first;
//# sourceMappingURL=UI_Reward7_first.js.map