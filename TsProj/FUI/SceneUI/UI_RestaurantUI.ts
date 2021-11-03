/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Bar from "./UI_Bar";

import * as fgui from "ue"
export default class UI_RestaurantUI {

	public m_n0:fgui.GImage;
	public m_Grade:fgui.GLoader;
	public m_OrderIcon:fgui.GLoader;
	public m_text:fgui.GTextField;
	public m_name:fgui.GTextField;
	public m_Bar:UI_Bar;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://vw08vbbglako18";
	public static Package:string  = "SceneUI";
	public static Component:string  = "RestaurantUI";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_RestaurantUI.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_RestaurantUI {
		var obj = new UI_RestaurantUI();
		if(component==null){component = UI_RestaurantUI.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n0 = <fgui.GImage>component.GetChild("n0");
		this.m_Grade = <fgui.GLoader>component.GetChild("Grade");
		this.m_OrderIcon = <fgui.GLoader>component.GetChild("OrderIcon");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_name = <fgui.GTextField>component.GetChild("name");
		this.m_Bar =  UI_Bar.createInstance(component.GetChild("Bar") as fgui.GComponent, WorldContextObject);
		this.m_t0 = component.GetTransition("t0");
	}
}