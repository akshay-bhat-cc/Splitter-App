export interface HeaderProps {
  // Add your props here
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="text-green font-bold tracking-[0.5rem] text-[1.25rem] md:tracking-[0.47rem] leading-[2.25rem]">
      <h2>{label.substring(0, label.length / 2)}</h2>
      <h2>{label.substring(label.length / 2)}</h2>
    </div>
  );
};
