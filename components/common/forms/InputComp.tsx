import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { FC, forwardRef, Fragment, ReactNode } from "react";
import { ControllerRenderProps } from "react-hook-form";

interface InputCompType {
  (props: { children?: ReactNode }): JSX.Element;
  Default: FC<VariantType>;
}

interface VariantType extends React.InputHTMLAttributes<HTMLInputElement> {
  hasLabel?: boolean;
  placeholder: string;
  label?: string;
  suffixIcon?: React.ReactNode;
  clear?: boolean;
  field: ControllerRenderProps<any, any>;
}

const InputComp: InputCompType = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

const Default = forwardRef<HTMLInputElement, VariantType>(
  (
    {
      placeholder,
      label,
      className,
      suffixIcon,
      clear,
      type = "text",
      field,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <FormItem className="w-full">
        {label && (
          <FormLabel className="text-secondary font-medium">{label}</FormLabel>
        )}
        <FormControl {...field}>
          <Input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className={cn(className, "h-[45px] rounded-lg")}
            suffix={suffixIcon}
            clear={clear}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

Default.displayName = "Default";

InputComp.Default = Default;

export default InputComp;
