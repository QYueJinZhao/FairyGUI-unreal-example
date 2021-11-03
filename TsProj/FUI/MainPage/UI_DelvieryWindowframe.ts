/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";
import UI_BtnHR from "./UI_BtnHR";

import * as fgui from "ue"
export default class UI_DelvieryWindowframe {

	public m_Background:fgui.GImage;
	public m_TitmeImage:fgui.GImage;
	public m_Text:fgui.GTextField;
	public m_closeButton:UI_x;
	public m_DeliveryManNunSum:fgui.GTextField;
	public m_BtnHR:UI_BtnHR;
	public m_Content:fgui.GList;
	public static URL:string = "ui://sn18zihkmos49";
	public static Package:string  = "MainPage";
	public static Component:string  = "DelvieryWindowframe";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DelvieryWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DelvieryWindowframe {
		var obj = new UI_DelvieryWindowframe();
		if(component==null){component = UI_DelvieryWindowframe.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Background = <fgui.GImage>component.GetChild("Background");
		this.m_TitmeImage = <fgui.GImage>component.GetChild("TitmeImage");
		this.m_Text = <fgui.GTextField>component.GetChild("Text");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_DeliveryManNunSum = <fgui.GTextField>component.GetChild("DeliveryManNunSum");
		this.m_BtnHR =  UI_BtnHR.createInstance(component.GetChild("BtnHR") as fgui.GComponent, WorldContextObject);
		this.m_Content = <fgui.GList>component.GetChild("Content");
	}
}