/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnOK from "./UI_BtnOK";

import * as fgui from "ue"
export default class UI_FireDialog {

	public m_BackGround:fgui.GImage;
	public m_closeButton:fgui.GButton;
	public m_TextTitle:fgui.GTextField;
	public m_TextFire:fgui.GTextField;
	public m_BtnOK:UI_BtnOK;
	public static URL:string = "ui://n16w4m5pqb9d3b";
	public static Package:string  = "Popup";
	public static Component:string  = "FireDialog";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_FireDialog.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_FireDialog {
		var obj = new UI_FireDialog();
		if(component==null){component = UI_FireDialog.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BackGround = <fgui.GImage>component.GetChild("BackGround");
		this.m_closeButton = <fgui.GButton>component.GetChild("closeButton");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_TextFire = <fgui.GTextField>component.GetChild("TextFire");
		this.m_BtnOK =  UI_BtnOK.createInstance(component.GetChild("BtnOK") as fgui.GComponent, WorldContextObject);
	}
}