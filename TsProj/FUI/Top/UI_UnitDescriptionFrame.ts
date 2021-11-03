/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_x from "./UI_x";

import * as fgui from "ue"
export default class UI_UnitDescriptionFrame {

	public m_n1:fgui.GImage;
	public m_closeButton:UI_x;
	public m_TextTitle:fgui.GTextField;
	public m_n4:fgui.GList;
	public static URL:string = "ui://p6ocxgya9ti11l";
	public static Package:string  = "Top";
	public static Component:string  = "UnitDescriptionFrame";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_UnitDescriptionFrame.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_UnitDescriptionFrame {
		var obj = new UI_UnitDescriptionFrame();
		if(component==null){component = UI_UnitDescriptionFrame.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_n1 = <fgui.GImage>component.GetChild("n1");
		this.m_closeButton =  UI_x.createInstance(component.GetChild("closeButton") as fgui.GComponent, WorldContextObject);
		this.m_TextTitle = <fgui.GTextField>component.GetChild("TextTitle");
		this.m_n4 = <fgui.GList>component.GetChild("n4");
	}
}