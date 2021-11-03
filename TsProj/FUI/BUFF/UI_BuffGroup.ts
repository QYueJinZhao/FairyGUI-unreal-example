/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import * as fgui from "ue"
export default class UI_BuffGroup {

	public m_group:fgui.GList;
	public static URL:string = "ui://tm2lcvzypip1e";
	public static Package:string  = "BUFF";
	public static Component:string  = "BuffGroup";
	public view : fgui.GComponent;

	public static  CreateComponent(WorldContextObject: fgui.Object):fgui.GComponent {
		return fgui.UIPackage.CreateObjectFromURL(UI_BuffGroup.URL, WorldContextObject, fgui.GComponent.StaticClass()) as fgui.GComponent;
	}

	public static createInstance(component:fgui.GComponent, WorldContextObject: fgui.Object):UI_BuffGroup {
		var obj = new UI_BuffGroup();
		if(component==null){component = UI_BuffGroup.CreateComponent(WorldContextObject);}
		obj.Bind(component, WorldContextObject);
		return obj;
	}

	public  Bind(component:fgui.GComponent, WorldContextObject: fgui.Object):void {
		this.view = component;

		this.m_group = <fgui.GList>component.GetChild("group");
	}
}