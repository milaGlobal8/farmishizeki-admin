import { FormProps } from "./Form.types";

const Form = (props: FormProps) => {
  const { children, className, onSubmit } = props;

  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
