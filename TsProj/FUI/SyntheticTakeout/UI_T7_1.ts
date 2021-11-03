/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_T7_1 {

	public m_7:fgui.GImage;
	public m_Mask:fgui.GGraph;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvwfi046";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "T7-1";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_T7_1.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_T7_1 {
		var obj = new UI_T7_1();
		if(component==null){component = UI_T7_1.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_7 = <fgui.GImage>component.GetChild("7");
		this.m_Mask = <fgui.GGraph>component.GetChild("Mask");
		this.m_t0 = component.GetTransition("t0");
	}
}