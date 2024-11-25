import { IInputs } from "../generated/ManifestTypes";

let _context: ComponentFramework.Context<IInputs>;
declare let Xrm: any;

export const setContext = (context: ComponentFramework.Context<IInputs>) => {
  _context = context;
};

export const createNewEmptyLine = async () => {  
    try {
      // Get the current entity form context
      const formContext = Xrm.Page || Xrm.FormContext; // For backward compatibility
  
      // Get the entity ID and entity name of the current form
      const entityId = formContext.data.entity.getId().replace("{", "").replace("}", ""); // Remove curly braces
      const entityName = formContext.data.entity.getEntityName();
  
      // Log the entity ID and name for debugging
      console.log(`Executing on entity: ${entityName}, ID: ${entityId}`);
  
      // Define the custom action name and payload (if needed)
      const executeCreateNewEmptyRowRequest = {
        // Parameters
        orderId: entityId, // Edm.String
    
        getMetadata: function () {
            return {
                boundParameter: null,
                parameterTypes: {
                    orderId: { typeName: "Edm.String", structuralProperty: 1 }
                },
                operationType: 0, operationName: "aud_CreateNewEmptyRow"
            };
        }
      };
  
      // Call the custom action using the Web API
      Xrm.WebApi.execute(executeCreateNewEmptyRowRequest).then(
          function success(response : any) {
              Xrm.Page.data.refresh();
              const subgridControl = formContext.getControl("Subgrid_new_1");
              subgridControl.refresh();
          }
      ).catch(function (error : any) {
          console.log(error.message);
      });
  
    } catch (error) {
      console.error("Error details:", error);
    }
  };
  