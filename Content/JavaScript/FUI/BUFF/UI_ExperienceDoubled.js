"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Experience_1 = require("./UI_Experience");
const fgui = require("ue");
class UI_ExperienceDoubled {
    m_n1;
    m_t0;
    static URL = "ui://tm2lcvzypip1d";
    static Package = "BUFF";
    static Component = "ExperienceDoubled";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_ExperienceDoubled.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_ExperienceDoubled();
        if (component == null) {
            component = UI_ExperienceDoubled.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n1 = UI_Experience_1.default.createInstance(component.GetChild("n1"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_ExperienceDoubled;
//# sourceMappingURL=UI_ExperienceDoubled.js.map