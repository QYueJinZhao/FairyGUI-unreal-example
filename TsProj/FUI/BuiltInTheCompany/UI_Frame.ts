/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_Frame {

	public m_LowerLeft:fgui.GImage;
	public m_LowerRight:fgui.GImage;
	public m_UpperLeft:fgui.GImage;
	public m_UpperRight:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://bk2v2a36ivrzg";
	public static Package:string  = "BuiltInTheCompany";
	public static Component:string  = "Frame";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Frame.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Frame {
		var obj = new UI_Frame();
		if(component==null){component = UI_Frame.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_LowerLeft = <fgui.GImage>component.GetChild("LowerLeft");
		this.m_LowerRight = <fgui.GImage>component.GetChild("LowerRight");
		this.m_UpperLeft = <fgui.GImage>component.GetChild("UpperLeft");
		this.m_UpperRight = <fgui.GImage>component.GetChild("UpperRight");
		this.m_t0 = component.GetTransition("t0");
	}
}