import { Pencil, Check, X, Trash2 } from "lucide-react";
import { useState } from "react";
import { StatusToggle } from "../../../shared/components/ui/statusToggle";
import type { ConfigRateResponseDTO } from "../types/get-all-config-rates.type";

interface Props {
  rates: ConfigRateResponseDTO[];

  onEdit: (rate: ConfigRateResponseDTO) => void;

  onToggleStatus: (rate: ConfigRateResponseDTO) => void;

  addMode: boolean;

  setAddMode: (value: boolean) => void;
}

export const ConfigRateTable = ({
  rates,
  onEdit,
  onToggleStatus,
  addMode,
  setAddMode,
}: Props) => {
  const [editId, setEditId] = useState<string | null>(null);

  const [draft, setDraft] = useState<ConfigRateResponseDTO | null>(null);

  const startEdit = (rate: ConfigRateResponseDTO) => {
    setEditId(rate.id);

    setDraft({ ...rate });
  };

  const cancelEdit = () => {
    setEditId(null);

    setDraft(null);
  };

  const saveEdit = () => {
    if (!draft) return;

    onEdit(draft);

    setEditId(null);

    setDraft(null);
  };

  return (
    <div className="bg-card">
      {/* HEADER */}

      <div
        className="
grid
grid-cols-[2fr_1.3fr_110px_90px_100px_120px_60px_70px]
gap-4
items-center
border-b
border-border
px-6
py-4
text-[11px]
uppercase
tracking-wider
text-muted-foreground
font-sans
"
      >
        <span>Item</span>

        <span>Brand</span>

        <span className="text-right">Rate</span>

        <span className="text-right">Margin</span>

        <span>Unit</span>

        <span className="text-right">Final</span>
      </div>

      {/* EMPTY STATE */}

      {rates.length === 0 && !addMode && (
        <div
          className="
flex
items-center
justify-center
h-40
text-sm
text-muted-foreground
font-sans
"
        >
          No configuration rates available.
        </div>
      )}

      {/* DATA ROWS */}

      {rates.map((rate) => (
        <div
          key={rate.id}
          className="
grid
grid-cols-[2fr_1.3fr_110px_90px_100px_120px_60px_70px]
gap-4
items-center
px-6
py-
border-b
border-border
transition-colors
hover:bg-muted/20
"
        >
          {editId === rate.id && draft ? (
            <>
              <input
                className="
w-full
px-2.5
py-2
rounded-lg
border
border-border
bg-background
text-sm
"
                value={draft.itemName}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    itemName: e.target.value,
                  })
                }
              />

              <input
                className="
w-full
px-2.5
py-2
rounded-lg
border
border-border
bg-background
text-sm
"
                value={draft.brand}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    brand: e.target.value,
                  })
                }
              />

              <input
                type="number"
                className="
w-full
px-2.5
py-2
rounded-lg
border
border-border
bg-background
text-sm
text-right
"
                value={draft.rate}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    rate: Number(e.target.value),
                  })
                }
              />

              <input
                type="number"
                className="
w-full
px-2.5
py-2
rounded-lg
border
border-border
bg-background
text-sm
text-right
"
                value={draft.marginPercent}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    marginPercent: Number(e.target.value),
                  })
                }
              />

              <span className="text-sm">{draft.unit}</span>

              <span
                className="
font-bold
text-accent
text-right
"
              >
                ₹
                {Math.round(
                  draft.rate + (draft.rate * draft.marginPercent) / 100,
                )}
              </span>

              <div />

              <div
                className="
flex
justify-center
gap-2
"
              >
                <button
                  onClick={saveEdit}
                  className="
p-1.5
rounded-lg
text-accent
hover:bg-muted
"
                >
                  <Check size={15} />
                </button>

                <button
                  onClick={cancelEdit}
                  className="
p-1.5
rounded-lg
hover:bg-muted
"
                >
                  <X size={15} />
                </button>
              </div>
            </>
          ) : (
            <>
              <p
                className="
font-medium
text-foreground
font-sans
truncate
"
              >
                {rate.itemName}
              </p>

              <p
                className="
text-sm
text-muted-foreground
truncate
"
              >
                {rate.brand}
              </p>

              <p
                className="
text-sm
text-right
"
              >
                ₹{rate.rate}
              </p>

              <p
                className="
text-sm
text-right
text-muted-foreground
"
              >
                {rate.marginPercent}%
              </p>

              <p
                className="
text-sm
text-muted-foreground
"
              >
                {rate.unit}
              </p>

              <p
                className="
font-bold
text-accent
text-right
"
              >
                ₹{rate.finalRate}
              </p>

              <div
                className="
flex
justify-center
"
              >
                <StatusToggle
                  isActive={rate.isActive}
                  onClick={() => onToggleStatus(rate)}
                />
              </div>

              <div
                className="
flex
justify-center
gap-1
"
              >
                <button
                  onClick={() => startEdit(rate)}
                  className="
p-2
rounded-lg
text-muted-foreground
hover:bg-muted
hover:text-accent
"
                >
                  <Pencil size={15} />
                </button>

                <button
                  className="
p-2
rounded-lg
text-muted-foreground
hover:bg-muted
hover:text-destructive
"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </>
          )}
        </div>
      ))}

      {/* INLINE ADD */}

      {addMode && (
        <div
          className="
grid
grid-cols-[2fr_1.3fr_110px_90px_100px_120px_60px_70px]
gap-4
items-center
border-t
border-border
px-6
py-5
"
        >
          <input
            placeholder="Item name"
            className="
px-2.5
py-2
rounded-lg
border
border-border
text-sm
"
          />

          <input
            placeholder="Brand"
            className="
px-2.5
py-2
rounded-lg
border
border-border
text-sm
"
          />

          <input
            placeholder="Rate"
            type="number"
            className="
px-2.5
py-2
rounded-lg
border
border-border
text-sm
text-right
"
          />

          <input
            placeholder="Margin"
            type="number"
            className="
px-2.5
py-2
rounded-lg
border
border-border
text-sm
text-right
"
          />

          <span className="text-sm">sq.ft</span>

          <span
            className="
font-bold
text-accent
text-right
"
          >
            ₹0
          </span>

          <div />

          <div
            className="
flex
justify-center
gap-2
"
          >
            <button
              className="
p-1.5
rounded-lg
text-accent
hover:bg-muted
"
              onClick={() => {
                console.log("Create API later");
                setAddMode(false);
              }}
            >
              <Check size={15} />
            </button>

            <button
              className="
p-1.5
rounded-lg
hover:bg-muted
"
              onClick={() => setAddMode(false)}
            >
              <X size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
