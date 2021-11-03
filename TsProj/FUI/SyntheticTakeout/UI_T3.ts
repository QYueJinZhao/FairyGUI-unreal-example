/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_T3_1 from "./UI_T3_1";

import * as fgui from "ue"
export default class UI_T3 {

	public m_T3_1:UI_T3_1;
	public m_icon1:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvwfi03x";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "T3";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_T3.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_T3 {
		var obj = new UI_T3();
		if(component==null){component = UI_T3.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_T3_1 =  UI_T3_1.createInstance(component.GetChild("T3-1") as fgui.GComponent, WorldContextObject);
		this.m_icon1 = <fgui.GImage>component.GetChild("icon1");
		this.m_t0 = component.GetTransition("t0");
	}
}