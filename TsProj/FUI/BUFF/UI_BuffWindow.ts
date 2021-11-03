/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnCancel from "./UI_BtnCancel";
import UI_BtnReceive from "./UI_BtnReceive";

import * as fgui from "ue"
export default class UI_BuffWindow {

	public m_BackGround:fgui.GImage;
	public m_TextTitle:fgui.GTextField;
	public m_closeButton:UI_x;
	public m_BtnCancel:UI_BtnCancel;
	public m_BtnReceive:UI_BtnReceive;
	public m_text:fgui.GTextField;
	public static URL:string = "ui://tm2lcvzyjdb71s";
	public static Package:string  = "BUFF";
	public static Component:string  = "BuffWindow";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BuffWindow.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BuffWindow {
		var obj = new UI_BuffWindow();
		if(component==null){component = UI_BuffWindow.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_BackGround = <fgui.GImage>component.GetChild("BackGround");
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_BtnCancel =  UI_BtnCancel.createInstance(component.GetChild("BtnCancel") as fgui.GComponent, WorldContextObject);
		this.m_BtnReceive =  UI_BtnReceive.createInstance(component.GetChild("BtnReceive") as fgui.GComponent, WorldContextObject);
		this.m_text = <fgui.GTextField>component.GetChild("text");
	}
}