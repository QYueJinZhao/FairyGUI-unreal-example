/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_T2_1 from "./UI_T2_1";

import * as fgui from "ue"
export default class UI_T2 {

	public m_T2_1:UI_T2_1;
	public m_icon2:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvwfi03v";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "T2";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_T2.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_T2 {
		var obj = new UI_T2();
		if(component==null){component = UI_T2.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_T2_1 =  UI_T2_1.createInstance(component.GetChild("T2-1") as fgui.GComponent, WorldContextObject);
		this.m_icon2 = <fgui.GImage>component.GetChild("icon2");
		this.m_t0 = component.GetTransition("t0");
	}
}