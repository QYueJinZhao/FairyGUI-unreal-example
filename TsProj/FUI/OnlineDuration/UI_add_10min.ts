/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_add_10min {

	public m_text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://5eksxjp2hktbm";
	public static Package:string  = "OnlineDuration";
	public static Component:string  = "add_10min";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_add_10min.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_add_10min {
		var obj = new UI_add_10min();
		if(component==null){component = UI_add_10min.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_t0 = component.GetTransition("t0");
	}
}