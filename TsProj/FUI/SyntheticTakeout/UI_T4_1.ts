/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_T4_1 {

	public m_4:fgui.GImage;
	public m_Mask:fgui.GGraph;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvwfi040";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "T4-1";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_T4_1.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_T4_1 {
		var obj = new UI_T4_1();
		if(component==null){component = UI_T4_1.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_4 = <fgui.GImage>component.GetChild("4");
		this.m_Mask = <fgui.GGraph>component.GetChild("Mask");
		this.m_t0 = component.GetTransition("t0");
	}
}