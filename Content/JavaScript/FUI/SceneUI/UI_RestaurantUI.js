"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_Bar_1 = require("./UI_Bar");
const fgui = require("ue");
class UI_RestaurantUI {
    m_n0;
    m_Grade;
    m_OrderIcon;
    m_text;
    m_name;
    m_Bar;
    m_t0;
    static URL = "ui://vw08vbbglako18";
    static Package = "SceneUI";
    static Component = "RestaurantUI";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_RestaurantUI.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_RestaurantUI();
        if (component == null) {
            component = UI_RestaurantUI.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n0 = component.GetChild("n0");
        this.m_Grade = component.GetChild("Grade");
        this.m_OrderIcon = component.GetChild("OrderIcon");
        this.m_text = component.GetChild("text");
        this.m_name = component.GetChild("name");
        this.m_Bar = UI_Bar_1.default.createInstance(component.GetChild("Bar"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_RestaurantUI;
//# sourceMappingURL=UI_RestaurantUI.js.map