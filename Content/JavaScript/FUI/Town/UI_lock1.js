"use strict";
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/
Object.defineProperty(exports, "__esModule", { value: true });
const UI_lock0_1 = require("./UI_lock0");
const fgui = require("ue");
class UI_lock1 {
    m_n19;
    m_n20;
    m_n21;
    m_n22;
    m_n23;
    m_n24;
    m_n25;
    m_n26;
    m_n27;
    m_n28;
    m_n29;
    m_n30;
    m_n31;
    m_n32;
    m_n33;
    m_n34;
    m_n35;
    m_n36;
    m_n37;
    m_n38;
    m_n39;
    m_n40;
    m_lock1;
    m_lock2;
    m_t0;
    static URL = "ui://7d8qawjuhjs826";
    static Package = "Town";
    static Component = "lock1";
    view;
    static CreateComponent(WorldContextObject) {
        return fgui.UIPackage.CreateObjectFromURL(UI_lock1.URL, WorldContextObject, fgui.GComponent.StaticClass());
    }
    static createInstance(component, WorldContextObject) {
        var obj = new UI_lock1();
        if (component == null) {
            component = UI_lock1.CreateComponent(WorldContextObject);
        }
        obj.Bind(component, WorldContextObject);
        return obj;
    }
    Bind(component, WorldContextObject) {
        this.view = component;
        this.m_n19 = component.GetChild("n19");
        this.m_n20 = component.GetChild("n20");
        this.m_n21 = component.GetChild("n21");
        this.m_n22 = component.GetChild("n22");
        this.m_n23 = component.GetChild("n23");
        this.m_n24 = component.GetChild("n24");
        this.m_n25 = component.GetChild("n25");
        this.m_n26 = component.GetChild("n26");
        this.m_n27 = component.GetChild("n27");
        this.m_n28 = component.GetChild("n28");
        this.m_n29 = component.GetChild("n29");
        this.m_n30 = component.GetChild("n30");
        this.m_n31 = component.GetChild("n31");
        this.m_n32 = component.GetChild("n32");
        this.m_n33 = component.GetChild("n33");
        this.m_n34 = component.GetChild("n34");
        this.m_n35 = component.GetChild("n35");
        this.m_n36 = component.GetChild("n36");
        this.m_n37 = component.GetChild("n37");
        this.m_n38 = component.GetChild("n38");
        this.m_n39 = component.GetChild("n39");
        this.m_n40 = component.GetChild("n40");
        this.m_lock1 = component.GetChild("lock1");
        this.m_lock2 = UI_lock0_1.default.createInstance(component.GetChild("lock2"), WorldContextObject);
        this.m_t0 = component.GetTransition("t0");
    }
}
exports.default = UI_lock1;
//# sourceMappingURL=UI_lock1.js.map