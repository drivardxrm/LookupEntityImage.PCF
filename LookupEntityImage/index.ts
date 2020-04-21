import {IInputs, IOutputs} from "./generated/ManifestTypes";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LookupEntityImageControl, {ILookupEntityImageProps} from "./LookupEntityImageControl"

interface LookupValue {

	id: string;
	name?: string;
	entityType: string;
}


export class LookupEntityImage implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	//private _lookup : LookupValue[];


	//private _notifyOutputChanged:() => void;
	private _container: HTMLDivElement;
	private _context: ComponentFramework.Context<IInputs>;
	//private _currentRecord:ComponentFramework.EntityReference;	
	//private _props: ILookupEntityImageProps = {imagedata:""};
	
	
	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
	{
		// Add control initialization code
		this._container = document.createElement("div");
		this._context = context;
		

		container.appendChild(this._container);
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
		let lookup:LookupValue[] =  context.parameters.lookup.raw;
		let imagesize:number =  context.parameters.imagesize.raw || 25; //default 25 pixels
		if(lookup !== null && lookup !== undefined && lookup[0] !== null)
		{
			this.getLookupImage(lookup[0], imagesize);
		}
	}

	/** 
	 * It is called by the framework prior to a control receiving new data. 
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {};
	}

	/** 
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		// Add code to cleanup control if necessary
	}

	private async getLookupImage(lookupvalue:LookupValue, imagesize:number)
	{

		let lookuprecord :ComponentFramework.WebApi.Entity 
				= await this._context.webAPI.retrieveRecord(lookupvalue.entityType, lookupvalue.id, "?$select=entityimage");
		
		
		if(lookuprecord["entityimage"] !== null && lookuprecord["entityimage"] !== undefined && lookuprecord["entityimage"] !== "")
		{;
			let props:ILookupEntityImageProps = {
				imagedata : lookuprecord["entityimage"],
				imagesize : imagesize
			}
			// RENDER React Component
			ReactDOM.render(
				React.createElement(LookupEntityImageControl,props)
				, this._container
			);
		}
		
										 
				
		
		

		
	}
}