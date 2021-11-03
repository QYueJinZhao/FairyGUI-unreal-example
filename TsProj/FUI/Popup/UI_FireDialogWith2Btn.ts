/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_BtnCancel from "./UI_BtnCancel";
import UI_BtnOK from "./UI_BtnOK";

import * as fgui from "ue"
export default class UI_FireDialogWith2Btn {

	public m_BackGround:fgui.GImage;
	public m_closeButton:fgui.GButton;
	public m_TextTitle:fgui.GTextField;
	public m_TextFire:fgui.GTextField;
	public m_BtnCancel:UI_BtnCancel;
	public m_BtnOK:UI_BtnOK;
	public static URL:string = "ui://n16w4m5pqb9d35";
	public static Package:string  = "Popup";
	public static Component:string  = "FireDialogWith2Btn";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_FireDialogWith2Btn.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_FireDialogWith2Btn {
		var obj = new UI_FireDialogWith2Btn();
		if(component==null){component = UI_FireDialogWith2Btn.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BackGround = <fgui.GImage>component.GetChild("BackGround");
		this.m_closeButton = <fgui.GButton>component.GetChild("closeButton");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_TextFire = <fgui.GTextField>component.GetChild("TextFire");
		this.m_BtnCancel =  UI_BtnCancel.createInstance(component.GetChild("BtnCancel") as fgui.GComponent, WorldContextObject);
		this.m_BtnOK =  UI_BtnOK.createInstance(component.GetChild("BtnOK") as fgui.GComponent, WorldContextObject);
	}
}