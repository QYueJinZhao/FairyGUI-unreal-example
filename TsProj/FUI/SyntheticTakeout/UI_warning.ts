/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_warning {

	public m_warning1:fgui.GImage;
	public m_WarningLine:fgui.GImage;
	public m_warning2:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tqsc8htvpip1o";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "warning";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_warning.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_warning {
		var obj = new UI_warning();
		if(component==null){component = UI_warning.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_warning1 = <fgui.GImage>component.GetChild("warning1");
		this.m_WarningLine = <fgui.GImage>component.GetChild("WarningLine");
		this.m_warning2 = <fgui.GImage>component.GetChild("warning2");
		this.m_t0 = component.GetTransition("t0");
	}
}