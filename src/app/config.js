app.cfg = {
	//
	// General UI
	//
	
	// Maximum number of entries
	MAX_NB_ENTRIES: 30,
	
	TIMEOUT_VIEWER_LOAD: 5000,
	TIMEOUT_VIEWER_REQUEST: 12000,
	TIMEOUT_BUILDER_REQUEST: 20000,
	
	// Control the social button configuration in builder
	// If disabled author won't be able to activate them
	// if disabled after the app has been created, this will override the settings
	HEADER_SOCIAL: {
		facebook: true,
		twitter: true,
		bitly: {
			enable: true,
			login: "esristorymaps",
			key: "R_14fc9f92e48f7c78c21db32bd01f7014"
		}
	},
	
	//
	// Layouts
	//
	
	// Size and position of represent the value relative to the Map
	LAYOUTS: [
		{
			id: "tab",
			thumbnail: "resources/tpl/builder/icons/builder-layout-tab.png",
			liveApp: "http://links.esri.com/storymaps/map_series_example_tabbed",
			sizes: { small: '20%', medium: '30%', large: '40%' },
			positions: ["left", "right"],
			themes: [
				{
					name: "tab-default-4", 
					group: "dark",
					themeMajor: "black", 
					header: "#283239",
					headerTitle: "#FFFFFF", 
					headerText: "#C5D5D5", 
					panel: "#000000", 
					text: "#D8D8D8", 
					textLink: "#CCCCCC", 
					media: "#B8B8B8", 
					mapControls: "#404040",	
					softText: "#C5D5D5", 
					softBtn: "#C5D5D5", 
					esriLogo: "white",
					esriLogoMobile: "white",
					tab: "#666666",
					tabActive: "#B8B8B8",
					tabHover: "#8D8F91",
					tabText: "#FEE680",
					tabTextHover: "#FEE680",
					tabTextActive: "#FEE680"
				}
			]
		}
	],
	
	/*
	 * Builder
	 */
	
	HELP_URL: "http://links.esri.com/storymaps/map_series_app",
	HELP_URL_PORTAL: "#/Story_Map_Series/0193000000vs000000/",
	
	// Control the authorized data source (for initialization and import screen)
	AUTHORIZED_IMPORT_SOURCE: {
		flickr: true,
		facebook: true,
		picasa: true,
		youtube: true
	},
	
	// Online photo sharing services connection parameters
	FLICKR_API_KEY: "750b36a2ac65a72e03cf9cef06d79f45",
	// This Youtube key is valid for application running on arcgis.com and esri.com domains
	// If the application is deployed on Portal for ArcGIS or your own server, the Youtube api call 
	//  won't be perfomed until you set the following flag and provide your own key
	YOUTUBE_DISABLE_ON_PORTAL: true,
	YOUTUBE_API_KEY: "AIzaSyDevTFP16nz6sA-akiOVi6wWXiplJnQ4qw",
	
	//
	// Builder direct creation
	//
	
	// Text to be used as the browser page title during app creation
	TPL_NAME: "Map Series",
	TPL_ID: "mapseries",
	WEBAPP_TAG: ["Story Map", "Map Series"],
	WEBAPP_KEYWORD_GENERIC: ["JavaScript", "Map", "Mapping Site", "Online Map", "Ready To Use", "selfConfigured", "Web Map"],
	WEBAPP_KEYWORD_APP: ["Story Map", "Story Maps", "MapSeries"],

	//
	// Portal configuration
	//
	
	// Optional array of servers that will leverage CORS (for development or specific cross domain deployment)
	CORS_SERVER: [],
	
	// Optional array of proxy rules
	PROXY_RULES: [
		/*{  
			urlPrefix: "http://services.arcgis.com/",
			proxyUrl: "http://myserver.domain.com/DotNet/proxy.ash"  
		}*/
	],
	
	BING_MAPS_KEY: "",
	HELPER_SERVICES: {
		geometry: {
			//url: location.protocol + "//utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer"
		},
		geocode: [
			/*
			{
				url: location.protocol + "//geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
				name: "My Geocoder"
			}
			*/
		]
	},
	
	// Edit those to set a custom sharing or proxy URL
	// You have to edit those only if your webmap is deployed on Portal for ArcGIS instance and if you are not deploying the template on the Portal webserver
	// If you are using ArcGIS Online or deploying the template on a Portal instance, you don't have to edit those URL
	DEFAULT_SHARING_URL: "//www.arcgis.com/sharing/content/items",
	//DEFAULT_SHARING_URL: "//portal.internal.com/arcgis/sharing/content/items",
	DEFAULT_PROXY_URL: "//www.arcgis.com/sharing/proxy"
	//DEFAULT_PROXY_URL: "//portal.internal.com/arcgis/sharing/proxy"
};
