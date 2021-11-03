/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Bar2 from "./UI_Bar2";
import UI_BtnMoney from "./UI_BtnMoney";

import * as fgui from "ue"
export default class UI_DailyTaskWindowframe {

	public m_Background:fgui.GImage;
	public m_TitmeImage:fgui.GImage;
	public m_title:fgui.GTextField;
	public m_closeButton:fgui.GButton;
	public m_img:fgui.GImage;
	public m_Content:fgui.GList;
	public m_Bar2:UI_Bar2;
	public m_BtnMoney:UI_BtnMoney;
	public m_Line1:fgui.GImage;
	public m_Line2:fgui.GImage;
	public m_text:fgui.GTextField;
	public m_group:fgui.GGroup;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://rr0e2yhy9ab9f";
	public static Package:string  = "DailyTask";
	public static Component:string  = "DailyTaskWindowframe";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_DailyTaskWindowframe.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_DailyTaskWindowframe {
		var obj = new UI_DailyTaskWindowframe();
		if(component==null){component = UI_DailyTaskWindowframe.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Background = <fgui.GImage>component.GetChild("Background");
		this.m_TitmeImage = <fgui.GImage>component.GetChild("TitmeImage");
		this.m_title = <fgui.GTextField>component.GetChild("title");
		this.m_closeButton = <fgui.GButton>component.GetChild("closeButton");
		this.m_img = <fgui.GImage>component.GetChild("img");
		this.m_Content = <fgui.GList>component.GetChild("Content");
		this.m_Bar2 =  UI_Bar2.createInstance(component.GetChild("Bar2") as fgui.GComponent, WorldContextObject);
		this.m_BtnMoney =  UI_BtnMoney.createInstance(component.GetChild("BtnMoney") as fgui.GComponent, WorldContextObject);
		this.m_Line1 = <fgui.GImage>component.GetChild("Line1");
		this.m_Line2 = <fgui.GImage>component.GetChild("Line2");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_group = <fgui.GGroup>component.GetChild("group");
		this.m_t0 = component.GetTransition("t0");
	}
}