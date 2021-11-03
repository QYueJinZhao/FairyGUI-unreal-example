"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_BtnDouble_1 = require("./UI_BtnDouble");
const UI_BtnSignIn_1 = require("./UI_BtnSignIn");
const fgui = require("ue");
class UI_Button {
    m_c1;
    m_BtnDouble;
    m_BtnSignIn;
    m_text;
    static URL = "ui://h9dczuj86n0lu";
    static Package = "SignIn";
    static Component = "Button";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_Button.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_Button();
        if (component == null) {
            component = UI_Button.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_c1 = component.GetController("c1");
        this.m_BtnDouble = UI_BtnDouble_1.default.createInstance(component.GetChild("BtnDouble"), WorldContextObject);
        this.m_BtnSignIn = UI_BtnSignIn_1.default.createInstance(component.GetChild("BtnSignIn"), WorldContextObject);
        this.m_text = component.GetChild("text");
    }
}
exports.default = UI_Button;
//# sourceMappingURL=UI_Button.js.map