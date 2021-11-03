/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Bar1 from "./UI_Bar1";
import UI_Button from "./UI_Button";

import * as fgui from "ue"
export default class UI_TaskBar {

	public m_c1:fgui.GController;
	public m_TaskBar:fgui.GImage;
	public m_icon3:fgui.GImage;
	public m_AmountBox:fgui.GImage;
	public m_title:fgui.GTextField;
	public m_Bar1:UI_Bar1;
	public m_text:fgui.GTextField;
	public m_MoneyText:fgui.GTextField;
	public m_BtnReceive:UI_Button;
	public m_text2:fgui.GTextField;
	public m_text3:fgui.GTextField;
	public static URL:string = "ui://rr0e2yhy9ab9h";
	public static Package:string  = "DailyTask";
	public static Component:string  = "TaskBar";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TaskBar.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TaskBar {
		var obj = new UI_TaskBar();
		if(component==null){component = UI_TaskBar.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_c1 = component.GetController("c1");
		this.m_TaskBar = <fgui.GImage>component.GetChild("TaskBar");
		this.m_icon3 = <fgui.GImage>component.GetChild("icon3");
		this.m_AmountBox = <fgui.GImage>component.GetChild("AmountBox");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_Bar1 =  UI_Bar1.createInstance(component.GetChild("Bar1") as fgui.GComponent, WorldContextObject);
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_MoneyText = <fgui.GTextField>component.GetChild("MoneyText");
		this.m_BtnReceive =  UI_Button.createInstance(component.GetChild("BtnReceive") as fgui.GComponent, WorldContextObject);
		this.m_text2 = <fgui.GTextField>component.GetChild("text2");
		this.m_text3 = <fgui.GTextField>component.GetChild("text3");
	}
}