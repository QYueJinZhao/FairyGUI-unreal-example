/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnBuff {

	public m_button:fgui.GController;
	public m_Bottom:fgui.GImage;
	public m_icon:fgui.GLoader;
	public m_text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://tm2lcvzypip1n";
	public static Package:string  = "BUFF";
	public static Component:string  = "BtnBuff";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnBuff.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnBuff {
		var obj = new UI_BtnBuff();
		if(component==null){component = UI_BtnBuff.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bottom = <fgui.GImage>component.GetChild("Bottom");
		this.m_icon = <fgui.GLoader>component.GetChild("icon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_t0 = component.GetTransition("t0");
	}
}