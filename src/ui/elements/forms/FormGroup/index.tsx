import React from 'react';

interface FormGroupProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  label: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({ label, children, ...props }) => {
  return (
    <div>
      <label className="text-sm text-gray-600" {...props}>
        {label}
      </label>
      {children}
    </div>
  );
};
