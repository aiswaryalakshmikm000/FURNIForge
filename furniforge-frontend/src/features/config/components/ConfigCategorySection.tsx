import { Plus } from "lucide-react";
import { Button } from "../../../shared/components/ui/button";
import { ConfigRateTable } from "./ConfigRateTable";
import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";
import { useState } from "react";

interface Props {
  title: string;
  rates: ConfigRateResponseDTO[];
  onEdit: (rate: ConfigRateResponseDTO) => void;
  onToggleStatus: (rate: ConfigRateResponseDTO) => void;
}

export const ConfigCategorySection = ({
  title,
  rates,
  onEdit,
  onToggleStatus,
}: Props) => {
  const [addMode, setAddMode] = useState(false);

  return (
    <section
      className="
      bg-card 
      rounded-2xl
      border
      border-border
      shadow-warm
      p-6
      "
    >
      <div
        className="
        flex
        justify-between
        items-center
        "
      >
        <h2
          className="
          text-lg
          font-display
          font-bold
          "
        >
          {title}
        </h2>

        <Button
          variant="outline"
          size="sm"
          className="gap-1"
          onClick={() => setAddMode(true)}
        >
          <Plus size={14} />
          Add
        </Button>
      </div>

      <ConfigRateTable
        rates={rates}
        addMode={addMode}
        setAddMode={setAddMode}
        onEdit={onEdit}
        onToggleStatus={onToggleStatus}
      />
    </section>
  );
};
