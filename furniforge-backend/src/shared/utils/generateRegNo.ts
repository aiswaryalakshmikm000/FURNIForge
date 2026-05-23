interface GenerateRegNoParams {
  prefix: string;
  sequence: number;
}

export const generateRegNo = ({
  prefix,
  sequence,
}: GenerateRegNoParams): string => {
  
  const formattedSequence = String(sequence);

  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${prefix}${formattedSequence}${day}/${month}/${year}`;
};