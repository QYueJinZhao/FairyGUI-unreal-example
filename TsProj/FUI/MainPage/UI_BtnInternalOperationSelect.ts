/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BtnInternalOperationSelect {

	public m_button:fgui.GController;
	public m_btn:fgui.GImage;
	public static URL:string = "ui://sn18zihkhb0y29";
	public static Package:string  = "MainPage";
	public static Component:string  = "BtnInternalOperationSelect";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BtnInternalOperationSelect.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BtnInternalOperationSelect {
		var obj = new UI_BtnInternalOperationSelect();
		if(component==null){component = UI_BtnInternalOperationSelect.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_button = component.GetController("button");
		this.m_btn = <fgui.GImage>component.GetChild("btn");
	}
}