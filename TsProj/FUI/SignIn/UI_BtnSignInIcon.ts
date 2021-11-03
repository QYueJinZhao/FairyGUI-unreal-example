/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSignInIcon {

	public m_button:fgui.GController;
	public m_Bg:fgui.GImage;
	public m_icon:fgui.GImage;
	public static URL:string = "ui://h9dczuj89xrpe";
	public static Package:string  = "SignIn";
	public static Component:string  = "BtnSignInIcon";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSignInIcon.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSignInIcon {
		var obj = new UI_BtnSignInIcon();
		if(component==null){component = UI_BtnSignInIcon.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_Bg = <fgui.GImage>component.GetChild("Bg");
		this.m_icon = <fgui.GImage>component.GetChild("icon");
	}
}