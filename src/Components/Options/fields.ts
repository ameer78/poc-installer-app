export interface DFEField {
    id: string;
    label: string;
    type: string;
    name: string;
    required: boolean;
  }

export const fields: DFEField[] = [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      name: "firstName",
      required: true,
    },
    {
        id: "lastName",
        label: "Last Name",
        type: "text",
        name: "lastName",
        required: true,
      },
      {
        id: "company",
        label: "Company",
        type: "text",
        name: "company",
        required: true,
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        name: "email",
        required: true,
      },

      {
        id: "OS",
        label: "OS",
        type: "text",
        name: "OS",
        required: true,
      },
  ];
  
export const patterns = { "email": /^\S+@\S+$/i };

export const _getPatternValue_ = (key: string) => (obj: Record<string, any>) => obj[key];