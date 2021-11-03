/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnHelp {

	public m_button:fgui.GController;
	public m_bottom:fgui.GImage;
	public m_icon:fgui.GImage;
	public m_text:fgui.GTextField;
	public static URL:string = "ui://tqsc8htvpip1n";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "BtnHelp";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnHelp.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnHelp {
		var obj = new UI_BtnHelp();
		if(component==null){component = UI_BtnHelp.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_bottom = <fgui.GImage>component.GetChild("bottom");
		this.m_icon = <fgui.GImage>component.GetChild("icon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
	}
}