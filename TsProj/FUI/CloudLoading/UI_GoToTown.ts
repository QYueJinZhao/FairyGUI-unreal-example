/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_GoToTown {

	public m_n0:fgui.GTextField;
	public m_n1:fgui.GTextField;
	public m_n2:fgui.GTextField;
	public m_n3:fgui.GTextField;
	public m_n4:fgui.GTextField;
	public m_n5:fgui.GTextField;
	public m_n6:fgui.GTextField;
	public m_n7:fgui.GTextField;
	public m_n8:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://4pjqltd9rtxm40";
	public static Package:string  = "CloudLoading";
	public static Component:string  = "GoToTown";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_GoToTown.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_GoToTown {
		var obj = new UI_GoToTown();
		if(component==null){component = UI_GoToTown.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GTextField>component.GetChild("n0");
		this.m_n1 = <fgui.GTextField>component.GetChild("n1");
		this.m_n2 = <fgui.GTextField>component.GetChild("n2");
		this.m_n3 = <fgui.GTextField>component.GetChild("n3");
		this.m_n4 = <fgui.GTextField>component.GetChild("n4");
		this.m_n5 = <fgui.GTextField>component.GetChild("n5");
		this.m_n6 = <fgui.GTextField>component.GetChild("n6");
		this.m_n7 = <fgui.GTextField>component.GetChild("n7");
		this.m_n8 = <fgui.GTextField>component.GetChild("n8");
		this.m_t0 = component.GetTransition("t0");
	}
}