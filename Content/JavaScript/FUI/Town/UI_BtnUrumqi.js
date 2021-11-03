"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_lock1_1 = require("./UI_lock1");
const UI_Overview_1 = require("./UI_Overview");
const fgui = require("ue");
class UI_BtnUrumqi {
    m_button;
    m_c1;
    m_Bg;
    m_aperture;
    m_NameBottom;
    m_Name;
    m_lock;
    m_Overview;
    m_t0;
    static URL = "ui://7d8qawjuq131k";
    static Package = "Town";
    static Component = "BtnUrumqi";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_BtnUrumqi.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_BtnUrumqi();
        if (component == null) {
            component = UI_BtnUrumqi.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_button = component.GetController("button");
        this.m_c1 = component.GetController("c1");
        this.m_Bg = component.GetChild("Bg");
        this.m_aperture = component.GetChild("aperture");
        this.m_NameBottom = component.GetChild("NameBottom");
        this.m_Name = component.GetChild("Name");
        this.m_lock = UI_lock1_1.default.createInstance(component.GetChild("lock"), WorldContextObject);
        this.m_Overview = UI_Overview_1.default.createInstance(component.GetChild("Overview"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_BtnUrumqi;
//# sourceMappingURL=UI_BtnUrumqi.js.map