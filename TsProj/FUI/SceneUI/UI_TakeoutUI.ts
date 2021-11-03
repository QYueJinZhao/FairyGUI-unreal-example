/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_TakeoutUI {

	public m_Bottom:fgui.GImage;
	public m_Grade:fgui.GLoader;
	public m_OrderIcon:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_expression:fgui.GLoader;
	public m_text:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://vw08vbbghzjj14";
	public static Package:string  = "SceneUI";
	public static Component:string  = "TakeoutUI";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_TakeoutUI.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_TakeoutUI {
		var obj = new UI_TakeoutUI();
		if(component==null){component = UI_TakeoutUI.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_Bottom = <fgui.GImage>component.GetChild("Bottom");
		this.m_Grade = <fgui.GLoader>component.GetChild("Grade");
		this.m_OrderIcon = <fgui.GLoader>component.GetChild("OrderIcon");
		this.m_name = <fgui.GTextField>component.GetChild("name");
		this.m_expression = <fgui.GLoader>component.GetChild("expression");
		this.m_text = <fgui.GTextField>component.GetChild("text");
		this.m_t0 = component.GetTransition("t0");
	}
}