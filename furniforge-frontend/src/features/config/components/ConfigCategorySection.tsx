import { Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "../../../shared/components/ui/button";

import { ConfigRateTable } from "./ConfigRateTable";

import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import type { ConfigCategory } from "../../../types/enums/config-type.enum";
import type { ConfigRateFormValues } from "../validation/config-rate-form.validation";

interface Props {
  title: string;

  category: ConfigCategory;

  rates: ConfigRateResponseDTO[];

  onCreate: (
    category: ConfigCategory,
    values: ConfigRateFormValues,
  ) => Promise<void>;

  isCreating: boolean;
}

export function ConfigCategorySection({
  title,
  category,
  rates,
  onCreate,
  isCreating,
}: Props) {
  const [addMode, setAddMode] = useState(false);

  return (
    <section
      className="
bg-card
rounded-2xl
p-6
shadow-warm
border
border-border
"
    >
      <div
        className="
flex
items-center
justify-between
mb-5
"
      >
        <h2
          className="
text-lg
font-bold
font-display
"
        >
          {title}
        </h2>

        <Button
          variant="outline"
          size="sm"
          className="gap-1 h-8 text-xs"
          onClick={() => setAddMode(true)}
        >
          <Plus size={12} />
          Add
        </Button>
      </div>

      <ConfigRateTable
        category={category}
        rates={rates}
        addMode={addMode}
        setAddMode={setAddMode}
        onCreate={onCreate}
        isCreating={isCreating}
      />
    </section>
  );
}
