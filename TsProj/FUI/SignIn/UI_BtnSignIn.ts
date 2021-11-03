/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSignIn {

	public m_button:fgui.GController;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://h9dczuj89xrps";
	public static Package:string  = "SignIn";
	public static Component:string  = "BtnSignIn";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSignIn.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSignIn {
		var obj = new UI_BtnSignIn();
		if(component==null){component = UI_BtnSignIn.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_n0 = <fgui.GImage>component.GetChild("n0");
	}
}