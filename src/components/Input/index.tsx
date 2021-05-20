import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { colors } from '../../style/colors';

import { Container, Error } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
const Input: React.FC<IInputProps> = ({ name, icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, error, registerField, clearError } =
    useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setHasValue(Boolean(inputRef.current?.value));
  }, []);

  const handleClearError = useCallback(() => {
    if (error) {
      clearError();
    }
  }, [clearError, error]);

  return (
    <Container
      isFocused={isFocused}
      hasValue={hasValue}
      hasError={Boolean(error)}
    >
      {Icon && <Icon size={20} />}
      <input
        onChange={handleClearError}
        onFocus={handleFocus}
        onBlur={handleBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color={colors.error} size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
