import React, { FC, cloneElement, useState } from 'react';
import styled from 'styled-components';
import { gridSize, borderRadius, layers, colors } from '@theme/constants';
import {
  Placement,
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  FloatingFocusManager
} from "@floating-ui/react-dom-interactions";


interface Props {
  render: (data: {
    close: () => void;
    labelId: string;
    descriptionId: string;
  }) => React.ReactNode;
  placement?: Placement;
  children: JSX.Element;
  onOpenChange: any;
}

const Container = styled.div`
display: flex;
flex-grow: 1;
`;

const Popover: FC<Props> = ({ 
  children = <>Hi</>,
  render,
  placement,
  onOpenChange
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange(open);
  };

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: handleOpenChange,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate
  });

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context)
  ]);

  return (
    <>
      {cloneElement(
        children,
        getReferenceProps({ ref: reference, ...children.props })
      )}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={["reference", "content"]}
          returnFocus={false}
        >
          <>
            {render({
              ...getFloatingProps({
                className: "Popover",
                ref: floating,
                style: {
                  position: strategy,
                  top: y ?? 0,
                  left: x ?? 0
                },
                "aria-labelledby": labelId,
                "aria-describedby": descriptionId
              }),
              close: () => {
                setOpen(false);
              },
              labelId: labelId,
              descriptionId: descriptionId
            })}
          </>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default Popover;
