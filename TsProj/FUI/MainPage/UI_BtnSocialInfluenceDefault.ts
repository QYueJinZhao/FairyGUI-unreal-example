/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnSocialInfluenceDefault {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://sn18zihkhb0y2c";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnSocialInfluenceDefault";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnSocialInfluenceDefault.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnSocialInfluenceDefault {
		var obj = new UI_BtnSocialInfluenceDefault();
		if(component==null){component = UI_BtnSocialInfluenceDefault.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}