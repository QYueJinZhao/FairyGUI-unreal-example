"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Turntable_1 = require("./UI_Turntable");
const UI_Button_1 = require("./UI_Button");
const fgui = require("ue");
class UI_LuckyTurntableGroup {
    m_belt;
    m_title;
    m_chassis;
    m_lamp;
    m_Turntable;
    m_Button;
    m_t0;
    static URL = "ui://tgre8ndbtn7k1w";
    static Package = "Turntable";
    static Component = "LuckyTurntableGroup";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_LuckyTurntableGroup.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_LuckyTurntableGroup();
        if (component == null) {
            component = UI_LuckyTurntableGroup.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_belt = component.GetChild("belt");
        this.m_title = component.GetChild("title");
        this.m_chassis = component.GetChild("chassis");
        this.m_lamp = component.GetChild("lamp");
        this.m_Turntable = UI_Turntable_1.default.createInstance(component.GetChild("Turntable"), WorldContextObject);
        this.m_Button = UI_Button_1.default.createInstance(component.GetChild("Button"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_LuckyTurntableGroup;
//# sourceMappingURL=UI_LuckyTurntableGroup.js.map