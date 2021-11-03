/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_lock0 from "./UI_lock0";

import * as fgui from "ue"
export default class UI_lock1 {

	public m_n19:fgui.GImage;
	public m_n20:fgui.GImage;
	public m_n21:fgui.GImage;
	public m_n22:fgui.GImage;
	public m_n23:fgui.GImage;
	public m_n24:fgui.GImage;
	public m_n25:fgui.GImage;
	public m_n26:fgui.GImage;
	public m_n27:fgui.GImage;
	public m_n28:fgui.GImage;
	public m_n29:fgui.GImage;
	public m_n30:fgui.GImage;
	public m_n31:fgui.GImage;
	public m_n32:fgui.GImage;
	public m_n33:fgui.GImage;
	public m_n34:fgui.GImage;
	public m_n35:fgui.GImage;
	public m_n36:fgui.GImage;
	public m_n37:fgui.GImage;
	public m_n38:fgui.GImage;
	public m_n39:fgui.GImage;
	public m_n40:fgui.GImage;
	public m_lock1:fgui.GImage;
	public m_lock2:UI_lock0;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://7d8qawjuhjs826";
	public static Package:string  = "Town";
	public static Component:string  = "lock1";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_lock1.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_lock1 {
		var obj = new UI_lock1();
		if(component==null){component = UI_lock1.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n19 = <fgui.GImage>component.GetChild("n19");
		this.m_n20 = <fgui.GImage>component.GetChild("n20");
		this.m_n21 = <fgui.GImage>component.GetChild("n21");
		this.m_n22 = <fgui.GImage>component.GetChild("n22");
		this.m_n23 = <fgui.GImage>component.GetChild("n23");
		this.m_n24 = <fgui.GImage>component.GetChild("n24");
		this.m_n25 = <fgui.GImage>component.GetChild("n25");
		this.m_n26 = <fgui.GImage>component.GetChild("n26");
		this.m_n27 = <fgui.GImage>component.GetChild("n27");
		this.m_n28 = <fgui.GImage>component.GetChild("n28");
		this.m_n29 = <fgui.GImage>component.GetChild("n29");
		this.m_n30 = <fgui.GImage>component.GetChild("n30");
		this.m_n31 = <fgui.GImage>component.GetChild("n31");
		this.m_n32 = <fgui.GImage>component.GetChild("n32");
		this.m_n33 = <fgui.GImage>component.GetChild("n33");
		this.m_n34 = <fgui.GImage>component.GetChild("n34");
		this.m_n35 = <fgui.GImage>component.GetChild("n35");
		this.m_n36 = <fgui.GImage>component.GetChild("n36");
		this.m_n37 = <fgui.GImage>component.GetChild("n37");
		this.m_n38 = <fgui.GImage>component.GetChild("n38");
		this.m_n39 = <fgui.GImage>component.GetChild("n39");
		this.m_n40 = <fgui.GImage>component.GetChild("n40");
		this.m_lock1 = <fgui.GImage>component.GetChild("lock1");
		this.m_lock2 =  UI_lock0.createInstance(component.GetChild("lock2") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}