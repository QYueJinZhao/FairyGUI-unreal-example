"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnZhanqiVillage_1 = require("./UI_BtnZhanqiVillage");
const UI_BtnSanya_1 = require("./UI_BtnSanya");
const UI_BtnHarbin_1 = require("./UI_BtnHarbin");
const UI_BtnUrumqi_1 = require("./UI_BtnUrumqi");
const UI_BtnShanghai_1 = require("./UI_BtnShanghai");
const fgui = require("ue");
class UI_Town {
    m_n71;
    m_BtnZhanqiVillage;
    m_BtnSanya;
    m_BtnHarbin;
    m_BtnUrumqi;
    m_BtnShanghai;
    m_Title;
    static URL = "ui://7d8qawjuq131f";
    static Package = "Town";
    static Component = "Town";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Town.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Town();
        if (component == null) {
            component = UI_Town.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n71 = component.GetChild("n71");
        this.m_BtnZhanqiVillage = UI_BtnZhanqiVillage_1.default.createInstance(component.GetChild("BtnZhanqiVillage"), WorldContextObject);
        this.m_BtnSanya = UI_BtnSanya_1.default.createInstance(component.GetChild("BtnSanya"), WorldContextObject);
        this.m_BtnHarbin = UI_BtnHarbin_1.default.createInstance(component.GetChild("BtnHarbin"), WorldContextObject);
        this.m_BtnUrumqi = UI_BtnUrumqi_1.default.createInstance(component.GetChild("BtnUrumqi"), WorldContextObject);
        this.m_BtnShanghai = UI_BtnShanghai_1.default.createInstance(component.GetChild("BtnShanghai"), WorldContextObject);
        this.m_Title = component.GetChild("Title");
    }
}
exports.default = UI_Town;
//# sourceMappingURL=UI_Town.js.map