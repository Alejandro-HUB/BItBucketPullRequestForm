export const inputs = [
  {
    id: 1,
    name: "repository",
    type: "text",
    placeholder: "Repository",
    errorMessage: "Repository is required",
    label: "Repository",
    pattern: "",
    required: true,
    Tag: "select"
  },
  {
    id: 2,
    name: "branch",
    type: "text",
    placeholder: "Branch",
    errorMessage: "Branch is required",
    label: "Branch",
    required: true,
    Tag: "select"
  },
  {
    id: 3,
    name: "databasechanges",
    type: "text",
    placeholder: "Database Changes",
    errorMessage: "Database Changes is required",
    label: "Database Changes",
    required: true,
    Tag: "select",
    values:
    [
      {
        id: 1,
        value: true
      },
      {
        id: 2,
        value: false
      },
    ]
  },
  {
    id: 4,
    name: "qainstructions",
    type: "text",
    placeholder: "QA Instructions",
    errorMessage: "QA Instructions are required.",
    label: "QA Instructions",
    pattern: "",
    required: true,
    Tag: "textarea"
  },
];