import React from "react";
import * as z from "zod";
import { Form } from "../../components/Form";
import { Field } from "../../components/Form/Fields/Field";

type SettingsFormProps = {
  name: string;
  url: string;
  description?: string;
  category?: string;
};

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 character long"),
  url: z.string().min(6, "URL must be at least 6 character long"),
  description: z.string().optional(),
  category: z.string().optional(),
});

export const Settings = () => {
  const settingsDropdownOptions = [
    { value: "Software", label: "Software" },
    { value: "Marketing", label: "Marketing" },
    { value: "Business", label: "Business" },
  ];
  return (
    <div>
      <Form<SettingsFormProps, typeof schema>
        id="settings-form"
        onSubmit={(vals) => console.log("SUBMITTED", vals)}
        schema={schema}
      >
        {({ register, formState }) => (
          <>
            <Field>
              <Field.Label>Name</Field.Label>
              <Field.Input
                placeholder="Name"
                error={formState.errors["name"]}
                registration={register("name")}
              />
            </Field>
            <Field>
              <Field.Label>URL</Field.Label>
              <Field.Input
                placeholder="URL"
                error={formState.errors["url"]}
                registration={register("url")}
              />
            </Field>
            <Field>
              <Field.Label>Description</Field.Label>
              <Field.Input
                placeholder="Description"
                error={formState.errors["description"]}
                registration={register("description")}
              />
            </Field>
            <Field>
              <Field.Label>Category</Field.Label>
              <Field.Select options={settingsDropdownOptions} />
            </Field>
          </>
        )}
      </Form>
      <button form="settings-form" type="submit">
        Save changes
      </button>
    </div>
  );
};
