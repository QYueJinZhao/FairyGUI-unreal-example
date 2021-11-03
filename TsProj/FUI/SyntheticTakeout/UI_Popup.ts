/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnInteraction from "./UI_BtnInteraction";

import * as fgui from "ue"
export default class UI_Popup {

	public m_BG:fgui.GImage;
	public m_icon:fgui.GImage;
	public m_text:fgui.GTextField;
	public m_closeButton:UI_x;
	public m_BtnAutocomplete:UI_BtnInteraction;
	public m_TextTitle:fgui.GTextField;
	public static URL:string = "ui://tqsc8htvpip14";
	public static Package:string  = "SyntheticTakeout";
	public static Component:string  = "Popup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_Popup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_Popup {
		var obj = new UI_Popup();
		if(component==null){component = UI_Popup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BG = <fgui.GImage>component.GetChild("BG");
		this.m_icon = <fgui.GImage>component.GetChild("icon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_BtnAutocomplete =  UI_BtnInteraction.createInstance(component.GetChild("BtnAutocomplete") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
	}
}