/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_accelerate {

	public m_button:fgui.GController;
	public m_Bottom:fgui.GImage;
	public m_accelerate:fgui.GImage;
	public m_x2:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip1j";
	public static Package:string  = "BUFF";
	public static Component:string  = "accelerate";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_accelerate.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_accelerate {
		var obj = new UI_accelerate();
		if(component==null){component = UI_accelerate.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bottom = <fgui.GImage>component.GetChild("Bottom");
		this.m_accelerate = <fgui.GImage>component.GetChild("accelerate");
		this.m_x2 = <fgui.GImage>component.GetChild("x2");
		this.m_t0 = component.GetTransition("t0");
	}
}