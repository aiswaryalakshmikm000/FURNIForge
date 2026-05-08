import { useState } from "react";

import { Button } from "../../../../shared/components/ui/button";

import { Edit3, Target } from "lucide-react";

import { Progress } from "./progress";

type Props = {
  achieved: number;
  target: number;
};

export const TargetProgress = ({
  achieved,
  target,
}: Props) => {
  const [targetAmount, setTargetAmount] =
    useState(target);

  const [showEdit, setShowEdit] =
    useState(false);

  const [tempTarget, setTempTarget] =
    useState(target.toString());

  const pct = Math.round(
    (achieved / targetAmount) * 100
  );

  const saveTarget = () => {
    setTargetAmount(Number(tempTarget));
    setShowEdit(false);
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-warm border border-border">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-foreground font-display flex items-center gap-2">
          <Target
            size={18}
            className="text-accent"
          />

          Monthly Target
        </h2>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-accent font-display">
            {pct}%
          </span>

          <Button
            variant="outline"
            size="sm"
            className="gap-1 h-7 text-xs"
            onClick={() => {
              setTempTarget(
                targetAmount.toString()
              );

              setShowEdit(!showEdit);
            }}
          >
            <Edit3 size={12} />
            Set Target
          </Button>
        </div>
      </div>

      {showEdit && (
        <div className="flex items-center gap-2 mb-3">
          <input
            type="number"
            value={tempTarget}
            onChange={(e) =>
              setTempTarget(e.target.value)
            }
            className="w-40 px-3 py-1.5 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent font-sans"
          />

          <Button
            variant="copper"
            size="sm"
            className="h-8"
            onClick={saveTarget}
          >
            Save
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="h-8"
            onClick={() => setShowEdit(false)}
          >
            Cancel
          </Button>
        </div>
      )}

      <Progress
        value={pct}
        className="h-3 mb-2"
      />

      <div className="flex justify-between text-xs text-muted-foreground font-sans">
        <span>
          Achieved: ₹
          {(achieved / 100000).toFixed(1)}L
        </span>

        <span>
          Target: ₹
          {(targetAmount / 100000).toFixed(1)}L
        </span>
      </div>
    </div>
  );
};